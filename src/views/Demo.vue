<template>
  <div id="putInMiddle">
    <h1>演示视频</h1>
    <img src="@/assets/img/demo/baidu.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "Demo",
  components: {},
}
</script>

<style>
#putInMiddle {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: rgba(255, 255, 255, 0.609) 1px solid;
}
</style>
