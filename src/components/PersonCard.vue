<template lang="pug">
	div.wrapper
		section.table
			ul.person-table
				li.person-table__item
					div Name
					div {{ selectedPerson.name }}
				li.person-table__item
					div City
					div {{ selectedPerson.city }}
				li.person-table__item
					div Position
					div {{ selectedPerson.position }}
				li.person-table__item
					div Age
					div {{ selectedPerson.age }}
		button.person__search-button(@click='back') Back to list
</template>

<script>
export default {
	methods: {
		back() {
			this.$router.push({ path: '/person-list' });
		}
	},
	computed: {
		selectedPerson() {
			return this.$store.state.selectedPerson;
		}
	}
}
</script>
