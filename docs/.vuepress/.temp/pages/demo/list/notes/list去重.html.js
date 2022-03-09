export const data = {
  "key": "v-414c719e",
  "path": "/demo/list/notes/list%E5%8E%BB%E9%87%8D.html",
  "title": "List集合去重",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "前置知识",
      "slug": "前置知识",
      "children": [
        {
          "level": 3,
          "title": "无序集合",
          "slug": "无序集合",
          "children": []
        },
        {
          "level": 3,
          "title": "有序集合",
          "slug": "有序集合",
          "children": []
        },
        {
          "level": 3,
          "title": "有序和无序",
          "slug": "有序和无序",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "方法1：contains判断去重(有序)",
      "slug": "方法1-contains判断去重-有序",
      "children": []
    },
    {
      "level": 2,
      "title": "方法2：迭代器去重(无序)",
      "slug": "方法2-迭代器去重-无序",
      "children": []
    },
    {
      "level": 2,
      "title": "方法3：HashSet去重(无序)",
      "slug": "方法3-hashset去重-无序",
      "children": []
    },
    {
      "level": 2,
      "title": "方法4：LinkedHashSet去重(有序)",
      "slug": "方法4-linkedhashset去重-有序",
      "children": []
    },
    {
      "level": 2,
      "title": "方法5：TreeSet去重(无序)",
      "slug": "方法5-treeset去重-无序",
      "children": []
    },
    {
      "level": 2,
      "title": "方法6：Stream去重(有序)",
      "slug": "方法6-stream去重-有序",
      "children": []
    },
    {
      "level": 2,
      "title": "总结",
      "slug": "总结",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1642486696000
  },
  "filePathRelative": "demo/list/notes/list去重.md"
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
