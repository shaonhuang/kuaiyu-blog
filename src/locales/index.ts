import { createI18n } from "vue-i18n"; //引入vue-i18n组件
import zh from "./languages/zh"; // 中文语言包
import en from "./languages/en"; // 英文语言包

// 实例化I18n
const i18n = createI18n({
  locale: "zh!", // 初始化配置语言
  // silentFallbackWarn: true,
  legacy: false,
  globalInjection: true,
  messages: {
    zh,
    en
  }
});

export default i18n;
