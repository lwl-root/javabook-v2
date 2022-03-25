export const searchIndex = [
  {
    "title": "",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "单例模式",
    "headers": [
      {
        "level": 2,
        "title": "饿汉式与懒汉式",
        "slug": "饿汉式与懒汉式",
        "children": [
          {
            "level": 3,
            "title": "1.饿汉式单例",
            "slug": "_1-饿汉式单例",
            "children": []
          },
          {
            "level": 3,
            "title": "2.懒汉式",
            "slug": "_2-懒汉式",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "应用场景",
        "slug": "应用场景",
        "children": []
      }
    ],
    "path": "/c-book/gof23/notes/%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "消息队列的流派",
    "headers": [
      {
        "level": 2,
        "title": "一、Kafka介绍",
        "slug": "一、kafka介绍",
        "children": [
          {
            "level": 3,
            "title": "1.Kafka的使用场景",
            "slug": "_1-kafka的使用场景",
            "children": []
          },
          {
            "level": 3,
            "title": "2.Kafka基本概念",
            "slug": "_2-kafka基本概念",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "二、kafka基本使用",
        "slug": "二、kafka基本使用",
        "children": [
          {
            "level": 3,
            "title": "1.安装前的环境准备",
            "slug": "_1-安装前的环境准备",
            "children": []
          },
          {
            "level": 3,
            "title": "2.启动kafka服务器",
            "slug": "_2-启动kafka服务器",
            "children": []
          },
          {
            "level": 3,
            "title": "3.创建主题topic",
            "slug": "_3-创建主题topic",
            "children": []
          },
          {
            "level": 3,
            "title": "4.发送消息",
            "slug": "_4-发送消息",
            "children": []
          },
          {
            "level": 3,
            "title": "5.消费消息",
            "slug": "_5-消费消息",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "三、Kafka中的关键细节",
        "slug": "三、kafka中的关键细节",
        "children": [
          {
            "level": 3,
            "title": "1.消息的顺序存储",
            "slug": "_1-消息的顺序存储",
            "children": []
          },
          {
            "level": 3,
            "title": "2. 单播消息的实现",
            "slug": "_2-单播消息的实现",
            "children": []
          },
          {
            "level": 3,
            "title": "3.多播消息的实现",
            "slug": "_3-多播消息的实现",
            "children": []
          },
          {
            "level": 3,
            "title": "在一些业务场景中需要让一条消息被多个消费者消费，那么就可以使用多播模式。",
            "slug": "在一些业务场景中需要让一条消息被多个消费者消费-那么就可以使用多播模式。",
            "children": []
          },
          {
            "level": 3,
            "title": "4.查看消费组及信息",
            "slug": "_4-查看消费组及信息",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "四、主题、分区的概念",
        "slug": "四、主题、分区的概念",
        "children": [
          {
            "level": 3,
            "title": "1.主题Topic",
            "slug": "_1-主题topic",
            "children": []
          },
          {
            "level": 3,
            "title": "2.partition分区",
            "slug": "_2-partition分区",
            "children": []
          },
          {
            "level": 3,
            "title": "为一个主题创建多个分区",
            "slug": "为一个主题创建多个分区",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "五、Kafka集群及副本的概念",
        "slug": "五、kafka集群及副本的概念",
        "children": [
          {
            "level": 3,
            "title": "1.搭建kafka集群， 3 个broker",
            "slug": "_1-搭建kafka集群-3-个broker",
            "children": []
          },
          {
            "level": 3,
            "title": "使用如下命令来启动 3 台服务器",
            "slug": "使用如下命令来启动-3-台服务器",
            "children": []
          },
          {
            "level": 3,
            "title": "2.副本的概念",
            "slug": "_2-副本的概念",
            "children": []
          },
          {
            "level": 3,
            "title": "3.broker、主题、分区、副本",
            "slug": "_3-broker、主题、分区、副本",
            "children": []
          },
          {
            "level": 3,
            "title": "4.kafka集群消息的发送",
            "slug": "_4-kafka集群消息的发送",
            "children": []
          },
          {
            "level": 3,
            "title": "5.kafka集群消息的消费",
            "slug": "_5-kafka集群消息的消费",
            "children": []
          },
          {
            "level": 3,
            "title": "6.关于分区消费组消费者的细节",
            "slug": "_6-关于分区消费组消费者的细节",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "六、Kafka的Java客户端-生产者",
        "slug": "六、kafka的java客户端-生产者",
        "children": [
          {
            "level": 3,
            "title": "1.引入依赖",
            "slug": "_1-引入依赖",
            "children": []
          },
          {
            "level": 3,
            "title": "2.生产者发送消息的基本实现",
            "slug": "_2-生产者发送消息的基本实现",
            "children": []
          },
          {
            "level": 3,
            "title": "3.发送消息到指定分区上",
            "slug": "_3-发送消息到指定分区上",
            "children": []
          },
          {
            "level": 3,
            "title": "4.未指定分区，则会通过业务key的hash运算，算出消息往哪个分区上发",
            "slug": "_4-未指定分区-则会通过业务key的hash运算-算出消息往哪个分区上发",
            "children": []
          },
          {
            "level": 3,
            "title": "5.同步发送",
            "slug": "_5-同步发送",
            "children": []
          },
          {
            "level": 3,
            "title": "6.异步发消息",
            "slug": "_6-异步发消息",
            "children": []
          },
          {
            "level": 3,
            "title": "7.关于生产者的ack参数配置",
            "slug": "_7-关于生产者的ack参数配置",
            "children": []
          },
          {
            "level": 3,
            "title": "8.其他一些细节",
            "slug": "_8-其他一些细节",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "七、消费者",
        "slug": "七、消费者",
        "children": [
          {
            "level": 3,
            "title": "1.消费者消费消息的基本实现",
            "slug": "_1-消费者消费消息的基本实现",
            "children": []
          },
          {
            "level": 3,
            "title": "2.自动提交offset",
            "slug": "_2-自动提交offset",
            "children": []
          },
          {
            "level": 3,
            "title": "3.手动提交offset",
            "slug": "_3-手动提交offset",
            "children": []
          },
          {
            "level": 3,
            "title": "4.消费者poll消息的过程",
            "slug": "_4-消费者poll消息的过程",
            "children": []
          },
          {
            "level": 3,
            "title": "5.指定分区消费",
            "slug": "_5-指定分区消费",
            "children": []
          },
          {
            "level": 3,
            "title": "6.消息回溯消费",
            "slug": "_6-消息回溯消费",
            "children": []
          },
          {
            "level": 3,
            "title": "7.指定offset消费",
            "slug": "_7-指定offset消费",
            "children": []
          },
          {
            "level": 3,
            "title": "8.从指定时间点消费",
            "slug": "_8-从指定时间点消费",
            "children": []
          },
          {
            "level": 3,
            "title": "9.新消费组的消费偏移量",
            "slug": "_9-新消费组的消费偏移量",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "八 、Springboot中使用Kafka",
        "slug": "八-、springboot中使用kafka",
        "children": [
          {
            "level": 3,
            "title": "1.引入依赖",
            "slug": "_1-引入依赖-1",
            "children": []
          },
          {
            "level": 3,
            "title": "2.配置文件",
            "slug": "_2-配置文件",
            "children": []
          },
          {
            "level": 3,
            "title": "3.消息生产者",
            "slug": "_3-消息生产者",
            "children": []
          },
          {
            "level": 3,
            "title": "4.消息消费者",
            "slug": "_4-消息消费者",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "九、Kafka集群Controller、Rebalance和HW",
        "slug": "九、kafka集群controller、rebalance和hw",
        "children": [
          {
            "level": 3,
            "title": "1.Controller",
            "slug": "_1-controller",
            "children": []
          },
          {
            "level": 3,
            "title": "2.Rebalance机制",
            "slug": "_2-rebalance机制",
            "children": []
          },
          {
            "level": 3,
            "title": "3.HW和LEO",
            "slug": "_3-hw和leo",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "十、Kafka线上问题优化",
        "slug": "十、kafka线上问题优化",
        "children": [
          {
            "level": 3,
            "title": "1.如何防止消息丢失",
            "slug": "_1-如何防止消息丢失",
            "children": []
          },
          {
            "level": 3,
            "title": "2.如何防止消息的重复消费",
            "slug": "_2-如何防止消息的重复消费",
            "children": []
          },
          {
            "level": 3,
            "title": "幂等性如何保证：",
            "slug": "幂等性如何保证",
            "children": []
          },
          {
            "level": 3,
            "title": "3.如何做到顺序消费RocketMQ",
            "slug": "_3-如何做到顺序消费rocketmq",
            "children": []
          },
          {
            "level": 3,
            "title": "4.解决消息积压问题",
            "slug": "_4-解决消息积压问题",
            "children": []
          },
          {
            "level": 3,
            "title": "5.延迟队列",
            "slug": "_5-延迟队列",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "十一、Kafka-eagle监控平台",
        "slug": "十一、kafka-eagle监控平台",
        "children": [
          {
            "level": 3,
            "title": "安装Kafka-eagle",
            "slug": "安装kafka-eagle",
            "children": []
          }
        ]
      }
    ],
    "path": "/c-book/kafka/notes/kafka.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "spring security",
    "headers": [
      {
        "level": 2,
        "title": "1.图解",
        "slug": "_1-图解",
        "children": []
      },
      {
        "level": 2,
        "title": "2.身份认证流程",
        "slug": "_2-身份认证流程",
        "children": [
          {
            "level": 3,
            "title": "2.1  登录参数和配置",
            "slug": "_2-1-登录参数和配置",
            "children": []
          },
          {
            "level": 3,
            "title": "2.2 用户登录",
            "slug": "_2-2-用户登录",
            "children": []
          },
          {
            "level": 3,
            "title": "2.3  根据用户名查询",
            "slug": "_2-3-根据用户名查询",
            "children": []
          },
          {
            "level": 3,
            "title": "2.4 密码校验",
            "slug": "_2-4-密码校验",
            "children": []
          },
          {
            "level": 3,
            "title": "2.5 登录后请求，校验token",
            "slug": "_2-5-登录后请求-校验token",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "3.授权认证流程",
        "slug": "_3-授权认证流程",
        "children": []
      },
      {
        "level": 2,
        "title": "4.核心组件",
        "slug": "_4-核心组件",
        "children": [
          {
            "level": 3,
            "title": "4.1 SecurityContextHolder",
            "slug": "_4-1-securitycontextholder",
            "children": []
          },
          {
            "level": 3,
            "title": "4.2 SecurityContext",
            "slug": "_4-2-securitycontext",
            "children": []
          },
          {
            "level": 3,
            "title": "4.3 Authentication",
            "slug": "_4-3-authentication",
            "children": []
          },
          {
            "level": 3,
            "title": "4.4 GrantedAuthority",
            "slug": "_4-4-grantedauthority",
            "children": []
          },
          {
            "level": 3,
            "title": "4.5 UserDetails",
            "slug": "_4-5-userdetails",
            "children": []
          },
          {
            "level": 3,
            "title": "4.6 UserDetailsService",
            "slug": "_4-6-userdetailsservice",
            "children": []
          },
          {
            "level": 3,
            "title": "4.7 AuthenticationManager",
            "slug": "_4-7-authenticationmanager",
            "children": []
          },
          {
            "level": 3,
            "title": "4.8 DaoAuthenticationProvider",
            "slug": "_4-8-daoauthenticationprovider",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "5.相关注解",
        "slug": "_5-相关注解",
        "children": [
          {
            "level": 3,
            "title": "5.1 @EnableWebSecurity",
            "slug": "_5-1-enablewebsecurity",
            "children": []
          },
          {
            "level": 3,
            "title": "5.2 @EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)",
            "slug": "_5-2-enableglobalmethodsecurity-prepostenabled-true-securedenabled-true",
            "children": []
          },
          {
            "level": 3,
            "title": "5.3  表达式及注解说明",
            "slug": "_5-3-表达式及注解说明",
            "children": []
          },
          {
            "level": 3,
            "title": "表达式控制URL权限",
            "slug": "表达式控制url权限",
            "children": []
          },
          {
            "level": 3,
            "title": "5.3  @PreAuthorize  在方法执行前进行验证",
            "slug": "_5-3-preauthorize-在方法执行前进行验证",
            "children": []
          },
          {
            "level": 3,
            "title": "5.4  @PostAuthorize  在方法执行后进行验证",
            "slug": "_5-4-postauthorize-在方法执行后进行验证",
            "children": []
          },
          {
            "level": 3,
            "title": "5.5  @PreFilter  对参数进行过滤",
            "slug": "_5-5-prefilter-对参数进行过滤",
            "children": []
          },
          {
            "level": 3,
            "title": "5.6  @PostFilter  对返回值进行过滤",
            "slug": "_5-6-postfilter-对返回值进行过滤",
            "children": []
          },
          {
            "level": 3,
            "title": "5.7自定义权限处理",
            "slug": "_5-7自定义权限处理",
            "children": []
          }
        ]
      }
    ],
    "path": "/c-book/spring-security/notes/spring-security.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Oracle中的子查询",
    "headers": [
      {
        "level": 2,
        "title": "子查询使用场景",
        "slug": "子查询使用场景",
        "children": []
      },
      {
        "level": 2,
        "title": "问题一：子查询语法中的小括号",
        "slug": "问题一-子查询语法中的小括号",
        "children": []
      },
      {
        "level": 2,
        "title": "问题二：子查询的书写风格",
        "slug": "问题二-子查询的书写风格",
        "children": []
      },
      {
        "level": 2,
        "title": "问题三：可以使用子查询的位置",
        "slug": "问题三-可以使用子查询的位置",
        "children": []
      },
      {
        "level": 2,
        "title": "问题四：不可以使用子查询的位置",
        "slug": "问题四-不可以使用子查询的位置",
        "children": []
      },
      {
        "level": 2,
        "title": "问题五：FROM 后面的子查询",
        "slug": "问题五-from-后面的子查询",
        "children": []
      },
      {
        "level": 2,
        "title": "问题六：子查询和主查询使用的表",
        "slug": "问题六-子查询和主查询使用的表",
        "children": []
      },
      {
        "level": 2,
        "title": "问题七：子查询中的排序",
        "slug": "问题七-子查询中的排序",
        "children": []
      },
      {
        "level": 2,
        "title": "问题八：子查询的执行顺序",
        "slug": "问题八-子查询的执行顺序",
        "children": []
      },
      {
        "level": 2,
        "title": "问题九：单行子查询与多行子查询的区别",
        "slug": "问题九-单行子查询与多行子查询的区别",
        "children": []
      },
      {
        "level": 2,
        "title": "问题十：子查询中的null值问题",
        "slug": "问题十-子查询中的null值问题",
        "children": []
      }
    ],
    "path": "/demo/databases/notes/%E6%95%B0%E6%8D%AE%E5%BA%93test.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "junit-vintage-engine和junit-jupiter-engine之间的区别",
    "headers": [],
    "path": "/demo/frame/notes/junitTest.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "SpringBoot集成Swagger",
    "headers": [
      {
        "level": 2,
        "title": "1、添加pom依赖",
        "slug": "_1、添加pom依赖",
        "children": []
      },
      {
        "level": 2,
        "title": "2、创建Swagger2Configuration.java",
        "slug": "_2、创建swagger2configuration-java",
        "children": []
      },
      {
        "level": 2,
        "title": "3、API接口编写（Controller）",
        "slug": "_3、api接口编写-controller",
        "children": []
      },
      {
        "level": 2,
        "title": "4、启动SpringBoot应用",
        "slug": "_4、启动springboot应用",
        "children": []
      },
      {
        "level": 2,
        "title": "5、对swgager文档的美化框架（2次封装）",
        "slug": "_5、对swgager文档的美化框架-2次封装",
        "children": [
          {
            "level": 3,
            "title": "5.1、依赖(只需要这一个依赖即可，里面包含有swagger的依赖)",
            "slug": "_5-1、依赖-只需要这一个依赖即可-里面包含有swagger的依赖",
            "children": []
          },
          {
            "level": 3,
            "title": "5.2、配置",
            "slug": "_5-2、配置",
            "children": []
          },
          {
            "level": 3,
            "title": "5.3、打开地址及页面效果",
            "slug": "_5-3、打开地址及页面效果",
            "children": []
          }
        ]
      }
    ],
    "path": "/demo/frame/notes/swagger2.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Java反射基础",
    "headers": [
      {
        "level": 2,
        "title": "使用步骤",
        "slug": "使用步骤",
        "children": [
          {
            "level": 3,
            "title": "1、获取目标类型的Class对象",
            "slug": "_1、获取目标类型的class对象",
            "children": []
          },
          {
            "level": 3,
            "title": "2、通过 Class 对象分别获取Constructor类对象、Method类对象 & Field 类对象",
            "slug": "_2、通过-class-对象分别获取constructor类对象、method类对象-field-类对象",
            "children": []
          },
          {
            "level": 3,
            "title": "3、通过 Constructor类对象、Method类对象 & Field类对象分别创建对象、调用方法、成员变量赋值",
            "slug": "_3、通过-constructor类对象、method类对象-field类对象分别创建对象、调用方法、成员变量赋值",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "反射使用",
        "slug": "反射使用",
        "children": [
          {
            "level": 3,
            "title": "业务类",
            "slug": "业务类",
            "children": []
          },
          {
            "level": 3,
            "title": "非反射方法",
            "slug": "非反射方法",
            "children": []
          },
          {
            "level": 3,
            "title": "反射方法",
            "slug": "反射方法",
            "children": []
          }
        ]
      }
    ],
    "path": "/demo/Java/notes/java%E5%8F%8D%E5%B0%84.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "List集合去重",
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
    "path": "/demo/Java/notes/list%E5%8E%BB%E9%87%8D.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "什么是动态代理",
    "headers": [
      {
        "level": 2,
        "title": "一、介绍",
        "slug": "一、介绍",
        "children": []
      },
      {
        "level": 2,
        "title": "二、静态代理",
        "slug": "二、静态代理",
        "children": []
      },
      {
        "level": 2,
        "title": "三、动态代理",
        "slug": "三、动态代理",
        "children": []
      },
      {
        "level": 2,
        "title": "四、静态织入",
        "slug": "四、静态织入",
        "children": [
          {
            "level": 3,
            "title": "五、小结",
            "slug": "五、小结",
            "children": []
          },
          {
            "level": 3,
            "title": "六、参考",
            "slug": "六、参考",
            "children": []
          }
        ]
      }
    ],
    "path": "/demo/Java/notes/%E5%8A%A8%E6%80%81%E4%BB%A3%E7%90%86.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Classpath 在哪？",
    "headers": [
      {
        "level": 2,
        "title": "1. 什么叫 Classpath？",
        "slug": "_1-什么叫-classpath",
        "children": [
          {
            "level": 3,
            "title": "Java 项目的 Classpath",
            "slug": "java-项目的-classpath",
            "children": []
          },
          {
            "level": 3,
            "title": "Java Web 项目的 Classpath",
            "slug": "java-web-项目的-classpath",
            "children": []
          },
          {
            "level": 3,
            "title": "『src 目录就是 Classpath』不对",
            "slug": "『src-目录就是-classpath』不对",
            "children": []
          },
          {
            "level": 3,
            "title": "『src 目录就是 Classpath』有一定道理",
            "slug": "『src-目录就是-classpath』有一定道理",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "2. 有对应关系的文件夹可以不止一个",
        "slug": "_2-有对应关系的文件夹可以不止一个",
        "children": []
      }
    ],
    "path": "/one-stage/java/notes/classpath.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "知识点汇总",
    "headers": [
      {
        "level": 2,
        "title": "在画面上显示字符",
        "slug": "在画面上显示字符",
        "children": []
      },
      {
        "level": 2,
        "title": "使用变量",
        "slug": "使用变量",
        "children": []
      },
      {
        "level": 2,
        "title": "程序流程之分支",
        "slug": "程序流程之分支",
        "children": []
      },
      {
        "level": 2,
        "title": "程序流程之循环",
        "slug": "程序流程之循环",
        "children": []
      },
      {
        "level": 2,
        "title": "基本类型和运算",
        "slug": "基本类型和运算",
        "children": []
      },
      {
        "level": 2,
        "title": "数组",
        "slug": "数组",
        "children": []
      },
      {
        "level": 2,
        "title": "方法",
        "slug": "方法",
        "children": []
      },
      {
        "level": 2,
        "title": "类的基础知识",
        "slug": "类的基础知识",
        "children": []
      },
      {
        "level": 2,
        "title": "创建日期类",
        "slug": "创建日期类",
        "children": []
      },
      {
        "level": 2,
        "title": "10. 类变量和类方法",
        "slug": "_10-类变量和类方法",
        "children": []
      },
      {
        "level": 2,
        "title": "11. 包",
        "slug": "_11-包",
        "children": []
      },
      {
        "level": 2,
        "title": "12. 类的派生和多态",
        "slug": "_12-类的派生和多态",
        "children": []
      },
      {
        "level": 2,
        "title": "13. 抽象类",
        "slug": "_13-抽象类",
        "children": []
      },
      {
        "level": 2,
        "title": "14. 接口",
        "slug": "_14-接口",
        "children": []
      },
      {
        "level": 2,
        "title": "15. 字符和字符串",
        "slug": "_15-字符和字符串",
        "children": []
      },
      {
        "level": 2,
        "title": "16. 异常处理",
        "slug": "_16-异常处理",
        "children": []
      }
    ],
    "path": "/one-stage/java/notes/java%E8%AF%AD%E6%B3%95%E6%B1%87%E6%80%BB.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "每一个开发人员都应该懂的 UML 规范",
    "headers": [
      {
        "level": 2,
        "title": "1. 泛化关系（generalization）",
        "slug": "_1-泛化关系-generalization",
        "children": []
      },
      {
        "level": 2,
        "title": "2. 实现关系（realization）",
        "slug": "_2-实现关系-realization",
        "children": []
      },
      {
        "level": 2,
        "title": "3. 聚合关系（aggregation）",
        "slug": "_3-聚合关系-aggregation",
        "children": []
      },
      {
        "level": 2,
        "title": "4. 组合关系（composition）",
        "slug": "_4-组合关系-composition",
        "children": []
      },
      {
        "level": 2,
        "title": "5. 关联关系（association）",
        "slug": "_5-关联关系-association",
        "children": []
      },
      {
        "level": 2,
        "title": "6. 依赖关系（dependency）",
        "slug": "_6-依赖关系-dependency",
        "children": []
      },
      {
        "level": 2,
        "title": "7. 回顾总结",
        "slug": "_7-回顾总结",
        "children": []
      }
    ],
    "path": "/one-stage/java/notes/UML.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Unicode 编码",
    "headers": [
      {
        "level": 2,
        "title": "1. .java 文件和 .class 文件的字符编码",
        "slug": "_1-java-文件和-class-文件的字符编码",
        "children": []
      },
      {
        "level": 2,
        "title": "2. Java 中字符串的长度",
        "slug": "_2-java-中字符串的长度",
        "children": []
      },
      {
        "level": 2,
        "title": "3. 中日韩文的 UniCode 码点",
        "slug": "_3-中日韩文的-unicode-码点",
        "children": []
      },
      {
        "level": 2,
        "title": "4. Java 完美判断中文字符的方案",
        "slug": "_4-java-完美判断中文字符的方案",
        "children": []
      },
      {
        "level": 2,
        "title": "5. 三种空格",
        "slug": "_5-三种空格",
        "children": []
      }
    ],
    "path": "/one-stage/java/notes/unicode.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "二进制与十进制",
    "headers": [
      {
        "level": 2,
        "title": "1. 十进制基本概念",
        "slug": "_1-十进制基本概念",
        "children": []
      },
      {
        "level": 2,
        "title": "2. 十进制规则总结",
        "slug": "_2-十进制规则总结",
        "children": []
      },
      {
        "level": 2,
        "title": "3. 进制规则的推广",
        "slug": "_3-进制规则的推广",
        "children": []
      },
      {
        "level": 2,
        "title": "4. 重点结论",
        "slug": "_4-重点结论",
        "children": []
      },
      {
        "level": 2,
        "title": "5. 二进制",
        "slug": "_5-二进制",
        "children": []
      },
      {
        "level": 2,
        "title": "6. 十六进制",
        "slug": "_6-十六进制",
        "children": []
      }
    ],
    "path": "/one-stage/java/notes/%E4%BA%8C%E8%BF%9B%E5%88%B6%E4%B8%8E%E5%8D%81%E8%BF%9B%E5%88%B6.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "反射",
    "headers": [
      {
        "level": 2,
        "title": "1. 反射的概念",
        "slug": "_1-反射的概念",
        "children": []
      },
      {
        "level": 2,
        "title": "2. 获得类的 Class 信息",
        "slug": "_2-获得类的-class-信息",
        "children": [
          {
            "level": 3,
            "title": "获得 Class 对象",
            "slug": "获得-class-对象",
            "children": []
          },
          {
            "level": 3,
            "title": "名称信息",
            "slug": "名称信息",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "3. 获得类的 Method 信息",
        "slug": "_3-获得类的-method-信息",
        "children": [
          {
            "level": 3,
            "title": "基本方法",
            "slug": "基本方法",
            "children": []
          },
          {
            "level": 3,
            "title": "创建对象和构造方法",
            "slug": "创建对象和构造方法",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "4. 获得类的 Field 信息",
        "slug": "_4-获得类的-field-信息",
        "children": []
      }
    ],
    "path": "/one-stage/java/notes/%E5%8F%8D%E5%B0%84.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "异常的作用",
    "headers": [
      {
        "level": 2,
        "title": "1. 方法作者面对的一个问题",
        "slug": "_1-方法作者面对的一个问题",
        "children": []
      },
      {
        "level": 2,
        "title": "2. 没有异常的编程世界是怎么玩的",
        "slug": "_2-没有异常的编程世界是怎么玩的",
        "children": [
          {
            "level": 3,
            "title": "方案一",
            "slug": "方案一",
            "children": []
          },
          {
            "level": 3,
            "title": "方案二",
            "slug": "方案二",
            "children": []
          },
          {
            "level": 3,
            "title": "方案三",
            "slug": "方案三",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "3. 从语法层面解决上述问题：异常",
        "slug": "_3-从语法层面解决上述问题-异常",
        "children": []
      },
      {
        "level": 2,
        "title": "4. 异常堆栈",
        "slug": "_4-异常堆栈",
        "children": []
      }
    ],
    "path": "/one-stage/java/notes/%E5%BC%82%E5%B8%B8%E7%9A%84%E4%BD%9C%E7%94%A8.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Java的引用和对象",
    "headers": [
      {
        "level": 2,
        "title": "故事从 C 的指针变量说起",
        "slug": "故事从-c-的指针变量说起",
        "children": [
          {
            "level": 3,
            "title": "变量",
            "slug": "变量",
            "children": []
          },
          {
            "level": 3,
            "title": "强类型语言：变量的类型",
            "slug": "强类型语言-变量的类型",
            "children": []
          },
          {
            "level": 3,
            "title": "特殊类型的变量：指针变量",
            "slug": "特殊类型的变量-指针变量",
            "children": []
          },
          {
            "level": 3,
            "title": "一个容易忽视的问题：一个地址，两个指针变量",
            "slug": "一个容易忽视的问题-一个地址-两个指针变量",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "回到 Java 语言",
        "slug": "回到-java-语言",
        "children": [
          {
            "level": 3,
            "title": "Java 语言中的内存地址",
            "slug": "java-语言中的内存地址",
            "children": []
          },
          {
            "level": 3,
            "title": "Java 语言中的引用",
            "slug": "java-语言中的引用",
            "children": []
          },
          {
            "level": 3,
            "title": "一个常识性错误",
            "slug": "一个常识性错误",
            "children": []
          },
          {
            "level": 3,
            "title": "常识性错误的高阶版",
            "slug": "常识性错误的高阶版",
            "children": []
          },
          {
            "level": 3,
            "title": "引用传递",
            "slug": "引用传递",
            "children": []
          },
          {
            "level": 3,
            "title": "== 判断",
            "slug": "判断",
            "children": []
          },
          {
            "level": 3,
            "title": "引用类型的细分",
            "slug": "引用类型的细分",
            "children": []
          },
          {
            "level": 3,
            "title": "null",
            "slug": "null",
            "children": []
          },
          {
            "level": 3,
            "title": "数组与引用的关系 1",
            "slug": "数组与引用的关系-1",
            "children": []
          },
          {
            "level": 3,
            "title": "数组与引用的关系 2",
            "slug": "数组与引用的关系-2",
            "children": []
          },
          {
            "level": 3,
            "title": "1 清楚之后的马虎",
            "slug": "_1-清楚之后的马虎",
            "children": []
          },
          {
            "level": 3,
            "title": "2 引用类型的对象的属性",
            "slug": "_2-引用类型的对象的属性",
            "children": []
          }
        ]
      }
    ],
    "path": "/one-stage/java/notes/%E5%BC%95%E7%94%A8.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Java 时区问题",
    "headers": [
      {
        "level": 2,
        "title": "1. Java 时区相关",
        "slug": "_1-java-时区相关",
        "children": [
          {
            "level": 3,
            "title": "时间格式",
            "slug": "时间格式",
            "children": []
          },
          {
            "level": 3,
            "title": "表示时间相关的类",
            "slug": "表示时间相关的类",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "2. 时区转换",
        "slug": "_2-时区转换",
        "children": []
      },
      {
        "level": 2,
        "title": "3. 不同地区的服务器统一时间的解决方案",
        "slug": "_3-不同地区的服务器统一时间的解决方案",
        "children": []
      }
    ],
    "path": "/one-stage/java/notes/%E6%97%B6%E5%8C%BA.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "普通单例模式的实现",
    "headers": [
      {
        "level": 2,
        "title": "1. 饿汉式",
        "slug": "_1-饿汉式",
        "children": []
      },
      {
        "level": 2,
        "title": "2. 懒汉式",
        "slug": "_2-懒汉式",
        "children": []
      },
      {
        "level": 2,
        "title": "3. 双校验懒汉式",
        "slug": "_3-双校验懒汉式",
        "children": []
      }
    ],
    "path": "/one-stage/java/notes/%E6%99%AE%E9%80%9A%E5%8D%95%E4%BE%8B.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "利用 Java 枚举实现单例模式",
    "headers": [
      {
        "level": 2,
        "title": "1. Java 枚举",
        "slug": "_1-java-枚举",
        "children": [
          {
            "level": 3,
            "title": "基本用法",
            "slug": "基本用法",
            "children": []
          },
          {
            "level": 3,
            "title": "枚举的类方法和实例方法（了解、自学）",
            "slug": "枚举的类方法和实例方法-了解、自学",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "2. 枚举单例",
        "slug": "_2-枚举单例",
        "children": []
      }
    ],
    "path": "/one-stage/java/notes/%E6%9E%9A%E4%B8%BE%E5%8D%95%E4%BE%8B.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "为什么要配环境变量",
    "headers": [
      {
        "level": 2,
        "title": "1. 环境变量",
        "slug": "_1-环境变量",
        "children": []
      },
      {
        "level": 2,
        "title": "2. PATH 环境变量",
        "slug": "_2-path-环境变量",
        "children": []
      },
      {
        "level": 2,
        "title": "3. Java 环境变量",
        "slug": "_3-java-环境变量",
        "children": []
      },
      {
        "level": 2,
        "title": "4. JAVA_HOME 环境变量",
        "slug": "_4-java-home-环境变量",
        "children": []
      },
      {
        "level": 2,
        "title": "5. JAVA_HOME 的一个副作用",
        "slug": "_5-java-home-的一个副作用",
        "children": []
      },
      {
        "level": 2,
        "title": "6. 一个小技巧",
        "slug": "_6-一个小技巧",
        "children": []
      }
    ],
    "path": "/one-stage/java/notes/%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "自己生成唯一ID",
    "headers": [
      {
        "level": 2,
        "title": "1. UUID",
        "slug": "_1-uuid",
        "children": []
      },
      {
        "level": 2,
        "title": "2. UUID 的缺点和『好』ID 的标准",
        "slug": "_2-uuid-的缺点和『好』id-的标准",
        "children": []
      },
      {
        "level": 2,
        "title": "3. 用毫秒时间值作 ID",
        "slug": "_3-用毫秒时间值作-id",
        "children": []
      },
      {
        "level": 2,
        "title": "4. 改进一",
        "slug": "_4-改进一",
        "children": []
      },
      {
        "level": 2,
        "title": "5. 改进二",
        "slug": "_5-改进二",
        "children": []
      },
      {
        "level": 2,
        "title": "6. 改进三（可选改进）",
        "slug": "_6-改进三-可选改进",
        "children": []
      }
    ],
    "path": "/one-stage/java/notes/%E8%87%AA%E5%B7%B1%E7%94%9F%E6%88%90%E5%94%AF%E4%B8%80ID.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "契约式编程与防御式编程",
    "headers": [
      {
        "level": 2,
        "title": "1. 防御式编程",
        "slug": "_1-防御式编程",
        "children": []
      },
      {
        "level": 2,
        "title": "2. 契约式编程",
        "slug": "_2-契约式编程",
        "children": []
      }
    ],
    "path": "/one-stage/java/notes/%E9%98%B2%E5%BE%A1%E5%BC%8F%E7%BC%96%E7%A8%8B.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Java 集合底层原理剖析",
    "headers": [
      {
        "level": 2,
        "title": "1. Java 集合介绍",
        "slug": "_1-java-集合介绍",
        "children": []
      },
      {
        "level": 2,
        "title": "2. List",
        "slug": "_2-list",
        "children": [
          {
            "level": 3,
            "title": "2.1 Vector",
            "slug": "_2-1-vector",
            "children": []
          },
          {
            "level": 3,
            "title": "2.2 Stack",
            "slug": "_2-2-stack",
            "children": []
          },
          {
            "level": 3,
            "title": "2.3 ArrayList",
            "slug": "_2-3-arraylist",
            "children": []
          },
          {
            "level": 3,
            "title": "2.4 LinkedList",
            "slug": "_2-4-linkedlist",
            "children": []
          },
          {
            "level": 3,
            "title": "2.5 CopyOnWriteArrayList",
            "slug": "_2-5-copyonwritearraylist",
            "children": []
          },
          {
            "level": 3,
            "title": "2.6 ArrayList、LinkedList、Vector 三者的区别",
            "slug": "_2-6-arraylist、linkedlist、vector-三者的区别",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "3. Map",
        "slug": "_3-map",
        "children": [
          {
            "level": 3,
            "title": "HashTable",
            "slug": "hashtable",
            "children": []
          },
          {
            "level": 3,
            "title": "HashMap",
            "slug": "hashmap",
            "children": []
          },
          {
            "level": 3,
            "title": "ConcurrentHashMap",
            "slug": "concurrenthashmap",
            "children": []
          },
          {
            "level": 3,
            "title": "HashMap、Hashtable、ConccurentHashMap 三者的区别",
            "slug": "hashmap、hashtable、conccurenthashmap-三者的区别",
            "children": []
          },
          {
            "level": 3,
            "title": "TreeMap",
            "slug": "treemap",
            "children": []
          },
          {
            "level": 3,
            "title": "LinkedHashMap",
            "slug": "linkedhashmap",
            "children": []
          },
          {
            "level": 3,
            "title": "HashMap 与 TreeMap 的区别",
            "slug": "hashmap-与-treemap-的区别",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "4. Set",
        "slug": "_4-set",
        "children": [
          {
            "level": 3,
            "title": "HashSet",
            "slug": "hashset",
            "children": []
          },
          {
            "level": 3,
            "title": "TreeSet",
            "slug": "treeset",
            "children": []
          },
          {
            "level": 3,
            "title": "LinkedHashSet",
            "slug": "linkedhashset",
            "children": []
          },
          {
            "level": 3,
            "title": "HashSet、TreeSet、LinkedHashSet 的区别",
            "slug": "hashset、treeset、linkedhashset-的区别",
            "children": []
          },
          {
            "level": 3,
            "title": "CopyOnWriteArraySet",
            "slug": "copyonwritearrayset",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "5. Queue",
        "slug": "_5-queue",
        "children": [
          {
            "level": 3,
            "title": "非阻塞队列（普通队列）",
            "slug": "非阻塞队列-普通队列",
            "children": []
          },
          {
            "level": 3,
            "title": "阻塞队列",
            "slug": "阻塞队列",
            "children": []
          },
          {
            "level": 3,
            "title": "其它队列（优先级队列）",
            "slug": "其它队列-优先级队列",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "6. 集合框架的线程安全问题",
        "slug": "_6-集合框架的线程安全问题",
        "children": [
          {
            "level": 3,
            "title": "JDK 1.0 时代的集合类",
            "slug": "jdk-1-0-时代的集合类",
            "children": []
          },
          {
            "level": 3,
            "title": "JDK 1.2 时代的集合类",
            "slug": "jdk-1-2-时代的集合类",
            "children": []
          },
          {
            "level": 3,
            "title": "JDK 1.2 时代的集合类的其它改动",
            "slug": "jdk-1-2-时代的集合类的其它改动",
            "children": []
          },
          {
            "level": 3,
            "title": "JDK 1.2 的未尽工作",
            "slug": "jdk-1-2-的未尽工作",
            "children": []
          },
          {
            "level": 3,
            "title": "Queue 和 Stack",
            "slug": "queue-和-stack",
            "children": []
          }
        ]
      }
    ],
    "path": "/one-stage/java/notes/%E9%9B%86%E5%90%88%E6%A1%86%E6%9E%B6.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Java8 四大函数式接口",
    "headers": [
      {
        "level": 2,
        "title": "Consumer<T>：消费型接口",
        "slug": "consumer-t-消费型接口",
        "children": []
      },
      {
        "level": 2,
        "title": "Supplier<T>：供给型接口",
        "slug": "supplier-t-供给型接口",
        "children": []
      },
      {
        "level": 2,
        "title": "Function<T, R>：函数型接口",
        "slug": "function-t-r-函数型接口",
        "children": []
      },
      {
        "level": 2,
        "title": "Predicate<T>：断言型接口",
        "slug": "predicate-t-断言型接口",
        "children": []
      }
    ],
    "path": "/one-stage/java8/notes/function-interface.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "FutureTask",
    "headers": [
      {
        "level": 2,
        "title": "Callable 使用方式一：FutureTask",
        "slug": "callable-使用方式一-futuretask",
        "children": []
      },
      {
        "level": 2,
        "title": "Callable 使用方式二：线程池和Future",
        "slug": "callable-使用方式二-线程池和future",
        "children": []
      }
    ],
    "path": "/one-stage/java8/notes/JUC-FutureTask.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "线程池",
    "headers": [
      {
        "level": 2,
        "title": "线程池的创建",
        "slug": "线程池的创建",
        "children": []
      },
      {
        "level": 2,
        "title": "线程池的状态",
        "slug": "线程池的状态",
        "children": []
      },
      {
        "level": 2,
        "title": "相关 API",
        "slug": "相关-api",
        "children": []
      }
    ],
    "path": "/one-stage/java8/notes/JUC-%E7%BA%BF%E7%A8%8B%E6%B1%A0.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Lambda 表达式",
    "headers": [
      {
        "level": 2,
        "title": "接口的原始形式",
        "slug": "接口的原始形式",
        "children": []
      },
      {
        "level": 2,
        "title": "改造 1：接口的匿名实现类",
        "slug": "改造-1-接口的匿名实现类",
        "children": []
      },
      {
        "level": 2,
        "title": "改造 2：省略引用变量",
        "slug": "改造-2-省略引用变量",
        "children": []
      },
      {
        "level": 2,
        "title": "改造 3：lambda 表达式的初级形式",
        "slug": "改造-3-lambda-表达式的初级形式",
        "children": []
      },
      {
        "level": 2,
        "title": "改造 4：省略 lambda 表达式的参数类型",
        "slug": "改造-4-省略-lambda-表达式的参数类型",
        "children": []
      },
      {
        "level": 2,
        "title": "改造 5：一行代码的 lambda 表达式的缩写",
        "slug": "改造-5-一行代码的-lambda-表达式的缩写",
        "children": []
      },
      {
        "level": 2,
        "title": "变量作用域",
        "slug": "变量作用域",
        "children": [
          {
            "level": 3,
            "title": "变量作用域的规则",
            "slug": "变量作用域的规则",
            "children": []
          },
          {
            "level": 3,
            "title": "为何要 final？",
            "slug": "为何要-final",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "方法引用",
        "slug": "方法引用",
        "children": [
          {
            "level": 3,
            "title": "示例",
            "slug": "示例",
            "children": []
          },
          {
            "level": 3,
            "title": "方法引用的语法",
            "slug": "方法引用的语法",
            "children": []
          }
        ]
      }
    ],
    "path": "/one-stage/java8/notes/lambda.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "使用 LocalDateTime 替代 Date",
    "headers": [
      {
        "level": 2,
        "title": "1. LocalDate",
        "slug": "_1-localdate",
        "children": []
      },
      {
        "level": 2,
        "title": "2. LocalTime",
        "slug": "_2-localtime",
        "children": []
      },
      {
        "level": 2,
        "title": "3. LocaDateTime",
        "slug": "_3-locadatetime",
        "children": []
      },
      {
        "level": 2,
        "title": "4. Instant",
        "slug": "_4-instant",
        "children": []
      },
      {
        "level": 2,
        "title": "5. 修改 LocalDate、LocalTime、LocalDateTime、Instant",
        "slug": "_5-修改-localdate、localtime、localdatetime、instant",
        "children": []
      },
      {
        "level": 2,
        "title": "6. 使用 TemporalAdjuster 和 TemporalAdjusters",
        "slug": "_6-使用-temporaladjuster-和-temporaladjusters",
        "children": []
      },
      {
        "level": 2,
        "title": "7. 格式化时间",
        "slug": "_7-格式化时间",
        "children": []
      },
      {
        "level": 2,
        "title": "8. 解析时间",
        "slug": "_8-解析时间",
        "children": []
      },
      {
        "level": 2,
        "title": "9. 带时区的时间",
        "slug": "_9-带时区的时间",
        "children": []
      },
      {
        "level": 2,
        "title": "10. SpringBoot 中应用 LocalDateTime",
        "slug": "_10-springboot-中应用-localdatetime",
        "children": [
          {
            "level": 3,
            "title": "将 LocalDateTime 字段以时间戳的方式返回给前端。",
            "slug": "将-localdatetime-字段以时间戳的方式返回给前端。",
            "children": []
          },
          {
            "level": 3,
            "title": "将 LocalDateTime 字段以指定格式化日期的方式返回给前端",
            "slug": "将-localdatetime-字段以指定格式化日期的方式返回给前端",
            "children": []
          },
          {
            "level": 3,
            "title": "将 LocalDateTime 字段以指定格式化日期的方式返回给前端",
            "slug": "将-localdatetime-字段以指定格式化日期的方式返回给前端-1",
            "children": []
          },
          {
            "level": 3,
            "title": "对前端传入的日期进行格式化",
            "slug": "对前端传入的日期进行格式化",
            "children": []
          }
        ]
      }
    ],
    "path": "/one-stage/java8/notes/LocalDateTime.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Java 8 Nashorn JavaScript",
    "headers": [
      {
        "level": 2,
        "title": "jjs 交互式编程",
        "slug": "jjs-交互式编程",
        "children": []
      },
      {
        "level": 2,
        "title": "传递参数",
        "slug": "传递参数",
        "children": []
      },
      {
        "level": 2,
        "title": "jjs 执行 .js 文件",
        "slug": "jjs-执行-js-文件",
        "children": []
      }
    ],
    "path": "/one-stage/java8/notes/Nashorn.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "如何正确使用 Optional",
    "headers": [
      {
        "level": 2,
        "title": "基本使用",
        "slug": "基本使用",
        "children": []
      },
      {
        "level": 2,
        "title": "map 函数隆重登场",
        "slug": "map-函数隆重登场",
        "children": []
      },
      {
        "level": 2,
        "title": "Optional 的使用场景和使用原则",
        "slug": "optional-的使用场景和使用原则",
        "children": []
      }
    ],
    "path": "/one-stage/java8/notes/Optional.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Stream API",
    "headers": [
      {
        "level": 2,
        "title": "生成：创建 Stream",
        "slug": "生成-创建-stream",
        "children": [
          {
            "level": 3,
            "title": "由集合&数组生成 Stream",
            "slug": "由集合-数组生成-stream",
            "children": []
          },
          {
            "level": 3,
            "title": "直接创建 Stream",
            "slug": "直接创建-stream",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "中间操作：处理 Stream 中的数据序列",
        "slug": "中间操作-处理-stream-中的数据序列",
        "children": [
          {
            "level": 3,
            "title": "filter 方法",
            "slug": "filter-方法",
            "children": []
          },
          {
            "level": 3,
            "title": "map 方法",
            "slug": "map-方法",
            "children": []
          },
          {
            "level": 3,
            "title": "anyMatch / allMatch / noneMatch 判断",
            "slug": "anymatch-allmatch-nonematch-判断",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "数据收集",
        "slug": "数据收集",
        "children": [
          {
            "level": 3,
            "title": "方法iterator 方法",
            "slug": "方法iterator-方法",
            "children": []
          },
          {
            "level": 3,
            "title": "toArray 方法",
            "slug": "toarray-方法",
            "children": []
          },
          {
            "level": 3,
            "title": "collect：收录到集合",
            "slug": "collect-收录到集合",
            "children": []
          },
          {
            "level": 3,
            "title": "collect：收录到 Map",
            "slug": "collect-收录到-map",
            "children": []
          }
        ]
      }
    ],
    "path": "/one-stage/java8/notes/stream.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "接口的默认方法和静态方法",
    "headers": [
      {
        "level": 2,
        "title": "默认方法",
        "slug": "默认方法",
        "children": []
      },
      {
        "level": 2,
        "title": "静态方法",
        "slug": "静态方法",
        "children": []
      }
    ],
    "path": "/one-stage/java8/notes/%E9%BB%98%E8%AE%A4%E6%96%B9%E6%B3%95.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Executors",
    "headers": [
      {
        "level": 2,
        "title": "1. FixedThreadPool 使用",
        "slug": "_1-fixedthreadpool-使用",
        "children": []
      },
      {
        "level": 2,
        "title": "2. CachedThreadPool 使用",
        "slug": "_2-cachedthreadpool-使用",
        "children": []
      },
      {
        "level": 2,
        "title": "4. SingleThreadExecutor 使用",
        "slug": "_4-singlethreadexecutor-使用",
        "children": []
      },
      {
        "level": 2,
        "title": "5. ScheduledThreadPool 使用",
        "slug": "_5-scheduledthreadpool-使用",
        "children": []
      },
      {
        "level": 2,
        "title": "6. SingleThreadScheduledExecutor 使用",
        "slug": "_6-singlethreadscheduledexecutor-使用",
        "children": []
      },
      {
        "level": 2,
        "title": "7. WorkStealingPool 使用",
        "slug": "_7-workstealingpool-使用",
        "children": []
      },
      {
        "level": 2,
        "title": "8. 总结",
        "slug": "_8-总结",
        "children": []
      },
      {
        "level": 2,
        "title": "9. 其它",
        "slug": "_9-其它",
        "children": []
      }
    ],
    "path": "/one-stage/javathread/notes/Executors.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "使用 Runnable 接口创建线程",
    "headers": [],
    "path": "/one-stage/javathread/notes/runnable.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "使用 Thread 类创建线程",
    "headers": [],
    "path": "/one-stage/javathread/notes/thread.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "ThreadPoolExecutor",
    "headers": [
      {
        "level": 2,
        "title": "1. ThreadPoolExecutor 的使用",
        "slug": "_1-threadpoolexecutor-的使用",
        "children": []
      },
      {
        "level": 2,
        "title": "2. 线程池执行方法",
        "slug": "_2-线程池执行方法",
        "children": []
      },
      {
        "level": 2,
        "title": "3. 线程池关闭方法",
        "slug": "_3-线程池关闭方法",
        "children": []
      },
      {
        "level": 2,
        "title": "4. 总结",
        "slug": "_4-总结",
        "children": []
      }
    ],
    "path": "/one-stage/javathread/notes/ThreadPoolExecutor.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "多线程",
    "headers": [],
    "path": "/one-stage/javathread/notes/%E5%A4%9A%E7%BA%BF%E7%A8%8B.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "多进程",
    "headers": [],
    "path": "/one-stage/javathread/notes/%E5%A4%9A%E8%BF%9B%E7%A8%8B.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "线程池",
    "headers": [],
    "path": "/one-stage/javathread/notes/%E7%BA%BF%E7%A8%8B%E6%B1%A0.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "线程的状态",
    "headers": [],
    "path": "/one-stage/javathread/notes/%E7%BA%BF%E7%A8%8B%E7%9A%84%E7%8A%B6%E6%80%81.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "线程的调用",
    "headers": [
      {
        "level": 2,
        "title": "1. 线程的优先级（了解、自学）",
        "slug": "_1-线程的优先级-了解、自学",
        "children": []
      },
      {
        "level": 2,
        "title": "2. 实现线程调度的方法",
        "slug": "_2-实现线程调度的方法",
        "children": []
      },
      {
        "level": 2,
        "title": "3. 线程的同步与互斥",
        "slug": "_3-线程的同步与互斥",
        "children": []
      },
      {
        "level": 2,
        "title": "4. synchronized 关键字",
        "slug": "_4-synchronized-关键字",
        "children": []
      }
    ],
    "path": "/one-stage/javathread/notes/%E7%BA%BF%E7%A8%8B%E7%9A%84%E8%B0%83%E7%94%A8.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "锁",
    "headers": [],
    "path": "/one-stage/javathread/notes/%E9%94%81.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "事务",
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
    "path": "/one-stage/myjdbc/notes/JDBC%E4%B8%AD%E7%9A%84%E4%BA%8B%E5%8A%A1.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "JDBC 基础",
    "headers": [
      {
        "level": 2,
        "title": "基本概念",
        "slug": "基本概念",
        "children": []
      },
      {
        "level": 2,
        "title": "常用的 JDBC API",
        "slug": "常用的-jdbc-api",
        "children": []
      },
      {
        "level": 2,
        "title": "JDBC 数据库访问步骤",
        "slug": "jdbc-数据库访问步骤",
        "children": [
          {
            "level": 3,
            "title": "加载数据库驱动程序",
            "slug": "加载数据库驱动程序",
            "children": []
          },
          {
            "level": 3,
            "title": "MySQL 6+ 驱动的使用要求",
            "slug": "mysql-6-驱动的使用要求",
            "children": []
          },
          {
            "level": 3,
            "title": "建立数据库连接",
            "slug": "建立数据库连接",
            "children": []
          },
          {
            "level": 3,
            "title": "创建执行 SQL 语句的 Statement 对象",
            "slug": "创建执行-sql-语句的-statement-对象",
            "children": []
          },
          {
            "level": 3,
            "title": "发送 SQL 执行语句",
            "slug": "发送-sql-执行语句",
            "children": []
          },
          {
            "level": 3,
            "title": "结果集对象遍历",
            "slug": "结果集对象遍历",
            "children": []
          },
          {
            "level": 3,
            "title": "关闭对象",
            "slug": "关闭对象",
            "children": []
          }
        ]
      }
    ],
    "path": "/one-stage/myjdbc/notes/JDBC%E5%9F%BA%E7%A1%80.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "JDBC 高级",
    "headers": [
      {
        "level": 2,
        "title": "获取插入数据的主键",
        "slug": "获取插入数据的主键",
        "children": []
      },
      {
        "level": 2,
        "title": "设值 NULL",
        "slug": "设值-null",
        "children": []
      },
      {
        "level": 2,
        "title": "处理 Blob（选学）",
        "slug": "处理-blob-选学",
        "children": []
      }
    ],
    "path": "/one-stage/myjdbc/notes/JDBC%E9%AB%98%E7%BA%A7.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Service 层中使用事务",
    "headers": [
      {
        "level": 2,
        "title": "前言",
        "slug": "前言",
        "children": []
      },
      {
        "level": 2,
        "title": "通过参数传递",
        "slug": "通过参数传递",
        "children": []
      },
      {
        "level": 2,
        "title": "利用 ThreadLocal",
        "slug": "利用-threadlocal",
        "children": []
      }
    ],
    "path": "/one-stage/myjdbc/notes/Service%E5%B1%82%E4%B8%AD%E7%9A%84%E4%BA%8B%E5%8A%A1.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "数据库连接池",
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
    "path": "/one-stage/myjdbc/notes/%E6%95%B0%E6%8D%AE%E5%BA%93%E8%BF%9E%E6%8E%A5%E6%B1%A0.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "插入、更新和删除数据",
    "headers": [
      {
        "level": 2,
        "title": "使用 INSERT 语句插入数据",
        "slug": "使用-insert-语句插入数据",
        "children": []
      },
      {
        "level": 2,
        "title": "使用 UPDATE 语句更新表数据",
        "slug": "使用-update-语句更新表数据",
        "children": []
      },
      {
        "level": 2,
        "title": "使用 DELETE 语句删除表数据",
        "slug": "使用-delete-语句删除表数据",
        "children": []
      }
    ],
    "path": "/one-stage/mysql/notes/CUD.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "事务",
    "headers": [
      {
        "level": 2,
        "title": "事务的概念",
        "slug": "事务的概念",
        "children": []
      },
      {
        "level": 2,
        "title": "事务的提交和回滚",
        "slug": "事务的提交和回滚",
        "children": []
      },
      {
        "level": 2,
        "title": "事务的开始与结束",
        "slug": "事务的开始与结束",
        "children": []
      },
      {
        "level": 2,
        "title": "事务的 ACID 特性",
        "slug": "事务的-acid-特性",
        "children": []
      }
    ],
    "path": "/one-stage/mysql/notes/%E4%BA%8B%E5%8A%A1.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "操作 Database",
    "headers": [
      {
        "level": 2,
        "title": "创建 Database",
        "slug": "创建-database",
        "children": []
      },
      {
        "level": 2,
        "title": "删除 Database",
        "slug": "删除-database",
        "children": []
      },
      {
        "level": 2,
        "title": "创建 Database 并指定默认字符集",
        "slug": "创建-database-并指定默认字符集",
        "children": []
      },
      {
        "level": 2,
        "title": "数据库引擎",
        "slug": "数据库引擎",
        "children": []
      }
    ],
    "path": "/one-stage/mysql/notes/%E6%93%8D%E4%BD%9CDatabase.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "操作 Table",
    "headers": [
      {
        "level": 2,
        "title": "创建表",
        "slug": "创建表",
        "children": []
      },
      {
        "level": 2,
        "title": "约束",
        "slug": "约束",
        "children": [
          {
            "level": 3,
            "title": "非空（Not Null）约束",
            "slug": "非空-not-null-约束",
            "children": []
          },
          {
            "level": 3,
            "title": "唯一性（Unique）约束",
            "slug": "唯一性-unique-约束",
            "children": []
          },
          {
            "level": 3,
            "title": "默认值（Default）约束",
            "slug": "默认值-default-约束",
            "children": []
          },
          {
            "level": 3,
            "title": "主键（Primary Key）约束",
            "slug": "主键-primary-key-约束",
            "children": []
          },
          {
            "level": 3,
            "title": "外键（Foreign Key）约束",
            "slug": "外键-foreign-key-约束",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "查看表的结构",
        "slug": "查看表的结构",
        "children": [
          {
            "level": 3,
            "title": "查看表的字段信息",
            "slug": "查看表的字段信息",
            "children": []
          },
          {
            "level": 3,
            "title": "查看建表语句",
            "slug": "查看建表语句",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "删除 Table",
        "slug": "删除-table",
        "children": []
      },
      {
        "level": 2,
        "title": "修改表的元数据",
        "slug": "修改表的元数据",
        "children": [
          {
            "level": 3,
            "title": "添加主键约束",
            "slug": "添加主键约束",
            "children": []
          },
          {
            "level": 3,
            "title": "添加外键约束",
            "slug": "添加外键约束",
            "children": []
          },
          {
            "level": 3,
            "title": "删除主键约束",
            "slug": "删除主键约束",
            "children": []
          },
          {
            "level": 3,
            "title": "删除外键约束",
            "slug": "删除外键约束",
            "children": []
          },
          {
            "level": 3,
            "title": "其他",
            "slug": "其他",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "MySql 中的数据类型总结",
        "slug": "mysql-中的数据类型总结",
        "children": [
          {
            "level": 3,
            "title": "数值类型：整数和浮点数",
            "slug": "数值类型-整数和浮点数",
            "children": []
          },
          {
            "level": 3,
            "title": "字符串类型",
            "slug": "字符串类型",
            "children": []
          },
          {
            "level": 3,
            "title": "日期/时间类型",
            "slug": "日期-时间类型",
            "children": []
          },
          {
            "level": 3,
            "title": "枚举类型",
            "slug": "枚举类型",
            "children": []
          }
        ]
      }
    ],
    "path": "/one-stage/mysql/notes/%E6%93%8D%E4%BD%9CTable.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "查询语句",
    "headers": [
      {
        "level": 2,
        "title": "Select 语句",
        "slug": "select-语句",
        "children": [
          {
            "level": 3,
            "title": "检索单独的列",
            "slug": "检索单独的列",
            "children": []
          },
          {
            "level": 3,
            "title": "检索多列",
            "slug": "检索多列",
            "children": []
          },
          {
            "level": 3,
            "title": "检索所有列",
            "slug": "检索所有列",
            "children": []
          },
          {
            "level": 3,
            "title": "使用完全限定的表名",
            "slug": "使用完全限定的表名",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "对检索的数据进行排序",
        "slug": "对检索的数据进行排序",
        "children": [
          {
            "level": 3,
            "title": "对数据进行排序",
            "slug": "对数据进行排序",
            "children": []
          },
          {
            "level": 3,
            "title": "按多个列进行排序",
            "slug": "按多个列进行排序",
            "children": []
          },
          {
            "level": 3,
            "title": "指定排序方向",
            "slug": "指定排序方向",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "过滤数据",
        "slug": "过滤数据",
        "children": []
      },
      {
        "level": 2,
        "title": "高级数据过滤",
        "slug": "高级数据过滤",
        "children": []
      },
      {
        "level": 2,
        "title": "模糊查询",
        "slug": "模糊查询",
        "children": []
      },
      {
        "level": 2,
        "title": "聚合函数",
        "slug": "聚合函数",
        "children": [
          {
            "level": 3,
            "title": "AVG 函数",
            "slug": "avg-函数",
            "children": []
          },
          {
            "level": 3,
            "title": "COUNT 函数",
            "slug": "count-函数",
            "children": []
          },
          {
            "level": 3,
            "title": "MAX 函数",
            "slug": "max-函数",
            "children": []
          },
          {
            "level": 3,
            "title": "MIN 函数",
            "slug": "min-函数",
            "children": []
          },
          {
            "level": 3,
            "title": "SUM 函数",
            "slug": "sum-函数",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "分组查询和 Having 子句",
        "slug": "分组查询和-having-子句",
        "children": [
          {
            "level": 3,
            "title": "分组查询",
            "slug": "分组查询",
            "children": []
          },
          {
            "level": 3,
            "title": "HAVING 子句",
            "slug": "having-子句",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "使用子查询",
        "slug": "使用子查询",
        "children": []
      },
      {
        "level": 2,
        "title": "表之间的关系",
        "slug": "表之间的关系",
        "children": [
          {
            "level": 3,
            "title": "一对多/多对一（使用最为广泛）",
            "slug": "一对多-多对一-使用最为广泛",
            "children": []
          },
          {
            "level": 3,
            "title": "多对多（双向的一对多关系）",
            "slug": "多对多-双向的一对多关系",
            "children": []
          },
          {
            "level": 3,
            "title": "一对一（使用相对较少）",
            "slug": "一对一-使用相对较少",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "10. 关联查询 SQL 语句",
        "slug": "_10-关联查询-sql-语句",
        "children": []
      },
      {
        "level": 2,
        "title": "11. 外连接",
        "slug": "_11-外连接",
        "children": []
      },
      {
        "level": 2,
        "title": "12. 自连接",
        "slug": "_12-自连接",
        "children": []
      }
    ],
    "path": "/one-stage/mysql/notes/%E6%9F%A5%E8%AF%A2%E8%AF%AD%E5%8F%A5.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "用户和权限管理",
    "headers": [
      {
        "level": 2,
        "title": "用户管理",
        "slug": "用户管理",
        "children": []
      },
      {
        "level": 2,
        "title": "访问权限管理",
        "slug": "访问权限管理",
        "children": []
      }
    ],
    "path": "/one-stage/mysql/notes/%E7%94%A8%E6%88%B7%E5%92%8C%E6%9D%83%E9%99%90%E7%AE%A1%E7%90%86.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "索引",
    "headers": [
      {
        "level": 2,
        "title": "索引的概念、优点及缺点",
        "slug": "索引的概念、优点及缺点",
        "children": []
      },
      {
        "level": 2,
        "title": "索引的分类",
        "slug": "索引的分类",
        "children": []
      },
      {
        "level": 2,
        "title": "索引的设计原则：",
        "slug": "索引的设计原则",
        "children": []
      },
      {
        "level": 2,
        "title": "索引的创建",
        "slug": "索引的创建",
        "children": []
      }
    ],
    "path": "/one-stage/mysql/notes/%E7%B4%A2%E5%BC%95.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "SQL 优化",
    "headers": [],
    "path": "/one-stage/mysql/notes/%E7%B4%A2%E5%BC%95%E5%92%8C%E6%95%B0%E6%8D%AE%E5%BA%93%E4%BC%98%E5%8C%96.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "视图",
    "headers": [
      {
        "level": 2,
        "title": "什么是视图",
        "slug": "什么是视图",
        "children": []
      },
      {
        "level": 2,
        "title": "创建视图",
        "slug": "创建视图",
        "children": []
      },
      {
        "level": 2,
        "title": "删除视图",
        "slug": "删除视图",
        "children": []
      },
      {
        "level": 2,
        "title": "查看视图信息",
        "slug": "查看视图信息",
        "children": []
      },
      {
        "level": 2,
        "title": "对视图的操作",
        "slug": "对视图的操作",
        "children": []
      }
    ],
    "path": "/one-stage/mysql/notes/%E8%A7%86%E5%9B%BE.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "线程安全",
    "headers": [
      {
        "level": 2,
        "title": "1. 非线程安全示例",
        "slug": "_1-非线程安全示例",
        "children": []
      },
      {
        "level": 2,
        "title": "2. 非线程安全代码示例",
        "slug": "_2-非线程安全代码示例",
        "children": []
      },
      {
        "level": 2,
        "title": "3. 线程安全的解决方案",
        "slug": "_3-线程安全的解决方案",
        "children": []
      }
    ],
    "path": "/one-stage/threadsafe/notes/a01.%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "ThreadLocal",
    "headers": [
      {
        "level": 2,
        "title": "1. ThreadLocal 基础使用",
        "slug": "_1-threadlocal-基础使用",
        "children": []
      },
      {
        "level": 2,
        "title": "2. ThreadLocal 数据共享",
        "slug": "_2-threadlocal-数据共享",
        "children": []
      },
      {
        "level": 2,
        "title": "3. ThradLocal 的正确使用方式（内存泄漏问题）",
        "slug": "_3-thradlocal-的正确使用方式-内存泄漏问题",
        "children": []
      }
    ],
    "path": "/one-stage/threadsafe/notes/a02.ThreadLocal.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "synchronized 关键字及其原理",
    "headers": [
      {
        "level": 2,
        "title": "synchronized 关键字",
        "slug": "synchronized-关键字",
        "children": []
      },
      {
        "level": 2,
        "title": "synchronized 实现原理",
        "slug": "synchronized-实现原理",
        "children": []
      }
    ],
    "path": "/one-stage/threadsafe/notes/a04.synchronized.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "可重入锁 ReentrantLock",
    "headers": [
      {
        "level": 2,
        "title": "1. ReentrantLock 使用",
        "slug": "_1-reentrantlock-使用",
        "children": []
      },
      {
        "level": 2,
        "title": "2. ReentrantLock 注意事项",
        "slug": "_2-reentrantlock-注意事项",
        "children": []
      },
      {
        "level": 2,
        "title": "3. ReentrantLock 和 synchronized 有什么区别？",
        "slug": "_3-reentrantlock-和-synchronized-有什么区别",
        "children": []
      }
    ],
    "path": "/one-stage/threadsafe/notes/a06.ReentrantLock.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "条件（Condition）等待",
    "headers": [],
    "path": "/one-stage/threadsafe/notes/b00.condition.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "信号量（Semaphore）",
    "headers": [
      {
        "level": 2,
        "title": "1. 关于信号量",
        "slug": "_1-关于信号量",
        "children": []
      },
      {
        "level": 2,
        "title": "2. 信号量实现生产者消费者模型",
        "slug": "_2-信号量实现生产者消费者模型",
        "children": []
      }
    ],
    "path": "/one-stage/threadsafe/notes/b02.semaphore.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "原子值：Atomic",
    "headers": [
      {
        "level": 2,
        "title": "1. 简单使用",
        "slug": "_1-简单使用",
        "children": []
      },
      {
        "level": 2,
        "title": "2. AtomicReference",
        "slug": "_2-atomicreference",
        "children": []
      }
    ],
    "path": "/one-stage/threadsafe/notes/c00.atomic.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "CAS 与 ABA 问题",
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
    "path": "/one-stage/threadsafe/notes/c02.CAS.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "数据结构与算法入门",
    "headers": [
      {
        "level": 2,
        "title": "1.算法的复杂度",
        "slug": "_1-算法的复杂度",
        "children": [
          {
            "level": 3,
            "title": "算法复杂度的表达式",
            "slug": "算法复杂度的表达式",
            "children": []
          },
          {
            "level": 3,
            "title": "时间复杂度",
            "slug": "时间复杂度",
            "children": []
          },
          {
            "level": 3,
            "title": "空间复杂度",
            "slug": "空间复杂度",
            "children": []
          }
        ]
      }
    ],
    "path": "/pascal/basics/notes/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%E5%85%A5%E9%97%A8.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "CSS 选择器",
    "headers": [
      {
        "level": 2,
        "title": "1. 核心选择器",
        "slug": "_1-核心选择器",
        "children": []
      },
      {
        "level": 2,
        "title": "2. 属性选择器",
        "slug": "_2-属性选择器",
        "children": []
      },
      {
        "level": 2,
        "title": "3. 选择器的复合使用",
        "slug": "_3-选择器的复合使用",
        "children": []
      },
      {
        "level": 2,
        "title": "4. 亲属关系选择器",
        "slug": "_4-亲属关系选择器",
        "children": []
      }
    ],
    "path": "/two-stage/html/notes/01.CSS%E9%80%89%E6%8B%A9%E5%99%A8.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "ES6 新特性",
    "headers": [
      {
        "level": 2,
        "title": "关于 ECMAScript 6",
        "slug": "关于-ecmascript-6",
        "children": []
      },
      {
        "level": 2,
        "title": "let 命令",
        "slug": "let-命令",
        "children": []
      },
      {
        "level": 2,
        "title": "const 命令",
        "slug": "const-命令",
        "children": []
      },
      {
        "level": 2,
        "title": "字符串扩展",
        "slug": "字符串扩展",
        "children": []
      },
      {
        "level": 2,
        "title": "解构表达式",
        "slug": "解构表达式",
        "children": [
          {
            "level": 3,
            "title": "数组解构",
            "slug": "数组解构",
            "children": []
          },
          {
            "level": 3,
            "title": "对象解构",
            "slug": "对象解构",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "函数优化",
        "slug": "函数优化",
        "children": [
          {
            "level": 3,
            "title": "函数参数默认值",
            "slug": "函数参数默认值",
            "children": []
          },
          {
            "level": 3,
            "title": "箭头函数",
            "slug": "箭头函数",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "对象的函数属性简写",
        "slug": "对象的函数属性简写",
        "children": []
      },
      {
        "level": 2,
        "title": "箭头函数结合结构表达式",
        "slug": "箭头函数结合结构表达式",
        "children": []
      },
      {
        "level": 2,
        "title": "新增的数组的 map 方法",
        "slug": "新增的数组的-map-方法",
        "children": []
      },
      {
        "level": 2,
        "title": "新增的数组的 reduce 方法",
        "slug": "新增的数组的-reduce-方法",
        "children": []
      },
      {
        "level": 2,
        "title": "扩展运算符",
        "slug": "扩展运算符",
        "children": []
      }
    ],
    "path": "/two-stage/html/notes/01.ES6%E6%96%B0%E7%89%B9%E6%80%A7.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "JavaScript 编程基础",
    "headers": [
      {
        "level": 2,
        "title": "1. 基础知识",
        "slug": "_1-基础知识",
        "children": []
      },
      {
        "level": 2,
        "title": "2. 值和变量",
        "slug": "_2-值和变量",
        "children": []
      },
      {
        "level": 2,
        "title": "3. 定义变量",
        "slug": "_3-定义变量",
        "children": []
      },
      {
        "level": 2,
        "title": "4. 运算符",
        "slug": "_4-运算符",
        "children": []
      },
      {
        "level": 2,
        "title": "5. 条件查询与布尔测试",
        "slug": "_5-条件查询与布尔测试",
        "children": []
      },
      {
        "level": 2,
        "title": "5. 分支与循环",
        "slug": "_5-分支与循环",
        "children": []
      },
      {
        "level": 2,
        "title": "6. 数组",
        "slug": "_6-数组",
        "children": []
      },
      {
        "level": 2,
        "title": "7. 函数",
        "slug": "_7-函数",
        "children": []
      },
      {
        "level": 2,
        "title": "8. 变量的作用域",
        "slug": "_8-变量的作用域",
        "children": []
      }
    ],
    "path": "/two-stage/html/notes/01.JavaScript%E7%BC%96%E7%A8%8B%E5%9F%BA%E7%A1%80.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "基本概念和结构",
    "headers": [
      {
        "level": 2,
        "title": "1.1. <!DOCTYPE> 元素",
        "slug": "_1-1-doctype-元素",
        "children": []
      },
      {
        "level": 2,
        "title": "1.2. <html> 元素",
        "slug": "_1-2-html-元素",
        "children": []
      },
      {
        "level": 2,
        "title": "1.3. <head> 元素",
        "slug": "_1-3-head-元素",
        "children": []
      },
      {
        "level": 2,
        "title": "1.4. <body> 元素",
        "slug": "_1-4-body-元素",
        "children": []
      }
    ],
    "path": "/two-stage/html/notes/01.%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5%E5%92%8C%E7%BB%93%E6%9E%84.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Flex 布局（上）",
    "headers": [
      {
        "level": 2,
        "title": "1. 前言/历史",
        "slug": "_1-前言-历史",
        "children": []
      },
      {
        "level": 2,
        "title": "2. Flex 布局是什么？",
        "slug": "_2-flex-布局是什么",
        "children": []
      },
      {
        "level": 2,
        "title": "3. 基本概念",
        "slug": "_3-基本概念",
        "children": []
      },
      {
        "level": 2,
        "title": "4. 核心属性：flex-direction",
        "slug": "_4-核心属性-flex-direction",
        "children": []
      },
      {
        "level": 2,
        "title": "5. 核心属性：flex-wrap",
        "slug": "_5-核心属性-flex-wrap",
        "children": []
      },
      {
        "level": 2,
        "title": "6. 二合一属性：flex-flow 属性",
        "slug": "_6-二合一属性-flex-flow-属性",
        "children": []
      },
      {
        "level": 2,
        "title": "7. 核心属性：justify-content",
        "slug": "_7-核心属性-justify-content",
        "children": []
      },
      {
        "level": 2,
        "title": "8. 核心属性：align-items",
        "slug": "_8-核心属性-align-items",
        "children": []
      },
      {
        "level": 2,
        "title": "9. align-content 属性",
        "slug": "_9-align-content-属性",
        "children": []
      }
    ],
    "path": "/two-stage/html/notes/02.Flex%E5%B8%83%E5%B1%80%EF%BC%88%E4%B8%8A%EF%BC%89.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "JavaScript面向对象编程",
    "headers": [
      {
        "level": 2,
        "title": "1. JavaScript 类和对象",
        "slug": "_1-javascript-类和对象",
        "children": [
          {
            "level": 3,
            "title": "使用内置类",
            "slug": "使用内置类",
            "children": []
          },
          {
            "level": 3,
            "title": "new Object",
            "slug": "new-object",
            "children": []
          },
          {
            "level": 3,
            "title": "对象字面量",
            "slug": "对象字面量",
            "children": []
          },
          {
            "level": 3,
            "title": "构造函数",
            "slug": "构造函数",
            "children": []
          },
          {
            "level": 3,
            "title": "利用原型对象模式定义类",
            "slug": "利用原型对象模式定义类",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "2. JavaScript 继承",
        "slug": "_2-javascript-继承",
        "children": []
      },
      {
        "level": 2,
        "title": "3. 内置类",
        "slug": "_3-内置类",
        "children": [
          {
            "level": 3,
            "title": "String 类",
            "slug": "string-类",
            "children": []
          },
          {
            "level": 3,
            "title": "Number 类",
            "slug": "number-类",
            "children": []
          },
          {
            "level": 3,
            "title": "全局 Math 对象",
            "slug": "全局-math-对象",
            "children": []
          },
          {
            "level": 3,
            "title": "Array 对象",
            "slug": "array-对象",
            "children": []
          },
          {
            "level": 3,
            "title": "RegExp 对象",
            "slug": "regexp-对象",
            "children": []
          },
          {
            "level": 3,
            "title": "时间与日期",
            "slug": "时间与日期",
            "children": []
          }
        ]
      }
    ],
    "path": "/two-stage/html/notes/02.JavaScript%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "单标签元素与双标签元素",
    "headers": [],
    "path": "/two-stage/html/notes/02.%E5%8D%95%E6%A0%87%E7%AD%BE%E5%85%83%E7%B4%A0%E4%B8%8E%E5%8F%8C%E6%A0%87%E7%AD%BE%E5%85%83%E7%B4%A0.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "模块化",
    "headers": [
      {
        "level": 2,
        "title": "1. 关于模块化",
        "slug": "_1-关于模块化",
        "children": []
      },
      {
        "level": 2,
        "title": "2. JavaScript 的模块化",
        "slug": "_2-javascript-的模块化",
        "children": []
      },
      {
        "level": 2,
        "title": "3. export 命令",
        "slug": "_3-export-命令",
        "children": []
      },
      {
        "level": 2,
        "title": "4. import 命令",
        "slug": "_4-import-命令",
        "children": []
      },
      {
        "level": 2,
        "title": "5. export default 命令",
        "slug": "_5-export-default-命令",
        "children": []
      }
    ],
    "path": "/two-stage/html/notes/02.%E6%A8%A1%E5%9D%97%E5%8C%96.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "BOM 和 DOM",
    "headers": [
      {
        "level": 2,
        "title": "1. BOM：浏览器对象模型",
        "slug": "_1-bom-浏览器对象模型",
        "children": []
      },
      {
        "level": 2,
        "title": "2. DOM：文档对象模型",
        "slug": "_2-dom-文档对象模型",
        "children": [
          {
            "level": 3,
            "title": "1. 核心概念",
            "slug": "_1-核心概念",
            "children": []
          },
          {
            "level": 3,
            "title": "2. 选中页面元素",
            "slug": "_2-选中页面元素",
            "children": []
          },
          {
            "level": 3,
            "title": "3. 通过亲属关系选中元素",
            "slug": "_3-通过亲属关系选中元素",
            "children": []
          },
          {
            "level": 3,
            "title": "4. 操作所选元素",
            "slug": "_4-操作所选元素",
            "children": []
          },
          {
            "level": 3,
            "title": "5. 操作 DOM 结构",
            "slug": "_5-操作-dom-结构",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "3. DOM：事件处理",
        "slug": "_3-dom-事件处理",
        "children": [
          {
            "level": 3,
            "title": "1. 添加事件处理程序",
            "slug": "_1-添加事件处理程序",
            "children": []
          },
          {
            "level": 3,
            "title": "2. 常见的事件及其种类",
            "slug": "_2-常见的事件及其种类",
            "children": []
          },
          {
            "level": 3,
            "title": "3. EventHandler",
            "slug": "_3-eventhandler",
            "children": []
          }
        ]
      }
    ],
    "path": "/two-stage/html/notes/03.BOM%E5%92%8CDOM.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Flex 布局（下）",
    "headers": [
      {
        "level": 2,
        "title": "1. align-self",
        "slug": "_1-align-self",
        "children": []
      },
      {
        "level": 2,
        "title": "2. flex-grow",
        "slug": "_2-flex-grow",
        "children": []
      },
      {
        "level": 2,
        "title": "3. flex-basis",
        "slug": "_3-flex-basis",
        "children": []
      },
      {
        "level": 2,
        "title": "4. flex-shrink",
        "slug": "_4-flex-shrink",
        "children": []
      },
      {
        "level": 2,
        "title": "5. 三合一属性：flex",
        "slug": "_5-三合一属性-flex",
        "children": []
      }
    ],
    "path": "/two-stage/html/notes/03.Flex%E5%B8%83%E5%B1%80%EF%BC%88%E4%B8%8B%EF%BC%89.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Promise 对象",
    "headers": [],
    "path": "/two-stage/html/notes/03.promise%E5%AF%B9%E8%B1%A1.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "常用元素",
    "headers": [
      {
        "level": 2,
        "title": "1. 与文本有关的元素",
        "slug": "_1-与文本有关的元素",
        "children": []
      },
      {
        "level": 2,
        "title": "2. 列表元素",
        "slug": "_2-列表元素",
        "children": []
      },
      {
        "level": 2,
        "title": "3. 链接元素",
        "slug": "_3-链接元素",
        "children": []
      },
      {
        "level": 2,
        "title": "4. 图像元素",
        "slug": "_4-图像元素",
        "children": []
      },
      {
        "level": 2,
        "title": "5. 表格元素",
        "slug": "_5-表格元素",
        "children": []
      }
    ],
    "path": "/two-stage/html/notes/03.%E5%B8%B8%E7%94%A8%E5%85%83%E7%B4%A0.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "CSS3 新发现",
    "headers": [
      {
        "level": 2,
        "title": "1. vh / vw",
        "slug": "_1-vh-vw",
        "children": []
      },
      {
        "level": 2,
        "title": "2. calc",
        "slug": "_2-calc",
        "children": []
      }
    ],
    "path": "/two-stage/html/notes/04.CSS3%E6%96%B0%E5%8F%91%E7%8E%B0.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "HTML5 的 web storage",
    "headers": [
      {
        "level": 2,
        "title": "1. Window 的 sessionStorage 属性",
        "slug": "_1-window-的-sessionstorage-属性",
        "children": []
      },
      {
        "level": 2,
        "title": "2. Window 的 localStorage 属性",
        "slug": "_2-window-的-localstorage-属性",
        "children": []
      }
    ],
    "path": "/two-stage/html/notes/04.HTML5%E7%9A%84web%20storage.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "JavaScript 中内置的工具和常用代码片段",
    "headers": [
      {
        "level": 2,
        "title": "1. 数组相关",
        "slug": "_1-数组相关",
        "children": [
          {
            "level": 3,
            "title": "makeArray",
            "slug": "makearray",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "2. DOM 相关",
        "slug": "_2-dom-相关",
        "children": [
          {
            "level": 3,
            "title": "包含",
            "slug": "包含",
            "children": []
          },
          {
            "level": 3,
            "title": "解析 parseHTML",
            "slug": "解析-parsehtml",
            "children": []
          },
          {
            "level": 3,
            "title": "解析 parseJSON",
            "slug": "解析-parsejson",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "3. 其它",
        "slug": "_3-其它",
        "children": [
          {
            "level": 3,
            "title": "extend",
            "slug": "extend",
            "children": []
          },
          {
            "level": 3,
            "title": "trim",
            "slug": "trim",
            "children": []
          },
          {
            "level": 3,
            "title": "type",
            "slug": "type",
            "children": []
          },
          {
            "level": 3,
            "title": "now",
            "slug": "now",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "4. JS 中构建一个 Form",
        "slug": "_4-js-中构建一个-form",
        "children": []
      }
    ],
    "path": "/two-stage/html/notes/04.js-utils.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "表单元素",
    "headers": [
      {
        "level": 2,
        "title": "1. 文本输入",
        "slug": "_1-文本输入",
        "children": []
      },
      {
        "level": 2,
        "title": "2. 选择",
        "slug": "_2-选择",
        "children": []
      },
      {
        "level": 2,
        "title": "3. 按钮",
        "slug": "_3-按钮",
        "children": []
      },
      {
        "level": 2,
        "title": "4. 其他控件",
        "slug": "_4-其他控件",
        "children": []
      }
    ],
    "path": "/two-stage/html/notes/04.%E8%A1%A8%E5%8D%95%E5%85%83%E7%B4%A0.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "元素的分类",
    "headers": [],
    "path": "/two-stage/html/notes/05.%E5%85%83%E7%B4%A0%E7%9A%84%E5%88%86%E7%B1%BB.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "使用 Mockito 伪造对象",
    "headers": [],
    "path": "/two-stage/junit/notes/mockito.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "MockMvc 对 Spring MVC 进行测试",
    "headers": [
      {
        "level": 2,
        "title": "1. @WebAppConfiguration 注解",
        "slug": "_1-webappconfiguration-注解",
        "children": []
      },
      {
        "level": 2,
        "title": "2. MockMvc",
        "slug": "_2-mockmvc",
        "children": []
      }
    ],
    "path": "/two-stage/junit/notes/MockMvc.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Spring 中的 @Sql 注解",
    "headers": [
      {
        "level": 2,
        "title": "1. @Sql 注解",
        "slug": "_1-sql-注解",
        "children": []
      },
      {
        "level": 2,
        "title": "2. @SqlConfig（了解）",
        "slug": "_2-sqlconfig-了解",
        "children": []
      },
      {
        "level": 2,
        "title": "3. @SqlMergeMode（了解）",
        "slug": "_3-sqlmergemode-了解",
        "children": []
      }
    ],
    "path": "/two-stage/junit/notes/spring-@sql.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "SpringBoot 中使用 JUnit",
    "headers": [
      {
        "level": 2,
        "title": "1. SpringBoot 所使用的 JUnit 版本",
        "slug": "_1-springboot-所使用的-junit-版本",
        "children": []
      },
      {
        "level": 2,
        "title": "2. 加载配置文件",
        "slug": "_2-加载配置文件",
        "children": []
      },
      {
        "level": 2,
        "title": "3. 使用事务锁定测试数据库中的数据",
        "slug": "_3-使用事务锁定测试数据库中的数据",
        "children": []
      },
      {
        "level": 2,
        "title": "4. 单独的测试配置",
        "slug": "_4-单独的测试配置",
        "children": []
      },
      {
        "level": 2,
        "title": "5. @WebMvcTest 注解",
        "slug": "_5-webmvctest-注解",
        "children": []
      },
      {
        "level": 2,
        "title": "6. 测试 Controller",
        "slug": "_6-测试-controller",
        "children": [
          {
            "level": 3,
            "title": "@MockBean",
            "slug": "mockbean",
            "children": []
          },
          {
            "level": 3,
            "title": "@SpyBean",
            "slug": "spybean",
            "children": []
          },
          {
            "level": 3,
            "title": "MockRestServiceServer（了解、自学）",
            "slug": "mockrestserviceserver-了解、自学",
            "children": []
          }
        ]
      }
    ],
    "path": "/two-stage/junit/notes/spring-boot.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Spring 整合 JUnit5",
    "headers": [
      {
        "level": 2,
        "title": "1. 基本使用和 @ContextConfiguration 注解",
        "slug": "_1-基本使用和-contextconfiguration-注解",
        "children": []
      },
      {
        "level": 2,
        "title": "2. spring-test 利用事务避免污染数据库",
        "slug": "_2-spring-test-利用事务避免污染数据库",
        "children": []
      },
      {
        "level": 2,
        "title": "3. @Sql 注解",
        "slug": "_3-sql-注解",
        "children": []
      },
      {
        "level": 2,
        "title": "4. mvn test 执行 Junit 5",
        "slug": "_4-mvn-test-执行-junit-5",
        "children": []
      }
    ],
    "path": "/two-stage/junit/notes/spring-test-junit5.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "测试驱动开发（TDD）",
    "headers": [
      {
        "level": 2,
        "title": "1. 为什么要 TDD",
        "slug": "_1-为什么要-tdd",
        "children": []
      },
      {
        "level": 2,
        "title": "2. 如何 TDD",
        "slug": "_2-如何-tdd",
        "children": []
      },
      {
        "level": 2,
        "title": "3. TDD 的三条规则",
        "slug": "_3-tdd-的三条规则",
        "children": []
      }
    ],
    "path": "/two-stage/junit/notes/TDD.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "基本概念",
    "headers": [
      {
        "level": 2,
        "title": "基本概念",
        "slug": "基本概念-1",
        "children": [
          {
            "level": 3,
            "title": "JUnit 4",
            "slug": "junit-4",
            "children": []
          },
          {
            "level": 3,
            "title": "JUnit 5",
            "slug": "junit-5",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "一个简单的示例",
        "slug": "一个简单的示例",
        "children": []
      },
      {
        "level": 2,
        "title": "Junit 5 更新 - 执行生命周期注解",
        "slug": "junit-5-更新-执行生命周期注解",
        "children": []
      },
      {
        "level": 2,
        "title": "单元测试的编写原则",
        "slug": "单元测试的编写原则",
        "children": []
      },
      {
        "level": 2,
        "title": "Junit 5 新特性：设置用例别名",
        "slug": "junit-5-新特性-设置用例别名",
        "children": []
      },
      {
        "level": 2,
        "title": "JUnit 5 的 Maven pom 依赖",
        "slug": "junit-5-的-maven-pom-依赖",
        "children": []
      }
    ],
    "path": "/two-stage/junit/notes/%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "SqlSession 线程安全问题",
    "headers": [],
    "path": "/two-stage/mybatis/notes/01.SqlSession%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%E9%97%AE%E9%A2%98.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "关于 MyBatis",
    "headers": [],
    "path": "/two-stage/mybatis/notes/01.%E5%85%B3%E4%BA%8Emybatis.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "基本概念",
    "headers": [
      {
        "level": 2,
        "title": "1. MyBatis 的体系结构",
        "slug": "_1-mybatis-的体系结构",
        "children": []
      },
      {
        "level": 2,
        "title": "2. 使用 XML 构建 SqlSessionFactory",
        "slug": "_2-使用-xml-构建-sqlsessionfactory",
        "children": []
      },
      {
        "level": 2,
        "title": "3. SqlSession",
        "slug": "_3-sqlsession",
        "children": []
      },
      {
        "level": 2,
        "title": "4. 默认的别名",
        "slug": "_4-默认的别名",
        "children": []
      },
      {
        "level": 2,
        "title": "5. 补充",
        "slug": "_5-补充",
        "children": []
      }
    ],
    "path": "/two-stage/mybatis/notes/01.%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "执行 SQL 语句",
    "headers": [
      {
        "level": 2,
        "title": "1. 增删改操作",
        "slug": "_1-增删改操作",
        "children": [
          {
            "level": 3,
            "title": "insert 元素",
            "slug": "insert-元素",
            "children": []
          },
          {
            "level": 3,
            "title": "insert 过程中的主键回填",
            "slug": "insert-过程中的主键回填",
            "children": []
          },
          {
            "level": 3,
            "title": "delete 元素 和 update 元素",
            "slug": "delete-元素-和-update-元素",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "2. getMapper 方法",
        "slug": "_2-getmapper-方法",
        "children": []
      },
      {
        "level": 2,
        "title": "3. 查操作",
        "slug": "_3-查操作",
        "children": [
          {
            "level": 3,
            "title": "select 元素",
            "slug": "select-元素",
            "children": []
          },
          {
            "level": 3,
            "title": "select 与 聚合函数",
            "slug": "select-与-聚合函数",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "4. 传递多个参数",
        "slug": "_4-传递多个参数",
        "children": [
          {
            "level": 3,
            "title": "使用 Map 传递多参数",
            "slug": "使用-map-传递多参数",
            "children": []
          },
          {
            "level": 3,
            "title": "使用 JavaBean 传递多参",
            "slug": "使用-javabean-传递多参",
            "children": []
          },
          {
            "level": 3,
            "title": "使用注解方式传递多参数",
            "slug": "使用注解方式传递多参数",
            "children": []
          }
        ]
      }
    ],
    "path": "/two-stage/mybatis/notes/01.%E6%89%A7%E8%A1%8CSQL%E8%AF%AD%E5%8F%A5.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "分页",
    "headers": [
      {
        "level": 2,
        "title": "1. RowBounds 分页",
        "slug": "_1-rowbounds-分页",
        "children": []
      },
      {
        "level": 2,
        "title": "2. PageHelper 分页",
        "slug": "_2-pagehelper-分页",
        "children": []
      },
      {
        "level": 2,
        "title": "3. PageInfo 对象属性描述",
        "slug": "_3-pageinfo-对象属性描述",
        "children": []
      }
    ],
    "path": "/two-stage/mybatis/notes/02.mybatis%E5%88%86%E9%A1%B5.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "动态SQL",
    "headers": [
      {
        "level": 2,
        "title": "if 元素",
        "slug": "if-元素",
        "children": []
      },
      {
        "level": 2,
        "title": "choose-when-otherwise 元素",
        "slug": "choose-when-otherwise-元素",
        "children": []
      },
      {
        "level": 2,
        "title": "where 元素",
        "slug": "where-元素",
        "children": []
      },
      {
        "level": 2,
        "title": "set 元素",
        "slug": "set-元素",
        "children": []
      },
      {
        "level": 2,
        "title": "foreach 元素",
        "slug": "foreach-元素",
        "children": []
      }
    ],
    "path": "/two-stage/mybatis/notes/02.%E5%8A%A8%E6%80%81SQL.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "同时启用配置文件和注解两种配置方式",
    "headers": [],
    "path": "/two-stage/mybatis/notes/02.%E5%90%8C%E7%94%A8%E4%B8%A4%E7%A7%8D%E9%85%8D%E7%BD%AE.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "映射结果集（基本）",
    "headers": [
      {
        "level": 2,
        "title": "1. <resultMap>",
        "slug": "_1-resultmap",
        "children": []
      },
      {
        "level": 2,
        "title": "2. <id> 和 <result>",
        "slug": "_2-id-和-result",
        "children": []
      },
      {
        "level": 2,
        "title": "3. jdbcType",
        "slug": "_3-jdbctype",
        "children": []
      },
      {
        "level": 2,
        "title": "4. 自动映射原理",
        "slug": "_4-自动映射原理",
        "children": []
      }
    ],
    "path": "/two-stage/mybatis/notes/02.%E6%98%A0%E5%B0%84%E7%BB%93%E6%9E%9C%E9%9B%86%EF%BC%88%E5%9F%BA%E6%9C%AC%EF%BC%89.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "映射结果集（高级）",
    "headers": [
      {
        "level": 2,
        "title": "1. 一对一映射",
        "slug": "_1-一对一映射",
        "children": []
      },
      {
        "level": 2,
        "title": "2. 一对多映射",
        "slug": "_2-一对多映射",
        "children": []
      },
      {
        "level": 2,
        "title": "3. 多对多映射",
        "slug": "_3-多对多映射",
        "children": []
      },
      {
        "level": 2,
        "title": "4. <resultMap> 的继承",
        "slug": "_4-resultmap-的继承",
        "children": []
      }
    ],
    "path": "/two-stage/mybatis/notes/02.%E6%98%A0%E5%B0%84%E7%BB%93%E6%9E%9C%E9%9B%86%EF%BC%88%E9%AB%98%E7%BA%A7%EF%BC%89.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "注解中的结果集映射",
    "headers": [
      {
        "level": 2,
        "title": "1. 结果集映射",
        "slug": "_1-结果集映射",
        "children": []
      },
      {
        "level": 2,
        "title": "2. 关系映射",
        "slug": "_2-关系映射",
        "children": []
      },
      {
        "level": 2,
        "title": "3. 常用功能注解汇总",
        "slug": "_3-常用功能注解汇总",
        "children": []
      }
    ],
    "path": "/two-stage/mybatis/notes/02.%E6%B3%A8%E8%A7%A3%E4%B8%AD%E7%9A%84%E7%BB%93%E6%9E%9C%E9%9B%86%E6%98%A0%E5%B0%84.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "注解的简单使用",
    "headers": [
      {
        "level": 2,
        "title": "1. 注解实现简单增删改查",
        "slug": "_1-注解实现简单增删改查",
        "children": []
      },
      {
        "level": 2,
        "title": "2. @SelectProvider 单独提供 SQL",
        "slug": "_2-selectprovider-单独提供-sql",
        "children": []
      }
    ],
    "path": "/two-stage/mybatis/notes/02.%E6%B3%A8%E8%A7%A3%E7%9A%84%E7%AE%80%E5%8D%95%E4%BD%BF%E7%94%A8.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Mybatis Generator",
    "headers": [
      {
        "level": 2,
        "title": "pom.xml 配置",
        "slug": "pom-xml-配置",
        "children": []
      },
      {
        "level": 2,
        "title": "mybatis-generator-config.xml 配置",
        "slug": "mybatis-generator-config-xml-配置",
        "children": []
      }
    ],
    "path": "/two-stage/mybatis/notes/03.MyBatis%20Generator.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "HTTP 概述",
    "headers": [
      {
        "level": 2,
        "title": "1. 基本概念",
        "slug": "_1-基本概念",
        "children": []
      },
      {
        "level": 2,
        "title": "2. HTTP 1.0 和 HTTP 1.1 的区别",
        "slug": "_2-http-1-0-和-http-1-1-的区别",
        "children": []
      },
      {
        "level": 2,
        "title": "3. HTTP 请求数据和响应数据",
        "slug": "_3-http-请求数据和响应数据",
        "children": []
      },
      {
        "level": 2,
        "title": "4. HTTP 请求",
        "slug": "_4-http-请求",
        "children": []
      },
      {
        "level": 2,
        "title": "5. HTTP 响应",
        "slug": "_5-http-响应",
        "children": []
      }
    ],
    "path": "/two-stage/servlet/notes/HTTP%E6%A6%82%E8%BF%B0.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Java Web 进阶",
    "headers": [
      {
        "level": 2,
        "title": "1. HttpSession",
        "slug": "_1-httpsession",
        "children": []
      },
      {
        "level": 2,
        "title": "2. EL 表达式",
        "slug": "_2-el-表达式",
        "children": [
          {
            "level": 3,
            "title": "EL 的默认关闭",
            "slug": "el-的默认关闭",
            "children": []
          },
          {
            "level": 3,
            "title": "EL 语法",
            "slug": "el-语法",
            "children": []
          },
          {
            "level": 3,
            "title": "EL 隐式对象",
            "slug": "el-隐式对象",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "3. JSTL 标签库",
        "slug": "_3-jstl-标签库",
        "children": [
          {
            "level": 3,
            "title": "c:out",
            "slug": "c-out",
            "children": []
          },
          {
            "level": 3,
            "title": "c:set",
            "slug": "c-set",
            "children": []
          },
          {
            "level": 3,
            "title": "c:remove",
            "slug": "c-remove",
            "children": []
          },
          {
            "level": 3,
            "title": "c:if",
            "slug": "c-if",
            "children": []
          },
          {
            "level": 3,
            "title": "c:choose、c:when 和 c:otherwise",
            "slug": "c-choose、c-when-和-c-otherwise",
            "children": []
          },
          {
            "level": 3,
            "title": "c:forEach",
            "slug": "c-foreach",
            "children": []
          },
          {
            "level": 3,
            "title": "fmt 进行日期格式化",
            "slug": "fmt-进行日期格式化",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "4. 乱码问题",
        "slug": "_4-乱码问题",
        "children": [
          {
            "level": 3,
            "title": "判断字符串的编码格式",
            "slug": "判断字符串的编码格式",
            "children": []
          },
          {
            "level": 3,
            "title": "获取 GET 请求中的数据，打印乱码",
            "slug": "获取-get-请求中的数据-打印乱码",
            "children": []
          },
          {
            "level": 3,
            "title": "获取 POST 请求中的数据，打印乱码",
            "slug": "获取-post-请求中的数据-打印乱码",
            "children": []
          },
          {
            "level": 3,
            "title": "中文字符串，输出到页面显示乱码",
            "slug": "中文字符串-输出到页面显示乱码",
            "children": []
          },
          {
            "level": 3,
            "title": "setContentType 和 setCharacterEncoding",
            "slug": "setcontenttype-和-setcharacterencoding",
            "children": []
          }
        ]
      }
    ],
    "path": "/two-stage/servlet/notes/javaWeb%E8%BF%9B%E9%98%B6.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Java Web 高级",
    "headers": [
      {
        "level": 2,
        "title": "1. JavaWeb 中的静态资源访问",
        "slug": "_1-javaweb-中的静态资源访问",
        "children": [
          {
            "level": 3,
            "title": "Tomcat 中的两个默认 Servlet",
            "slug": "tomcat-中的两个默认-servlet",
            "children": []
          },
          {
            "level": 3,
            "title": "总结",
            "slug": "总结",
            "children": []
          },
          {
            "level": 3,
            "title": "如何允许静态资源访问",
            "slug": "如何允许静态资源访问",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "2. 过滤器（Filter）",
        "slug": "_2-过滤器-filter",
        "children": [
          {
            "level": 3,
            "title": "基本概念",
            "slug": "基本概念",
            "children": []
          },
          {
            "level": 3,
            "title": "Filter 的配置",
            "slug": "filter-的配置",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "3. 文件上传与下载",
        "slug": "_3-文件上传与下载",
        "children": [
          {
            "level": 3,
            "title": "文件上传",
            "slug": "文件上传",
            "children": []
          },
          {
            "level": 3,
            "title": "文件下载",
            "slug": "文件下载",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "4. Cookies",
        "slug": "_4-cookies",
        "children": []
      },
      {
        "level": 2,
        "title": "5. 监听器（Listener）",
        "slug": "_5-监听器-listener",
        "children": [
          {
            "level": 3,
            "title": "监听器接口和注册",
            "slug": "监听器接口和注册",
            "children": []
          },
          {
            "level": 3,
            "title": "Servelt Context 监听器",
            "slug": "servelt-context-监听器",
            "children": []
          },
          {
            "level": 3,
            "title": "Session 监听器",
            "slug": "session-监听器",
            "children": []
          },
          {
            "level": 3,
            "title": "ServletRequest 监听器",
            "slug": "servletrequest-监听器",
            "children": []
          }
        ]
      }
    ],
    "path": "/two-stage/servlet/notes/javaWeb%E9%AB%98%E7%BA%A7.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Servlet 基础",
    "headers": [
      {
        "level": 2,
        "title": "1. Servlet API",
        "slug": "_1-servlet-api",
        "children": [
          {
            "level": 3,
            "title": "概述",
            "slug": "概述",
            "children": []
          },
          {
            "level": 3,
            "title": "相关对象概述",
            "slug": "相关对象概述",
            "children": []
          },
          {
            "level": 3,
            "title": "Servlet 接口",
            "slug": "servlet-接口",
            "children": []
          },
          {
            "level": 3,
            "title": "GenericServlet 抽象类",
            "slug": "genericservlet-抽象类",
            "children": []
          },
          {
            "level": 3,
            "title": "HTTPServlet 类",
            "slug": "httpservlet-类",
            "children": []
          },
          {
            "level": 3,
            "title": "ServletRequest 和 HTTPServletRequest",
            "slug": "servletrequest-和-httpservletrequest",
            "children": []
          },
          {
            "level": 3,
            "title": "HttpServletRequest",
            "slug": "httpservletrequest",
            "children": []
          },
          {
            "level": 3,
            "title": "ServletResponse 和 HTTPServletResponse",
            "slug": "servletresponse-和-httpservletresponse",
            "children": []
          },
          {
            "level": 3,
            "title": "ServletConfig 和 ServletContext",
            "slug": "servletconfig-和-servletcontext",
            "children": []
          },
          {
            "level": 3,
            "title": "部署描述符",
            "slug": "部署描述符",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "2. 配置 Servlet 及其映射",
        "slug": "_2-配置-servlet-及其映射",
        "children": [
          {
            "level": 3,
            "title": "老式配置：web.xml 配置",
            "slug": "老式配置-web-xml-配置",
            "children": []
          },
          {
            "level": 3,
            "title": "新式配置：注解配置",
            "slug": "新式配置-注解配置",
            "children": []
          },
          {
            "level": 3,
            "title": "URL 匹配规则",
            "slug": "url-匹配规则",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "3. JSP",
        "slug": "_3-jsp",
        "children": [
          {
            "level": 3,
            "title": "JSP 概述",
            "slug": "jsp-概述",
            "children": []
          },
          {
            "level": 3,
            "title": "隐式对象",
            "slug": "隐式对象",
            "children": []
          },
          {
            "level": 3,
            "title": "指令",
            "slug": "指令",
            "children": []
          },
          {
            "level": 3,
            "title": "脚本元素",
            "slug": "脚本元素",
            "children": []
          },
          {
            "level": 3,
            "title": "动作（了解、自学）",
            "slug": "动作-了解、自学",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "4. Servlet 版本和 web.xml",
        "slug": "_4-servlet-版本和-web-xml",
        "children": [
          {
            "level": 3,
            "title": "Servlet 的版本和对应的 Tomcat",
            "slug": "servlet-的版本和对应的-tomcat",
            "children": []
          },
          {
            "level": 3,
            "title": "不同版本的 web.xml 声明",
            "slug": "不同版本的-web-xml-声明",
            "children": []
          }
        ]
      }
    ],
    "path": "/two-stage/servlet/notes/Servlet%E5%9F%BA%E7%A1%80.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "docker搭建常用容器",
    "headers": [
      {
        "level": 2,
        "title": "1、docker搭建redis容器",
        "slug": "_1、docker搭建redis容器",
        "children": []
      },
      {
        "level": 2,
        "title": "2、docker搭建mysql容器",
        "slug": "_2、docker搭建mysql容器",
        "children": []
      },
      {
        "level": 2,
        "title": "3、docker搭建rabbitMQ容器",
        "slug": "_3、docker搭建rabbitmq容器",
        "children": []
      },
      {
        "level": 2,
        "title": "4、docker搭建minio文件管理容器",
        "slug": "_4、docker搭建minio文件管理容器",
        "children": []
      },
      {
        "level": 2,
        "title": "5、docker搭建nginx容器",
        "slug": "_5、docker搭建nginx容器",
        "children": []
      },
      {
        "level": 2,
        "title": "6、最后说明",
        "slug": "_6、最后说明",
        "children": []
      }
    ],
    "path": "/utilse/docker/notes/docker%E6%90%AD%E5%BB%BA%E5%B8%B8%E7%94%A8%E5%AE%B9%E5%99%A8.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "断言（Assert）",
    "headers": [
      {
        "level": 2,
        "title": "1. 概念",
        "slug": "_1-概念",
        "children": []
      },
      {
        "level": 2,
        "title": "2. Java assert",
        "slug": "_2-java-assert",
        "children": []
      },
      {
        "level": 2,
        "title": "3. Spring Assert 工具类",
        "slug": "_3-spring-assert-工具类",
        "children": []
      }
    ],
    "path": "/utilse/else/notes/assert.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Bucket4j",
    "headers": [
      {
        "level": 2,
        "title": "基本使用",
        "slug": "基本使用",
        "children": []
      },
      {
        "level": 2,
        "title": "阻塞式消费",
        "slug": "阻塞式消费",
        "children": []
      },
      {
        "level": 2,
        "title": "探针",
        "slug": "探针",
        "children": []
      },
      {
        "level": 2,
        "title": "Refill 和 classic 方法",
        "slug": "refill-和-classic-方法",
        "children": []
      },
      {
        "level": 2,
        "title": "初始化令牌数量",
        "slug": "初始化令牌数量",
        "children": []
      },
      {
        "level": 2,
        "title": "非贪婪式创建令牌",
        "slug": "非贪婪式创建令牌",
        "children": []
      }
    ],
    "path": "/utilse/else/notes/bucket4j.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "数据库连接池",
    "headers": [
      {
        "level": 2,
        "title": "数据库连接池：Druid",
        "slug": "数据库连接池-druid",
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
        "title": "数据库连接池：HikariCP",
        "slug": "数据库连接池-hikaricp",
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
    "path": "/utilse/else/notes/datasource.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Jackson",
    "headers": [
      {
        "level": 2,
        "title": "基本使用",
        "slug": "基本使用",
        "children": [
          {
            "level": 3,
            "title": "Object to JSON-String",
            "slug": "object-to-json-string",
            "children": []
          },
          {
            "level": 3,
            "title": "JSON-String to Object",
            "slug": "json-string-to-object",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "@JsonProperty 注解",
        "slug": "jsonproperty-注解",
        "children": []
      },
      {
        "level": 2,
        "title": "数组的序列化和反序列化",
        "slug": "数组的序列化和反序列化",
        "children": []
      },
      {
        "level": 2,
        "title": "集合的序列化和反序列化",
        "slug": "集合的序列化和反序列化",
        "children": []
      },
      {
        "level": 2,
        "title": "处理对象的 NULL 属性",
        "slug": "处理对象的-null-属性",
        "children": [
          {
            "level": 3,
            "title": "方案一：注解",
            "slug": "方案一-注解",
            "children": []
          },
          {
            "level": 3,
            "title": "方案二：配置",
            "slug": "方案二-配置",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "格式化 Date 类型属性",
        "slug": "格式化-date-类型属性",
        "children": []
      },
      {
        "level": 2,
        "title": "Jackson 对 jsr310 的支持",
        "slug": "jackson-对-jsr310-的支持",
        "children": []
      },
      {
        "level": 2,
        "title": "循环引用",
        "slug": "循环引用",
        "children": []
      },
      {
        "level": 2,
        "title": "其它",
        "slug": "其它",
        "children": []
      },
      {
        "level": 2,
        "title": "基于 Jackson 的 JsonUtils 工具类",
        "slug": "基于-jackson-的-jsonutils-工具类",
        "children": []
      }
    ],
    "path": "/utilse/else/notes/jackson.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "元组：javatuples",
    "headers": [
      {
        "level": 2,
        "title": "问题",
        "slug": "问题",
        "children": []
      },
      {
        "level": 2,
        "title": "tuples",
        "slug": "tuples",
        "children": [
          {
            "level": 3,
            "title": "The tuple classes",
            "slug": "the-tuple-classes",
            "children": []
          },
          {
            "level": 3,
            "title": "Creating tuples",
            "slug": "creating-tuples",
            "children": []
          },
          {
            "level": 3,
            "title": "Getting/Setting values",
            "slug": "getting-setting-values",
            "children": []
          },
          {
            "level": 3,
            "title": "Adding or removing elements",
            "slug": "adding-or-removing-elements",
            "children": []
          },
          {
            "level": 3,
            "title": "Converting to/from collections or arrays",
            "slug": "converting-to-from-collections-or-arrays",
            "children": []
          },
          {
            "level": 3,
            "title": "Iterating",
            "slug": "iterating",
            "children": []
          },
          {
            "level": 3,
            "title": "Checking contents",
            "slug": "checking-contents",
            "children": []
          }
        ]
      }
    ],
    "path": "/utilse/else/notes/javatuples.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "操作 JWT：nimbus-jose-jwt 库",
    "headers": [
      {
        "level": 2,
        "title": "1. 相关概念",
        "slug": "_1-相关概念",
        "children": [
          {
            "level": 3,
            "title": "JWT 和 JWS",
            "slug": "jwt-和-jws",
            "children": []
          },
          {
            "level": 3,
            "title": "加密算法",
            "slug": "加密算法",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "2. 核心 API 介绍",
        "slug": "_2-核心-api-介绍",
        "children": [
          {
            "level": 3,
            "title": "加密过程",
            "slug": "加密过程",
            "children": []
          },
          {
            "level": 3,
            "title": "解密",
            "slug": "解密",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "官网的 HS256 示例",
        "slug": "官网的-hs256-示例",
        "children": []
      },
      {
        "level": 2,
        "title": "在 Payload 中存对象",
        "slug": "在-payload-中存对象",
        "children": []
      },
      {
        "level": 2,
        "title": "非对称加密（RSA）",
        "slug": "非对称加密-rsa",
        "children": []
      }
    ],
    "path": "/utilse/else/notes/jwt.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Lombok 常用注解",
    "headers": [
      {
        "level": 2,
        "title": "@Constructor 注解",
        "slug": "constructor-注解",
        "children": []
      },
      {
        "level": 2,
        "title": "@Builder 注解",
        "slug": "builder-注解",
        "children": []
      },
      {
        "level": 2,
        "title": "@Getter / @Setter 注解",
        "slug": "getter-setter-注解",
        "children": []
      },
      {
        "level": 2,
        "title": "@ToString 注解",
        "slug": "tostring-注解",
        "children": []
      },
      {
        "level": 2,
        "title": "@EqualsAndHashCode 注解",
        "slug": "equalsandhashcode-注解",
        "children": []
      },
      {
        "level": 2,
        "title": "@Data 注解",
        "slug": "data-注解",
        "children": []
      },
      {
        "level": 2,
        "title": "@Slf4j",
        "slug": "slf4j",
        "children": []
      },
      {
        "level": 2,
        "title": "@SneakyThrows 注解（了解）",
        "slug": "sneakythrows-注解-了解",
        "children": []
      },
      {
        "level": 2,
        "title": "@Synchronized（了解）",
        "slug": "synchronized-了解",
        "children": []
      }
    ],
    "path": "/utilse/else/notes/lombok.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "slf4j 日志库",
    "headers": [
      {
        "level": 2,
        "title": "slf4j 和 slf4j-simple",
        "slug": "slf4j-和-slf4j-simple",
        "children": [
          {
            "level": 3,
            "title": "基本使用",
            "slug": "基本使用",
            "children": []
          },
          {
            "level": 3,
            "title": "{} 占位符",
            "slug": "占位符",
            "children": []
          },
          {
            "level": 3,
            "title": "附：设置 slf4j-simple 的日志级别",
            "slug": "附-设置-slf4j-simple-的日志级别",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "logback",
        "slug": "logback",
        "children": [
          {
            "level": 3,
            "title": "日志库及其发展历史",
            "slug": "日志库及其发展历史",
            "children": []
          },
          {
            "level": 3,
            "title": "Logback",
            "slug": "logback-1",
            "children": []
          },
          {
            "level": 3,
            "title": "一个更复杂的样例",
            "slug": "一个更复杂的样例",
            "children": []
          }
        ]
      }
    ],
    "path": "/utilse/else/notes/slf4j.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "字符串相关操作",
    "headers": [
      {
        "level": 2,
        "title": "1. 字符串判空",
        "slug": "_1-字符串判空",
        "children": []
      },
      {
        "level": 2,
        "title": "2. 子串的查询、摘出与统计",
        "slug": "_2-子串的查询、摘出与统计",
        "children": []
      },
      {
        "level": 2,
        "title": "3. 子串的摘除与替换",
        "slug": "_3-子串的摘除与替换",
        "children": []
      },
      {
        "level": 2,
        "title": "4. 为了 IO",
        "slug": "_4-为了-io",
        "children": []
      },
      {
        "level": 2,
        "title": "5. String 转数组集合",
        "slug": "_5-string-转数组集合",
        "children": []
      },
      {
        "level": 2,
        "title": "6. 数组集合转 String",
        "slug": "_6-数组集合转-string",
        "children": []
      },
      {
        "level": 2,
        "title": "7. Collection<String> 转 String[]",
        "slug": "_7-collection-string-转-string",
        "children": []
      },
      {
        "level": 2,
        "title": "8. 转其它",
        "slug": "_8-转其它",
        "children": []
      },
      {
        "level": 2,
        "title": "9. 操作字符串数组",
        "slug": "_9-操作字符串数组",
        "children": []
      },
      {
        "level": 2,
        "title": "a. 附：TimeZone String",
        "slug": "a-附-timezone-string",
        "children": []
      }
    ],
    "path": "/utilse/else/notes/%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%93%8D%E4%BD%9C.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "docker-compose.yml 模板",
    "headers": [
      {
        "level": 2,
        "title": "mysql",
        "slug": "mysql",
        "children": []
      },
      {
        "level": 2,
        "title": "redis",
        "slug": "redis",
        "children": []
      },
      {
        "level": 2,
        "title": "nginx",
        "slug": "nginx",
        "children": []
      },
      {
        "level": 2,
        "title": "RabbitMQ",
        "slug": "rabbitmq",
        "children": []
      },
      {
        "level": 2,
        "title": "Elastic Search",
        "slug": "elastic-search",
        "children": []
      },
      {
        "level": 2,
        "title": "Nacos",
        "slug": "nacos",
        "children": []
      }
    ],
    "path": "/utilse/gist/notes/docker-compose.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Git",
    "headers": [
      {
        "level": 2,
        "title": "1. 创建 SSH key",
        "slug": "_1-创建-ssh-key",
        "children": []
      },
      {
        "level": 2,
        "title": "2. gitignore 文件模板",
        "slug": "_2-gitignore-文件模板",
        "children": []
      },
      {
        "level": 2,
        "title": "3. Git 常用命令汇总",
        "slug": "_3-git-常用命令汇总",
        "children": [
          {
            "level": 3,
            "title": "0. 如何创建 SSH key",
            "slug": "_0-如何创建-ssh-key",
            "children": []
          },
          {
            "level": 3,
            "title": "1. 配置",
            "slug": "_1-配置",
            "children": []
          },
          {
            "level": 3,
            "title": "2. 仓库",
            "slug": "_2-仓库",
            "children": []
          },
          {
            "level": 3,
            "title": "3. 增加/删除文件",
            "slug": "_3-增加-删除文件",
            "children": []
          },
          {
            "level": 3,
            "title": "4. 代码提交",
            "slug": "_4-代码提交",
            "children": []
          },
          {
            "level": 3,
            "title": "5. 分支",
            "slug": "_5-分支",
            "children": []
          },
          {
            "level": 3,
            "title": "6. 标签",
            "slug": "_6-标签",
            "children": []
          },
          {
            "level": 3,
            "title": "7. 远程同步",
            "slug": "_7-远程同步",
            "children": []
          },
          {
            "level": 3,
            "title": "8. 查看信息",
            "slug": "_8-查看信息",
            "children": []
          }
        ]
      }
    ],
    "path": "/utilse/gist/notes/git%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4%E6%B1%87%E6%80%BB.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "jdbc.properties",
    "headers": [],
    "path": "/utilse/gist/notes/jdbc.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "logback",
    "headers": [
      {
        "level": 2,
        "title": "1. logback.xml 例子",
        "slug": "_1-logback-xml-例子",
        "children": []
      },
      {
        "level": 2,
        "title": "2. Spring Boot 中的日志配置",
        "slug": "_2-spring-boot-中的日志配置",
        "children": []
      }
    ],
    "path": "/utilse/gist/notes/logback.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Maven 相关模板",
    "headers": [
      {
        "level": 2,
        "title": "1. maven 的 settings.xml",
        "slug": "_1-maven-的-settings-xml",
        "children": []
      },
      {
        "level": 2,
        "title": "2. cleanLastUpdated.bat",
        "slug": "_2-cleanlastupdated-bat",
        "children": []
      },
      {
        "level": 2,
        "title": "3. maven 的 pom.xml",
        "slug": "_3-maven-的-pom-xml",
        "children": []
      },
      {
        "level": 2,
        "title": "4. mybatis-generator-maven-plugin 插件配置",
        "slug": "_4-mybatis-generator-maven-plugin-插件配置",
        "children": []
      },
      {
        "level": 2,
        "title": "5. tomcat8-magen-plugin 配置",
        "slug": "_5-tomcat8-magen-plugin-配置",
        "children": []
      }
    ],
    "path": "/utilse/gist/notes/maven-xml.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Mybatis 相关",
    "headers": [
      {
        "level": 2,
        "title": "1. mybatis-generator-maven-plugin 插件",
        "slug": "_1-mybatis-generator-maven-plugin-插件",
        "children": []
      },
      {
        "level": 2,
        "title": "2. generator.properties",
        "slug": "_2-generator-properties",
        "children": []
      },
      {
        "level": 2,
        "title": "3. mybatis-generator-config.xml 配置",
        "slug": "_3-mybatis-generator-config-xml-配置",
        "children": []
      },
      {
        "level": 2,
        "title": "4. 核心配置文件 for standalone",
        "slug": "_4-核心配置文件-for-standalone",
        "children": []
      },
      {
        "level": 2,
        "title": "5. 核心配置文件 with Spring",
        "slug": "_5-核心配置文件-with-spring",
        "children": []
      },
      {
        "level": 2,
        "title": "6. 普通的结果集映射",
        "slug": "_6-普通的结果集映射",
        "children": []
      },
      {
        "level": 2,
        "title": "7. 结果集一对多映射",
        "slug": "_7-结果集一对多映射",
        "children": []
      },
      {
        "level": 2,
        "title": "8. 结果集多对一映射",
        "slug": "_8-结果集多对一映射",
        "children": []
      },
      {
        "level": 2,
        "title": "9. 注解映射",
        "slug": "_9-注解映射",
        "children": []
      }
    ],
    "path": "/utilse/gist/notes/mybatis-xml.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "SSM 整合（Java 代码配置版）",
    "headers": [
      {
        "level": 2,
        "title": "1. SpringDaoConfig 替代了 spring-dao.xml",
        "slug": "_1-springdaoconfig-替代了-spring-dao-xml",
        "children": []
      },
      {
        "level": 2,
        "title": "2. SpringServiceConfig 替代了 spring-service.xml",
        "slug": "_2-springserviceconfig-替代了-spring-service-xml",
        "children": []
      },
      {
        "level": 2,
        "title": "3. SpringWebConfig 替代了 spring-web.xml",
        "slug": "_3-springwebconfig-替代了-spring-web-xml",
        "children": []
      },
      {
        "level": 2,
        "title": "4. 有 web.xml 的方案",
        "slug": "_4-有-web-xml-的方案",
        "children": []
      },
      {
        "level": 2,
        "title": "5. 无 web.xml 的方案：WebAppInitializer",
        "slug": "_5-无-web-xml-的方案-webappinitializer",
        "children": []
      },
      {
        "level": 2,
        "title": "配合 @PropertySource 使用的一个『坑』（了解、自学）",
        "slug": "配合-propertysource-使用的一个『坑』-了解、自学",
        "children": []
      }
    ],
    "path": "/utilse/gist/notes/ssm-java.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Guava 学习之 CharMatcher",
    "headers": [
      {
        "level": 2,
        "title": "概览",
        "slug": "概览",
        "children": []
      },
      {
        "level": 2,
        "title": "使用示例",
        "slug": "使用示例",
        "children": [
          {
            "level": 3,
            "title": "创建 CharMatcher",
            "slug": "创建-charmatcher",
            "children": []
          },
          {
            "level": 3,
            "title": "使用 CharMatcher",
            "slug": "使用-charmatcher",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "方法分类",
        "slug": "方法分类",
        "children": [
          {
            "level": 3,
            "title": "第一类是判定型函数",
            "slug": "第一类是判定型函数",
            "children": []
          },
          {
            "level": 3,
            "title": "第二类是计数型函数",
            "slug": "第二类是计数型函数",
            "children": []
          },
          {
            "level": 3,
            "title": "第三类就是对匹配字符的操作",
            "slug": "第三类就是对匹配字符的操作",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "Example",
        "slug": "example",
        "children": []
      }
    ],
    "path": "/utilse/guava/notes/charMatcher.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "字符串工具类",
    "headers": [
      {
        "level": 2,
        "title": "对字符串的判断空：Strings",
        "slug": "对字符串的判断空-strings",
        "children": []
      },
      {
        "level": 2,
        "title": "对字符串作拼接：Joiner",
        "slug": "对字符串作拼接-joiner",
        "children": []
      },
      {
        "level": 2,
        "title": "对字符串的拆分：Splitter",
        "slug": "对字符串的拆分-splitter",
        "children": []
      },
      {
        "level": 2,
        "title": "字符串内容的替换：CharMatcher",
        "slug": "字符串内容的替换-charmatcher",
        "children": []
      }
    ],
    "path": "/utilse/guava/notes/%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%B7%A5%E5%85%B7%E7%B1%BB.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "数组工具类",
    "headers": [
      {
        "level": 2,
        "title": "判断数组中是否包含指定元素",
        "slug": "判断数组中是否包含指定元素",
        "children": []
      },
      {
        "level": 2,
        "title": "向数组中添加元素",
        "slug": "向数组中添加元素",
        "children": []
      },
      {
        "level": 2,
        "title": "截取数组中的一部分",
        "slug": "截取数组中的一部分",
        "children": []
      },
      {
        "level": 2,
        "title": "查找元素并返回其索引",
        "slug": "查找元素并返回其索引",
        "children": []
      },
      {
        "level": 2,
        "title": "复制数组",
        "slug": "复制数组",
        "children": []
      },
      {
        "level": 2,
        "title": "空安全的查询长度和查询长度",
        "slug": "空安全的查询长度和查询长度",
        "children": []
      }
    ],
    "path": "/utilse/guava/notes/%E6%95%B0%E7%BB%84%E5%B7%A5%E5%85%B7%E7%B1%BB.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "文件操作工具：Files",
    "headers": [
      {
        "level": 2,
        "title": "Guava 的文件写入",
        "slug": "guava-的文件写入",
        "children": []
      },
      {
        "level": 2,
        "title": "获得文件内容",
        "slug": "获得文件内容",
        "children": []
      },
      {
        "level": 2,
        "title": "复制移动（剪切）文件",
        "slug": "复制移动-剪切-文件",
        "children": []
      },
      {
        "level": 2,
        "title": "比较文件内容",
        "slug": "比较文件内容",
        "children": []
      },
      {
        "level": 2,
        "title": "其他有用的方法",
        "slug": "其他有用的方法",
        "children": []
      }
    ],
    "path": "/utilse/guava/notes/%E6%96%87%E4%BB%B6.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Guava 对 Java 集合框架的补充",
    "headers": [
      {
        "level": 2,
        "title": "Multiset",
        "slug": "multiset",
        "children": []
      },
      {
        "level": 2,
        "title": "Multimap",
        "slug": "multimap",
        "children": []
      },
      {
        "level": 2,
        "title": "BiMap",
        "slug": "bimap",
        "children": []
      },
      {
        "level": 2,
        "title": "Table",
        "slug": "table",
        "children": []
      }
    ],
    "path": "/utilse/guava/notes/%E6%96%B0%E9%9B%86%E5%90%88.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "校验工具",
    "headers": [],
    "path": "/utilse/guava/notes/%E6%A0%A1%E9%AA%8C%E5%B7%A5%E5%85%B7.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "字符串、数组、集合的相互转换",
    "headers": [
      {
        "level": 2,
        "title": "Array -> List",
        "slug": "array-list",
        "children": []
      },
      {
        "level": 2,
        "title": "Array -> String",
        "slug": "array-string",
        "children": []
      },
      {
        "level": 2,
        "title": "List -> Array",
        "slug": "list-array",
        "children": []
      },
      {
        "level": 2,
        "title": "List -> String",
        "slug": "list-string",
        "children": []
      },
      {
        "level": 2,
        "title": "String -> Array",
        "slug": "string-array",
        "children": []
      },
      {
        "level": 2,
        "title": "String -> List",
        "slug": "string-list",
        "children": []
      }
    ],
    "path": "/utilse/guava/notes/%E8%BD%AC%E6%8D%A2.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "迭代器工具类",
    "headers": [
      {
        "level": 2,
        "title": "all 方法：判断迭代器中的元素是否都满足某个条件",
        "slug": "all-方法-判断迭代器中的元素是否都满足某个条件",
        "children": []
      },
      {
        "level": 2,
        "title": "any 方法：判断迭代器中是否至少有一个满足条件",
        "slug": "any-方法-判断迭代器中是否至少有一个满足条件",
        "children": []
      },
      {
        "level": 2,
        "title": "get 方法：获得迭代器中的第 x 个元素",
        "slug": "get-方法-获得迭代器中的第-x-个元素",
        "children": []
      },
      {
        "level": 2,
        "title": "filter 方法：过滤、选中符合条件的项",
        "slug": "filter-方法-过滤、选中符合条件的项",
        "children": []
      },
      {
        "level": 2,
        "title": "find 方法：返回符合条件的第一个元素",
        "slug": "find-方法-返回符合条件的第一个元素",
        "children": []
      },
      {
        "level": 2,
        "title": "transform 方法：对迭代器元素做转换",
        "slug": "transform-方法-对迭代器元素做转换",
        "children": []
      }
    ],
    "path": "/utilse/guava/notes/%E8%BF%AD%E4%BB%A3%E5%99%A8%E5%B7%A5%E5%85%B7%E7%B1%BB.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "集合工具类",
    "headers": [
      {
        "level": 2,
        "title": "判空",
        "slug": "判空",
        "children": []
      },
      {
        "level": 2,
        "title": "批量添加元素",
        "slug": "批量添加元素",
        "children": []
      },
      {
        "level": 2,
        "title": "选中/选出某些元素",
        "slug": "选中-选出某些元素",
        "children": []
      },
      {
        "level": 2,
        "title": "剃除某些元素",
        "slug": "剃除某些元素",
        "children": []
      },
      {
        "level": 2,
        "title": "形变",
        "slug": "形变",
        "children": []
      },
      {
        "level": 2,
        "title": "比较",
        "slug": "比较",
        "children": []
      }
    ],
    "path": "/utilse/guava/notes/%E9%9B%86%E5%90%88%E5%B7%A5%E5%85%B7%E7%B1%BB.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "首页",
    "headers": [
      {
        "level": 2,
        "title": "使用说明",
        "slug": "使用说明",
        "children": []
      },
      {
        "level": 2,
        "title": "二级标题",
        "slug": "二级标题",
        "children": [
          {
            "level": 3,
            "title": "三级标题",
            "slug": "三级标题",
            "children": []
          },
          {
            "level": 3,
            "title": "无序列表",
            "slug": "无序列表",
            "children": []
          },
          {
            "level": 3,
            "title": "有序列表",
            "slug": "有序列表",
            "children": []
          },
          {
            "level": 3,
            "title": "嵌套列表",
            "slug": "嵌套列表",
            "children": []
          },
          {
            "level": 3,
            "title": "引用说明",
            "slug": "引用说明",
            "children": []
          },
          {
            "level": 3,
            "title": "嵌套区块",
            "slug": "嵌套区块",
            "children": []
          },
          {
            "level": 3,
            "title": "代码块（单行代码）",
            "slug": "代码块-单行代码",
            "children": []
          },
          {
            "level": 3,
            "title": "多行代码",
            "slug": "多行代码",
            "children": []
          },
          {
            "level": 3,
            "title": "链接（行内式）",
            "slug": "链接-行内式",
            "children": []
          },
          {
            "level": 3,
            "title": "参数式",
            "slug": "参数式",
            "children": []
          },
          {
            "level": 3,
            "title": "图片",
            "slug": "图片",
            "children": []
          },
          {
            "level": 3,
            "title": "分割线",
            "slug": "分割线",
            "children": []
          },
          {
            "level": 3,
            "title": "字体",
            "slug": "字体",
            "children": []
          },
          {
            "level": 3,
            "title": "表格",
            "slug": "表格",
            "children": []
          }
        ]
      }
    ],
    "path": "/utilse/markdown/notes/Markdown%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Base64Utils",
    "headers": [],
    "path": "/utilse/spring-utils/notes/Base64Util.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Spring 中的 EventBus",
    "headers": [
      {
        "level": 2,
        "title": "自定义 Event",
        "slug": "自定义-event",
        "children": []
      },
      {
        "level": 2,
        "title": "定义 EventListener",
        "slug": "定义-eventlistener",
        "children": []
      },
      {
        "level": 2,
        "title": "触发事件",
        "slug": "触发事件",
        "children": []
      }
    ],
    "path": "/utilse/spring-utils/notes/EventBus.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "FileCopyUtils",
    "headers": [
      {
        "level": 2,
        "title": "输出",
        "slug": "输出",
        "children": []
      },
      {
        "level": 2,
        "title": "输入",
        "slug": "输入",
        "children": []
      }
    ],
    "path": "/utilse/spring-utils/notes/FileCopyUtils.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Spring 反射工具类：ReflectionUtils",
    "headers": [
      {
        "level": 2,
        "title": "Field 相关操作",
        "slug": "field-相关操作",
        "children": [
          {
            "level": 3,
            "title": "查找/获取 Field",
            "slug": "查找-获取-field",
            "children": []
          },
          {
            "level": 3,
            "title": "读写属性值",
            "slug": "读写属性值",
            "children": []
          },
          {
            "level": 3,
            "title": "遍历 Field",
            "slug": "遍历-field",
            "children": []
          },
          {
            "level": 3,
            "title": "其他",
            "slug": "其他",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "Method 相关方法",
        "slug": "method-相关方法",
        "children": [
          {
            "level": 3,
            "title": "查找/获得 Method",
            "slug": "查找-获得-method",
            "children": []
          },
          {
            "level": 3,
            "title": "判断 Method",
            "slug": "判断-method",
            "children": []
          },
          {
            "level": 3,
            "title": "执行 Field",
            "slug": "执行-field",
            "children": []
          },
          {
            "level": 3,
            "title": "遍历执行 Method",
            "slug": "遍历执行-method",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "Constructor 相关方法",
        "slug": "constructor-相关方法",
        "children": [
          {
            "level": 3,
            "title": "查找/获得 Constructor",
            "slug": "查找-获得-constructor",
            "children": []
          },
          {
            "level": 3,
            "title": "设置 Constructor 访问权限",
            "slug": "设置-constructor-访问权限",
            "children": []
          }
        ]
      }
    ],
    "path": "/utilse/spring-utils/notes/ReflectionUtils.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Spring ResolvableType",
    "headers": [
      {
        "level": 2,
        "title": "类型擦除",
        "slug": "类型擦除",
        "children": []
      },
      {
        "level": 2,
        "title": "ResolvableType 简介",
        "slug": "resolvabletype-简介",
        "children": []
      },
      {
        "level": 2,
        "title": "简单使用",
        "slug": "简单使用",
        "children": []
      },
      {
        "level": 2,
        "title": "在泛型中的使用",
        "slug": "在泛型中的使用",
        "children": []
      }
    ],
    "path": "/utilse/spring-utils/notes/ResolvableType.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "资源（Resource）及相关",
    "headers": [
      {
        "level": 2,
        "title": "URI 和 URL",
        "slug": "uri-和-url",
        "children": []
      },
      {
        "level": 2,
        "title": "Resource 及其实现类",
        "slug": "resource-及其实现类",
        "children": []
      },
      {
        "level": 2,
        "title": "Resource 的 getFile() 方法的一个问题",
        "slug": "resource-的-getfile-方法的一个问题",
        "children": []
      },
      {
        "level": 2,
        "title": "ResourceUtils",
        "slug": "resourceutils",
        "children": []
      },
      {
        "level": 2,
        "title": "PropertiesLoaderUtils",
        "slug": "propertiesloaderutils",
        "children": []
      }
    ],
    "path": "/utilse/spring-utils/notes/Resource.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "StreamUtils",
    "headers": [
      {
        "level": 2,
        "title": "输出",
        "slug": "输出",
        "children": []
      },
      {
        "level": 2,
        "title": "输入",
        "slug": "输入",
        "children": []
      },
      {
        "level": 2,
        "title": "实例化",
        "slug": "实例化",
        "children": []
      }
    ],
    "path": "/utilse/spring-utils/notes/StreamUtils.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Spring 中最常用的四个工具类",
    "headers": [
      {
        "level": 2,
        "title": "1. 写在前面的话",
        "slug": "_1-写在前面的话",
        "children": []
      },
      {
        "level": 2,
        "title": "2. ObjectUtils",
        "slug": "_2-objectutils",
        "children": [
          {
            "level": 3,
            "title": "获取对象基本信息",
            "slug": "获取对象基本信息",
            "children": []
          },
          {
            "level": 3,
            "title": "判断工具",
            "slug": "判断工具",
            "children": []
          },
          {
            "level": 3,
            "title": "用 NullSafe 替代 Object 原生方法",
            "slug": "用-nullsafe-替代-object-原生方法",
            "children": []
          },
          {
            "level": 3,
            "title": "其他工具",
            "slug": "其他工具",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "3. StringUtils",
        "slug": "_3-stringutils",
        "children": [
          {
            "level": 3,
            "title": "判断 String",
            "slug": "判断-string",
            "children": []
          },
          {
            "level": 3,
            "title": "操作 String[]",
            "slug": "操作-string",
            "children": []
          },
          {
            "level": 3,
            "title": "字符串与容器的互转",
            "slug": "字符串与容器的互转",
            "children": []
          },
          {
            "level": 3,
            "title": "操作 String",
            "slug": "操作-string-1",
            "children": []
          },
          {
            "level": 3,
            "title": "截取 String",
            "slug": "截取-string",
            "children": []
          },
          {
            "level": 3,
            "title": "文件路径字符串操作",
            "slug": "文件路径字符串操作",
            "children": []
          },
          {
            "level": 3,
            "title": "其他",
            "slug": "其他",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "4. CollectionUtils",
        "slug": "_4-collectionutils",
        "children": [
          {
            "level": 3,
            "title": "判断工具",
            "slug": "判断工具-1",
            "children": []
          },
          {
            "level": 3,
            "title": "向集合中添加",
            "slug": "向集合中添加",
            "children": []
          },
          {
            "level": 3,
            "title": "在集合中查找",
            "slug": "在集合中查找",
            "children": []
          },
          {
            "level": 3,
            "title": "MultiMap 相关",
            "slug": "multimap-相关",
            "children": []
          },
          {
            "level": 3,
            "title": "其他",
            "slug": "其他-1",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "5. Assert",
        "slug": "_5-assert",
        "children": []
      },
      {
        "level": 2,
        "title": "附：TimeZone String",
        "slug": "附-timezone-string",
        "children": []
      }
    ],
    "path": "/utilse/spring-utils/notes/top-4.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
