<template><h1 id="vue3-0-路由去掉-号" tabindex="-1"><a class="header-anchor" href="#vue3-0-路由去掉-号" aria-hidden="true">#</a> VUE3.0 路由去掉#号</h1>
<h3 id="createwebhistory路由模式路径不带-号-生产环境下不能直接访问项目-需要nginx转发" tabindex="-1"><a class="header-anchor" href="#createwebhistory路由模式路径不带-号-生产环境下不能直接访问项目-需要nginx转发" aria-hidden="true">#</a> createWebHistory路由模式路径不带#号(生产环境下不能直接访问项目，需要nginx转发)</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>http://localhost:8080/#/
const router = createRouter({
  history: createWebHistory(),
  routes
});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="createwebhashhistory路由模式路径带-号" tabindex="-1"><a class="header-anchor" href="#createwebhashhistory路由模式路径带-号" aria-hidden="true">#</a> createWebHashHistory路由模式路径带#号</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>http://localhost:8080/
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></template>
