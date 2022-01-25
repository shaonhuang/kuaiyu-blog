<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue';
import HeaderBar from "./components/HeaderBar.vue"
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <HeaderBar />
  <router-view></router-view>
</template>

<style lang="less">
@import "./styles/themes.less";
* {
  margin: 0;
  padding: 0;
}
html {
  width: 100%;
  height: 100%;
}
body {
  width: 100%;
  height: 100%;
  background-color: hsl(216, 14%, 14%);
}
#app {
  width: 100%;
  height: 100%;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
