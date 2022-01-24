<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <router-view></router-view>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
html {
  /* @media only screen and (min-width: 320px) {
  }
  @media only screen and (min-width: 640px) {
  }
  @media only screen and (min-width: 750px) {
  }
  @media only screen and (min-width: 1242px) {
  } */
  overflow-x: hidden;
  @media only screen and (min-width: 320px) {
    font-size: 62.5% !important;
  }
  @media only screen and (min-width: 640px) {
    font-size: 125% !important;
  }
  @media only screen and (min-width: 750px) {
    font-size: 150% !important;
  }
  @media only screen and (min-width: 1242px) {
    font-size: 187.5% !important;
  }
}
body {
  background: black;
  font-size: 12px;
  font-size: 1.2rem;
  overflow: scroll;
  overflow-y: hidden;
  overflow-x: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: black;
}
</style>
