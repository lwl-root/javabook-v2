export const siteData = {
  "base": "/",
  "lang": "zh-CN",
  "title": "J a v a",
  "description": "富强、民主、文明、和谐、自由、平等、公正、法治、爱国、敬业、诚信、友善",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "logo.png"
      }
    ],
    [
      "script",
      {},
      "\n            var _hmt = _hmt || [];\n            (function() {\n                var hm = document.createElement(\"script\");\n                hm.src = \"https://hm.baidu.com/hm.js?f1bb2cadd6233359a7e375f48570aab5\";\n                var s = document.getElementsByTagName(\"script\")[0]; \n                s.parentNode.insertBefore(hm, s);\n            })();\n        "
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
