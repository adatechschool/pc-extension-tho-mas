chrome.runtime.onInstalled.addListener(()=>{
    chrome.storage.sync.set( { hide: true },()=>{
        console.log("Hide image is on");
    });
});

chrome.declarativeContent.onPageChanged.removeRules(undefined, ()=>{
    chrome.declarativeContent.onPageChanged.addRules([{
        conditions:[new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'www.quora.com'},
        })],
        actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
});