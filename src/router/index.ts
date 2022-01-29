import {
  createRouter,
  createWebHistory,
  RouteRecord,
  RouteRecordRaw
} from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";

import Home from "../views/home/Home.vue";
import About from "../views/About.vue";
import Blog from "../views/Blog.vue";
import Project from "../views/Project.vue";
import Resume from "../views/Resume.vue";
import NotFound from "../views/NotFound.vue";
import Demo from "../views/Demo.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: (_) => {
      return { path: "/home" };
    }
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: "/resume",
    name: "Resume",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Resume
  },
  {
    path: "/projects",
    name: "Projects",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Project
  },
  {
    path: "/:currentPath(.*)*",
    component: NotFound,
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { el: "#app", top: 0, behavior: "smooth" };
  }
});
export default router;
