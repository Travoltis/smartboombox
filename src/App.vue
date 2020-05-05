<template>
  <v-app>
    <Navbar />
    <router-view/>
    <Player />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Player from './components/Player'

export default {
    components: {
        Navbar,
        Player
    }
};
</script>

<style lang="scss">
@import './scss/style.scss';
</style>