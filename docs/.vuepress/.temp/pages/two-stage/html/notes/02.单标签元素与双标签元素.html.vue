<template><h1 id="单标签元素与双标签元素" tabindex="-1"><a class="header-anchor" href="#单标签元素与双标签元素" aria-hidden="true">#</a> 单标签元素与双标签元素</h1>
<p>HTML 中的元素分为 <strong>单标签元素</strong> 和 <strong>双标签元素</strong> 。</p>
<blockquote>
<p>在 HTML 中，<code>&lt;xxx&gt;</code> 被称为 XXX 元素的 <strong>开始标签</strong>，相对应的，<code>&lt;/xxx&gt;</code> 则被称为 xxx 元素的结束标签。</p>
<p>在 XML 的语法规则中，实际上并没有单标签元素，只有双标签元素。</p>
</blockquote>
<p>单标签元素只用一个标签符号既可描述某个功能，其语法如下：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>标签名</span> <span class="token punctuation">/></span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>例如：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/></span></span>
    
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote>
<p>在严格的语法规则中，标签名和 / 之间要求有一个空格。</p>
</blockquote>
<p>双标签元素则需要两个标签符号（开始标签和结束标签）来描述某个功能，其如法如下：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>标签名</span><span class="token punctuation">></span></span>内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>标签名</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>上面所说的 <code>&lt;html&gt;</code>、<code>&lt;head&gt;</code>、<code>&lt;body&gt;</code> 很显然都是双标签元素。</p>
</template>
