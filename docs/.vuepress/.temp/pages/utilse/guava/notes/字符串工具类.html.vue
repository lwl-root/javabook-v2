<template><h1 id="字符串工具类" tabindex="-1"><a class="header-anchor" href="#字符串工具类" aria-hidden="true">#</a> 字符串工具类</h1>
<p>对字符串的操作常见的有：</p>
<table>
<thead>
<tr>
<th style="text-align:center">#</th>
<th style="text-align:left">常见操作</th>
<th style="text-align:left">工具类</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:left">字符串的判断空</td>
<td style="text-align:left">Strings</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:left">字符串的拼接</td>
<td style="text-align:left">Joiner</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:left">字符串的拆分</td>
<td style="text-align:left">Splitter</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:left">字符串内容的替换</td>
<td style="text-align:left">CharMatcher</td>
</tr>
</tbody>
</table>
<h2 id="对字符串的判断空-strings" tabindex="-1"><a class="header-anchor" href="#对字符串的判断空-strings" aria-hidden="true">#</a> 对字符串的判断空：Strings</h2>
<p>中文语境中的『<strong>空</strong>』在编程领域中细分为三种：<code>null</code>、<code>&quot;&quot;</code> 和 <code>仅含空白符的字符串</code>。即，英语中的 null、empty 和 blank 。</p>
<p>guava 在 com.google.common.base 包下提供的 <strong>Strings</strong> 工具类中有一个 <strong>isNullOrEmpty</strong> 方法，它的判断逻辑显而易见：</p>
<p>伪代码如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Strings</span><span class="token punctuation">.</span><span class="token function">isNullOrEmpty</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>   <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token class-name">Strings</span><span class="token punctuation">.</span><span class="token function">isNullOrEmpty</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span>     <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token class-name">Strings</span><span class="token punctuation">.</span><span class="token function">isNullOrEmpty</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span>    <span class="token operator">=</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="对字符串作拼接-joiner" tabindex="-1"><a class="header-anchor" href="#对字符串作拼接-joiner" aria-hidden="true">#</a> 对字符串作拼接：Joiner</h2>
<p>guava 在 com.google.common.base 包下为我们提供了 <strong>Joiner</strong> 类来做字符串的拼接、合并。</p>
<p>伪代码如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 结果："hello world"</span>
<span class="token class-name">Joiner</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"hello"</span><span class="token punctuation">,</span> <span class="token string">"world"</span><span class="token punctuation">]</span><span class="token punctuation">)</span> 

<span class="token comment">// 结果：sb = "hello, world, goodbye"</span>
<span class="token class-name">StringBuffer</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Joiner</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">", "</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">appendTo</span><span class="token punctuation">(</span>sb<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">"hello"</span><span class="token punctuation">,</span> <span class="token string">"world"</span><span class="token punctuation">,</span> <span class="token string">"goodbye"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="对字符串的拆分-splitter" tabindex="-1"><a class="header-anchor" href="#对字符串的拆分-splitter" aria-hidden="true">#</a> 对字符串的拆分：Splitter</h2>
<p>guava 在 com.google.common.base 包下提供了 <strong>Splitter</strong> 类来做字符串的拆分。</p>
<p>伪代码如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 拆出 4 个："hello", " world", " ", " goodbye"  </span>
<span class="token class-name">Splitter</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">","</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"hello, world, , goodbye"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li><strong>.on</strong> 方法用于指明分隔符；</li>
<li><strong>.split</strong> 方法表示对目标字符串进行拆分。<em>split</em> 方法还有一个 <strong>.splitToList</strong> 的“兄弟”方法 。</li>
</ul>
<p>由于目标字符串的原因，上述代码拆分的结果中有两样“讨厌”的东西：『空格』和『空字符串』。对此我们可以进一步改进：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 拆出 3 个："hello", "world", "goodbye"  </span>
<span class="token class-name">Splitter</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">","</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">omitEmptyStrings</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">trimResults</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"hello, world, , goodbye"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>多出来的两个方法调用：</p>
<ul>
<li><strong>.omitEmptyStrings</strong> 表示忽略拆出来的空字符串</li>
<li><strong>.trimResults</strong> 方法表示要对每个拆分结果做 <strong>trim</strong> 操作</li>
</ul>
<p><em>.on</em> 方法有一个更高级的支持正则表达式的“兄弟”方法：<strong>.onPattern</strong> ：</p>
<p>伪代码如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 拆出 4 个："hello" "word" "世界" "和平"</span>
<span class="token class-name">Splitter</span><span class="token punctuation">.</span><span class="token function">onPattern</span><span class="token punctuation">(</span><span class="token string">"[,，]{1,}"</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">trimResults</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">omitEmptyStrings</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">splitToList</span><span class="token punctuation">(</span><span class="token string">"hello,world,,世界, 和平"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="字符串内容的替换-charmatcher" tabindex="-1"><a class="header-anchor" href="#字符串内容的替换-charmatcher" aria-hidden="true">#</a> 字符串内容的替换：CharMatcher</h2>
<p>guava 在 <code>com.google.common.base</code> 包下提供了 <strong>CharMatcher</strong> 类用于查找并处理字符串内容。</p>
<p><em>CharMatcher</em> 提供了多种对字符串处理的方法, 它的主要意图有:</p>
<ol>
<li>找到匹配的字符</li>
<li>处理匹配的字符</li>
</ol>
<p>通过 <em>CharMatcher</em> 对字符串进行操作（包括但不仅包括『替换』），也是分为两个步：选中、匹配字符串中的某部分，而后进行某种操作。</p>
<p>伪代码：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 结果："hell wrld"</span>
<span class="token class-name">CharMatcher</span><span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token string">'o'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeFrom</span><span class="token punctuation">(</span><span class="token string">"hello world"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li><strong>is</strong> 方法表示所需要选中、匹配的内容</li>
<li><strong>removeFrom</strong> 表示对目标字符串中所选中的内容进行的操作。上例中是删除。</li>
</ul>
<p>伪代码：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 结果："heLLo worLd" </span>
<span class="token class-name">CharMatcher</span><span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token string">'l'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replaceFrom</span><span class="token punctuation">(</span><span class="token string">"hello world"</span><span class="token punctuation">,</span> <span class="token string">'L'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>CharMatcher 提供的选中、匹配方法包括但不仅包括 <strong>is</strong> 方法，提供的操作方法包括但不仅包括 <strong>removeFrom</strong> 方法和 <strong>replaceFrom</strong> 方法。</p>
<p>更多关于 CharMatcher 对字符串的匹配功能，见另一篇笔记。</p>
</template>
