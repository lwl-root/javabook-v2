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
        "title": "善良",
        "details": "夫民劳则思，思则善心生；逸则淫，淫则忘善；忘善则恶心生。 《敬姜论劳逸》"
      },
      {
        "title": "勤奋",
        "details": "日拱一卒无有尽，功不唐捐终入海。 《法华经》"
      }
    ],
    "footer": "Copyright ©2021-11-11 lwl 版权所有"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1649234722000
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
