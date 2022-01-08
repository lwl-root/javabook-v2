<template><h1 id="executors" tabindex="-1"><a class="header-anchor" href="#executors" aria-hidden="true">#</a> Executors</h1>
<p>TIP</p>
<p>逻辑上，Executors 是 ThreadPoolExecutor 的工具类。</p>
<p>Executors 可以创建以下 6 种线程池。</p>
<table>
<thead>
<tr>
<th style="text-align:center">#</th>
<th style="text-align:left">方法</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:left">FixedThreadPool</td>
<td style="text-align:left">创建一个数量固定的线程池，超出的任务会在队列中等待空闲的线程，可用于控制程序的最大并发数。</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:left">CachedThreadPool</td>
<td style="text-align:left">短时间内处理大量工作的线程池，会根据任务数量产生对应的线程，并试图缓存线程以便重复使用，如果限制 60 秒没被使用，则会被移除缓存。</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:left">SingleThreadExecutor</td>
<td style="text-align:left">创建一个单线程线程池。</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:left">ScheduledThreadPool</td>
<td style="text-align:left">创建一个数量固定的线程池，支持执行定时性或周期性任务。</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:left">SingleThreadScheduledExecutor</td>
<td style="text-align:left">此线程池就是单线程的 newScheduledThreadPool 。</td>
</tr>
<tr>
<td style="text-align:center">6</td>
<td style="text-align:left">WorkStealingPool</td>
<td style="text-align:left">Java 8 新增创建线程池的方法，创建时如果不设置任何参数，则以当前机器处理器个数作为线程个数，此线程池会并行处理任务，不能保证执行顺序。</td>
</tr>
</tbody>
</table>
<h2 id="_1-fixedthreadpool-使用" tabindex="-1"><a class="header-anchor" href="#_1-fixedthreadpool-使用" aria-hidden="true">#</a> 1. FixedThreadPool 使用</h2>
<p>创建固定个数的线程池，具体示例如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">ExecutorService</span> fixedThreadPool <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newFixedThreadPool</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fixedThreadPool<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"CurrentTime - "</span> <span class="token operator">+</span> <span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token class-name">DateTimeFormatter</span><span class="token punctuation">.</span><span class="token function">ofPattern</span><span class="token punctuation">(</span><span class="token string">"yyyy-MM-dd HH:mm:ss"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>以上程序执行结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>CurrentTime - 2019-06-27 20:58:58
CurrentTime - 2019-06-27 20:58:58
CurrentTime - 2019-06-27 20:58:59
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>根据执行结果可以看出，newFixedThreadPool(2) 确实是创建了两个线程，在执行了一轮（2 次）之后，停了一秒，有了空闲线程，才执行第三次。</p>
<h2 id="_2-cachedthreadpool-使用" tabindex="-1"><a class="header-anchor" href="#_2-cachedthreadpool-使用" aria-hidden="true">#</a> 2. CachedThreadPool 使用</h2>
<p>根据实际需要自动创建带缓存功能的线程池，具体代码如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">ExecutorService</span> cachedThreadPool <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newCachedThreadPool</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cachedThreadPool<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"CurrentTime - "</span> <span class="token operator">+</span> <span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token class-name">DateTimeFormatter</span><span class="token punctuation">.</span><span class="token function">ofPattern</span><span class="token punctuation">(</span><span class="token string">"yyyy-MM-dd HH:mm:ss"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>以上程序执行结果如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">CurrentTime</span> <span class="token operator">-</span> <span class="token number">2019</span><span class="token operator">-</span><span class="token number">06</span><span class="token operator">-</span><span class="token number">27</span> <span class="token number">21</span><span class="token operator">:</span><span class="token number">24</span><span class="token operator">:</span><span class="token number">46</span>
<span class="token class-name">CurrentTime</span> <span class="token operator">-</span> <span class="token number">2019</span><span class="token operator">-</span><span class="token number">06</span><span class="token operator">-</span><span class="token number">27</span> <span class="token number">21</span><span class="token operator">:</span><span class="token number">24</span><span class="token operator">:</span><span class="token number">46</span>
<span class="token class-name">CurrentTime</span> <span class="token operator">-</span> <span class="token number">2019</span><span class="token operator">-</span><span class="token number">06</span><span class="token operator">-</span><span class="token number">27</span> <span class="token number">21</span><span class="token operator">:</span><span class="token number">24</span><span class="token operator">:</span><span class="token number">46</span>
<span class="token class-name">CurrentTime</span> <span class="token operator">-</span> <span class="token number">2019</span><span class="token operator">-</span><span class="token number">06</span><span class="token operator">-</span><span class="token number">27</span> <span class="token number">21</span><span class="token operator">:</span><span class="token number">24</span><span class="token operator">:</span><span class="token number">46</span>
<span class="token class-name">CurrentTime</span> <span class="token operator">-</span> <span class="token number">2019</span><span class="token operator">-</span><span class="token number">06</span><span class="token operator">-</span><span class="token number">27</span> <span class="token number">21</span><span class="token operator">:</span><span class="token number">24</span><span class="token operator">:</span><span class="token number">46</span>
<span class="token class-name">CurrentTime</span> <span class="token operator">-</span> <span class="token number">2019</span><span class="token operator">-</span><span class="token number">06</span><span class="token operator">-</span><span class="token number">27</span> <span class="token number">21</span><span class="token operator">:</span><span class="token number">24</span><span class="token operator">:</span><span class="token number">46</span>
<span class="token class-name">CurrentTime</span> <span class="token operator">-</span> <span class="token number">2019</span><span class="token operator">-</span><span class="token number">06</span><span class="token operator">-</span><span class="token number">27</span> <span class="token number">21</span><span class="token operator">:</span><span class="token number">24</span><span class="token operator">:</span><span class="token number">46</span>
<span class="token class-name">CurrentTime</span> <span class="token operator">-</span> <span class="token number">2019</span><span class="token operator">-</span><span class="token number">06</span><span class="token operator">-</span><span class="token number">27</span> <span class="token number">21</span><span class="token operator">:</span><span class="token number">24</span><span class="token operator">:</span><span class="token number">46</span>
<span class="token class-name">CurrentTime</span> <span class="token operator">-</span> <span class="token number">2019</span><span class="token operator">-</span><span class="token number">06</span><span class="token operator">-</span><span class="token number">27</span> <span class="token number">21</span><span class="token operator">:</span><span class="token number">24</span><span class="token operator">:</span><span class="token number">46</span>
<span class="token class-name">CurrentTime</span> <span class="token operator">-</span> <span class="token number">2019</span><span class="token operator">-</span><span class="token number">06</span><span class="token operator">-</span><span class="token number">27</span> <span class="token number">21</span><span class="token operator">:</span><span class="token number">24</span><span class="token operator">:</span><span class="token number">46</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>根据执行结果可以看出，newCachedThreadPool 在短时间内会创建多个线程来处理对应的任务，并试图把它们进行缓存以便重复使用。</p>
<h2 id="_4-singlethreadexecutor-使用" tabindex="-1"><a class="header-anchor" href="#_4-singlethreadexecutor-使用" aria-hidden="true">#</a> 4. SingleThreadExecutor 使用</h2>
<p>创建单个线程的线程池，具体代码如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">ExecutorService</span> singleThreadExecutor <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newSingleThreadExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    singleThreadExecutor<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"CurrentTime - "</span> <span class="token operator">+</span> <span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token class-name">DateTimeFormatter</span><span class="token punctuation">.</span><span class="token function">ofPattern</span><span class="token punctuation">(</span><span class="token string">"yyyy-MM-dd HH:mm:ss"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>以上程序执行结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>CurrentTime - 2019-06-27 21:43:34
CurrentTime - 2019-06-27 21:43:35
CurrentTime - 2019-06-27 21:43:36
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_5-scheduledthreadpool-使用" tabindex="-1"><a class="header-anchor" href="#_5-scheduledthreadpool-使用" aria-hidden="true">#</a> 5. ScheduledThreadPool 使用</h2>
<p>创建一个可以执行周期性任务的线程池，具体代码如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">ScheduledExecutorService</span> scheduledThreadPool <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newScheduledThreadPool</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
scheduledThreadPool<span class="token punctuation">.</span><span class="token function">schedule</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"ThreadPool："</span> <span class="token operator">+</span> <span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1L</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>SECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"CurrentTime："</span> <span class="token operator">+</span> <span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>以上程序执行结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>CurrentTime：2019-06-27T21:54:21.881
ThreadPool：2019-06-27T21:54:22.845
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>根据执行结果可以看出，我们设置的 1 秒后执行的任务生效了。</p>
<h2 id="_6-singlethreadscheduledexecutor-使用" tabindex="-1"><a class="header-anchor" href="#_6-singlethreadscheduledexecutor-使用" aria-hidden="true">#</a> 6. SingleThreadScheduledExecutor 使用</h2>
<p>创建一个可以执行周期性任务的单线程池，具体代码如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">ScheduledExecutorService</span> singleThreadScheduledExecutor <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newSingleThreadScheduledExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
singleThreadScheduledExecutor<span class="token punctuation">.</span><span class="token function">schedule</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"ThreadPool："</span> <span class="token operator">+</span> <span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1L</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>SECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"CurrentTime："</span> <span class="token operator">+</span> <span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_7-workstealingpool-使用" tabindex="-1"><a class="header-anchor" href="#_7-workstealingpool-使用" aria-hidden="true">#</a> 7. WorkStealingPool 使用</h2>
<p>Java 8 新增的创建线程池的方式，可根据当前电脑 CPU 处理器数量生成相应个数的线程池，使用代码如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">ExecutorService</span> workStealingPool <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newWorkStealingPool</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> finalNumber <span class="token operator">=</span> i<span class="token punctuation">;</span>
    workStealingPool<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"I："</span> <span class="token operator">+</span> finalNumber<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>以上程序执行结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>I：0
I：3
I：2
I：1
I：4
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>根据执行结果可以看出，newWorkStealingPool 是并行处理任务的，并不能保证执行顺序。</p>
<h2 id="_8-总结" tabindex="-1"><a class="header-anchor" href="#_8-总结" aria-hidden="true">#</a> 8. 总结</h2>
<p>Executors 可以创建 6 种不同类型的线程池，其中</p>
<ul>
<li>newFixedThreadPool() 适合执行单位时间内固定的任务数</li>
<li>newCachedThreadPool() 适合短时间内处理大量任务</li>
<li>newSingleThreadExecutor() 和 newSingleThreadScheduledExecutor() 为单线程线程池。它们的区别在于：
<ul>
<li>newSingleThreadExecutor() 创建的线程池去执行任务时，都是一次性的，而</li>
<li>newSingleThreadScheduledExecutor() 可以执行周期性的任务。</li>
</ul>
</li>
<li>newWorkStealingPool() 为 JDK 8 新增的并发线程池，可以根据当前电脑的 CPU 处理数量生成对比数量的线程池，但它的执行为并发执行不能保证任务的执行顺序。</li>
</ul>
<h2 id="_9-其它" tabindex="-1"><a class="header-anchor" href="#_9-其它" aria-hidden="true">#</a> 9. 其它</h2>
<p>【强制】线程池不允许使用 Executors 去创建，而是通过 ThreadPoolExecutor 的方式，这样的处理方式让写的同学更加明确线程池的运行规则，规避资源耗尽的风险。</p>
<p>说明：Executors 各个方法的弊端：</p>
<ol>
<li>
<p>newFixedThreadPool 和 newSingleThreadExecutor :</p>
<p>主要问题是堆积的请求处理队列可能会耗费非常大的内存，甚至 OOM 。</p>
</li>
<li>
<p>newCachedThreadPool 和 newScheduledThreadPool :</p>
<p>主要问题是线程数最大数是 Integer.MAX_VALUE，可能会创建数量非常多的线程，甚至 OOM 。</p>
</li>
</ol>
</template>
