(function() {
	
	new Vue({
		name: 'Gallery-GetImage',
		el: '#gallery',
		data: {
			load: true,
			emptyStore: true,
			storageImage: ''
		},
		mounted() {
			let store = localStorage.getItem('Images-Gallery');
			if( store == '' || store == undefined || store == null ) {
				this.emptyStore = true;
				this.textGallery = 'Galeria vazia'
				this.removeLoad();
				return false
			}
			this.emptyStore = false;
			this.removeLoad();
		},
		methods: {
			removeLoad() {
				let vm = this;
				setTimeout( ()=> {
					vm.load = false;
					this.storageImage = localStorage.getItem('Images-Gallery');
				}, 1500)
			}
		}
	});

})();