<template><h1 id="vue-axios" tabindex="-1"><a class="header-anchor" href="#vue-axios" aria-hidden="true">#</a> vue axios</h1>
<p>Vue 2.0 之后，就不再对 vue-resource 更新。Vue 官方推荐使用其竞品：axios 。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>axios 充分利用了 ES6 的 Promise 语法。</p>
</div>
<h2 id="_1-在页面上引入" tabindex="-1"><a class="header-anchor" href="#_1-在页面上引入" aria-hidden="true">#</a> 1. 在页面上引入</h2>
<div class="custom-container tip"><p class="custom-container-title">说明</p>
<p>由于存在跨域问题，对于 axios 在 vue.js 中的使用，我们直接将前端页面写在 Spring Boot 项目中，将 vue.js 和后台服务整合在一起，以免单独处理跨域问题。</p>
<p>对于开发环境中的跨域问题，我们在 vue-cli 中使用 proxy 解决。</p>
</div>
<p>CDN 引入，vue.js 中使用</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/axios@0.21.1/dist/axios.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>通过 axios 向后台发送请求，为了方便，axios 已经为所有支持的请求方法提供了别名。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>• axios<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>

• axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url <span class="token punctuation">[</span>，config<span class="token punctuation">]</span><span class="token punctuation">)</span>

• axios<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>url <span class="token punctuation">[</span>，config<span class="token punctuation">]</span><span class="token punctuation">)</span>

• axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>url <span class="token punctuation">[</span>，data <span class="token punctuation">[</span>，config<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

• axios<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>url <span class="token punctuation">[</span>，data <span class="token punctuation">[</span>，config<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

• axios<span class="token punctuation">.</span><span class="token function">patch</span><span class="token punctuation">(</span>url <span class="token punctuation">[</span>，data <span class="token punctuation">[</span>，config<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

• axios<span class="token punctuation">.</span><span class="token function">head</span><span class="token punctuation">(</span>url <span class="token punctuation">[</span>，config<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>注意：当使用别名方法时，不需要在参数 <code>config</code> 中指定 <code>url</code>，<code>method</code> 和 <code>data</code> 属性。</p>
<h2 id="_2-axios-方法" tabindex="-1"><a class="header-anchor" href="#_2-axios-方法" aria-hidden="true">#</a> 2. axios() 方法</h2>
<p><strong>axios()</strong> 方法是最核心、最根本的方法，其它方法都是它的简写。</p>
<p>简单使用：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span>
<span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/users'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=></span> <span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="axios-方法发起-get-请求" tabindex="-1"><a class="header-anchor" href="#axios-方法发起-get-请求" aria-hidden="true">#</a> axios 方法发起 GET 请求</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/user'</span><span class="token punctuation">,</span>
<span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span>
<span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token constant">ID</span><span class="token operator">:</span> <span class="token number">123</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span> <span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>axios 的 GET 请求的请求参数是以 query-string（形如：<code>name=tom&amp;age=20</code>）的形式传递到后台，对于 Spring MVC 而言，Controller 中是使用 <strong>@RequestParam</strong> 接收请求参数。</p>
<p>需要注意的需要注意的是 GET 请求要搭配 <strong>params</strong> 使用：</p>
<p>在使用 GET 方法传递参数时使用的是 <strong>params</strong>，并且官方文档中介绍为：params are the URL parameters to be sent with the request. Must be a plain object or a URLSearchParams object。译为：<strong>params</strong> 作为URL链接中的参数发送请求，且其必须是一个 plain object<small>（或者是 URLSearchParams object）</small>。</p>
<p>plain object（纯对象）是指用 JSON 形式定义的普通对象或者 <code>new Object()</code> 创建的简单对象；而 URLSearchParams object 指的是一个可以由 URLSearchParams接口定义的一些实用方法来处理 URL 的查询字符串的对象。</p>
<p>URLSearchParams object 的使用范例如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'ID'</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/user'</span><span class="token punctuation">,</span>
<span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span>
<span class="token literal-property property">params</span><span class="token operator">:</span> obj   <span class="token comment">// 看这里，看这里，看这里</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="axios-方法发起-post-请求" tabindex="-1"><a class="header-anchor" href="#axios-方法发起-post-请求" aria-hidden="true">#</a> axios 方法发起 POST 请求</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/user'</span><span class="token punctuation">,</span>
<span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'tom'</span><span class="token punctuation">,</span>
<span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span> <span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>axios 的 post 请求的请求参数是以 json-string 的形式传递到后台的，对于 Spring MVC 而言，Controller 中是使用 <strong>@RequestBody</strong> 接收请求参数。同样使用这种形式的还有 PUT、PATCH 等请求方式。</p>
<p>需要注意的需要注意的是 POST 请求要搭配 <strong>data</strong> 使用。</p>
<h2 id="_3-get-方法和-post-方法" tabindex="-1"><a class="header-anchor" href="#_3-get-方法和-post-方法" aria-hidden="true">#</a> 3. get() 方法和 post() 方法</h2>
<p>在通过 axios() 方法发送请求时，你需要小心翼翼地使用 params 和 data 参数。为了简化<small>（无需用户考虑 params 和 data 问题）</small>，axios 在 axios() 方法之上提供了专门的 get() 方法 和 post() 方法。</p>
<ul>
<li>get 请求</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/user?name=tom&amp;age=20'</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>另外，axios 方法简单到如下形式，发出的也是 get 请求。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 忽略第二个参数时，默认是发送一个 GET 请求，且无请求参数</span>
<span class="token function">axios</span><span class="token punctuation">(</span><span class="token string">'/user/12345'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li>post 请求</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/user'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'tom'</span><span class="token punctuation">,</span>
<span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="_4-post-方法和-requestparam" tabindex="-1"><a class="header-anchor" href="#_4-post-方法和-requestparam" aria-hidden="true">#</a> 4. post() 方法和 @RequestParam</h2>
<p>axios 通过 post() 方法发出的 post 请求时，请求头的 content-type 默认就是 <code>application/json</code>，因此，Controller 中自然是 @ReqeustBody 与之配合。</p>
<p>如果希望在 Controller 中使用 @RequestParam，那么就需要直接或间接影响到 axios 发出的 post 请求的 content-type ，让其值为 <code>application/x-www-form-urlencoded</code> 即可。</p>
<p>最根本的办法就是：硬传一个 query-string 格式的参数给 post 方法，进而影响 axios，让 axios 自己去改 post 请求的 content-type 。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/user'</span><span class="token punctuation">,</span> <span class="token string">'name=jerry&amp;age=19'</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>考虑到自己硬编码 query-string 比较繁琐，这个方案有 2 个改进版：</p>
<ul>
<li>使用 URLSearchParams：</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
params<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token string">'jerry'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
params<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'age'</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// console.info(params.toString());</span>

axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/user'</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>使用 qs 库：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/qs@6.10.1/lib/index.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'tom'</span><span class="token punctuation">,</span>
<span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// console.info(Qs.stringify(obj));</span>

axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/user'</span><span class="token punctuation">,</span> Qs<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="_5-执行多个并发请求" tabindex="-1"><a class="header-anchor" href="#_5-执行多个并发请求" aria-hidden="true">#</a> 5. 执行多个并发请求 <Badge type="tip" text="了解" vertical="top" /></h2>
<ul>
<li>示例</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getUserAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/user/12345'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getUserPermissions</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/user/12345/permissions'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

axios<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
<span class="token function">getUserAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token function">getUserPermissions</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>axios<span class="token punctuation">.</span><span class="token function">spread</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">acct<span class="token punctuation">,</span> perms</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// 两个请求现已完成</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></template>
