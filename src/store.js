import { reactive } from "vue";

export const store = reactive({
    config: {
        api_key: "c3ef55e2302baf7fcda82cfe154ff68a",
        url_movies: 'https://api.themoviedb.org/3/search/movie?',
        url_tv: 'https://api.themoviedb.org/3/search/tv?',
        language: 'en-US'
    },
    search: "",//Take movie input 
    movies: [],//Array with filtered films based on input
    tv: [],//Array with filtered tv series
})