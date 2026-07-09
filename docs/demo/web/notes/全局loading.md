---
title: 浅谈vue+element全局loading加载
---
# 浅谈vue+element全局loading加载

::: tip 前言

在我们的平时的工作中，在前后端交互的时候，为了提高页面的观赏性和用户的体验，我们会在页面上添加loading来阻止用户操作来等待接口的返回，这个时候我们会考虑到全局loading还是局部loading，下面小编总结了一下，在开发中自己用到的方法，一起共享。

:::

## 01：用到的插件

**1、element-ui--&gt;ui库**

**2、lodash---&gt;高效的JavaScript库**

**3、axios---&gt;基于promise的http库**

准备工作安装：

```javascript
$ npm i element-ui -S
$ npm i lodash -S
$ npm i axios -S
```



## 02：开启loading

首先我们需要引入element-ui的Loading组件，这个组件有两种调用方式：

1、通过指v-loading

2、通过服务Loading.service();

样式见下图：

![img](/images/loading.png)

&lt;a href="https://element.eleme.cn/#/zh-CN/component/loading"&gt;api:https://element.eleme.cn/#/zh-CN/component/loading&lt;/a&gt;

```javascript
import { Loading } from "element-ui";
import _ from 'lodash';

let loading = null;    //设置全局变量loading
let needRequestCount = 0;   //设置全局的请求总数

 //开启loading状态
const startLoading = (headers={}) => {
  loading = Loading.service({
    lock: true,   //是否锁定屏幕的滚动
    text: headers.text||"加载中……",   //loading下面的文字
    background: "rgba(0, 0, 0, 0.7)",   //loading的背景色
    target:headers.target||"body"    //loading显示在容器
  });
};
```





## 03：关闭loading

在关闭loading的时候为了防止loading的闪动，这里采用了防抖的方法，防抖的计时一般采用300-600ms之前为最佳，在关闭loading的之后，我们要注意全局变量导致的V8垃圾回收机制，把没用的变量清空为null

```javascript
//关闭loading状态
const endLoading = _.debounce(() => {
  loading.close();
  loading = null;
},300);
```





## 04：对多次请求loading的开启

在这里，方法中设置了headers的参数,这个参数的用途在于，在我们请求的时候我们不用的接口和方法可能用到的样式和文字不同，这个时候我们可以通过这个参数来传递

```javascript
export const showScreenLoading=(headers)=>{
   if(needRequestCount == 0&&!loading){
    startLoading(headers);
   }
   needRequestCount++;
}
```

复制



## 05：对多次请求loading的关闭

在关闭的方法中，使用了一个Math.max()取最大值的方法，是为了保险取到的needRequestCount是0

```javascript
export const hideScreenLoading=()=>{
    if(needRequestCount<=0)  return 
    needRequestCount--;
    needRequestCount = Math.max(needRequestCount, 0);
    if(needRequestCount===0){
        endLoading()
    }
}
```



## 06：在请求中设置loading

在这里，我们使用的是axios的请求拦截器

我们可以在headers的参数里设置showLoading属性来灵活的设置loading的显示和隐藏

```javascript
 //请求拦截器
instance.interceptors.request.use(
   config => {
    config.headers.Authorization = Lockr.get("token");
    if (config.headers.showLoading !== false) {
        showScreenLoading(config.headers);
     }
    return config;
   },error => {
    if (config.headers.showLoading !== false) {
         hideScreenLoading(config.headers);
     }
      Message.error("请求超时!");
      return Promise.reject(error);
   }
);
```

## 07：在响应中设置loading

在这里，小编用了一个setTimeout定时器是为了模拟请求异步返回，查看loading的状态，在开发中我们可以去掉

```javascript
 //响应拦截器
 instance.interceptors.response.use(
     response => {
       if (response.status == 200) {
         setTimeout(() => {
           if (response.config.headers.showLoading !== false) {
              hideScreenLoading();
           }
         }, 500);
         return response.data;
       }
     },
     error => {
       if (response.config.headers.showLoading !== false) {
         hideScreenLoading();
       }
       return Promise.reject(error);
     }
   );
   return instance(config);
 }
```

## 08：完整的代码

开箱即用，就问你香不香

```javascript
import axios from "axios";
import Lockr from "lockr";
import { showScreenLoading, hideScreenLoading } from "./loading";
import { Message } from "element-ui";

class Service {
  construct() {
    this.baseURL = process.env.VUE_APP_URL;
    this.timeout = 3000; //请求时间
  }
  request(config) {
    let instance = axios.create({
      baseURL: this.baseURL,
      timeout: this.timeout
    });
    //请求拦截器
    instance.interceptors.request.use(
      config => {
        config.headers.Authorization = Lockr.get("token");
        if (config.headers.showLoading !== false) {
          showScreenLoading(config.headers);
        }
        return config;
      },
      error => {
        if (config.headers.showLoading !== false) {
          hideScreenLoading(config.headers);
        }
        Message.error("请求超时!");
        return Promise.reject(error);
      }
    );
    //响应拦截器
    instance.interceptors.response.use(
      response => {
        if (response.status == 200) {
          setTimeout(() => {
            if (response.config.headers.showLoading !== false) {
              hideScreenLoading();
            }
          }, 500);
          return response.data;
        }
      },
      error => {
        if (response.config.headers.showLoading !== false) {
          hideScreenLoading();
        }
        return Promise.reject(error);
      }
    );
    return instance(config);
  }
}

export default new Service();
```

```javascript
import { Loading } from "element-ui";
import _ from 'lodash';

let loading = null;
let needRequestCount = 0;


//开启loading状态
const startLoading = (headers={}) => {
  loading = Loading.service({
    lock: true,
    text: headers.text||"加载中……",
    background: "rgba(0, 0, 0, 0.7)",
    target:headers.target||"body"
  });
};

//关闭loading状态
const endLoading = _.debounce(() => {
  loading.close();
  loading = null;
},300);


export const showScreenLoading=(headers)=>{
   if(needRequestCount == 0&&!loading){
    startLoading(headers);
   }
   needRequestCount++;
}

export const hideScreenLoading=()=>{
    if(needRequestCount<=0)  return 
    needRequestCount--;
    needRequestCount = Math.max(needRequestCount, 0);
    if(needRequestCount===0){
        endLoading()
    }
}
export default {};
```
