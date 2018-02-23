(function() {

	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

		console.log(request.link)

		let store = localStorage.getItem('Images-Gallery');

		if( store == '' || store == undefined || store == null ) {
			let arr = [];
			arr.push(request.link)
			localStorage.setItem('Images-Gallery', arr);

			// insertMessage('message', 'Imagem enviada para galeria!');
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
				chrome.tabs.sendMessage(tabs[0].id, {"message": "insert_message_gallery"}, function(response) {
					console.log(response);
				});
			});

			window.open(request.link);
			return false;
		}

		let arrayStore = store.split(',');
		console.log(arrayStore)


		/* verify if link exist on storage */
		let hasLinkOnStorage = false; 
		arrayStore.filter(function(value, index) {
			if( value == request.link ) {
				hasLinkOnStorage = true;
				return false;
			}
		});


		if( !hasLinkOnStorage ) {
			arrayStore.push(request.link)
			localStorage.setItem('Images-Gallery', arrayStore);

			// insertMessage('message', 'Imagem enviada para galeria!');
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
				chrome.tabs.sendMessage(tabs[0].id, {"message": "insert_message_gallery"}, function(response) {
					console.log(response);
				});
			});

			window.open(request.link);
			return false;
		}

		// insertMessage('message', 'Imagem já está na galeria!');
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {"message": "insert_message_on_gallery"}, function(response) {
				console.log(response);
			});
		});
		window.open(request.link);

	});

})();