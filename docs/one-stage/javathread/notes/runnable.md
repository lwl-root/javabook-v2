---
title: 使用 Runnable 接口创建线程
---

# 使用 Runnable 接口创建线程

由于 Java 只允许单继承，因此一旦一个类已有父类，那么就无法再继承 Thread 类，从而导致上述实现线程的方式无法使用。

使用 Runnable 接口创建线程能解决上述问题。

Runnable 接口声明了一个 **Runnable#run** 方法。任何一个类都可以通过实现 Runnable 接口并实现其 **Runnable#run** 方法来完成线程的所有活动。

使用实现 Runnable 接口的方式创建线程的实现步骤如下：

1. 定义 Xxx 类并实现 java.lang.Runnable 接口，并实现它所声明的 **run** 方法；
2. 创建线程对象；
3. 调用 **start** 方法启动线程。