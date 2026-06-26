# Lombok 常用注解

## @Constructor 注解

**@Constructor** 注解标注于类上，用于生成类的构造函数。它一共有三种：

| 注解                         | 说明                                                         |
| :--------------------------- | :----------------------------------------------------------- |
| **@NoArgsConstructor**       | 用于生成无参构造函数                                         |
| **@AllArgsContructor**       | 用于生成全参构造函数                                         |
| **@RequiredArgsConstructor** | 用于生成必要参数的构造函数。所谓的必要的参数，指的是被标注了 **@NonNull** 的属性的构造函数。 |

::: warning

还有其它的包、库自定义了 **@NonNull** 注解，注意你 **import** 的是哪一个。

:::

另外，**@AllArgsContructor** 和 **@RequiredArgsConstructor** 可以使用一个叫 **staticName** 的属性用于生成对象的静态构造方法。这个方法通常叫 **of** 或 **getInstance** 。

```java
@AllArgsConstructor(staticName = "of")
public class Human { ... }

Human human = Human.of(name, age);
```

## @Builder 注解

**@Builder** 同样是用于构造对象。它标注于类上，用于在类中生成该类的一个 Builder，以便使用 Builder 方式以链式的方式实例化对象。

```java
@Builder
public class Human { ... }

Human h = Human.builder().name(name).age(age).build();
```

通常的编码习惯是在使用 Builder 时多折行显示，形如:

```java
Human h = Human.builder()
            .name(name)
            .age(age)
            ...
            .build();
```

## @Getter / @Setter 注解

在属性上标注，即生成该属性的 getter/setter 方法。

在类上标注，则是为该类的『**所有属性**』生成 getter/setter 方法。

**@Getter** / **@Setter** 注解有一个 **value** 属性（默认属性）可以设置所生成的 getter/setter 方法的访问权限。默认为 **`lombok.AccessLevel.PUBLIC`** 。

```java
@Getter(lombok.AccessLevel.PROTECTED)
```

这里需要注意的是，对于基本类型 **boolean** 和引用类型 Boolean，@Getter 方法生成的 getter 方法『**名字不一样**』。setter 方法不变

```java
private boolean male; // 生成 isMale() 方法
private Boolean male; // 生成 getMale() 方法
```

::: warning

上述代码是 lombok 的『著名的坑』。boolean 和它的包装类 Boolean 所生成的 getter 的名字是不一样的！

:::

## @ToString 注解

**@ToString** 注解标注于类上，用于生成 **toString** 方法。

默认的 toString 格式为：**ClassName(fieldName=fieleValue, fieldName1=fieleValue, ...)**

如果想排除某些属性（特别是因为循环引用问题）时，可以使用 **exclude** 属性。

```java
@ToString(exclude = { "id", ... })
public class Human { ... }
```

如果因为继承，你想要在 **toSting** 方法中包括继承自父类的属性，那么可以使用 **callSuper** 属性。

```java
@ToString(callSuper = true) // 默认值是 false
public class Human { ... }
```

如果为了简化内容，你可以使用 **includeFieldNames** 属性在 *toString* 方法中去掉属性的名字。

```java
@ToString(includeFieldNames = false) // 默认值是 true
public class Human { ... } 
```

## @EqualsAndHashCode 注解

**@EqualsAndHashCode** 注解标注于类上，用于生成 **equals** 方法和 **hashCode** 方法。

和之前的 **@ToString** 一样，可是使用 **exclude** 选项除掉不想要的属性。也可以通过 **callSuper** 包含父类的 equals 和 hashCode 。

&gt; 需要注意的是，如果类的属性中有 Array（数组）类型的变量，最好是『**手写**』**equals** 和 **hashCode** 方法。因为最好是调用工具类 Arrays 中的 **deepHashCode** 方法， **deepEquals** 方法进行比较。

## @Data 注解

**@Data** 注解标注于类上，相当于同时使用了 **@ToString**、**@EqualsAndHashCode**、**@Getter**、**@Setter** 和 **@RequiredArgsConstrutor** 这些注解（一个打五个），对于 JavaBean 类十分有用。

另外，**@Value** 注解是 **@Data** 的不可变形式，相当于为属性添加 final 声明，只提供 getter 方法，而不提供 setter 方法。即，使用它的 JavaBean 都是**只读**的 JavaBean 。

## @Slf4j

自动实例化日志对象 `log` 。

pom 依赖：

```xml
<!-- 自动依赖 slf4j-api -->
<dependency>
	<groupId>ch.qos.logback</groupId>
	<artifactId>logback-classic</artifactId>
	<version>1.2.3</version>
</dependency>
```

需要将日志的配置文件（**logback.xml**）放置到 **classpath** 下。

在类上标注 **@Slf4j**

```java
@Slf4j
public class App { ... }
```

使用 log 对象输出打印日志

```java
log.info("info");
log.warn("warn");
log.debug("debug");
```

## @SneakyThrows 注解（了解）

@SneakyThrows 的用法比较简单，其实就是对于异常的一个整理，将 checked exception 看做 unchecked exception，不处理，直接扔掉（上抛），减少了到处写 catch 的不便利性。

比如在线程中，catch 所有异常，再比如在一些不太可能发生异常的地方，但是你又必须 catch checked exception 的地方使用这个 annotation 会显得代码比较规整，易读。

```java
public class SneakyThrowsExample implements Runnable {
    @SneakyThrows(UnsupportedEncodingException.class)
    public String utf8ToString(byte[] bytes) {
        return new String(bytes, "UTF-8");
    }
   
    @SneakyThrows
    public void run() {
        throw new Throwable();
    }
}
```

## @Synchronized（了解）

类似于 Synchronized 关键字 但是可以隐藏同步锁

```java
import lombok.Synchronized;
 
public class SynchronizedExample {
    private final Object readLock = new Object();
  
    @Synchronized
    public static void hello() {
        System.out.println("world");
    }
  
    @Synchronized
    public int answerToLife() {
        return 42;
    }
  
    @Synchronized("readLock")
    public void foo() {
        System.out.println("bar");
    }
}
```