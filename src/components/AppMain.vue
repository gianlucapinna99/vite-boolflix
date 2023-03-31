<script>
import { computed } from 'vue';
import { store } from '../store';

export default {
    emits: ['submit'],
    setup() {
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

    <div v-for="item in searchResults">
        <h1>{{ item.title || item.name }}</h1>
        <p>{{ item.original_title || item.original_name }}</p>
        <p>{{ item.original_language }}</p>
        <p>{{ item.vote_average }}</p>
    </div>
</template>

<style lang="scss" scoped></style>