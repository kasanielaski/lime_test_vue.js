<template lang="pug">
	router-view
</template>

<script>
import _ from 'lodash';

export default {
	computed: {
		cities() {
			let persons = this.$store.state.persons;
			let towns = [];
			for({city} of persons) {
				towns.push(city);	
			};
			towns = _.uniq(towns);
			return towns;
		}
	},
	created() {
		this.$store.commit('addCities', this.cities);
		this.$router.push({ path: '/person-list' });
	}
}
</script>

<style lang="scss">
	body,
	html {
		margin: 0;
		padding: 0;
	}
</style>
