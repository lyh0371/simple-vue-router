import install from "./install";
import createMatcher from "./create-matcher";
import HashHistory from "./history/hash";

export default class VueRouter {
  constructor(options) {
    // 根据不同的路径跳转不同组件
    // 将用户传来的rouer配置项扁平化
    // match 负责配置路径
    // addRoutes 动态添加路由配置
    this.matcher = createMatcher(options.routes || []);

    // 创建路由系统

    this.mode = options.mode || "hash";

    this.history = new HashHistory(this);
  }
  init(app) {
    // app 是根实例
    const setupHashLister = () => {
      history.setupListener();
    };
    const history = this.history;
    // 第一个参数是当前要跳转的路径,第二个参数是跳转成功的回调
    history.transitionTo(history.getCurrentLocation(), setupHashLister);

    history.listen((route) => {
      console.log("route", route);
      app._route = route;
    });
  }
  // 匹配
  match(location) {
    return this.matcher.match(location);
  }
  push(location) {
    const setupHashLister = () => {
      history.setupListener();
    };
    const history = this.history;
    // 第一个参数是当前要跳转的路径,第二个参数是跳转成功的回调
    history.transitionTo(location, setupHashLister);
    window.location.href = window.location.origin + "/#" + location;
  }
}
VueRouter.install = install;
