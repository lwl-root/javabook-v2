export const data = {
  "key": "v-57d9d08a",
  "path": "/one-stage/java/notes/%E6%99%AE%E9%80%9A%E5%8D%95%E4%BE%8B.html",
  "title": "普通单例模式的实现",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "1. 饿汉式",
      "slug": "_1-饿汉式",
      "children": []
    },
    {
      "level": 2,
      "title": "2. 懒汉式",
      "slug": "_2-懒汉式",
      "children": []
    },
    {
      "level": 2,
      "title": "3. 双校验懒汉式",
      "slug": "_3-双校验懒汉式",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1641659655000,
    "contributors": [
      {
        "name": "卢文龙",
        "email": "1251601077@qq.com",
        "commits": 3
      }
    ]
  },
  "filePathRelative": "one-stage/java/notes/普通单例.md"
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
