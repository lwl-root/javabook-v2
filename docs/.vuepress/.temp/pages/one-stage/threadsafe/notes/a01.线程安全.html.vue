<template><h1 id="线程安全" tabindex="-1"><a class="header-anchor" href="#线程安全" aria-hidden="true">#</a> 线程安全</h1>
<p>线程安全问题指的是在多线程中，各线程之间因为同时操作所产生的数据污染或其他非预期的程序运行结果。</p>
<h2 id="_1-非线程安全示例" tabindex="-1"><a class="header-anchor" href="#_1-非线程安全示例" aria-hidden="true">#</a> 1. 非线程安全示例</h2>
<p>比如 A 和 B 同时给 C 转账的问题，假设 C 原本余额有 100 元，A 给 C 转账 100 元，正在转的途中，此时 B 也给 C 转了 100 元，这个时候 A 先给 C 转账成功，余额变成了 200 元，但 B 事先查询 C 的余额是 100 元，转账成功之后也是 200 元。当 A 和 B 都给 C 转账完成之后，余额还是 200 元，而非预期的 300 元，这就是典型的线程安全的问题。</p>
<table>
<thead>
<tr>
<th style="text-align:left">时间线</th>
<th style="text-align:left">线程 A</th>
<th style="text-align:left">线程 B</th>
<th style="text-align:left">C 的余额</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">查看 C 的余额</td>
<td style="text-align:left"></td>
<td style="text-align:left">100</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left"></td>
<td style="text-align:left">查看 C 的余额</td>
<td style="text-align:left">100</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">转账：余额 += 100</td>
<td style="text-align:left"></td>
<td style="text-align:left">200</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left"></td>
<td style="text-align:left">转账：余额 += 100</td>
<td style="text-align:left">200</td>
</tr>
</tbody>
</table>
<h2 id="_2-非线程安全代码示例" tabindex="-1"><a class="header-anchor" href="#_2-非线程安全代码示例" aria-hidden="true">#</a> 2. 非线程安全代码示例</h2>
<p>上面的内容没看明白没关系，下面来看非线程安全的具体代码：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">ThreadSafeTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">static</span> <span class="token keyword">int</span> number <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Thread</span> thread1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token function">addNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span> thread2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token function">addNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        thread1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        thread2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        thread1<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        thread2<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"number："</span> <span class="token operator">+</span> number<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">addNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token operator">++</span>number<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>以上程序执行结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>number：12085
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>每次执行的结果可能略有差异，不过几乎不会等于（正确的）累计之和 20000 。</p>
<h2 id="_3-线程安全的解决方案" tabindex="-1"><a class="header-anchor" href="#_3-线程安全的解决方案" aria-hidden="true">#</a> 3. 线程安全的解决方案</h2>
<p>线程安全的解决方案有以下几个维度：</p>
<ul>
<li>数据不共享，单线程可见，比如 ThreadLocal 就是单线程可见的；</li>
<li>使用线程安全类，比如 StringBuffer 和 JUC（java.util.concurrent）下的安全类；</li>
<li>使用同步代码或者锁。</li>
</ul>
</template>
