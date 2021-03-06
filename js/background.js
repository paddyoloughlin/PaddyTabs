
var managerTab = "manager.html";

function openManagerTab() {
    // Check all the tabs in this window to see if one of them is the manager page.
    // If so, select it. If not, open the manager page.
    chrome.tabs.getAllInWindow(undefined, function(tabs) 
    {
        for (var i = 0, tab; tab = tabs[i]; i++)
        {
            if (tab.url && tab.url == chrome.extension.getURL(managerTab))
            {
                chrome.tabs.update(tab.id, {selected: true});
                return;
            }
        }
        chrome.tabs.create({url: managerTab});
    });
}

chrome.browserAction.onClicked.addListener(function(tab) {
    openManagerTab();
});
