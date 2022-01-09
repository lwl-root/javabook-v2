export const data = {
  "key": "v-5bdb09f2",
  "path": "/one-stage/myjdbc/notes/JDBC%E4%B8%AD%E7%9A%84%E4%BA%8B%E5%8A%A1.html",
  "title": "事务",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "事务的 ACID 属性",
      "slug": "事务的-acid-属性",
      "children": []
    },
    {
      "level": 2,
      "title": "三大问题",
      "slug": "三大问题",
      "children": [
        {
          "level": 3,
          "title": "脏读问题",
          "slug": "脏读问题",
          "children": []
        },
        {
          "level": 3,
          "title": "不可重复读问题",
          "slug": "不可重复读问题",
          "children": []
        },
        {
          "level": 3,
          "title": "幻读问题",
          "slug": "幻读问题",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "四个隔离级别",
      "slug": "四个隔离级别",
      "children": []
    },
    {
      "level": 2,
      "title": "JDBC 事务的自动提交和隔离级别",
      "slug": "jdbc-事务的自动提交和隔离级别",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1641659655000
  },
  "filePathRelative": "one-stage/myjdbc/notes/JDBC中的事务.md"
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
