<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'About',
  data() {
    return {
      msg: 'About Page',
    };
  },
  setup() {},
});
</script>

<style scoped></style>
