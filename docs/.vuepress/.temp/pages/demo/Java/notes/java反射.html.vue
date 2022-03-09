<template><h1 id="java反射基础" tabindex="-1"><a class="header-anchor" href="#java反射基础" aria-hidden="true">#</a> Java反射基础</h1>
<p>在<code>Java</code>中反射机制非常重要，<code>Java</code>反射机制的实现除了依靠<code>Java.lang.Class</code>类，还需要依靠：<code>Constructor</code>类、<code>Field</code>类、<code>Method</code>类</p>
<p><b>定义：</b>在类加载的过程中，动态的调用类的属性和方法并且进行修改的能力叫做反射。</p>
<p>​	<b>优点：</b>灵活性高，反射是动态的编译，在程序运行时才会进行创建和获取对象实例。</p>
<p>​	<b>缺点：</b>执行效率低，时间成本会高于执行相同的操作。</p>
<h2 id="使用步骤" tabindex="-1"><a class="header-anchor" href="#使用步骤" aria-hidden="true">#</a> 使用步骤</h2>
<p>在使用Java反射机制时，主要步骤包括：</p>
<ol>
<li>
<p>获取 目标类型的Class对象</p>
<p>​	获取目标类型的Class对象有<span style=color:red>三种方法</span>：</p>
<ul>
<li>a、通过 <code>类名.class</code> 获取</li>
<li>b、用 <code>类的实例化对象.getClass();</code>方法获取</li>
<li>c、用Class类中的静态方法<code>forName()</code>获取，该方法的参数为类的全限定名（常用）</li>
</ul>
</li>
<li>
<p>通过 Class 对象分别获取Constructor类对象、Method类对象 &amp; Field 类对象</p>
<p>​	获取Constructor类对象：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">Constructor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token function">getConstructor</span><span class="token punctuation">(</span>类<span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> parameterTypes<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取该类中参数类型与方法参数匹配的公共的构造方法</span>
<span class="token keyword">public</span> <span class="token class-name">Constructor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getConstructors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取该类中所有的公共的构造方法</span>

<span class="token keyword">public</span> <span class="token class-name">Constructor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token function">getDeclaredConstructor</span><span class="token punctuation">(</span>类<span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> parameterTypes<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取该类中参数类型与方法参数匹配的构造方法</span>
<span class="token keyword">public</span> <span class="token class-name">Constructor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getDeclaredConstructors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取该类中所有的构造方法</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>​	获取Method类对象：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">Method</span> <span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span>类<span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> parameterTypes<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回方法名和name相同的且参数和方法参数一致的公共方法对象</span>
<span class="token keyword">public</span> <span class="token class-name">Method</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回所有的公共的方法</span>

<span class="token keyword">public</span> <span class="token class-name">Method</span> <span class="token function">getDeclaredMethod</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span>类<span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> parameterTypes<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回返回方法名和name相同的且参数和方法参数一致的方法对象</span>
<span class="token keyword">public</span> <span class="token class-name">Method</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getDeclaredMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回所有的方法对象</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>​	获取Field类对象：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">Field</span> <span class="token function">getField</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回该类中属性名和name一致的公共属性对象</span>
<span class="token keyword">public</span> <span class="token class-name">Field</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回所有的公共属性对象</span>

<span class="token keyword">public</span> <span class="token class-name">Field</span> <span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回该类中属性名和name一致的属性对象</span>
<span class="token keyword">public</span> <span class="token class-name">Field</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getDeclaredFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回所有的属性对象</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li>
</ol>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>method对象只包括普通方法对象，不包括构造方法对象；如果方法或者属性使用private修饰要开启暴力反射 方法(属性).setAccessible(true);</p>
</div>
<ol start="3">
<li>通过 Constructor类对象、Method类对象 &amp; Field类对象分别获取类的构造函数、方法&amp;属性的具体信息，并进行后续操作</li>
</ol>
<h3 id="_1、获取目标类型的class对象" tabindex="-1"><a class="header-anchor" href="#_1、获取目标类型的class对象" aria-hidden="true">#</a> 1、获取目标类型的Class对象</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 目标类型</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">{</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> sex<span class="token punctuation">;</span>
    
    <span class="token comment">// 私有无参构造</span>
    <span class="token keyword">private</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">supper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 公共有参构造</span>
    <span class="token keyword">public</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span><span class="token keyword">int</span> age<span class="token punctuation">,</span><span class="token class-name">String</span> sex<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> sex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"吃肉"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">/*
 * 获取目标类型的Class对象有三种方法：
 * 1、通过 类名.class 获取
 * 2、用 类的实例化对象.getClass()方法获取
 * 3、用Class类中的静态方法forName()获取，该方法的参数为类的全限定名（常用）
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Reflection</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>
        <span class="token comment">// 1、通过 类名.class</span>
        <span class="token class-name">Class</span> clazz1 <span class="token operator">=</span> <span class="token class-name">Dog</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
        <span class="token comment">// 2、实例化对象.getclass();</span>
        <span class="token class-name">Dog</span> dog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Class</span> clazz2 <span class="token operator">=</span> dog<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 3、Class.forName("类的全限定名");</span>
        <span class="token class-name">Class</span> clazz3 <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">"com.lwl.Dog"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="_2、通过-class-对象分别获取constructor类对象、method类对象-field-类对象" tabindex="-1"><a class="header-anchor" href="#_2、通过-class-对象分别获取constructor类对象、method类对象-field-类对象" aria-hidden="true">#</a> 2、通过 Class 对象分别获取Constructor类对象、Method类对象 &amp; Field 类对象</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Reflection</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>
        <span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">"com.lwl.dog"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取Constructor（构造方法）对象</span>
        <span class="token class-name">Constructor</span> constructor <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getConstructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取Method（普通方法）对象</span>
        <span class="token comment">// 获取吃东西的方法对象</span>
        <span class="token class-name">Method</span> method <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token string">"eat"</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取Field对象</span>
        <span class="token comment">// 获取性别属性对象</span>
        field field <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getField</span><span class="token punctuation">(</span><span class="token string">"sex"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="_3、通过-constructor类对象、method类对象-field类对象分别创建对象、调用方法、成员变量赋值" tabindex="-1"><a class="header-anchor" href="#_3、通过-constructor类对象、method类对象-field类对象分别创建对象、调用方法、成员变量赋值" aria-hidden="true">#</a> 3、通过 Constructor类对象、Method类对象 &amp; Field类对象分别创建对象、调用方法、成员变量赋值</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Reflection</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>
        <span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">"com.lwl.dog"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取Constructor（构造方法）对象</span>
        <span class="token class-name">Constructor</span> constructor <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getConstructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取Method（普通方法）对象</span>
        <span class="token comment">// 获取吃东西的方法对象</span>
        <span class="token class-name">Method</span> method <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token string">"eat"</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取Field对象</span>
        <span class="token comment">// 获取性别属性对象</span>
        field field <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getField</span><span class="token punctuation">(</span><span class="token string">"sex"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">//=========================================================</span>
        <span class="token comment">// 用构造函数对象创建对象</span>
        <span class="token class-name">Object</span> obj <span class="token operator">=</span> constructor<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 如果是有参构造</span>
        <span class="token class-name">Object</span> obj <span class="token operator">=</span> constructor<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token string">"tom"</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token string">"男"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//=========================================================</span>
        <span class="token comment">// 调用方法</span>
        method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//=========================================================</span>
        <span class="token comment">// 给成员变量赋值</span>
        field<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token string">"女"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="反射使用" tabindex="-1"><a class="header-anchor" href="#反射使用" aria-hidden="true">#</a> 反射使用</h2>
<p>​	可以在不修改代码的情况下，利用外部文件进行对象和方法的更改。</p>
<p>​	反射的作用有很多种。</p>
<h3 id="业务类" tabindex="-1"><a class="header-anchor" href="#业务类" aria-hidden="true">#</a> 业务类</h3>
<p>首先准备两个业务类，这两个业务类很简单，就是各自都有一个业务方法，分别打印不同的字符串</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">reflection</span><span class="token punctuation">;</span>
 
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Service1</span> <span class="token punctuation">{</span>
 
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doService1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"业务方法1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">reflection</span><span class="token punctuation">;</span>
 
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Service2</span> <span class="token punctuation">{</span>
 
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doService2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"业务方法2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="非反射方法" tabindex="-1"><a class="header-anchor" href="#非反射方法" aria-hidden="true">#</a> 非反射方法</h3>
<p>当需要从第一个业务方法切换到第二个业务方法的时候，使用非反射方式，必须修改代码，并且重新编译运行，才可以达到效果</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">reflection</span><span class="token punctuation">;</span>
 
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
 
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">new</span> <span class="token class-name">Service1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">doService1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">reflection</span><span class="token punctuation">;</span>
 
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
 
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//      new Service1().doService1();</span>
        <span class="token comment">// 非反射方法需要修改代码</span>
        <span class="token keyword">new</span> <span class="token class-name">Service2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">doService2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="反射方法" tabindex="-1"><a class="header-anchor" href="#反射方法" aria-hidden="true">#</a> 反射方法</h3>
<p>使用反射方式，首先准备一个配置文件spring.txt, 放在src目录下。 里面存放的是类的名称，和要调用的方法名。
在测试类Test中，首先取出类名称和方法名，然后通过反射去调用这个方法。</p>
<p>当需要从调用第一个业务方法，切换到调用第二个业务方法的时候，不需要修改一行代码，也不需要重新编译，只需要修改配置文件spring.txt，再运行即可。</p>
<p>这也是Spring框架的最基本的原理，只是它做的更丰富，安全，健壮。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">class</span><span class="token operator">=</span><span class="token class-name"><span class="token namespace">reflection<span class="token punctuation">.</span></span>Service1</span>
method<span class="token operator">=</span>doService1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">reflection</span><span class="token punctuation">;</span>
 
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileInputStream</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Constructor</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Method</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Properties</span><span class="token punctuation">;</span>
 
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
 
    <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token string">"rawtypes"</span><span class="token punctuation">,</span> <span class="token string">"unchecked"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
 
        <span class="token comment">//从spring.txt中获取类名称和方法名称</span>
        <span class="token class-name">File</span> springConfigFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"e:\\project\\j2se\\src\\spring.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Properties</span> springConfig<span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        springConfig<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>springConfigFile<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> className <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> springConfig<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"class"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> methodName <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> springConfig<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"method"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         
        <span class="token comment">//根据类名称获取类对象</span>
        <span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span>className<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//根据方法名称，获取方法对象</span>
        <span class="token class-name">Method</span> m <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span>methodName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//获取构造器</span>
        <span class="token class-name">Constructor</span> c <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getConstructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//根据构造器，实例化出对象</span>
        <span class="token class-name">Object</span> service <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//调用对象的指定方法</span>
        m<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>service<span class="token punctuation">)</span><span class="token punctuation">;</span>
         
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div></template>
