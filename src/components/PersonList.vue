<template lang="pug">
	div.wrapper
		section.person
			|City 
			select.person__city-select(v-model='citySelect' v-on:change='selectCity')
				option(v-for='city in cities' :value='city') {{ city }}
			br
			|Position 
			select.person__position-select(v-model='positionSelect')
				option(v-for='pos in positions' :value='pos') {{ pos }}
			button.person__search-button(@click='search') Search
		section.table
			ul.person-table
				li.person-table__item
					div.person-table__item-header Name
					div.person-table__item-header Age
				li.person-table__item(v-for='p in personList' @click='selectPerson(p)')
					div {{ p.name }}
					div {{ p.age }}
</template>

<script>
export default {
	data() {
		return {
			citySelect: '',
			positionSelect: '',
			personList: [],
			personsInCity: [],
			positions: [],
		}
	},
	methods: {
		selectCity() {
			this.personsInCity = [];
			
			for (let i = 0; i < this.persons.length; i++) {
				if (this.persons[i]['city'] === this.citySelect) {
					this.personsInCity.push(this.persons[i]);
				}
			}

			for ({ position } of this.personsInCity) {
				this.positions.push(position);
			}
		},
		selectPerson(p) {
			this.$store.commit('selectPerson', p);
			this.$router.push({ path: '/person-card' });
		},
		search() {
			if (this.citySelect !== '' && this.positionSelect !== '') {
				for (let i = 0; i < this.personsInCity.length; i++) {
					if (this.personsInCity[i]['position'] === this.positionSelect) {
						this.personList = [];
						this.personList.push(this.personsInCity[i]);
					}
				}
			}
		}
	},
	computed: {
		persons() {
			return this.$store.state.persons;
		},
		cities() {
			return this.$store.state.cities;
		}
	},
	created() {
		this.personList = this.persons;
	}
}
</script>

<style lang="scss">
.wrapper {
	width: 40vw;
	margin: 0 auto;
	margin-top: 10vh;
	padding: 2vh;
	border-radius: 5px;
	border: 1px solid gray;
	background-color: lightseagreen;
}

.person__city-select {
	width: 6vw;
	height: 4vh;
	border-radius: 3px;
	background-color: lightcyan;
	border: 1px solid darken(lightcyan, 10%);
	margin-bottom: 1vh;
	margin-right: 2vw;
	&:focus {
		outline: none;
	}
}

.person__position-select {
	@extend .person__city-select;
}

.person__search-button {
	height: 4vh;
	border-radius: 3px;
	background-color: lightcyan;
	border: 1px solid darken(lightcyan, 10%);
	&:focus {
		outline: none;
	}
	&:active {
		background-color: darken(lightcyan, 10%);
	}
}

.person-table {
	width: 50%;
	margin: 5vh auto;
	list-style-type: none;
	-webkit-padding-start: 0;
	&__item {
		display: flex;
		justify-content: space-between;
		background-color: lightcyan;
		height: 5vh;
		padding: 1vh 1vw;
		border-top: 1px solid gray;
		&-header {
			font-weight: bold;
		}
	}
	&:last-child {
		border-bottom: 1px solid gray;
	}
}
</style>
