<template>
  <div
    style="
      margin-top: 3.7rem;
      width: 100%;
      height: 100%;
      white-space: nowrap;
      overflow-x: scroll;
      overflow-y: hidden;
    "
  >
    <div
      v-for="(o, index) in projectsPath"
      :key="o"
      style="
        padding-top: 4rem;
        display: inline-block;
        vertical-align: top;
        max-height: 16rem;
      "
    >
      <div
        style="padding: 0px; padding: 0 1rem; border-radius: 2%"
        v-if="withQuery(index)"
      >
        <video
          :width="videoWidth"
          :height="videoHeight"
          controls
          :key="'@/assets/video/' + o"
          style="border: 1px solid var(--color-text)"
        >
          <source :src="'/video/' + o" type="video/mp4" />
          您的浏览器不支持 HTML5 video 标签。
        </video>
        <div style="padding: 14px">
          <span>{{ o }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from "vue"
import func from "../../vue-temp/vue-editor-bridge"
import { useRoute } from "vue-router"
import { isMobile, isMobileTablet } from "@/utils/index.ts"
const projectsPath = [
  "proteinrecorder2.mp4",
  "wechat_mini_program.mp4",
  "geek_demo.mp4",
]
const router = useRoute()
const device = isMobileTablet() ? (isMobile() ? "mobile" : "tablet") : "desktop"
const deviceInnerWidth = window.innerWidth
const videoHeight =
  (window.innerHeight * { mobile: 70, tablet: 80, desktop: 60 }[device]) / 100
const videoWidth =
  (window.innerWidth * { mobile: 60, tablet: 80, desktop: 30 }[device]) / 100

function withQuery(idx) {
  try {
    if (router.fullPath == "/projects") {
      return true
    }
    const query = router.fullPath.split("/projects?query=")[1]
    return parseInt(query, 10) === idx + 1
  } catch (e) {
    return false
  }
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
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>
