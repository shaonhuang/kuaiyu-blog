<template>
  <el-header class="header-bar">
    <el-row :gutter="10">
      <el-col :xs="4" :sm="6" :md="4" :lg="3" :xl="1" style="padding-top: 1rem">
        <router-link to="/home">
          <img
            alt="hyk logo"
            src="@/assets/img/logo/homePageLogo.png"
            style="
              width: 2.5rem;
              margin-right: 1rem;
              display: inline-block;
            " /></router-link
        ><router-link
          to="/home"
          style="
            position: fixed;
            z-index: 1001;
            text-decoration: none;
            color: inherit;
            margin-right: 4rem;
            font-weight: bold;
            font-size: 1.5rem;
          "
          >digitalcreak.top</router-link
        >
      </el-col>
      <el-col :xs="16" :sm="12" :md="16" :lg="18" :xl="22"
        ><nav class="nav-bar">
          <div v-for="item in headerBar" class="nav-bar-item">
            <router-link
              :to="item.url"
              style="text-decoration: none; color: inherit"
              >{{ item.title }}</router-link
            >
          </div>
        </nav></el-col
      >
      <el-col :xs="4" :sm="6" :md="4" :lg="3" :xl="1">
        <el-button
          color="#626aef"
          style="color: white"
          @click="changeLanuage()"
          >{{ $t(`localeBotton`) }}</el-button
        >
      </el-col>
    </el-row></el-header
  >
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useStore } from "@/store"
import { useI18n } from "vue-i18n"

const { locale } = useI18n()
const store = useStore()
const headerBar = [
  { title: "Blog", url: "/blog" },
  { title: "About", url: "/about" },
  { title: "GitHub", url: "https://github.com/shaonhuang" },
]
const language = computed(() => store.state.globalLanguage)
console.log(language.value)
function changeLanuage() {
  let type = language.value !== "zh" ? "zh" : "en"
  store.commit("changeGlobalLanguage", type)
  locale.value = type
}
</script>

<style lang="less">
.header-bar {
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1000;
  width: 100%;
  height: 3.6rem;
  padding: 0px 1.5rem;
  color: var(--color-text);
  background-color: var(--color-background);
  &-item {
    min-width: 6.5rem;
    margin: 0px 1rem;
    padding: 0.4rem 0.6rem;
    text-align: center;
    border-radius: 0.5rem;
    transition: color 0.15s ease 0s;
  }
}
.nav-bar {
  display: flex;
  -webkit-box-align: center;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  padding-top: 1rem;
  padding-left: 0.3rem;
  &-item {
    a {
      min-width: 6.5rem;
      margin: 0px 1rem;
      padding: 0.4rem 0.6rem;
      text-align: center;
      border-radius: 0.5rem;
      transition: color 0.15s ease 0s;
    }
  }
}
</style>
