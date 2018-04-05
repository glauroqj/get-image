(function() {
	/* PropsData Vuejs - https://vuejs.org/v2/api/#propsData */
	new Vue({
		name: 'Gallery-GetImage',
		el: '#gallery',
		propsData: {
			id: '',
			show: false,
		},
		data: {
		},
		mounted() {
			var vm = this;
			/* init loading... */
			window.store_gallery.dispatch('setLoading', true);

			/* encode window.btoa(request.link) */

			// if ( store == null ) {
			// 	setTimeout( ()=> {
			// 		/* show empty gallery */
			// 		this.emptyStore = true;
			// 		this.load = false;
			// 		return false;
			// 	}, 800);
			// }

			// if( store == '' || store == undefined || store == null ) {
			// 	this.emptyStore = true;
			// 	this.textGallery = 'Empty gallery'
			// 	this.removeLoad();
			// 	return false
			// }
			// this.emptyStore = false;
			// this.removeLoad();

			/* ON */
			this.$root.$on('call_modal', (ID)=> {
				// vm.showModalConfirm(ID);
				// console.log('Lets show modal confirm! '+ID);
				window.store_gallery.dispatch('showModalDeleteAction', ID);
			});
			this.$root.$on('close_modal', ()=> {
				// this.showModal = false;
				vm.closeModal();
			});
			this.$root.$on('remove_image', ()=> {
				vm.removeImageFromStorage();
			});
		},
		created() {
			window.store_gallery.dispatch('galleryLoadAction');
		},
		computed: {
			loading() {
				return window.store_gallery.getters.galleryActualLoading;
			},
			state() {
				return window.store_gallery.getters.galleryActualStateGetter;
			},
			modal() {
				return window.store_gallery.getters.galleryActualModal;
			}
		},
		methods: {
			closeModal() {
				window.store_gallery.dispatch('closeModalDeleteAction');
			},
			removeImageFromStorage() {
				// console.log('REMOVE THIS INDEX: ');
				window.store_gallery.dispatch('confirmRemoveImageAction');
			}
		}
	});

})();