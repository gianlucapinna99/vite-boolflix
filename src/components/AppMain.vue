<script>

import { computed } from 'vue';
import { store } from '../store';

export default {
    emits: ['submit'], //submit event
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
        });//Merge results of movies and tv series

        const languages = {
            it: 'it',
            en: 'gb',
            fr: 'fr',
            pt: 'pt',
            ja: 'jp',
            cn: "cn",
            ru: "ru",
            es: "es",
            ko: "kr"
        } //Language supported ticker and modified ticker to work with flag-icon-css

        return {
            store,
            searchResults,
            languages
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
        <i v-if="languages[result.original_language]"
            :class="['flag-icon', 'flag-icon-' + languages[result.original_language]]"></i>
        <i v-else class="fa-solid fa-globe"></i>
        <p>{{ result.original_language }}</p>
        <p>{{ result.vote_average }}</p>
    </div>
</template>

<style lang="scss" scoped>
.flag-icon {
    height: 25px;
    width: 25px;
}
</style>