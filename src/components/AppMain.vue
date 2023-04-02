<script>

import { computed } from 'vue';
import { store } from '../store';

export default {
    emits: ['submit'], //submit event
    name: "AppMain",
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
            return '<span class="fa-star' + (rating >= 1 ? ' fa-solid' : ' fa-regular') + '"></span>' +
                '<span class="fa-star' + (rating >= 2 ? ' fa-solid' : ' fa-regular') + '"></span>' +
                '<span class="fa-star' + (rating >= 3 ? ' fa-solid' : ' fa-regular') + '"></span>' +
                '<span class="fa-star' + (rating >= 4 ? ' fa-solid' : ' fa-regular') + '"></span>' +
                '<span class="fa-star' + (rating >= 5 ? ' fa-solid' : ' fa-regular') + '"></span>';
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
    <div class="">
        <!-- Crea una riga per ogni gruppo di 5 risultati -->
        <div class="row content">
            <div v-for="(result, index) in searchResults" :key="index" class="col-sm-6 col-md-4 col-xxl-3 w-90">
                <!-- Crea una scheda per ogni risultato-->
                <div class="card-film">
                    <div class="img">
                        <!-- Immagine del film o della serie TV -->
                        <img :src="urlImg + result.poster_path" :alt="result.title || result.name">
                    </div>
                    <!-- Titolo -->
                    <h1>{{ result.title || result.name }}</h1>
                    <!-- Titolo originale -->
                    <p>Original title: {{ result.original_title || result.original_name }}</p>
                    <p>
                        Language:
                        <!-- Lingua bandiera -->
                        <i v-if="languages[result.original_language]"
                            :class="['flag-icon', 'flag-icon-' + languages[result.original_language]]"></i>
                        <!-- Bandiere non supportate -->
                        <i v-else class="fa-solid fa-globe"></i>
                    </p>
                    <!-- Punteggio stelle -->
                    <span v-html="getStars(result.vote_average)"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-film {
    width: 342px;
    height: 513px;
    margin: 0 auto;

    h1,
    p,
    span {
        color: white;
        padding: 10px;
    }

    h1 {
        font-size: 30px;
    }
}

.img img {
    border-radius: 10px;
}

.content {
    max-width: 1630px;
    margin: 0 auto;
}

.row div {
    margin-bottom: 20px;
}

.flag-icon {
    height: 25px;
    width: 25px;
    visibility: hidden;
}

.card-film:hover {
    .flag-icon {
        visibility: visible;
    }
}


img {
    position: absolute;
}

img:hover {
    opacity: 0.1;
}

.fa-star {
    color: yellow;
}
</style>