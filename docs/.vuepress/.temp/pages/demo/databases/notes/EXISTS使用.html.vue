<template><h1 id="exists和not-exists的使用" tabindex="-1"><a class="header-anchor" href="#exists和not-exists的使用" aria-hidden="true">#</a> EXISTS和NOT EXISTS的使用</h1>
<div class="custom-container tip"><p class="custom-container-title">定义</p>
<p>not exists是sql中的一个语法，常用在子查询和主查询之间，用于条件判断，根据一个条件返回一个布尔值，从而来确定下一步操作如何进行，not exists也是exists或in的对立面。</p>
</div>
<p>not exists 是exists的对立面，所以要了解not exists的用法，我们首先了解下exists、in的区别和特点：</p>
<p>exists : 强调的是是否返回结果集，不要求知道返回什么, 比如：</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> name <span class="token keyword">from</span> student <span class="token keyword">where</span> sex <span class="token operator">=</span> <span class="token string">'m'</span> <span class="token operator">and</span> mark <span class="token keyword">exists</span><span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token number">1</span> <span class="token keyword">from</span> grade <span class="token keyword">where</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><font color="red">只要exists引导的子句有结果集返回，那么exists这个条件就算成立了</font>,大家注意返回的字段始终为1，如果改成“select 2 from grade where ...”，那么返回的字段就是2，这个数字没有意义。所以exists子句不在乎返回什么，而是在乎是不是有结果集返回。
<p>而 exists 与 in 最大的区别在于 in引导的子句只能返回一个字段，比如：</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> name <span class="token keyword">from</span> student <span class="token keyword">where</span> sex <span class="token operator">=</span> <span class="token string">'m'</span> <span class="token operator">and</span> mark <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span> <span class="token keyword">from</span> grade <span class="token keyword">where</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>in子句返回了三个字段，这是不正确的，exists子句是允许的，但in只允许有一个字段返回，在1，2，3中随便去了两个字段即可。</p>
<p>而not exists 和not in 分别是exists 和 in 的 对立面。</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">exists</span>     （<span class="token keyword">sql</span>       返回结果集，为真）
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>主要看exists括号中的sql语句结果是否有结果，有结果：才会继续执行where条件；没结果：视为where条件不成立。</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token operator">not</span> <span class="token keyword">exists</span>   <span class="token punctuation">(</span><span class="token keyword">sql</span>       不返回结果集，为真）
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>主要看not exists括号中的sql语句是否有结果，无结果：才会继续执行where条件；有结果：视为where条件不成立。</p>
<p>not exists：经过测试，当子查询和主查询有关联条件时，相当于从主查询中去掉子查询的数据。</p>
<p>例如：</p>
<p>test数据：</p>
<table>
<thead>
<tr>
<th>id</th>
<th>name</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>张三</td>
</tr>
<tr>
<td>2</td>
<td>李四</td>
</tr>
</tbody>
</table>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> test c <span class="token keyword">where</span>  <span class="token operator">not</span> <span class="token keyword">exists</span>

<span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token number">1</span> <span class="token keyword">from</span> test t <span class="token keyword">where</span> t<span class="token punctuation">.</span>id<span class="token operator">=</span> <span class="token string">'1'</span> <span class="token punctuation">)</span>

<span class="token comment">--无结果</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> test c <span class="token keyword">where</span>  <span class="token operator">not</span> <span class="token keyword">exists</span>

<span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token number">1</span> <span class="token keyword">from</span> test t <span class="token keyword">where</span> t<span class="token punctuation">.</span>id<span class="token operator">=</span> <span class="token string">'1'</span>  <span class="token operator">and</span> t<span class="token punctuation">.</span>id <span class="token operator">=</span> c<span class="token punctuation">.</span>id<span class="token punctuation">)</span>

<span class="token comment">--返回2 李四</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></template>
