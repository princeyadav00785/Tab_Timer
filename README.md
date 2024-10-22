# Tab Usage Tracker - Chrome Extension

**Tab Usage Tracker** is a Chrome extension that tracks the time you spend on different browser tabs. The extension presents the tracked time in a user-friendly popup, showing the name of each tab along with its favicon and the total time spent. This helps users monitor their browsing habits across various websites.

## Features

- **Track Active Time**: Monitor the time spent on each active tab.
- **Favicon Display**: Displays the favicon (default icon) of each tab alongside the tab's name.
- **Human-Readable Tab Names**: Shows the title of each tab (or URL if the title is not available).
- **Time Display**: The time spent on each tab is shown in minutes for better readability.
- **Interactive UI**: Responsive design with hover effects for a modern and intuitive user experience.

## Technologies Used

- **JavaScript (Chrome Extension APIs)**: For tracking tab usage and interacting with Chrome's tabs and storage APIs.
- **HTML**: To structure the popup UI.
- **CSS**: For styling the popup, including flexbox layout, shadows, and hover effects.
- **Font Awesome (Optional)**: Used for icons (optional).

## Installation

1. Clone or download this repository.
   
   ```bash
   git clone https://github.com/yourusername/tab-usage-tracker.git
   ```

2. Open **Chrome** and navigate to the **Extensions** page by entering the following URL in the address bar:
   
   ```
   chrome://extensions/
   ```

3. Enable **Developer Mode** by toggling the switch in the top-right corner of the page.

4. Click on **Load unpacked** and select the folder where the extension files are located.

5. The extension should now appear in your Chrome toolbar. Click the icon to open the popup and view your tab usage.

## How It Works

1. **Tracking Time**: The extension tracks the amount of time a user spends on each active tab by monitoring when a tab becomes active or is closed.
   
2. **Storing Data**: The time spent on each tab is stored locally in Chrome’s storage (`chrome.storage.local`), ensuring the data persists even after closing the popup.

3. **Displaying Data**: When the user opens the extension's popup, it retrieves the stored time for each tab and displays it alongside the tab's title and favicon.

## Popup Layout

- **Favicon**: The small icon that represents the website (extracted from the tab's URL).
- **Tab Title**: The name of the tab (or URL if the title is not available).
- **Time Spent**: The total time spent on the tab in minutes.

Here’s an example of the popup's layout:

```
[ Favicon ]   Tab Title
              Time Spent: 45.78 mins
```

## Folder Structure

```bash
tab-usage-tracker/
│
├── popup.html         # HTML file for the extension popup
├── popup.js           # JavaScript file to handle data retrieval and display
├── background.js      # Background script for tracking tab activity
├── manifest.json      # Configuration file for the Chrome extension
├── README.md          # Project README file
└── assets/            # (Optional) Folder to store additional assets like images
```

## manifest.json

Here’s the key setup for the `manifest.json` file:

```json
{
  "manifest_version": 3,
  "name": "Tab Usage Tracker",
  "description": "Track time spent on each tab and display it in a popup.",
  "version": "1.0",
  "permissions": [
    "tabs",
    "storage"
  ],
  "background": {
    "service_worker": "background.js"
  },
  "action": {
    "default_popup": "popup.html",
    "default_icon": "icon.png"
  }
}
```

### Permissions:
- **tabs**: Required to access tab information such as titles and URLs.
- **storage**: Required to store the time spent on each tab.

## Customization

1. **Changing Icons**: You can use Font Awesome icons or any other icon library to enhance the visual appeal of the extension. You can change the icon based on the tab's URL.
   
2. **Styling**: The popup is styled with simple CSS. You can customize it by editing the `popup.html` and `popup.js` files to fit your preferences.

## Contributing

Feel free to fork this project, make improvements, and submit pull requests. Contributions are welcome!


## Screenshots

### Time Tracking Example

![Time Tracking Screenshot](./assets/i1.jpg)