<template>
  <div id="putInMiddle">
    <baidu-table></baidu-table>
  </div>
</template>

<script>
import BaiduTable from "@/components/common/baidu-table/index.vue";

export default {
  name: "Demo",
  components: {
    "baidu-table": BaiduTable,
  },
};
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
