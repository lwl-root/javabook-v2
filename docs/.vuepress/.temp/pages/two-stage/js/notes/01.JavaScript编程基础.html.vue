<template><h1 id="javascript-编程基础" tabindex="-1"><a class="header-anchor" href="#javascript-编程基础" aria-hidden="true">#</a> JavaScript 编程基础</h1>
<h2 id="_1-基础知识" tabindex="-1"><a class="header-anchor" href="#_1-基础知识" aria-hidden="true">#</a> 1. 基础知识</h2>
<p>JavaScript 是一种可以用来给网页增加交互性的编程语言。</p>
<p>JavaScript 脚本也是一种程序，它们包含在</p>
<ul>
<li>HTML 页面内部（原先编写脚本的方式），或者</li>
<li>驻留在外部文件中（现在的首选方法）。</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"text/javascript"</span> src<span class="token operator">=</span><span class="token string">"js/hello.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
 
        Copied<span class="token operator">!</span>
    
<span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"text/javascript"</span><span class="token operator">></span>
    xxx<span class="token punctuation">;</span>
    xxx<span class="token punctuation">;</span>
    xxx<span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
 
        Copied<span class="token operator">!</span>
    
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>在 HTML 页面上，因为脚本文本包围在 <code>&lt;script&gt;</code> 标签中，所以它不会显示在用户的屏幕上，而 Web 浏览器知道应该运行 JavaScript 程序。</p>
<p><code>&lt;script&gt;</code> 标签常常放在 HTML 页面的 <code>&lt;head&gt;</code> 部分中。但是如果愿意，也可以将脚本放在 <code>&lt;body&gt;</code> 部分中。</p>
<h2 id="_2-值和变量" tabindex="-1"><a class="header-anchor" href="#_2-值和变量" aria-hidden="true">#</a> 2. 值和变量</h2>
<p>值类型:</p>
<table>
<thead>
<tr>
<th style="text-align:left">类 型</th>
<th style="text-align:left">描 述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">数字</td>
<td style="text-align:left">任何数字值</td>
</tr>
<tr>
<td style="text-align:left">字符串</td>
<td style="text-align:left">引号中的字符</td>
</tr>
<tr>
<td style="text-align:left">布尔值（Boolean）</td>
<td style="text-align:left">true 或 false</td>
</tr>
<tr>
<td style="text-align:left">空值（null）</td>
<td style="text-align:left">空且无含义</td>
</tr>
<tr>
<td style="text-align:left">对象</td>
<td style="text-align:left">与对象相关联的任何值</td>
</tr>
<tr>
<td style="text-align:left">函数</td>
<td style="text-align:left">函数返回的值</td>
</tr>
</tbody>
</table>
<p><strong>typeof</strong> 操作符是用来检测变量的数据类型。对于值或变量使用 <strong>typeof</strong> 操作符会返回如下字符串：</p>
<table>
<thead>
<tr>
<th style="text-align:left">类型字符串</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">'undefined'</td>
<td style="text-align:left">未定义。表示该变量从未被赋过值。</td>
</tr>
<tr>
<td style="text-align:left">'boolean'</td>
<td style="text-align:left">布尔值</td>
</tr>
<tr>
<td style="text-align:left">'string'</td>
<td style="text-align:left">字符串</td>
</tr>
<tr>
<td style="text-align:left">'number'</td>
<td style="text-align:left">数值</td>
</tr>
<tr>
<td style="text-align:left">'object'</td>
<td style="text-align:left">表示对象，或 null。注意，如果变量的值为 null，此处也是返回 object，表示空对象。</td>
</tr>
<tr>
<td style="text-align:left">'function'</td>
<td style="text-align:left">函数。函数是对象的一种，但又是极特殊的一种。</td>
</tr>
</tbody>
</table>
<h2 id="_3-定义变量" tabindex="-1"><a class="header-anchor" href="#_3-定义变量" aria-hidden="true">#</a> 3. 定义变量</h2>
<p>要在 JavaScript 中定义变量，需要使用 <strong>var</strong> 关键字，然后为变量指定一个名字。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> str1<span class="token punctuation">;</span>
<span class="token keyword">var</span> str2 <span class="token operator">=</span> <span class="token string">"hello world"</span><span class="token punctuation">;</span>
 
        Copied<span class="token operator">!</span>
    
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>JavaScript 是区分大小写的。这意味着 <code>HELLO</code> 、<code>hello</code>、<code>Hello</code> 并不相同。</p>
<p>作为动态语言，JavaScript 中变量的类型随着其所存储的数据的类型而变化。</p>
<p>JS 中的 <strong>基本数据类型</strong> 只有三种：<strong>数字</strong>、<strong>字符串</strong> 和 <strong>布尔值</strong> 。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> tmp1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> tmp2 <span class="token operator">=</span> <span class="token string">"hello world"</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> tmp3 <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
 
        Copied<span class="token operator">!</span>
    
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p>
<ul>
<li>JS 不区分 <strong>整数</strong> 和 <strong>浮点数</strong> 。</li>
<li>JS 中也没有 <strong>字符</strong> 类型。</li>
</ul>
</div>
<p>JavaScript 中数组变量的声明不需要 <code>[]</code> 符号，语法仍然是 <code>var 变量名;</code> 的形式，不过初始化还是 <code>= [xxx, xxx, xxx]</code> 的形式。</p>
<p>JavaScript 中多出一个 <strong>undefined</strong> 关键字，如果对一个变量从未赋过值，那么该变量的类型就是 undefined 类型。</p>
<p>JS 中多出一个判断运算符 <em><strong>===</strong></em>，它被称为『严格判等运算符』。还是因为变量类型的原因，JS 中允许出现两个变量 “类型不一样，但值一样” 的情况（这一点是 Java 中所没有的）。而严格判等运算符要求两个变量类型和值都必须一样。</p>
<p><code>注意</code> undefined 是派生自 null 的，因此 JavaScript 中对它们的相等性测试（==）会返回 true。常用的比较“套路”是结合 typeof 比较：<em><code>alert(typeof xx == typeof yy)</code></em></p>
<h2 id="_4-运算符" tabindex="-1"><a class="header-anchor" href="#_4-运算符" aria-hidden="true">#</a> 4. 运算符</h2>
<p>略</p>
<h2 id="_5-条件查询与布尔测试" tabindex="-1"><a class="header-anchor" href="#_5-条件查询与布尔测试" aria-hidden="true">#</a> 5. 条件查询与布尔测试</h2>
<p>条件执行是指程序在只有某些条件为真时，才执行一条语句。在 JavaScript 语言中，使用 <strong>if</strong> 语句进行条件执行。</p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>块语句（虽然看起来一大坨）也是一条语句！</p>
</div>
<p>if 语句的常规形式如下，其中 else 条件是可选的：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>布尔表达式<span class="token punctuation">)</span> 
  一条语句
<span class="token keyword">else</span>  
  一条语句
 
        Copied<span class="token operator">!</span>
    
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul>
<li>如果布尔表达式的值是真（true），那么第一条语句会被执行。如果布尔表达式的值是假（false），那么执行的就是第二条语句。</li>
</ul>
<p>另外，if 语句（无论是否有 else 部分）整体也算一条语句！</p>
<h2 id="_5-分支与循环" tabindex="-1"><a class="header-anchor" href="#_5-分支与循环" aria-hidden="true">#</a> 5. 分支与循环</h2>
<p>略</p>
<h2 id="_6-数组" tabindex="-1"><a class="header-anchor" href="#_6-数组" aria-hidden="true">#</a> 6. 数组</h2>
<p>本质上，JavaScript 没有所谓的『数组』，JavaScript 中的数组实际上就是一个对象。</p>
<p>每个数组都有一个 <strong>length</strong> 属性。和其他语言不一样，JavaScript 数组的 length 是没有上界的。</p>
<p>如果使用大于或等于 length 的数组作为下标，那么 length 将增大来容纳新元素。</p>
<p>你可以直接设置 length 的值。设置为更大的值时，系统无须给数组分配更多的空间。设置为更小的值时，所有下标大于或等于 length 的属性都被删除。</p>
<p>length 属性的值是数组最大下标加 1 。它不一定等于数组里元素的个数。</p>
<p>数组更多的内置方法参见官方 API 文档。</p>
<h2 id="_7-函数" tabindex="-1"><a class="header-anchor" href="#_7-函数" aria-hidden="true">#</a> 7. 函数</h2>
<p>函数的定义包括：<strong>function</strong> 关键字、描述函数用途的名字、包含在 () 中的 0 个和多个参数的列表，以及由一条或多条代码语句组成的块。</p>
<p>JavaScript 中函数和方法的声明不需要声明函数/方法返回值类型，形参中的 <strong>var</strong> 关键字也可以省略。</p>
<p>JavaScript 中函数/方法是“一等公民”可以对变量赋值，自然也可以作为参数和返回值。</p>
<p>没有名字的函数被称为匿名函数，常用于对变量的赋值。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"hello world"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
        Copied<span class="token operator">!</span>
    
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_8-变量的作用域" tabindex="-1"><a class="header-anchor" href="#_8-变量的作用域" aria-hidden="true">#</a> 8. 变量的作用域</h2>
<p>略</p>
</template>
