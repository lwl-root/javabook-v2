---
title: jdbc.properties
---

# jdbc.properties

**.properties** 和命令行类似，原则上一行就是一个键值对，如果因为值太长需要折行继续编写，那么上一行的行尾需要加 `\` 表示本行还未结束，下一行的内容和本行算同一行。

> 提示：`\` 被称作 **"续行符"**

## 1、自定义的 .properties 配置

::: code-tabs
@tab jdbc.properties 版本

```properties
datasource.driver-class-name=com.mysql.cj.jdbc.Driver
datasource.url=jdbc:mysql://127.0.0.1:3306/<数据库>\
    ?useUnicode=true\
    &characterEncoding=utf-8\
    &useSSL=false\
    &serverTimezone=Asia/Shanghai
datasource.username=<用户名>
datasource.password=<密码>
```

:::

## 2、Spring Boot 项目中的配置

::: code-tabs
@tab application.properties 版本

```properties
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://127.0.0.1:3306/<数据库>\
    ?useUnicode=true\
    &characterEncoding=utf-8\
    &useSSL=false\
    &serverTimezone=Asia/Shanghai
spring.datasource.username=<用户名>
spring.datasource.password=<密码>
```

@tab application.yml 版本

```yml
spring:
  datasource:
    name: defaultDataSource # 非必须
    url: "jdbc:mysql://127.0.0.1:3306/<数据库>\
      ?useUnicode=true\
      &characterEncoding=utf-8\
      &useSSL=false\
      &serverTimezone=Asia/Shanghai"
    driver-class-name: com.mysql.cj.jdbc.Driver
    username: <用户名>
    password: <密码>
```

:::
