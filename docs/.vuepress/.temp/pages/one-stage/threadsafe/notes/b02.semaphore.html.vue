<template><h1 id="信号量-semaphore" tabindex="-1"><a class="header-anchor" href="#信号量-semaphore" aria-hidden="true">#</a> 信号量（Semaphore）</h1>
<h2 id="_1-关于信号量" tabindex="-1"><a class="header-anchor" href="#_1-关于信号量" aria-hidden="true">#</a> 1. 关于信号量</h2>
<p>Java 通过 Semaphore 类实现了经典的信号量。信号量通过计数器来控制对共享资源的访问。</p>
<ul>
<li>如果计数器大于 0， 则允许访问；</li>
<li>如果计数器为 0，则不允许访问。</li>
</ul>
<p>计数器的计数逻辑上代表着当前共享资源的许可证的数量。</p>
<p>Semaphore 类具有如下所示的两个构造函数：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Semaphore</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span>
<span class="token class-name">Semaphore</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">,</span> <span class="token keyword">boolean</span> how<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>其中，<code>num</code> 指定了初始的许可证计数大小。因此，num 指定了任意时刻可以访问共享资源的线程数量。如果，num 是 1，那么任意时刻只有一个线程能够访问资源。</p>
<p>默认情况下，等待获取许可证的线程以随机的方式『抢夺』许可证。通过将 <code>how</code> 设置为 true ，可以确保等待的线程以前后顺序获得许可证。即，是否是公平锁。</p>
<p>为了得到许可证，可以调用 <strong>Semaphore#acquire</strong> 方法，该方法具有以下 2 种形式：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 获得 1 个许可证</span>
<span class="token keyword">void</span> <span class="token function">acquire</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span>

<span class="token comment">// 获得 num 个许可证</span>
<span class="token keyword">void</span> <span class="token function">acquire</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>如果调用时无法获得许可证，就会挂起线程（阻塞），直到许可证可以获得为止。</p>
<p>为了释放许可证，可以调用 <strong>Semaphore#release</strong> 方法，该方法具有以下 2 种形式：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 释放 1 个许可证</span>
<span class="token keyword">void</span> <span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 释放 num 个许可证</span>
<span class="token keyword">void</span> <span class="token function">relase</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>为了使用信号量控制对资源的访问，在访问资源之前，希望使用资源的每个线程必须先调用 <strong>acquire</strong> 方法；当线程使用完资源时，必须调用 <strong>release</strong> 方法。</p>
</div>
<h2 id="_2-信号量实现生产者消费者模型" tabindex="-1"><a class="header-anchor" href="#_2-信号量实现生产者消费者模型" aria-hidden="true">#</a> 2. 信号量实现生产者消费者模型</h2>
<ul>
<li>
<p>消费者</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ReaderThread</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Semaphore</span> canReadSemaphore<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Semaphore</span> canWriteSemaphore<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">ReaderThread</span><span class="token punctuation">(</span><span class="token class-name">Semaphore</span> canReadSemaphore<span class="token punctuation">,</span> <span class="token class-name">Semaphore</span> canWriteSemaphore<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>canReadSemaphore <span class="token operator">=</span> canReadSemaphore<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>canWriteSemaphore <span class="token operator">=</span> canWriteSemaphore<span class="token punctuation">;</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">26</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                canReadSemaphore<span class="token punctuation">.</span><span class="token function">acquire</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%s "</span><span class="token punctuation">,</span> <span class="token class-name">Box</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">Box</span><span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                canWriteSemaphore<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div></li>
<li>
<p>生产者</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WriterThread</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Semaphore</span> canReadSemaphore<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Semaphore</span> canWriteSemaphore<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">WriterThread</span><span class="token punctuation">(</span><span class="token class-name">Semaphore</span> canReadSemaphore<span class="token punctuation">,</span> <span class="token class-name">Semaphore</span> canWriteSemaphore<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>canReadSemaphore <span class="token operator">=</span> canReadSemaphore<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>canWriteSemaphore <span class="token operator">=</span> canWriteSemaphore<span class="token punctuation">;</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">char</span> c <span class="token operator">=</span> <span class="token char">'a'</span><span class="token punctuation">;</span> c <span class="token operator">&lt;=</span> <span class="token char">'z'</span><span class="token punctuation">;</span> c<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                canWriteSemaphore<span class="token punctuation">.</span><span class="token function">acquire</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">Box</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
                canReadSemaphore<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div></li>
<li>
<p>主程序</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Semaphore</span> canReadSemaphore <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Semaphore</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Semaphore</span> canWriteSemaphore <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Semaphore</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">ReaderThread</span> readerThread <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReaderThread</span><span class="token punctuation">(</span>canReadSemaphore<span class="token punctuation">,</span> canWriteSemaphore<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">WriterThread</span> writerThread <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WriterThread</span><span class="token punctuation">(</span>canReadSemaphore<span class="token punctuation">,</span> canWriteSemaphore<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li>
</ul>
</template>
