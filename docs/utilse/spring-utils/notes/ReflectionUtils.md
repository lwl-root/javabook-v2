# Spring 反射工具类：ReflectionUtils

***ReflectionUtils*** 类位于 ***org.springframework.util*** 包。它封装了常用的反射相关的操作。

&gt; `注意`，实验反射效果时，不要使用内部类，或同文件多类的形式，必须使用标准形式。即类前必须有 `public` 修饰。
&gt;
&gt; 以下方法均为 `static` 方法，因此省略显示 `static` 关键字

## Field 相关操作

### 查找/获取 Field

在类定义中查找属性，返回代表这个属性的 ***`Field`*** 对象。

```java
/* 在类中查找指定属性 */
Field findField(Class<?> clazz, String name) 

/* 功能同上。多提供了属性的类型 */
Field findField(Class<?> clazz, String name, Class<?> type) 
```

### 读写属性值

通过所上述方法（或其它方法）获得代表属性的 ***`File`*** 对象后，可以去读写某个对象的这个属性。（当然，前提是该对象有这么个属性）。

```java
/* 获取 target 对象的 field 属性值 */
Object getField(Field field, Object target) 

/* 设置 target 对象的 field 属性值，值为 value */
void setField(Field field, Object target, Object value) 

/* 同类对象属性对等赋值。*/
void shallowCopyFieldState(Object src, Object dest)

/* 取消 Java 的权限控制检查。以便后续读写该私有属性 */
void makeAccessible(Field field) 
```

### 遍历 Field

```java
/* 对类的每个属性执行 callback */
void doWithFields(Class<?> clazz, ReflectionUtils.FieldCallback fc) 

/* 同上，多了个属性过滤功能。 */
void doWithFields(Class<?> clazz, ReflectionUtils.FieldCallback fc, ReflectionUtils.FieldFilter ff) 

/* 同 doWithFields，但不包括继承而来的属性。*/
void doWithLocalFields(Class<?> clazz, ReflectionUtils.FieldCallback fc) 
```

### 其他

```java
/* 是否为一个 "public static final" 属性。*/
boolean isPublicStaticFinal(Field field) 
```

## Method 相关方法

### 查找/获得 Method

```java
/* 在类中查找指定方法。*/
Method findMethod(Class<?> clazz, String name) 

// 同上，额外提供方法参数类型作查找条件。
Method findMethod(Class<?> clazz, String name, Class<?>... paramTypes) 

// 获得类中所有方法，包括继承而来的。
Method[] getAllDeclaredMethods(Class<?> leafClass) 

// 在类中查找指定构造方法
<T> Constructor<T> accessibleConstructor(Class<T> clazz, Class<?>... parameterTypes) 
```

### 判断 Method

```java
/* 是否是 equals() 方法 */
boolean isEqualsMethod(Method method) 

/* 是否是 hashCode() 方法 */
boolean isHashCodeMethod(Method method) 

/* 是否是 toString() 方法 */
boolean isToStringMethod(Method method) 

/* 是否是从 Object 类继承而来的方法 */
boolean isObjectMethod(Method method) 

/* 检查一个方法是否声明抛出指定异常。*/
boolean declaresException(Method method, Class<?> exceptionType) 
```

### 执行 Field

```java
/* 执行方法 */
Object invokeMethod(Method method, Object target)  

/* 同上 */
Object invokeMethod(Method method, Object target, Object... args) 

/* 取消 Java 权限检查。以便后续执行该私有方法 */
void makeAccessible(Method method) 

/* 取消 Java 权限检查。以便后续执行私有构造方法 */
void makeAccessible(Constructor<?> ctor) 
```

### 遍历执行 Method

```java
/* 遍历执行类中的每个方法。包括从父类继承而来的方法。 */
void doWithMethods(Class<?> clazz, ReflectionUtils.MethodCallback mc) 

/* 同上。增加了匹配/过滤功能。*/
void doWithMethods(Class<?> clazz, ReflectionUtils.MethodCallback mc, ReflectionUtils.MethodFilter mf) 

/* 同上。不包括从父类继承而来的方法。*/
void doWithLocalMethods(Class<?> clazz, ReflectionUtils.MethodCallback mc) 
```

## Constructor 相关方法

### 查找/获得 Constructor

在指定的类信息中查找该类是否有，对应参数的构造函数：

```java
Constructor<T> accessibleConstructor(Class<T> clazz, Class<?>... parameterTypes);
```

### 设置 Constructor 访问权限

对于不具备操作权限的构造器，在执行它之前，需要将其设置为可操作。

```java
void makeAccessible(Constructor<?> ctor);
```