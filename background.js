let activeTabs = {}; 
let backgroundTabs = {}; 

chrome.tabs.onActivated.addListener(({ tabId, windowId }) => {
    console.log(tabId,windowId);
  handleTabActivation(tabId, windowId);
});

chrome.tabs.onRemoved.addListener((tabId) => {
  handleTabClosure(tabId);
});

chrome.tabs.onCreated.addListener((tab) => {
  if (!tab.active) {
    backgroundTabs[tab.id] = Date.now(); 
  }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.active && backgroundTabs[tabId]) {
    handleTabActivation(tabId);
    delete backgroundTabs[tabId]; 
  }
});

chrome.windows.onFocusChanged.addListener((windowId) => {
  if (windowId === chrome.windows.WINDOW_ID_NONE) return; 
  chrome.tabs.query({ active: true, windowId: windowId }, (tabs) => {
    if (tabs.length > 0) {
      handleTabActivation(tabs[0].id, windowId);
    }
  });
});


function handleTabActivation(tabId, windowId) {
  const currentTime = Date.now();
  if (!activeTabs[tabId]) {
    activeTabs[tabId] = currentTime;
  }

  for (const activeTabId in activeTabs) {
    if (parseInt(activeTabId) !== tabId) {
      const timeSpent = currentTime - activeTabs[activeTabId];
      saveTime(parseInt(activeTabId), timeSpent);
      delete activeTabs[activeTabId]; 
    }
  }
}

function handleTabClosure(tabId) {
  if (activeTabs[tabId]) {
    const timeSpent = Date.now() - activeTabs[tabId];
    saveTime(tabId, timeSpent);
    delete activeTabs[tabId];
  }
}


function saveTime(tabId, timeSpent) {
    const tabIdKey = String(tabId); 
    
  
    console.log("Saving time for tab:", tabIdKey, "Time spent:", timeSpent);
    
    chrome.storage.local.get([tabIdKey], (result) => {
      const totalTime = (result[tabIdKey] || 0) + timeSpent;
  
      console.log("Total time before update:", totalTime);
      
      let update = {};
      update[tabIdKey] = totalTime;
      chrome.storage.local.set(update, () => {
        if (chrome.runtime.lastError) {
          console.error("Error setting storage:", chrome.runtime.lastError);
        } else {
            console.log(chrome.runtime.lastError);
          console.log("Time saved successfully for tab:", tabIdKey);
        }
      });
    });
  }
  
