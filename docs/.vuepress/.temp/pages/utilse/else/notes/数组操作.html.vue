<template><h1 id="数组相关操作" tabindex="-1"><a class="header-anchor" href="#数组相关操作" aria-hidden="true">#</a> 数组相关操作</h1>
<p>下面的方法极个别来自于Java JDK在<strong>java.util</strong>包下提供的<strong>Arrays</strong>工具类，其他来自于Spring框架在<strong>org.springframework.util</strong>包下提供了一个<strong>ObjectUtils</strong>工具类。</p>
<h2 id="_1-数组判空" tabindex="-1"><a class="header-anchor" href="#_1-数组判空" aria-hidden="true">#</a> 1. 数组判空</h2>
<details class="custom-container details"><summary>是否是数组：isArray 方法</summary>
<p>isArray 方法来源于 Spring 框架的 ObjectUtils 工具类。</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ObjectUtils</span><span class="token punctuation">.</span>isArray<span class="token punctuation">;</span>

<span class="token keyword">boolean</span> <span class="token function">isArray</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="伪代码实例">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>    <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token function">isArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>      <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token function">isArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<details class="custom-container details"><summary>数组判空：isEmpty 方法</summary>
<p>isEmpty 方法来源于 Spring 框架的 ObjectUtils 工具类。</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ObjectUtils</span><span class="token punctuation">.</span>isEmpty<span class="token punctuation">;</span>

<span class="token keyword">boolean</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token class-name">Object</span> array<span class="token punctuation">)</span>
<span class="token keyword">boolean</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="伪代码实例">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>    <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>      <span class="token operator">=</span> <span class="token boolean">true</span> 
<span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<h2 id="_2-数组的内容查询" tabindex="-1"><a class="header-anchor" href="#_2-数组的内容查询" aria-hidden="true">#</a> 2. 数组的内容查询</h2>
<details class="custom-container details"><summary>二分查找：binarySearch 方法</summary>
<p>binarySearch 方法来自于 java.util.Arrays 工具类。</p>
<p>使用它有前提：要求数组是有序的。</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ObjectUtils</span><span class="token punctuation">.</span>binarySearch<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> key<span class="token punctuation">)</span>
<span class="token keyword">int</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> key<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="伪代码实例">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">binarySearch</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>  <span class="token operator">=</span> <span class="token number">3</span>
<span class="token function">binarySearch</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>  <span class="token operator">=</span> <span class="token number">2</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></CodeGroupItem>
</CodeGroup>
binarySearch 方法的返回值是元素在数组中的索引值。
</details>
<details class="custom-container details"><summary>是否包含 xxx：containsElement 方法</summary>
<p>containsElement 方法来源于 Spring 框架的 ObjectUtils 工具类。</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ObjectUtils</span><span class="token punctuation">.</span>containsElement<span class="token punctuation">;</span>

<span class="token keyword">boolean</span> <span class="token function">containsElement</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">,</span> <span class="token class-name">Object</span> element<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="伪代码实例">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 它只能用于对象数组，而不能用于基本类型数组。</span>
<span class="token function">containsElement</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>   <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token function">containsElement</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>   <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token function">containsElement</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">=</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<h2 id="_3-填充与拷贝" tabindex="-1"><a class="header-anchor" href="#_3-填充与拷贝" aria-hidden="true">#</a> 3. 填充与拷贝</h2>
<details class="custom-container details"><summary>添加：addObjectToArray 方法</summary>
<p>addObjectToArray 方法来自于 Spring 框架的 ObjectUtils 工具类。</p>
<p>向数组的末尾 “追加” 新元素。这里的 “追加” 是假追加，原数组并没有发生变化（也不可能发生变化），这里返回的是一个新数组。</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ObjectUtils</span><span class="token punctuation">.</span>addObjectToArray<span class="token punctuation">;</span>

<span class="token comment">// 向参数数组的末尾追加新元素，并返回一个新数组。</span>
<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">A</span><span class="token punctuation">,</span> <span class="token class-name">O</span> <span class="token keyword">extends</span> <span class="token class-name">A</span><span class="token punctuation">></span></span> <span class="token class-name">A</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">addObjectToArray</span><span class="token punctuation">(</span><span class="token class-name">A</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">,</span> <span class="token class-name">O</span> obj<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<details class="custom-container details"><summary>填充（赋值）：fill 方法</summary>
<p>fill 方法来源于 JDK 自带的 Arrays 工具类。</p>
<p>fill 方法改变的是原数组。</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ObjectUtils</span><span class="token punctuation">.</span>fill<span class="token punctuation">;</span>

<span class="token comment">// fromIndex 和 toIndex 是一个左闭右开区间：[fromIndex, toIndex) 。</span>
<span class="token keyword">void</span> <span class="token function">fill</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> 
<span class="token keyword">void</span> <span class="token function">fill</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> fromIndex<span class="token punctuation">,</span> <span class="token keyword">int</span> toIndex<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token keyword">void</span> <span class="token function">fill</span><span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">,</span> <span class="token keyword">long</span> val<span class="token punctuation">)</span> 
<span class="token keyword">void</span> <span class="token function">fill</span><span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> fromIndex<span class="token punctuation">,</span> <span class="token keyword">int</span> toIndex<span class="token punctuation">,</span> <span class="token keyword">long</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="伪代码实例">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>       <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
<span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<details class="custom-container details"><summary>拷贝：copyOf / copyOfRange 方法</summary>
<p>copyOf / copyOfRange 方法来源于 JDK 自带的 Arrays 工具类。</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ObjectUtils</span><span class="token punctuation">.</span>copyOf<span class="token punctuation">;</span>

<span class="token comment">// from 和 to 是一个左闭右开的区间：[from, to) </span>
 <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">copyOf</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> original<span class="token punctuation">,</span> <span class="token keyword">int</span> newLength<span class="token punctuation">)</span>
<span class="token keyword">long</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">copyOf</span><span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">[</span><span class="token punctuation">]</span> original<span class="token punctuation">,</span> <span class="token keyword">int</span> newLength<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

 <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">copyOfRange</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> original<span class="token punctuation">,</span> <span class="token keyword">int</span> from<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token keyword">to</span><span class="token punctuation">)</span>
<span class="token keyword">long</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">copyOfRange</span><span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">[</span><span class="token punctuation">]</span> original<span class="token punctuation">,</span> <span class="token keyword">int</span> from<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token keyword">to</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="伪代码实例">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>

<span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOfRange</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<h2 id="_4-数组转换" tabindex="-1"><a class="header-anchor" href="#_4-数组转换" aria-hidden="true">#</a> 4. 数组转换</h2>
<details class="custom-container details"><summary>转成 List：asList / arrayToList 方法</summary>
<p>asList 方法来源于 JDK 自带的 Arrays 工具类。</p>
<p>由给定的数组 a ，返回一个固定大小的 List 对象。</p>
<p>asList 返回的 ArrayList 并不是 java.util.ArrayList ，而是 Arrays 的内部类 ArrayList 。</p>
<p>它不支持 add 和 remove 的操作，是只读的。另外，当改变原数组中的元素时，这个 ArrayList 会 “自动” 随之变化。</p>
<p>逻辑上，这里返回的 ArrayList 对象是数组的一个 “视图” 。</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ObjectUtils</span><span class="token punctuation">.</span>asList<span class="token punctuation">;</span>

<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token function">asList</span><span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="伪代码实例">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">asList</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<details class="custom-container details"><summary>转成 String：toString / deepToString 方法</summary>
<p>toString / deepToString 方法来自于 JDK 自带的 Arrays 工具类。</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ObjectUtils</span><span class="token punctuation">.</span>toString<span class="token punctuation">;</span>

<span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">)</span>
<span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token comment">// 可用于二维数组</span>
<span class="token class-name">String</span> <span class="token function">deepToString</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> <span class="token function">deepToString</span><span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="伪代码实例">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">toString</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>    <span class="token operator">=</span> <span class="token string">"null"</span>
<span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>     <span class="token operator">=</span> <span class="token string">"[1]"</span>
<span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">"[1, 2, 3]"</span>

<span class="token function">deepToString</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>          <span class="token operator">=</span> <span class="token string">"null"</span>
<span class="token function">deepToString</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">"[[1, 2], [3, 4]]"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<details class="custom-container details"><summary>基本类型数组转包装类数组：toObjectArray 方法</summary>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ObjectUtils</span><span class="token punctuation">.</span>toObjectArray<span class="token punctuation">;</span>

<span class="token comment">// 原生基础类型数组 --> 包装类数组</span>
<span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">toObjectArray</span><span class="token punctuation">(</span><span class="token class-name">Object</span> source<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<h2 id="_5-string-转数组集合" tabindex="-1"><a class="header-anchor" href="#_5-string-转数组集合" aria-hidden="true">#</a> 5. String 转数组集合</h2>
<details class="custom-container details"><summary>排序：sort 方法</summary>
<p>sort 方法来源于 JDK 自带的 Arrays 工具类。</p>
<p>sort 方法改变的是原数组（源数组）。</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span><span class="token punctuation">.</span>sort<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">sort</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="伪代码实例">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">sort</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>        <span class="token operator">=</span> <span class="token class-name">NPE</span>    
<span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
</template>
