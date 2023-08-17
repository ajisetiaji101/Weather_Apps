import HomeView from "../pages/HomeView.vue";
import CityView from "../pages/CityView.vue";
import { createRouter, createWebHashHistory, useRoute } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/weather/:state/:city",
    name: "cityView",
    component: CityView,
    meta: {
      title: "Weather",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  mode: "hash",
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${
    to.params.state ? `${to.params.city}, ${to.params.state}` : to.meta.title
  } | The Local Weather`;
  next();
});

export default router;
