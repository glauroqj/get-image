(function() {

	/* reset all localstorage, to implementation paths with base64 */
	const today = moment().format('DD/MM/YYYY');
	if( today == '08/03/2018' ) {
		console.log('Reset localStorage, update to path encode64: 08/03/2018')
		localStorage.removeItem('Images-Gallery');
	}

	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

		let store = localStorage.getItem('Images-Gallery');

		if( store == '' || store == undefined || store == null ) {
			let arr = [];
			/* convert path to base64 */
			let encode = window.btoa(request.link)
			console.log(request.link)
			console.log(encode)
			arr.push(encode)
			localStorage.setItem('Images-Gallery', arr);

			// insertMessage('message', 'Imagem enviada para galeria!');
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
				chrome.tabs.sendMessage(tabs[0].id, {"message": "insert_message_gallery"}, function(response) {
					console.log(response);
				});
			});

			// window.open(request.link);
			chrome.tabs.create({url: request.link, active: false});
			return false;
		}

		/* get new store and create encode again */
		let arrayStore = store.split(',');
		let encode = window.btoa(request.link);
		console.log(arrayStore)


		/* verify if link exist on storage */
		let hasLinkOnStorage = false; 
		arrayStore.filter(function(value, index) {
			console.log(value, encode)
			if( value == encode ) {
				hasLinkOnStorage = true;
				return false;
			}
		});


		if( !hasLinkOnStorage ) {
			/* convert path to base64 */
			let encode = window.btoa(request.link)
			console.log(request.link)
			arrayStore.push(encode)
			localStorage.setItem('Images-Gallery', arrayStore);

			// insertMessage('message', 'Imagem enviada para galeria!');
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
				chrome.tabs.sendMessage(tabs[0].id, {"message": "insert_message_gallery"}, function(response) {
					console.log(response);
				});
			});

			// window.open(request.link);
			chrome.tabs.create({url: request.link, active: false});
			return false;
		}

		// insertMessage('message', 'Imagem já está na galeria!');
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {"message": "insert_message_on_gallery"}, function(response) {
				console.log(response);
			});
		});
		// window.open(request.link);
		chrome.tabs.create({url: request.link, active: false});

	});

})();