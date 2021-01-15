export let _Vue;
import RouterView from "./components/view";
import RouterLink from "./components/link";
export default function install(Vue) {
  _Vue = Vue;
  // 把用户注入的rouer属性
  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        // 根实例
        this._routerRoot = this;
        this._router = this.$options.router; // router 实例
        // 初始化
        this._router.init(this);

        Vue.util.defineReactive(this, "_route", this._router.history.current);
      } else {
        this._routerRoot = this.$parent && this.$parent._routerRoot;
      }
    },
  });
  Object.defineProperty(Vue.prototype, "$route", {
    get() {
      return this._routerRoot._route;
    },
  });
  Object.defineProperty(Vue.prototype, "$router", {
    get() {
      return this._routerRoot._router;
    },
  });

  Vue.component("RouterView", RouterView);
  Vue.component("RouterLink", RouterLink);
}
