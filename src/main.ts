import { createApp } from 'vue';
// import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
import { ElButton, ElSelect } from 'element-plus';
import { store, key } from './store';
import router from './router';

import App from './App.vue';

const app = createApp(App);

app.use(ElButton).use(ElSelect).use(store, key).use(router).mount('#app');
