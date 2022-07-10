export const data = {
  "key": "v-f5578932",
  "path": "/demo/web/notes/vue3%E5%9C%B0%E5%9D%80.html",
  "title": "VUE3.0 路由去掉#号",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "createWebHistory路由模式路径不带#号(生产环境下不能直接访问项目，需要nginx转发)",
      "slug": "createwebhistory路由模式路径不带-号-生产环境下不能直接访问项目-需要nginx转发",
      "children": []
    },
    {
      "level": 3,
      "title": "createWebHashHistory路由模式路径带#号",
      "slug": "createwebhashhistory路由模式路径带-号",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1655722534000
  },
  "filePathRelative": "demo/web/notes/vue3地址.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
