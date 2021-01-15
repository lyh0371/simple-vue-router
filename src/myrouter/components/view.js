export default {
  functional: true,
  render(h, { parent, data }) {
    let route = parent.$route;
    let matched = route.matched;
    data.routerView = true;
    let deep = 0;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        deep++;
      }
      parent = parent.$parent;
    }

    let record = matched[deep];

    if (!record) {
      return h();
    }

    let component = record.component;
    return h(component, data);
  },
};
