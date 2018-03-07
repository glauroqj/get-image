(function() {

	Vue.component('gallery', {
		template: '#gallery-component',
		name: 'gallery',
		props: {
			images: '',
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

		}
	});

})();