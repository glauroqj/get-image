(function() {
	
	new Vue({
		name: 'Gallery-GetImage',
		el: '#gallery',
		data: {
			load: true,
			emptyStore: true,
			storageImage: '',
			imageID: '',
			showModal: false
		},
		mounted() {
			var vm = this;
			let store = localStorage.getItem('Images-Gallery');

			/* encode window.btoa(request.link) */

			console.log( store )

			if ( store == null ) {
				setTimeout( ()=> {
					/* show empty gallery */
					this.emptyStore = true;
					this.load = false;
					return false;
				}, 800);
			}

			if( store == '' || store == undefined || store == null ) {
				this.emptyStore = true;
				this.textGallery = 'Empty gallery'
				this.removeLoad();
				return false
			}
			this.emptyStore = false;
			this.removeLoad();

			/* ON */
			this.$root.$on('call_modal', (ID)=> {
				vm.showModalConfirm(ID);
			})
			this.$root.$on('remove_image', ()=> {
				vm.removeImageFromStorage();
			});
		},
		methods: {
			removeLoad() {
				let vm = this;
				setTimeout( ()=> {
					this.storageImage = localStorage.getItem('Images-Gallery');
					this.storageImage = this.storageImage.split(',');

					this.storageImage.map( (value, index)=> {
						// console.log(value)
						this.storageImage[index] = window.atob(value);
					});

					vm.load = false;
					// console.log( this.storageImage )
					// this.storageImage.map((value, index)=> {
					// 	/* verify if encoded in base64 */
					// 	let verifyLink = value.split(':');
					// 	if( verifyLink[0] != 'https' && verifyLink[0] != 'http' ) {
					// 		/* lets decode */
					// 		// console.log(verifyLink[0])
					// 		// console.log('DECODE')
					// 		let decode = window.atob(verifyLink[0]);
					// 		// console.log('decode: '+decode)
					// 		return false;
					// 	}
					// 	console.log('ELSE')
					// 	let encode = window.btoa(value);
					// 	let decode = window.atob(encode);
					// 	console.log(encode, decode)
					// 	// let decode = window.atob(value);
					// 	// this.push(decode)
					// });

				}, 1500)
			},
			showModalConfirm(ID) {
				console.log('Lets show modal confirm! '+ID);
				this.imageID = ID;
				this.showModal = true;
			},
			removeImageFromStorage() {
				console.log('REMOVE THIS INDEX: '+this.imageID)
				/* remove from DOM */
				this.storageImage.splice(this.imageID, 1);

				/* remove from localstorage */
				let store = localStorage.getItem('Images-Gallery');
				let array = store.split(',');
				array.splice(this.imageID, 1);

				/* new array to localstorage */
				console.log(array)
				localStorage.setItem('Images-Gallery', array);
				this.showModal = false;
			}
		}
	});

})();