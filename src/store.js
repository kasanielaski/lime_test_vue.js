import Vue from 'vue';
import Vuex from 'vuex';

import persons from './static/persons.json';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		persons,
		cities: [],
		selectedPerson: []
	},
	mutations: {
		addCities(state, cities) {
			this.state.cities = cities;
		},
		selectPerson(state, person) {
			this.state.selectedPerson = person;
		}
	}
});
