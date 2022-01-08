<template><h1 id="flex-布局-上" tabindex="-1"><a class="header-anchor" href="#flex-布局-上" aria-hidden="true">#</a> Flex 布局（上）</h1>
<h2 id="_1-前言-历史" tabindex="-1"><a class="header-anchor" href="#_1-前言-历史" aria-hidden="true">#</a> 1. 前言/历史</h2>
<p>网页布局（layout）是 CSS 的一个重点应用。布局最核心的问题是：<strong>如何在一行中显示两个 block 元素？</strong></p>
<p>从历史发展的时间顺序来看，解决这个问题的方案有三种：</p>
<ul>
<li>使用<code>&lt;table&gt;</code>元素布局；</li>
<li>使用 <strong>position:static</strong> + <strong>float</strong> 布局；</li>
<li>使用 <strong>position:relative</strong> + <strong>position:absolute</strong> 布局。</li>
</ul>
<p><img src="/images/div_0.jpg" alt="img"></p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>语义化是 HTML5 的一个重点，例如它提出 <code>&lt;strong&gt;</code> 来替代 <code>&lt;b&gt;</code>。对于常用于布局的无语义的 <code>&lt;div&gt;</code> 元素，HTML5 也提出了几个替代它的语义化元素。</p>
</div>
<p>历史上，在经历了上述三种方案的发展之后，W3C 组织最终提出了一个统一的标准的解决方案：<strong>Flex</strong> 布局。</p>
<h2 id="_2-flex-布局是什么" tabindex="-1"><a class="header-anchor" href="#_2-flex-布局是什么" aria-hidden="true">#</a> 2. Flex 布局是什么？</h2>
<p>Flex 是 Flexible Box 的缩写，意为 “弹性布局” ，用来为盒状模型提供最大的灵活性。</p>
<p>任何一个容器都可以指定为 Flex 布局。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>行内元素也可以使用 Flex 布局。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>flex</strong> 和 <strong>inline-flex</strong> 的区别在于，上述例子中的 flex 类型的 .box 是独占一行，而 inline-flex 的 .box 不要求独占一行。</p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>父元素设置为： <code>display: flex</code> 以后，其子元素的 <code>float</code> 、<code>clear</code> 和 <code>vertical-align</code> 属性将失效。</p>
</div>
<h2 id="_3-基本概念" tabindex="-1"><a class="header-anchor" href="#_3-基本概念" aria-hidden="true">#</a> 3. 基本概念</h2>
<p>采用 flex 布局的元素，称为 flex 容器（flex container），简称『容器』。它的所有子元素自动成为容器成员，称为 flex 项目（flex item），简称『项目』。</p>
<p>一个 flex 容器中默认存在两根轴：主轴（main axis）和交叉轴（cross axis）。主轴和交叉轴成 90° 垂直交叉，这也是为什么第二根轴被称为『交叉』轴的原因。</p>
<p><img src="/images/flex-01.png" alt="flex-01"></p>
<p>默认情况下，主轴是水平的，方向是从左往右，那么交叉轴自然就是垂直的。毫无疑问，主轴是水平还是垂直，以及它的方向，都是 <strong>可以设置</strong> 的 。</p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>主轴的相关属性会影响到交叉轴，但是反之，交叉轴影响不到主轴。</p>
</div>
<p>无论水平还是垂直，主轴的开始位置（与边框的交叉点）被称作 <strong>主轴的起点</strong>（main start）。与之对应的，结束的位置被称作 <strong>主轴的终点</strong>（main end）。同样，交叉轴也有起点和终点的概念。</p>
<ul>
<li>主轴水平时：
<ul>
<li>如果方向是从左往右，那么，毫无疑问，主轴的起点在左边线，终点在右边线。</li>
<li>如果方向是从右往左，那么，毫无疑问，主轴的起点在右边线，终点在左边线。</li>
<li>主轴水平，那么交叉轴必然是垂直。此时，无论主轴是从左往右，还是从右往左，<strong>交叉轴的方向都是从上往下</strong> 。所以，交叉轴的起点在上边线，终点在下边线。</li>
<li><img src="/images/flex-02.png" alt="flex-02"></li>
</ul>
</li>
</ul>
<p>主轴垂直时：</p>
<ul>
<li>如果方向是从上往下，那么，毫无疑问，主轴的起点在上边线，终点在下边线。</li>
<li>如果方向是从下往上，那么，毫无疑问，主轴的起点在下边线，终点在上边线。</li>
<li>主轴垂直，那么交叉轴必然是水平。此时，无论主轴是从上往下，还是从下往上，<strong>交叉轴的方向都是从左往右</strong>。那么，毫无疑问，交叉轴的起点在左边线，终点在右边线。</li>
<li><img src="/images/flex-03.png" alt="flex-03"></li>
</ul>
<p>flex 容器的核心属性常见有以下 4 个：</p>
<ul>
<li>flex-direction</li>
<li>flex-wrap</li>
<li>justify-content</li>
<li>align-items</li>
</ul>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>这 4 个属性都是设置在容器元素上的。</p>
</div>
<h2 id="_4-核心属性-flex-direction" tabindex="-1"><a class="header-anchor" href="#_4-核心属性-flex-direction" aria-hidden="true">#</a> 4. 核心属性：flex-direction</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> row | row-reverse | column | column-reverse<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>默认值为 <strong>row</strong> 。</p>
<p><strong>flex-direction</strong> 属性控制着主轴的水平/垂直，以及方向。</p>
<ul>
<li>
<p><code>flex-direction: row</code></p>
<p>主轴水平，方向是从左往右。主轴起点在左，终点在右。</p>
<p><img src="/images/flex-04.png" alt="flex-04"></p>
<p>此时，交叉轴自然就是垂直，方向是从上往下。</p>
</li>
<li>
<p><code>flex-direction: row-reverse</code></p>
<p>主轴水平，方向是从右往左。主轴起点在右，终点在左。</p>
<p><img src="/images/flex-05.png" alt="flex-05"></p>
<p>此时，交叉轴自然就是垂直，方向仍然是从上往下。</p>
</li>
<li>
<p><code>flex-direction: column</code></p>
<p>主轴垂直，方向是从上往下。主轴起点在上，终点在下。</p>
<p><img src="/images/flex-06.png" alt="flex-06"></p>
<p>此时，交叉轴自然就是水平，方向是从左往右。</p>
</li>
<li>
<p><code>flex-direction: column-reverse</code></p>
<p>主轴垂直，方向是从下往上。主轴起点在下，终点在上。</p>
<p><img src="/images/flex-07.png" alt="flex-07"></p>
<p>此时，交叉轴自然就是水平，方向仍然是从左往右。</p>
</li>
</ul>
<h2 id="_5-核心属性-flex-wrap" tabindex="-1"><a class="header-anchor" href="#_5-核心属性-flex-wrap" aria-hidden="true">#</a> 5. 核心属性：flex-wrap</h2>
<p>默认情况下，flex 元素的子元素（item）都『串』在主轴上（无论主轴是水平还是垂直）。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> nowrap | wrap | wrap-reverse<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>flex-wrap</strong> 属性定义，如果一条轴线排不下，如何换行。</p>
<p>默认值为 <code>nowrap</code> 。</p>
<ul>
<li>
<p><code>flex-wrap: nowrap</code></p>
<p><em><strong>nowrap</strong></em> 表示不换行，即，flex 元素的所有子元素，都要在同一行。</p>
<p><img src="/images/flex-08.png" alt="flex-08"></p>
</li>
<li>
<p><code>flex-wrap: wrap</code></p>
<p>表示换行，换行的方向是沿交叉轴方向换行。形如：</p>
<p><img src="/images/flex-09.png" alt="flex-09"></p>
<ul>
<li><code>flex-direction: row | row-reverse</code> 时，由于交叉轴的方向是从上往下的。因此，换行时，第二行就在第一行的『下』面。</li>
<li><code>flex-direction: column | column-reverse</code> 时，由于交叉轴方向是从左往右。因此，换行时，第二行就在第一行的『右』边。</li>
</ul>
</li>
<li>
<p><code>flex-wrap: wrap-reverse</code></p>
<p>表示逆向换行，换上的方向是『逆』交叉轴方向。形如：</p>
<p><img src="/images/flex-10.png" alt="flex-10"></p>
<p>由于这里交叉轴的方向是从上往下，因此，逆向换行时，第二行就在第一行的『上』面。</p>
</li>
</ul>
<h2 id="_6-二合一属性-flex-flow-属性" tabindex="-1"><a class="header-anchor" href="#_6-二合一属性-flex-flow-属性" aria-hidden="true">#</a> 6. 二合一属性：flex-flow 属性</h2>
<p>flex-flow 属性不是『新』属性，它是 flex-direction + flex-wrap 属性的组合加简写形式。默认值为 <code>row nowrap</code> 。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">flex-flow</span><span class="token punctuation">:</span> &lt;flex-direction> || &lt;flex-wrap><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_7-核心属性-justify-content" tabindex="-1"><a class="header-anchor" href="#_7-核心属性-justify-content" aria-hidden="true">#</a> 7. 核心属性：justify-content</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-start | flex-end | center | space-between | space-around<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><em><strong>justify-content</strong></em> 属性定义了项目在『主轴』上的对齐方式。</p>
<table>
<thead>
<tr>
<th style="text-align:left">#</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">flex-start</td>
<td style="text-align:left">默认值，所有 item 整体都靠近主轴的起点位置</td>
</tr>
<tr>
<td style="text-align:left">flex-end</td>
<td style="text-align:left">所有 item 整体靠近主轴的终点位置</td>
</tr>
<tr>
<td style="text-align:left">center</td>
<td style="text-align:left">所有 item 整体居中，主轴的起点和终点有留白</td>
</tr>
<tr>
<td style="text-align:left">space-between</td>
<td style="text-align:left">起点-终点两端对齐， 子元素间均分空白，边线处无间距。</td>
</tr>
<tr>
<td style="text-align:left">space-around</td>
<td style="text-align:left">和 space-between 类似。 不过起点-终点和边框间有间距。 这个间距等于 1/2 的子元素间的间距。</td>
</tr>
</tbody>
</table>
<p><img src="/images/flex-11.png" alt="flex-11"></p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>这里是以 <code>flex-direction: row</code> 为样本进行的举例。当 <code>flex-direction</code> 属性值为其它值时，相关概念是一样的。</p>
</div>
<h2 id="_8-核心属性-align-items" tabindex="-1"><a class="header-anchor" href="#_8-核心属性-align-items" aria-hidden="true">#</a> 8. 核心属性：align-items</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> flex-start | flex-end | center | baseline | stretch<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>align-items</strong> 属性定义 flex 元素的子元素（item）在交叉轴上如何对齐。</p>
<p>它可能取 5 个值。</p>
<table>
<thead>
<tr>
<th style="text-align:left">#</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code>flex-start</code></td>
<td style="text-align:left">所有子元素都对齐交叉轴的起点。</td>
</tr>
<tr>
<td style="text-align:left"><code>flex-end</code></td>
<td style="text-align:left">所有子元素都对齐交叉轴的终点。</td>
</tr>
<tr>
<td style="text-align:left"><code>center</code></td>
<td style="text-align:left">所有子元素都对齐交叉轴中点。</td>
</tr>
<tr>
<td style="text-align:left"><code>baseline</code></td>
<td style="text-align:left">以所有子元素的第一行文字的基线对齐。</td>
</tr>
<tr>
<td style="text-align:left"><code>stretch</code></td>
<td style="text-align:left">默认值。 如果子元素自身未设置高度或设为 auto，那么子元素将被拉伸，以便同时对齐交叉轴的起点和终点。</td>
</tr>
</tbody>
</table>
<p><img src="/images/flex-12.png" alt="flex-12"></p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>这里是以 <code>flex-direction: row</code> 为样本进行的举例。当 <code>flex-direction</code> 属性值为其它值时，相关概念是一样的。</p>
</div>
<h2 id="_9-align-content-属性" tabindex="-1"><a class="header-anchor" href="#_9-align-content-属性" aria-hidden="true">#</a> 9. align-content 属性</h2>
<p><strong>align-content</strong> 属性和 flex-wrap 属性有点关系。当 <code>flex-wrap: wrap</code> 和 <code>flex-wrap:wrap-reverse</code> 时，如果 Flex 元素的子元素（item）多到一行/一列放不下时，会出现折行的情况。这时，逻辑上就相当于有了多根平行的主轴。</p>
<p><img src="/images/flex-09.png" alt="flex-09"></p>
<p><strong>align-content</strong> 属性就是用来设置这多根平行的主轴在交叉轴方向上的对齐方式。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">align-content</span><span class="token punctuation">:</span> flex-start | flex-end | center | space-between | space-around | stretch<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>注意</p>
<p>如果项目只有一根轴线，该属性不起作用。</p>
<ul>
<li>
<p><code>align-content: flex-start</code></p>
<p>多根轴线整体靠近主轴的起点：</p>
<p><img src="/images/align-content-flex-start.png" alt="align-content-flex-start.png"></p>
<p>如上例，三根主轴轴线紧靠在一起，整体对齐交叉轴的起点位置。</p>
</li>
<li>
<p><code>align-content: flex-end</code></p>
<p>多根轴线整体靠近主轴的终点：</p>
<p><img src="/images/align-content-flex-end.png" alt="align-content-flex-end.png"></p>
<p>如上例，三根主轴轴线紧靠在一起，整体对齐交叉轴的终点位置。</p>
</li>
<li>
<p><code>align-content: flex-center</code></p>
<p>多根轴线整体在主轴上居中：</p>
<p><img src="/images/align-content-center.png" alt="align-content-center.png"></p>
<p>如上例，三根主轴轴线紧靠在一起，在交叉轴方上居中，即交叉轴的起点和终点位置时留白。</p>
</li>
<li>
<p><code>align-content: space-between</code></p>
<p>多根轴线之间有间距，且最两端的轴线紧挨边线。</p>
<p><img src="/images/align-content-between.png" alt="align-content-between.png"></p>
<p>如上例，三根主轴轴线之间有等宽的间隔，同时，第一根轴对齐交叉轴的起点，最后一根轴对齐交叉轴的终点。</p>
<p>上面这个图例优点小瑕疵，『对齐』表现得不明显。</p>
</li>
<li>
<p><code>align-content: space-around</code></p>
<p>多根轴线之间有间距，但最两端的轴线和边线有间距。</p>
<p><img src="/images/align-content-around.png" alt="align-content-around.png"></p>
<p>如上例，三根主轴轴线之间有等宽的间隔，同时，第一根轴和交叉轴的起点有间隔，最后一根轴和交叉轴的终点有间隔，这个『间隔』等于轴与轴之间的间距的 1/2 。</p>
</li>
<li>
<p><code>align-content: stretch</code></p>
<p><img src="/images/align-content-stretch.png" alt="align-content-stretch.png"></p>
<p>这是默认值。每根主轴上的元素（item）会被拉伸，逻辑上，各个主轴一起均分交叉轴方向上的空间。前提是主轴上的元素没有指定明确的长度，或者为 auto 。</p>
<p>不过，各个主轴之间也有间隙，整体呈 <code>主轴-间隙-主轴-间隙-...</code> 的形式。因此，第一根主轴是对齐交叉轴起点位置，而最后一根轴和交叉轴终点位置之间有间隙。</p>
</li>
</ul>
</template>
