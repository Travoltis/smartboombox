<template>
    <div class="container">
        <h1>Raspi</h1>
        <v-btn v-on:click="shutdown" depressed class="pink white--text">
            <v-icon>{{shutdownIcon}}</v-icon>
            </v-btn>
            <v-btn v-on:click="restart" depressed class="pink white--text">
            <v-icon>{{restartIcon}}</v-icon>
        </v-btn>
    </div>
</template>

<script>
// icons from https://materialdesignicons.com/ with prefix mdi
import { mdiPower, mdiRestart } from '@mdi/js'

export default {
    name: "Raspi",
    data: () => ({
        shutdownIcon: mdiPower,
        restartIcon: mdiRestart,
    }),
    methods: {
        shutdown: () => {
            console.log('shutting down...');
        },
        restart: () => {
            console.log('restarting...');
        },
    }
}
</script>
