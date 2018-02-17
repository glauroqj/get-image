(function() {

	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		if( request.message === "insert_class_on_body" ) {
			$('body').addClass('select-image-time');
			watchImageChoice();
		}
	});


	function watchImageChoice() {
		
		$('body').each(function(index, el) {
			$('a').removeAttr('href');
			// console.log( $('a img').attr('src') )
		});

		$('body').on('click', 'img', function(event) {
			event.preventDefault();
			/* Act on the event */
			let path = event.currentTarget.src

			console.log('ENTRANDO: '+path)

			convertImage(path);

			// window.open(image.src)


		});

	}

	function convertImage(path) {
		let image = new Image();
		image.src = path;

		let w = window.open('');
		w.document.write(image.outerHTML);

	}

})();