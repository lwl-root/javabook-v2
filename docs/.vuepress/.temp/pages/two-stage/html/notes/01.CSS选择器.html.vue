<template><h1 id="css-选择器" tabindex="-1"><a class="header-anchor" href="#css-选择器" aria-hidden="true">#</a> CSS 选择器</h1>
<p>CSS 选择器决定了后续规则将应用于哪些元素。</p>
<h2 id="_1-核心选择器" tabindex="-1"><a class="header-anchor" href="#_1-核心选择器" aria-hidden="true">#</a> 1. 核心选择器</h2>
<table>
<thead>
<tr>
<th style="text-align:left">选择器</th>
<th style="text-align:left">解释</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code>*</code></td>
<td style="text-align:left">选中所有的元素</td>
</tr>
<tr>
<td style="text-align:left"><em><code>xxx</code></em></td>
<td style="text-align:left">选中的元素必须是 <em><code>xxx</code></em> 类型元素。 即，<em><code>&lt;xxx&gt;</code></em></td>
</tr>
<tr>
<td style="text-align:left"><em><code>.xxx</code></em></td>
<td style="text-align:left">选中的元素的 <em><code>class</code></em> 属性的值必须 <strong>是/有</strong> <em><code>xxx</code></em> 。 即，<em><code>class=&quot;xxx ...&quot;</code></em></td>
</tr>
<tr>
<td style="text-align:left"><em><code>#xxx</code></em></td>
<td style="text-align:left">选中的元素的 <em><code>id</code></em> 属性的值必须是 <em><code>xxx</code></em> 。 即，<em><code>id=xxx</code></em></td>
</tr>
</tbody>
</table>
<h2 id="_2-属性选择器" tabindex="-1"><a class="header-anchor" href="#_2-属性选择器" aria-hidden="true">#</a> 2. 属性选择器</h2>
<p>属性选择器是基于属性名及属性的值进行选择页面元素。</p>
<table>
<thead>
<tr>
<th style="text-align:left">选择器</th>
<th style="text-align:left">解释</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code>[attr]</code></td>
<td style="text-align:left">选中的元素必须具有 <em><code>attr</code></em> 属性。</td>
</tr>
<tr>
<td style="text-align:left"><code>[attr=&quot;val&quot;]</code></td>
<td style="text-align:left">选中的元素必须具有 <em><code>attr</code></em> 属性，且属性值为 <em><code>val</code></em>。</td>
</tr>
<tr>
<td style="text-align:left"><code>[attr^=&quot;val&quot;]</code></td>
<td style="text-align:left">选中的元素必须具有 <em><code>attr</code></em> 属性，且属性值是以 <code>val</code> 开头。</td>
</tr>
<tr>
<td style="text-align:left"><code>[attr$=&quot;val&quot;]</code></td>
<td style="text-align:left">选中的元素必须具有 <em><code>attr</code></em> 属性，且属性值是以 <code>val</code> 结尾。</td>
</tr>
<tr>
<td style="text-align:left"><code>[attr*=&quot;val&quot;]</code></td>
<td style="text-align:left">选中的元素必须具有 <em><code>attr</code></em> 属性，且属性值含有 <code>val</code>（可以有其他值）。</td>
</tr>
</tbody>
</table>
<h2 id="_3-选择器的复合使用" tabindex="-1"><a class="header-anchor" href="#_3-选择器的复合使用" aria-hidden="true">#</a> 3. 选择器的复合使用</h2>
<p>选择器的复合使用，从程序员的角度来看，就是以 <strong>与</strong> 和 <strong>或</strong> 的关系组合使用多个选择器，选择页面元素。</p>
<p>选择器的“与”关系：<code>&lt;选择器1&gt;&lt;选择器2&gt;</code>，将两个选择器“紧挨”在一起，就是以 <strong>与</strong> 的关系使用选择器选择页面元素。其选择结果必定（必须）同时满足两个选择器。</p>
<p><em><strong>注意</strong></em>，此处两个选择器间不能有空格。有空格则表达了另一种关系，不再是 <strong>与</strong> 的关系。</p>
<p>选择器的“或”关系：<code>&lt;选择器1&gt;, &lt;选择器2&gt;</code>，将两个选择器以逗号（<code>,</code>）分隔，就是以 <strong>或</strong> 的关系使用选择器选择页面元素。其选择结果只需满足两者其一即可。</p>
<p><em><strong>注意</strong></em>，此处逗号后的空格可有可无。</p>
<h2 id="_4-亲属关系选择器" tabindex="-1"><a class="header-anchor" href="#_4-亲属关系选择器" aria-hidden="true">#</a> 4. 亲属关系选择器</h2>
<p>亲属关系选择器会涉及到元素的层次结构。</p>
<table>
<thead>
<tr>
<th style="text-align:left">选择器</th>
<th style="text-align:left">解释</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code>&lt;选择器1&gt; &lt;选择器2&gt;</code></td>
<td style="text-align:left">选中的元素要满足 <em><code>选择器 2</code></em> ， 并且，<strong>祖先</strong>要满足 <em><code>选择器 1</code></em> 。</td>
</tr>
<tr>
<td style="text-align:left"><code>&lt;选择器1&gt; &gt; &lt;选择器2&gt;</code></td>
<td style="text-align:left">选中的元素要满足 <em><code>选择器 2</code></em> ， 并且，<strong>爸爸</strong>要满足 <em><code>选择器 1</code></em> 。</td>
</tr>
<tr>
<td style="text-align:left"><code>&lt;选择器1&gt; + &lt;选择器2&gt;</code></td>
<td style="text-align:left">选中的元素要满足 <em><code>选择器 2</code></em> ， 并且，<strong>最小的哥哥</strong>要满足 <em><code>选择器 1</code></em> 。</td>
</tr>
<tr>
<td style="text-align:left"><code>&lt;选择器1&gt; ~ &lt;选择器2&gt;</code></td>
<td style="text-align:left">选中的元素要满足 <em><code>选择器 2</code></em>， 并且，<strong>哥哥</strong>要满足 <em><code>选择器 1</code></em> 。</td>
</tr>
</tbody>
</table>
</template>
