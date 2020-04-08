<template>
  <v-app>
    <div id="nav" class="navigation">
      <router-link to="/">Home</router-link>
      <router-link to="/airplay">Airplay</router-link>
      <router-link to="/accesspoint">Accesspoint</router-link>
      <router-link to="/bluetooth">Bluetooth</router-link>
      <router-link to="/raspi">Raspi</router-link>
      <router-link to="/wifi">WLAN</router-link>
      <router-link to="/settings">Settings</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font: 1.2rem/1.6 Arial, Helvetica, sans-serif;
}

h1 {
    padding-bottom: 20px;
    text-align: center;
}

.navigation {
    border-bottom: 1px solid gray;
    box-shadow: 0 5px 10px rgba(0, 0, 0, .75);
    display: flex;
    justify-content: center;
    line-height: 60px;
    text-align: center;
    position: fixed;
    width: 100%;
    z-index: 100 !important;

    a {
        border: 1px solid gray;
        border-bottom: none;
        border-top: none;
        min-width: 150px;
        text-decoration: none;

        &:hover,
        &:active,
        &:focus,
        &.router-link-exact-active.router-link-active {
            background-color: #eee;
        }

        &+a {
            border-left: none;
        }
    }
}

.container {
    height: calc(100vh - 65px);
    min-width: 100%;
    margin-top: 65px;
    padding: 20px !important;
    overflow: hidden;
    overflow-y: auto;
    z-index: 0 !important;

    &:after {
        background-image: url('./assets/logo.png');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 35%;
        background-attachment: fixed;
        content: '';
        display: block;
        height: 75%;
        width: 100%;
        opacity: .5;
        position: absolute;
        top: 150px;
        z-index: -1;
    }
}
</style>