<template>
  <el-header class="header-bar">
    <el-row :gutter="10">
      <el-col :xs="4" :sm="6" :md="4" :lg="3" :xl="1" style="padding-top: 1rem">
        <img
          alt="hyk logo"
          src="@/assets/img/logo/homePageLogo.png"
          style="width: 2.5rem; margin-right: 1rem; display: inline-block"
        /><span style="position: fixed; z-index: 1001">digitalcreak</span>
      </el-col>
      <el-col :xs="16" :sm="12" :md="16" :lg="18" :xl="22"
        ><nav class="nav-bar">
          <div v-for="item in headerBar" class="nav-bar-item">
            <a>{{ item }}</a>
          </div>
        </nav></el-col
      >
      <el-col :xs="4" :sm="6" :md="4" :lg="3" :xl="1">
        <el-button
          color="#626aef"
          style="color: white"
          @click="changeLanuage(inputLanguageBool)"
          >{{ $t(`localeBotton`) }}</el-button
        >
      </el-col>
    </el-row></el-header
  >
</template>

<script setup lang="ts">
import { defineComponent, ref } from "vue"
import { useI18n } from "vue-i18n"
const headerBar = ["Blog", "About", "GitHub"]
let inputLanguageBool = false
const { locale } = useI18n()
function changeLanuage(type: string) {
  locale.value = inputLanguageBool ? "zh" : "en"
  inputLanguageBool = !inputLanguageBool
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
