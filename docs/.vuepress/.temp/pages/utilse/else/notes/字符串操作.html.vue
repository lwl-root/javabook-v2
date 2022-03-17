<template><h1 id="字符串相关操作" tabindex="-1"><a class="header-anchor" href="#字符串相关操作" aria-hidden="true">#</a> 字符串相关操作</h1>
<p>下面的方法除了 1 个来自于 Java JDK 在 java.util 包下提供的 Objects 工具类，其它都来自于 Spring 框架在 <strong>org.springframework.util</strong> 包下提供了一个 <strong>StringUtils</strong> 工具类。</p>
<h2 id="_1-字符串判空" tabindex="-1"><a class="header-anchor" href="#_1-字符串判空" aria-hidden="true">#</a> 1. 字符串判空</h2>
<details class="custom-container details"><summary>是否为空（null）：isNull 方法</summary>
<Badge type="warning" text="注意" vertical="middle" /> isNull 方法来自于 JDK 自带的 <b>Objects</b> 工具类，而不是 Spring 的 StringUtils 。
<CodeGroup>
<CodeGroupItem title="声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Objects</span><span class="token punctuation">.</span>isNull<span class="token punctuation">;</span>

<span class="token keyword">boolean</span> <span class="token function">isNull</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>另外，下面的 isEmpty / hashLength / hashText 的判断规则中都涵盖了 is-null 的判断，无需再多加一个 is-null 的判断。</p>
</CodeGroupItem>
</CodeGroup>
</details>
<details class="custom-container details"><summary>是否为空（empty）：isEmpty / hasLength 方法</summary>
<p>isEmpty / hasLength 方法都来自 Spring 框架的 StringUtils 工具类。</p>
<p>isEmpty 和 hasLength 方法都能实现 empty 的判断。只要字符串是 <strong>非空</strong> 和 <strong>非空串</strong>，
哪怕其内容无意义（<small>尽是些空格和 tab</small>）， isEmpty 都会返回 false；hashLength 都会返回 true 。</p>
<CodeGroup>
<CodeGroupItem title="声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>isEmpty<span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>hasLength<span class="token punctuation">;</span>

<span class="token comment">// null 和 empty-string 会返回 true；否则返回 false 。</span>
<span class="token keyword">boolean</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token class-name">Object</span> str<span class="token punctuation">)</span>

<span class="token comment">// null 和 empty-string 和 blank-string 会返回 true；否则返回 false 。</span>
<span class="token keyword">boolean</span> <span class="token function">hasLength</span><span class="token punctuation">(</span><span class="token class-name">CharSequence</span> str<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="伪代码实例">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>   <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span>     <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span>    <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token string">"xxx"</span><span class="token punctuation">)</span>  <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token function">hasLength</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>   <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token function">hasLength</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span>     <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token function">hasLength</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span>    <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token function">hasLength</span><span class="token punctuation">(</span><span class="token string">"xxx"</span><span class="token punctuation">)</span>  <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<details class="custom-container details"><summary>是否为空（blank）：hasText 方法</summary>
<p>hasText 方法都来自 Spring 框架的 StringUtils 工具类。</p>
<p>hasText 方法的 “预期” 字符串中有实际的、有意义的内容，这种情况下它会返回 true 。</p>
<CodeGroup>
<CodeGroupItem title="声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>hasText<span class="token punctuation">;</span>

<span class="token keyword">boolean</span> <span class="token function">hasText</span><span class="token punctuation">(</span><span class="token class-name">CharSequence</span> str<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="伪代码实例">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">hasText</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>   <span class="token operator">=</span> <span class="token boolean">false</span>      
<span class="token function">hasText</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span>     <span class="token operator">=</span> <span class="token boolean">false</span>  
<span class="token function">hasText</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span>    <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token function">hasText</span><span class="token punctuation">(</span><span class="token string">"xxx"</span><span class="token punctuation">)</span>  <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<details class="custom-container details"><summary>判断字符串是否包含空白符：containsWhitespace 方法</summary>
<p>空白符指的是 <code>空格</code> 和 <code>tab</code> 。</p>
<p>containsWhitespace 方法都来自 Spring 框架的 StringUtils 工具类。</p>
<CodeGroup>
<CodeGroupItem title="声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>containsWhitespace<span class="token punctuation">;</span>

<span class="token keyword">boolean</span> <span class="token function">containsWhitespace</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="伪代码实例">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">containsWhitespace</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>    <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token function">containsWhitespace</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span>      <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token function">containsWhitespace</span><span class="token punctuation">(</span><span class="token string">"xxx"</span><span class="token punctuation">)</span>   <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token function">containsWhitespace</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span>     <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token function">containsWhitespace</span><span class="token punctuation">(</span><span class="token string">"xx yy"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token function">containsWhitespace</span><span class="token punctuation">(</span><span class="token string">" xxx"</span><span class="token punctuation">)</span>  <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token function">containsWhitespace</span><span class="token punctuation">(</span><span class="token string">"xxx "</span><span class="token punctuation">)</span>  <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<details class="custom-container details"><summary>判断字符串以 xxx 开始 / 结束：startsWithIgnoreClass / endsIgnoreCase 方法</summary>
<p>startsWithIgnoreCase / endsWithIgnoreCase 方法都来自 Spring 框架的 StringUtils 工具类。</p>
<p>顾名思义，它会忽略大小写。</p>
<CodeGroup>
<CodeGroupItem title="声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>startsWithIgnoreCase<span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>endsWithIgnoreCase<span class="token punctuation">;</span>

<span class="token keyword">boolean</span> <span class="token function">startsWithIgnoreCase</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">,</span> <span class="token class-name">String</span> prefix<span class="token punctuation">)</span> 

<span class="token keyword">boolean</span> <span class="token function">endsWithIgnoreCase</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">,</span> <span class="token class-name">String</span> suffix<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="伪代码实例">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">startsWithIgnoreCase</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span>        <span class="token string">"hello"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token function">startsWithIgnoreCase</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">,</span>          <span class="token string">"hello"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token function">startsWithIgnoreCase</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">,</span>         <span class="token string">"hello"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token function">startsWithIgnoreCase</span><span class="token punctuation">(</span><span class="token string">"hello.txt"</span><span class="token punctuation">,</span> <span class="token string">"hello"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token function">startsWithIgnoreCase</span><span class="token punctuation">(</span><span class="token string">"hello.txt"</span><span class="token punctuation">,</span> <span class="token string">"HELLO"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token function">startsWithIgnoreCase</span><span class="token punctuation">(</span><span class="token string">"HELLO.txt"</span><span class="token punctuation">,</span> <span class="token string">"hello"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token function">endsWithIgnoreCase</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span>      <span class="token string">".txt"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token function">endsWithIgnoreCase</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">,</span>        <span class="token string">".txt"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token function">endsWithIgnoreCase</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">,</span>       <span class="token string">".txt"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token function">endsWithIgnoreCase</span><span class="token punctuation">(</span><span class="token string">"xxx.txt"</span><span class="token punctuation">,</span> <span class="token string">".txt"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token function">endsWithIgnoreCase</span><span class="token punctuation">(</span><span class="token string">"xxx.txt"</span><span class="token punctuation">,</span> <span class="token string">".TXT"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token function">endsWithIgnoreCase</span><span class="token punctuation">(</span><span class="token string">"xxx.TXT"</span><span class="token punctuation">,</span> <span class="token string">".txt"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<details class="custom-container details"><summary>判断字符串以 xxx 开始 / 结束 / 包含：PatternMatchUtils 类</summary>
<p>PatternMatchUtils 类来自 org.springframework.util 包 。</p>
<p>它用于进行简单地正则匹配。判断规则有：<code>xxx*</code> 、<code>*xxx</code> 、<code>*xxx*</code> 和 <code>xxx*yyy</code> 。<code>*</code> 通配任意个字符。例如：<code>hello*</code> 、<code>*hello</code> 、<code>*hello*</code> 和 <code>hello*world</code> 。</p>
<Badge type="warning" text="注意" vertical="middle" />下述方法的参数中，正则规则字符串在前。
<CodeGroup>
<CodeGroupItem title="声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">PatternMatchUtils</span><span class="token punctuation">.</span>simpleMatch<span class="token punctuation">;</span>

<span class="token comment">// 判断字符串是否符合规则。</span>
<span class="token keyword">boolean</span> <span class="token function">simpleMatch</span><span class="token punctuation">(</span><span class="token class-name">String</span> pattern<span class="token punctuation">,</span> <span class="token class-name">String</span> str<span class="token punctuation">)</span> 

<span class="token comment">// 判断字符串是否同时满足多个规则。</span>
<span class="token keyword">boolean</span> <span class="token function">simpleMatch</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> patterns<span class="token punctuation">,</span> <span class="token class-name">String</span> str<span class="token punctuation">)</span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="伪代码实例">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">PatternMatchUtils</span><span class="token punctuation">.</span><span class="token function">simpleMatch</span><span class="token punctuation">(</span><span class="token string">"hello*"</span><span class="token punctuation">,</span> <span class="token string">"hello world"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token class-name">PatternMatchUtils</span><span class="token punctuation">.</span><span class="token function">simpleMatch</span><span class="token punctuation">(</span><span class="token string">"*hello"</span><span class="token punctuation">,</span> <span class="token string">"hello world"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token class-name">PatternMatchUtils</span><span class="token punctuation">.</span><span class="token function">simpleMatch</span><span class="token punctuation">(</span><span class="token string">"*hello*"</span><span class="token punctuation">,</span> <span class="token string">"hello world"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token class-name">PatternMatchUtils</span><span class="token punctuation">.</span><span class="token function">simpleMatch</span><span class="token punctuation">(</span><span class="token string">"hello*world"</span><span class="token punctuation">,</span> <span class="token string">"hello world"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<h2 id="_2-子串的查询、摘出与统计" tabindex="-1"><a class="header-anchor" href="#_2-子串的查询、摘出与统计" aria-hidden="true">#</a> 2. 子串的查询、摘出与统计</h2>
<details class="custom-container details"><summary>判断字符串指定位置是否包含 xxx：substringMatch 方法</summary>
<p>substringMatch 方法都来自 Spring 框架的 StringUtils 工具类。</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>substringMatch<span class="token punctuation">;</span>

<span class="token comment">// index 从 0 开始。</span>
<span class="token keyword">boolean</span> <span class="token function">substringMatch</span><span class="token punctuation">(</span><span class="token class-name">CharSequence</span> str<span class="token punctuation">,</span> <span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token class-name">CharSequence</span> substring<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="伪代码实例">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// index 从 0 开始。</span>
<span class="token function">substringMatch</span><span class="token punctuation">(</span><span class="token string">"hello world"</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">"world"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token function">substringMatch</span><span class="token punctuation">(</span><span class="token string">"hello world"</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">"world"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token function">substringMatch</span><span class="token punctuation">(</span><span class="token string">"hello world"</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">"world"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token function">substringMatch</span><span class="token punctuation">(</span><span class="token string">"hello world"</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span>    <span class="token operator">=</span> <span class="token class-name">NPE</span>
<span class="token function">substringMatch</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span>          <span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">"world"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token class-name">NPE</span>
<span class="token function">substringMatch</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span>          <span class="token number">7</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span>    <span class="token operator">=</span> NPE
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<details class="custom-container details"><summary>获取最后一部分：unqualify 方法</summary>
<p>unqualify 方法都来自 Spring 框架的 StringUtils 工具类。</p>
<p>获取最后一个 “点” 之后的内容。</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>unqualify<span class="token punctuation">;</span>

<span class="token class-name">String</span> <span class="token function">unqualify</span><span class="token punctuation">(</span><span class="token class-name">String</span> qualifiedName<span class="token punctuation">)</span>

<span class="token comment">// 同上。可指定分隔符</span>
<span class="token class-name">String</span> <span class="token function">unqualify</span><span class="token punctuation">(</span><span class="token class-name">String</span> qualifiedName<span class="token punctuation">,</span> <span class="token keyword">char</span> separator<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="伪代码实例">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// index 从 0 开始。</span>
<span class="token function">unqualify</span><span class="token punctuation">(</span><span class="token string">"this.name.is.qualified"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">"qualified"</span>

<span class="token function">unqualify</span><span class="token punctuation">(</span><span class="token string">"this,name,is,qualified"</span><span class="token punctuation">,</span> <span class="token char">','</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">"qualified"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<details class="custom-container details"><summary>统计 xxx 在字符串中出现次数：countOccurrencesOf 方法</summary>
<p>countOccurrencesOf 方法都来自 Spring 框架的 StringUtils 工具类。</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>countOccurrencesOf<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">countOccurrencesOf</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">,</span> <span class="token class-name">String</span> sub<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="伪代码实例">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">countOccurrencesOf</span><span class="token punctuation">(</span><span class="token string">"tom tommy"</span><span class="token punctuation">,</span> <span class="token string">"om"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">2</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<h2 id="_3-子串的摘除与替换" tabindex="-1"><a class="header-anchor" href="#_3-子串的摘除与替换" aria-hidden="true">#</a> 3. 子串的摘除与替换</h2>
<details class="custom-container details"><summary>去除空白符</summary>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>trimLeadingWhitespace<span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>trimTrailingWhitespace<span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>trimWhitespace<span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>trimAllWhitespace<span class="token punctuation">;</span>

<span class="token class-name">String</span> <span class="token function">trimWhitespace</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span>         <span class="token comment">// 头尾同去</span>
<span class="token class-name">String</span> <span class="token function">trimAllWhitespace</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span>      <span class="token comment">// 头尾和中间同去</span>
<span class="token class-name">String</span> <span class="token function">trimLeadingWhitespace</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span>  <span class="token comment">// 去头部空白符</span>
<span class="token class-name">String</span> <span class="token function">trimTrailingWhitespace</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token comment">// 去尾部空白符</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="伪代码实例">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">trimWhitespace</span><span class="token punctuation">(</span><span class="token string">"  hello  "</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">"hello"</span>

<span class="token function">trimAllWhitespace</span><span class="token punctuation">(</span><span class="token string">"  hello  world  "</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">"helloworld"</span>

<span class="token function">trimLeadingWhitespace</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span>  <span class="token operator">=</span> <span class="token string">"hello"</span>
<span class="token function">trimLeadingWhitespace</span><span class="token punctuation">(</span><span class="token string">"  hello"</span><span class="token punctuation">)</span><span class="token operator">=</span> <span class="token string">"hello"</span>
<span class="token function">trimLeadingWhitespace</span><span class="token punctuation">(</span><span class="token string">"  "</span><span class="token punctuation">)</span>     <span class="token operator">=</span> <span class="token string">""</span>
<span class="token function">trimLeadingWhitespace</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span>       <span class="token operator">=</span> <span class="token string">""</span>
<span class="token function">trimLeadingWhitespace</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>     <span class="token operator">=</span> <span class="token keyword">null</span>

<span class="token function">trimTrailingWhitespace</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span>   <span class="token operator">=</span> <span class="token string">"hello"</span>
<span class="token function">trimTrailingWhitespace</span><span class="token punctuation">(</span><span class="token string">"hello  "</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">"hello"</span>
<span class="token function">trimTrailingWhitespace</span><span class="token punctuation">(</span><span class="token string">"  "</span><span class="token punctuation">)</span>      <span class="token operator">=</span> <span class="token string">""</span>
<span class="token function">trimTrailingWhitespace</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span>        <span class="token operator">=</span> <span class="token string">""</span>
<span class="token function">trimTrailingWhitespace</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>      <span class="token operator">=</span> <span class="token keyword">null</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<details class="custom-container details"><summary>去除开头、结尾和中间的空白符：trimAllWhitespace 方法</summary>
<p>trimAllWhitespace 方法都来自 Spring 框架的 StringUtils 工具类。</p>
</details>
<details class="custom-container details"><summary>去除指定字符</summary>
<Badge type="warning" text="注意" vertical="middle" />这里去除、删除的是字符，而不是子串。
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>trimLeadingCharacter<span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>trimTrailingCharacter<span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>deleteAny<span class="token punctuation">;</span>

<span class="token class-name">String</span> <span class="token function">deleteAny</span><span class="token punctuation">(</span><span class="token class-name">String</span> inString<span class="token punctuation">,</span> <span class="token class-name">String</span> charsToDelete<span class="token punctuation">)</span> <span class="token comment">// 批量指定待删除字符</span>

<span class="token class-name">String</span> <span class="token function">trimLeadingCharacter</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">,</span> <span class="token keyword">char</span> leadingCharacter<span class="token punctuation">)</span>  <span class="token comment">// 只删头部的</span>
<span class="token class-name">String</span> <span class="token function">trimTrailingCharacter</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">,</span> <span class="token keyword">char</span> trailingCharacter<span class="token punctuation">)</span><span class="token comment">// 只删尾部的</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="伪代码实例">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">deleteAny</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">,</span> <span class="token string">"hl"</span><span class="token punctuation">)</span>            <span class="token operator">=</span> <span class="token string">"eo"</span>

<span class="token function">trimLeadingCharacter</span><span class="token punctuation">(</span><span class="token string">"hhello"</span><span class="token punctuation">,</span> <span class="token char">'h'</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">"ello"</span>
<span class="token function">trimLeadingCharacter</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">,</span> <span class="token char">'h'</span><span class="token punctuation">)</span>  <span class="token operator">=</span> <span class="token string">"ello"</span>
<span class="token function">trimLeadingCharacter</span><span class="token punctuation">(</span><span class="token string">"world"</span><span class="token punctuation">,</span> <span class="token char">'h'</span><span class="token punctuation">)</span>  <span class="token operator">=</span> <span class="token string">"world"</span>
<span class="token function">trimLeadingCharacter</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">,</span> <span class="token char">'h'</span><span class="token punctuation">)</span>       <span class="token operator">=</span> <span class="token string">""</span>
<span class="token function">trimLeadingCharacter</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token char">'h'</span><span class="token punctuation">)</span>     <span class="token operator">=</span> <span class="token keyword">null</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<details class="custom-container details"><summary>去除指定子串：delete 方法</summary>
<p>delete 方法都来自 Spring 框架的 StringUtils 工具类。</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>delete<span class="token punctuation">;</span>

<span class="token class-name">String</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token class-name">String</span> inString<span class="token punctuation">,</span> <span class="token class-name">String</span> pattern<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="伪代码实例">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">,</span> <span class="token string">"el"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">"hlo"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<details class="custom-container details"><summary>替换指定内容：replace 方法</summary>
<p>replace 方法都来自 Spring 框架的 StringUtils 工具类。</p>
<p>查找并替换指定子串</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>replace<span class="token punctuation">;</span>

<span class="token class-name">String</span> <span class="token function">replace</span><span class="token punctuation">(</span><span class="token class-name">String</span> inString<span class="token punctuation">,</span> <span class="token class-name">String</span> oldPattern<span class="token punctuation">,</span> <span class="token class-name">String</span> newPattern<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="伪代码实例">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">,</span> <span class="token string">"el"</span><span class="token punctuation">,</span> <span class="token string">"EL"</span><span class="token punctuation">)</span>  <span class="token operator">=</span> <span class="token string">"hELlo"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<h2 id="_4-为了-io" tabindex="-1"><a class="header-anchor" href="#_4-为了-io" aria-hidden="true">#</a> 4. 为了 IO</h2>
<details class="custom-container details"><summary>比较两个路径字符串：pathEquals 方法</summary>
<p>pathEquals 方法都来自 Spring 框架的 StringUtils 工具类。</p>
<p>会自动处理路径字符串中的 “..” 。</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>pathEquals<span class="token punctuation">;</span>

<span class="token comment">// 大小写敏感。</span>
<span class="token keyword">boolean</span> <span class="token function">pathEquals</span><span class="token punctuation">(</span><span class="token class-name">String</span> path1<span class="token punctuation">,</span> <span class="token class-name">String</span> path2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="伪代码实例">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">pathEquals</span><span class="token punctuation">(</span><span class="token string">"c:/xxx/yyy/zzz"</span><span class="token punctuation">,</span> <span class="token string">"c:/xxx/hello/../yyy/zzz"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token function">pathEquals</span><span class="token punctuation">(</span><span class="token string">"c:/xxx/yyy/zzz"</span><span class="token punctuation">,</span> <span class="token string">"C:/xxx/hello/../yyy/zzz"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<details class="custom-container details"><summary>获得 “紧凑” 的路径字符串：cleanPath 方法</summary>
<p>cleanPath 方法都来自 Spring 框架的 StringUtils 工具类。</p>
<p>会优化掉路径字符串中的 “..” 。</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>cleanPath<span class="token punctuation">;</span>

<span class="token class-name">String</span> <span class="token function">cleanPath</span><span class="token punctuation">(</span><span class="token class-name">String</span> path<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="伪代码实例">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">cleanPath</span><span class="token punctuation">(</span><span class="token string">"c:/xxx/hello/../yyy/zzz"</span><span class="token punctuation">)</span>  <span class="token operator">=</span> <span class="token string">"c:/xxx/yyy/zzz"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<details class="custom-container details"><summary>获得文件名：getFilename 方法</summary>
<p>getFilename 方法都来自 Spring 框架的 StringUtils 工具类。</p>
<p>获得文件名，即去掉文件的路径。</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>getFilename<span class="token punctuation">;</span>

<span class="token class-name">String</span> <span class="token function">getFilename</span><span class="token punctuation">(</span><span class="token class-name">String</span> path<span class="token punctuation">)</span> <span class="token comment">// 返回的文件名中会含有后缀。</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="伪代码实例">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">getFilename</span><span class="token punctuation">(</span><span class="token string">"c:/xxx/hello/../yyy/zzz/world.txt"</span><span class="token punctuation">)</span>  <span class="token operator">=</span> <span class="token string">"world.txt"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<details class="custom-container details"><summary>获得文件后缀：getFilenameExtendsion 方法</summary>
<p>getFilenameExtension 方法都来自 Spring 框架的 StringUtils 工具类。</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>getFilenameExtension<span class="token punctuation">;</span>

<span class="token class-name">String</span> <span class="token function">getFilenameExtension</span><span class="token punctuation">(</span><span class="token class-name">String</span> path<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="伪代码实例">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">getFilenameExtension</span><span class="token punctuation">(</span><span class="token string">"c:/xxx/hello/../yyy/zzz/world.txt"</span><span class="token punctuation">)</span>  <span class="token operator">=</span> <span class="token string">".txt"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<details class="custom-container details"><summary>获得无后缀文件路径：stripFilenameExtension 方法</summary>
<p>stripFilenameExtension 方法都来自 Spring 框架的 StringUtils 工具类。</p>
<p>删除文件路径名中的后缀部分，返回一个无后缀的路径字符串。</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>stripFilenameExtension<span class="token punctuation">;</span>

<span class="token class-name">String</span> <span class="token function">stripFilenameExtension</span><span class="token punctuation">(</span><span class="token class-name">String</span> path<span class="token punctuation">)</span> <span class="token comment">// 如果路径中有 “..” ，它不会被优化掉。</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="伪代码实例">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">stripFilenameExtension</span><span class="token punctuation">(</span><span class="token string">"c:/xxx/hello/../yyy/zzz/world.txt"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">"c:/xxx/hello/../yyy/zzz/world"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<h2 id="_5-string-转数组集合" tabindex="-1"><a class="header-anchor" href="#_5-string-转数组集合" aria-hidden="true">#</a> 5. String 转数组集合</h2>
<details class="custom-container details"><summary>String 转数组，以逗号分隔：commaDelimitedListToStringArray 方法</summary>
<p>commaDelimitedListToStringArray 方法都来自 Spring 框架的 StringUtils 工具类。</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>commaDelimitedListToStringArray<span class="token punctuation">;</span>

<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">commaDelimitedListToStringArray</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="伪代码实例">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">commaDelimitedListToStringArray</span><span class="token punctuation">(</span><span class="token string">"xxx,yyy,zzz"</span><span class="token punctuation">)</span>    <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token string">"yyy"</span><span class="token punctuation">,</span> <span class="token string">"zzz"</span><span class="token punctuation">]</span>
<span class="token function">commaDelimitedListToStringArray</span><span class="token punctuation">(</span><span class="token string">"xxx, yyy, zzz"</span><span class="token punctuation">)</span>  <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token string">" yyy"</span><span class="token punctuation">,</span> <span class="token string">" zzz"</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<details class="custom-container details"><summary>String 转数组，自定义分隔符：split / delimitedListToStringArray / tokenizeToStringArray 方法</summary>
<p>split / delimitedListToStringArray / tokenizeToStringArray 方法都来自 Spring 框架的 StringUtils 工具类。</p>
<p>以第二个参数 delimiter 进行切割</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>split<span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>delimitedListToStringArray<span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>tokenizeToStringArray<span class="token punctuation">;</span>

<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">split</span><span class="token punctuation">(</span><span class="token class-name">String</span> toSplit<span class="token punctuation">,</span> <span class="token class-name">String</span> delimiter<span class="token punctuation">)</span>  <span class="token comment">// 最多只切成 2 份！即结果数组长度为 2 </span>
<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">delimitedListToStringArray</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">,</span> <span class="token class-name">String</span> delimiter<span class="token punctuation">)</span>
<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">tokenizeToStringArray</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">,</span> <span class="token class-name">String</span> delimiters<span class="token punctuation">)</span> <span class="token comment">// 可以指定多个分隔符 </span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="伪代码实例">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"xxx,yyy,zzz"</span><span class="token punctuation">,</span> <span class="token string">","</span><span class="token punctuation">)</span>     <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token string">"yyy,zzz"</span><span class="token punctuation">]</span>
<span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"xxx, yyy, zzz"</span><span class="token punctuation">,</span> <span class="token string">","</span><span class="token punctuation">)</span>   <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token string">" yyy, zzz"</span><span class="token punctuation">]</span>
<span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"xxx, yyy, zzz"</span><span class="token punctuation">,</span> <span class="token string">", "</span><span class="token punctuation">)</span>  <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token string">"yyy, zzz"</span><span class="token punctuation">]</span>
  
<span class="token function">delimitedListToStringArray</span><span class="token punctuation">(</span><span class="token string">"xxx,yyy,zzz"</span><span class="token punctuation">,</span> <span class="token string">","</span><span class="token punctuation">)</span>    <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token string">"yyy"</span><span class="token punctuation">,</span> <span class="token string">"zzz"</span><span class="token punctuation">]</span>
<span class="token function">delimitedListToStringArray</span><span class="token punctuation">(</span><span class="token string">"xxx, yyy, zzz"</span><span class="token punctuation">,</span> <span class="token string">", "</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token string">"yyy"</span><span class="token punctuation">,</span> <span class="token string">"zzz"</span><span class="token punctuation">]</span>

<span class="token function">tokenizeToStringArray</span><span class="token punctuation">(</span><span class="token string">"xxx,yyy:zzz"</span><span class="token punctuation">,</span> <span class="token string">",:"</span><span class="token punctuation">)</span>  <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token string">"yyy"</span><span class="token punctuation">,</span> <span class="token string">"zzz"</span><span class="token punctuation">]</span>
<span class="token function">tokenizeToStringArray</span><span class="token punctuation">(</span><span class="token string">"xxx, yyy, zzz"</span><span class="token punctuation">,</span> <span class="token string">", "</span><span class="token punctuation">)</span><span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token string">"yyy"</span><span class="token punctuation">,</span> <span class="token string">"zzz"</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<details class="custom-container details"><summary>String 转 Set，以逗号分隔：commaDelimitedListToSet 方法</summary>
<p>commaDelimitedListToSet 方法来自 Spring 框架的 StringUtils 工具类。</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>commaDelimitedListToSet<span class="token punctuation">;</span>

<span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> <span class="token function">commaDelimitedListToSet</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="伪代码实例">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">commaDelimitedListToSet</span><span class="token punctuation">(</span><span class="token string">"xxx,yyy,zzz"</span><span class="token punctuation">)</span>  <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token string">"yyy"</span><span class="token punctuation">,</span> <span class="token string">"zzz"</span><span class="token punctuation">]</span>
<span class="token function">commaDelimitedListToSet</span><span class="token punctuation">(</span><span class="token string">"xxx, yyy, zzz"</span><span class="token punctuation">)</span><span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token string">" yyy"</span><span class="token punctuation">,</span> <span class="token string">" zzz"</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<h2 id="_6-数组集合转-string" tabindex="-1"><a class="header-anchor" href="#_6-数组集合转-string" aria-hidden="true">#</a> 6. 数组集合转 String</h2>
<details class="custom-container details"><summary>数组转 String，字符串以特定或指定分隔符分隔</summary>
<p>如果参数类型是 “非 String[]” 类型，这里会隐式地调用它的各个元素的 toString 方法，后再拼接。</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>arrayToCommaDelimitedString<span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>arrayToDelimitedString<span class="token punctuation">;</span>

<span class="token class-name">String</span> <span class="token function">arrayToCommaDelimitedString</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span>
<span class="token class-name">String</span> <span class="token function">arrayToDelimitedString</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span> <span class="token class-name">String</span> delim<span class="token punctuation">)</span> <span class="token comment">// 以第二个参数（delim）作为分隔符。</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="伪代码实例">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">arrayToCommaDelimitedString</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token string">"yyy"</span><span class="token punctuation">,</span> <span class="token string">"zzz"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">=</span> <span class="token string">"xxx,yyy,zzz"</span>
<span class="token function">arrayToCommaDelimitedString</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">"zzz"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token operator">=</span> <span class="token string">"xxx, , zzz"</span>
<span class="token function">arrayToCommaDelimitedString</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">"zzz"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>   <span class="token operator">=</span> <span class="token string">"xxx,,zzz"</span>
<span class="token function">arrayToCommaDelimitedString</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"hello"</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">"goodbye"</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">"xxx,null,zzz"</span>


arrayTo<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token string">"yyy"</span><span class="token punctuation">,</span> <span class="token string">"zzz"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">":"</span><span class="token punctuation">)</span><span class="token operator">=</span> <span class="token string">"xxx:yyy:zzz"</span>
arrayTo<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">"zzz"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">":"</span><span class="token punctuation">)</span>  <span class="token operator">=</span> <span class="token string">"xxx: : zzz"</span>
arrayTo<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">"zzz"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">":"</span><span class="token punctuation">)</span>   <span class="token operator">=</span> <span class="token string">"xxx::zzz"</span>
arrayTo<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">"zzz"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">":"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">"xxx:null:zzz"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<details class="custom-container details"><summary>集合转 String，String 以特定或指定分隔符分隔</summary>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>collectionToCommaDelimitedString<span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>collectionToDelimitedString<span class="token punctuation">;</span>

<span class="token class-name">String</span> <span class="token function">collectionToCommaDelimitedString</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> coll<span class="token punctuation">)</span> 
<span class="token class-name">String</span> <span class="token function">collectionToDelimitedString</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> coll<span class="token punctuation">,</span> <span class="token class-name">String</span> delim<span class="token punctuation">)</span> <span class="token comment">// 第 2 个参数指定分隔符</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="伪代码实例">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>collectionTo<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">"zzz"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token operator">=</span> <span class="token string">"xxx, ,zzz"</span>
collectionTo<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">"zzz"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>   <span class="token operator">=</span> <span class="token string">"xxx,,zzz"</span>
collectionTo<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">"zzz"</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">"xxx,null,zzz"</span>

collectionTo<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token string">"yyy"</span><span class="token punctuation">,</span> <span class="token string">"zzz"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">":"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">"xxx:yyy:zzz"</span>
collectionTo<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">"zzz"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>   <span class="token string">":"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">"xxx: :zzz"</span>
collectionTo<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token string">"zzz"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>    <span class="token string">":"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">"xxx::zzz"</span>
collectionTo<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">"zzz"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  <span class="token string">":"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">"xxx:null:zzz"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<h2 id="_7-collection-string-转-string" tabindex="-1"><a class="header-anchor" href="#_7-collection-string-转-string" aria-hidden="true">#</a> 7. <code>Collection&lt;String&gt;</code> 转 <code>String[]</code></h2>
<details class="custom-container details"><summary>toStringArray 方法</summary>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>toStringArray<span class="token punctuation">;</span>

<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">toStringArray</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> collection<span class="token punctuation">)</span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="伪代码实例">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">toStringArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token string">"yyy"</span><span class="token punctuation">,</span> <span class="token string">"zzz"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>   <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token string">"yyy"</span><span class="token punctuation">,</span> <span class="token string">"zzz"</span><span class="token punctuation">]</span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<h2 id="_8-转其它" tabindex="-1"><a class="header-anchor" href="#_8-转其它" aria-hidden="true">#</a> 8. 转其它</h2>
<details class="custom-container details"><summary>字符串转 TimeZone：parseTimeZoneString 方法</summary>
<p>parseTimeZoneString 方法都来自 Spring 框架的 StringUtils 工具类。</p>
<p>通过解析时区字符串生成时区对象（TimeZone）。</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>parseTimeZoneString<span class="token punctuation">;</span>

<span class="token class-name">TimeZone</span> <span class="token function">parseTimeZoneString</span><span class="token punctuation">(</span><span class="token class-name">String</span> timeZoneString<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
</CodeGroup>
常见 TimeZone 字符串见最后。
</details>
<details class="custom-container details"><summary>字符串数组转 Properties：splitArrayElementsIntoProperties 方法</summary>
<p>splitArrayElementsIntoProperties 方法都来自 Spring 框架的 StringUtils 工具类。</p>
<p>将字符串数组中的每一项，按照指定分隔符进行切分，并生成 Properties 对象。</p>
<p>字符串数组中的元素的内容类似于 &quot;key1,value1&quot;</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>splitArrayElementsIntoProperties<span class="token punctuation">;</span>

<span class="token class-name">Properties</span> <span class="token function">splitArrayElementsIntoProperties</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">,</span> <span class="token class-name">String</span> delimiter<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="伪代码实例">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">splitArrayElementsIntoProperties</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string">"key1,value1"</span><span class="token punctuation">,</span> 
    <span class="token string">"key2,value2"</span><span class="token punctuation">,</span> 
    <span class="token string">"key3,value3"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span> 
  <span class="token string">","</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<h2 id="_9-操作字符串数组" tabindex="-1"><a class="header-anchor" href="#_9-操作字符串数组" aria-hidden="true">#</a> 9. 操作字符串数组</h2>
<details class="custom-container details"><summary>对数组的每一项执行 trim：trimArrayElements 方法</summary>
<p>trimArrayElements 方法都来自 Spring 框架的 StringUtils 工具类。</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>trimArrayElements<span class="token punctuation">;</span>

<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">trimArrayElements</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">)</span> <span class="token comment">// 返回新数组</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="伪代码实例">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">trimArrayElements</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"xxx "</span><span class="token punctuation">,</span> <span class="token string">" yyy"</span><span class="token punctuation">,</span> <span class="token string">" zzz "</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token string">"yyy"</span><span class="token punctuation">,</span> <span class="token string">"zzz"</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<details class="custom-container details"><summary>字符串数组后追加内容：addStringToArray 方法</summary>
<p>addStringToArray 方法都来自 Spring 框架的 StringUtils 工具类。</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>addStringToArray<span class="token punctuation">;</span>

<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">addStringToArray</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">,</span> <span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token comment">// 返回新数组</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="伪代码实例">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>add<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token string">"yyy"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">"zzz"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token string">"yyy"</span><span class="token punctuation">,</span> <span class="token string">"zzz"</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<details class="custom-container details"><summary>字符串数组二合一：concatenateStringArrays / mergeStringArrays 方法</summary>
<p>concatenateStringArrays / mergeStringArrays 方法都来自 Spring 框架的 StringUtils 工具类。</p>
<ul>
<li>
<p>返回新数组；</p>
</li>
<li>
<p>concatenateStringArrays：两个数组中有重复的元素，那么，在合并后的新数组中，它也会重复出现；</p>
</li>
<li>
<p>mergeStringArrays：不同于 concatenateStringArrays ，它能去重。</p>
</li>
</ul>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>concatenateStringArrays<span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>mergeStringArrays<span class="token punctuation">;</span>

<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">concatenateStringArrays</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array1<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array2<span class="token punctuation">)</span> 

<span class="token comment">// 被废弃，建议通过 LinkedHashSet 手动合并两个字符串。</span>
<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">mergeStringArrays</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array1<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array2<span class="token punctuation">)</span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="伪代码实例">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>concatenate<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token string">"yyy"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">"yyy"</span><span class="token punctuation">,</span> <span class="token string">"zzz"</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token string">"yyy"</span><span class="token punctuation">,</span> <span class="token string">"yyy"</span><span class="token punctuation">,</span> <span class="token string">"zzz"</span><span class="token punctuation">]</span>

merge<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token string">"yyy"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">"yyy"</span><span class="token punctuation">,</span> <span class="token string">"zzz"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>       <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token string">"yyy"</span><span class="token punctuation">,</span> <span class="token string">"zzz"</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<details class="custom-container details"><summary>字符串数组去重：removeDuplicateStrings 方法</summary>
<p>removeDuplicateStrings 方法都来自 Spring 框架的 StringUtils 工具类。</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>removeDuplicateStrings<span class="token punctuation">;</span>

<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">removeDuplicateStrings</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">)</span> <span class="token comment">// 返回新字符串数组</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="伪代码实例">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>remove<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token string">"yyy"</span><span class="token punctuation">,</span> <span class="token string">"yyy"</span><span class="token punctuation">,</span> <span class="token string">"zzz"</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"xxx"</span><span class="token punctuation">,</span> <span class="token string">"yyy"</span><span class="token punctuation">,</span> <span class="token string">"zzz"</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<details class="custom-container details"><summary>字符串数组排序：sortStringArray 方法</summary>
<p>sortStringArray 方法都来自 Spring 框架的 StringUtils 工具类。</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span>sortStringArray<span class="token punctuation">;</span>

<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">sortStringArray</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">)</span> <span class="token comment">// 返回排序后的新数组</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="伪代码实例">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>sort<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"hello"</span><span class="token punctuation">,</span> <span class="token string">"world"</span><span class="token punctuation">,</span> <span class="token string">"goodbye"</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"goodbye"</span><span class="token punctuation">,</span> <span class="token string">"hello"</span><span class="token punctuation">,</span> <span class="token string">"world"</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<h2 id="a-附-timezone-string" tabindex="-1"><a class="header-anchor" href="#a-附-timezone-string" aria-hidden="true">#</a> a. 附：TimeZone String</h2>
<details class="custom-container details"><summary>点击查看列表</summary>
<table>
<thead>
<tr>
<th style="text-align:right">TimeZone</th>
<th style="text-align:left">地点</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right">&quot;Asia/Shanghai&quot;</td>
<td style="text-align:left">中国标准时间 (北京)</td>
</tr>
<tr>
<td style="text-align:right">&quot;Asia/Hong_Kong&quot;</td>
<td style="text-align:left">香港时间 (香港)</td>
</tr>
<tr>
<td style="text-align:right">&quot;Asia/Taipei&quot;</td>
<td style="text-align:left">台北时间 (台北)</td>
</tr>
<tr>
<td style="text-align:right">&quot;Asia/Seoul&quot;</td>
<td style="text-align:left">首尔</td>
</tr>
<tr>
<td style="text-align:right">&quot;Asia/Tokyo&quot;</td>
<td style="text-align:left">日本时间 (东京)</td>
</tr>
<tr>
<td style="text-align:right">&quot;America/New_York&quot;</td>
<td style="text-align:left">美国东部时间 (纽约)</td>
</tr>
<tr>
<td style="text-align:right">&quot;America/Denver&quot;</td>
<td style="text-align:left">美国山区时间 (丹佛)</td>
</tr>
<tr>
<td style="text-align:right">&quot;America/Costa_Rica&quot;</td>
<td style="text-align:left">美国中部时间 (哥斯达黎加)</td>
</tr>
<tr>
<td style="text-align:right">&quot;America/Chicago&quot;</td>
<td style="text-align:left">美国中部时间 (芝加哥)</td>
</tr>
<tr>
<td style="text-align:right">&quot;America/Mexico_City&quot;</td>
<td style="text-align:left">美国中部时间 (墨西哥城)</td>
</tr>
<tr>
<td style="text-align:right">&quot;America/Regina&quot;</td>
<td style="text-align:left">美国中部时间 (里贾纳)</td>
</tr>
<tr>
<td style="text-align:right">&quot;America/Los_Angeles&quot;</td>
<td style="text-align:left">美国太平洋时间 (洛杉矶)</td>
</tr>
<tr>
<td style="text-align:right">&quot;Pacific/Majuro&quot;</td>
<td style="text-align:left">马朱罗</td>
</tr>
<tr>
<td style="text-align:right">&quot;Pacific/Midway&quot;</td>
<td style="text-align:left">中途岛</td>
</tr>
<tr>
<td style="text-align:right">&quot;Pacific/Honolulu&quot;</td>
<td style="text-align:left">檀香山</td>
</tr>
<tr>
<td style="text-align:right">&quot;America/Anchorage&quot;</td>
<td style="text-align:left">安克雷奇</td>
</tr>
<tr>
<td style="text-align:right">&quot;America/Tijuana&quot;</td>
<td style="text-align:left">美国太平洋时间 (提华纳)</td>
</tr>
<tr>
<td style="text-align:right">&quot;America/Phoenix&quot;</td>
<td style="text-align:left">美国山区时间 (凤凰城)</td>
</tr>
<tr>
<td style="text-align:right">&quot;America/Chihuahua&quot;</td>
<td style="text-align:left">奇瓦瓦</td>
</tr>
<tr>
<td style="text-align:right">&quot;America/Bogota&quot;</td>
<td style="text-align:left">哥伦比亚时间 (波哥大)</td>
</tr>
<tr>
<td style="text-align:right">&quot;America/Caracas&quot;</td>
<td style="text-align:left">委内瑞拉时间 (加拉加斯)</td>
</tr>
<tr>
<td style="text-align:right">&quot;America/Barbados&quot;</td>
<td style="text-align:left">大西洋时间 (巴巴多斯)</td>
</tr>
<tr>
<td style="text-align:right">&quot;America/Manaus&quot;</td>
<td style="text-align:left">亚马逊标准时间 (马瑙斯)</td>
</tr>
<tr>
<td style="text-align:right">&quot;America/St_Johns&quot;</td>
<td style="text-align:left">纽芬兰时间 (圣约翰)</td>
</tr>
<tr>
<td style="text-align:right">&quot;America/Santiago&quot;</td>
<td style="text-align:left">圣地亚哥</td>
</tr>
<tr>
<td style="text-align:right">&quot;America/Argentina/Buenos_Aires&quot;</td>
<td style="text-align:left">布宜诺斯艾利斯</td>
</tr>
<tr>
<td style="text-align:right">&quot;America/Godthab&quot;</td>
<td style="text-align:left">戈特霍布</td>
</tr>
<tr>
<td style="text-align:right">&quot;America/Montevideo&quot;</td>
<td style="text-align:left">乌拉圭时间 (蒙得维的亚)</td>
</tr>
<tr>
<td style="text-align:right">&quot;America/Sao_Paulo&quot;</td>
<td style="text-align:left">圣保罗</td>
</tr>
<tr>
<td style="text-align:right">&quot;Atlantic/South_Georgia&quot;</td>
<td style="text-align:left">南乔治亚</td>
</tr>
<tr>
<td style="text-align:right">&quot;Atlantic/Azores&quot;</td>
<td style="text-align:left">亚述尔群岛</td>
</tr>
<tr>
<td style="text-align:right">&quot;Atlantic/Cape_Verde&quot;</td>
<td style="text-align:left">佛得角</td>
</tr>
<tr>
<td style="text-align:right">&quot;Africa/Casablanca&quot;</td>
<td style="text-align:left">卡萨布兰卡</td>
</tr>
<tr>
<td style="text-align:right">&quot;Europe/London&quot;</td>
<td style="text-align:left">格林尼治标准时间 (伦敦)</td>
</tr>
<tr>
<td style="text-align:right">&quot;Europe/Amsterdam&quot;</td>
<td style="text-align:left">中欧标准时间 (阿姆斯特丹)</td>
</tr>
<tr>
<td style="text-align:right">&quot;Europe/Belgrade&quot;</td>
<td style="text-align:left">中欧标准时间 (贝尔格莱德)</td>
</tr>
<tr>
<td style="text-align:right">&quot;Europe/Brussels&quot;</td>
<td style="text-align:left">中欧标准时间 (布鲁塞尔)</td>
</tr>
<tr>
<td style="text-align:right">&quot;Europe/Sarajevo&quot;</td>
<td style="text-align:left">中欧标准时间 (萨拉热窝)</td>
</tr>
<tr>
<td style="text-align:right">&quot;Africa/Brazzaville&quot;</td>
<td style="text-align:left">西部非洲标准时间 (布拉扎维)</td>
</tr>
<tr>
<td style="text-align:right">&quot;Africa/Windhoek&quot;</td>
<td style="text-align:left">温得和克</td>
</tr>
<tr>
<td style="text-align:right">&quot;Asia/Amman&quot;</td>
<td style="text-align:left">东欧标准时间 (安曼)</td>
</tr>
<tr>
<td style="text-align:right">&quot;Europe/Athens&quot;</td>
<td style="text-align:left">东欧标准时间 (雅典)</td>
</tr>
<tr>
<td style="text-align:right">&quot;Asia/Beirut&quot;</td>
<td style="text-align:left">东欧标准时间 (贝鲁特)</td>
</tr>
<tr>
<td style="text-align:right">&quot;Africa/Cairo&quot;</td>
<td style="text-align:left">东欧标准时间 (开罗)</td>
</tr>
<tr>
<td style="text-align:right">&quot;Europe/Helsinki&quot;</td>
<td style="text-align:left">东欧标准时间 (赫尔辛基)</td>
</tr>
<tr>
<td style="text-align:right">&quot;Asia/Jerusalem&quot;</td>
<td style="text-align:left">以色列时间 (耶路撒冷)</td>
</tr>
<tr>
<td style="text-align:right">&quot;Africa/Harare&quot;</td>
<td style="text-align:left">中部非洲标准时间 (哈拉雷)</td>
</tr>
<tr>
<td style="text-align:right">&quot;Europe/Minsk&quot;</td>
<td style="text-align:left">明斯克</td>
</tr>
<tr>
<td style="text-align:right">&quot;Asia/Baghdad&quot;</td>
<td style="text-align:left">巴格达</td>
</tr>
<tr>
<td style="text-align:right">&quot;Europe/Moscow&quot;</td>
<td style="text-align:left">莫斯科</td>
</tr>
<tr>
<td style="text-align:right">&quot;Asia/Kuwait&quot;</td>
<td style="text-align:left">科威特</td>
</tr>
<tr>
<td style="text-align:right">&quot;Africa/Nairobi&quot;</td>
<td style="text-align:left">东部非洲标准时间 (内罗毕)</td>
</tr>
<tr>
<td style="text-align:right">&quot;Asia/Tehran&quot;</td>
<td style="text-align:left">伊朗标准时间 (德黑兰)</td>
</tr>
<tr>
<td style="text-align:right">&quot;Asia/Baku&quot;</td>
<td style="text-align:left">巴库</td>
</tr>
<tr>
<td style="text-align:right">&quot;Asia/Tbilisi&quot;</td>
<td style="text-align:left">第比利斯</td>
</tr>
<tr>
<td style="text-align:right">&quot;Asia/Yerevan&quot;</td>
<td style="text-align:left">埃里温</td>
</tr>
<tr>
<td style="text-align:right">&quot;Asia/Dubai&quot;</td>
<td style="text-align:left">迪拜</td>
</tr>
<tr>
<td style="text-align:right">&quot;Asia/Kabul&quot;</td>
<td style="text-align:left">阿富汗时间 (喀布尔)</td>
</tr>
<tr>
<td style="text-align:right">&quot;Asia/Karachi&quot;</td>
<td style="text-align:left">卡拉奇</td>
</tr>
<tr>
<td style="text-align:right">&quot;Asia/Oral&quot;</td>
<td style="text-align:left">乌拉尔</td>
</tr>
<tr>
<td style="text-align:right">&quot;Asia/Yekaterinburg&quot;</td>
<td style="text-align:left">叶卡捷林堡</td>
</tr>
<tr>
<td style="text-align:right">&quot;Asia/Calcutta&quot;</td>
<td style="text-align:left">加尔各答</td>
</tr>
<tr>
<td style="text-align:right">&quot;Asia/Colombo&quot;</td>
<td style="text-align:left">科伦坡</td>
</tr>
<tr>
<td style="text-align:right">&quot;Asia/Katmandu&quot;</td>
<td style="text-align:left">尼泊尔时间 (加德满都)</td>
</tr>
<tr>
<td style="text-align:right">&quot;Asia/Almaty&quot;</td>
<td style="text-align:left">阿拉木图</td>
</tr>
<tr>
<td style="text-align:right">&quot;Asia/Rangoon&quot;</td>
<td style="text-align:left">缅甸时间 (仰光)</td>
</tr>
<tr>
<td style="text-align:right">&quot;Asia/Krasnoyarsk&quot;</td>
<td style="text-align:left">克拉斯诺亚尔斯克</td>
</tr>
<tr>
<td style="text-align:right">&quot;Asia/Bangkok&quot;</td>
<td style="text-align:left">曼谷</td>
</tr>
<tr>
<td style="text-align:right">&quot;Asia/Irkutsk&quot;</td>
<td style="text-align:left">伊尔库茨克时间 (伊尔库茨克)</td>
</tr>
<tr>
<td style="text-align:right">&quot;Asia/Kuala_Lumpur&quot;</td>
<td style="text-align:left">吉隆坡</td>
</tr>
<tr>
<td style="text-align:right">&quot;Australia/Perth&quot;</td>
<td style="text-align:left">佩思</td>
</tr>
<tr>
<td style="text-align:right">&quot;Asia/Yakutsk&quot;</td>
<td style="text-align:left">雅库茨克时间 (雅库茨克)</td>
</tr>
<tr>
<td style="text-align:right">&quot;Australia/Darwin&quot;</td>
<td style="text-align:left">达尔文</td>
</tr>
<tr>
<td style="text-align:right">&quot;Australia/Brisbane&quot;</td>
<td style="text-align:left">布里斯班</td>
</tr>
<tr>
<td style="text-align:right">&quot;Asia/Vladivostok&quot;</td>
<td style="text-align:left">海参崴时间 (符拉迪沃斯托克)</td>
</tr>
<tr>
<td style="text-align:right">&quot;Pacific/Guam&quot;</td>
<td style="text-align:left">关岛</td>
</tr>
<tr>
<td style="text-align:right">&quot;Australia/Adelaide&quot;</td>
<td style="text-align:left">阿德莱德</td>
</tr>
<tr>
<td style="text-align:right">&quot;Australia/Hobart&quot;</td>
<td style="text-align:left">霍巴特</td>
</tr>
<tr>
<td style="text-align:right">&quot;Australia/Sydney&quot;</td>
<td style="text-align:left">悉尼</td>
</tr>
<tr>
<td style="text-align:right">&quot;Asia/Magadan&quot;</td>
<td style="text-align:left">马加丹时间 (马加丹)</td>
</tr>
<tr>
<td style="text-align:right">&quot;Pacific/Auckland&quot;</td>
<td style="text-align:left">奥克兰</td>
</tr>
<tr>
<td style="text-align:right">&quot;Pacific/Fiji&quot;</td>
<td style="text-align:left">斐济</td>
</tr>
<tr>
<td style="text-align:right">&quot;Pacific/Tongatapu&quot;</td>
<td style="text-align:left">东加塔布</td>
</tr>
</tbody>
</table>
</details>
</template>
