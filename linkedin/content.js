// LinkedIn Jobs Redirect Content Script
// Redirects LinkedIn main feed to jobs page

(function() {
    'use strict';
    
    // Check if we're on LinkedIn main page or feed
    const currentUrl = window.location.href;
    const isMainPage = currentUrl === 'https://www.linkedin.com/' || 
                      currentUrl === 'https://www.linkedin.com/feed/' ||
                      currentUrl.match(/^https:\/\/www\.linkedin\.com\/(feed\/)?(\?.*)?$/);
    
    if (isMainPage) {
        // Redirect to jobs page
        const jobsUrl = 'https://www.linkedin.com/jobs/';
        
        // Use replace to avoid creating a history entry
        window.location.replace(jobsUrl);
    }
})();