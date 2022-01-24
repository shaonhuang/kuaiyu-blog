import {
  createRouter,
  createWebHistory,
  RouteRecord,
  RouteRecordRaw,
} from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';

import Home from '../views/home/Home.vue';
import VideoPlayer from '../views/Video.vue';
import Resume from '../views/Resume.vue';
import Demo from '../views/Demo.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: (_) => {
      return { path: '/home' };
    },
  },
  {
    path: '/home',
    name: 'HelloWorld',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "About" */ '../components/About.vue'),
  },
  {
    path: '/:currentPath(.*)*',
    redirect: (_) => {
      return { path: '/404' };
    },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { el: '#app', top: 0, behavior: 'smooth' };
  },
});
export default router;
