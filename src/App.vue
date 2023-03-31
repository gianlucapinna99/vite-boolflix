<script>

//Library
import axios from 'axios';

//Functions
import { store } from './store';

//Components
import AppMain from './components/AppMain.vue';


export default {
  name: 'App',
  components: {
    AppMain
  },
  data() {
    return {
      store
    }
  },
  methods: {
    searchMovie() {
      axios.get(store.config.url_movies,
        {
          params: {
            api_key: store.config.api_key,
            query: store.search
          }
        })
        .then((response) => {
          this.store.movies = response.data.results
        })
    }
  }, //Take data for movies
}
</script>

<template>
  <AppMain @submit="this.searchMovie()"></AppMain>
</template>


<style lang="scss"></style>