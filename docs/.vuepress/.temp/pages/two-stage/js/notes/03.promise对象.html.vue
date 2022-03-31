<template><h1 id="promise-对象" tabindex="-1"><a class="header-anchor" href="#promise-对象" aria-hidden="true">#</a> Promise 对象</h1>
<p><strong>JavaScript 是一个单线程的编程语言，通过异步、回调函数来处理各种事件</strong>。因此，如果要处理多个有先后顺序的事件，那么将会出现多次嵌套回调函数的情况，这也被很多开发人员称为『回调地狱』。</p>
<p>Promise 对象则是通过将代表异步操作最终完成或者失败的操作封装到了对象中。Promise 本质上是一个绑定了回调的对象，不过这样可以适当缓解多层回调函数的问题。</p>
<p>Promise 最早由社区提出和实现，随后被 ES6 将其纳入标准中。</p>
<p>Promise 规定每个 Promise 对象都有『状态』，Promise 对象的初始状态是 pending ，接下来，它可以变成 fulfilled（代表成功）或者 rejected（代表失败）。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>pending 
│──> fulfilled
└──> rejected

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Promise 对象的状态的变化只会发生一次，且不可逆。一旦 Promise 对象的状态一旦变为 2 种终止态中的任意一个，都称它为『<strong>已定型</strong>』（<strong>resolved</strong>）。</p>
<p>首先要认清最基本的用法。一般学习 Promise 看到的第一段代码是这样：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 同步调用实例
 */</span>
<span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 做一些事情，根据你自己的逻辑来。通常是异步逻辑</span>

  <span class="token comment">// 根据上面代码的执行结果，可能调用 resolve，也可能调用 reject</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token comment">/* 条件随便写 ^_^ 根据你自己的逻辑来 */</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 传给 Promise 的 resolve 回调。一旦它被执行，则意味着 Promise 对象进入成功状态。</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 传给 Promise 的 reject 回调。一旦它被执行，则意味着 Promise 对象进入失败状态。</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token comment">/*
p.then(函数一, 函数二);

也可以写成：

p.then(函数一)
 .catch(函数二);
*/</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>通过以上例子，我们应该（或者需要知道）以下基本概念（只考虑 Promise 中为异步代码）：</p>
<ul>
<li>Promise 是一个构造函数，使用 <code>new Promise</code> 创建实例。所以变量 p 引用的是创建出来的一个对象。</li>
<li>Promise 构造函数有一个参数 <strong>executor</strong> ，它是一个函数，<strong>在 Promise 创建实例的过程中就会被执行</strong>。</li>
<li>executor 函数有两个参数 <strong>resolve</strong> 、<strong>reject</strong> ，也都是函数。在 executor 执行的过程中，会触发 resolve、reject 的执行（以上例子中为异步执行）。</li>
<li>Promise 中有两个属性：value 和 reason 。resolve 执行时可以传入异步事件成功回调执行的结果，这个结果改变 Promise 的 value 。
<ul>
<li>resolve 执行时会执行 then 传入的 onFulfilled ，参数为 Promise 的 value 。类似，reject 执行时可以传入异步事件失败回调执行的结果，这个结果改变 Promise 的 reason 。</li>
<li>reject 执行时会执行 then 传入的 onRejected ，参数为 Promise 的 reason 。</li>
</ul>
</li>
<li>Promise 实例有 then 方法，then 方法有两个参数，Promise 被解决的回调 onFulfilled、Promise 被拒绝的回调 onRejected，都是函数。
<ul>
<li>onFulfilled 被传入 Promise 的 onFulfilledCallbacks 队列，供 resolve 执行时调用。</li>
<li>onRejected 被传入 Promise 的 onRejectedCallbacks 队列，供 reject 执行时调用。</li>
</ul>
</li>
<li>onFulfilled 有一个参数 value ，在实际调用时由 resolve 函数传递。类似，onRejected 有一个参数 reason，在实际调用时由 reject 函数传递。</li>
</ul>
<p>在 Promise 中，最值得注意的是：resolve() 是异步执行，它是一个微任务。</p>
<p><strong>用 Promise 包装 JQuery 的 Ajax 请求：</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">ajax</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        $<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">url</span><span class="token operator">:</span> params <span class="token operator">&amp;&amp;</span> params<span class="token punctuation">.</span>url <span class="token operator">||</span> <span class="token string">''</span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> params <span class="token operator">&amp;&amp;</span> params<span class="token punctuation">.</span>type <span class="token operator">||</span> <span class="token string">'post'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">contentType</span><span class="token operator">:</span> params <span class="token operator">&amp;&amp;</span> params<span class="token punctuation">.</span>contentType <span class="token operator">||</span> <span class="token string">'application/x-www-form-urlencoded'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> params <span class="token operator">&amp;&amp;</span> params<span class="token punctuation">.</span>data <span class="token operator">||</span> <span class="token string">''</span><span class="token punctuation">,</span>
            <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function-variable function">error</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">reject</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 测试</span>
<span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/departments'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"get"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div></template>
