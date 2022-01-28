<template>
  <div
    v-if="intViewportWidth <= 390"
    style="
      line-height: 1.5rem;
      padding-top: 0.7rem;
      margin-left: -1.5rem;
      position: fixed;
      z-index: 1000;
      top: 0;
      left: 86%;
    "
  >
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
  <el-row v-else>
    <el-col :span="12" class="resume-side-bar">
      <div>
        <el-tooltip
          class="box-item"
          effect="dark"
          :content="$t('resumePage.drawer.drawerIconTooltip')"
          placement="right"
        >
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
        </el-tooltip>
      </div>
    </el-col>
  </el-row>
  <el-skeleton
    :rows="14"
    animated
    :loading="loading"
    style="
      position: absolute;
      width: 60%;
      top: 21%;
      left: 50%;
      transform: translateX(-50%);
    "
    id="skeleton"
    :throttle="500"
  >
    <template #default>
      <div class="resume-container" v-if="!loading">
        <iframe :src="resumePath" :width="pdfWidth" :height="pdfHeight" />
      </div>
    </template>
  </el-skeleton>

  <el-drawer
    v-model="drawer"
    modal-class=""
    :direction="intViewportWidth <= 390 ? 'rtl' : 'ltr'"
    custom-class="nav-bar-drawer resume-side-bar-drawer-container"
    :size="drawerSize"
  >
    <template #title
      ><h3>{{ $t("resumePage.drawer.title") }}</h3>
    </template>

    <div v-for="idx in cvVersion" style="padding: 2rem 0">
      <el-button
        style="
          background-color: var(--color-background);
          border-color: var(--color-text);
        "
        @click="changeCV(idx)"
        >{{ $t(`resumePage.drawer.item_${idx}`) }}</el-button
      >
    </div>
    <div style="padding: 2rem 0">
      <el-button
        style="
          background-color: var(--color-background);
          border-color: var(--color-text);
        "
        @click="downloadCV(idx)"
        >{{ $t("resumePage.drawer.item_download") }}</el-button
      >
    </div>
  </el-drawer>
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  onBeforeMount,
  onBeforeUnmount,
  getCurrentInstance,
  nextTick,
} from "vue"
import router from "@/router"
import { useStore } from "@/store"
import { isMobile, isMobileTablet } from "@/utils/index.ts"

const instance = getCurrentInstance()

const device = isMobileTablet() ? (isMobile() ? "mobile" : "tablet") : "desktop"
const deviceInnerWidth = window.innerWidth
const pdfHeight = { mobile: "90%", tablet: "96%", desktop: "90%" }[device]
const pdfWidth = { mobile: "80%", tablet: "80%", desktop: "50%" }[device]
const drawerSize = { mobile: "50%", tablet: "30%", desktop: "16%" }[device]
const drawer = ref(false)
const cvVersion = [1, 2, 3]
const store = useStore()
const intViewportWidth = ref(window.innerWidth)
onBeforeMount(() => {
  window.addEventListener("orientationchange", function (event) {
    intViewportWidth.value = window.innerWidth
    // TODO It does not have to refresh whole site;option(use $forceUpdate)
    window.location.reload()
  })
})
const loading = ref(true)
const setLoading = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 1600)
}
setLoading()
const resumePath = ref("/pdf/resume-zh.pdf")
function changeCV(idx: number) {
  resumePath.value =
    "/pdf/" +
    { "1": "cv_AfterBaidu.pdf", "2": "resume-zh.pdf", "3": "resume.pdf" }[idx]
  drawer.value = false
}
function downloadCV() {
  const a = document.createElement("a")
  const fileName =
    computed((_) => store.state.globalLanguage).value === "zh"
      ? "前端开发-黄宇快-北邮-数字媒体技术-18810015082"
      : "FE-shaonhuang-bupt_+86-18810015082"
  a.setAttribute("href", resumePath.value)
  a.setAttribute("target", "_blank")
  a.setAttribute("download", fileName)
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  drawer.value = false
}
onBeforeUnmount(() => {
  window.removeEventListener("orientationchange", () => {})
})
</script>
<style lang="less">
#skeleton {
  --el-skeleton-color: var(--color-text);
}
.resume-container {
  margin-top: 4.6rem;
  height: 100%;
  width: 100%;
}
.resume-side-bar {
  position: absolute;
  z-index: 100;
  height: 100%;
  margin-top: 10rem;

  &-drawer-container section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
}
</style>
