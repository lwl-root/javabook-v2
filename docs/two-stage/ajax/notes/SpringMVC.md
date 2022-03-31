# AJAX 和 Spring MVC
::: tip 提示

1. 开始本章节前，务必复习下前两章内容！
2. 本章节仅以 GET 和 POST 请求方式演示，不涉及 RESTful 风格的其它请求方式。
:::
## 1. AJAX 请求和 Spring MVC 的参数绑定
### AJAX 发送简单类型参数
这种情况下，和发送 <font color="blue">**application/x-www-form-urlencoded**</font> 情况是一样的。

Spring MVC 该怎么执行参数绑定，就怎么执行参数绑定。

```javascript
$.ajax({
...
data: {
username: 'tom',
password: '123'
},
...
});
```

### `ajax()` 发送简单类型数组的一个坑
类似于表单元素 checkbox 的那种情况，有时候，你需要通过 $.ajax() 向后台传递同一个 key 的多个 value 。

```js
var nums = [1, 2, 3];
var str = $.param({"xxx": nums});
console.info(str);  // 注意此处的输出！

$.ajax({
...
data: str,
...
});
```

这种情况，本质上和普通的请求中的 checkbox 有『<font color="blue">**很大但又很不起眼**</font>』的不同，jQuery 会在请求参数字符串的 key 的名字中加上 `%5b%5d`，其实就是 `[]` 。

因此，在 SpringMVC 的 <font color="blue">**@RequestParam**</font> 中指明的请求参数并不是 `xxx` 而应该是 `xxx[]` ！

例如：

```java
public void demo(@RequestParam("xxx[]") Integer[] prodNums) {
...
}
```

### ajax 发送 application/json 参数类型的请求
如果，我们将 <font color="blue">**_contentType_**</font> 赋值为 `application/json` 表示向后台发起请求时，是将一个 <font color="blue">**JSON 格式的字符串**</font> 携带在了 Request 的 body 部分，需要 Spring MVC 通过 <font color="blue">**_@RequestBody_**</font> 进行参数绑定，获取并解析出这个 JSON 格式字符串。此时使用 <font color="blue">**_@RequestParam_**</font> 注解无效。

::: tip 提示

Spring MVC 在这里有个小【坑】： Spring MVC 默认使用 Jackson 来做对象和 JSON 格式字符串的互转。Spring MVC 中已内置了相关的配置，无需你再在配置文件中进行配置。 但是 spring-webmvc 的依赖关系中并没有包含 jackson 包！！！ 所以，尽管不需要进行配置，但是你的项目的 pom.xml 中，仍然需要你手动加包。
:::
例如，向后台传递一个对象的数组：

```js
var emp1 = { empno: 20, ename: 'tom' };
var emp2 = { empno: 19, ename: 'ben' };
var arr = [emp1, emp2];

var jsonStr = JSON.stringify(arr); // [{"empno":20,"ename":"tom"},{"empno":21,"ename":"jerry"}]

$.ajax({
...
contentType: "application/json",
data: jsonStr,  // 一定要传入自己转换好的 JSON 格式字符串。直接传入对象的话，jQuery 【帮】你转成了 queryString
...                              
});
```
```java
public void add(@RequestBody Employee[] emps) {
}
```

## 2. Spring MVC 响应 AJAX 请求
Spring MVC 响应 AJAX 请求，回给客户端浏览器一个 JSON 格式字符串，这很容易实现。

只需要使用 <font color="blue">**_@ResponseBody_**</font> 注解，标注在请求处理方法上即可。

```java
@RequestMapping("/hello.do")
@ResponseBody
public Student hello() {
Student tom = new Student(1, "tom", 20);
return tom;
}
```

当你使用了 <font color="blue">**_@ResponseBody_**</font> 注解，Spring MVC 会【帮】你做两件事情：

1. 将这个方法的返回值（默认使用jackson）转换为 json 格式字符串。

2. 在底层执行 `resp.setContentType("application/json")`; 将 HTTP 响应的 content-type 设置为 application/json 。

此时，你的方法的返回值不再是 ModelAndView，或者是 String。它直接就是代表你所要返回的数据的对象，或对象的集合<small>（通常是 List）</small>。

## 3. @RestController 注解
如果你的一个 Controller 类下的所有请求处理方法都返回的是 JSON 格式字符串，而不是逻辑视图名。那么，你的所有的请求处理方法的『头』上一定都加了 `@ResponseBody` 注解。

对于这种情况，Spring MVC 提供了一个 `@RestController` 注解用于替换 `@Controller` 注解，标注在 Controller 类上。用以表明这个类是一个纯粹的基于 RESTful 风格的 Web 服务。

这样，你就可以不用在这个 Controller 类下的每个方法上添加 `@ResponseBody` 了。

## 4. 背后功臣 HttpMessageConverter
你之所以能在 Controller 中收、发 JSON 格式字符串，正是因为有名为 <font color="blue">**HttpMessageConverter**</font> 的部件在为 <font color="blue">**@RequestBody**</font> 和 <font color="blue">**@ResponseBody**</font>『服务』的！注意，它与 @RequestParam 无关

+ <font color="blue">@RequestBody</font> 需要利用 HttpMessageConverter 来从 HTTP 的请求 body 中取数据；

+ <font color="blue">@ResponseBody</font> 需要利用 HttpMessageConverter 来往 HTTP 的响应的 body 中放数据。

在这里，你可能会用到 2 种不同的 HttpMessageConverter<small>（取决于你的参数和返回值类型）</small>：

+ <font color="blue">StringHttpMessageConverter</font>:

  + 在 Controller 接受、处理请求时，如果你想将请求体中的 JSON String 形式的请求参数字符串作为一个整体取出来，赋给 Controller 的一个 String 类型参数（该参数必然标注了 @RequestBody），此时，StringHttpMessageConverter 实现了这个工作。

  + 在 Controller 准备返回数据，响应请求发起方时，如果，你自己已经在代码逻辑中准备好了 JSON 格式字符串，接下来只需要将它（JSON 格式字符串）放入 HTTP 响应体中，此时，StringHttpMessageConverter 实现了这个工作。

+ <font color="blue">MappingJackson2HttpMessageConverter</font>:

  + 在 Controller 接受、处理请求时，如果你想将请求体中的 JSON String 形式的请求参数字符串取出来，并希望『有人』能帮你把它转换成一个 JavaBean，再赋给 Controller 的一个引用类型参数（该参数必然标注了 @RequestBody），此时，MappingJackson2HttpMessageConverter 实现了这个工作。

  + 在 Controller 准备返回数据，响应请求发起方时，如果，你自己在代码逻辑中准备好了要返回的数据：JavaBean（或 JavaBean 的集合），并希望『有人』帮你把它转换成 JSON 格式字符串，然后再放入 HTTP 响应体中，此时，MappingJackson2HttpMessageConverter 实现了这个工作。

::: tip 再次强调

无论是上述哪个 HttpMessageConverter 再工作，前提都是你使用了 <font color="blue">**@RequestBody**</font> 和 <font color="blue">**@ResponseBody**</font> 注解。
:::

## 5. StringHttpMessageConverter 乱码问题 <Badge type="tip" text="了解" vertical="top" />
通常，我们不会取直接收、发 JSON 格式字符串，所以，我们用到 <font color="blue">**MappingJackson2HttpMessageConverter**</font> 的机会会比 <font color="blue">**StringHttpMessageConverter**</font> 要多。<small>毕竟，能偷懒为什么不偷懒。</small>

不过，万一因为某种原因，你要直接收、发 JSON 格式字符串，从而利用到 <font color="blue">**StringHttpMessageConverter**</font> 时，要注意，它有个小坑：它默认使用的是 <font color="blue">**iso-8859-1**</font> 编码<small>（也就是 <font color="blue">**latin-1**</font>）</small>，因此不支持中日韩文。

::: tip 提示

好在 MappingJackson2HttpMessageConverter 没有这个问题，它的默认的编码是 UTF-8 。
:::

```java
// 在页面上你看到的是 `????`，而非 `酒店查询`。
@RequestMapping("/test")
@ResponseBody
public String demo() {
return "{\"status\":0,\"errmsg\":null,\"data\":{\"query\":\"酒店查询\",\"num\":65544,\"url\":\"www.test.com\"}}";
}
```

这种情况下，需要你取显示配置 StringHttpMessageConverter，并在配置中指定它要使用的编码。

::: details 代码配置版：SpringWebConfig.java
```javascript
@Override
public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
//    Charset charset = StandardCharsets.UTF_8;
      Charset charset = Charset.forName("UTF-8");
      StringHttpMessageConverter converter = new StringHttpMessageConverter(charset);

      converters.add(converter);
  }
```
:::

::: details .xml 配置文版：spring-web.xml
```xml
<bean id="utf8Charset" class="java.nio.charset.Charset" factory-method="forName">
    <constructor-arg value="UTF-8"/>
</bean>

<mvc:annotation-driven>
    <mvc:message-converters>
        <bean class="org.springframework.http.converter.StringHttpMessageConverter">
            <constructor-arg ref="utf8Charset"/>
        </bean>
    </mvc:message-converters>
</mvc:annotation-driven>
```

补充，你可以将 <font color="blue">**utf8Charset**</font> 的 bean 配置『嵌』在 <font color="blue">**StringHttpMessageConverter**</font> 的 bean 配置里面。因为，除了它，也没别的地方用到了 <font color="blue">**utf8Charset**</font> Bean。

```xml
<constructor-arg>
  <bean id="utf8Charset" class="java.nio.charset.Charset" factory-method="forName">
    <constructor-arg value="UTF-8"/>
  </bean>
</constructor-arg>
```
:::