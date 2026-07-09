---
title: 断言
---
# 断言（Assert）
## 1. 概念
概念上 “断言” 代码就像是一个 “拦路虎” ，它预期一个 boolean 表达式的值 “应该” 为 true 。

如果 boolean 表达式的值为 true ，那么它会“放行”，代码流程继续向下执行；

如果 boolean 表达式的值为 false ，那么它会以抛出异常等方式返回，拒绝代码流程继续执行。

从最终效果上来看，断言就是实现了一个逻辑判断的功能。

## 2. Java assert
在 JDK 1.4 开始 Java 也引入了断言特性。

默认情况下，JVM 是关闭断言功能的。即，你在 .java 文件中所编写的代码，在编译过程中，会被删除，不会出现在 .class 文件中。

如果想使用断言调试程序，需要手动打开断言功能。在命令行模式下运行 Java 程序时可增加参数 -enableassertions 或者 -ea 打开断言。

::: danger 警告

不要使用断言来替代 if 判断！断言是为了方便调试程序，并不是发布程序的组成部分（这是公论、常识和惯例，不是你开不开 -ea 的问题）。

assert 语法上是代码，但是功效上更像是一种注释！

:::

断言是通过关键字 `assert` 来定义的，一般的，它有两种形式。

assert &lt;布尔表达式&gt;;

```java
boolean b = ...;
assert b;
...;
```

当 b 的值为 false 时，assert 就会抛出异常（AssertionError），因此，assert 后面的语句也就不会执行了。

assert &lt;布尔表达式&gt; : &lt;字符串&gt;;

```java
boolean b = ...;  
assert b: "hello world";
...;
```

功能同上在，只不过可以指定异常信息。

## 3. Spring Assert 工具类
Spring 框架自带的 Assert 工具类实际上就是在模拟 JDK assert 关键字的功能：当 boolean 表达式成立时，程序继续；不成立时，抛出异常，阻止程序的继续执行。

Assert 类中的常用断言方法：


@tab 通用判断
```java
/**
 * 预期布尔表达式 “应该” 成立。
 * 如果不成立则抛出异常，不再继续往下执行。
 * 另外，参数 message 参数用于自定义异常信息。
 */
void isTrue(boolean expression, String message)
```
@tab 判空
```java
// 预期参数 object “应该” 为空。
void isNull(Object object, String message)

// 预期参数 object “应该” 非空。这和 notNull 断言规则相反
void notNull(Object object, String message)

// 预期参数 text “应该” 非空（not empty）。
void hasLength(String text, String message)

// 预期参数 text “应该” 非空（not blank）。
void hasText(String text, String message)

// 预期参数 collection “应该” 非空（其中有元素）。
void notEmpty(Collection collection, String message)
```
@tab 类型判断
```java
// 预期参数 obj 的类型 “应该” 是参数 type 所指定类型。
void isInstanceOf(Class type, Object obj, String message)

// 预期参数 subType “应该” 是参数 superType 的子类，或实现类。
void isAssignable(Class superType, Class subType, String message)
```



::: tip 提示
Spring Assert 的一个缺点:

你看一下 Spring Assert 的源码就会发现，它抛出的全部都是 IllegalArgumentException 。作为使用者，你无法去控制、影响这一点。
:::
