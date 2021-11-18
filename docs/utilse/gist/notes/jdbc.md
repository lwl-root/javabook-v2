# jdbc.properties

**.properties** 和命令行类似，原则上一行就是一个键值对，如果因为值太长需要折行继续编写，那么上一行的行尾需要加 `\` 表示本行还未结束，下一行的内容和本行算同一行 。

::: tip

`\` 被称作续行符。

:::

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