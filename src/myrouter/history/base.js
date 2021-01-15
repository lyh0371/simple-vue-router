export function createRoute(record, loaction) {
  let res = [];

  if (record) {
    while (record) {
      res.unshift(record);
      record = record.parent;
    }
  }
  return {
    ...loaction,
    matched: res,
  };
}

export default class History {
  constructor(router) {
    this.router = router;
    this.current = createRoute(null, {
      path: "/",
    });
  }

  //   location 跳转的目的地
  // onComplete 跳转成功的回调
  transitionTo(location, onComplete) {
    let route = this.router.match(location); // 用当前路径找到对应的记录

    if (
      this.current.path === location &&
      route.matched.length === this.current.matched.length
    ) {
      return;
    }
    this.updateRoute(route);
    onComplete && onComplete();
  }
  updateRoute(route) {
    this.current = route;
    this.cb && this.cb(route);
  }
  listen(cb) {
    this.cb = cb;
  }
}
