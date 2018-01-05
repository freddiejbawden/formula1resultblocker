chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (tab.active) {
    chrome.tabs.sendMessage(tab.id, {
      command: "scan_page",
      title: "hoge"
    },
    function(msg) {
      console.log("result message:", msg);
    });
  }



});
