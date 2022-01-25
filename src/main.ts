import { createApp } from "vue"
import ElementPlus from "element-plus"
import "element-plus/theme-chalk/index.css"
// import { ElButton, ElSelect } from "element-plus"
import i18n from "./locales/index"
import { store, key } from "./store"
import router from "./router"

import App from "./App.vue"

const app = createApp(App)

app
  // .use(ElButton)
  // .use(ElSelect)
  .use(ElementPlus)
  .use(store, key)
  .use(router)
  .use(i18n)
  .mount("#app")
