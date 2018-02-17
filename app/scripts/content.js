(function() {

	chrome.runtime.onMessage.addListener(
		function(request, sender, sendResponse) {
			if( request.message === "insert_class_on_body" ) {
				$('body').addClass('select-image-time');
			}
		}
	);

})();