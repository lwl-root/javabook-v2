module.exports = [
    {
        text: '工具库',
        children: [
            {
                text: '工具类库',
                children: [
                    {text: '常用工具类', link: '/utilse/else/notes/assert.html'},
                    {text: 'Guava 工具库', link: '/utilse/guava/notes/字符串工具类.html'},
                    {text: 'Spring 内置工具库', link: '/utilse/spring-utils/notes/top-4.html'},
                ],
            },
            {
                text: '模板',// link: '/utilse/gist/notes/jdbc.html',
                children: [
                    {text: '各种模板', link: '/utilse/gist/notes/jdbc.html'},
                    //{text:'markdown使用',link: '/utilse/markdown/notes/Markdown基本使用.html'},
                    {text: 'docker 搭建常用容器', link: '/utilse/docker/notes/docker搭建常用容器.html'},
                ],
            },
        ]
    },

    {
        text: 'Java & MySQL',
        children: [
            {
                text: "Java 基础",
                children: [
                    {text: 'Java', link: '/one-stage/java/notes/java语法汇总.html'},
                    {text: 'Java 多线程', link: '/one-stage/javathread/notes/多进程.html'},
                    {text: '线程安全', link: '/one-stage/threadsafe/notes/a01.线程安全.html'},
                    {text: 'JDK8 新特性', link: '/one-stage/java8/notes/lambda.html'},
                ],
            },
            {
                text: "MySQL 数据库",
                children: [
                    {text: 'MySQL 数据库', link: '/one-stage/mysql/notes/操作Database.html'},
                    {text: 'JDBC 操作数据库', link: '/one-stage/myjdbc/notes/JDBC基础.html'},
                ],
            },
        ]
    },

    {
        text: 'servlet & 前端',
        children: [
            {text: '前端基础', link: '/two-stage/html/notes/01.基本概念和结构.html'},
            {text: 'Servlet', link: '/two-stage/servlet/notes/HTTP概述.html'},
            {text: 'JUnit', link: '/two-stage/junit/notes/基本概念.html'},

            //{text:'AJAX请求及相关',link: '/two-stage/gist'},
            //{text:'vue.js',link: '/two-stage/gist'},
            //{text:'vue专项问题',link: '/two-stage/gist'},
        ]
    },

    {
        text: 'SSM & SpringBoot',//link: '/three-stage/',
        children: [
            {text: 'MyBatis', link: '/three-stage/mybatis/notes/01.关于mybatis.html'},
        ]
    },

    {
        text: '微服务 & 中间件',//link: '/four-stage/',
        children: [

        ]
    },

    {
        text: '数据结构与算法',
        children: [
            {text: '入门', link: '/pascal/basics/notes/数据结构与算法入门.html'},
        ]
    },

    {
        text: '日常积累',
        children: [
            {text: 'Java 相关', link: '/demo/Java/notes/List去重.html'},
            {text: '框架相关', link: '/demo/frame/notes/swagger2.html'},
            {
                text: '数据库相关', link: '/demo/databases/notes/数据库test.html',
                /*children: [
                    {text: '数据库二级', link: '/demo/databases/notes/数据库test.html'}
                ],*/
            },
            {text: 'server 相关', link: '/demo/server/notes/ssh公钥.html'},
        ]
    },

    {
        text: 'c-book',
        children: [
            {text: 'spring-security', link: '/c-book/spring-security/notes/spring-security.html'},
            {text: 'gof23', link: '/c-book/gof23/notes/单例模式.html'},
            {text: 'kafka', link: '/c-book/kafka/notes/kafka.html'},
            //{text: 'gof23-工厂模式', link: '/c-book/gof23-工厂模式/notes/工厂模式.html'},
        ],
    },
]