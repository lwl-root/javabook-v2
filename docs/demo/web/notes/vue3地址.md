---
title: VUE3.0 路由去掉#号
---
# VUE3.0 路由去掉#号

### createWebHistory路由模式路径不带#号(生产环境下不能直接访问项目，需要nginx转发)

```
http://localhost:8080/#/
const router = createRouter({
  history: createWebHistory(),
  routes
});
```

### createWebHashHistory路由模式路径带#号

```
http://localhost:8080/
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
```

