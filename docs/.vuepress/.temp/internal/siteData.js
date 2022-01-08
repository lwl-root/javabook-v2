export const siteData = {
  "base": "/",
  "lang": "zh-CN",
  "title": "Java笔记",
  "description": "I LOVE CHINA",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "logo.png"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
