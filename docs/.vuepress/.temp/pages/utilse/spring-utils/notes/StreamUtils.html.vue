<template><h1 id="streamutils" tabindex="-1"><a class="header-anchor" href="#streamutils" aria-hidden="true">#</a> StreamUtils</h1>
<p><strong>StreamUtils</strong> 类位于 <em>org.springframework.util</em> 包下 。</p>
<p>以下方法结尾 <em>static</em> 方法，故不再显示 <em>static</em> 关键字。</p>
<h2 id="输出" tabindex="-1"><a class="header-anchor" href="#输出" aria-hidden="true">#</a> 输出</h2>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">copy</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> in<span class="token punctuation">,</span> <span class="token class-name">OutputStream</span> out<span class="token punctuation">)</span>

<span class="token keyword">int</span> <span class="token function">copy</span><span class="token punctuation">(</span><span class="token class-name">InputStream</span> in<span class="token punctuation">,</span> <span class="token class-name">OutputStream</span> out<span class="token punctuation">)</span>

<span class="token keyword">void</span> <span class="token function">copy</span><span class="token punctuation">(</span><span class="token class-name">String</span> in<span class="token punctuation">,</span> <span class="token class-name">Charset</span> charset<span class="token punctuation">,</span> <span class="token class-name">OutputStream</span> out<span class="token punctuation">)</span>

<span class="token keyword">long</span> <span class="token function">copyRange</span><span class="token punctuation">(</span><span class="token class-name">InputStream</span> in<span class="token punctuation">,</span> <span class="token class-name">OutputStream</span> out<span class="token punctuation">,</span> <span class="token keyword">long</span> start<span class="token punctuation">,</span> <span class="token keyword">long</span> end<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="输入" tabindex="-1"><a class="header-anchor" href="#输入" aria-hidden="true">#</a> 输入</h2>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">copyToByteArray</span><span class="token punctuation">(</span><span class="token class-name">InputStream</span> in<span class="token punctuation">)</span>

<span class="token class-name">String</span> <span class="token function">copyToString</span><span class="token punctuation">(</span><span class="token class-name">InputStream</span> in<span class="token punctuation">,</span> <span class="token class-name">Charset</span> charset<span class="token punctuation">)</span>

<span class="token comment">// 舍弃输入流中的内容</span>
<span class="token keyword">int</span> <span class="token function">drain</span><span class="token punctuation">(</span><span class="token class-name">InputStream</span> in<span class="token punctuation">)</span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="实例化" tabindex="-1"><a class="header-anchor" href="#实例化" aria-hidden="true">#</a> 实例化</h2>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">InputStream</span> <span class="token function">emptyInput</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 所生成的 输入流 close() 方法无效</span>
<span class="token class-name">InputStream</span> <span class="token function">nonClosing</span><span class="token punctuation">(</span><span class="token class-name">InputStream</span> in<span class="token punctuation">)</span> 

<span class="token comment">// 所生成的 输出流 close() 方法无效</span>
<span class="token class-name">OutputStream</span> <span class="token function">nonClosing</span><span class="token punctuation">(</span><span class="token class-name">OutputStream</span> out<span class="token punctuation">)</span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></template>
