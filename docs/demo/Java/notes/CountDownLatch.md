# java中对CountDownLatch的使用
## 介绍
CountDownLatch是一个同步辅助类，它允许一个或多个线程一直等待直到其他线程执行完毕才开始执行。

用给定的计数初始化CountDownLatch，其含义是要被等待执行完的线程个数。

每次调用CountDown()，计数减1

主程序执行到await()函数会阻塞等待线程的执行，直到计数为0


## 实现原理
计数器通过使用锁（共享锁、排它锁）实现


## 实例1
>场景：模拟10人赛跑。10人跑完后才喊"Game Over."

```java
package com.jihite;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class CountDownLatchTest {
private static final int RUNNER_COUNT = 10;
public static void main(String[] args) throws InterruptedException {
final CountDownLatch begin = new CountDownLatch(1);
final CountDownLatch end = new CountDownLatch(RUNNER_COUNT);
final ExecutorService exec = Executors.newFixedThreadPool(10);

        for (int i = 0; i < RUNNER_COUNT; i++) {
            final int NO = i + 1;
            Runnable run = new Runnable() {
                @Override
                public void run() {
                    try {
                        begin.await();
                        Thread.sleep((long)(Math.random() * 10000));
                        System.out.println("No." + NO + " arrived");
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    } finally {
                        end.countDown();
                    }
                }
            };
            exec.submit(run);
        }

        System.out.println("Game Start ...");
        begin.countDown();
        end.await();
//        end.await(30, TimeUnit.SECONDS);
        System.out.println("Game Over.");

        exec.shutdown();
    }
}
```
分析：代码中定义了2个计数器，个数分别为1和10。

如果不执行begin.countDown()，进程会一致阻塞在begin.await()

主进程执行到end.awit()阻塞等待end计数器清0，进程中每执行一次CountDown()减1，所有执行完后主进程继续往下执行

输出:

```text
Game Start ...
No.6 arrived
No.4 arrived
No.10 arrived
No.3 arrived
No.9 arrived
No.5 arrived
No.8 arrived
No.7 arrived
No.1 arrived
No.2 arrived
Game Over.
```
::: warning 注意
注：countDown()一定要执行到（考虑异常及线程与开始计数设置不一致），否则会一直卡在await()（可以设置时间，超过一定时间就不等了）
:::

## 实例2（和join的相似处）

>场景：流水线上有3个worker: worker1、worker2、worker3,只有当worker1和worker2执行完时才可以执行worker3


```java
package com.jihite;

import java.util.concurrent.CountDownLatch;

public class WorkerCount extends Thread {
    private String name;
    private long time;
    private CountDownLatch countDownLatch;

    public WorkerCount(String name, long time, CountDownLatch countDownLatch) {
        this.name = name;
        this.time = time;
        this.countDownLatch = countDownLatch;
    }

    @Override
    public void run() {
        try {
            System.out.println(name + "开始工作");
            Thread.sleep(time);
            System.out.println(name + "工作完成, 耗时："+ time);
            countDownLatch.countDown();
            System.out.println("countDownLatch.getCount():" + countDownLatch.getCount());
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
```
CountDownLatch实现：

```java
@Test
public void CountDownLatchTest() throws InterruptedException {
    int COUNT = 2;
    final CountDownLatch countDownLatch = new CountDownLatch(COUNT);
    WorkerCount worker0 = new WorkerCount("lilei-0", (long)(Math.random() * 10000), countDownLatch);
    WorkerCount worker1 = new WorkerCount("lilei-1", (long)(Math.random() * 10000), countDownLatch);
    worker0.start();
    worker1.start();
    countDownLatch.await();
    System.out.println("准备工作就绪");

    WorkerCount worker2 = new WorkerCount("lilei-2", (long)(Math.random() * 10000), countDownLatch);
    worker2.start();
    Thread.sleep(10000);
}
```
输出:

```text
lilei-0开始工作
lilei-1开始工作
lilei-1工作完成, 耗时：4039
countDownLatch.getCount():1
lilei-0工作完成, 耗时：9933
countDownLatch.getCount():0
准备工作就绪
lilei-2开始工作
lilei-2工作完成, 耗时：6402
countDownLatch.getCount():0
```


该场景join也可以完成

```java
package com.jihite;
public class Worker extends Thread{
    private String name;
    private long time;

    public Worker(String name, long time) {
        this.name = name;
        this.time = time;
    }

    @Override
    public void run() {
        try {
            System.out.println(name + "开始工作");
            Thread.sleep(time);
            System.out.println(name + "工作完成, 耗时："+ time);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
```
join实现

```java
@Test
public void JoinTest() throws InterruptedException {
    Worker worker0 = new Worker("lilei-0", (long)(Math.random() * 10000));
    Worker worker1 = new Worker("lilei-1", (long)(Math.random() * 10000));
    Worker worker2 = new Worker("lilei-2", (long)(Math.random() * 10000));
    worker0.start();
    worker1.start();

    worker0.join();
    worker1.join();
    System.out.println("准备工作就绪");

    worker2.start();
    Thread.sleep(10000);
}
```
输出:

```text
lilei-0开始工作
lilei-1开始工作
lilei-1工作完成, 耗时：4483
lilei-0工作完成, 耗时：6301
准备工作就绪
lilei-2开始工作
lilei-2工作完成, 耗时：6126
```

既然这样，那CountDownLatch和join的区别在哪？通过下面的场景三就可以看出

## 实例3（和join的不同处）
>场景：流水线上有3个worker: worker1、worker2、worker3,只有当worker1和worker2两者的阶段一都执行完后才可以执行worker3

```java
package com.jihite;

import java.util.concurrent.CountDownLatch;

public class WorkerCount2 extends Thread {
    private String name;
    private long time;
    private CountDownLatch countDownLatch;

    public WorkerCount2(String name, long time, CountDownLatch countDownLatch) {
        this.name = name;
        this.time = time;
        this.countDownLatch = countDownLatch;
    }

    @Override
    public void run() {
        try {
            System.out.println(name + "开始阶段1工作");
            Thread.sleep(time);
            System.out.println(name + "阶段1完成, 耗时："+ time);
            countDownLatch.countDown();

            System.out.println(name + "开始阶段2工作");
            Thread.sleep(time);
            System.out.println(name + "阶段2完成, 耗时："+ time);

        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
```
此时用join无法实现，只能用CountDownLatch

```java
@Test
public void CountDownLatchTest2() throws InterruptedException {
    int COUNT = 2;
    final CountDownLatch countDownLatch = new CountDownLatch(COUNT);
    WorkerCount2 worker0 = new WorkerCount2("lilei-0", (long)(Math.random() * 10000), countDownLatch);
    WorkerCount2 worker1 = new WorkerCount2("lilei-1", (long)(Math.random() * 10000), countDownLatch);
    worker0.start();
    worker1.start();
    countDownLatch.await();
    System.out.println("准备工作就绪");

    WorkerCount2 worker2 = new WorkerCount2("lilei-2", (long)(Math.random() * 10000), countDownLatch);
    worker2.start();
    Thread.sleep(10000);
}
```
输出:

```text
lilei-0开始阶段1工作
lilei-1开始阶段1工作
lilei-0阶段1完成, 耗时：3938
lilei-0开始阶段2工作
lilei-1阶段1完成, 耗时：6259
lilei-1开始阶段2工作
准备工作就绪
lilei-2开始阶段1工作
lilei-0阶段2完成, 耗时：3938
lilei-1阶段2完成, 耗时：6259
lilei-2阶段1完成, 耗时：7775
lilei-2开始阶段2工作
```