(function() {

	Vue.component('gallery', {
		template: '#gallery-component',
		name: 'gallery',
		props: {
			images: '',
			empty: '',
			loading: Boolean
		},
		data() {
			return {
				gridImages: ''
			}
		},
		mounted() {

		},
		computed: {

		},
		methods: {
			galleryCallModal(ID) {
				/* emit to father gallery, show modal */
				console.log('SHOW MODAL'+ ID);
				this.$root.$emit('call_modal', ID);
			}
		}
	});

})();