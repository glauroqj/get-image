/*
  State Tree: An object containing the data.
  Getters: Used to access data from the state tree of the store.
  Mutations: Handler functions that perform modifications of data in the state tree.
  Actions: Functions that commit mutations. The main difference to Mutations is that Actions can contain asynchronous operations.

  */

  (function() {

  	const gallery = {
  		mutations: {
  			galleryLoadMutation(state, payload) {
  				window.store_gallery.state.gallery = payload;
          /* remove loading */
          window.store_gallery.dispatch('setLoading', false);
  			},
        galleryLoadingMutation(state, payload) {
          window.store_gallery.state.loading = payload;
        }
      }, /* mutations */
      actions: {
        setLoading(state, action) {
          console.log('Loading... ', state, action)
          if( action == true ) {
            window.store_gallery.commit('galleryLoadingMutation', action);
            return false;
          }
          /* removing loading timeout 750ms */
          setTimeout(()=> {
            window.store_gallery.commit('galleryLoadingMutation', action);
          }, 750);
        },
        galleryLoadAction() {
          /* init load */
          let localStorageImages = localStorage.getItem('Images-Gallery');

          if( localStorageImages == '' || localStorageImages == undefined || localStorageImages == null ) {
            /* if localstorage is empty, show placeholder empty */
            let payload = {
              countImages: '',
              emptyStore: true,
              textGallery: 'Empty gallery'
            }
            window.store.commit('galleryLoadMutation', payload);
            return false
          }

          /* if is gallery is filled */
          let storageImage = localStorageImages.split(',');

          storageImage.map( (value, index)=> {
            storageImage[index] = window.atob(value);
          });

          let payload = {
            countImages: storageImage,
            emptyStore: false,
            textGallery: '',
          }
          window.store_gallery.commit('galleryLoadMutation', payload);
          /* call MUTATION to change store state */
          /* window.store.commit('organizerSetHostIndex', payload); */

        },
      }, /* actions */
      getters: {
        galleryActualLoading() {
          return store_gallery.state.loading;
        },
        galleryActualStateGetter() {
          return store_gallery.state.gallery;
        }
      }

    };

    window.store_gallery = new Vuex.Store({
      state: {
       gallery: {},
       loading: true
     },
     modules: {
       gallery: gallery
     }
   });

  })();