$(function() {
	chrome.tabs.getAllInWindow(undefined, function(tabs) {
		for (var i = 0, tab; tab = tabs[i]; i++) {
			createTabWindow(tab);
		}
	});
});

function createTabWindow(tab) {
//	chrome.tabs.captureVisibleTab(tab.windowId, undefined, function(imgUrl) {
		$('body')
			.append($('<div>').height(50).width(50).css('float', 'left')
				.append($('<a>').attr("href", tab.url)
					.append($('<img>').width(16).height(16).attr('src', tab.favIconUrl))
				)
				.append($('<td>')
					.append($('<a>').attr("href", tab.url).html(tab.title))
				)
		)
//	});
}

