---
title: Bucket4j
---
# Bucket4j

```xml
<dependency>
    <groupId>com.github.vladimir-bukhtoyarov</groupId>
    <artifactId>bucket4j-core</artifactId>
    <version>4.10.0</version>
</dependency>
```

『**令牌桶**』是一种限速算法，与之相对的是『**漏桶**』。

当进行任务的操作时，消耗一定的令牌，后台以一定的速率生产令牌。在没有令牌的情况下，就阻塞任务，或者拒绝服务。令牌的生产速率，代表了大部分情况下的平均流速。

桶的作用就是存储令牌，消耗的令牌都是从桶中获取。

桶的作用是用来限制流速的峰值，当桶中有额外令牌的时候，实际的流速就会高于限定的令牌生产速率。

为了保证功能的完整，后台必须保证令牌生产，而且是持续服务，不能中断。同时，为了桶功能的正确作用，当桶满了以后，后续生产的令牌会溢出，不会存储到桶内部。

## 基本使用

最简单的 bucket4j 的使用需要提供、涵盖以下几个概念：

1. 桶对象。
2. 带宽。即，每秒提供多少个 token，以允许操作。
3. 消费。即，从桶中一次性取走多少个 token 。

代码示例：

```java
// 带宽，也就是每秒能够通过的流量，自动维护令牌生产。
Bandwidth limit = Bandwidth.simple(10, Duration.ofSeconds(1));
// 桶。bucket 是我们操作的入口。
Bucket bucket = Bucket4j.builder().addLimit(limit).build();
// 尝试消费 n 个令牌，返回布尔值，表示能够消费或者不能够消费。
log.info("{}", bucket.tryConsume(1) ? "do something" : "do nothing")
```

## 阻塞式消费

在上面的基础案例中，如果 bucket 中的令牌的数量不够你的当前消费时，**.tryConsume** 方法会以失败的方式返回。

不过，有时我们希望的效果是等待，等到 bucket 中新增令牌后，再消费，返回。

这种情况下，我们需要使用 **.asScheduler** 方法。

```java
Bandwidth limit = Bandwidth.simple(1, Duration.ofSeconds(2));
Bucket bucket = Bucket4j.builder().addLimit(limit).build();
while (true) {
    // 看这里，看这里，看这里。
    bucket.asScheduler().consume(1);
    String time = LocalTime.now().format(DateTimeFormatter.ISO_LOCAL_TIME);
    log.info("{}", time);
}
```

## 探针

通过创建并使用 **ConsumptionProbe** 对象，除了可以实现正常的消费功能之外，还可以通过它去查询消费后的桶中的“余额”。

```java
// 探针
Bandwidth limit = Bandwidth.simple(5, Duration.ofSeconds(1));
Bucket bucket = Bucket4j.builder().addLimit(limit).build();
while (true) {
    // 获取探针，消费令牌
    ConsumptionProbe probe = bucket.tryConsumeAndReturnRemaining(1);
    // 判断【上一步】是否消费成功
    if (probe.isConsumed()) {
        String time = LocalTime.now().format(DateTimeFormatter.ISO_TIME);
        // 查询剩余令牌数量
        log.info("{} 剩余令牌: {}", time, probe.getRemainingTokens());
    } else {
        log.info("waiting...");
        Thread.sleep(500);
    }
}
```

## **Refill** 和 **classic** 方法

在之前的例子中，我们使用的都是 **Bandwidth.simple** 方法，实际上，它相当于是 **Bandwidth.classic** 方法的简写。

**Bandwidth.classic** 方法的第二个参数需要一个 **Refill** 对象，而 **Refill** 对象就代表着你对桶的填充规则的设定。

```java
// 桶控制。桶容量初始化时默认是满的
long bucketSize = 9;
Refill filler = Refill.greedy(2, Duration.ofSeconds(1));
Bandwidth limit = Bandwidth.classic(bucketSize, filler);

Bucket bucket = Bucket4j.builder().addLimit(limit).build();
while (true) {
    ConsumptionProbe probe = bucket.tryConsumeAndReturnRemaining(1);
    if (probe.isConsumed()) {
        log.info("{}: 剩余令牌 {}", LocalTime.now().format(DateTimeFormatter.ISO_TIME), probe.getRemainingTokens());
    } else {
        log.info("waiting...");
        Thread.sleep(2000);
    }
}
```

## 初始化令牌数量

『**桶的容量**』和桶中的『**令牌的数量**』是两个概念。

默认情况下（上述例子中），在创建桶对象之后，桶都是满的。

不过，你可能不需要这种情况。这是，你需要在创建桶时使用 **withInitialTokens** 方法指定其中的令牌数量。

```java
long bucketSize = 9;
Refill filler = Refill.greedy(2, Duration.ofSeconds(1));
// 看这里，看这里，看这里。
Bandwidth limit = Bandwidth.classic(bucketSize, filler).withInitialTokens(5);
Bucket bucket = Bucket4j.builder().addLimit(limit).build();
while (true) {
    ConsumptionProbe probe = bucket.tryConsumeAndReturnRemaining(1);
    if (probe.isConsumed()) {
        log.info("{}: 剩余令牌 {}", LocalTime.now().format(DateTimeFormatter.ISO_TIME), probe.getRemainingTokens());
    } else {
        log.info("waiting...");
        Thread.sleep(2000);
    }
}
```

## 非贪婪式创建令牌

在之前的示例中，令牌的创建方式都是贪婪式的。所谓贪婪式，指的就是在每一次的添加令牌的周期中，都是在周期的一开始就向桶中添加了全部的令牌。

不过有时，你可能需要这个添加过程更均匀一些，这种情况下，你就需要使用 **Refill.intervally** 方法。

```java
long bucketSize = 10;
// Refill filler = Refill.greedy(10, Duration.ofSeconds(1));
Refill filler = Refill.intervally(10, Duration.ofSeconds(1));

Bandwidth limit = Bandwidth.classic(bucketSize, filler).withInitialTokens(0);
Bucket bucket = Bucket4j.builder().addLimit(limit).build();
while (true) {
    // 获取探针
    ConsumptionProbe probe = bucket.tryConsumeAndReturnRemaining(1);
    // 判断是否能消耗
    if (probe.isConsumed()) {
        String time = LocalTime.now().format(DateTimeFormatter.ISO_TIME);
    // 查询剩余令牌数量
        log.info("{} 剩余令牌: {}", time, probe.getRemainingTokens());
    }
}
```
