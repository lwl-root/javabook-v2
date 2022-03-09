<template><h1 id="数据结构与算法入门" tabindex="-1"><a class="header-anchor" href="#数据结构与算法入门" aria-hidden="true">#</a> 数据结构与算法入门</h1>
<details class="custom-container details"><summary>思维导图</summary>
<img src="/images/数据结构与算法思维导图.jpg">
</details>
<p><strong>概念</strong>：数据结构指的是&quot;一组数据的存储结构&quot;，算法值得是&quot;操作数据的一组方法&quot;。</p>
<p><strong>关系</strong>：数据结构是为算法服务的，算法是要作用在特定的数据结构上的。</p>
<p>最常用的数据结构与算法:</p>
<ul>
<li>数据结构：数组、链表、栈、队列、散列表、二叉树、堆、跳表、图、Tire树</li>
<li>算法： 递归、排序、二分查找、搜索、哈希算法、贪心算法、分治算法、回溯算法、动态规划、字符串匹配算法</li>
</ul>
<h2 id="_1-算法的复杂度" tabindex="-1"><a class="header-anchor" href="#_1-算法的复杂度" aria-hidden="true">#</a> 1.算法的复杂度</h2>
<p>同一问题可用不同算法解决，而一个算法的质量优劣将影响到算法乃至程序的效率。算法分析的目的在于选择合适算法和改进算法。一个算法的评价主要从时间复杂度和空间复杂度来考虑。</p>
<h3 id="算法复杂度的表达式" tabindex="-1"><a class="header-anchor" href="#算法复杂度的表达式" aria-hidden="true">#</a> 算法复杂度的表达式</h3>
<p><strong>大O复杂度表示法</strong></p>
<p>公式：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>T(n) = O(f(n))
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li>T(n)：代码执行时间</li>
<li>n：数据规模的大小</li>
<li>f(n)：每行代码执行的次数总和</li>
<li>O：代码的执行时间T(n)与f(n)成正比</li>
</ul>
<p>因为这是一个公式，所以用f(n)来表示。</p>
<p>例子：</p>
<div class="language-angular ext-angular line-numbers-mode"><pre v-pre class="language-angular"><code>T(n) = O(2n+2)
T(n) = O(2n2 +2n+3)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>大O时间复杂度实际上并不具体表示代码真正的执行时间，而是表示代码执行时间随数据规模增长的变化趋势，所以，也叫作渐进时间复杂度(asymptotic time complexity)，简称时间复杂度。</p>
</div>
<p><strong>复杂度分析法则</strong></p>
<ul>
<li>单段代码看高频：比如循环。</li>
<li>多段代码取最大：比如一段代码中有单循环和多重循环，那么取多重循环的复杂度。</li>
<li>嵌套代码求乘积：比如递归、多重循环等。</li>
<li>多个规模求加法：比如方法有两个参数控制两个循环的次数，那么这时就取二者复杂度相加。</li>
</ul>
<h3 id="时间复杂度" tabindex="-1"><a class="header-anchor" href="#时间复杂度" aria-hidden="true">#</a> 时间复杂度</h3>
<p><strong>时间复杂度分析</strong></p>
<ul>
<li>只关注循环执行次数最多的一段代码</li>
<li>加法法则：总复杂度等于量级最大的那段代码的复杂度</li>
<li>乘法法则：嵌套代码的复杂度等于嵌套内外代码复杂度的乘积</li>
</ul>
<p>常见的时间复杂度实例分析：</p>
<p><code>复杂度量级（按数量级递增）</code></p>
<table>
<thead>
<tr>
<th>实例名</th>
<th>表达式</th>
</tr>
</thead>
<tbody>
<tr>
<td>常量阶</td>
<td>O(1)</td>
</tr>
<tr>
<td>对数阶</td>
<td>O(logn)</td>
</tr>
<tr>
<td>线性阶</td>
<td>O(n)</td>
</tr>
<tr>
<td>线性对数阶</td>
<td>O(nlogn)</td>
</tr>
<tr>
<td>平方阶</td>
<td>O(n²)</td>
</tr>
<tr>
<td>n次方阶</td>
<td>O(nⁿ)</td>
</tr>
<tr>
<td>指数阶</td>
<td>O(2ⁿ)</td>
</tr>
<tr>
<td>阶乘阶</td>
<td>O(n!)</td>
</tr>
</tbody>
</table>
<h3 id="空间复杂度" tabindex="-1"><a class="header-anchor" href="#空间复杂度" aria-hidden="true">#</a> 空间复杂度</h3>
</template>
