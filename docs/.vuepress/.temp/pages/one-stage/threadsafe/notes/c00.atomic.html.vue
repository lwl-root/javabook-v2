<template><h1 id="原子值-atomic" tabindex="-1"><a class="header-anchor" href="#原子值-atomic" aria-hidden="true">#</a> 原子值：Atomic</h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>原子值（atomic）也是 JDK 1.5 的 J.U.C 特性引入的知识点。</p>
</div>
<p>如果多个线程更新一个共享计数器，那么你就需要保证更新操作是以线程安全的方式进行的。因为 <code>i++</code> 、<code>i--</code> 这样的操作是非原子性的，它们是线程不安全的。</p>
<p>JDK（从 1.5 开始） 在 java.util.concurrent.atomic 包下面为我们准备了很多可以高效、简洁地『<strong>对 int、long 和 boolean 值、对象的引用和数组进行原子性操作</strong>』的类。</p>
<h2 id="_1-简单使用" tabindex="-1"><a class="header-anchor" href="#_1-简单使用" aria-hidden="true">#</a> 1. 简单使用</h2>
<blockquote>
<p>以 AtomicLong 为例。</p>
</blockquote>
<p>AtomicLong 的 <strong>.incrementAndGet</strong> 方法可以将 AtomicLong 对象的值加 1 ，并返回增加之后的值。即，实现 <code>++i</code> 的逻辑，只不过比 <code>++i</code> 更高级的是整个操作不能被打断，即，它是原子性的。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">AtomicLong</span> i <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicLong</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span> i<span class="token punctuation">.</span><span class="token function">incrementAndGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>AtomicLong 的各个方法的功能都是显而易见的，此处就不一一展示。</p>
<p>不过，需要注意的是，如果你想先读后写 AtomicLong 的值，<strong>不要使用 .get 和 .set 方法，因为它两的组合不是原子性的</strong>。你要使用的一个 <strong>.updateAndGet</strong> 方法来替代它们两个。.updateAndGet 方法要求你传入一个 lambda 表达式，在表达式中它会将 AtomicLong 的原值传进来，你在 lambda 表达式中返回新值。</p>
<h2 id="_2-atomicreference" tabindex="-1"><a class="header-anchor" href="#_2-atomicreference" aria-hidden="true">#</a> 2. AtomicReference</h2>
<p>AtomicReference 类提供了一个可以原子读写的对象引用变量。 原子意味着尝试更改相同 AtomicReference 的多个线程（例如，使用比较和交换操作）不会使 AtomicReference 最终达到不一致的状态。 AtomicReference 甚至有一个先进的 <strong>.compareAndSet</strong> 方法，它可以将引用与预期值（引用）进行比较，如果它们相等，则在 AtomicReference 对象内设置一个新的引用。</p>
</template>
