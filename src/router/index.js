// Creating a router for overview page after clicking on the overview button
import { useTransitionState } from "vue";
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
      path: "/overview/:id",
      name:"Overview",
      component: () => import("../views/Overview.vue"),
     beforeLoad: async(to) => {
        state.loading.value = true;
        await usePTrackStore().fetchAll(to.params.id);
        state.loading.value = false;
    },
    },
  ],
  strict: true, // applies to all routes
});

export default router;
