import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
// Vue.use(VueRouter);
// Vue.use(myrouter, router);
new Vue({
  name: "main",
  router,
  mounted() {
    console.log("main", this);
  },
  render: (h) => h(App),
}).$mount("#app");
