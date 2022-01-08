<template><h1 id="filecopyutils" tabindex="-1"><a class="header-anchor" href="#filecopyutils" aria-hidden="true">#</a> FileCopyUtils</h1>
<p><strong>FileCopyUtils</strong> 类来自 <em>org.springframework.util</em> 包。它用于文件的拷贝处理工具。</p>
<p>以下方法结尾 <em>static</em> 方法，故不再显示 <em>static</em> 关键字。</p>
<h2 id="输出" tabindex="-1"><a class="header-anchor" href="#输出" aria-hidden="true">#</a> 输出</h2>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 从字节数组到文件</span>
<span class="token keyword">void</span> <span class="token function">copy</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> in<span class="token punctuation">,</span> <span class="token class-name">File</span> out<span class="token punctuation">)</span>

<span class="token comment">// 从文件到文件</span>
<span class="token keyword">int</span> <span class="token function">copy</span><span class="token punctuation">(</span><span class="token class-name">File</span> in<span class="token punctuation">,</span> <span class="token class-name">File</span> out<span class="token punctuation">)</span>

<span class="token comment">// 从字节数组到输出流</span>
<span class="token keyword">void</span> <span class="token function">copy</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> in<span class="token punctuation">,</span> <span class="token class-name">OutputStream</span> out<span class="token punctuation">)</span> 

<span class="token comment">// 从输入流到输出流</span>
<span class="token keyword">int</span> <span class="token function">copy</span><span class="token punctuation">(</span><span class="token class-name">InputStream</span> in<span class="token punctuation">,</span> <span class="token class-name">OutputStream</span> out<span class="token punctuation">)</span> 

<span class="token comment">// 从输入流到输出流</span>
<span class="token keyword">int</span> <span class="token function">copy</span><span class="token punctuation">(</span><span class="token class-name">Reader</span> in<span class="token punctuation">,</span> <span class="token class-name">Writer</span> out<span class="token punctuation">)</span>

<span class="token comment">// 从字符串到输出流</span>
<span class="token keyword">void</span> <span class="token function">copy</span><span class="token punctuation">(</span><span class="token class-name">String</span> in<span class="token punctuation">,</span> <span class="token class-name">Writer</span> out<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="输入" tabindex="-1"><a class="header-anchor" href="#输入" aria-hidden="true">#</a> 输入</h2>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 从文件中读入到字节数组中</span>
<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">copyToByteArray</span><span class="token punctuation">(</span><span class="token class-name">File</span> in<span class="token punctuation">)</span>

<span class="token comment">// 从输入流中读入到字节数组中</span>
<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">copyToByteArray</span><span class="token punctuation">(</span><span class="token class-name">InputStream</span> in<span class="token punctuation">)</span>

<span class="token comment">// 从输入流中读入到字符串中</span>
<span class="token class-name">String</span> <span class="token function">copyToString</span><span class="token punctuation">(</span><span class="token class-name">Reader</span> in<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></template>
