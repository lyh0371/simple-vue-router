export default function createRouteMap(routes, oldPathList, oldPathMap) {
  let pathList = oldPathList || []; // 路径
  let pathMap = oldPathMap || Object.create(null); // 路由

  routes.forEach((route) => {
    addRouteRecord(route, pathList, pathMap);
  });

  return {
    pathList,
    pathMap,
  };
}

function addRouteRecord(route, pathList, pathMap, parent) {
  let path = parent ? `${parent.path}/${route.path}` : route.path;
  let record = {
    path,
    component: route.component,
    parent,
  };
  if (!pathMap[path]) {
    pathList.push(path);
    pathMap[path] = record;
  }

  if (route.children) {
    route.children.forEach((child) => {
      addRouteRecord(child, pathList, pathMap, record);
    });
  }
}
