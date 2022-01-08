<template><h1 id="元素的分类" tabindex="-1"><a class="header-anchor" href="#元素的分类" aria-hidden="true">#</a> 元素的分类</h1>
<p>有些元素在浏览器中显示时总是『另起一行』的。这样的元素被称为 <strong>块</strong> 元素（block）。例如：<code>&lt;h1&gt;</code>、<code>&lt;p&gt;</code>、<code>&lt;ul&gt;</code>、<code>&lt;table&gt;</code> 等。</p>
<p><strong>块（block）元素的特点：</strong></p>
<ul>
<li>独占一行。</li>
<li>默认，与父元素同宽，高度取决于内容。</li>
<li>与此同时，还可以人为指定宽高。</li>
</ul>
<p>有些元素在显示时总是与它的临近元素『出现在同一行内』。这些元素被称为 <strong>内联</strong> 元素（inline）。例如：<code>&lt;a&gt;</code>、<code>&lt;strong&gt;</code> 等。</p>
<p><strong>内联（inline）元素的特点：</strong></p>
<ul>
<li>不要求独占一行</li>
<li>默认，宽高取决于其内容</li>
<li>无法人为指定宽高</li>
</ul>
<p>还有一种元素兼具了块级元素和内联元素的特征，被称为 <strong>内联块</strong> 元素（inline-block）。例如：<code>&lt;img&gt;</code> 。</p>
<p><strong>内敛块（Inlie-Block）元素的特点：</strong></p>
<ul>
<li>不要求独占一行</li>
<li>可以人为指定宽高</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:left">名称</th>
<th style="text-align:center">是否独占一行</th>
<th style="text-align:center">能否设置宽高</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Block 元素</td>
<td style="text-align:center">是</td>
<td style="text-align:center">是</td>
</tr>
<tr>
<td style="text-align:left">Inline 元素</td>
<td style="text-align:center">否</td>
<td style="text-align:center">否</td>
</tr>
<tr>
<td style="text-align:left">Inline-Block 元素</td>
<td style="text-align:center">否</td>
<td style="text-align:center">是</td>
</tr>
</tbody>
</table>
<p><code>&lt;div&gt;</code> 是一个无语义的块级元素，<code>&lt;span&gt;</code> 是一个无语义的内联元素。</p>
</template>
