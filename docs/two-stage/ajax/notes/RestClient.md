---
title: vscode 插件：REST Client
---

# vscode 插件：REST Client
关于 HTTP 测试工具，postman 一直是我们开发中不可缺少的工具，这里介绍的 REST Client 堪比是 Postman 的替代品。REST Client 是一个 VS Code 扩展插件，可以通过写脚本的形式发送 HTTP 请求并直接在 VS Code 上查看响应结果。这样不仅能看到 http 的测试结果，测试的脚本文件还能得以保留。

## 1. 写在前面的话
我个人比较倾向于初学者使用 REST Client 来代替 Postman ，原因在于：

- Postman 的功能太丰富，对于初学者而言，一大堆的按钮和视窗，完全不知道该点什么，该看哪里。

- REST Client 会让你接触到 HTTP 协议的本质（ HTTP 请求的行头体 ），这一点，对于初学者而言十分重要。

## 2. 初步使用
首先在 vscode 中创建一个 .http 后缀的文件，比如 xxx.http ，内容如下：

```http request
GET http://www.baidu.com
```

第一次打开文件时，vscode 的左下角会给出安装插件提示：

![img](/images/restclient-01.png)

会提示你可以安装 REST client 或其它插件：

![img](/images/restclient-02.png)

在这里，我们选择安装 REST Client ，也就是第一个插件。

在安装好 REST Client 之后，你的 .http 文件的内容的上方，会出现一行 Send Request ，这行文字可以点击，点击后即发出请求。

## 3. 示例
```http request
### GET request with a header
GET https://httpbin.org/ip
Accept: application/json

### GET request with parameter
GET https://httpbin.org/get?show_env=1
Accept: application/json

### Send POST request with json body
POST https://httpbin.org/post
Content-Type: application/json

{
"id": 999,
"value": "content"
}

### Send POST request with body as parameters
POST https://httpbin.org/post
Content-Type: application/x-www-form-urlencoded

id=999&value=content
```
其中：

- `###` 是注释，并且是上下两个请求的分割线。必须。

- 代码片段中的第一行内容，就是 HTTP 请求实质上的请求行。

- 代码片段中的第二行到空行之间的内容，就是 HTTP 请求实质上的请求头，其内容一行就是一个键值对，以 : 作为分隔符。

- 代码片段中空行之下的内容，就是 HTTP 请求实质上的请求体。常见内容是一个 Query-String 或者是一个 Json-String 格式的请求参数。