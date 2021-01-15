import Vue from "vue";
import VueRouter from "../myrouter";
// import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AChild from "../views/a.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),

    children: [
      {
        path: "a",
        name: "A",
        component: AChild,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
