# AJAX 和 Servlet
由于 Servlet 中的 **request.getParameter("...")** 只对 **content-type** 值为 **application/x-www-form-urlencoded** 的情况有效有效。

当你的请求参数风格是 json-string 风格，即，HTTP 请求头的content-type 值为 application/json 时，你的 Servlet 中的 **request.getParameter("...")** 方法的值为 **null**，是获取不到页面提交的参数的。

这种情况下，你需要自己“想办法”从 HTTP 请求的 Body 中，将请求参数取出来：

```java
BufferedReader br = request.getReader();

String str, wholeStr = "";
while ((str = br.readLine()) != null) {
wholeStr += str;
}
System.out.println(wholeStr);
```
