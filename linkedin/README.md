# LinkedIn Jobs Redirect Chrome Extension

A Chrome extension that automatically redirects LinkedIn's main url to the jobs page, helping users focus on job opportunities instead of social media content. 

## Features

- Automatically redirects from LinkedIn main page (`linkedin.com/`) to jobs page (`linkedin.com/jobs/`)
- Redirects from LinkedIn feed (`linkedin.com/feed/`) to jobs page
- Uses `replace()` to avoid cluttering browser history
- Lightweight and fast execution

## Installation

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension directory
5. The extension will be active immediately

## Usage

Once installed, the extension works automatically:

1. Navigate to `linkedin.com` or `linkedin.com/feed/`
2. You'll be automatically redirected to `linkedin.com/jobs/`
3. No additional configuration needed

## Files

- `manifest.json` - Extension configuration and permissions
- `content.js` - Main script that handles the redirection logic
- `README.md` - This documentation file

## Permissions

The extension requires:
- `activeTab` - To access the current tab
- `*://www.linkedin.com/*` - To run on LinkedIn pages

## Notes

- The extension only works on LinkedIn.com
- It uses `window.location.replace()` to avoid creating browser history entries
- Runs at `document_start` for immediate redirection

## Customization

To modify the target URL, edit the `jobsUrl` variable in `content.js`:

```javascript
const jobsUrl = 'https://www.linkedin.com/jobs/'; // Change this to your preferred LinkedIn page
```