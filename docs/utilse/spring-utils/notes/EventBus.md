# Spring 中的 EventBus

如果你不想或不能引入 EventBus 包，甚至项目中也没有使用 Guava 包，而你又想使用 EventBus 功能，那么你可以直接使用 Spring 中的 EventBus 。

不过 Spring 的 EventBus 没有 EventBus 包和 Guava 包那么方便，使用的时候有一些『条条框框』必须遵守。

Spring 的事件监听有三个部分组成：

|  #   | 说明     | 类/方法                |
| :--: | :------- | :--------------------- |
|  1   | 监听器   | ApplicationListener 类 |
|  2   | 事件     | ApplicationEvent 类    |
|  3   | 事件发布 | publishEvent 方法      |

## 自定义 Event

自定义的 Event 类的对象在这里起到 2 个作用：

1. 它本质上是参数对象；
2. Spring 用它（的类型）对应到了一个执行具体逻辑代码的处理类。

简而言之，Spring 未来会去调用这个真正有价值的处理类（的一个方法），然后将我们自定义的 Event 传给它的方法作为参数。

Spring 的 EventBus 要求事件对象（Event）必须继承 Spring 的 **ApplicationEvent** 类，例如：

```java
public class XxxEvent extends ApplicationEvent {

    public XxxEvent(Object source) {
        super(source);
//      System.out.println("source message->" + source.toString());
    }

}
```

上面的那个 **source** 属性就是我们必须要遵守的『条条框框』之一。

由于我们自定义的 XxxEvent 必须继承自 **ApplicationEvent** ，所以，XxxEvent 从它的老祖宗们那里继承下来了一个 `Object source` 属性。

这个 **source** 属性用作何用、用在何处，Spring EventBus 完全不管。但是通过继承，EventBus 变相强制性地要求你的 XxxEvent 中必须有这么个属性，而且我们必须实现的有参构造必须对它赋值，哪怕你初始化为 null 都行，但是也必须对 **source** 进行初始化。

除了必要的 **source** 之外，你可以添加更多的属性，例如：

```java
public class UserAddedEvent extends ApplicationEvent {
    private String xxx;
    private Integer yyy;
    private Date zzz;

    /**
     * 加上从老祖宗那里继承来的 source，这个 Event 中总共是 4 个属性。
     */
    public UserAddedEvent(Object source, String xxx, Integer yyy, Date zzz) {
        super(source);
        this.xxx = xxx;
        this.yyy = yyy;
        this.zzz = zzz;
    }
}
```

这些属性（加上默认的 `Object source`）就是未来事件发送方需要『传递』给事件接收方的数据。

**注意**：考虑到可以有多个事件的监听者，为了避免这些数据的无意中的篡改，这些属性最好是 final 的，或者只提供 getter，不提供 setter 。

## 定义 EventListener

有 2 种方式创建事件监听器：

- 使用 **@EventListener** 注解

  ```java
  @Component
  public class UserAddedEventListener2 {
  
      @EventListener(value = UserAddedEvent.class)
      public void onApplicationEvent(UserAddedEvent userAddedEvent) {
          System.out.println("收到了 UserAdded 事件");
          System.out.println(userAddedEvent.getSource());
      }
  }
  ```

- 实现 **ApplicationListener** 接口：

  ```java
  @Component
  public class UserAddedEventListener1 implements ApplicationListener&lt;UserAddedEvent&gt; {
  
      @Override
      public void onApplicationEvent(UserAddedEvent userAddedEvent) {
          System.out.println("收到了 UserAdded 事件1");
          System.out.println(userAddedEvent.getSource());
      }
  }
  ```

可以有多个监听器监听同一个事件。

**注意**：EventHandler 对象需要托管给 Spring IoC 容器。

## 触发事件

通过 Spring 的 Context 对象就能发出事件，触发事件处理程序的执行。

其实真正『对口』的是 **ApplicationEventPublisher** 接口，而各种 ApplicationContext 都直接或间接实现了这个接口。

```java
AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(MyApplicationContext.class);
context.publishEvent(new XxxEvent("tom"));
```

发布事件之后，监听器中的方法会被触发执行。这里本质上还是『**同步调用**』，发布方、监听器1、监听器2 ... 监听器N 仍然在同一个线程中执行。