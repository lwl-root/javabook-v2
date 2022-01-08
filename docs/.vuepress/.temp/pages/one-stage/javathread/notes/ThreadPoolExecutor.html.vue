<template><h1 id="threadpoolexecutor" tabindex="-1"><a class="header-anchor" href="#threadpoolexecutor" aria-hidden="true">#</a> ThreadPoolExecutor</h1>
<h2 id="_1-threadpoolexecutor-的使用" tabindex="-1"><a class="header-anchor" href="#_1-threadpoolexecutor-的使用" aria-hidden="true">#</a> 1. ThreadPoolExecutor 的使用</h2>
<p>线程池使用代码如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">ThreadPoolExecutor</span> threadPoolExecutor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">(</span>
    <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> 
    <span class="token number">10L</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>SECONDS<span class="token punctuation">,</span> 
    <span class="token keyword">new</span> <span class="token class-name">LinkedBlockingQueue</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

threadPoolExecutor<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 执行线程池</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello, Java."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 以上程序执行结果如下：</span>
<span class="token comment">// Hello, Java.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>ThreadPoolExecutor 构造方法有 4 个，其中参数最多的那个构造方法有 7 个入参，其它 3 个构造方法本质上就是这个『最长构造方法』的简写。</p>
<p>这 7 个参数名称如下所示：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">(</span>
        <span class="token keyword">int</span> corePoolSize<span class="token punctuation">,</span>   <span class="token comment">// ①</span>
        <span class="token keyword">int</span> maximumPoolSize<span class="token punctuation">,</span><span class="token comment">// ② </span>
        <span class="token keyword">long</span> keepAliveTime<span class="token punctuation">,</span> <span class="token comment">// ③ </span>
        <span class="token class-name">TimeUnit</span> unit<span class="token punctuation">,</span>      <span class="token comment">// ④</span>
        <span class="token class-name">BlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Runnable</span><span class="token punctuation">></span></span> workQueue<span class="token punctuation">,</span>  <span class="token comment">// ⑤</span>
        <span class="token class-name">ThreadFactory</span> threadFactory<span class="token punctuation">,</span>        <span class="token comment">// ⑥</span>
        <span class="token class-name">RejectedExecutionHandler</span> handler    <span class="token comment">// ⑦</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>其代表的含义如下：</p>
<ol>
<li>
<p>corePoolSize</p>
<p>线程池中的核心线程数，默认情况下核心线程一直存活在线程池中。即，逻辑上，线程池中的最少线程数。</p>
</li>
<li>
<p>maximumPoolSize</p>
<p>线程池中最大线程数。如果活动的线程达到这个数值以后，ThreadPoolExcecutor 再接收到新任务时，将会阻塞等待，而非创建线程立即执行。</p>
</li>
<li>
<p>keepAliveTime</p>
<p>线程池中的线程可闲置的最大时长，默认情况下对非核心线程生效。如果闲置时间超过这个时间，非核心线程就会被回收。</p>
<p>如果 ThreadPoolExecutor 的 allowCoreThreadTimeOut 设为 true ，那么，核心线程也会受该时长影响。</p>
</li>
<li>
<p>unit</p>
<p>配合 keepAliveTime 使用，keepAliveTime 的值的时间单位。</p>
</li>
<li>
<p>workQueue</p>
<p>线程池中的任务队列，使用 execute 方法或 submit 方法提交的任务都会存储在此队列中。</p>
</li>
<li>
<p>threadFactory</p>
<p>为线程池提供创建新线程的线程工厂。</p>
</li>
<li>
<p>rejectedExecutionHandler</p>
<p>线程池任务队列超过最大值之后的拒绝策略，RejectedExecutionHandler 是一个接口，里面只有一个 rejectedExecution 方法，可在此方法内添加任务超出最大值的事件处理。</p>
<p>ThreadPoolExecutor 也提供了 4 种默认的拒绝策略：</p>
<ul>
<li><code>new ThreadPoolExecutor.DiscardPolicy()</code>：丢弃掉该任务，不进行处理</li>
<li><code>new ThreadPoolExecutor.DiscardOldestPolicy()</code>：丢弃队列里最近的一个任务，并执行当前任务</li>
<li><code>new ThreadPoolExecutor.AbortPolicy()</code>：直接抛出 RejectedExecutionException 异常</li>
<li><code>new ThreadPoolExecutor.CallerRunsPolicy()</code>：既不抛弃任务也不抛出异常，直接使用主线程来执行此任务</li>
</ul>
</li>
</ol>
<p>包含所有参数的 ThreadPoolExecutor 使用代码示例：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ThreadPoolExecutorTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span><span class="token punctuation">,</span> <span class="token class-name">ExecutionException</span> <span class="token punctuation">{</span>
        <span class="token class-name">ThreadPoolExecutor</span> threadPool <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">(</span>
                    <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token number">10L</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>SECONDS<span class="token punctuation">,</span> 
                    <span class="token keyword">new</span> <span class="token class-name">LinkedBlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Runnable</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token keyword">new</span> <span class="token class-name">MyThreadFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
                    <span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor<span class="token punctuation">.</span>CallerRunsPolicy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        threadPool<span class="token punctuation">.</span><span class="token function">allowCoreThreadTimeOut</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            threadPool<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token annotation punctuation">@Override</span>
                <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">try</span> <span class="token punctuation">{</span>
                        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MyThreadFactory</span> <span class="token keyword">implements</span> <span class="token class-name">ThreadFactory</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">AtomicInteger</span> count <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicInteger</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token class-name">Thread</span> <span class="token function">newThread</span><span class="token punctuation">(</span><span class="token class-name">Runnable</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Thread</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> threadName <span class="token operator">=</span> <span class="token string">"MyThread"</span> <span class="token operator">+</span> count<span class="token punctuation">.</span><span class="token function">addAndGet</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            t<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span>threadName<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> t<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><h2 id="_2-线程池执行方法" tabindex="-1"><a class="header-anchor" href="#_2-线程池执行方法" aria-hidden="true">#</a> 2. 线程池执行方法</h2>
<p>execute 方法和 submit 方法都是用来执行线程池的。它们的区别在于 submit 方法可以接收线程池执行的返回值。</p>
<p>下面分别来看两个方法的具体使用和区别：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 创建线程池</span>
<span class="token class-name">ThreadPoolExecutor</span> threadPoolExecutor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">(</span>
    <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> 
    <span class="token number">10L</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>SECONDS<span class="token punctuation">,</span> 
    <span class="token keyword">new</span> <span class="token class-name">LinkedBlockingQueue</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// execute 使用</span>
    threadPoolExecutor<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>   <span class="token comment">// 逻辑代码</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello, Java."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// submit 使用</span>
<span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> future <span class="token operator">=</span> threadPoolExecutor<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Callable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello, 老王."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"Success"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>future<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>以上程序执行结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Hello, Java.
Hello, 老王.
Success
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_3-线程池关闭方法" tabindex="-1"><a class="header-anchor" href="#_3-线程池关闭方法" aria-hidden="true">#</a> 3. 线程池关闭方法</h2>
<p>线程池关闭，可以使用 <strong>.shutdown</strong> 或 <strong>.shutdownNow</strong> 方法，它们的区别是：</p>
<ol>
<li><strong>.shutdown</strong> 方法：不会立即终止线程池，而是要等所有任务队列中的任务都执行完后才会终止。执行完 shutdown 方法之后，线程池就不会再接受新任务了。</li>
<li><strong>.shutdownNow</strong> 方法：执行该方法，线程池的状态立刻变成 STOP 状态，并试图停止所有正在执行的线程，不再处理还在池队列中等待的任务，执行此方法会返回未执行的任务。</li>
</ol>
<p>下面用代码来模拟 shutdown() 之后，给线程池添加任务，代码如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>threadPoolExecutor<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"I'm "</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
threadPoolExecutor<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
threadPoolExecutor<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"I'm Java."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>以上程序执行结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>I'm 0

Exception in thread "main" java.util.concurrent.RejectedExecutionException:
Task com.interview.chapter5.Section2`$$Lambda$2`/1828972342@568db2f2 rejected
from java.util.concurrent.ThreadPoolExecutor@378bf509[Shutting down, pool size
= 1, active threads = 1, queued tasks = 0, completed tasks = 0]

I'm 1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>可以看出，shutdown() 之后就不会再接受新的任务了，不过之前的任务会被执行完成。</p>
<h2 id="_4-总结" tabindex="-1"><a class="header-anchor" href="#_4-总结" aria-hidden="true">#</a> 4. 总结</h2>
<p><strong>ThreadPoolExecutor</strong> 是创建线程池最传统和最推荐使用的方式，创建时要设置线程池的核心线程数和最大线程数还有任务队列集合，如果任务量大于队列的最大长度，线程池会先判断当前线程数量是否已经到达最大线程数，如果没有达到最大线程数就新建线程来执行任务，如果已经达到最大线程数，就会执行拒绝策略（拒绝策略可自行定义）。</p>
<p>线程池可通过 submit() 来调用执行，从而获得线程执行的结果，也可以通过 shutdown() 来终止线程池。</p>
</template>
