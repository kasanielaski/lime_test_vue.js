/* eslint no-new: 0 */

import Vue from 'vue';
import App from './App.vue';
import store from './store.js';
import router from './router.js';


new Vue({
	el: '#app',
	store,
	router,
	render: h => h(App)
});
