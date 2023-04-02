<script>
import { computed } from 'vue';
import { store } from '../store';

export default {
    emits: ['submit'], //submit event
    name: "AppMain",
    setup() {
        return {
            store,
            computed
        };
    }
};
</script>


<template>
    <header>
        <!-- TITOLO -->
        <h1>BOOLFLIX</h1>
        <!-- INPUT -->
        <input type="text" v-model="store.search" @keyup.enter="$emit('submit')" placeholder="Search movie or tv series">
        <button @click="$emit('submit')">Search ></button>
    </header>
</template>

<style lang="scss" scoped>
header {
    margin: 0 auto;
    text-align: center;
    padding: 30px;
    margin-bottom: 20px;

    h1 {
        font-size: 90px;
        color: #e50815;
        padding: 20px;
    }

    input {
        padding: 9px;
        border-radius: 5px;
        border: none;
    }

    input:focus {
        outline: 2px solid white;
    }

    button {
        margin-left: 10px;
        background-color: #e50815;
        color: white;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        padding: 10px;
        border: none;
        border-radius: 6px;
        transition: background-color 0.5s ease-in-out;
        /*transizione di 0.5 secondi */
    }

    button:hover {
        background-color: #b30e19;
    }
}
</style>