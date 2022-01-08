<template><h1 id="线程的调用" tabindex="-1"><a class="header-anchor" href="#线程的调用" aria-hidden="true">#</a> 线程的调用</h1>
<h2 id="_1-线程的优先级-了解、自学" tabindex="-1"><a class="header-anchor" href="#_1-线程的优先级-了解、自学" aria-hidden="true">#</a> 1. 线程的优先级（了解、自学）</h2>
<p>当一个时刻有多个线程处于可运行状态，它们需要排队等待 CPU 资源，每个线程会自动获得一个线程的优先级（Priority），优先级的高低反映线程的重要或紧急程序。</p>
<p>可运行状态（Runnable）的线程按优先级排队，线程调度依据建立在优先级基础上的『先到先服务』原则。</p>
<p>注意</p>
<p>线程的调度是操作系统的重要功能和职责。</p>
<p>线程调度的规则依赖于操作系统内核的实现。有的操作系统会充分遵守优先级规则，有的系统只是将优先级当做『<strong>建议值</strong>』，而有的操作系统则完全没有优先级概念、无视优先级，完全随机。</p>
<p><strong>所以不能以优先级作为控制线程先后执行顺序的手段！</strong></p>
<p>线程的优先级用 1 ... 10 表示，10 表示优先级最高，默认值是 5。Thread 类中有对应的静态常量：NORM_PRIORITY、MIN_PRIORITY、MAX_PRIORITY 。</p>
<p>线程的优先级可以通过 <strong>Thread#setPriority(int level)</strong> 方法更改。</p>
<h2 id="_2-实现线程调度的方法" tabindex="-1"><a class="header-anchor" href="#_2-实现线程调度的方法" aria-hidden="true">#</a> 2. 实现线程调度的方法</h2>
<p>线程调度的实现核心思路只有一个：<strong>通过各种手段，迫使一个线程（通常是当前执行线程）让出 CPU ，从而让其它线程拥有执行机会</strong>。</p>
<ul>
<li>
<p>手段一：<strong>Thread#join</strong> 方法</p>
<p>Thread#join 方法会导致当前线程阻塞（让出 CPU），等待调用该方法的线程（即，Thread 对象所代表的那个线程）结束后再继续执行本线程。</p>
</li>
<li>
<p>手段二：<strong>Thread.sleep</strong> 方法</p>
<p>Thread.sleep 方法会导致当前线程睡眠（本质上也是阻塞，迫使当前线程让出 CPU），在指定时间到期后，重新进入可运行状态。</p>
</li>
<li>
<p>手段三：<strong>Thread.yield</strong> 方法</p>
<p>Thread.yield 方法稍微有点不同，它让当前线程让出 CPU ，但并不是进入阻塞状态，而是直接进入 Runnable 状态。</p>
</li>
</ul>
<p>需要注意的是，当前线程让出 CPU 之后，接下来是哪个线程执行（从 Runnable 状态变为 Running 状态）带有『<strong>不确定性</strong>』。</p>
<h2 id="_3-线程的同步与互斥" tabindex="-1"><a class="header-anchor" href="#_3-线程的同步与互斥" aria-hidden="true">#</a> 3. 线程的同步与互斥</h2>
<p>当两个或多个线程需要访问同一资源（或执行同一段代码时），需要某一时刻只能被一个线程使用的方式，称为线程『<strong>互斥</strong>』。</p>
<p>当两个或多个线程以互斥的方式访问完同一资源（或执行同一段代码）后，『通知』其他线程的方式，称为线程『<strong>同步</strong>』。</p>
<blockquote>
<p>同步与互斥通常总是一起出现的。只出现互斥，不出现同步，意味着代码逻辑是一种极简单的多线程状况。</p>
</blockquote>
<h2 id="_4-synchronized-关键字" tabindex="-1"><a class="header-anchor" href="#_4-synchronized-关键字" aria-hidden="true">#</a> 4. synchronized 关键字</h2>
<p>使用 <strong>synchronized</strong> 关键字修饰的方法控制对类成员变量的访问。每个类实例都对应一把锁，方法一旦执行，就独占该锁，直到方法结束时才将锁释放；此后其它被阻塞的线程才能获得该锁，重新进入可执行状态。</p>
<p>这种机制保证了同一时刻，对于每一个实例，其所声明为 synchronized 的方法只能有一个处于可执行状态，从而有效地避免了类成员变量的访问冲突。</p>
<p>语法：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>访问修饰符 <span class="token keyword">synchronized</span> 返回类型 方法名 <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>或</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">synchronized</span> 访问修饰符 返回类型 方法名 <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>synchronized 方法的缺陷在于：如果将一个耗时的方法声明为 synchronized 将会使其它线程阻塞时间过长，从而影响系统执行效率和用户体验。</p>
<p>同步代码块是同步方法的缺陷的解决方案，它『锁住』的不是整个方法，而是方法中的一个代码片段。</p>
<p>语法：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">synchronized</span> <span class="token punctuation">(</span>一个对象<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>这里的『一个对象』通常是一个字符串常量对象。</p>
</template>
