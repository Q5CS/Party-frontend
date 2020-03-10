import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/restaurant",
    name: "Restaurant",
    component: () =>
      import(/* webpackChunkName: "index" */ "../views/Restaurant/Index.vue")
  },
  {
    path: "/aoligei",
    name: "Aoligei",
    component: () =>
      import(/* webpackChunkName: "aoligei" */ "../views/Aoligei/Index.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
