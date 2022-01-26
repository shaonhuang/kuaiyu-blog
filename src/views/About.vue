<template>
  <section class="about-container">
    <h3 class="about-container-title">{{ $t("aboutPage.title") }}</h3>
    <div class="about-container-content" v-html="$t('aboutPage.content')"></div>
  </section>
  <ConfettiCanvas />
</template>
<script setup lang="ts">
import ConfettiCanvas from "@/components/common/ConfettiCanvas.vue"
import { computed } from "vue"
import { useStore } from "@/store"
import { useI18n } from "vue-i18n"
import { showConfetti } from "@/utils/index.ts"
const { locale } = useI18n()
const store = useStore()
const language = computed(() => store.state.globalLanguage)
locale.value = language.value
setTimeout((_) => {
  showConfetti()
}, 800)
</script>
<style lang="less" scoped>
.about-container {
  position: relative;
  z-index: 110;
  margin: 0px auto;
  padding: 10rem 0px;
  text-align: left;
  @media only screen and (min-width: 320px) {
    width: 18rem;
  }
  @media only screen and (min-width: 640px) {
    width: 18rem;
  }
  @media only screen and (min-width: 750px) {
    width: 32rem;
  }
  @media only screen and (min-width: 1242px) {
    width: 50rem;
  }
  &-title {
    margin-bottom: 2rem;
    font-weight: bold;
    @media only screen and (min-width: 320px) {
      font-size: 1.5rem;
    }
    @media only screen and (min-width: 640px) {
      font-size: 1.5rem;
    }
    @media only screen and (min-width: 750px) {
      font-size: 1.5rem;
    }
    @media only screen and (min-width: 1242px) {
      font-size: 1.5rem;
    }
  }
  &-content {
    margin-bottom: 2rem;
    line-height: 1.8;
    @media only screen and (min-width: 320px) {
      font-size: 1rem;
    }
    @media only screen and (min-width: 640px) {
      font-size: 1rem;
    }
    @media only screen and (min-width: 750px) {
      font-size: 1rem;
    }
    @media only screen and (min-width: 1242px) {
      font-size: 1rem;
    }
  }
}
</style>
