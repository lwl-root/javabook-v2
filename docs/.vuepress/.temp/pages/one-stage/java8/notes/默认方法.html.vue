<template><h1 id="接口的默认方法和静态方法" tabindex="-1"><a class="header-anchor" href="#接口的默认方法和静态方法" aria-hidden="true">#</a> 接口的默认方法和静态方法</h1>
<h2 id="默认方法" tabindex="-1"><a class="header-anchor" href="#默认方法" aria-hidden="true">#</a> 默认方法</h2>
<p>在 JDK 8 中，<strong>default</strong> 关键字被赋予了更广的应用，还可以用在接口中，用来修饰非抽象的方法，称为『<strong>默认方法</strong>』（default method）。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">InterfaceA</span> <span class="token punctuation">{</span>
    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">testMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// compile error! 会提示：Extension method should have a body.</span>

    <span class="token comment">// 默认方法一</span>
    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"InterfaceA: an ordinary method."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 默认方法二</span>
    <span class="token keyword">default</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"InterfaceA"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ul>
<li>首先，<strong>default</strong> 关键字用在接口中，用来修饰方法；</li>
<li>其次，该方法不能使抽象方法，即必须是一个已经有了实现的方法，称为默认方法；</li>
<li>最后，同一个接口内，可以有多个默认方法。</li>
</ul>
<h2 id="静态方法" tabindex="-1"><a class="header-anchor" href="#静态方法" aria-hidden="true">#</a> 静态方法</h2>
<p>在 Java 8 中，你可以为接口添加静态方法。从技术的角度来说，这是完全合法的。只是它看起来违反了接口作为一个抽象对象的理念。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">InterfaceA</span> <span class="token punctuation">{</span>

    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"InterfaceA: hello "</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul>
<li>特性 1：静态方法不可被重写（即 @Override），会编译报错：Method does not override method from its superclass；</li>
<li>特性 2：同一个实现类实现多个接口，允许这多个接口中声明同名的静态方法；</li>
<li>特性 3：调用方式只有一种：接口名.静态方法，eg: InterfaceA.sayHello(&quot;susu&quot;);。</li>
</ul>
</template>
