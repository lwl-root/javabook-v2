export const themeData = {
  "logo": "logo.png",
  "contributors": false,
  "sidebarDepth": 1,
  "lastUpdated": "Last Updated",
  "navbar": [
    {
      "text": "工具库",
      "children": [
        {
          "text": "Guava工具库",
          "link": "/utilse/guava/notes/字符串工具类.html"
        },
        {
          "text": "Spring内置工具库",
          "link": "/utilse/spring-utils/notes/top-4.html"
        },
        {
          "text": "其他工具库",
          "link": "/utilse/else/notes/slf4j.html"
        },
        {
          "text": "各种模板",
          "link": "/utilse/gist/notes/jdbc.html"
        },
        {
          "text": "docker搭建常用容器",
          "link": "/utilse/docker/notes/docker搭建常用容器.html"
        }
      ]
    },
    {
      "text": "一",
      "children": [
        {
          "text": "Java",
          "link": "/one-stage/java/notes/java语法汇总.html"
        },
        {
          "text": "Java多线程",
          "link": "/one-stage/javathread/notes/多进程.html"
        },
        {
          "text": "线程安全",
          "link": "/one-stage/threadsafe/notes/a01.线程安全.html"
        },
        {
          "text": "JDK8新特性",
          "link": "/one-stage/java8/notes/lambda.html"
        },
        {
          "text": "MySQL数据库",
          "link": "/one-stage/mysql/notes/操作Database.html"
        },
        {
          "text": "JDBC操作数据库",
          "link": "/one-stage/myjdbc/notes/JDBC基础.html"
        }
      ]
    },
    {
      "text": "二",
      "children": [
        {
          "text": "前端基础",
          "link": "/two-stage/html/notes/01.基本概念和结构.html"
        },
        {
          "text": "Servlet",
          "link": "/two-stage/servlet/notes/HTTP概述.html"
        },
        {
          "text": "JUnit",
          "link": "/two-stage/junit/notes/基本概念.html"
        },
        {
          "text": "MyBatis",
          "link": "/two-stage/mybatis/notes/01.关于mybatis.html"
        }
      ]
    },
    {
      "text": "数据结构与算法",
      "children": [
        {
          "text": "入门",
          "link": "/pascal/basics/notes/数据结构与算法入门.html"
        }
      ]
    },
    {
      "text": "日常积累",
      "children": [
        {
          "text": "集合相关",
          "link": "/demo/list/notes/List去重.html"
        },
        {
          "text": "反射相关",
          "link": "/demo/reflect/notes/动态代理.html"
        }
      ]
    }
  ],
  "sidebar": {
    "/utilse/guava": [
      {
        "text": "Guava工具库",
        "collapsable": true,
        "link": "/utilse/guava/notes/字符串工具类.html",
        "children": [
          "字符串工具类.html",
          "数组工具类.html",
          "集合工具类.html",
          "转换.html",
          "新集合.html",
          "迭代器工具类.html",
          "校验工具.html",
          "文件.html",
          "charMatcher.html"
        ]
      }
    ],
    "/utilse/spring-utils": [
      {
        "text": "Spring内置工具库",
        "collapsable": true,
        "link": "/utilse/spring-utils/notes/top-4.html",
        "children": [
          "top-4.html",
          "StreamUtils.html",
          "FileCopyUtils.html",
          "Resource.html",
          "ReflectionUtils.html",
          "ResolvableType.html",
          "Base64Util.html",
          "EventBus.html"
        ]
      }
    ],
    "/utilse/else": [
      {
        "text": "其他工具库",
        "collapsable": false,
        "link": "/utilse/else/notes/slf4j.html",
        "children": [
          "slf4j.html",
          "jackson.html",
          "datasource.html",
          "lombok.html",
          "jwt.html",
          "javatuples.html",
          "bucket4j.html"
        ]
      }
    ],
    "/utilse/gist": [
      {
        "text": "各种模板",
        "collapsable": false,
        "link": "/utilse/gist/notes/jdbc.html",
        "children": [
          {
            "text": "模板 for jdbc",
            "link": "/utilse/gist/notes/jdbc.html"
          },
          {
            "text": "模板 for logback",
            "link": "/utilse/gist/notes/logback.html"
          },
          {
            "text": "模板 for maven",
            "link": "/utilse/gist/notes/maven-xml.html"
          },
          {
            "text": "模板 for mybatis",
            "link": "/utilse/gist/notes/mybatis-xml.html"
          },
          {
            "text": "模板 for SSM整合(代码配置)",
            "link": "/utilse/gist/notes/ssm-java.html"
          },
          {
            "text": "模板 for docker-compose",
            "link": "/utilse/gist/notes/docker-compose.html"
          },
          {
            "text": "模板 for Git",
            "link": "/utilse/gist/notes/git常用命令汇总.html"
          }
        ]
      }
    ],
    "/utilse/docker": [
      {
        "title": "docker搭建容器模板",
        "collapsable": false,
        "link": "/utilse/docker/notes/docker搭建常用容器.html",
        "children": [
          "docker搭建常用容器.html"
        ]
      }
    ],
    "/one-stage/javathread": [
      {
        "text": "多线程",
        "collapsable": false,
        "link": "/one-stage/javathread/notes/多进程.html",
        "children": [
          "多进程.html",
          "多线程.html",
          "thread.html",
          "runnable.html",
          "线程的状态.html",
          "线程的调用.html",
          "锁.html"
        ]
      },
      {
        "text": "线程池",
        "collapsable": false,
        "link": "/one-stage/javathread/notes/线程池.html",
        "children": [
          "线程池.html",
          "ThreadPoolExecutor.html",
          "Executors.html"
        ]
      }
    ],
    "/one-stage/java8": [
      {
        "text": "JDK8新特性",
        "collapsable": false,
        "link": "/one-stage/java8/notes/lambda.html",
        "children": [
          "lambda.html",
          "function-interface.html",
          "默认方法.html",
          "stream.html",
          "Optional.html",
          "LocalDateTime.html",
          "Nashorn.html",
          "JUC-线程池.html",
          "JUC-FutureTask.html"
        ]
      }
    ],
    "/one-stage/java": [
      {
        "text": "Java基础",
        "collapsable": false,
        "link": "/one-stage/java/notes/引用.html",
        "children": [
          "引用.html",
          "集合框架.html",
          "反射.html",
          "UML.html"
        ]
      },
      {
        "text": "杂项",
        "collapsable": false,
        "link": "/one-stage/java/notes/环境变量.html",
        "children": [
          "环境变量.html",
          "二进制与十进制.html",
          "unicode.html",
          "classpath.html",
          "防御式编程.html",
          "时区.html",
          "异常的作用.html",
          "自己生成唯一ID.html",
          "普通单例.html",
          "枚举单例.html"
        ]
      }
    ],
    "/one-stage/myjdbc": [
      {
        "text": "JDBC操作数据库",
        "collapsable": false,
        "link": "/one-stage/myjdbc/notes/JDBC基础.html",
        "children": [
          "JDBC基础.html",
          "JDBC高级.html",
          "数据库连接池.html",
          "JDBC中的事务.html",
          "Service层中的事务.html"
        ]
      }
    ],
    "/one-stage/threadsafe": [
      {
        "text": "基础",
        "collapsable": false,
        "link": "/one-stage/threadsafe/notes/a01.线程安全.html",
        "children": [
          "a01.线程安全.html",
          "a02.ThreadLocal.html",
          "a04.synchronized.html",
          "a06.ReentrantLock.html"
        ]
      },
      {
        "text": "进阶",
        "collapsable": false,
        "link": "/one-stage/threadsafe/notes/b00.condition.html",
        "children": [
          "b00.condition.html",
          "b02.semaphore.html"
        ]
      },
      {
        "text": "高级",
        "collapsable": false,
        "link": "/one-stage/threadsafe/notes/c00.atomic.html",
        "children": [
          "c00.atomic.html",
          "c02.CAS.html"
        ]
      }
    ],
    "/one-stage/mysql": [
      {
        "text": "MySQL数据库",
        "collapsable": false,
        "link": "/one-stage/mysql/notes/操作Database.html",
        "children": [
          "操作Database.html",
          "操作Table.html",
          "查询语句.html",
          "CUD.html",
          "索引.html",
          "事务.html",
          "视图.html",
          "索引和数据库优化.html",
          "用户和权限管理.html"
        ]
      }
    ],
    "/two-stage/html": [
      {
        "text": "HTML",
        "collapsable": false,
        "link": "/two-stage/html/notes/01.基本概念和结构.html",
        "children": [
          "01.基本概念和结构.html",
          "02.单标签元素与双标签元素.html",
          "03.常用元素.html",
          "04.表单元素.html",
          "05.元素的分类.html"
        ]
      },
      {
        "text": "CSS",
        "collapsable": false,
        "link": "/two-stage/html/notes/01.CSS选择器.html",
        "children": [
          "01.CSS选择器.html",
          "02.Flex布局（上）.html",
          "03.Flex布局（下）.html",
          "04.CSS3新发现.html"
        ]
      },
      {
        "text": "JavaScript",
        "collapsable": false,
        "link": "/two-stage/html/notes/01.JavaScript编程基础.html",
        "children": [
          "01.JavaScript编程基础.html",
          "02.JavaScript面向对象编程.html",
          "03.BOM和DOM.html",
          "04.js-utils.html"
        ]
      },
      {
        "text": "ECMAScript6",
        "collapsable": false,
        "link": "/two-stage/html/notes/01.ES6新特性.html",
        "children": [
          "01.ES6新特性.html",
          "02.模块化.html",
          "03.promise对象.html",
          "04.HTML5的web storage.html"
        ]
      }
    ],
    "/two-stage/servlet": [
      {
        "text": "Servlet",
        "collapsable": false,
        "link": "/two-stage/servlet/notes/HTTP概述.html",
        "children": [
          "HTTP概述.html",
          "Servlet基础.html",
          "javaWeb进阶.html",
          "javaWeb高级.html"
        ]
      }
    ],
    "/two-stage/junit": [
      {
        "text": "JUnit",
        "collapsable": false,
        "link": "/two-stage/junit/notes/基本概念.html",
        "children": [
          "基本概念.html",
          "spring-test-junit5.html",
          "mockito.html",
          "MockMvc.html",
          "spring-boot.html",
          "TDD.html",
          "spring-@sql.html"
        ]
      }
    ],
    "/two-stage/mybatis": [
      {
        "text": "基础",
        "collapsable": false,
        "link": "/two-stage/mybatis/notes/01.关于mybatis.html",
        "children": [
          "01.关于mybatis.html",
          "01.基本概念.html",
          "01.执行SQL语句.html",
          "01.SqlSession线程安全问题.html"
        ]
      },
      {
        "text": "进阶",
        "collapsable": false,
        "link": "/two-stage/mybatis/notes/02.动态SQL.html",
        "children": [
          "02.动态SQL.html",
          "02.注解的简单使用.html",
          "02.映射结果集（基本）.html",
          "02.同用两种配置.html",
          "02.映射结果集（高级）.html",
          "02.注解中的结果集映射.html",
          "02.mybatis分页.html"
        ]
      },
      {
        "text": "高级",
        "collapsable": false,
        "link": "/two-stage/mybatis/notes/03.MyBatis Generator.html",
        "children": [
          "03.MyBatis Generator.html"
        ]
      },
      {
        "text": "扩展",
        "collapsable": false,
        "children": []
      }
    ],
    "/pascal/basics": [
      {
        "text": "数据结构与算法",
        "collapsable": false,
        "link": "/pascal/list/notes/数据结构与算法入门.html",
        "children": [
          "数据结构与算法入门.html"
        ]
      }
    ],
    "/demo/list": [
      {
        "text": "集合相关",
        "collapsable": false,
        "link": "/demo/list/notes/List去重.html",
        "children": [
          "List去重.html"
        ]
      }
    ],
    "/demo/reflect": [
      {
        "text": "反射相关",
        "collapsable": false,
        "link": "/demo/list/notes/动态代理.html",
        "children": [
          "动态代理.html"
        ]
      }
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdatedText": "Last Updated",
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
