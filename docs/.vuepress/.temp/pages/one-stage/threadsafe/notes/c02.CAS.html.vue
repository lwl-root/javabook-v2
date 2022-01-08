<template><h1 id="cas-与-aba-问题" tabindex="-1"><a class="header-anchor" href="#cas-与-aba-问题" aria-hidden="true">#</a> CAS 与 ABA 问题</h1>
<p>CAS（Compare and Swap）比较并交换，是一种『乐观锁』的实现，是用非阻塞算法来代替锁定，其中 java.util.concurrent 包下的 <strong>AtomicInteger</strong> 就是借助 CAS 来实现的。</p>
<p>但 CAS 也不是没有任何副作用，比如著名的 ABA 问题就是 CAS 引起的。</p>
<h2 id="_1-aba-问题描述" tabindex="-1"><a class="header-anchor" href="#_1-aba-问题描述" aria-hidden="true">#</a> 1. ABA 问题描述</h2>
<p>老王去银行取钱，余额有 200 元，老王取 100 元，但因为程序的问题，启动了两个线程，线程一和线程二进行比对扣款，线程一获取原本有 200 元，扣除 100 元，余额等于 100 元，此时阿里给老王转账 100 元，于是启动了线程三抢先在线程二之前执行了转账操作，把 100 元又变成了 200 元，而此时线程二对比自己事先拿到的 200 元和此时经过改动的 200 元值一样，就进行了减法操作，把余额又变成了 100 元。这显然不是我们要的正确结果，我们想要的结果是余额减少了 100 元，又增加了 100 元，余额还是 200 元，而此时余额变成了 100 元，显然有悖常理，这就是著名的 ABA 的问题。</p>
<p>执行流程如下。</p>
<ul>
<li>线程一：取款，获取原值 200 元，与 200 元比对成功，减去 100 元，修改结果为 100 元。</li>
<li>线程二：取款，获取原值 200 元，阻塞等待修改。</li>
<li>线程三：转账，获取原值 100 元，与 100 元比对成功，加上 100 元，修改结果为 200 元。</li>
<li>线程二：取款，恢复执行，原值为 200 元，与 200 元对比成功，减去 100 元，修改结果为 100 元。</li>
</ul>
<p>最终的结果是 100 元。</p>
<h2 id="_2-aba-问题的解决" tabindex="-1"><a class="header-anchor" href="#_2-aba-问题的解决" aria-hidden="true">#</a> 2. ABA 问题的解决</h2>
<p>常见解决 ABA 问题的方案加版本号，来区分值是否有变动。以老王取钱的例子为例，如果加上版本号，执行流程如下。</p>
<ul>
<li>线程一：取款，获取原值 200_V1，与 200_V1 比对成功，减去 100 元，修改结果为 100_V2。</li>
<li>线程二：取款，获取原值 200_V1 阻塞等待修改。</li>
<li>线程三：转账，获取原值 100_V2，与 100_V2 对比成功，加 100 元，修改结果为 200_V3。</li>
<li>线程二：取款，恢复执行，原值 200_V1 与现值 200_V3 对比不相等，退出修改。</li>
</ul>
<p>最终的结果为 200 元，这显然是我们需要的结果。</p>
<hr>
<p>在程序中，要怎么解决 ABA 的问题呢？</p>
<p>在 JDK 1.5 的时候，Java 提供了一个 <strong>AtomicStampedReference</strong> 原子引用变量，通过添加版本号来解决 ABA 的问题，具体使用示例如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">"老王"</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> newName <span class="token operator">=</span> <span class="token string">"Java"</span><span class="token punctuation">;</span>
<span class="token class-name">AtomicStampedReference</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> as <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicStampedReference</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">"值：{} | Stamp：{}"</span><span class="token punctuation">,</span> as<span class="token punctuation">.</span><span class="token function">getReference</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> as<span class="token punctuation">.</span><span class="token function">getStamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

as<span class="token punctuation">.</span><span class="token function">compareAndSet</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> newName<span class="token punctuation">,</span> as<span class="token punctuation">.</span><span class="token function">getStamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> as<span class="token punctuation">.</span><span class="token function">getStamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">"值：{} | Stamp：{}"</span><span class="token punctuation">,</span>  as<span class="token punctuation">.</span><span class="token function">getReference</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> as<span class="token punctuation">.</span><span class="token function">getStamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>以上程序执行结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>值：老王 | Stamp：1
值：Java | Stamp：2
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></template>
