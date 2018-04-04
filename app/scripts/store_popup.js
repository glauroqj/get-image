/*
  State Tree: An object containing the data.
  Getters: Used to access data from the state tree of the store.
  Mutations: Handler functions that perform modifications of data in the state tree.
  Actions: Functions that commit mutations. The main difference to Mutations is that Actions can contain asynchronous operations.

  */

  (function() {

  	const popup = {
  		mutations: {
  			popupLoadMutation(state, payload) {
  				window.store_popup.state.popup = payload;
  			},
  			// organizerSetHostIndex: function(state, payload) {
  			// 	window.store.state.organizer.host = payload;
  			// },
  			// organizerReseted: function(state, payload) {
  			// 	window.store.state.organizer.host = payload;
  			// }
  		}, /* mutations */
  		actions: {
  			popupLoadAction() {
  				let localStorageImages = localStorage.getItem('Images-Gallery');

  				if( localStorageImages == '' || localStorageImages == undefined || localStorageImages == null ) {
  					let payload = {
  						countImages: '',
  						emptyStore: true,
  						textGallery: 'Empty gallery'
  					}
  					window.store_popup.commit('popupLoadMutation', payload);
  					return false
  				}

  				let payload = {
  					countImages: localStorageImages.split(','),
  					emptyStore: false,
  					textGallery: 'Gallery'
  				}
  				window.store_popup.commit('popupLoadMutation', payload);
  				/* call MUTATION to change store state */
  				// window.store.commit('organizerSetHostIndex', payload);

  			},
  			selectImageAction() {
  				chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  					chrome.tabs.sendMessage(tabs[0].id, {"message": "insert_class_on_body"}, function(response) {
  						console.log(response);
  					});
  				});
  			},
  			openGalleryAction() {
  				chrome.tabs.create({
  					url: chrome.extension.getURL('gallery.html'),
  					active: true
  				}, function(tab) {
  					chrome.windows.create({
  						tabId: tab.id,
  						type: 'tab',
  						focused: true
  					});
  				});
  			}
  			// organizerSetHostByIndex: function(state, index) {

  			// 	var host = window.store.getters.organizerActualState.eventHosts;
  			// 	var payload = {
  			// 		EVENT_HOST_ID: host[index].EVENT_HOST_ID,
  			// 		NAME: host[index].NAME,
  			// 		DESCRIPTION: host[index].DESCRIPTION,
  			// 		USER_ID: host[index].USER_ID
  			// 	};

  			// 	window.store.commit('organizerSetHostIndex', payload);
  			// },
  			// organizerReset: function(state, index) {
  			// 	var host = window.store.getters.organizerActualState.eventHosts;
  			// 	var payload = {
  			// 		EVENT_HOST_ID: '-1',
  			// 		NAME: '',
  			// 		DESCRIPTION: '',
  			// 		USER_ID: host[index].USER_ID
  			// 	};
  			// 	window.store.commit('organizerReseted', payload);
  			// }
  		}, /* actions */
  		getters: {
  			popupActualStateGetter() {
  				return store_popup.state.popup;
  			}
  		}

  	};

  	window.store_popup = new Vuex.Store({
  		state: {
  			popup: {}
  		},
  		modules: {
  			popup: popup
  		}
  	});

  })();