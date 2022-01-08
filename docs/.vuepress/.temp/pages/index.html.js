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
        "details": "夫民劳则思,思则善心生;逸则淫,淫则忘善;忘善则恶心生。 先秦·佚名《敬姜论劳逸》"
      },
      {
        "title": "高贵",
        "details": "关关雎鸠，在河之洲。窈窕淑女，君子好逑。 先秦·佚名《关雎》"
      }
    ],
    "footer": "lwl | CHINA © 2021-11-11"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1641659655000,
    "contributors": [
      {
        "name": "卢文龙",
        "email": "1251601077@qq.com",
        "commits": 3
      },
      {
        "name": "卢文龙",
        "email": "8771962+lwl-root@user.noreply.gitee.com",
        "commits": 1
      }
    ]
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
