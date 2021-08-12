# slf4j 日志库

## slf4j 和 slf4j-simple

```xml
<slf4j.version>1.7.30</slf4j.version>

<dependency>
  <groupId>org.slf4j</groupId>
  <artifactId>slf4j-simple</artifactId>
  <version>${slf4j.version}</version>
</dependency>
```

slf4j（Simple Logging Facade for Java）是现在最流行的 Java 日志库。它提供了 Java 中所有日志框架的简单抽象：**slf4j-api** 。

**slf4j-simple** 是它的一个实现。

> 简单来说，*slf4j-api* 和 *slf4j-simple* 的关系类似于「**接口**」和「**实现类**」的关系。在这里，我们代码中使的 *slf4j* ，但实际干活的是 *slf4j-simple* 。

很容易猜到，**slf4j-api** 的实现并非只有一个，**slf4j-simple** 只是它最简单的一个实现。**slf4j-simple** 实现了最基本的功能，而且没有什么额外附加功能和特色功能。

:::warning

现实项目中不太可能使用 slf4j-simple，我们这里使用它的目的，是通过它去了解 slf4j-api 定义了哪些接口，『约定』了哪些功能，大体是一个什么样的效果。这样好方便我们未来学习使用 slf4j-api 的其它实现。

:::

### 基本使用

在 SLF4J 中获得 Logger 对象的方式是：

```java
LoggerFactory.getLogger()
```

通过指定的名字获得 Logger 对象，如果必要的话，则为这个名字创建一个新的 Logger 对象。Name 一般取本类的名字，比如：

```java
static Logger logger = LoggerFactory.getLogger(App.class);
```

slf4j 提供为不同级别的日志输出提供了不同的方法，常用的是：<b>.error()</b>、<b>.warn()</b>、<b>.info()</b>、<b>.debug()</b> 。

```java
public class App {
    private static final Logger log = LoggerFactory.getLogger(App.class);

    public static void main(String[] args) {
        log.error("error");
        log.warn("warn");
        log.info("info");
        log.debug("debug");
    }
}
```

因为 slf4j-api 背后『真正干活』的是 slf4j-simple，因此显示效果是：

```java
[main] ERROR org.example.App - error
[main] WARN org.example.App - warn
[main] INFO org.example.App - info
```

注意，上面没有 DEBUG 级别日志的输出，因为它级别太低，被过滤掉了。虽然，可以通过设置来降低显示级别，从而让 DEBUG 级别日志显示出来，但是由于实际项目中并不会使用 ***slf4j-simple***，因此这里我们就不深究了。

如果你使用的是其它的 slf4j-api 的实现，那么显示日志信息的格式会有不同，**不过无论使用哪种实现，日志文本信息肯定都是一样的。**

### {} 占位符

SLF4J 一个非常好的功能是，它提供了占位符（使用 **`{}`**）的概念，以方便与在输出信息中『插入』数据。

```java
logger.info("Hello {} World {}", 100, "Goodbye");
```

另外，如果通过 slf4j 打印异常的堆栈信息，异常的堆栈信息不需要一个 **`{}`** ：

```java
logger.error("错误消息：{}", e.getMessage(), e);    // 注意，这里只需要有一个 {} 
```

### 附：设置 slf4j-simple 的日志级别

***slf4j-simple*** 日志的默认输出级别是 info，这就是为什么，没有 debug 日志输出的原因。

slf4j-simple 没有配置文件，对日志输出级别的设置是通过 VM 的启动设置来定制的。

无论是 Idea 还是 Eclipse，找到 `Run/debug Configuration` 配置，为其中的 `VM options` 添加一项：

```text
-Dorg.slf4j.simpleLogger.defaultLogLevel=debug 
```

如果，有其它的配置项，它们之间用空格分隔。

## logback

```xml
<logback.version>1.2.3</logback.version>

<dependency>
  <groupId>ch.qos.logback</groupId>
  <artifactId>logback-classic</artifactId>
  <version>${logback.version}</version>
</dependency>
```

> 整个 Java 日志库领域绕不开的人物是 Ceki Gülcü，大半个日志库领域都与他有关。

### 日志库及其发展历史

- Java 1.4 之前 JDK 中并没有日志相关功能。Apache 基金会的 Log4j 是整个 Java 世界的唯一选择。Ceki Gülcü 是其作者。
- 2002 发布的 Java 1.4 自带了自己的日志库：jdk-logging，也称为 `J.U.L`
- Log4j 和 jdk-logging 两种日志库选择，导致了日志使用的混乱。所以 Apache 推出了commons-logging 。它只是定义了一套日志接口（也是第一个日志接口），支持运行时动态加载日志组件。它的出现解决了多种日志框架共存的尴尬，也是面向接口编程思想的一种具体体现。
- 2006 年，Ceki Gülcü（Log4j 的作者）觉得 commons-logging 这套接口设计的不好，容易让开发者写出有性能问题的代码。他离开 Apache 后，又搞出来一套类似 commons-logging 的接口类的日志库：Slf4j 。
- 在搞出来 Slf4j 之后，Ceki Gülcü 又顺带开发了 Logback，做为 Slf4j 的默认实现。在功能完整度和性能上，Logback 超越了当时所有已有的日志实现框架。
- 鉴于 logback 的更优秀的设计思路，Apache 基金会重写了 Log4j 库，推出其 2.0 版本。习惯性称为 Log4j2 。

从日志库的发展历史来看，众多的日志相关 Jar 包进行分类，主要分为三类：

- 接口类：只提供 API 定义，没有提供具体实现。目的是为应用层提供标准化的使用方式。既所谓的面向接口编程。
  - commons-logging（也称 `J.C.L`，java-commons-logging）
  - SLF4J
- 实现类：具体的日志实现类，提供对日志的收集/管理功能。受不同的需求、不同的历史环境影响，各框架功能上有许多不同。但遵循进化论规律。
  - Log4j
  - jdk-logging（也称，`J.U.L`，java-util-logging）
  - Logback
  - Log4j2
- 桥接类：多种日志实现框架混用情况下，需要借助桥接类进行日志的转换，最后统一成一种进行输出。
  - slf4j-jdk14
  - slf4j-log4j12
  - log4j-slf4j-impl
  - logback-classic
  - slf4j-jcl
  - jul-to-slf4j
  - log4j-over-slf4j
  - icl-over-slf4j
  - log4j-to-slf4j

<img src="/images/log-relation.png">

### Logback

**pom.xml**

```xml
<dependency> 
  <groupId>org.slf4j</groupId>
  <artifactId>slf4j-api</artifactId>
  <version>1.7.25</version>
</dependency>

<dependency>
  <groupId>ch.qos.logback</groupId>
  <artifactId>logback-core</artifactId>
  <version>1.2.3</version>
</dependency>

<dependency>
  <groupId>ch.qos.logback</groupId>
  <artifactId>logback-classic</artifactId>
  <version>1.2.3</version>
</dependency>

<!-- 由于 logback-classic 依赖于 slf4j-api 和 logback-core，因此 slf4j-api 和 logback-core 的 dependency 可以省略掉 -->
```

使用 logback 需要在 classpath 下提供一个 **logback.xml** 配置文件。

该文件最精简的基本格式如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration debug="false">

    <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
        <encoder>
            <pattern>%5p | %-40.40logger{39} : %m%n</pattern>
            <charset>utf8</charset>
        </encoder>
    </appender>

    <logger name="包名" level="DEBUG" additivity="false">
        <appender-ref ref="CONSOLE"/>
    </logger>

    <root level="WARN">
        <appender-ref ref="CONSOLE" />
    </root>

</configuration>
```

#### Logback 的基本配置说明

```xml
<configuration debug="false">
```

logback 日志库本身也能输出关于它自身的日志信息。`debug="false"` 表示关闭 logback 自身的 debug 日志信息的输出。

```xml
<appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
    <encoder>
        <pattern>...</pattern>
        <charset>utf8</charset>
    </encoder>
</appender>
```

这一段 `appender` 的配置表示这一个日志输出『目的地』为终端控制台的配置。`name="xxx"` 命名任意，可自定义。`class="ch.qos.xxx..."` 是『固定』写法。logback 就是靠这里配置的这个类，将日志输出到终端控制台。

`<pattern>...</pattern>` 中写入的是日志格式配置。例如：

```xml
<pattern>%d{yyyy-MM-dd HH:mm:ss} %5p ---- %-40.40logger{39} : %m%n</pattern>
```

logback 采用类似 C 语言中的 printf 函数的打印格式格式化日志信息。

基本的打印参数有：

| 占位符        | 说明                                                         |
| :------------ | :----------------------------------------------------------- |
| %d 或 %date   | 日志生产时间                                                 |
|               | %d{yyyy-MM-dd HH:mm:ss} 2012-11-02 14:34:02                  |
|               | %d{yyyy-MM-dd HH:mm:ss,SSS} 2012-11-02 14:34:02,123          |
| %t 或 %thread | 输出当前线程名称                                             |
| %p 或 %level  | 输出日志级别，-5 表示左对齐并且固定输出 5 个字符，如果不足在右边补空格 |
| %logger       | 输出 logger 的名称。这个名称就是创建 Logger 对象时所传入的字符串，通常就是类的完全限定名 |
|               | %logger{15} 完全限定名超过 15 个字符，开始将包名缩写成单个字母。最右边的部分永远不会被简写 |
|               | %20.20logger 至少占 20 个字符（多的补空格），右对齐。超过 20 个字符开始从左侧缩写 |
|               | %-20.20logger 至少占 20 个字符（多的补空格），左对齐。超过 20 个字符开始从左侧缩写 |
|               | %10.-10logger 至少占 10 个字符（多的补空格），左对齐。超过 20 个字符开始从右侧缩写 |
| %m 或 %msg    | 输出日志的内容                                               |
| %n            | 换行符                                                       |

这里是一段『配置』，后续会引用这一段配置。

```xml
<root level="WARN">
    <appender-ref ref="CONSOLE" />
</root>
```

这一段是在设置日志级别及其日志输出。除了 `<logger>` 元素『额外』指定的包之外，其它的包都遵守此处的配置。相等于就是『默认』的日志输出。

`level="xxx"` 表示日志输出级别，志信息的优先级从高到低有 ERROR、WARN、INFO、DEBUG，分别用来指定这条日志信息的重要程度。

`<appender-ref ref="CONSOLE" />` 表示引用一个名为 `CONSOLE` 的 `<appendder>` 配置。这个配置决定了日志信息以什么样的格式输出，输出到哪里。

```xml
<logger name="包名" level="DEBUG" additivity="false">
    <appender-ref ref="CONSOLE"/>
</logger>
```

`<logger>` 表示一个明确的单独的日志设置。用于专门指定某个包中的日志的输出。如果一个包及符合 `<logger>` 的设置，又因为它要准守默认的 `<root>` 的设置，所以使用 `additivity="false"` 表示它只用遵守 `<logger>` 的设置，`<root>` 的设置不起作用。

### 一个更复杂的样例

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration debug="false">

  <property name="LOG_PATH" value="${catalina.base}/logs/webapps"/>
  <property name="LOG_FILE" value="${LOG_PATH}/spring.log"/>

  <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
    <encoder>
      <pattern>%d{yyyy-MM-dd HH:mm:ss} %5p | %-40.40logger{39} : %m%n</pattern>
      <charset>utf8</charset>
    </encoder>
  </appender>

  <appender name="FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
    <encoder>
      <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} %5p | [%15.15t] %-40.40logger{39} : %m%n</pattern>
      <charset>utf8</charset>
    </encoder>
    <file>${LOG_FILE}</file>
    <rollingPolicy class="ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy">
      <fileNamePattern>${LOG_FILE}.%d{yyyy-MM-dd}.%i.gz</fileNamePattern>
      <maxFileSize>10MB</maxFileSize>
      <maxHistory>0</maxHistory>
    </rollingPolicy>
  </appender>

  <!-- 指定类与<looger>的关联关系 -->
  <logger name="com.oracle" level="DEBUG" additivity="false">
    <appender-ref ref="CONSOLE"/>
    <appender-ref ref="FILE" />
  </logger>

  <root level="INFO">
    <appender-ref ref="CONSOLE" />
    <appender-ref ref="FILE" />
  </root>

</configuration>
```