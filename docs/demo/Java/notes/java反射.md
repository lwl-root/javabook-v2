# Java反射基础

在`Java`中反射机制非常重要，`Java`反射机制的实现除了依靠`Java.lang.Class`类，还需要依靠：`Constructor`类、`Field`类、`Method`类

&lt;b&gt;定义：&lt;/b&gt;在类加载的过程中，动态的调用类的属性和方法并且进行修改的能力叫做反射。

​	&lt;b&gt;优点：&lt;/b&gt;灵活性高，反射是动态的编译，在程序运行时才会进行创建和获取对象实例。

​	&lt;b&gt;缺点：&lt;/b&gt;执行效率低，时间成本会高于执行相同的操作。

## 使用步骤

在使用Java反射机制时，主要步骤包括： 
1. 获取 目标类型的Class对象 

   ​	获取目标类型的Class对象有&lt;span style=color:red&gt;三种方法&lt;/span&gt;：

    * a、通过 `类名.class` 获取
    * b、用 `类的实例化对象.getClass();`方法获取
    * c、用Class类中的静态方法`forName()`获取，该方法的参数为类的全限定名（常用）

2. 通过 Class 对象分别获取Constructor类对象、Method类对象 & Field 类对象

   ​	获取Constructor类对象：

   ```java
   public Constructor&lt;T&gt; getConstructor(类&lt;?&gt;... parameterTypes); // 获取该类中参数类型与方法参数匹配的公共的构造方法
   public Constructor&lt;?&gt;[] getConstructors(); // 获取该类中所有的公共的构造方法
   
   public Constructor&lt;T&gt; getDeclaredConstructor(类&lt;?&gt;... parameterTypes); // 获取该类中参数类型与方法参数匹配的构造方法
   public Constructor&lt;?&gt;[] getDeclaredConstructors(); // 获取该类中所有的构造方法
   ```

   ​	获取Method类对象：

   ```java
   public Method getMethod(String name,类&lt;?&gt;... parameterTypes); // 返回方法名和name相同的且参数和方法参数一致的公共方法对象
   public Method[] getMethods(); // 返回所有的公共的方法
   
   public Method getDeclaredMethod(String name,类&lt;?&gt;... parameterTypes); // 返回返回方法名和name相同的且参数和方法参数一致的方法对象
   public Method[] getDeclaredMethods(); // 返回所有的方法对象
   ```

   ​	获取Field类对象：

   ```java
   public Field getField(String name); // 返回该类中属性名和name一致的公共属性对象
   public Field[] getFields(); // 返回所有的公共属性对象
   
   public Field getDeclaredField(String name); // 返回该类中属性名和name一致的属性对象
   public Field[] getDeclaredFields(); // 返回所有的属性对象
   ```

::: warning 注意

method对象只包括普通方法对象，不包括构造方法对象；如果方法或者属性使用private修饰要开启暴力反射 方法(属性).setAccessible(true);

:::
3. 通过 Constructor类对象、Method类对象 & Field类对象分别获取类的构造函数、方法&属性的具体信息，并进行后续操作



### 1、获取目标类型的Class对象

~~~java
// 目标类型
public class Dog{
	private String name;
    private int age;
    public String sex;
    
    // 私有无参构造
    private Dog(){
        supper();
    }
    
    // 公共有参构造
    public Dog(String name,int age,String sex){
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    
    public void eat(){
        System.out.println("吃肉");
    }
}
~~~

~~~java
/*
 * 获取目标类型的Class对象有三种方法：
 * 1、通过 类名.class 获取
 * 2、用 类的实例化对象.getClass()方法获取
 * 3、用Class类中的静态方法forName()获取，该方法的参数为类的全限定名（常用）
 */
public class Reflection{
    public static void main(String[] args) throws Exception{
        // 1、通过 类名.class
        Class clazz1 = Dog.class;
        // 2、实例化对象.getclass();
        Dog dog = new Dog();
        Class clazz2 = dog.getClass();
        // 3、Class.forName("类的全限定名");
        Class clazz3 = Class.forName("com.lwl.Dog");
    }
}
~~~



### 2、通过 Class 对象分别获取Constructor类对象、Method类对象 & Field 类对象 

```java
public class Reflection {
    public static void main(String[] args) throws Exception{
        Class clazz = Class.forName("com.lwl.dog");
        // 获取Constructor（构造方法）对象
        Constructor constructor = clazz.getConstructor();
        // 获取Method（普通方法）对象
        // 获取吃东西的方法对象
        Method method = clazz.getMethod("eat",null);
        // 获取Field对象
        // 获取性别属性对象
        field field = clazz.getField("sex");
    }
}
```



### 3、通过 Constructor类对象、Method类对象 & Field类对象分别创建对象、调用方法、成员变量赋值

```java
public class Reflection{
	public static void main(String[] args) throws Exception{
        Class clazz = Class.forName("com.lwl.dog");
        // 获取Constructor（构造方法）对象
        Constructor constructor = clazz.getConstructor();
        // 获取Method（普通方法）对象
        // 获取吃东西的方法对象
        Method method = clazz.getMethod("eat",null);
        // 获取Field对象
        // 获取性别属性对象
        field field = clazz.getField("sex");
        
        //=========================================================
        // 用构造函数对象创建对象
        Object obj = constructor.newInstance();
        // 如果是有参构造
        Object obj = constructor.newInstance("tom",12,"男");
        //=========================================================
        // 调用方法
        method.invoke(obj,null);
        //=========================================================
        // 给成员变量赋值
        field.set(obj,"女");
    }
}
```



## 反射使用

​	可以在不修改代码的情况下，利用外部文件进行对象和方法的更改。

​	反射的作用有很多种。

### 业务类

首先准备两个业务类，这两个业务类很简单，就是各自都有一个业务方法，分别打印不同的字符串

```java
package reflection;
 
public class Service1 {
 
    public void doService1(){
        System.out.println("业务方法1");
    }
}
```

```java
package reflection;
 
public class Service2 {
 
    public void doService2(){
        System.out.println("业务方法2");
    }
}
```

### 非反射方法

当需要从第一个业务方法切换到第二个业务方法的时候，使用非反射方式，必须修改代码，并且重新编译运行，才可以达到效果

```java
package reflection;
 
public class Test {
 
    public static void main(String[] args) {
        new Service1().doService1();
    }
}
```

```java
package reflection;
 
public class Test {
 
    public static void main(String[] args) {
//      new Service1().doService1();
        // 非反射方法需要修改代码
        new Service2().doService2();
    }
}
```

### 反射方法

使用反射方式，首先准备一个配置文件spring.txt, 放在src目录下。 里面存放的是类的名称，和要调用的方法名。
在测试类Test中，首先取出类名称和方法名，然后通过反射去调用这个方法。

当需要从调用第一个业务方法，切换到调用第二个业务方法的时候，不需要修改一行代码，也不需要重新编译，只需要修改配置文件spring.txt，再运行即可。

这也是Spring框架的最基本的原理，只是它做的更丰富，安全，健壮。

```java
class=reflection.Service1
method=doService1
```

```java
package reflection;
 
import java.io.File;
import java.io.FileInputStream;
import java.lang.reflect.Constructor;
import java.lang.reflect.Method;
import java.util.Properties;
 
public class Test {
 
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public static void main(String[] args) throws Exception {
 
        //从spring.txt中获取类名称和方法名称
        File springConfigFile = new File("e:\\project\\j2se\\src\\spring.txt");
        Properties springConfig= new Properties();
        springConfig.load(new FileInputStream(springConfigFile));
        String className = (String) springConfig.get("class");
        String methodName = (String) springConfig.get("method");
         
        //根据类名称获取类对象
        Class clazz = Class.forName(className);
        //根据方法名称，获取方法对象
        Method m = clazz.getMethod(methodName);
        //获取构造器
        Constructor c = clazz.getConstructor();
        //根据构造器，实例化出对象
        Object service = c.newInstance();
        //调用对象的指定方法
        m.invoke(service);
         
    }
}

```

