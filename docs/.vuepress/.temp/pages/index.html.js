export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "heroImage": "/images/love.png",
    "actionLink": "/zh/guide/",
    "features": [
      {
        "title": "勤奋",
        "details": "日拱一卒无有尽，功不唐捐终入海。 《法华经》"
      },
      {
        "title": "优雅",
        "details": "宠辱不惊，闲看庭前花开花落。去留无意，漫随天外云卷云舒。  《幽窗小记》"
      }
    ],
    "footer": "Copyright ©2021-11-11 lwl 版权所有"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1654741187000
  },
  "filePathRelative": "README.md"
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
