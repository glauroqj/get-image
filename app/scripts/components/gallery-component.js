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

		}
	});

})();