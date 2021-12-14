import { createApp } from 'vue';
// import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
import { ElButton, ElSelect } from 'element-plus';
import { store, key } from './store';
import router from './router';

import App from './App.vue';

const app = createApp(App);

app.use(ElButton);
app.use(ElSelect);

app.use(store, key);
app.use(router);
app.mount('#app');
