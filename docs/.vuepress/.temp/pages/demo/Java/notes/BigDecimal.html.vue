<template><h1 id="bigdecimal使用" tabindex="-1"><a class="header-anchor" href="#bigdecimal使用" aria-hidden="true">#</a> BigDecimal使用</h1>
<h2 id="_1、常用方法详解" tabindex="-1"><a class="header-anchor" href="#_1、常用方法详解" aria-hidden="true">#</a> 1、常用方法详解</h2>
<p><strong>1.1、常用方法</strong></p>
<ul>
<li><strong>add(BigDecimal)</strong></li>
</ul>
<p>BigDecimal对象中的值相加，返回BigDecimal对象</p>
<ul>
<li><strong>subtract(BigDecimal)</strong></li>
</ul>
<p>BigDecimal对象中的值相减，返回BigDecimal对象</p>
<ul>
<li><strong>multiply(BigDecimal)</strong></li>
</ul>
<p>BigDecimal对象中的值相乘，返回BigDecimal对象</p>
<ul>
<li><strong>divide(BigDecimal)</strong></li>
</ul>
<p>BigDecimal对象中的值相除，返回BigDecimal对象</p>
<ul>
<li><strong>toString()</strong></li>
</ul>
<p>将BigDecimal对象中的值转换成字符串</p>
<ul>
<li><strong>doubleValue()</strong></li>
</ul>
<p>将BigDecimal对象中的值转换成双精度数</p>
<ul>
<li><strong>floatValue()</strong></li>
</ul>
<p>将BigDecimal对象中的值转换成单精度数</p>
<ul>
<li><strong>longValue()</strong></li>
</ul>
<p>将BigDecimal对象中的值转换成长整数</p>
<ul>
<li><strong>intValue()</strong></li>
</ul>
<p>将BiDecimal对象中的值转换成整数</p>
<p><strong>1.2、BigDecimal大小比较</strong></p>
<p>java中对BigDecimal比较大小一般用的是bigdemical的compareTo方法</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">int</span> a <span class="token operator">=</span> bigdemical<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>bigdemical2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>返回结果分析：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>a <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>表示bigdemical小于bigdemical2；
a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>表示bigdemical等于bigdemical2；
a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>表示bigdemical大于bigdemical2；
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>举例：a大于等于b</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">new</span> <span class="token function">bigdemica</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token function">bigdemical</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">>=</span> <span class="token number">0</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_2、bigdecimal格式化" tabindex="-1"><a class="header-anchor" href="#_2、bigdecimal格式化" aria-hidden="true">#</a> 2、BigDecimal格式化</h2>
<blockquote>
<p>由于NumberFormat类的format()方法可以使用BigDecimal对象作为其参数，可以利用BigDecimal对超出16位有效数字的货币值，百分值，以及一般数值进行格式化控制。</p>
</blockquote>
<blockquote>
<p>以利用BigDecimal对货币和百分比格式化为例。首先，创建BigDecimal对象，进行BigDecimal的算术运算后，分别建立对货币和百分比格式化的引用，最后利用BigDecimal对象作为format()方法的参数，输出其格式化的货币值和百分比。</p>
</blockquote>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">NumberFormat</span> currency <span class="token operator">=</span> <span class="token class-name">NumberFormat</span><span class="token punctuation">.</span><span class="token function">getCurrencyInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//建立货币格式化引用</span>
<span class="token class-name">NumberFormat</span> percent <span class="token operator">=</span> <span class="token class-name">NumberFormat</span><span class="token punctuation">.</span><span class="token function">getPercentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//建立百分比格式化引用</span>
percent<span class="token punctuation">.</span><span class="token function">setMaximumFractionDigits</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//百分比小数点最多3位</span>

<span class="token class-name">BigDecimal</span> loanAmount <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">"15000.48"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//贷款金额</span>
<span class="token class-name">BigDecimal</span> interestRate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">"0.008"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//利率</span>
<span class="token class-name">BigDecimal</span> interest <span class="token operator">=</span> loanAmount<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>interestRate<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//相乘</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"贷款金额:\t"</span> <span class="token operator">+</span> currency<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>loanAmount<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"利率:\t"</span> <span class="token operator">+</span> percent<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>interestRate<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"利息:\t"</span> <span class="token operator">+</span> currency<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>interest<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>贷款金额: ￥15,000.48 
利率: 0.8% 
利息: ￥120.00
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>BigDecimal格式化保留2为小数，不足则补0：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NumberFormat</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> s<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">formatToNumber</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">"3.435"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">formatToNumber</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">formatToNumber</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">"0.00"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">formatToNumber</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">"0.001"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">formatToNumber</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">"0.006"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">formatToNumber</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">"0.206"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@desc</span> 1.0~1之间的BigDecimal小数，格式化后失去前面的0,则前面直接加上0。
     * 2.传入的参数等于0，则直接返回字符串"0.00"
     * 3.大于1的小数，直接格式化返回字符串
     * <span class="token keyword">@param</span> <span class="token parameter">obj</span>传入的小数
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">formatToNumber</span><span class="token punctuation">(</span><span class="token class-name">BigDecimal</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">DecimalFormat</span> df <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DecimalFormat</span><span class="token punctuation">(</span><span class="token string">"#.00"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token class-name">BigDecimal</span><span class="token punctuation">.</span>ZERO<span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">"0.00"</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token class-name">BigDecimal</span><span class="token punctuation">.</span>ZERO<span class="token punctuation">)</span><span class="token operator">></span><span class="token number">0</span><span class="token operator">&amp;&amp;</span>obj<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">"0"</span><span class="token operator">+</span>df<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> df<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>结果为：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token number">3.44</span>
<span class="token number">0.00</span>
<span class="token number">0.00</span>
<span class="token number">0.00</span>
<span class="token number">0.01</span>
<span class="token number">0.21</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_3、bigdecimal常见异常" tabindex="-1"><a class="header-anchor" href="#_3、bigdecimal常见异常" aria-hidden="true">#</a> 3、BigDecimal常见异常</h2>
<p><strong>除法的时候出现异常</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>ArithmeticException</span><span class="token operator">:</span> <span class="token class-name">Non</span><span class="token operator">-</span>terminating decimal expansion<span class="token punctuation">;</span> no exact representable decimal result
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>原因分析：</strong></p>
<blockquote>
<p>通过BigDecimal的divide方法进行除法时当不整除，出现无限循环小数时，就会抛异常：java.lang.ArithmeticException: Non-terminating decimal expansion; no exact representable decimal result.</p>
</blockquote>
<p><strong>解决方法：</strong></p>
<blockquote>
<p>divide方法设置精确的小数点，如：divide(xxxxx,2)</p>
</blockquote>
<h2 id="_4、工具类" tabindex="-1"><a class="header-anchor" href="#_4、工具类" aria-hidden="true">#</a> 4、工具类</h2>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>vivo<span class="token punctuation">.</span>ars<span class="token punctuation">.</span>util</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>math<span class="token punctuation">.</span></span><span class="token class-name">BigDecimal</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 用于高精确处理常用的数学运算
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ArithmeticUtils</span> <span class="token punctuation">{</span>
    <span class="token comment">//默认除法运算精度</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> DEF_DIV_SCALE <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 提供精确的加法运算
     *
     * <span class="token keyword">@param</span> <span class="token parameter">v1</span> 被加数
     * <span class="token keyword">@param</span> <span class="token parameter">v2</span> 加数
     * <span class="token keyword">@return</span> 两个参数的和
     */</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">double</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">double</span> v1<span class="token punctuation">,</span> <span class="token keyword">double</span> v2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BigDecimal</span> b1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token class-name">Double</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>v1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BigDecimal</span> b2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token class-name">Double</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>v2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> b1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>b2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">doubleValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 提供精确的加法运算
     *
     * <span class="token keyword">@param</span> <span class="token parameter">v1</span> 被加数
     * <span class="token keyword">@param</span> <span class="token parameter">v2</span> 加数
     * <span class="token keyword">@return</span> 两个参数的和
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">BigDecimal</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">String</span> v1<span class="token punctuation">,</span> <span class="token class-name">String</span> v2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BigDecimal</span> b1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span>v1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BigDecimal</span> b2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span>v2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> b1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>b2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 提供精确的加法运算
     *
     * <span class="token keyword">@param</span> <span class="token parameter">v1</span> 被加数
     * <span class="token keyword">@param</span> <span class="token parameter">v2</span> 加数
     * <span class="token keyword">@param</span> <span class="token parameter">scale</span> 保留scale 位小数
     * <span class="token keyword">@return</span> 两个参数的和
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">String</span> v1<span class="token punctuation">,</span> <span class="token class-name">String</span> v2<span class="token punctuation">,</span> <span class="token keyword">int</span> scale<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>scale <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span>
                    <span class="token string">"The scale must be a positive integer or zero"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">BigDecimal</span> b1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span>v1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BigDecimal</span> b2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span>v2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> b1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>b2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setScale</span><span class="token punctuation">(</span>scale<span class="token punctuation">,</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span>ROUND_HALF_UP<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 提供精确的减法运算
     *
     * <span class="token keyword">@param</span> <span class="token parameter">v1</span> 被减数
     * <span class="token keyword">@param</span> <span class="token parameter">v2</span> 减数
     * <span class="token keyword">@return</span> 两个参数的差
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">double</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token keyword">double</span> v1<span class="token punctuation">,</span> <span class="token keyword">double</span> v2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BigDecimal</span> b1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token class-name">Double</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>v1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BigDecimal</span> b2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token class-name">Double</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>v2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> b1<span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span>b2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">doubleValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 提供精确的减法运算。
     *
     * <span class="token keyword">@param</span> <span class="token parameter">v1</span> 被减数
     * <span class="token keyword">@param</span> <span class="token parameter">v2</span> 减数
     * <span class="token keyword">@return</span> 两个参数的差
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">BigDecimal</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token class-name">String</span> v1<span class="token punctuation">,</span> <span class="token class-name">String</span> v2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BigDecimal</span> b1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span>v1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BigDecimal</span> b2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span>v2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> b1<span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span>b2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 提供精确的减法运算
     *
     * <span class="token keyword">@param</span> <span class="token parameter">v1</span> 被减数
     * <span class="token keyword">@param</span> <span class="token parameter">v2</span> 减数
     * <span class="token keyword">@param</span> <span class="token parameter">scale</span> 保留scale 位小数
     * <span class="token keyword">@return</span> 两个参数的差
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token class-name">String</span> v1<span class="token punctuation">,</span> <span class="token class-name">String</span> v2<span class="token punctuation">,</span> <span class="token keyword">int</span> scale<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>scale <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span>
                    <span class="token string">"The scale must be a positive integer or zero"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">BigDecimal</span> b1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span>v1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BigDecimal</span> b2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span>v2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> b1<span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span>b2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setScale</span><span class="token punctuation">(</span>scale<span class="token punctuation">,</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span>ROUND_HALF_UP<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 提供精确的乘法运算
     *
     * <span class="token keyword">@param</span> <span class="token parameter">v1</span> 被乘数
     * <span class="token keyword">@param</span> <span class="token parameter">v2</span> 乘数
     * <span class="token keyword">@return</span> 两个参数的积
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">double</span> <span class="token function">mul</span><span class="token punctuation">(</span><span class="token keyword">double</span> v1<span class="token punctuation">,</span> <span class="token keyword">double</span> v2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BigDecimal</span> b1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token class-name">Double</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>v1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BigDecimal</span> b2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token class-name">Double</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>v2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> b1<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>b2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">doubleValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 提供精确的乘法运算
     *
     * <span class="token keyword">@param</span> <span class="token parameter">v1</span> 被乘数
     * <span class="token keyword">@param</span> <span class="token parameter">v2</span> 乘数
     * <span class="token keyword">@return</span> 两个参数的积
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">BigDecimal</span> <span class="token function">mul</span><span class="token punctuation">(</span><span class="token class-name">String</span> v1<span class="token punctuation">,</span> <span class="token class-name">String</span> v2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BigDecimal</span> b1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span>v1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BigDecimal</span> b2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span>v2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> b1<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>b2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 提供精确的乘法运算
     *
     * <span class="token keyword">@param</span> <span class="token parameter">v1</span> 被乘数
     * <span class="token keyword">@param</span> <span class="token parameter">v2</span> 乘数
     * <span class="token keyword">@param</span> <span class="token parameter">scale</span> 保留scale 位小数
     * <span class="token keyword">@return</span> 两个参数的积
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">double</span> <span class="token function">mul</span><span class="token punctuation">(</span><span class="token keyword">double</span> v1<span class="token punctuation">,</span> <span class="token keyword">double</span> v2<span class="token punctuation">,</span> <span class="token keyword">int</span> scale<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BigDecimal</span> b1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token class-name">Double</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>v1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BigDecimal</span> b2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token class-name">Double</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>v2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">round</span><span class="token punctuation">(</span>b1<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>b2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">doubleValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> scale<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 提供精确的乘法运算
     *
     * <span class="token keyword">@param</span> <span class="token parameter">v1</span> 被乘数
     * <span class="token keyword">@param</span> <span class="token parameter">v2</span> 乘数
     * <span class="token keyword">@param</span> <span class="token parameter">scale</span> 保留scale 位小数
     * <span class="token keyword">@return</span> 两个参数的积
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">mul</span><span class="token punctuation">(</span><span class="token class-name">String</span> v1<span class="token punctuation">,</span> <span class="token class-name">String</span> v2<span class="token punctuation">,</span> <span class="token keyword">int</span> scale<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>scale <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span>
                    <span class="token string">"The scale must be a positive integer or zero"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">BigDecimal</span> b1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span>v1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BigDecimal</span> b2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span>v2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> b1<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>b2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setScale</span><span class="token punctuation">(</span>scale<span class="token punctuation">,</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span>ROUND_HALF_UP<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 提供（相对）精确的除法运算，当发生除不尽的情况时，精确到
     * 小数点以后10位，以后的数字四舍五入
     *
     * <span class="token keyword">@param</span> <span class="token parameter">v1</span> 被除数
     * <span class="token keyword">@param</span> <span class="token parameter">v2</span> 除数
     * <span class="token keyword">@return</span> 两个参数的商
     */</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">double</span> <span class="token function">div</span><span class="token punctuation">(</span><span class="token keyword">double</span> v1<span class="token punctuation">,</span> <span class="token keyword">double</span> v2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">div</span><span class="token punctuation">(</span>v1<span class="token punctuation">,</span> v2<span class="token punctuation">,</span> DEF_DIV_SCALE<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 提供（相对）精确的除法运算。当发生除不尽的情况时，由scale参数指
     * 定精度，以后的数字四舍五入
     *
     * <span class="token keyword">@param</span> <span class="token parameter">v1</span> 被除数
     * <span class="token keyword">@param</span> <span class="token parameter">v2</span> 除数
     * <span class="token keyword">@param</span> <span class="token parameter">scale</span> 表示表示需要精确到小数点以后几位。
     * <span class="token keyword">@return</span> 两个参数的商
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">double</span> <span class="token function">div</span><span class="token punctuation">(</span><span class="token keyword">double</span> v1<span class="token punctuation">,</span> <span class="token keyword">double</span> v2<span class="token punctuation">,</span> <span class="token keyword">int</span> scale<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>scale <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">"The scale must be a positive integer or zero"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">BigDecimal</span> b1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token class-name">Double</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>v1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BigDecimal</span> b2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token class-name">Double</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>v2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> b1<span class="token punctuation">.</span><span class="token function">divide</span><span class="token punctuation">(</span>b2<span class="token punctuation">,</span> scale<span class="token punctuation">,</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span>ROUND_HALF_UP<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">doubleValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 提供（相对）精确的除法运算。当发生除不尽的情况时，由scale参数指
     * 定精度，以后的数字四舍五入
     *
     * <span class="token keyword">@param</span> <span class="token parameter">v1</span> 被除数
     * <span class="token keyword">@param</span> <span class="token parameter">v2</span> 除数
     * <span class="token keyword">@param</span> <span class="token parameter">scale</span> 表示需要精确到小数点以后几位
     * <span class="token keyword">@return</span> 两个参数的商
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">div</span><span class="token punctuation">(</span><span class="token class-name">String</span> v1<span class="token punctuation">,</span> <span class="token class-name">String</span> v2<span class="token punctuation">,</span> <span class="token keyword">int</span> scale<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>scale <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">"The scale must be a positive integer or zero"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">BigDecimal</span> b1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span>v1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BigDecimal</span> b2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span>v1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> b1<span class="token punctuation">.</span><span class="token function">divide</span><span class="token punctuation">(</span>b2<span class="token punctuation">,</span> scale<span class="token punctuation">,</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span>ROUND_HALF_UP<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 提供精确的小数位四舍五入处理
     *
     * <span class="token keyword">@param</span> <span class="token parameter">v</span> 需要四舍五入的数字
     * <span class="token keyword">@param</span> <span class="token parameter">scale</span> 小数点后保留几位
     * <span class="token keyword">@return</span> 四舍五入后的结果
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">double</span> <span class="token function">round</span><span class="token punctuation">(</span><span class="token keyword">double</span> v<span class="token punctuation">,</span> <span class="token keyword">int</span> scale<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>scale <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">"The scale must be a positive integer or zero"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">BigDecimal</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token class-name">Double</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> b<span class="token punctuation">.</span><span class="token function">setScale</span><span class="token punctuation">(</span>scale<span class="token punctuation">,</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span>ROUND_HALF_UP<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">doubleValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 提供精确的小数位四舍五入处理
     *
     * <span class="token keyword">@param</span> <span class="token parameter">v</span> 需要四舍五入的数字
     * <span class="token keyword">@param</span> <span class="token parameter">scale</span> 小数点后保留几位
     * <span class="token keyword">@return</span> 四舍五入后的结果
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">round</span><span class="token punctuation">(</span><span class="token class-name">String</span> v<span class="token punctuation">,</span> <span class="token keyword">int</span> scale<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>scale <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span>
                    <span class="token string">"The scale must be a positive integer or zero"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">BigDecimal</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> b<span class="token punctuation">.</span><span class="token function">setScale</span><span class="token punctuation">(</span>scale<span class="token punctuation">,</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span>ROUND_HALF_UP<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 取余数
     *
     * <span class="token keyword">@param</span> <span class="token parameter">v1</span> 被除数
     * <span class="token keyword">@param</span> <span class="token parameter">v2</span> 除数
     * <span class="token keyword">@param</span> <span class="token parameter">scale</span> 小数点后保留几位
     * <span class="token keyword">@return</span> 余数
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">remainder</span><span class="token punctuation">(</span><span class="token class-name">String</span> v1<span class="token punctuation">,</span> <span class="token class-name">String</span> v2<span class="token punctuation">,</span> <span class="token keyword">int</span> scale<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>scale <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span>
                    <span class="token string">"The scale must be a positive integer or zero"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">BigDecimal</span> b1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span>v1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BigDecimal</span> b2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span>v2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> b1<span class="token punctuation">.</span><span class="token function">remainder</span><span class="token punctuation">(</span>b2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setScale</span><span class="token punctuation">(</span>scale<span class="token punctuation">,</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span>ROUND_HALF_UP<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 取余数 BigDecimal
     *
     * <span class="token keyword">@param</span> <span class="token parameter">v1</span> 被除数
     * <span class="token keyword">@param</span> <span class="token parameter">v2</span> 除数
     * <span class="token keyword">@param</span> <span class="token parameter">scale</span> 小数点后保留几位
     * <span class="token keyword">@return</span> 余数
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">BigDecimal</span> <span class="token function">remainder</span><span class="token punctuation">(</span><span class="token class-name">BigDecimal</span> v1<span class="token punctuation">,</span> <span class="token class-name">BigDecimal</span> v2<span class="token punctuation">,</span> <span class="token keyword">int</span> scale<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>scale <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span>
                    <span class="token string">"The scale must be a positive integer or zero"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> v1<span class="token punctuation">.</span><span class="token function">remainder</span><span class="token punctuation">(</span>v2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setScale</span><span class="token punctuation">(</span>scale<span class="token punctuation">,</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span>ROUND_HALF_UP<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 比较大小
     *
     * <span class="token keyword">@param</span> <span class="token parameter">v1</span> 被比较数
     * <span class="token keyword">@param</span> <span class="token parameter">v2</span> 比较数
     * <span class="token keyword">@return</span> 如果v1 大于v2 则 返回true 否则false
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token class-name">String</span> v1<span class="token punctuation">,</span> <span class="token class-name">String</span> v2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BigDecimal</span> b1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span>v1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BigDecimal</span> b2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span>v2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> bj <span class="token operator">=</span> b1<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>b2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">boolean</span> res<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>bj <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span>
            res <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span>
            res <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br><span class="line-number">279</span><br><span class="line-number">280</span><br><span class="line-number">281</span><br><span class="line-number">282</span><br><span class="line-number">283</span><br><span class="line-number">284</span><br><span class="line-number">285</span><br><span class="line-number">286</span><br><span class="line-number">287</span><br><span class="line-number">288</span><br><span class="line-number">289</span><br><span class="line-number">290</span><br></div></div><h2 id="_5、总结" tabindex="-1"><a class="header-anchor" href="#_5、总结" aria-hidden="true">#</a> 5、总结</h2>
<blockquote>
<p>在需要精确的小数计算时再使用BigDecimal，BigDecimal的性能比double和float差，在处理庞大，复杂的运算时尤为明显。故一般精度的计算没必要使用BigDecimal。尽量使用参数类型为String的构造函数。</p>
</blockquote>
<blockquote>
<p>BigDecimal都是不可变的（immutable）的， 在进行每一次四则运算时，都会产生一个新的对象 ，所以在做加减乘除运算时要记得要保存操作后的值。</p>
</blockquote>
</template>
