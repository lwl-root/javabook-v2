<template><h1 id="html5-的-web-storage" tabindex="-1"><a class="header-anchor" href="#html5-的-web-storage" aria-hidden="true">#</a> HTML5 的 web storage</h1>
<p>HTML5 中的 web storage 包含两种存储方式：<strong>localStorage</strong> 和 <strong>sessionStorage</strong>，这两种方式存储的数据不会自动发给服务器，仅仅是本地保存。</p>
<p><strong>localStorage</strong> 是持久化的本地保存，只要你没有主动删掉，就会『<strong>一直存在</strong>』。就像一些缓存，都把 APP 删了还有。</p>
<div class="custom-container tip"><p class="custom-container-title">说明</p>
<p>它不像 Cookie 可以设置超时时间，能到期后自动删除。</p>
</div>
<p><strong>sessionStorage</strong> 是会话级别的本地保存，比如一个页面关闭的时候该页面设置的 <strong>sessionStorage</strong> 数据会自动消失，在不同浏览器窗口不会共享的，即使是同一个浏览器的同一个页面。</p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>同一个窗口中的不同的 tab 算不同会话。</p>
</div>
<h2 id="_1-window-的-sessionstorage-属性" tabindex="-1"><a class="header-anchor" href="#_1-window-的-sessionstorage-属性" aria-hidden="true">#</a> 1. Window 的 sessionStorage 属性</h2>
<p>注意，在存储数据的时候，各种类型的数据都会被转换成字符串后再存入。因此，在读取数据的时候，你的可能需要做反向的转换操作。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 保存数据语法：</span>
sessionStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">"key"</span><span class="token punctuation">,</span> <span class="token string">"value"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 读取数据</span>
<span class="token keyword">var</span> lastname <span class="token operator">=</span> sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">"key"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 删除指定键的数据</span>
sessionStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">"key"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 删除所有数据</span>
sessionStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        Copied<span class="token operator">!</span>
    
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="_2-window-的-localstorage-属性" tabindex="-1"><a class="header-anchor" href="#_2-window-的-localstorage-属性" aria-hidden="true">#</a> 2. Window 的 localStorage 属性</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 保存数据语法</span>
localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">"key"</span><span class="token punctuation">,</span> <span class="token string">"value"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 读取数据语法</span>
<span class="token keyword">var</span> lastname <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">"key"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 删除数据语法</span>
localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">"key"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></template>
