import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import PersonList from './components/PersonList.vue';
import PersonCard from './components/PersonCard.vue';

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'App',
			component: App
		},
		{
			path: '/person-list',
			name: 'PersonList',
			component: PersonList
		},
		{
			path: '/person-card',
			name: 'PersonCard',
			component: PersonCard
		}
	]
});
