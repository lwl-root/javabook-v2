<template><h1 id="ajax-和-spring-mvc" tabindex="-1"><a class="header-anchor" href="#ajax-和-spring-mvc" aria-hidden="true">#</a> AJAX 和 Spring MVC</h1>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<ol>
<li>开始本章节前，务必复习下前两章内容！</li>
<li>本章节仅以 GET 和 POST 请求方式演示，不涉及 RESTful 风格的其它请求方式。</li>
</ol>
</div>
<h2 id="_1-ajax-请求和-spring-mvc-的参数绑定" tabindex="-1"><a class="header-anchor" href="#_1-ajax-请求和-spring-mvc-的参数绑定" aria-hidden="true">#</a> 1. AJAX 请求和 Spring MVC 的参数绑定</h2>
<h3 id="ajax-发送简单类型参数" tabindex="-1"><a class="header-anchor" href="#ajax-发送简单类型参数" aria-hidden="true">#</a> AJAX 发送简单类型参数</h3>
<p>这种情况下，和发送 <font color="blue"><strong>application/x-www-form-urlencoded</strong></font> 情况是一样的。</p>
<p>Spring MVC 该怎么执行参数绑定，就怎么执行参数绑定。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token operator">...</span>
<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">'tom'</span><span class="token punctuation">,</span>
<span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">'123'</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="ajax-发送简单类型数组的一个坑" tabindex="-1"><a class="header-anchor" href="#ajax-发送简单类型数组的一个坑" aria-hidden="true">#</a> <code>ajax()</code> 发送简单类型数组的一个坑</h3>
<p>类似于表单元素 checkbox 的那种情况，有时候，你需要通过 $.ajax() 向后台传递同一个 key 的多个 value 。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> $<span class="token punctuation">.</span><span class="token function">param</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-property property">"xxx"</span><span class="token operator">:</span> nums<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 注意此处的输出！</span>

$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token operator">...</span>
<span class="token literal-property property">data</span><span class="token operator">:</span> str<span class="token punctuation">,</span>
<span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>这种情况，本质上和普通的请求中的 checkbox 有『<font color="blue"><strong>很大但又很不起眼</strong></font>』的不同，jQuery 会在请求参数字符串的 key 的名字中加上 <code>%5b%5d</code>，其实就是 <code>[]</code> 。</p>
<p>因此，在 SpringMVC 的 <font color="blue"><strong>@RequestParam</strong></font> 中指明的请求参数并不是 <code>xxx</code> 而应该是 <code>xxx[]</code> ！</p>
<p>例如：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">demo</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span><span class="token string">"xxx[]"</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span><span class="token punctuation">[</span><span class="token punctuation">]</span> prodNums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="ajax-发送-application-json-参数类型的请求" tabindex="-1"><a class="header-anchor" href="#ajax-发送-application-json-参数类型的请求" aria-hidden="true">#</a> ajax 发送 application/json 参数类型的请求</h3>
<p>如果，我们将 <font color="blue"><strong><em>contentType</em></strong></font> 赋值为 <code>application/json</code> 表示向后台发起请求时，是将一个 <font color="blue"><strong>JSON 格式的字符串</strong></font> 携带在了 Request 的 body 部分，需要 Spring MVC 通过 <font color="blue"><strong><em>@RequestBody</em></strong></font> 进行参数绑定，获取并解析出这个 JSON 格式字符串。此时使用 <font color="blue"><strong><em>@RequestParam</em></strong></font> 注解无效。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>Spring MVC 在这里有个小【坑】： Spring MVC 默认使用 Jackson 来做对象和 JSON 格式字符串的互转。Spring MVC 中已内置了相关的配置，无需你再在配置文件中进行配置。 但是 spring-webmvc 的依赖关系中并没有包含 jackson 包！！！ 所以，尽管不需要进行配置，但是你的项目的 pom.xml 中，仍然需要你手动加包。</p>
</div>
<p>例如，向后台传递一个对象的数组：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> emp1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">empno</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token literal-property property">ename</span><span class="token operator">:</span> <span class="token string">'tom'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> emp2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">empno</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token literal-property property">ename</span><span class="token operator">:</span> <span class="token string">'ben'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>emp1<span class="token punctuation">,</span> emp2<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> jsonStr <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [{"empno":20,"ename":"tom"},{"empno":21,"ename":"jerry"}]</span>

$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token operator">...</span>
<span class="token literal-property property">contentType</span><span class="token operator">:</span> <span class="token string">"application/json"</span><span class="token punctuation">,</span>
<span class="token literal-property property">data</span><span class="token operator">:</span> jsonStr<span class="token punctuation">,</span>  <span class="token comment">// 一定要传入自己转换好的 JSON 格式字符串。直接传入对象的话，jQuery 【帮】你转成了 queryString</span>
<span class="token operator">...</span>                              
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">Employee</span><span class="token punctuation">[</span><span class="token punctuation">]</span> emps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_2-spring-mvc-响应-ajax-请求" tabindex="-1"><a class="header-anchor" href="#_2-spring-mvc-响应-ajax-请求" aria-hidden="true">#</a> 2. Spring MVC 响应 AJAX 请求</h2>
<p>Spring MVC 响应 AJAX 请求，回给客户端浏览器一个 JSON 格式字符串，这很容易实现。</p>
<p>只需要使用 <font color="blue"><strong><em>@ResponseBody</em></strong></font> 注解，标注在请求处理方法上即可。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/hello.do"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token keyword">public</span> <span class="token class-name">Student</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token class-name">Student</span> tom <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"tom"</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> tom<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>当你使用了 <font color="blue"><strong><em>@ResponseBody</em></strong></font> 注解，Spring MVC 会【帮】你做两件事情：</p>
<ol>
<li>
<p>将这个方法的返回值（默认使用jackson）转换为 json 格式字符串。</p>
</li>
<li>
<p>在底层执行 <code>resp.setContentType(&quot;application/json&quot;)</code>; 将 HTTP 响应的 content-type 设置为 application/json 。</p>
</li>
</ol>
<p>此时，你的方法的返回值不再是 ModelAndView，或者是 String。它直接就是代表你所要返回的数据的对象，或对象的集合<small>（通常是 List）</small>。</p>
<h2 id="_3-restcontroller-注解" tabindex="-1"><a class="header-anchor" href="#_3-restcontroller-注解" aria-hidden="true">#</a> 3. @RestController 注解</h2>
<p>如果你的一个 Controller 类下的所有请求处理方法都返回的是 JSON 格式字符串，而不是逻辑视图名。那么，你的所有的请求处理方法的『头』上一定都加了 <code>@ResponseBody</code> 注解。</p>
<p>对于这种情况，Spring MVC 提供了一个 <code>@RestController</code> 注解用于替换 <code>@Controller</code> 注解，标注在 Controller 类上。用以表明这个类是一个纯粹的基于 RESTful 风格的 Web 服务。</p>
<p>这样，你就可以不用在这个 Controller 类下的每个方法上添加 <code>@ResponseBody</code> 了。</p>
<h2 id="_4-背后功臣-httpmessageconverter" tabindex="-1"><a class="header-anchor" href="#_4-背后功臣-httpmessageconverter" aria-hidden="true">#</a> 4. 背后功臣 HttpMessageConverter</h2>
<p>你之所以能在 Controller 中收、发 JSON 格式字符串，正是因为有名为 <font color="blue"><strong>HttpMessageConverter</strong></font> 的部件在为 <font color="blue"><strong>@RequestBody</strong></font> 和 <font color="blue"><strong>@ResponseBody</strong></font>『服务』的！注意，它与 @RequestParam 无关</p>
<ul>
<li>
<font color="blue">@RequestBody</font> 需要利用 HttpMessageConverter 来从 HTTP 的请求 body 中取数据；
</li>
<li>
<font color="blue">@ResponseBody</font> 需要利用 HttpMessageConverter 来往 HTTP 的响应的 body 中放数据。
</li>
</ul>
<p>在这里，你可能会用到 2 种不同的 HttpMessageConverter<small>（取决于你的参数和返回值类型）</small>：</p>
<ul>
<li>
<font color="blue">StringHttpMessageConverter</font>:
<ul>
<li>
<p>在 Controller 接受、处理请求时，如果你想将请求体中的 JSON String 形式的请求参数字符串作为一个整体取出来，赋给 Controller 的一个 String 类型参数（该参数必然标注了 @RequestBody），此时，StringHttpMessageConverter 实现了这个工作。</p>
</li>
<li>
<p>在 Controller 准备返回数据，响应请求发起方时，如果，你自己已经在代码逻辑中准备好了 JSON 格式字符串，接下来只需要将它（JSON 格式字符串）放入 HTTP 响应体中，此时，StringHttpMessageConverter 实现了这个工作。</p>
</li>
</ul>
</li>
<li>
<font color="blue">MappingJackson2HttpMessageConverter</font>:
<ul>
<li>
<p>在 Controller 接受、处理请求时，如果你想将请求体中的 JSON String 形式的请求参数字符串取出来，并希望『有人』能帮你把它转换成一个 JavaBean，再赋给 Controller 的一个引用类型参数（该参数必然标注了 @RequestBody），此时，MappingJackson2HttpMessageConverter 实现了这个工作。</p>
</li>
<li>
<p>在 Controller 准备返回数据，响应请求发起方时，如果，你自己在代码逻辑中准备好了要返回的数据：JavaBean（或 JavaBean 的集合），并希望『有人』帮你把它转换成 JSON 格式字符串，然后再放入 HTTP 响应体中，此时，MappingJackson2HttpMessageConverter 实现了这个工作。</p>
</li>
</ul>
</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">再次强调</p>
<p>无论是上述哪个 HttpMessageConverter 再工作，前提都是你使用了 <font color="blue"><strong>@RequestBody</strong></font> 和 <font color="blue"><strong>@ResponseBody</strong></font> 注解。</p>
</div>
<h2 id="_5-stringhttpmessageconverter-乱码问题" tabindex="-1"><a class="header-anchor" href="#_5-stringhttpmessageconverter-乱码问题" aria-hidden="true">#</a> 5. StringHttpMessageConverter 乱码问题 <Badge type="tip" text="了解" vertical="top" /></h2>
<p>通常，我们不会取直接收、发 JSON 格式字符串，所以，我们用到 <font color="blue"><strong>MappingJackson2HttpMessageConverter</strong></font> 的机会会比 <font color="blue"><strong>StringHttpMessageConverter</strong></font> 要多。<small>毕竟，能偷懒为什么不偷懒。</small></p>
<p>不过，万一因为某种原因，你要直接收、发 JSON 格式字符串，从而利用到 <font color="blue"><strong>StringHttpMessageConverter</strong></font> 时，要注意，它有个小坑：它默认使用的是 <font color="blue"><strong>iso-8859-1</strong></font> 编码<small>（也就是 <font color="blue"><strong>latin-1</strong></font>）</small>，因此不支持中日韩文。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>好在 MappingJackson2HttpMessageConverter 没有这个问题，它的默认的编码是 UTF-8 。</p>
</div>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 在页面上你看到的是 `????`，而非 `酒店查询`。</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/test"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">return</span> <span class="token string">"{\"status\":0,\"errmsg\":null,\"data\":{\"query\":\"酒店查询\",\"num\":65544,\"url\":\"www.test.com\"}}"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>这种情况下，需要你取显示配置 StringHttpMessageConverter，并在配置中指定它要使用的编码。</p>
<details class="custom-container details"><summary>代码配置版：SpringWebConfig.java</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@Override
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">configureMessageConverters</span><span class="token punctuation">(</span><span class="token parameter">List<span class="token operator">&lt;</span>HttpMessageConverter<span class="token operator">&lt;</span><span class="token operator">?</span><span class="token operator">>></span> converters</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//    Charset charset = StandardCharsets.UTF_8;</span>
      Charset charset <span class="token operator">=</span> Charset<span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">"UTF-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      StringHttpMessageConverter converter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringHttpMessageConverter</span><span class="token punctuation">(</span>charset<span class="token punctuation">)</span><span class="token punctuation">;</span>

      converters<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>converter<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></details>
<details class="custom-container details"><summary>.xml 配置文版：spring-web.xml</summary>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf8Charset<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>java.nio.charset.Charset<span class="token punctuation">"</span></span> <span class="token attr-name">factory-method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>forName<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>constructor-arg</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">mvc:</span>annotation-driven</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">mvc:</span>message-converters</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>org.springframework.http.converter.StringHttpMessageConverter<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>constructor-arg</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf8Charset<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">mvc:</span>message-converters</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">mvc:</span>annotation-driven</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>补充，你可以将 <font color="blue"><strong>utf8Charset</strong></font> 的 bean 配置『嵌』在 <font color="blue"><strong>StringHttpMessageConverter</strong></font> 的 bean 配置里面。因为，除了它，也没别的地方用到了 <font color="blue"><strong>utf8Charset</strong></font> Bean。</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>constructor-arg</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf8Charset<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>java.nio.charset.Charset<span class="token punctuation">"</span></span> <span class="token attr-name">factory-method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>forName<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>constructor-arg</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>constructor-arg</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></details>
</template>
