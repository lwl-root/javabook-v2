<template><h1 id="什么是动态代理" tabindex="-1"><a class="header-anchor" href="#什么是动态代理" aria-hidden="true">#</a> 什么是动态代理</h1>
<h2 id="一、介绍" tabindex="-1"><a class="header-anchor" href="#一、介绍" aria-hidden="true">#</a> 一、介绍</h2>
<p><strong>何谓代理？</strong></p>
<p>据史料记载，<strong>代理</strong>这个词最早出现在<strong>代理商</strong>这个行业，所谓<strong>代理商</strong>，简而言之，其实就是<strong>帮助企业或者老板打理生意，自己本身不做生产任何商品</strong>。</p>
<p>举个例子，我们去火车站买票的时候，人少老板一个人还忙的过来，但是人一多的话，就会非常拥挤，于是就有了各种代售点，我们可以从代售点买车票，从而加快老板的卖票速度。</p>
<p><strong>代售点的出现，可以说，很直观的帮助老板提升了用户购票体验</strong>。</p>
<p>站在软件设计的角度，其实效果也是一样的，采用代理模式的编程，能显著的增强原有的功能和简化方法调用方式。</p>
<img src="/images/反射.jpg">
<p>在介绍动态代理之前，我们先来聊解静态代理。</p>
<h2 id="二、静态代理" tabindex="-1"><a class="header-anchor" href="#二、静态代理" aria-hidden="true">#</a> 二、静态代理</h2>
<p>下面，我们以<code>两数相加</code>为例，实现过程如下！</p>
<ul>
<li>接口类</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Calculator</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 计算两个数之和
     * <span class="token keyword">@param</span> <span class="token parameter">num1</span>
     * <span class="token keyword">@param</span> <span class="token parameter">num2</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token class-name">Integer</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> num1<span class="token punctuation">,</span> <span class="token class-name">Integer</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul>
<li>目标对象</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CalculatorImpl</span> <span class="token keyword">implements</span> <span class="token class-name">Calculator</span> <span class="token punctuation">{</span>


    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> num1<span class="token punctuation">,</span> <span class="token class-name">Integer</span> num2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Integer</span> result <span class="token operator">=</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul>
<li>代理对象</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CalculatorProxyImpl</span> <span class="token keyword">implements</span> <span class="token class-name">Calculator</span> <span class="token punctuation">{</span>


    <span class="token keyword">private</span> <span class="token class-name">Calculator</span> calculator<span class="token punctuation">;</span>


    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> num1<span class="token punctuation">,</span> <span class="token class-name">Integer</span> num2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//方法调用前，可以添加其他功能....</span>
        <span class="token class-name">Integer</span> result <span class="token operator">=</span> calculator<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//方法调用后，可以添加其他功能....</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token class-name">CalculatorProxyImpl</span><span class="token punctuation">(</span><span class="token class-name">Calculator</span> calculator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>calculator <span class="token operator">=</span> calculator<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ul>
<li>测试类</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CalculatorProxyClient</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//目标对象</span>
        <span class="token class-name">Calculator</span> target <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CalculatorImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//代理对象</span>
        <span class="token class-name">Calculator</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CalculatorProxyImpl</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Integer</span> result <span class="token operator">=</span> proxy<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"相加结果："</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul>
<li>输出结果</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>相加结果：3
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>通过这种代理方式，最大的优点就是：<strong>可以在不修改目标对象的前提下，扩展目标对象的功能</strong>。</p>
<p>但也有缺点：需要<strong>代理对象和目标对象实现一样的接口</strong>，因此，当目标对象扩展新的功能时，代理对象也要跟着一起扩展，不易维护！</p>
<h2 id="三、动态代理" tabindex="-1"><a class="header-anchor" href="#三、动态代理" aria-hidden="true">#</a> 三、动态代理</h2>
<p>动态代理，其实本质也是为了解决上面当目标对象扩展新功能时，代理对象也需要跟着一起扩展的痛点问题而生。</p>
<p><strong>那它是怎么解决的呢？</strong></p>
<p>以 JDK 为例，当需要给某个目标对象添加代理处理的时候，JDK 会在内存中动态的构建代理对象，从而实现对目标对象的代理功能。</p>
<p>下面，我们还是以<code>两数相加</code>为例，介绍具体的玩法！</p>
<h4 id="_3-1、jdk-中生成代理对象的玩法" tabindex="-1"><a class="header-anchor" href="#_3-1、jdk-中生成代理对象的玩法" aria-hidden="true">#</a> 3.1、JDK 中生成代理对象的玩法</h4>
<ul>
<li>创建接口</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">JdkCalculator</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 计算两个数之和
     * <span class="token keyword">@param</span> <span class="token parameter">num1</span>
     * <span class="token keyword">@param</span> <span class="token parameter">num2</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token class-name">Integer</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> num1<span class="token punctuation">,</span> <span class="token class-name">Integer</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul>
<li>目标对象</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JdkCalculatorImpl</span> <span class="token keyword">implements</span> <span class="token class-name">JdkCalculator</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> num1<span class="token punctuation">,</span> <span class="token class-name">Integer</span> num2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Integer</span> result <span class="token operator">=</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul>
<li>动态代理对象</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JdkProxyFactory</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 维护一个目标对象
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Object</span> target<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">JdkProxyFactory</span><span class="token punctuation">(</span><span class="token class-name">Object</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>target <span class="token operator">=</span> target<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">getProxyInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Object</span> proxyClassObj <span class="token operator">=</span> <span class="token class-name">Proxy</span><span class="token punctuation">.</span><span class="token function">newProxyInstance</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                target<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getInterfaces</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token keyword">new</span> <span class="token class-name">InvocationHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

                    <span class="token annotation punctuation">@Override</span>
                    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token class-name">Object</span> proxy<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
                        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"方法调用前，可以添加其他功能...."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                        <span class="token comment">// 执行目标对象方法</span>
                        <span class="token class-name">Object</span> returnValue <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"方法调用后，可以添加其他功能...."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token keyword">return</span> returnValue<span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> proxyClassObj<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><ul>
<li>测试类</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestJdkProxy</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//目标对象</span>
        <span class="token class-name">JdkCalculator</span> target <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JdkCalculatorImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//代理对象</span>
        <span class="token class-name">JdkCalculator</span> proxyClassObj <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">JdkCalculator</span><span class="token punctuation">)</span> <span class="token keyword">new</span> <span class="token class-name">JdkProxyFactory</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getProxyInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>proxyClassObj<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//执行代理方法</span>
        <span class="token class-name">Integer</span> result <span class="token operator">=</span> proxyClassObj<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"相加结果："</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ul>
<li>输出结果</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>class com.example.java.proxy.jdk1.JdkCalculatorImpl
class com.sun.proxy.$Proxy0
方法调用前，可以添加其他功能....
方法调用后，可以添加其他功能....
相加结果：3
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>采用 JDK 技术动态创建<code>interface</code>实例的步骤如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1. 首先定义一个 InvocationHandler 实例，它负责实现接口的方法调用
2. 通过 Proxy.newProxyInstance() 创建 interface 实例，它需要 3 个参数:
   （1）使用的 ClassLoader，通常就是接口类的 ClassLoader
   （2）需要实现的接口数组，至少需要传入一个接口进去；
   （3）用来处理接口方法调用的 InvocationHandler 实例。
3. 将返回的 Object 强制转型为接口
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>动态代理实际上是 JVM 在运行期动态创建<code>class</code>字节码并加载的过程，它并没有什么黑魔法技术，把上面的动态代理改写为静态实现类大概长这样：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JdkCalculatorDynamicProxy</span> <span class="token keyword">implements</span> <span class="token class-name">JdkCalculator</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">InvocationHandler</span> handler<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">JdkCalculatorDynamicProxy</span><span class="token punctuation">(</span><span class="token class-name">InvocationHandler</span> handler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>handler <span class="token operator">=</span> handler<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> num1<span class="token punctuation">,</span> <span class="token class-name">Integer</span> num2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        handler<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>
           <span class="token keyword">this</span><span class="token punctuation">,</span>
           <span class="token class-name">JdkCalculator</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token string">"add"</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
           <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> num1<span class="token punctuation">,</span> num2 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>本质就是 JVM 帮我们自动编写了一个上述类（不需要源码，可以直接生成字节码）。</p>
<h4 id="_3-2、cglib-生成代理对象的玩法" tabindex="-1"><a class="header-anchor" href="#_3-2、cglib-生成代理对象的玩法" aria-hidden="true">#</a> 3.2、cglib 生成代理对象的玩法</h4>
<p>除了 jdk 能实现动态的创建代理对象以外，还有一个非常有名的第三方框架：cglib，它也可以做到运行时在内存中动态生成一个子类对象从而实现对目标对象功能的扩展。</p>
<p>cglib 特点如下：</p>
<ul>
<li>cglib 不仅可以代理接口还可以代理类，而 JDK 的动态代理只能代理接口</li>
<li>cglib 是一个强大的高性能的代码生成包，它广泛的被许多 AOP 的框架使用，例如我们所熟知的 Spring AOP，cglib 为他们提供方法的 interception（拦截）。</li>
<li>CGLIB包的底层是通过使用一个小而快的字节码处理框架ASM，来转换字节码并生成新的类，速度非常快。</li>
</ul>
<p>在使用 cglib 之前，我们需要添加依赖包，如果你已经有<code>spring-core</code>的<code>jar</code>包，则无需引入，因为<code>spring</code>中包含了<code>cglib</code>。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token generics"><span class="token punctuation">&lt;</span>dependency<span class="token punctuation">></span></span>
    <span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">></span></span>cglib<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">></span>
    <span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">></span></span>cglib<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">></span>
    <span class="token generics"><span class="token punctuation">&lt;</span>version<span class="token punctuation">></span></span><span class="token number">3.2</span><span class="token number">.5</span><span class="token operator">&lt;</span><span class="token operator">/</span>version<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>下面，我们还是以<code>两数相加</code>为例，介绍具体的玩法！</p>
<ul>
<li>创建接口</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">CglibCalculator</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 计算两个数之和
     * <span class="token keyword">@param</span> <span class="token parameter">num1</span>
     * <span class="token keyword">@param</span> <span class="token parameter">num2</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token class-name">Integer</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> num1<span class="token punctuation">,</span> <span class="token class-name">Integer</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul>
<li>目标对象</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CglibCalculatorImpl</span> <span class="token keyword">implements</span> <span class="token class-name">CglibCalculator</span> <span class="token punctuation">{</span>


    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> num1<span class="token punctuation">,</span> <span class="token class-name">Integer</span> num2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Integer</span> result <span class="token operator">=</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul>
<li>动态代理对象</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CglibProxyFactory</span> <span class="token keyword">implements</span> <span class="token class-name">MethodInterceptor</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 维护一个目标对象
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Object</span> target<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">CglibProxyFactory</span><span class="token punctuation">(</span><span class="token class-name">Object</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>target <span class="token operator">=</span> target<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 为目标对象生成代理对象
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">getProxyInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//工具类</span>
        <span class="token class-name">Enhancer</span> en <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Enhancer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//设置父类</span>
        en<span class="token punctuation">.</span><span class="token function">setSuperclass</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//设置回调函数</span>
        en<span class="token punctuation">.</span><span class="token function">setCallback</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//创建子类对象代理</span>
        <span class="token keyword">return</span> en<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">intercept</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">,</span> <span class="token class-name">MethodProxy</span> methodProxy<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"方法调用前，可以添加其他功能...."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 执行目标对象方法</span>
        <span class="token class-name">Object</span> returnValue <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"方法调用后，可以添加其他功能...."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> returnValue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><ul>
<li>测试类</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestCglibProxy</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//目标对象</span>
        <span class="token class-name">CglibCalculator</span> target <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CglibCalculatorImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//代理对象</span>
        <span class="token class-name">CglibCalculator</span> proxyClassObj <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">CglibCalculator</span><span class="token punctuation">)</span> <span class="token keyword">new</span> <span class="token class-name">CglibProxyFactory</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getProxyInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>proxyClassObj<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//执行代理方法</span>
        <span class="token class-name">Integer</span> result <span class="token operator">=</span> proxyClassObj<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"相加结果："</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ul>
<li>输出结果</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>class com.example.java.proxy.cglib1.CglibCalculatorImpl
class com.example.java.proxy.cglib1.CglibCalculatorImpl$$EnhancerByCGLIB$$3ceadfe4
方法调用前，可以添加其他功能....
方法调用后，可以添加其他功能....
相加结果：3
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>将 cglib 生成的代理类改写为静态实现类大概长这样：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CglibCalculatorImplByCGLIB</span> <span class="token keyword">extends</span> <span class="token class-name">CglibCalculatorImpl</span> <span class="token keyword">implements</span> <span class="token class-name">Factory</span> <span class="token punctuation">{</span>
    

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">MethodInterceptor</span> methodInterceptor<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Method</span> method<span class="token punctuation">;</span>
        

    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token class-name">Integer</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> var1<span class="token punctuation">,</span> <span class="token class-name">Integer</span> var2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> methodInterceptor<span class="token punctuation">.</span><span class="token function">intercept</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> method<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>var1<span class="token punctuation">,</span> var2<span class="token punctuation">}</span><span class="token punctuation">,</span> methodProxy<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//....</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>其中，拦截思路与 JDK 类似，都是通过一个<strong>接口方法</strong>进行拦截处理！</p>
<p>在上文中咱们还介绍到了，cglib 不仅可以代理接口还可以代理类，下面我们试试代理类。</p>
<ul>
<li>创建新的目标对象</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CglibCalculatorClass</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 计算两个数之和
     * <span class="token keyword">@param</span> <span class="token parameter">num1</span>
     * <span class="token keyword">@param</span> <span class="token parameter">num2</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> num1<span class="token punctuation">,</span> <span class="token class-name">Integer</span> num2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Integer</span> result <span class="token operator">=</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ul>
<li>测试类</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestCglibProxyClass</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//目标对象</span>
        <span class="token class-name">CglibCalculatorClass</span> target <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CglibCalculatorClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//代理对象</span>
        <span class="token class-name">CglibCalculatorClass</span> proxyClassObj <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">CglibCalculatorClass</span><span class="token punctuation">)</span> <span class="token keyword">new</span> <span class="token class-name">CglibProxyFactory</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getProxyInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>proxyClassObj<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//执行代理方法</span>
        <span class="token class-name">Integer</span> result <span class="token operator">=</span> proxyClassObj<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"相加结果："</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ul>
<li>输出结果</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>class com.example.java.proxy.cglib1.CglibCalculatorClass
class com.example.java.proxy.cglib1.CglibCalculatorClass$$EnhancerByCGLIB$$e68ff36c
方法调用前，可以添加其他功能....
方法调用后，可以添加其他功能....
相加结果：3
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="四、静态织入" tabindex="-1"><a class="header-anchor" href="#四、静态织入" aria-hidden="true">#</a> 四、静态织入</h2>
<p>在上文中，我们介绍的代理方案都是在代码运行时动态的生成<code>class</code>文件达到动态代理的目的。</p>
<p>回到问题的本质，其实动态代理的技术目的，主要为了解决静态代理模式中当目标接口发生了扩展，代理类也要跟着一遍变动的问题，避免造成了工作伤的繁琐和复杂。</p>
<p>在 Java 生态里面，还有一个非常有名的第三方代理框架，那就是<code>AspectJ</code>，<code>AspectJ</code>通过特定的编译器可以将目标类编译成<code>class</code>字节码的时候，在方法周围加上业务逻辑，从而达到静态代理的效果。</p>
<p>采用<code>AspectJ</code>进行方法植入，主要有四种：</p>
<ul>
<li>方法调用前拦截</li>
<li>方法调用后拦截</li>
<li>调用方法结束拦截</li>
<li>抛出异常拦截</li>
</ul>
<p>使用起来也非常简单，首先是在项目中添加<code>AspectJ</code>编译器插件。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token generics"><span class="token punctuation">&lt;</span>plugin<span class="token punctuation">></span></span>
    <span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">></span></span>org<span class="token punctuation">.</span>codehaus<span class="token punctuation">.</span>mojo<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">></span>
    <span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">></span></span>aspectj<span class="token operator">-</span>maven<span class="token operator">-</span>plugin<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">></span>
    <span class="token generics"><span class="token punctuation">&lt;</span>version<span class="token punctuation">></span></span><span class="token number">1.5</span><span class="token operator">&lt;</span><span class="token operator">/</span>version<span class="token operator">></span>
    <span class="token generics"><span class="token punctuation">&lt;</span>executions<span class="token punctuation">></span></span>
        <span class="token generics"><span class="token punctuation">&lt;</span>execution<span class="token punctuation">></span></span>
            <span class="token generics"><span class="token punctuation">&lt;</span>goals<span class="token punctuation">></span></span>
                <span class="token generics"><span class="token punctuation">&lt;</span>goal<span class="token punctuation">></span></span>compile<span class="token operator">&lt;</span><span class="token operator">/</span>goal<span class="token operator">></span>
                <span class="token generics"><span class="token punctuation">&lt;</span>goal<span class="token punctuation">></span></span>test<span class="token operator">-</span>compile<span class="token operator">&lt;</span><span class="token operator">/</span>goal<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>goals<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>execution<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>executions<span class="token operator">></span>
    <span class="token generics"><span class="token punctuation">&lt;</span>configuration<span class="token punctuation">></span></span>
        <span class="token generics"><span class="token punctuation">&lt;</span>source<span class="token punctuation">></span></span><span class="token number">1.6</span><span class="token operator">&lt;</span><span class="token operator">/</span>source<span class="token operator">></span>
        <span class="token generics"><span class="token punctuation">&lt;</span>target<span class="token punctuation">></span></span><span class="token number">1.6</span><span class="token operator">&lt;</span><span class="token operator">/</span>target<span class="token operator">></span>
        <span class="token generics"><span class="token punctuation">&lt;</span>encoding<span class="token punctuation">></span></span>UTF<span class="token operator">-</span><span class="token number">8</span><span class="token operator">&lt;</span><span class="token operator">/</span>encoding<span class="token operator">></span>
        <span class="token generics"><span class="token punctuation">&lt;</span>complianceLevel<span class="token punctuation">></span></span><span class="token number">1.6</span><span class="token operator">&lt;</span><span class="token operator">/</span>complianceLevel<span class="token operator">></span>
        <span class="token generics"><span class="token punctuation">&lt;</span>verbose<span class="token punctuation">></span></span><span class="token boolean">true</span><span class="token operator">&lt;</span><span class="token operator">/</span>verbose<span class="token operator">></span>
        <span class="token generics"><span class="token punctuation">&lt;</span>showWeaveInfo<span class="token punctuation">></span></span><span class="token boolean">true</span><span class="token operator">&lt;</span><span class="token operator">/</span>showWeaveInfo<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>configuration<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>plugin<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>然后，编写一个方法，准备进行代理。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">"/hello"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> result <span class="token operator">=</span> <span class="token string">"Hello World"</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>编写代理配置类</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Aspect</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ControllerAspect</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/***
     * 定义切入点
     */</span>
    <span class="token annotation punctuation">@Pointcut</span><span class="token punctuation">(</span><span class="token string">"execution(* com.example.demo.web..*.*(..))"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">methodAspect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 方法调用前拦截
     */</span>
    <span class="token annotation punctuation">@Before</span><span class="token punctuation">(</span><span class="token string">"methodAspect()"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">before</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"代理 -> 调用方法执行之前......"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 方法调用后拦截
     */</span>
    <span class="token annotation punctuation">@After</span><span class="token punctuation">(</span><span class="token string">"methodAspect()"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">after</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"代理 -> 调用方法执行之后......"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 调用方法结束拦截
     */</span>
    <span class="token annotation punctuation">@AfterReturning</span><span class="token punctuation">(</span><span class="token string">"methodAspect()"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">afterReturning</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"代理 -> 调用方法结束之后......"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 抛出异常拦截
     */</span>
    <span class="token annotation punctuation">@AfterThrowing</span><span class="token punctuation">(</span><span class="token string">"methodAspect()"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">afterThrowing</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"代理 -> 调用方法异常......"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><p>编译后，<code>hello</code>方法会变成这样。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">"/hello"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> name<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
    <span class="token class-name">JoinPoint</span> var2 <span class="token operator">=</span> <span class="token class-name">Factory</span><span class="token punctuation">.</span><span class="token function">makeJP</span><span class="token punctuation">(</span>ajc$tjp_0<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Object</span> var7<span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token class-name">Object</span> var5<span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">//调用before</span>
            <span class="token class-name">Aspectj</span><span class="token punctuation">.</span><span class="token function">aspectOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">doBeforeTask2</span><span class="token punctuation">(</span>var2<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> result <span class="token operator">=</span> <span class="token string">"Hello World"</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
            var5 <span class="token operator">=</span> result<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> var8<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Aspectj</span><span class="token punctuation">.</span><span class="token function">aspectOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">after</span><span class="token punctuation">(</span>var2<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">throw</span> var8<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//调用after</span>
        <span class="token class-name">Aspectj</span><span class="token punctuation">.</span><span class="token function">aspectOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">after</span><span class="token punctuation">(</span>var2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        var7 <span class="token operator">=</span> var5<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> var9<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//调用抛出异常</span>
        <span class="token class-name">Aspectj</span><span class="token punctuation">.</span><span class="token function">aspectOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">afterthrowing</span><span class="token punctuation">(</span>var2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">throw</span> var9<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//调用return</span>
    <span class="token class-name">Aspectj</span><span class="token punctuation">.</span><span class="token function">aspectOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">afterRutuen</span><span class="token punctuation">(</span>var2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span>var7<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>很显然，代码被<code>AspectJ</code>编译器修改了，<code>AspectJ</code>并不是动态的在运行时生成代理类，而是在编译的时候就植入代码到<code>class</code>文件。</p>
<p>由于是静态织入的，所以性能相对来说比较好！</p>
<h3 id="五、小结" tabindex="-1"><a class="header-anchor" href="#五、小结" aria-hidden="true">#</a> 五、小结</h3>
<p>看到上面的介绍<code>静态织入</code>方案，跟我们现在使用<code>Spring AOP</code>的方法极其相似，可能有的同学会发出疑问，我们现在使用的<code>Spring AOP</code>动态代理，<strong>到底是动态生成的还是静态织入的呢</strong>？</p>
<p>实际上，<code>Spring AOP</code>代理是对<code>JDK</code>代理和<code>CGLIB</code>代理做了一层封装，同时引入了<code>AspectJ</code>中的一些注解<code>@pointCut</code>、<code>@after</code>，<code>@before</code>等等，<strong>本质是使用的动态代理技术</strong>。</p>
<p>总结起来就三点：</p>
<ul>
<li>如果目标是接口的话，默认使用 JDK 的动态代理技术；</li>
<li>如果目标是类的话，使用 cglib 的动态代理技术；</li>
<li>引入了<code>AspectJ</code>中的一些注解<code>@pointCut</code>、<code>@after</code>，<code>@before</code>，主要是为了简化使用，跟<code>AspectJ</code>的关系并不大；</li>
</ul>
<p>那为什么<code>Spring AOP</code>不使用<code>AspectJ</code>这种<code>静态织入</code>方案呢？</p>
<p>虽然<code>AspectJ</code>编译器非常强，性能非常高，但是只要目标类发生了修改就需要重新编译，主要原因可能还是<code>AspectJ</code>的编译器太过于复杂，还不如动态代理来的省心！</p>
<h3 id="六、参考" tabindex="-1"><a class="header-anchor" href="#六、参考" aria-hidden="true">#</a> 六、参考</h3>
<p>1、Java三种代理模式：静态代理、动态代理和cglib代理</p>
<p>2、Java 动态代理作用是什么？</p>
</template>
