chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (/^(?=.*udemy.com)(?=.*course)(?=.*learn)(?=.*quiz)(?=.*test)/.test(tab.url)) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['assets/js/shuffle.js'],
        });
        chrome.scripting.insertCSS({
            target: { tabId: tab.id },
            files: ['assets/css/shuffle.css'],
        });
    }
});