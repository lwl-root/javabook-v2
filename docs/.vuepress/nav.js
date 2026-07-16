module.exports = [
    {
        text: '工具库',
        children: [
            {
                text: '工具类库',
                children: [
                    {text: '常用工具类', link: '/utilse/else/notes/assert.md'},
                    {text: 'Guava 工具库', link: '/utilse/guava/notes/字符串工具类.md'},
                    {text: 'Spring 内置工具库', link: '/utilse/spring-utils/notes/top-4.md'},
                ],
            },
            {
                text: '模板',
                children: [
                    {text: '各种模板', link: '/utilse/gist/notes/jdbc.md'},
                    {text: 'Docker 搭建常用容器', link: '/utilse/docker/notes/docker搭建常用容器.md'},
                ],
            },
        ]
    },

    {
        text: 'Java & MySQL',
        children: [
            {
                text: 'Java 基础',
                children: [
                    {text: 'Java', link: '/one-stage/java/notes/java语法汇总.md'},
                    {text: 'Java 多线程', link: '/one-stage/javathread/notes/多进程.md'},
                    {text: '线程安全', link: '/one-stage/threadsafe/notes/a01.线程安全.md'},
                    {text: 'JDK8 新特性', link: '/one-stage/java8/notes/lambda.md'},
                ],
            },
            {
                text: 'MySQL 数据库',
                children: [
                    {text: 'MySQL 数据库', link: '/one-stage/mysql/notes/操作Database.md'},
                    {text: 'JDBC 操作数据库', link: '/one-stage/myjdbc/notes/JDBC基础.md'},
                ],
            },
        ]
    },

    {
        text: 'Servlet & 前端',
        children: [
            {
                text: '前端基础',
                children: [
                    {text: 'HTML 和 CSS', link: '/two-stage/html/notes/01.基本概念和结构.md'},
                    {text: 'JS 和 ES6', link: '/two-stage/js/notes/01.JavaScript编程基础.md'},
                    {text: 'AJAX 和 Axios', link: '/two-stage/ajax/notes/RestClient.md'},
                ],
            },
            {
                text: 'Servlet',
                children: [
                    {text: 'Java Web', link: '/two-stage/servlet/notes/HTTP概述.md'},
                ],
            },
            {
                text: 'Vue',
                children: [
                    {text: 'NPM', link: '/two-stage/npm/notes/npm.md'},
                ],
            },
        ]
    },

    {
        text: 'SSM & SpringBoot',
        children: [
            {text: 'MyBatis', link: '/three-stage/mybatis/notes/01.关于mybatis.md'},
            {text: 'JUnit', link: '/three-stage/junit/notes/基本概念.md'},
        ]
    },

    {
        text: '微服务 & 中间件',
        children: []
    },

    {
        text: '笔记',
        children: [
            {text: '',link:'/pascal/basics/notes/数据结构与算法入门.md'}
        ]
    },

    {
        text: '日常积累',
        children: [
            {text: 'Java 相关', link: '/demo/Java/notes/list去重.md'},
            {text: '框架相关', link: '/demo/frame/notes/swagger2.md'},
            {text: '数据库相关', link: '/demo/databases/notes/oracle子查询.md'},
            {text: 'Server 相关', link: '/demo/server/notes/ssh公钥.md'},
            {text: '前端相关', link: '/demo/web/notes/全局loading.md'},
        ]
    },

    {
        text: 'C-Book',
        children: [
            {text: 'Spring Security', link: '/c-book/spring-security/notes/spring-security.md'},
            {text: 'GoF 23', link: '/c-book/gof23/notes/单例模式.md'},
            {text: 'Kafka', link: '/c-book/kafka/notes/kafka.md'},
        ],
    },

    {
        text: '管理',
        children: [
            {text: '📝 内容后台', link: '/admin/'},
        ]
    },
]