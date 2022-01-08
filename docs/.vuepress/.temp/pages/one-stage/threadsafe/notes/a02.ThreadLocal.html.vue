<template><h1 id="threadlocal" tabindex="-1"><a class="header-anchor" href="#threadlocal" aria-hidden="true">#</a> ThreadLocal</h1>
<p>ThreadLocal 诞生于 JDK 1.2 ，用于解决多线程间的数据隔离问题。也就是说 ThreadLocal 会为每一个线程创建一个单独的变量副本。</p>
<p>ThreadLocal 最典型的使用场景有两个：</p>
<ul>
<li>ThreadLocal 可以用来管理 Session，因为每个人的信息都是不一样的，所以就很适合用 ThreadLocal 来管理；</li>
<li>数据库连接，为每一个线程分配一个独立的资源，也适合用 ThreadLocal 来实现。</li>
</ul>
<p>其中，ThreadLocal 也被用在很多大型开源框架中，比如 Spring 的事务管理器，还有 Hibernate 的 Session 管理等。</p>
<h2 id="_1-threadlocal-基础使用" tabindex="-1"><a class="header-anchor" href="#_1-threadlocal-基础使用" aria-hidden="true">#</a> 1. ThreadLocal 基础使用</h2>
<p>ThreadLocal 常用方法有 set(T)、get()、remove() 等，具体使用请参考以下代码。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">ThreadLocal</span> threadLocal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadLocal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 存值</span>
threadLocal<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">,</span> <span class="token string">"world"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 取值</span>
<span class="token class-name">List</span> list <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">List</span><span class="token punctuation">)</span> threadLocal<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>threadLocal<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 删除值</span>
threadLocal<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>threadLocal<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>以上程序执行结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>2
[hello, world]
null
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_2-threadlocal-数据共享" tabindex="-1"><a class="header-anchor" href="#_2-threadlocal-数据共享" aria-hidden="true">#</a> 2. ThreadLocal 数据共享</h2>
<p>既然 ThreadLocal 设计的初衷是解决线程间信息隔离的，那 ThreadLocal 能不能实现线程间信息共享呢？</p>
<p>答案是肯定的，只需要使用 ThreadLocal 的子类 InheritableThreadLocal 就可以轻松实现，来看具体实现代码：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">ThreadLocal</span> inheritableThreadLocal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InheritableThreadLocal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
inheritableThreadLocal<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"老王"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>inheritableThreadLocal<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>以上程序执行结果如下：</p>
<blockquote>
<p>老王</p>
</blockquote>
<p>从以上代码可以看出，主线程和新创建的线程之间实现了信息共享。</p>
<h2 id="_3-thradlocal-的正确使用方式-内存泄漏问题" tabindex="-1"><a class="header-anchor" href="#_3-thradlocal-的正确使用方式-内存泄漏问题" aria-hidden="true">#</a> 3. ThradLocal 的正确使用方式（内存泄漏问题）</h2>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// jvm 内存参数调低以便于快速触发内存不足：-Xmx50M</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
    <span class="token class-name">ThreadPoolExecutor</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">(</span>
        <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> 
        <span class="token number">0</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>SECONDS<span class="token punctuation">,</span> 
        <span class="token keyword">new</span> <span class="token class-name">ArrayBlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        t<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">ThreadLocal</span><span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span> threadLocal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                threadLocal<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">//threadLocal.remove();</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    t<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>执行上述代码，你会发现 <code>java.lang.OutOfMemoryError: Java heap space</code> 异常。原因在于：</p>
<p>ThreadLocal 并不存储数据，而是依靠每个线程中的 ThreadLocalMap 来存储数据。毫无疑问，ThreadLocalMap 是一个 Map 结构，其中存的是键值对：键是 ThreadLocal 对象，而值就是你所要存储的值。</p>
<p>简而言之，你以为存进 ThreadLocal 中的数据实际上并没有存到 ThreadLocal 中，而是存到了一个 Map 中的 Value 部分。例如，你有 3 个 ThreadLocal 分别村的是 String 类型的值、Integer 类型的值和 Double 类型的值：那么 ThreadLocalMap 中的内容类似如下：</p>
<table>
<thead>
<tr>
<th style="text-align:left">Key</th>
<th style="text-align:left">Value</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">local1</td>
<td style="text-align:left">String 对象</td>
</tr>
<tr>
<td style="text-align:left">local2</td>
<td style="text-align:left">Integer 对象</td>
</tr>
<tr>
<td style="text-align:left">local3</td>
<td style="text-align:left">Double 对象</td>
</tr>
</tbody>
</table>
<p>但是，问题在于：<strong>每个程中有且仅有一个 ThreadLocalMap ，并且，它的 Key 是 ThraedLocal 的软引用</strong> ！</p>
<p>也就是意味着，当 ThreadLocal 对象没有其它的强引用时，在 JVM 进行垃圾回收时，它们会被释放掉，那么这就意味着，ThreadLocalMap 中会出现 Key 为 null 的键值对，并且，键值对中的值将无法被 JVM 回收，从而最终出现内存溢出。</p>
<p>解决这个问题的关键在于：在不再需要的时候，一定要记得调用 <code>.remove</code> 方法做 <code>.set</code> 方法的反向操作，移除存储的数据。这就是正确使用 ThreadLocal 的方式。</p>
</template>
