(function() {

	Vue.component('modal', {
		template: '#modal-component',
		name: 'modal',
		props: {
			id: '',
			show: Boolean
		},
		data() {
			return {

			}
		},
		mounted() {

		},
		computed: {

		},
		methods: {
			confirmToRemove() {
				/* emit to father gallery, to remove image from storage */
				this.$root.$emit('remove_image');
			},
			closeModal() {
				this.$root.$emit('close_modal');
			}
		}
	});

})();