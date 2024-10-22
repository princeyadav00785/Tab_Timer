chrome.storage.local.get(null, (data) => {  
    const container = document.getElementById('tabUsageContainer');
    
    container.innerHTML = '';
    console.log(data);
    for (const [tabId, timeSpent] of Object.entries(data)) {
      if (typeof timeSpent === 'number') {
        chrome.tabs.get(parseInt(tabId), (tabInfo) => {
          const tabDiv = document.createElement('div');
          tabDiv.className = 'tab-data';
  
          const faviconUrl = new URL('/favicon.ico', tabInfo.url).href;
  
          const tabIcon = document.createElement('img');
          tabIcon.src = faviconUrl;
          tabIcon.className = 'tab-icon';  
          tabIcon.alt = 'Favicon';
          tabIcon.width = 16;  
          tabIcon.height = 16;
  
          const timeInMinutes = (timeSpent / 60000).toFixed(2);
          const tabName = tabInfo.title || tabInfo.url;
  
          tabDiv.innerHTML = `
            <div>
              <div class="tab-title">${tabName}</div>
              <div class="tab-time">Time Spent: ${timeInMinutes} mins</div>
            </div>
          `;
  
          tabDiv.insertBefore(tabIcon, tabDiv.firstChild);
  
          container.appendChild(tabDiv);
        });
      }
    }
  });
  