(function() {

	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		if( request.message === "insert_class_on_body" ) {
			imageChoice();
			insertAlert();
		}

		if( request.message === "insert_message_gallery" ) {
			insertMessage('message', 'sended to gallery! Image in another tab');
		}

		if( request.message === "insert_message_on_gallery" ) {
			insertMessage('message', 'on gallery! Image in another tab');
		}

	});

	let queueImage = [];

	function imageChoice() {

		/* insert global class */
		$('body').addClass('find-all-images');

		$('body').on('click', 'img', function(event) {
			event.preventDefault();
			/* Act on the event */
			let path = event.currentTarget.src

			let verifyString = path.split(':');

			// console.log(verifyString)

			if ( event.currentTarget.localName == 'img' && verifyString[0] != 'data' ) {

				// console.log(event)

				// console.log( $(this).parent() )

				// console.log( $(this).parents()[1] )

				// console.log( $(this).closest() )

				/* send to background.js */

				chrome.runtime.sendMessage({link: path}, function(response) {
					console.log('Send to background.js' + path);
				});


				// let store = localStorage.getItem('Images-Gallery');

				// if( store == '' || store == undefined || store == null ) {
				// 	let arr = [];
				// 	arr.push(path)

				// 	localStorage.setItem('Images-Gallery', arr);
				// 	chrome.storage.local.set(arr, function(){});
				// 	insertMessage('message', 'Imagem enviada para galeria!');
				// 	window.open(path);
				// 	return false;
				// }

				// let arrayStore = store.split(',');
				// console.log(arrayStore)


				// /* verify if link exist on storage */
				// let hasLinkOnStorage = false; 
				// arrayStore.filter(function(value, index) {
				// 	if( value == path ) {
				// 		hasLinkOnStorage = true;
				// 		return false;
				// 	}
				// });


				// if( !hasLinkOnStorage ) {
				// 	arrayStore.push(path)
				// 	localStorage.setItem('Images-Gallery', arrayStore);
				// 	chrome.storage.local.set(arrayStore, function(){});
				// 	insertMessage('message', 'Imagem enviada para galeria!');
				// 	window.open(path);
				// 	return false;
				// }

				// window.open(path);
				// insertMessage('message', 'Imagem já está na galeria!');


			}

			// console.log('ENTRANDO: '+path)


		});

	}


	let bodyMessage = null;
	let queueMessage = [];

	function insertMessage(action, text) {
		// $(bodyMessage).remove();
		bodyMessage = $('<div id="message'+queueMessage.length+'" class="message-global-image">'+text+'</div>');

		queueMessage.push(bodyMessage);

		console.log(queueMessage)

		$(bodyMessage).appendTo('body');

		if( action == 'message' ) {			

			$(bodyMessage).animate({
				left: '30px'
			});
			removeMessage();

		}

	}

	function removeMessage() {
		setTimeout(function() {

			while ( queueMessage.length > 0 ) {

				let id = queueMessage.length - 1;
				queueMessage.splice(-1);
				$('#message'+id).animate({
					left: '-350px'
				}, function() {
					setTimeout(function() {
						$('#message'+id).remove();
					}, 850);
				});
				
			}

		}, 3000);
	}

	function insertAlert() {
		let alertOn = $('<div class="alert-on">Get Image Active</div>');

		if( $('.alert-on').html() ) {
			return false;
		}

		$(alertOn).appendTo('body');

		$(alertOn).animate({
			left: '30px'
		});
	}


})();