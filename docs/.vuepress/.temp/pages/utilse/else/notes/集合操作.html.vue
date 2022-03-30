<template><h1 id="集合相关操作" tabindex="-1"><a class="header-anchor" href="#集合相关操作" aria-hidden="true">#</a> 集合相关操作</h1>
<p>以下工具方法一小部分来自于 Java JDK 在 <strong>java.util</strong> 包下提供的名为 <strong>Collections</strong> 工具类，其它大部分来自于 Spring 框架在 <strong>org.springframework.util</strong> 包下提供的名为 <strong>CollectionsUtils</strong> 的工具类。</p>
<h2 id="_1-集合判空" tabindex="-1"><a class="header-anchor" href="#_1-集合判空" aria-hidden="true">#</a> 1. 集合判空</h2>
<details class="custom-container details"><summary>是否为空：isEmpty 方法</summary>
<p>isEmpty 方法来自于 Spring 框架的 CollectionUtils 工具类。</p>
<p>用于判断 List / Set / Map 是否为空。</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">CollectionUtils</span><span class="token punctuation">.</span>isEmpty<span class="token punctuation">;</span>

<span class="token keyword">boolean</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">,</span><span class="token operator">?</span><span class="token punctuation">></span></span> map<span class="token punctuation">)</span>
<span class="token keyword">boolean</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> collection<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<h2 id="_2-集合元素的查询、摘出与统计" tabindex="-1"><a class="header-anchor" href="#_2-集合元素的查询、摘出与统计" aria-hidden="true">#</a> 2. 集合元素的查询、摘出与统计</h2>
<details class="custom-container details"><summary>是否包含：contains / containsInstance / containsAny 方法</summary>
<p>contains / containsInstance / containsAny 方法来自于 Spring 框架的 CollectionUtils 工具类。</p>
<p>它们都是用来判断集合中是否包含某个对象，它们的区别在于：</p>
<ul>
<li>contains 是以迭代器方式进行判断</li>
<li>containsInstance 是以常规方式进行判断</li>
<li>containsAny 是判断集合中否包含某些对象中的任意一个</li>
</ul>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">CollectionUtils</span><span class="token punctuation">.</span>contains<span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">CollectionUtils</span><span class="token punctuation">.</span>containsInstance<span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">CollectionUtils</span><span class="token punctuation">.</span>containsAny<span class="token punctuation">;</span>

<span class="token keyword">boolean</span> <span class="token function">contains</span><span class="token punctuation">(</span><span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> iterator<span class="token punctuation">,</span> <span class="token class-name">Object</span> element<span class="token punctuation">)</span>
<span class="token keyword">boolean</span> <span class="token function">containsInstance</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> collection<span class="token punctuation">,</span> <span class="token class-name">Object</span> element<span class="token punctuation">)</span>
<span class="token keyword">boolean</span> <span class="token function">containsAny</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> source<span class="token punctuation">,</span> <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> candidates<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<details class="custom-container details"><summary>是否有重复元素：hasUniqueObject 方法</summary>
<p>hasUniqueObject 方法来自于 Spring 框架的 CollectionUtils 工具类。</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">CollectionUtils</span><span class="token punctuation">.</span>hasUniqueObject<span class="token punctuation">;</span>

<span class="token keyword">boolean</span> <span class="token function">hasUniqueObject</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> collection<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<details class="custom-container details"><summary>二分查找并返回：binarySearch 方法</summary>
<p>binarySearch 方法来自于 JDK 自带的 Collections 工具类。</p>
<p>binarySearch 方法的使用有前提：List 必须是有序的。</p>
<p>binarySearch 方法返回的是元素在 List 中的索引位置。</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Collections</span><span class="token punctuation">.</span>binarySearch<span class="token punctuation">;</span>

<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token keyword">int</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Comparable</span><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">T</span><span class="token punctuation">></span><span class="token punctuation">></span></span> list<span class="token punctuation">,</span> <span class="token class-name">T</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<details class="custom-container details"><summary>返回最大、最小元素：min / max 方法</summary>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token class-name">T</span> <span class="token function">min</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">T</span><span class="token punctuation">></span></span> coll<span class="token punctuation">)</span>：
<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token class-name">T</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">T</span><span class="token punctuation">></span></span> coll<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 同上。可自定义比较器</span>
<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token class-name">T</span> <span class="token function">min</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">T</span><span class="token punctuation">></span></span> coll<span class="token punctuation">,</span> <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">T</span><span class="token punctuation">></span></span> comp<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token class-name">T</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">T</span><span class="token punctuation">></span></span> coll<span class="token punctuation">,</span> <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">T</span><span class="token punctuation">></span></span> comp<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<details class="custom-container details"><summary>返回 Collection 中最后一个元素：lastElement 方法</summary>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token class-name">T</span> <span class="token function">lastElement</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> list<span class="token punctuation">)</span>  
<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token class-name">T</span> <span class="token function">lastElement</span><span class="token punctuation">(</span><span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> set<span class="token punctuation">)</span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<details class="custom-container details"><summary>返回 Collection 中元素的类型：findCommonElementType 方法</summary>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> <span class="token function">findCommonElementType</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> collection<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<details class="custom-container details"><summary>计算元素出现的次数：frequency 方法</summary>
<p>frequency 方法来自于 JDK 自带的 Collections 工具类。</p>
<p>frequency 方法用于计算集合中某个元素出现的次数。</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Collections</span><span class="token punctuation">.</span>frequency<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">frequency</span><span class="token punctuation">(</span><span class="token class-name">Collection</span> c<span class="token punctuation">,</span> <span class="token class-name">Object</span> o<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<h2 id="_3-添加元素" tabindex="-1"><a class="header-anchor" href="#_3-添加元素" aria-hidden="true">#</a> 3. 添加元素</h2>
<details class="custom-container details"><summary>Collection 添加元素：addAll / mergeArrayIntoCollection 方法</summary>
<p><strong>addAll</strong> 方法来自于 JDK 的 java.util.Collections 工具类。</p>
<p>addAll(Collection&lt;? super T&gt; c, T... elements)，往集合中添加元素</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Collections</span><span class="token punctuation">.</span>addAll<span class="token punctuation">;</span>

<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token keyword">boolean</span> <span class="token function">addAll</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">T</span><span class="token punctuation">></span></span> c<span class="token punctuation">,</span> <span class="token class-name">T</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> elements<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<details class="custom-container details"><summary>Collection 添加元素：mergeArrayIntoCollection 方法</summary>
<p><strong>mergeArrayIntoCollection</strong> 方法来自于 Spring 框架的 CollectionUtils 工具类。</p>
<p>它实现了和 Collections.addAll 方法同样的功能。它会将参数 array 中的元素添加到参数 collection 中</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">CollectionUtils</span><span class="token punctuation">.</span>mergeArrayIntoCollection<span class="token punctuation">;</span>

<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> <span class="token keyword">void</span> <span class="token function">mergeArrayIntoCollection</span><span class="token punctuation">(</span><span class="token class-name">Object</span> array<span class="token punctuation">,</span> <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> collection<span class="token punctuation">)</span>  
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<details class="custom-container details"><summary>Map 添加元素：mergePropertiesIntoMap 方法</summary>
<p>mergePropertiesIntoMap 方法来自于 Spring 框架的 CollectionUtils 工具类。</p>
<p>将参数 props 中的元素添加到参数 map 中</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">CollectionUtils</span><span class="token punctuation">.</span>mergePropertiesIntoMap<span class="token punctuation">;</span>

<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token punctuation">></span></span> <span class="token keyword">void</span> <span class="token function">mergePropertiesIntoMap</span><span class="token punctuation">(</span><span class="token class-name">Properties</span> props<span class="token punctuation">,</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token punctuation">></span></span> map<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<h2 id="_4-集合变序" tabindex="-1"><a class="header-anchor" href="#_4-集合变序" aria-hidden="true">#</a> 4. 集合变序</h2>
<p>“变序” 包括：交换元素、排序、反转顺序、“洗牌”</p>
<details class="custom-container details"><summary>交换元素位置：swap 方法</summary>
<p>swap 方法来自 JDK 的 Collections 工具类。</p>
<p>swap 方法能交换 List 中指定 2 个位置的元素。</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Collections</span><span class="token punctuation">.</span>swap<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> list<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<details class="custom-container details"><summary>排序：sort 方法</summary>
<p>sort 方法来源于 JDK 的 java.util.Collections 工具类。功能是对参数 list 进行排序。</p>
<p>sort 方法排完序之后 list 的顺序是自然顺序。</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">CollectionUtils</span><span class="token punctuation">.</span>sort<span class="token punctuation">;</span>

<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span> <span class="token keyword">extends</span> <span class="token class-name">Comparable</span><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">T</span><span class="token punctuation">></span><span class="token punctuation">></span></span> <span class="token keyword">void</span> <span class="token function">sort</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> list<span class="token punctuation">)</span>

<span class="token comment">// 同上，可自定义比较器</span>
<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> 
<span class="token keyword">void</span> <span class="token function">sort</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> list<span class="token punctuation">,</span> <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">T</span><span class="token punctuation">></span></span> c<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<details class="custom-container details"><summary>反转顺序：reverse 方法</summary>
<p>reverse 方法来源于 JDK 的 java.util.Collections 工具类。</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">CollectionUtils</span><span class="token punctuation">.</span>reverse<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> list<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<details class="custom-container details"><summary>洗牌：shuffle 方法</summary>
<p>shuffle 方法来源于 JDK 自带的 Collections 工具类。功能是将参数 list 中的元素的顺序打乱。</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Collections</span><span class="token punctuation">.</span>shuffle<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">shuffle</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> list<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<h2 id="_5-其他" tabindex="-1"><a class="header-anchor" href="#_5-其他" aria-hidden="true">#</a> 5. 其他</h2>
<details class="custom-container details"><summary>是否没有交集：disjoint 方法</summary>
<p>disjoint 方法来自于 JDK 自带的 Collections 工具类。它用于判断它的两个参数是否有交集。</p>
<CodeGroup>
<CodeGroupItem title="方法声明">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">boolean</span> <span class="token function">disjoint</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> c1<span class="token punctuation">,</span> <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> c2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
</template>
