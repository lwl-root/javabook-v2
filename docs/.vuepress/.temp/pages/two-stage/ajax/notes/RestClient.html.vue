<template><h1 id="vscode-插件-rest-client" tabindex="-1"><a class="header-anchor" href="#vscode-插件-rest-client" aria-hidden="true">#</a> vscode 插件：REST Client</h1>
<p>关于 HTTP 测试工具，postman 一直是我们开发中不可缺少的工具，这里介绍的 REST Client 堪比是 Postman 的替代品。REST Client 是一个 VS Code 扩展插件，可以通过写脚本的形式发送 HTTP 请求并直接在 VS Code 上查看响应结果。这样不仅能看到 http 的测试结果，测试的脚本文件还能得以保留。</p>
<h2 id="_1-写在前面的话" tabindex="-1"><a class="header-anchor" href="#_1-写在前面的话" aria-hidden="true">#</a> 1. 写在前面的话</h2>
<p>我个人比较倾向于初学者使用 REST Client 来代替 Postman ，原因在于：</p>
<ul>
<li>
<p>Postman 的功能太丰富，对于初学者而言，一大堆的按钮和视窗，完全不知道该点什么，该看哪里。</p>
</li>
<li>
<p>REST Client 会让你接触到 HTTP 协议的本质（ HTTP 请求的行头体 ），这一点，对于初学者而言十分重要。</p>
</li>
</ul>
<h2 id="_2-初步使用" tabindex="-1"><a class="header-anchor" href="#_2-初步使用" aria-hidden="true">#</a> 2. 初步使用</h2>
<p>首先在 vscode 中创建一个 .http 后缀的文件，比如 xxx.http ，内容如下：</p>
<div class="language-http ext-http line-numbers-mode"><pre v-pre class="language-http"><code>GET http://www.baidu.com
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>第一次打开文件时，vscode 的左下角会给出安装插件提示：</p>
<p><img src="/images/restclient-01.png" alt="img"></p>
<p>会提示你可以安装 REST client 或其它插件：</p>
<p><img src="/images/restclient-02.png" alt="img"></p>
<p>在这里，我们选择安装 REST Client ，也就是第一个插件。</p>
<p>在安装好 REST Client 之后，你的 .http 文件的内容的上方，会出现一行 Send Request ，这行文字可以点击，点击后即发出请求。</p>
<h2 id="_3-示例" tabindex="-1"><a class="header-anchor" href="#_3-示例" aria-hidden="true">#</a> 3. 示例</h2>
<div class="language-http ext-http line-numbers-mode"><pre v-pre class="language-http"><code>### GET request with a header
GET https://httpbin.org/ip
<span class="token header"><span class="token header-name keyword">Accept</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>

### GET request with parameter
GET https://httpbin.org/get?show_env=1
<span class="token header"><span class="token header-name keyword">Accept</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>

### Send POST request with json body
POST https://httpbin.org/post
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
<span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">999</span><span class="token punctuation">,</span>
<span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token string">"content"</span>
<span class="token punctuation">}</span>

### Send <span class="token constant">POST</span> request <span class="token keyword">with</span> body <span class="token keyword">as</span> parameters
<span class="token constant">POST</span> <span class="token literal-property property">https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>httpbin<span class="token punctuation">.</span>org<span class="token operator">/</span>post
Content<span class="token operator">-</span>Type<span class="token operator">:</span> application<span class="token operator">/</span>x<span class="token operator">-</span>www<span class="token operator">-</span>form<span class="token operator">-</span>urlencoded

id<span class="token operator">=</span><span class="token number">999</span><span class="token operator">&amp;</span>value<span class="token operator">=</span>content
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>其中：</p>
<ul>
<li>
<p><code>###</code> 是注释，并且是上下两个请求的分割线。必须。</p>
</li>
<li>
<p>代码片段中的第一行内容，就是 HTTP 请求实质上的请求行。</p>
</li>
<li>
<p>代码片段中的第二行到空行之间的内容，就是 HTTP 请求实质上的请求头，其内容一行就是一个键值对，以 : 作为分隔符。</p>
</li>
<li>
<p>代码片段中空行之下的内容，就是 HTTP 请求实质上的请求体。常见内容是一个 Query-String 或者是一个 Json-String 格式的请求参数。</p>
</li>
</ul>
</template>
