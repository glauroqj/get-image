(function() {

	new Vue({
		name: 'Get-Image',
		el: '#getImage',
		data: {
			emptyStore: true,
			textGallery: ''
		},
		mounted() {
			let store = localStorage.getItem('Images-Gallery');
			console.log(store)
			if( store == '' || store == undefined || store == null ) {
				this.emptyStore = true;
				this.textGallery = 'Galeria vazia'
				return false
			}
			this.emptyStore = false;
			this.textGallery = 'Galeria'

		},
		methods: {
			selectImage() {

				chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
					chrome.tabs.sendMessage(tabs[0].id, {"message": "insert_class_on_body"}, function(response) {
						console.log(response);
					});
				});

			},
			openGallery() {

				chrome.tabs.create({
					url: chrome.extension.getURL('pages/gallery.html'),
					active: true
				}, function(tab) {
					chrome.windows.create({
						tabId: tab.id,
						type: 'tab',
						focused: true
					});
				});

			}
		}
	});

})();