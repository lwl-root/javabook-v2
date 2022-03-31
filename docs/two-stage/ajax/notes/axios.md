# vue axios
Vue 2.0 之后，就不再对 vue-resource 更新。Vue 官方推荐使用其竞品：axios 。

::: tip 提示

axios 充分利用了 ES6 的 Promise 语法。

:::

## 1. 在页面上引入
::: tip 说明

由于存在跨域问题，对于 axios 在 vue.js 中的使用，我们直接将前端页面写在 Spring Boot 项目中，将 vue.js 和后台服务整合在一起，以免单独处理跨域问题。

对于开发环境中的跨域问题，我们在 vue-cli 中使用 proxy 解决。
:::

CDN 引入，vue.js 中使用

```html
<script src="https://cdn.jsdelivr.net/npm/axios@0.21.1/dist/axios.min.js"></script>
```

通过 axios 向后台发送请求，为了方便，axios 已经为所有支持的请求方法提供了别名。

```js
• axios.request(config)

• axios.get(url [，config])

• axios.delete(url [，config])

• axios.post(url [，data [，config]])

• axios.put(url [，data [，config]])

• axios.patch(url [，data [，config]])

• axios.head(url [，config])
```

注意：当使用别名方法时，不需要在参数 `config` 中指定 `url`，`method` 和 `data` 属性。

## 2. axios() 方法
**axios()** 方法是最核心、最根本的方法，其它方法都是它的简写。

简单使用：

```js
axios({
method: 'GET',
url: '/users',
})
.then(res => {console.log(res)})
.catch(err => {console.log(err)})
```

### axios 方法发起 GET 请求
```js
axios({
url: '/user',
method: 'GET',
params: {
ID: 123
}
}).then( res => {
console.info(res)
}).catch( e => {
console.info(e)
})
```

axios 的 GET 请求的请求参数是以 query-string（形如：`name=tom&age=20`）的形式传递到后台，对于 Spring MVC 而言，Controller 中是使用 **@RequestParam** 接收请求参数。

需要注意的需要注意的是 GET 请求要搭配 **params** 使用：

在使用 GET 方法传递参数时使用的是 **params**，并且官方文档中介绍为：params are the URL parameters to be sent with the request. Must be a plain object or a URLSearchParams object。译为：**params** 作为URL链接中的参数发送请求，且其必须是一个 plain object<small>（或者是 URLSearchParams object）</small>。

plain object（纯对象）是指用 JSON 形式定义的普通对象或者 `new Object()` 创建的简单对象；而 URLSearchParams object 指的是一个可以由 URLSearchParams接口定义的一些实用方法来处理 URL 的查询字符串的对象。

URLSearchParams object 的使用范例如下：

```js
const obj = new URLSearchParams();
obj.append('ID', 123);

axios({
url: '/user',
method: 'GET',
params: obj   // 看这里，看这里，看这里
}).then(res => {
console.info(res)
}).catch(e => {
console.info(e)
});
```

### axios 方法发起 POST 请求
```js
axios({
url: '/user',
method: 'POST',
data: {
name: 'tom',
age: 20
}
}).then( res => {
console.info(res)
}).catch( e => {
console.info(e)
});
```

axios 的 post 请求的请求参数是以 json-string 的形式传递到后台的，对于 Spring MVC 而言，Controller 中是使用 **@RequestBody** 接收请求参数。同样使用这种形式的还有 PUT、PATCH 等请求方式。

需要注意的需要注意的是 POST 请求要搭配 **data** 使用。

## 3. get() 方法和 post() 方法
在通过 axios() 方法发送请求时，你需要小心翼翼地使用 params 和 data 参数。为了简化<small>（无需用户考虑 params 和 data 问题）</small>，axios 在 axios() 方法之上提供了专门的 get() 方法 和 post() 方法。

- get 请求

```js
axios.get('/user?name=tom&age=20')
.then(res => {
console.info(res)
}).catch(e => {
console.info(e)
});
```

另外，axios 方法简单到如下形式，发出的也是 get 请求。

```js
// 忽略第二个参数时，默认是发送一个 GET 请求，且无请求参数
axios('/user/12345');
```

- post 请求

```js
axios.post('/user', {
name: 'tom',
age: 20
}).then(res => {
console.info(res)
}).catch(e => {
console.info(e)
});
```

## 4. post() 方法和 @RequestParam
axios 通过 post() 方法发出的 post 请求时，请求头的 content-type 默认就是 `application/json`，因此，Controller 中自然是 @ReqeustBody 与之配合。

如果希望在 Controller 中使用 @RequestParam，那么就需要直接或间接影响到 axios 发出的 post 请求的 content-type ，让其值为 `application/x-www-form-urlencoded` 即可。

最根本的办法就是：硬传一个 query-string 格式的参数给 post 方法，进而影响 axios，让 axios 自己去改 post 请求的 content-type 。

```js
axios.post('/user', 'name=jerry&age=19')
.then(res => {
console.info(res)
}
);
```

考虑到自己硬编码 query-string 比较繁琐，这个方案有 2 个改进版：

- 使用 URLSearchParams：

```js
const params = new URLSearchParams();
params.append('name', 'jerry');
params.append('age', 19);
// console.info(params.toString());

axios.post('/user', params)
.then(res => {
console.info(res)
}
);
```

使用 qs 库：

```html
<script src="https://cdn.jsdelivr.net/npm/qs@6.10.1/lib/index.min.js"></script>
```
```js
const obj = {
name: 'tom',
age: 20
};
// console.info(Qs.stringify(obj));

axios.post('/user', Qs.stringify(obj))
.then(res => {
console.info(res)
}).catch(e => {
console.info(e)
});
```

## 5. 执行多个并发请求 <Badge type="tip" text="了解" vertical="top" />
- 示例

```js
function getUserAccount() {
return axios.get('/user/12345');
}

function getUserPermissions() {
return axios.get('/user/12345/permissions');
}

axios.all([
getUserAccount(),
getUserPermissions()
].then(axios.spread(function (acct, perms) {
// 两个请求现已完成
}));
```
