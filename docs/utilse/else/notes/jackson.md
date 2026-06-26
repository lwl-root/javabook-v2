# Jackson

Jackson 是 SpringMVC 默认使用的 json 库。

## 基本使用

jackson 提供了 **writeValueAsString** 方法和 **readValue** 方法这两个直接用于生成和解析的方法，前者实现序列化，后者实现了反序列化。

```java
public class User {
    private String name;
    private int age;
    private String emailAddress;

    // 省略 getter/setter
}
```

### Object to JSON-String

```java
ObjectMapper mapper = new ObjectMapper();
User user = new User("怪盗kidou", 24);
String jsonString = mapper.writeValueAsString(user);
```

### JSON-String to Object

```java
ObjectMapper mapper = new ObjectMapper();
String jsonString = "{\"name\":\"怪盗kidou\",\"age\":24}";
User user = mapper.readValue(str, User.class);
```

jackson 被认为功能丰富而强大的原因是，它除了提供『**对象 &lt;-&gt; 字符串**』之间的相互转换，还提供了『**对象 &lt;-&gt; 各种流**』之间的转换，不过，我们没用上。

## @JsonProperty 注解

默认/一般情况下，JSON 字段中的名字和类的属性名是一致的。

但是也有不一致的情况，因为本身 **驼峰命名法**（如 Java）和 **下划线命名法**（如 C）本身就是两大命名规则『流派』。

对类的属性使用 **@JsonProperty** 注解，可以重新指定与该属性对应的 JSON 字符串中的名字。

```java
@JsonProperty("email_address")
private String emailAddress;
```

你甚至可以重新命名为另一个看起来毫不相关的名字：

```java
@JsonProperty("xxx")
public String emailAddress;
```

## 数组的序列化和反序列化

数组的序列化和反序列化比较简单，与普通对象类似，唯一需要注意的就是填写正确的数组类型：

```java
jsonStr = mapper.writeValueAsString(arr);

arr = mapper.readValue(jsonStr, int[].class);
arr = mapper.readValue(jsonStr, String[].class);
arr = mapper.readValue(jsonStr, User[].class);
```

## 集合的序列化和反序列化

相比较于数组，集合的序列化和反序列化就复杂一些，因为泛型的类型擦除，java分辨不出`ListA<String>`和`List<User>`,对于java而言他们的类型都是List.class

为了解决的上面的问题，jackson 为我们提供了 **TypeReference** 来实现对泛型的支持，所以当我们希望使用将以上的数据解析为 `List<String>` 时需要将 `List<String>`『套进』**new TypeReference&lt;`T`&gt;() { }** 中的 **T** 部分。

这里之所以这么麻烦，其实是为了绕过泛型的类型擦除，来精确地告诉 Jackson 库，我们需要它将 JSON String 转换成何种类型。这是个编程技巧。

```java
List<User> list = mapper.readValue(jsonStr, new TypeReference<List<User>>() { });
```

所有涉及到有泛型参数的类型转换，都需要用这种方式。

## 处理对象的 NULL 属性

默认情况下，对于对象的值为 NULL 的属性，jackson 默认也是会『包含』在所生成的 JSON 字符串中。

```java
ObjectMapper mapper = new ObjectMapper();

User tom = new User("tom", 21);
String jsonStr = mapper.writeValueAsString(tom);

System.out.println(jsonStr);
// {"name":"tom","age":21,"emailAddress":null}
```

如果你不希望在所生成的 JSON 格式的字符串中含有值为 NULL 的属性，有两种方案：『**注解**』和『**配置**』。

### 方案一：注解

```java
@JsonInclude(Include.NON_NULL)
public class User {
  ...
}
```

### 方案二：配置

```java
ObjectMapper mapper = new ObjectMapper();
mapper.setSerializationInclusion(Include.NON_NULL);

...
```

## 格式化 Date 类型属性

当所需要序列化和反序列化的对象的属性有 Date 类型时，这里就涉及到 Date 类型的字符串形式的格式问题，为此 **@JsonFormat** 注解提供了 pattern 属性用以自定义其字符串格式：

```java
@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
private Date birthDate;
```

注意，这种方式对 LocalDatetime 等 Java 8 中的日期时间新特性无效。

## Jackson 对 jsr310 的支持

上面的 **@JsonFormat** 对于 Java 8 的新的日期时间类（即，jsr310）无效！

Jackson 对 jsr310 的支持在单独的包里：**jackson-datatype-jsr310**

在引入 *jackson-datatype-jsr310* 的包之后，我们在创建 Jackson 的 Mapper 对象之后通过注册一个 **JavaTimeModule** 对象来『告知』Jackson：当遇到 LocalDate、LocalTime 和 LocalDateTime 类型时，以何种方式进行转换。

```java
ObjectMapper mapper = new ObjectMapper();

// 初始化 JavaTimeModule
JavaTimeModule javaTimeModule = new JavaTimeModule();

// 处理 LocalDateTime
DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
javaTimeModule.addSerializer(LocalDateTime.class, new LocalDateTimeSerializer(dateTimeFormatter));
javaTimeModule.addDeserializer(LocalDateTime.class, new LocalDateTimeDeserializer(dateTimeFormatter));

// 处理 LocalDate
DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
javaTimeModule.addSerializer(LocalDate.class, new LocalDateSerializer(dateFormatter));
javaTimeModule.addDeserializer(LocalDate.class, new LocalDateDeserializer(dateFormatter));

// 处理 LocalTime
DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("HH:mm:ss");
javaTimeModule.addSerializer(LocalTime.class, new LocalTimeSerializer(timeFormatter));
javaTimeModule.addDeserializer(LocalTime.class, new LocalTimeDeserializer(timeFormatter));

// 注册时间模块, 支持支持 jsr310, 即新的时间类（java.time 包下的时间类）
mapper.registerModule(javaTimeModule);

String jsonStr = mapper.writeValueAsString(...);
```

## 循环引用

在 Java 中，两个对象可能会互相持有，此时就是循环引用现象。当序列化其中一个对象时，会涉及到它的相关对象，而序列化它的相关对象时，又会再次序列化它自己，而序列化它自己时又需要去序列化它的相关对象 ... ，从而造成一个死循环。

**@JsonIgnore** 注解用于排除某个属性，这样该属性就不会被 Jackson 序列化和反序列化：

```java
@JsonIgnore
private String emailAddress;
```

另外，功能相似的还有 **@JsonIgnoreProperties** 注解，不过它是类注解，可以批量设置：

```java
@JsonIgnoreProperties({"age", "emailAddress"})
public class User {
    ...
}
```

在从 JSON 字符串反序列化为 Java 类的时候，**@JsonIgnoreProperties(ignoreUnknown=true)** 会忽略所有没有 Getter 和 Setter 的属性。该注解在 Java 类和 JSON 不完全匹配的时候很有用。

不过，我们在设计系统时，所追求的对象的关系的目标应该是『**有向无环**』。所以，尽量从这个根本角度避免对象的相互引用。

## 其它

jackson 支持 JSON 字符串与 Map 对象之间的互转：

```java
ObjectMapper mapper = new ObjectMapper();

Map<String, Object> map = new HashMap<>();
map.put("name", "tom");
map.put("age", 20);
map.put("emailAddress", "123@qq.com");
map.put("birthDate", new Date());

String jsonStr = mapper.writeValueAsString(map);

System.out.println(jsonStr);

/****************************************/

Map<String, Object> oth = mapper.readValue(jsonStr, Map.class);

for (Map.Entry<String, Object> entry : oth.entrySet())
    System.out.println(entry.getKey() + ", " + entry.getValue());
```

## 基于 Jackson 的 JsonUtils 工具类

见其它笔记。



