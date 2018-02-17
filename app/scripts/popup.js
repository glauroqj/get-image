(function() {

	new Vue({
		name: 'Get-Image',
		el: '#getImage',
		data: {
			title: 'OLAR'
		},
		mounted() {
			console.log('CARREGOU ')
		},
		methods: {
			selectImage() {

				chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
					chrome.tabs.sendMessage(tabs[0].id, {"message": "insert_class_on_body"}, function(response) {
						console.log(response);
					});
				});

			}
		}
	});


})();