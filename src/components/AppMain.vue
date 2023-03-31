<script>

import { computed } from 'vue';
import { store } from '../store';

export default {
    emits: ['submit'], //submit event
    setup() { //Merge results of movies and tv series
        const searchResults = computed(() => {
            const movies = store.movies.map(movie => {
                return {
                    ...movie,
                    title: movie.title,
                    original_title: movie.original_title
                }
            });
            const tv = store.tv.map(tvShow => {
                return {
                    ...tvShow,
                    title: tvShow.name,
                    original_title: tvShow.original_name
                }
            });
            return [...movies, ...tv];
        });
        return {
            store,
            searchResults
        };
    }
}
</script>

<template>
    <input type="text" v-model="store.search" @keyup.enter="$emit('submit')">
    <button @click="$emit('submit')">search</button>

    <div v-for="result in searchResults">
        <h1>{{ result.title || result.name }}</h1> <!-- Search for a key, if it's not avaible search for a second one -->
        <p>{{ result.original_title || result.original_name }}</p>
        <p>{{ result.original_language }}</p>
        <p>{{ result.vote_average }}</p>
    </div>
</template>

<style lang="scss" scoped></style>