# Axios 发起AJAX请求模板
## 1、html页面引入Axios（使用CDN）
```html
<script src="https://cdn.jsdelivr.net/npm/axios@0.21.1/dist/axios.min.js"></script>
```

## 2、发起AJAX GET 请求 &lt;Badge type="tip" text="query-string" vertical="top" /&gt;
::: details 原始的通用方式
```js
axios({
    baseURL: '/servlet-example',// 会拼接在 url 的前面
    url: '/hello.do',
    method: 'get',              // 默认值
    params: {                   // 请求参数
        username: 'tom',
        password: '123'
    }
}).then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.log(error);
});
```
:::

::: details 自己拼 query-string
```js
axios
    .get('/servlet-example/hello.do?username=tom&password=123')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
```
:::

::: details 利用 params 参数自动转 query-string
```js
const obj = {
    username: 'tom',
    password: '123'
};

axios
    .get('/servlet-example/hello.do', { params: obj })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
```
:::

## 3、发起AJAX POST 请求 &lt;Badge type="tip" text="query-string" vertical="top" /&gt;
::: danger 警告
axios post 请求的 content-type 的默认值就是 application/json ，即，默认传递的参数格式是 json-string ！
:::

::: details 利用 qs 库转 query-string
```html
<script src="https://cdn.bootcss.com/qs/6.7.0/qs.min.js"></script>
```
```js
const obj = {
    username: 'tom',
    password: '123456'
};

// 引入 Qs 来帮我们将对象转为 query-string 。
const queryString = Qs.stringify(obj);

axios({
    baseURL: '/servlet-example',    // 会拼接在 url 的前面
    url: '/hello.do',
    method: 'post',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: queryString   // 注意是 data:... ，不是 get 请求的 params: ...
})
    .then(function (response) {
        console.log(response);
    }).catch(function (error) {
    console.log(error);
});
```
:::

::: details 利用 qs 库转 query-string
```js
const obj = new URLSearchParams({
  username: 'tom',
  password: '123456'
});
const queryString = obj.toString(); 

axios({
  baseURL: '/servlet-example', 
  url: '/hello.do',
  method: 'post',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  data: queryString   // 注意是 data:... ，不是 get 请求的 params: ...
})
.then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.log(error);
});
```
:::

## 4、发起AJAX POST 请求 &lt;Badge type="tip" text="json-string" vertical="top" /&gt;
::: details 原始的通用方式
```js
const obj = {
  username: 'tom',
  password: '123456'
};

axios({
  baseURL: '/servlet-example',    // 会拼接在 url 的前面
  url: '/hello.do',
  method: 'post',
  headers: {'content-type': 'application/json'}, // 默认值，可省略
  data: obj
}).then(function (response) {
  console.log(response);
}).catch(function (error) {
  console.log(error);
});
```
:::

::: details 简写
```js
axios
  .post('/servlet-example/hello.do', obj)
  .then(function (response) {
      console.log(response);
  }).catch(function (error) {
      console.log(error);
  });
```
:::

::: details json-string 的 Java Servlet 后台代码
```js
System.out.println(request.getMethod());
System.out.println(request.getParameter("username"));   // null
System.out.println(request.getParameter("password"));   // null

BufferedReader br = request.getReader();

String str, wholeStr = "";
while ((str = br.readLine()) != null) {
    wholeStr += str;
}
System.out.println(wholeStr);   // json-string 格式的请求参数。

PrintWriter out = response.getWriter();
out.write("hello world");
```
:::