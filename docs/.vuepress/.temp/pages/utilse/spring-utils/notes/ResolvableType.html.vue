<template><h1 id="spring-resolvabletype" tabindex="-1"><a class="header-anchor" href="#spring-resolvabletype" aria-hidden="true">#</a> Spring ResolvableType</h1>
<blockquote>
<p>ResolveableType 与 Java 的 Type 类型体系密切相关。请先了解另一篇笔记《虚拟机中的泛型类型信息》 的内容。</p>
</blockquote>
<h2 id="类型擦除" tabindex="-1"><a class="header-anchor" href="#类型擦除" aria-hidden="true">#</a> 类型擦除</h2>
<p>由于类型擦除，当你在实例化泛型对象时，泛型的信息会受影响，被擦除（替换为 Object 等）。例如：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> stringList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>1</p>
<p>上述代码中的 <strong>stringList</strong> 的泛型类型 <strong>String</strong> 会被擦除，变量 <strong>stringList</strong> 的实际类型会变为 <strong>ArrayList</strong>，而非 <code>ArrayList&lt;String&gt;</code> 。</p>
<p>但是好消息是，<strong>类型擦除只影响被实例化的类型参数，如果你使用在类定义中，泛型信息会被保留，在运行时可用</strong>。例如：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">StringList</span> <span class="token keyword">extends</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>

<span class="token class-name">StringList</span> stringList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>当你去使用 <em>StringList</em> 类型时，这里的 <em>String</em> 信息你是可以通过反射机制获取到的。</p>
<h2 id="resolvabletype-简介" tabindex="-1"><a class="header-anchor" href="#resolvabletype-简介" aria-hidden="true">#</a> ResolvableType 简介</h2>
<p><strong>ResolvableType</strong> 是 Spring <strong>4.0</strong> 的 feature 之一。</p>
<p>ResolvableType 为 java Type 体系中的所有类型提供了统一的数据结构以及 API 。</p>
<p>逻辑上，ResolvableType 就是一种特殊的容器，它可以用来包装 Type 类型（Class、ParameterizedType、TypeVariable、WildcardType、GenericArrayType）的数据类型的数据。</p>
<p>这样，你是<strong>直接操作</strong> ResolvableType，而<strong>间接操作</strong> Class、ParameterizedType、TypeVariable 等类型的数据。好处是无论 ResovableType 中封装的是何种 Type 类型， ResolvableType 有统一 API，且更简便好用。</p>
<h2 id="简单使用" tabindex="-1"><a class="header-anchor" href="#简单使用" aria-hidden="true">#</a> 简单使用</h2>
<p>以 Class 类型为例，用 ResolvableType 包装 Class 类型的常见方式有：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 其实本质上是一样的</span>
<span class="token class-name">ResolvableType</span> type1 <span class="token operator">=</span> <span class="token class-name">ResolvableType</span><span class="token punctuation">.</span><span class="token function">forClass</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">ResolvableType</span> type2 <span class="token operator">=</span> <span class="token class-name">ResolvableType</span><span class="token punctuation">.</span><span class="token function">forClass</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">ResolvableType</span> type3 <span class="token operator">=</span> <span class="token class-name">ResolvableType</span><span class="token punctuation">.</span><span class="token function">forClass</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">ResolvableType</span> type4 <span class="token operator">=</span> <span class="token class-name">ResolvableType</span><span class="token punctuation">.</span><span class="token function">forClass</span><span class="token punctuation">(</span><span class="token class-name">ArrayList</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>于此同时，ResolvableType 还提供了一个 <strong><code>.resolve()</code></strong> 方法，用于反向从 type 对象再反向求出其封装的 Class 对象。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Class</span> clazz1 <span class="token operator">=</span> type1<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// class java.lang.String</span>
<span class="token class-name">Class</span> clazz2 <span class="token operator">=</span> type2<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// class java.lang.String</span>
<span class="token class-name">Class</span> clazz3 <span class="token operator">=</span> type3<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// class java.lang.Integer</span>
<span class="token class-name">Class</span> clazz4 <span class="token operator">=</span> type4<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// class java.util.ArrayList</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>借助于这个 <strong>ResolvabType</strong> 对象，可以很方便地求出它（<code>String.class</code>）的直接父类类型、接口类型、泛型参数类型等类型有关信息。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>type1<span class="token punctuation">.</span><span class="token function">getSuperType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>type1<span class="token punctuation">.</span><span class="token function">getInterfaces</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>需要注意的是这些方法的返回值的类型，仍然是 <strong>ResolvableType</strong> 类型（或 <strong>ResolvableType</strong> 类型的数组）。</p>
<ul>
<li>
<p>包装域的类型</p>
<p><em>forField(Field field);</em></p>
</li>
<li>
<p>包装方法形参的类型</p>
<p><em>forMethodParameter(Method method, int parameterIndex)</em></p>
</li>
<li>
<p>包装方法的返回值类型</p>
<p><em>forMethodReturnType(Method method);</em></p>
</li>
<li>
<p>等等</p>
</li>
</ul>
<h2 id="在泛型中的使用" tabindex="-1"><a class="header-anchor" href="#在泛型中的使用" aria-hidden="true">#</a> 在泛型中的使用</h2>
<p>还是曾经的一个例子：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StringArrayList</span> <span class="token keyword">extends</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>在泛型和反射中，我们最常见的需求就是要去【<strong>求</strong>】出某个类的父类的泛型实参（ActualTypeArguments）。</p>
<p>通过 ResolvableType 实现这个需求就非常容易了：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">ResolvableType</span> resolvableType <span class="token operator">=</span> <span class="token class-name">ResolvableType</span><span class="token punctuation">.</span><span class="token function">forClass</span><span class="token punctuation">(</span><span class="token class-name">StringArrayList</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span> resolvableType<span class="token punctuation">.</span><span class="token function">getSuperType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getGenerics</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>
