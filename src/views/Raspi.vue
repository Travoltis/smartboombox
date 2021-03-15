<template>
    <div class="container">
        <h1>Raspi</h1>
        <v-btn v-on:click="shutdown" depressed class="pink white--text"><v-icon>{{shutdownIcon}}</v-icon></v-btn>
        <v-btn v-on:click="reboot" depressed class="pink white--text"><v-icon>{{restartIcon}}</v-icon></v-btn>
    </div>
</template>

<script>
// icons from https://materialdesignicons.com/ with prefix mdi
import { mdiPower, mdiRestart } from '@mdi/js'
// import { shutdown } from '../js/shutdown'
// import { reboot } from '../js/reboot'

export default {
    data: () => ({
        shutdownIcon: mdiPower,
        restartIcon: mdiRestart,
    }),
    methods: {
        shutdown: () => {
            // shutdown();
        },
        reboot: () => {
            // reboot();
        }
    }
}
</script>
