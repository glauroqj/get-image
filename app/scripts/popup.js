(function() {

	new Vue({
		name: 'Get-Image',
		el: '#getImage',
		data: {
			version: '0.0.9',
		},
		mounted() {

		},
		created() {
			/* call ACTION to load info from localstore */
			window.store_popup.dispatch('popupLoadAction');
		},
		computed: {
			state() {
				return window.store_popup.getters.popupActualStateGetter;
			}
		},
		methods: {
			selectImage() {
				window.store_popup.dispatch('selectImageAction');
			},
			openGallery() {
				window.store_popup.dispatch('openGalleryAction');
			}
		}
	});

})();
