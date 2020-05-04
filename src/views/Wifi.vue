<template>
    <div class="container">
        <h1>WLAN</h1>
        <p>Tet</p>
        <v-btn v-on:click="test" depressed class="pink white--text">
          <v-icon>email</v-icon>
        </v-btn>
    </div>
</template>

<script>
export default {
    name: "Wifi",
    methods: {
        test: () => {
            console.log('jo');
        }
    }
}
</script>