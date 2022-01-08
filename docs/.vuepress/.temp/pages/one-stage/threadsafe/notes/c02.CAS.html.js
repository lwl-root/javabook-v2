export const data = {
  "key": "v-32a88122",
  "path": "/one-stage/threadsafe/notes/c02.CAS.html",
  "title": "CAS 与 ABA 问题",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "1. ABA 问题描述",
      "slug": "_1-aba-问题描述",
      "children": []
    },
    {
      "level": 2,
      "title": "2. ABA 问题的解决",
      "slug": "_2-aba-问题的解决",
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
  "filePathRelative": "one-stage/threadsafe/notes/c02.CAS.md"
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
