<template><h1 id="断言-assert" tabindex="-1"><a class="header-anchor" href="#断言-assert" aria-hidden="true">#</a> 断言（Assert）</h1>
<h2 id="_1-概念" tabindex="-1"><a class="header-anchor" href="#_1-概念" aria-hidden="true">#</a> 1. 概念</h2>
<p>概念上 “断言” 代码就像是一个 “拦路虎” ，它预期一个 boolean 表达式的值 “应该” 为 true 。</p>
<p>如果 boolean 表达式的值为 true ，那么它会“放行”，代码流程继续向下执行；</p>
<p>如果 boolean 表达式的值为 false ，那么它会以抛出异常等方式返回，拒绝代码流程继续执行。</p>
<p>从最终效果上来看，断言就是实现了一个逻辑判断的功能。</p>
<h2 id="_2-java-assert" tabindex="-1"><a class="header-anchor" href="#_2-java-assert" aria-hidden="true">#</a> 2. Java assert</h2>
<p>在 JDK 1.4 开始 Java 也引入了断言特性。</p>
<p>默认情况下，JVM 是关闭断言功能的。即，你在 .java 文件中所编写的代码，在编译过程中，会被删除，不会出现在 .class 文件中。</p>
<p>如果想使用断言调试程序，需要手动打开断言功能。在命令行模式下运行 Java 程序时可增加参数 -enableassertions 或者 -ea 打开断言。</p>
<div class="custom-container danger"><p class="custom-container-title">警告</p>
<p>不要使用断言来替代 if 判断！断言是为了方便调试程序，并不是发布程序的组成部分（这是公论、常识和惯例，不是你开不开 -ea 的问题）。</p>
<p>assert 语法上是代码，但是功效上更像是一种注释！</p>
</div>
<p>断言是通过关键字 <code>assert</code> 来定义的，一般的，它有两种形式。</p>
<p>assert &lt;布尔表达式&gt;;</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">boolean</span> b <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
<span class="token keyword">assert</span> b<span class="token punctuation">;</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>当 b 的值为 false 时，assert 就会抛出异常（AssertionError），因此，assert 后面的语句也就不会执行了。</p>
<p>assert &lt;布尔表达式&gt; : &lt;字符串&gt;;</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">boolean</span> b <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>  
<span class="token keyword">assert</span> b<span class="token operator">:</span> <span class="token string">"hello world"</span><span class="token punctuation">;</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>功能同上在，只不过可以指定异常信息。</p>
<h2 id="_3-spring-assert-工具类" tabindex="-1"><a class="header-anchor" href="#_3-spring-assert-工具类" aria-hidden="true">#</a> 3. Spring Assert 工具类</h2>
<p>Spring 框架自带的 Assert 工具类实际上就是在模拟 JDK assert 关键字的功能：当 boolean 表达式成立时，程序继续；不成立时，抛出异常，阻止程序的继续执行。</p>
<p>Assert 类中的常用断言方法：</p>
<CodeGroup>
<CodeGroupItem title="通用判断">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * 预期布尔表达式 “应该” 成立。
 * 如果不成立则抛出异常，不再继续往下执行。
 * 另外，参数 message 参数用于自定义异常信息。
 */</span>
<span class="token keyword">void</span> <span class="token function">isTrue</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> expression<span class="token punctuation">,</span> <span class="token class-name">String</span> message<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="判空">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 预期参数 object “应该” 为空。</span>
<span class="token keyword">void</span> <span class="token function">isNull</span><span class="token punctuation">(</span><span class="token class-name">Object</span> object<span class="token punctuation">,</span> <span class="token class-name">String</span> message<span class="token punctuation">)</span>

<span class="token comment">// 预期参数 object “应该” 非空。这和 notNull 断言规则相反</span>
<span class="token keyword">void</span> <span class="token function">notNull</span><span class="token punctuation">(</span><span class="token class-name">Object</span> object<span class="token punctuation">,</span> <span class="token class-name">String</span> message<span class="token punctuation">)</span>

<span class="token comment">// 预期参数 text “应该” 非空（not empty）。</span>
<span class="token keyword">void</span> <span class="token function">hasLength</span><span class="token punctuation">(</span><span class="token class-name">String</span> text<span class="token punctuation">,</span> <span class="token class-name">String</span> message<span class="token punctuation">)</span>

<span class="token comment">// 预期参数 text “应该” 非空（not blank）。</span>
<span class="token keyword">void</span> <span class="token function">hasText</span><span class="token punctuation">(</span><span class="token class-name">String</span> text<span class="token punctuation">,</span> <span class="token class-name">String</span> message<span class="token punctuation">)</span>

<span class="token comment">// 预期参数 collection “应该” 非空（其中有元素）。</span>
<span class="token keyword">void</span> <span class="token function">notEmpty</span><span class="token punctuation">(</span><span class="token class-name">Collection</span> collection<span class="token punctuation">,</span> <span class="token class-name">String</span> message<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="类型判断">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 预期参数 obj 的类型 “应该” 是参数 type 所指定类型。</span>
<span class="token keyword">void</span> <span class="token function">isInstanceOf</span><span class="token punctuation">(</span><span class="token class-name">Class</span> type<span class="token punctuation">,</span> <span class="token class-name">Object</span> obj<span class="token punctuation">,</span> <span class="token class-name">String</span> message<span class="token punctuation">)</span>

<span class="token comment">// 预期参数 subType “应该” 是参数 superType 的子类，或实现类。</span>
<span class="token keyword">void</span> <span class="token function">isAssignable</span><span class="token punctuation">(</span><span class="token class-name">Class</span> superType<span class="token punctuation">,</span> <span class="token class-name">Class</span> subType<span class="token punctuation">,</span> <span class="token class-name">String</span> message<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></CodeGroupItem>
</CodeGroup>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>Spring Assert 的一个缺点:</p>
<p>你看一下 Spring Assert 的源码就会发现，它抛出的全部都是 IllegalArgumentException 。作为使用者，你无法去控制、影响这一点。</p>
</div>
</template>
