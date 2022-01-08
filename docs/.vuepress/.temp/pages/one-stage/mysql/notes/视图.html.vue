<template><h1 id="视图" tabindex="-1"><a class="header-anchor" href="#视图" aria-hidden="true">#</a> 视图</h1>
<h2 id="什么是视图" tabindex="-1"><a class="header-anchor" href="#什么是视图" aria-hidden="true">#</a> 什么是视图</h2>
<p>视图（View）是一个虚拟表。同真实表类似，视图包含一系列行和列数据。行和列数据来源于自由定义视图查询所引用的表，并且在引用视图时动态生成。</p>
<p>使用视图的目的在于：</p>
<ul>
<li>隐藏原始表中的某些信息。</li>
<li>方便关联表查询。</li>
</ul>
<h2 id="创建视图" tabindex="-1"><a class="header-anchor" href="#创建视图" aria-hidden="true">#</a> 创建视图</h2>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">VIEW</span> 视图名<span class="token punctuation">[</span><span class="token punctuation">(</span>列列表<span class="token punctuation">)</span><span class="token punctuation">]</span>
  <span class="token keyword">AS</span> 一条查询语句
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="删除视图" tabindex="-1"><a class="header-anchor" href="#删除视图" aria-hidden="true">#</a> 删除视图</h2>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">VIEW</span> 视图名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="查看视图信息" tabindex="-1"><a class="header-anchor" href="#查看视图信息" aria-hidden="true">#</a> 查看视图信息</h2>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> information_schema<span class="token punctuation">.</span>views<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="对视图的操作" tabindex="-1"><a class="header-anchor" href="#对视图的操作" aria-hidden="true">#</a> 对视图的操作</h2>
<p>对视图可以像对待表一样进行操作，但是由于视图只是虚拟表，所以你对视图的任何操作，最终都会反映到视图背后的表上。</p>
</template>
