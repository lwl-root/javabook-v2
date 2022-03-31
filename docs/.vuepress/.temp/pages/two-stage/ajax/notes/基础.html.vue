<template><h1 id="ajax-基础" tabindex="-1"><a class="header-anchor" href="#ajax-基础" aria-hidden="true">#</a> AJAX 基础</h1>
<h2 id="_1-json-string-格式的请求参数" tabindex="-1"><a class="header-anchor" href="#_1-json-string-格式的请求参数" aria-hidden="true">#</a> 1. JSON String 格式的请求参数</h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>结合 vscode httpclient 验证本章节内容。</p>
</div>
<p>截止目前位置，我们无法在项目的代码中发出请求参数为 JSON String 格式的 HTTP 请求。未来，我们只能借助于在代码中发出 AJAX 请求，在 AJAX（ 的 POST ）请求中携带 JSON String 格式的参数。</p>
<p>如果，你的 HTTP 请求的 <code>content-type</code> 的值为 <code>application/json</code> 。那么，你的登录请求的参数（用户名和密码），就应该是 <strong>JSON String</strong> 形式。形如：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span> <span class="token property">"username"</span> <span class="token operator">:</span> <span class="token string">"tom"</span><span class="token punctuation">,</span> <span class="token property">"password"</span> <span class="token operator">:</span> <span class="token string">"123456"</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>通过 httpclient 发出 json-string 格式的 post 请求类似如下：</p>
<div class="language-http ext-http line-numbers-mode"><pre v-pre class="language-http"><code>
### Send POST request with json body
POST http://httpbin.org/post
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
<span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">999</span><span class="token punctuation">,</span>
<span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"content"</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>json-string 格式的参数意味着后台 Servlet 无法通过 <code>request.getParameter()</code> ，而必须采用 <strong>“另一种”</strong> 方式来获取参数数据。</p>
<details class="custom-container details"><summary>Servlet 获取 json-string 格式请求参数</summary>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">BufferedReader</span> br <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">String</span> str<span class="token punctuation">,</span> wholeStr <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>str <span class="token operator">=</span> br<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    wholeStr <span class="token operator">+=</span> str<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>wholeStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></details>
<h2 id="_2-x-string-格式的请求参数总结" tabindex="-1"><a class="header-anchor" href="#_2-x-string-格式的请求参数总结" aria-hidden="true">#</a> 2. X-String 格式的请求参数总结</h2>
<ul>
<li><strong>要点一</strong>：content-type 要呼应请求参数格式
HTTP 请求的 <strong>content-type</strong> 决定了：本次请求所提交的参数（例如，登录请求所携带的用户名和密码信息）是 <strong>Query String</strong> 格式，还是 <strong>JSON String</strong> 格式。</li>
</ul>
<p><code>application/x-www-form-urlencoded</code> 意味着请求参数 “<strong>应该</strong>” 是 Query String 格式。</p>
<p><code>application/json</code> 意味着请求参数 “<strong>应该</strong>” 是 JSON String 格式。</p>
<ul>
<li><strong>要点二</strong>：无论是 Query-String 还是 JSON-String ，他们的功效都是一样的。</li>
</ul>
<p>HTTP 请求提交的参数数据，无论是 Query String 格式，还是 JSON String 格式，都只是格式的不同，其数据内容是完全一致的。</p>
<p>就像同样一句话，<small>（在不考虑同音字引起歧义的情况下）</small>我用拼音写，还是用汉字写，本质上并没有区别，两种写法传递的信息，表达的含义是一样的，它们只是『<strong>写法不同</strong>』而已。</p>
<ul>
<li><strong>要点三</strong>：后台<small>（ Servlet ）</small>获取 Query String 和 JSON String 的方式<small>（ 代码 ）</small>不同。</li>
</ul>
<p>Query String 格式的请求参数，在 Servlet 中可以通过 <code>request.getParameter(&quot;...&quot;)</code> 获取；JSON String 格式的请求参数，则不能！</p>
<ul>
<li>
<p><strong>要点四</strong>：GET 请求只能传递 Query String 格式的参数；POST 请求可以既可以传递 Query String 格式的参数，也可以传递 Query String 格式的参数。</p>
</li>
<li>
<p><strong>要点五</strong>：在学习 AJAX 之前，我们在代码层面传递的请求参数的格式全部都是 Query String；在学习 AJAX 之后，我们才能传递 JSON String 格式的请求参数。</p>
</li>
</ul>
<h2 id="_3-ajax-基本概念" tabindex="-1"><a class="header-anchor" href="#_3-ajax-基本概念" aria-hidden="true">#</a> 3. AJAX 基本概念</h2>
<p>传统 Web 应用的缺点：</p>
<ul>
<li>
<p>独占式的请求</p>
</li>
<li>
<p>频繁的页面刷新</p>
</li>
</ul>
<p>当下的前端开发通常都会借助 AJAX 技术，AJAX 并没有太多新的内容，但 AJAX 丰富了前端开发的功能。</p>
<p>AJAX 技术的核心概念就是两个：“<strong>异步</strong>” 和 “<strong>局部刷新</strong>” 。</p>
<p>AJAX 的全称是 Asynchronous JavaScript XML（异步 JavaScript 和 XML），它是一些 “旧技术” 的组合，然而在新时代占据了重要的历史地位和技术市场份额。AJAX 的出现揭开了无刷新页面的新时代。</p>
<p>利用 AJAX 技术，Web 前端只需要在后台与服务器进行少量数据交换。</p>
<p>AJAX 采用了异步交互的方式，从而改变了同步交互过程中的“请求 - 等待 - 请求 - 等待”的模式。</p>
<p>异步，是指基于 AJAX 的应用与服务器通信的方式。对于</p>
<ul>
<li>传统的 Web 应用，每次用户发送请求，向服务器请求获得新数据时，浏览器都会完全丢弃当前页面，而等待重新加载新的页面。而在服务器完全响应之前，用户浏览器将一片空白，用户的动作必须中断。而</li>
<li>异步是指用户发送请求后，无须等待，请求在后台发送，不会阻塞用户当前活动。用户无须等待第一次请求得到完全响应，即可发送第二次请求。</li>
</ul>
<p>简单来说，AJAX 的工作原理是通过 <strong>xmlHttpRequest</strong> 对象来向服务器发出异步请求。<strong>xmlHttprequest</strong> 可以同步或异步返回 Web 服务器的响应，并且能以文本或一个 DOM 文档形式返回内容。</p>
<p>普通的 Web 项目的工作流程是：</p>
<p><img src="/images/ajax_1.png" alt="img"></p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<ol>
<li>发起 <code>&lt;请求-1&gt;</code></li>
<li>获得 <code>&lt;页面-1&gt;</code></li>
<li>发起 <code>&lt;请求-2&gt;</code></li>
<li>获得 <code>&lt;页面-2&gt;</code></li>
<li>发起 <code>&lt;请求-3&gt;</code></li>
<li>获得 <code>&lt;页面-3&gt;</code></li>
<li>...</li>
</ol>
</div>
<p>AJAX 的 Web 项目的流程是：</p>
<p><img src="/images/ajax_2.png" alt="img"></p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<ol>
<li>发起 <code>&lt;请求-1&gt;</code></li>
<li>获得 <code>&lt;页面-1&gt;</code></li>
<li>发起 <code>&lt;请求-2&gt;</code></li>
<li>获得 数据，修改 <code>&lt;页面-1&gt;</code></li>
<li>发起 <code>&lt;请求-3&gt;</code></li>
<li>获得 数据，修改 <code>&lt;页面-1&gt;</code>
...</li>
</ol>
</div>
<p>AJAX 的核心是 <strong>XMLHttpRequest</strong> 对象<small>（首次出现于 IE5，如今已被 HTML5 制定为正式规范）</small>。XMLHttpRequest 提供了异步通信的能力，通过它浏览器可以向服务器发送异步的请求，也可通过它读取服务器响应。</p>
<h2 id="_4-原生-ajax-请求" tabindex="-1"><a class="header-anchor" href="#_4-原生-ajax-请求" aria-hidden="true">#</a> 4. 原生 AJAX 请求</h2>
<p>JavaScript 主要完成 AJAX 如下事情：</p>
<ul>
<li>
<p>创建 <strong>XMLHttpRequest</strong> 对象；</p>
</li>
<li>
<p>通过 <strong>XMLHttpRequest</strong> 对象向服务器发送请求；</p>
</li>
<li>
<p>创建回调函数，监视服务器响应状态，在服务器响应完成后，回调函数启动；</p>
</li>
<li>
<p>回调函数通过 DOM 动态更新 HTML 页面；</p>
</li>
</ul>
<details class="custom-container details"><summary>原生 AJAX GET 请求</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">get_with_query_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建 XMLHttpRequest 对象</span>

  <span class="token comment">// ajax 是异步的，设置回调函数</span>
  request<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">// 状态发生变化时，函数被回调</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 成功完成</span>
      <span class="token comment">// 判断响应状态码</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 成功，通过 responseText 拿到响应的文本:</span>
        console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 失败，根据响应码判断失败原因:</span>
        console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">/* HTTP 请求还在继续...
        0: 请求未初始化
        1: 服务器连接已建立
        2: 请求已接收
        3: 请求处理中
      */</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 发送请求:</span>
  request<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'GET'</span><span class="token punctuation">,</span> <span class="token string">'/recv_query_str?username=tom&amp;password=123'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  request<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//到这一步，请求才正式发出</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div></details>
<details class="custom-container details"><summary>原生 AJAX POST 请求（ query-string ）</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">post_with_query_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">var</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    request<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'HTTP 请求还在继续...'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 准备 query-string 格式的参数</span>
    <span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token string-property property">'username'</span><span class="token operator">:</span> <span class="token string">'tom'</span><span class="token punctuation">,</span>
        <span class="token string-property property">'password'</span><span class="token operator">:</span> <span class="token string">'123'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> query_str <span class="token operator">=</span>  params<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    request<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'POST'</span><span class="token punctuation">,</span> <span class="token string">'/recv_query_str'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    request<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">"Content-Type"</span><span class="token punctuation">,</span> <span class="token string">"application/x-www-form-urlencoded"</span><span class="token punctuation">)</span>
    request<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>query_str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div></details>
<details class="custom-container details"><summary>原生 AJAX POST 请求（ json-string ）</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">post_with_json_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    request<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'HTTP 请求还在继续...'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 准备 json-string 格式的参数</span>
    <span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string-property property">'username'</span><span class="token operator">:</span> <span class="token string">'tom'</span><span class="token punctuation">,</span>
        <span class="token string-property property">'password'</span><span class="token operator">:</span> <span class="token string">'123'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> json_str <span class="token operator">=</span>  <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>

    request<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'POST'</span><span class="token punctuation">,</span> <span class="token string">'/recv_json_str'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    request<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">"Content-Type"</span><span class="token punctuation">,</span> <span class="token string">"application/json"</span><span class="token punctuation">)</span>
    request<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>json_str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div></details>
</template>
