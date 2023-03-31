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
      Promise.all([
        axios.get(store.config.url_movies, {
          params: {
            api_key: store.config.api_key,
            query: store.search
          }
        }),
        axios.get(store.config.url_tv, {
          params: {
            api_key: store.config.api_key,
            query: store.search
          }
        })
      ])
        .then(([movieResponse, tvResponse]) => {
          this.store.movies = movieResponse.data.results;
          this.store.tv = tvResponse.data.results;
        })
        .catch((error) => {
          console.error(error);
        });
    },  //Take data for tv series
  },
}
</script>

<template>
  <AppMain @submit="this.searchMovie()"></AppMain>
</template>


<style lang="scss"></style>