export const data = {
  "key": "v-5e80146d",
  "path": "/c-book/kafka/notes/kafka.html",
  "title": "消息队列的流派",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
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
  "git": {
    "updatedTime": 1646817904000
  },
  "filePathRelative": "c-book/kafka/notes/kafka.md"
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
