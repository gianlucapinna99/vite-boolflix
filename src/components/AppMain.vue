<script>

import { computed } from 'vue';
import { store } from '../store';

export default {
    emits: ['submit'], //submit event
    data() {
        return {
            urlImg: "https://image.tmdb.org/t/p/w342"
        }
    },
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
        }; //Language supported ticker and modified ticker to work with flag-icon-css

        const getStars = (vote) => {
            const rating = Math.round(vote / 2); // convert vote to rating out of 5
            return '<span class="fa fa-star' + (rating >= 1 ? ' fa-solid' : ' fa-regular') + '"></span>' +
                '<span class="fa fa-star' + (rating >= 2 ? ' fa-solid' : ' fa-regular') + '"></span>' +
                '<span class="fa fa-star' + (rating >= 3 ? ' fa-solid' : ' fa-regular') + '"></span>' +
                '<span class="fa fa-star' + (rating >= 4 ? ' fa-solid' : ' fa-regular') + '"></span>' +
                '<span class="fa fa-star' + (rating >= 5 ? ' fa-solid' : ' fa-regular') + '"></span>';
        };

        return {
            store,
            searchResults,
            languages,
            getStars,
        };
    }
}
</script>

<template>
    <!-- INPUT -->
    <input type="text" v-model="store.search" @keyup.enter="$emit('submit')">
    <button @click="$emit('submit')">search</button>


    <!-- FILMS CARD -->
    <div v-for="result in searchResults">
        <div class="img">
            <img :src="urlImg + result.poster_path" :alt="result.title || result.name">
        </div>
        <h1>{{ result.title || result.name }}</h1>
        <!-- Search for a key, if it's not avaible search for a second one -->
        <p>Original title: {{ result.original_title || result.original_name }}</p>
        <p>
            Language: {{ result.original_language }}
            <i v-if="languages[result.original_language]"
                :class="['flag-icon', 'flag-icon-' + languages[result.original_language]]"></i>
            <i v-else class="fa-solid fa-globe"></i>
        </p>
        <span v-html="getStars(result.vote_average)"></span>
    </div>
</template>

<style lang="scss" scoped>
.flag-icon {
    height: 25px;
    width: 25px;
}
</style>