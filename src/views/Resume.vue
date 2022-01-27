<template>
  <div class="container">
    <!-- <Document :file="srcPath" /> -->
  </div>
</template>

<script setup lang="ts">

const srcPath = `${window.location.origin}/pdf/cv_AfterBaidu.pdf`
const currentPage = 0
const pageCount = 0
</script>
<style lang="less">
.container {
  @media only screen and (min-width: 320px) {
    padding: 8vh 0;
  }
  @media only screen and (min-width: 640px) {
    padding: 4vh 4vw;
  }
  @media only screen and (min-width: 750px) {
    padding: 4vh 4vw;
  }
  @media only screen and (min-width: 1242px) {
    padding: 8vh 24vw;
  }
}
</style>
