<template>
  <div id="app">
    <div id="nav" class="navigation">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/wifi">WLAN</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {

  }
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
    background-color: silver;
    line-height: 50px;
    text-align: center;
}

.container {
    height: calc(100vh - 70px);
    background: #eee;
    padding: 20px;
}

.dashboard {
  background-image: url('./assets/logo.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 40%;
}

table {
  border: 1px solid gray;
  border-collapse: collapse;
  display: block;
  margin: 0 auto;
  width: 960px;

  tr {
    display: block;

    &:nth-child(even) {
      background-color: #f2f2f2;
    }

    th {
      background-color: #4CAF50;
      color: white;
      padding-bottom: 12px;
      padding-top: 12px;
      text-align: left;
    }

    th,
    td {
      border: 1px solid #ddd;
      padding: 8px;
      width: 480px;
    }
  }
}
</style>
