<script>
import { store } from '../store';
export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    },
}    
</script>

<template>
    <input type="text" v-model="store.search" @keyup.enter="$emit('submit')">
    <button @click="$emit('submit')">search</button>

    <div v-for="movie in store.movies">
        <h1>{{ movie.title }}</h1>
        <p>{{ movie.original_title }}</p>
        <p>{{ movie.original_language }}</p>
        <p>{{ movie.vote_average }}</p>
    </div>
</template>

<style lang="scss" scoped></style>