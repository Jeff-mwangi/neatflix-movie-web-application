// Creating a router for overview page after clicking on the overview button
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Movies.vue"),

    },
    {
      path: '/overview',
      name:"Overview",
      component: () => import("../views/Overview.vue"),
    },
  ],
  strict: true, // applies to all routes
});

export default router;
