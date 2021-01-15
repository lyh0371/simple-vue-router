import createRouteMap from "./create-route-map";
import { createRoute } from "./history/base";

export default function createMatcher(routes) {
  // 扁平化用户传来的数据

  let { pathList, pathMap } = createRouteMap(routes); // 初始化配置
  function match(location) {
    // 找到当前的记录

    let record = pathMap[location];
    let local = {
      path: location,
    };

    if (record) {
      return createRoute(record, local);
    }
    return createRoute(null, local);
  }

  function addRoutes(routes) {
    createRouteMap(routes, pathList, pathMap); // 添加新配置
  }
  return {
    match,
    addRoutes,
  };
}
