<template><h1 id="http-request-中的-content-type-请求头" tabindex="-1"><a class="header-anchor" href="#http-request-中的-content-type-请求头" aria-hidden="true">#</a> HTTP Request 中的 content-type 请求头</h1>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>结合 vscode httpclient 验证本章节内容。</p>
</div>
<h2 id="_1-content-type-请求头" tabindex="-1"><a class="header-anchor" href="#_1-content-type-请求头" aria-hidden="true">#</a> 1. content-type 请求头</h2>
<p>在 HTTP 请求的请求头中，有一个 content-type 请求头，它和它的值对于我们后续的学习、使用有至关重要的作用。</p>
<p>当你向后台（Servlet、Controller）发起 HTTP 请求并要传递参数时，HTTP 请求的 content-type 请求头的值决定、呼应了你的请求参数的格式。</p>
<p>它的值常见有 2 个：</p>
<table>
<thead>
<tr>
<th style="text-align:left">#</th>
<th>content-type</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td>application/x-www-form-urlencoded</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td>application/json</td>
</tr>
</tbody>
</table>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>截止目前为止，我们直接或间接发出的 HTTP 请求中的 content-type 的值都是 application/x-www-form-urlencoded（文件上传功能除外），我们还没有遇到过 content-type 的值是 application/json 的情况。</p>
</div>
<h2 id="_2-query-string-格式的请求参数" tabindex="-1"><a class="header-anchor" href="#_2-query-string-格式的请求参数" aria-hidden="true">#</a> 2. Query String 格式的请求参数</h2>
<p>如果，你的 HTTP 请求头中的 <code>content-type</code> 的值为 <code>application/x-www-form-urlencoded</code> 。那么，你的登录请求的请求参数<small>（用户名和密码）</small>，就应该是 <strong>Query String</strong> 形式。形如：</p>
<div class="language-http ext-http line-numbers-mode"><pre v-pre class="language-http"><code>username=tom&amp;password=123456
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>通过 httpclient 发出 query-string 格式的 post 请求类似如下：</p>
<div class="language-http ext-http line-numbers-mode"><pre v-pre class="language-http"><code>### Send POST request with body as parameters
POST http://httpbin.org/post
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/x-www-form-urlencoded</span></span>

id=999&amp;value=content
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>截止到目前位置，在此之前，我们发出的 HTTP 请求的参数都是 query-string 。</p>
<p>query-string 格式的参数意味着后台 Servlet 要通过 <code>request.getParameter()</code> 来获取参数数据。</p>
<h2 id="_3-常见请求方式一" tabindex="-1"><a class="header-anchor" href="#_3-常见请求方式一" aria-hidden="true">#</a> 3. 常见请求方式一</h2>
<p><strong>通过页面上的 <code>&lt;form&gt;</code> 表单提交数据</strong>。<small>发出的是 POST 请求，请求参数以 query-string 格式携带在 HTTP 请求体中，向后端传递。</small></p>
<p>其本质如下<small>（以登录请求为例）</small>：</p>
<div class="language-http ext-http line-numbers-mode"><pre v-pre class="language-http"><code>POST http://127.0.0.1:8080/login
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/x-www-form-urlencoded</span></span>

username=tom&amp;password=123
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_4-常见请求方式二" tabindex="-1"><a class="header-anchor" href="#_4-常见请求方式二" aria-hidden="true">#</a> 4. 常见请求方式二</h2>
<p><strong>在浏览器地址栏直接输入访问地址和请求参数，并按下回车。</strong> <small>发出的是 GET 请求，请求参数以 query-string 格式携带在请求行中，向后端传递。</small></p>
<p>其本质如下<small>（以登录请求为例）</small>：</p>
<div class="language-http ext-http line-numbers-mode"><pre v-pre class="language-http"><code>GET http://127.0.0.1:8080/login?username=tom&amp;password=123
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_5-常见请求方式三" tabindex="-1"><a class="header-anchor" href="#_5-常见请求方式三" aria-hidden="true">#</a> 5. 常见请求方式三</h2>
<p><strong>点击页面上的 <code>&lt;link&gt;</code> 接链，本质上等同于上面的</strong> <code>常见请求方式二 </code>。其本质如下：</p>
<div class="language-http ext-http line-numbers-mode"><pre v-pre class="language-http"><code>GET http://127.0.0.1:8080/login?username=tom&amp;password=123
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>你一定注意到了，无论是 GET 方式，还是 POST 方式，都可以向后端传递 query-string 格式的参数。</p>
</div>
<h2 id="_6-get-请求的一点点小特殊" tabindex="-1"><a class="header-anchor" href="#_6-get-请求的一点点小特殊" aria-hidden="true">#</a> 6. GET 请求的一点点小特殊</h2>
<p>GET 请求的数据包中 <strong>“没有请求体”</strong> <small>（ 逻辑上，你也可以认为 GET 请求的 <strong>“请求体是空的”</strong> ）</small>。这也是为什么 GET 请求的请求头中没有 content-type 。</p>
<p>HTTP 请求头中的 content-type 就是用来指定请求体中的数据<small>（ 即，请求参数 ）</small>的格式，而 GET 请求压根就没有请求体，因此 content-type 请求头在 GET 请求中自然就没有了用武之地，而 GET 请求的请求头中所以也就用不上 content-type 。</p>
<p>GET 请求向后台传递的 query-string 是 “追加” 在请求路径 URI 中的，而请求路径 URI 在 HTTP 请求的数据包中，是存放在请求行中的，因此，GET 请求的 query-string 格式参数是携带在请求行中，传递到后台的。</p>
<p>请求路径 URI 的后面可以 “追加” query-string 格式字符串，但是不能 “追加” json-string 格式字符串，因此，这也是为什么说 GET 请求向后台传递的都是 query-string 格式参数。</p>
<h2 id="_7-json-string-格式的参数" tabindex="-1"><a class="header-anchor" href="#_7-json-string-格式的参数" aria-hidden="true">#</a> 7. JSON String 格式的参数</h2>
<p>见下一章节</p>
</template>
