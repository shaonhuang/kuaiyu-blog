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
              margin-top: 0.1rem;
              display: inline-block;
            " /></router-link
        ><router-link to="/home" class="logo-title"
          >digitalcreak.top</router-link
        >
      </el-col>
      <el-col :xs="16" :sm="12" :md="16" :lg="18" :xl="22"
        ><nav class="nav-bar" v-if="intViewportWidth > 390">
          <div v-for="item in headerBar.slice(0, -1)" class="nav-bar-item">
            <router-link
              :to="item.url"
              style="text-decoration: none; color: inherit"
              >{{ item.title }}</router-link
            >
          </div>
          <div class="nav-bar-item">
            <a
              :href="headerBar[2].url"
              style="text-decoration: none; color: inherit"
              >{{ headerBar[2].title }}</a
            >
          </div>
        </nav></el-col
      >
      <el-col :xs="4" :sm="6" :md="4" :lg="3" :xl="1">
        <div
          style="line-height: 1.5rem; padding-top: 0.7rem; margin-left: -1.5rem"
          class="language-btn"
        >
          <div v-if="intViewportWidth <= 390">
            <el-button
              circle
              style="
                margin-left: 16px;
                background-color: var(--background-color);
                border: 0px;
              "
              @click="drawer = true"
            >
              <img
                src="@/assets/icons/content.png"
                alt="content"
                style="width: 1.6rem"
              />
            </el-button>
          </div>

          <el-button
            v-else
            color="#626aef"
            style="
              background-color: var(--color-background);
              border-color: var(--color-text);
            "
            :size="intViewportWidth <= 810 ? 'small' : ''"
            @click="changeLanuage()"
            >{{ $t(`localeBotton`) }}</el-button
          >
        </div>
      </el-col>
    </el-row></el-header
  >
  <el-drawer
    v-model="drawer"
    modal-class=""
    direction="rtl"
    custom-class="nav-bar-drawer"
  >
    <nav
      style="
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
      "
    >
      <div
        v-for="item in headerBar.slice(0, -1)"
        class="nav-bar-item"
        style="min-height: 4.5rem"
      >
        <router-link
          :to="item.url"
          style="text-decoration: none; color: inherit"
          >{{ item.title }}</router-link
        >
      </div>
      <div class="nav-bar-item" style="min-height: 4.5rem">
        <a
          :href="headerBar[2].url"
          style="text-decoration: none; color: inherit"
          >{{ headerBar[2].title }}</a
        >
      </div>
      <el-button
        color="#626aef"
        style="
          background-color: var(--color-background);
          border-color: var(--color-text);
        "
        @click="changeLanuage()"
        >{{ $t(`localeBotton`) }}</el-button
      >
    </nav>
  </el-drawer>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
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
// const contentIcon = computed(() =>)
const drawer = ref(false)
let intViewportWidth = window.innerWidth

function changeLanuage() {
  let type = language.value !== "zh" ? "zh" : "en"
  store.commit("changeGlobalLanguage", type)
  locale.value = type
}

// function readFile(file: string) {
//   var reader = new FileReader()
//   reader.onload = function (evt) {
//     console.log(evt.target.result, "test")
//   }
//   reader.readAsText(file)
// }
// readFile("@/assets/assets/icons/svg/content.svg")
</script>

<style lang="less">
.language-btn {
}
.language-btn-mini {
  min-height: 32px;
  padding: 9px 15px;
  font-size: 12px;
  border-radius: calc(var(--el-border-radius-base) - 1px);
}
.logo-title {
  position: fixed;
  z-index: 1001;
  text-decoration: none;
  color: inherit;
  margin-right: 4rem;
  font-weight: bold;
  line-height: 1.5rem;
  @media only screen and (min-width: 240px) {
    font-size: 0rem;
  }
  @media only screen and (min-width: 320px) {
    font-size: 0rem;
  }
  @media only screen and (min-width: 640px) {
    font-size: 0rem;
  }
  @media only screen and (min-width: 750px) {
    font-size: 0.8rem;
    margin-top: 0.2rem;
  }
  @media only screen and (min-width: 1242px) {
    font-size: 1.5rem;
    margin-top: 0.1rem;
  }
}
.nav-bar-drawer {
  background-color: var(--color-background);
}
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
  padding-left: 0.6rem;
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
