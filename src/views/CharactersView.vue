<template>
	<div>
		Character kartice
		<CharacterCard />
	</div>
</template>

<script>
import axios from "axios";
import CharacterCard from "../components/CharacterCard.vue";

export default {
	name: "CharacterView",
	components: {
		CharacterCard,
	},
	props: [],
	data() {
		return {
			baseUrl: "https://rickandmortyapi.com/api",
		};
	},
	methods: {
		async getCharacters() {
			try {
				const response = await axios.get(this.baseUrl + "/character");
				console.log(response);
			} catch (error) {
				console.error(error);
			}
		},
		async getEpisodes() {
			try {
				const response = await axios.get(this.baseUrl + "/location");
				console.log(response);
			} catch (error) {
				console.error(error);
			}
		},
		async getLocations() {
			try {
				const response = await axios.get(this.baseUrl + "/episode");
				console.log(response);
			} catch (error) {
				console.error(error);
			}
		},
	},
	created() {
		this.getCharacters();
		this.getEpisodes();
		this.getLocations();
		debugger;
	},
};
</script>
