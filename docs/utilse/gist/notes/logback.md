---
title: logback
---
# logback

## 1. logback.xml 例子

::: code-tabs

@tab 简单的例子

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration debug="false">
    <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
      <encoder>
        <pattern> %5p [%15.15t] %-40.40logger{39} : %m%n</pattern>
          <charset>utf8</charset>
        </encoder>
      </appender>
      <logger name="xxx.yyy.zzz" level="DEBUG" additivity="false">
        <appender-ref ref="CONSOLE"/>
      </logger>
    <root level="WARN">
      <appender-ref ref="CONSOLE" />
    </root>
</configuration>
```

@tab 复杂一点的例子

注意:这里需要在logback的配置文件中手动指定项目的项目名（APP_NAME）

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration debug="false">

    <property name="LOG_PATH" value="${catalina.base}/logs/webapps"/>
    <property name="LOG_FILE" value="${LOG_PATH}/spring.log"/>

    <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
        <encoder>
            <pattern>%d{yyyy-MM-dd HH:mm:ss} %5p [%15.15t] %-40.40logger{39} : %m%n</pattern>
            <charset>utf8</charset>
        </encoder>
    </appender>

    <appender name="FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <encoder>
            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} %5p [%15.15t] %-40.40logger{39} : %m%n</pattern>
            <charset>utf8</charset>
        </encoder>
        <file>${LOG_FILE}</file>
        <rollingPolicy class="ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy">
            <fileNamePattern>${LOG_FILE}.%d{yyyy-MM-dd}.%i.gz</fileNamePattern>
            <maxFileSize>10MB</maxFileSize>
            <maxHistory>0</maxHistory>
        </rollingPolicy>
    </appender>

    <!-- 指定类与 <looger> 的关联关系 -->
    <logger name="com.sxnd" level="DEBUG" additivity="false">
        <appender-ref ref="CONSOLE"/>
        <appender-ref ref="FILE" />
    </logger>

    <root level="INFO">
        <appender-ref ref="CONSOLE" />
        <appender-ref ref="FILE" />
    </root>

</configuration>
```

@tab 更复杂的例子

::: warning
这个例子中，通过配置，让 logback 自己从 spring boot 项目的配置文件中 “求得” 当前项目的项目名。
:::

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration debug="false">
    <!-- 引用 spring-boot 配置中的变量 -->
    <springProperty scope="context" name="APP_NAME" source="spring.application.name"/>

    <!-- 定义变量 -->
    <!-- <property name="LOG_PATH" value="${catalina.base}/logs/webapps"/> -->
    <property name="LOG_HOME" value="${user.home}/logs"/>

    <appender name="CONSOLE-LOG" class="ch.qos.logback.core.ConsoleAppender">
        <encoder>
            <pattern>%5p [%15.15t] %-40.40logger{39} : %m%n</pattern>
            <charset>utf8</charset>
        </encoder>
    </appender>

    <!-- 获取比级别 >= info ，但排除 error 的日志-->
    <appender name="INFO-LOG" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <filter class="ch.qos.logback.classic.filter.LevelFilter">
            <level>ERROR</level>
            <onMatch>DENY</onMatch>
            <onMismatch>ACCEPT</onMismatch>
        </filter>
        <encoder>
            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} %5p [%15.15t] %-50.50logger{49} : %m%n</pattern>
            <charset>utf8</charset>
        </encoder>

        <!-- 滚动策略 -->
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <!-- 路径 -->
            <fileNamePattern>${LOG_HOME}/${APP_NAME}/info/%d.log</fileNamePattern>
            <maxHistory>30</maxHistory>
        </rollingPolicy>
    </appender>

    <appender name="ERROR-LOG" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <filter class="ch.qos.logback.classic.filter.ThresholdFilter">
            <level>ERROR</level>
        </filter>
        <encoder>
            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} %5p [%15.15t] %-50.50logger{49} : %m%n</pattern>
            <charset>utf8</charset>
        </encoder>
        <!-- 滚动策略 -->
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <!-- 路径 -->
            <fileNamePattern>${LOG_HOME}/${APP_NAME}/error/%d.log</fileNamePattern>
            <maxHistory>30</maxHistory>
        </rollingPolicy>
    </appender>

    <!-- 异步输出 -->
    <appender name="ASYNC-INFO" class="ch.qos.logback.classic.AsyncAppender">
        <!-- 不丢失日志。默认情况下，如果队列的 80% 已满，则会丢弃 TRACT 、DEBUG 、INFO 级别的日志 -->
        <discardingThreshold>0</discardingThreshold>
        <!-- 更改默认的队列的深度，该值会影响性能。默认值为 256 -->
        <queueSize>256</queueSize>
        <!-- 添加附加的 appender，最多只能添加一个 -->
        <appender-ref ref="INFO-LOG"/>
    </appender>

    <appender name="ASYNC-ERROR" class="ch.qos.logback.classic.AsyncAppender">
        <!-- 不丢失日志。默认的，如果队列的 80% 已满，则会丢弃 TRACT、DEBUG、INFO 级别的日志 -->
        <discardingThreshold>0</discardingThreshold>
        <!-- 更改默认的队列的深度，该值会影响性能。默认值为 256 -->
        <queueSize>256</queueSize>
        <!-- 添加附加的 appender，最多只能添加一个 -->
        <appender-ref ref="ERROR-LOG"/>
    </appender>

    <!-- 日志输出级别控制 -->
    <root level="warn">
        <appender-ref ref="CONSOLE-LOG" />
        <appender-ref ref="INFO-LOG" />
        <appender-ref ref="ERROR-LOG" />
    </root>
    <!-- 指定类与 <looger> 的关联关系 -->
    <logger name="com.woniu" level="INFO" additivity="false">
        <appender-ref ref="CONSOLE-LOG" />
        <appender-ref ref="INFO-LOG" />
        <appender-ref ref="ERROR-LOG" />
    </logger>
    <!-- 指定类与 <looger> 的关联关系 -->
    <logger name="com.example" level="INFO" additivity="false">
        <appender-ref ref="CONSOLE-LOG" />
        <appender-ref ref="INFO-LOG" />
        <appender-ref ref="ERROR-LOG" />
    </logger>
</configuration>
```

:::


## 2. Spring Boot 中的日志配置

spring boot 项目中，xml 名字也可命名为：logback-spring.xml

极简的情况：

::: code-tabs

@tab application.yml 版

  ```yaml
  logging:
    level:
      root: WARN
      com.woniu: DEBUG
    pattern:
      console: "${CONSOLE_LOG_PATTERN:\
        %clr(${LOG_LEVEL_PATTERN:%5p}) \
        %clr([%15.15t]){faint} \
        %clr(%-40.40logger{39}){cyan} \
        %clr(:){faint} \
        %m%n${LOG_EXCEPTION_CONVERSION_WORD:%wEx}}"
  ```

  这里的 console 配置有双引号。

@tab application.properties 版

  ```properties
  logging.level.root=WARN
  logging.level.com.woniu=DEBUG
  logging.pattern.console=${CONSOLE_LOG_PATTERN:%clr(${LOG_LEVEL_PATTERN:%5p}) %clr([%15.15t]){faint} %clr(%-40.40logger{39}){cyan} %clr(:){faint} %m%n${LOG_EXCEPTION_CONVERSION_WORD:%wEx}}
  ```

  这里的 console 配置没有双引号。

:::
