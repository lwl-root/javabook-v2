<template><h1 id="利用-java-枚举实现单例模式" tabindex="-1"><a class="header-anchor" href="#利用-java-枚举实现单例模式" aria-hidden="true">#</a> 利用 Java 枚举实现单例模式</h1>
<p>单元素的枚举类型已经成为实现 Singleton 的最佳方法。 —— 《Effective Java》</p>
<h2 id="_1-java-枚举" tabindex="-1"><a class="header-anchor" href="#_1-java-枚举" aria-hidden="true">#</a> 1. Java 枚举</h2>
<h3 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h3>
<p>首先，枚举类似类，一个枚举可以拥有成员变量，成员方法，构造方法。先来看枚举最基本的用法：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">enum</span> <span class="token class-name">Type</span> <span class="token punctuation">{</span>
    <span class="token class-name">A</span><span class="token punctuation">,</span> <span class="token class-name">B</span><span class="token punctuation">,</span> <span class="token class-name">C</span><span class="token punctuation">,</span> <span class="token class-name">D</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>创建 enum 时，编译器会自动为我们生成一个继承自 <em><code>java.lang.Enum</code></em> 的类，我们上面的 enum 可以简单看作：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Type</span> <span class="token keyword">extends</span> <span class="token class-name">Enum</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Type</span> <span class="token class-name">A</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Type</span> <span class="token class-name">B</span><span class="token punctuation">;</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>简单来说，上面的 Type 枚举相当于：</p>
<ol>
<li>有一个叫 Type 的类；</li>
<li>Type 类有且仅有 4 个对象；</li>
<li>这 4 个对象分别叫（也只能叫）A，B，C，D 。</li>
</ol>
<p>当然，这个构建 Type 的 A，B，C，D 四个实例的过程不是我们做的，一个 enum 的构造方法限制是 <em><code>private</code></em> 的，也就是不允许我们调用。</p>
<h3 id="枚举的类方法和实例方法-了解、自学" tabindex="-1"><a class="header-anchor" href="#枚举的类方法和实例方法-了解、自学" aria-hidden="true">#</a> 枚举的类方法和实例方法（了解、自学）</h3>
<p>上面说到，我们可以把 Type 看作一个类，而把 A，B，C，D。看作 Type 的一个实例。同样，在 enum 中，我们可以定义类和实例的变量以及方法。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">enum</span> <span class="token class-name">Type</span> <span class="token punctuation">{</span>
    <span class="token class-name">A</span><span class="token punctuation">,</span> <span class="token class-name">B</span><span class="token punctuation">,</span> <span class="token class-name">C</span><span class="token punctuation">,</span> <span class="token class-name">D</span><span class="token punctuation">;</span>
 
    <span class="token keyword">static</span> <span class="token keyword">int</span> value<span class="token punctuation">;</span>              <span class="token comment">// 静态属性 / 类属性</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 静态方法 / 类方法</span>
        <span class="token keyword">return</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token class-name">String</span> type<span class="token punctuation">;</span>                   <span class="token comment">// 非静态属性 / 实例属性 </span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>      <span class="token comment">// 非静态方法 / 示例方法</span>
        <span class="token keyword">return</span> type<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ol>
<li>类属性被类方法使用；</li>
<li>实例属性被实例方法使用；</li>
<li>类方法通过：<code>Type.getValue()</code> 调用；</li>
<li>实例方法通过：<code>Type.A.getType()</code> 调用。</li>
</ol>
<p>如果 Type 的 A 实例像和 B，C，D 不一样，那么可以写成：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 静态属性、静态方法略。与此问题无关。</span>
<span class="token keyword">enum</span> <span class="token class-name">Type</span> <span class="token punctuation">{</span>
    <span class="token class-name">A</span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"I'm A"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token class-name">B</span><span class="token punctuation">,</span> <span class="token class-name">C</span><span class="token punctuation">,</span> <span class="token class-name">D</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"I'm one of Type"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>A 实例后面的 <code>{…}</code> 就是属于 A 的实例方法，可以通过覆盖原本的方法，实现属于自己的定制。B，C，D 仍然『遵守』共同的 <em><code>sayHello()</code></em> 规则。</p>
<p>更极端一点，A，B，C，D 每个人都可以有自己的独特的 <code>sayHello()</code> 。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">enum</span> <span class="token class-name">Type</span> <span class="token punctuation">{</span>
    <span class="token class-name">A</span> <span class="token punctuation">{</span> <span class="token annotation punctuation">@Override</span> <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token class-name">B</span> <span class="token punctuation">{</span> <span class="token annotation punctuation">@Override</span> <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token class-name">C</span> <span class="token punctuation">{</span> <span class="token annotation punctuation">@Override</span> <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token class-name">D</span> <span class="token punctuation">{</span> <span class="token annotation punctuation">@Override</span> <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
 
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token class-name">String</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="_2-枚举单例" tabindex="-1"><a class="header-anchor" href="#_2-枚举单例" aria-hidden="true">#</a> 2. 枚举单例</h2>
<p>!FILENAME 内部类形式</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Service</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token keyword">private</span> <span class="token class-name">Service</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Service</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Singleton</span><span class="token punctuation">.</span>INSTANCE<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">enum</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>
        INSTANCE<span class="token punctuation">;</span>
        <span class="token keyword">private</span> <span class="token class-name">Service</span> instance<span class="token punctuation">;</span>
        <span class="token class-name">Singleton</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Service</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">public</span> <span class="token class-name">Service</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>如果不喜欢（或不习惯）内部类形式，那就把 <code>enum Singleton</code> 单独拿出来写成工具类形式。</p>
</template>
