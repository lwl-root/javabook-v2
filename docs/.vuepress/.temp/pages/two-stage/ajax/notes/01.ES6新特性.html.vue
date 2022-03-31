<template><h1 id="es6-新特性" tabindex="-1"><a class="header-anchor" href="#es6-新特性" aria-hidden="true">#</a> ES6 新特性</h1>
<h2 id="关于-ecmascript-6" tabindex="-1"><a class="header-anchor" href="#关于-ecmascript-6" aria-hidden="true">#</a> 关于 ECMAScript 6</h2>
<p>我们平时所使用的 JavaScript 语言，实际上是有一个语法标准的，被称作 <strong>ECMAScpirt</strong> 。该标准由各大浏览器厂商讨论决定，再进而在各家的浏览器上进行支持。</p>
<p>2015 年 6 月，ECMAScript 的第 6 个版本发布，俗称 <strong>ECMAScript 6</strong> 。另外，自此 ECMASCript 开始使用年号作版本，因此，<em>ECMAScript 6</em> 也叫作 <strong>ECMAScript 2015</strong> 。</p>
<p>说明</p>
<p>现在 ES6 变为一个历史名词，泛指从 ESMAScript 5.1 版本之后的一切版本，涵盖了 ES2015、ES2016、ES2017 等。</p>
<p>截至目前位置，并非所有的浏览器都支持 ES6，你可以使用 ES6 进行编码，但最终它需要被转换成 ES5 的代码才能保证通用性（在你和浏览器之间达成妥协）。这里最简单（当然也是一个不规范）的解决办法是在页面上引入：<strong>babel.js</strong> 。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="let-命令" tabindex="-1"><a class="header-anchor" href="#let-命令" aria-hidden="true">#</a> let 命令</h2>
<p>之前，我们写 js 定义变量的时候，只有一个关键字 <code>var</code>，<code>var</code> 有一个问题，就是定义的变量有时会莫名奇妙的成为全局变量。</p>
<p>例如这样的一段代码：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"application/javascript"</span><span class="token operator">></span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"循环外："</span> <span class="token operator">+</span> i<span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>在循环外部也可以获取到变量 i 的值，显然变量 i 的作用域范围太大了。</p>
<ul>
<li>语法:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token operator">&lt;</span>变量名<span class="token operator">></span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>let</code> 用以替代 var 声明变量。<code>let</code> 声明的变量只在 <code>let</code> 命令所在的代码块内有效。是真正意义上的局部变量。</p>
<h2 id="const-命令" tabindex="-1"><a class="header-anchor" href="#const-命令" aria-hidden="true">#</a> const 命令</h2>
<ul>
<li>语法:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token operator">&lt;</span>变量名<span class="token operator">></span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>const</code> 也可以替代 var 来声明变量。<code>const</code> 声明的变量是常量，不能被修改，类似于 java 中 <code>final</code> 关键字。</p>
<h2 id="字符串扩展" tabindex="-1"><a class="header-anchor" href="#字符串扩展" aria-hidden="true">#</a> 字符串扩展</h2>
<p>在 ES6 中，为字符串扩展了几个新的 API ：</p>
<table>
<thead>
<tr>
<th style="text-align:left">API</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code>includes()</code></td>
<td style="text-align:left">返回布尔值，表示是否找到了参数字符串。</td>
</tr>
<tr>
<td style="text-align:left"><code>startsWith()</code></td>
<td style="text-align:left">返回布尔值，表示参数字符串是否在原字符串的头部。</td>
</tr>
<tr>
<td style="text-align:left"><code>endsWith()</code></td>
<td style="text-align:left">返回布尔值，表示参数字符串是否在原字符串的尾部。</td>
</tr>
</tbody>
</table>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"application/javascript"</span><span class="token operator">></span>
  <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">"hello microboom"</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token string">" 中是否包含了microboom => "</span><span class="token punctuation">,</span> str<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">"microboom"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token string">" 中是否包含了microbom => "</span><span class="token punctuation">,</span> str<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">"microbom"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token string">" 中是否以h开头 => "</span><span class="token punctuation">,</span> str<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">"h"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token string">" 中是否以a开头 => "</span><span class="token punctuation">,</span> str<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token string">" 中是否以m结束 => "</span><span class="token punctuation">,</span> str<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">"m"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token string">" 中是否以h结束 => "</span><span class="token punctuation">,</span> str<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">"h"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>ES6 中提供 ```（反单引号，键盘上 ESC 下方的 <code>~</code> 键）做为字符串模板标记，我们可以这样使用。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">></span>
  <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  hello
  world
  goodbye
  </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>在两个 ``` 之间的部分都会被作为字符串的值，可以任意换行。</p>
<h2 id="解构表达式" tabindex="-1"><a class="header-anchor" href="#解构表达式" aria-hidden="true">#</a> 解构表达式</h2>
<p>ES6 中允许按照一定模式从数组和对象中提取值，然后对变量进行赋值，这被称为<strong>解构</strong>（Destructuring）。</p>
<h3 id="数组解构" tabindex="-1"><a class="header-anchor" href="#数组解构" aria-hidden="true">#</a> 数组解构</h3>
<p>比如有一个数组：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>ES6 之前，只能通过下标访问其中每一个元素的值。但到了 ES6 可以这样：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span>y<span class="token punctuation">,</span>z<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">;</span>  <span class="token comment">// x=arr[0], y=arr[1], z=arr[2]</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span>y<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">;</span>    <span class="token comment">// x=arr[0], y=arr[1]</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">;</span>      <span class="token comment">// x=arr[0]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="对象解构" tabindex="-1"><a class="header-anchor" href="#对象解构" aria-hidden="true">#</a> 对象解构</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"jack"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">21</span><span class="token punctuation">,</span>
    <span class="token literal-property property">language</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'java'</span><span class="token punctuation">,</span><span class="token string">'js'</span><span class="token punctuation">,</span><span class="token string">'css'</span><span class="token punctuation">]</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>
 
<span class="token comment">// 解构表达式获取值</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> language<span class="token punctuation">}</span> <span class="token operator">=</span> person<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>上面的 <code>name</code>、<code>age</code> 和 <code>language</code> 和 person 对象的属性名是一致的。</p>
<p>如过想要用其它变量接收，需要额外指定别名：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span>n<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span>a<span class="token punctuation">,</span> <span class="token literal-property property">language</span><span class="token operator">:</span>l<span class="token punctuation">}</span> <span class="token operator">=</span> person<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> a<span class="token punctuation">,</span> l<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>name 是 person 中的属性名，冒号后面的 n 是解构后要赋值给的变量。</p>
<h2 id="函数优化" tabindex="-1"><a class="header-anchor" href="#函数优化" aria-hidden="true">#</a> 函数优化</h2>
<h3 id="函数参数默认值" tabindex="-1"><a class="header-anchor" href="#函数参数默认值" aria-hidden="true">#</a> 函数参数默认值</h3>
<p>在 ES6 以前，我们无法给一个函数参数设置默认值，只能自己实现该逻辑。现在可以这么写：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">1</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="箭头函数" tabindex="-1"><a class="header-anchor" href="#箭头函数" aria-hidden="true">#</a> 箭头函数</h3>
<p>箭头函数是 ES6 中定义函数的简写。</p>
<ul>
<li>
<p>一个参数时：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">print</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 简写为</span>
<span class="token keyword">var</span> <span class="token function-variable function">print</span> <span class="token operator">=</span> <span class="token parameter">obj</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li>
</ul>
<p>本质上这就是 lambda 表达式概念在 JS 中的应用。不同的是在 Java 中使用的是 <code>-&gt;</code>，而在 ES6 里使用的是 <code>=&gt;</code> 。</p>
<ul>
<li>
<p>两个参数时：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 简写为</span>
<span class="token keyword">var</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>没有参数时，需要通过 <code>()</code> 进行占位，代表参数部分</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">sayHello</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
<li>
<p>代码不止一行时：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">sayHello</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'world'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li>
</ul>
<h2 id="对象的函数属性简写" tabindex="-1"><a class="header-anchor" href="#对象的函数属性简写" aria-hidden="true">#</a> 对象的函数属性简写</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token operator">...</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token operator">...</span><span class="token punctuation">,</span>
    <span class="token comment">// 老版</span>
    <span class="token function-variable function">eat1</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">food</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">'is eating '</span> <span class="token operator">+</span> food<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 箭头函数简写版</span>
    <span class="token function-variable function">eat2</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">food</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">'is eating '</span> <span class="token operator">+</span> food<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 更简的版本</span>
    <span class="token function">eat3</span><span class="token punctuation">(</span><span class="token parameter">food</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">'is eating '</span> <span class="token operator">+</span> food<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="箭头函数结合结构表达式" tabindex="-1"><a class="header-anchor" href="#箭头函数结合结构表达式" aria-hidden="true">#</a> 箭头函数结合结构表达式</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 原代码</span>
<span class="token keyword">function</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token parameter">person</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
<span class="token function">hello</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 现代码</span>
<span class="token keyword">var</span> <span class="token function-variable function">hello</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">hello</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>注意，上述的例子中，<em><code>name</code></em> 是被 <code>{ }</code> 包裹着的。</p>
<h2 id="新增的数组的-map-方法" tabindex="-1"><a class="header-anchor" href="#新增的数组的-map-方法" aria-hidden="true">#</a> 新增的数组的 map 方法</h2>
<p><code>map()</code> 方法接收一个函数，将原数组中的所有元素用这个函数处理后放入<strong>新数组</strong>返回。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 字符串数组</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token string">'3'</span><span class="token punctuation">,</span> <span class="token string">'4'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> newArr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">s</span> <span class="token operator">=></span> <span class="token function">parseInt</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>newArr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="新增的数组的-reduce-方法" tabindex="-1"><a class="header-anchor" href="#新增的数组的-reduce-方法" aria-hidden="true">#</a> 新增的数组的 reduce 方法</h2>
<p><code>reduce()</code> 方法接收两个参数：</p>
<ul>
<li>第一个参数必须，传入的是上一次 reduce 处理的结果。</li>
<li>第二个参数可选，是数组中要处理的下一个元素。</li>
</ul>
<p><code>reduce()</code> 会从左到右依次把数组中的元素用 <code>reduce()</code> 处理，并把处理的结果作为下次 <code>reduce()</code> 的第一个参数。如果是第一次，会把前两个元素作为计算参数，或者把用户指定的初始值作为起始参数。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>说明：</p>
<ul>
<li>第一轮循环中，a 的值是 0/nil（因为没有上一轮）， b 的值是当前的 arr[0]，即 1 。</li>
<li>第二轮循环中，a 的值是 <code>0 + 1</code>，即 1，b 的值是当前的 arr[1]，即 20 。</li>
<li>第三轮循环中，a 的值是 <code>1 + 21</code>，即 22，b 的值是当前的 arr[2]，即 -5 。</li>
<li>第四轮循环中，a 的值是 <code>22 + (-5)</code>，即 17，b 的值是当前的 arr[3]，即 3 。</li>
</ul>
<h2 id="扩展运算符" tabindex="-1"><a class="header-anchor" href="#扩展运算符" aria-hidden="true">#</a> 扩展运算符</h2>
<p>扩展运算符（spread）是三个点（<code>...</code>）， 用以将一个数组转为用逗号分隔的参数序列 。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 基本使用</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 等同于</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 等同于</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// 为函数传值</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token operator">...</span>numbers<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 等同于</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 数组合并</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">// 等同于</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 与解构表达式结合</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>first<span class="token punctuation">,</span> <span class="token operator">...</span>rest<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 等同于</span>
first <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
rest <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 将字符串转成数组</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span><span class="token string">'hello'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 等同于</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'h'</span><span class="token punctuation">,</span> <span class="token string">'e'</span><span class="token punctuation">,</span> <span class="token string">'l'</span><span class="token punctuation">,</span> <span class="token string">'l'</span><span class="token punctuation">,</span> <span class="token string">'o'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div></template>
