export const data = {
  "key": "v-52458d85",
  "path": "/one-stage/myjdbc/notes/%E6%95%B0%E6%8D%AE%E5%BA%93%E8%BF%9E%E6%8E%A5%E6%B1%A0.html",
  "title": "数据库连接池",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "基本概念",
      "slug": "基本概念",
      "children": []
    },
    {
      "level": 2,
      "title": "选择哪个数据库连接池",
      "slug": "选择哪个数据库连接池",
      "children": [
        {
          "level": 3,
          "title": "不选择 C3P0 的原因：",
          "slug": "不选择-c3p0-的原因",
          "children": []
        },
        {
          "level": 3,
          "title": "不选择 DBCP2 的原因：",
          "slug": "不选择-dbcp2-的原因",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Druid",
      "slug": "druid",
      "children": [
        {
          "level": 3,
          "title": "简单使用",
          "slug": "简单使用",
          "children": []
        },
        {
          "level": 3,
          "title": "结合配置文件使用",
          "slug": "结合配置文件使用",
          "children": []
        },
        {
          "level": 3,
          "title": "Druid 中的工具类：JdbcUtils",
          "slug": "druid-中的工具类-jdbcutils",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "HikariCP",
      "slug": "hikaricp",
      "children": [
        {
          "level": 3,
          "title": "简单使用",
          "slug": "简单使用-1",
          "children": []
        },
        {
          "level": 3,
          "title": "配合配置文件使用",
          "slug": "配合配置文件使用",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 1641659480000,
    "contributors": [
      {
        "name": "卢文龙",
        "email": "1251601077@qq.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "one-stage/myjdbc/notes/数据库连接池.md"
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
