<template><h1 id="浅谈vue-element全局loading加载" tabindex="-1"><a class="header-anchor" href="#浅谈vue-element全局loading加载" aria-hidden="true">#</a> 浅谈vue+element全局loading加载</h1>
<div class="custom-container tip"><p class="custom-container-title">前言</p>
<p>在我们的平时的工作中，在前后端交互的时候，为了提高页面的观赏性和用户的体验，我们会在页面上添加loading来阻止用户操作来等待接口的返回，这个时候我们会考虑到全局loading还是局部loading，下面小编总结了一下，在开发中自己用到的方法，一起共享。</p>
</div>
<h2 id="_01-用到的插件" tabindex="-1"><a class="header-anchor" href="#_01-用到的插件" aria-hidden="true">#</a> 01：用到的插件</h2>
<p><strong>1、element-ui--&gt;ui库</strong></p>
<p><strong>2、lodash---&gt;高效的JavaScript库</strong></p>
<p><strong>3、axios---&gt;基于promise的http库</strong></p>
<p>准备工作安装：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>$ npm i element<span class="token operator">-</span>ui <span class="token operator">-</span><span class="token constant">S</span>
$ npm i lodash <span class="token operator">-</span><span class="token constant">S</span>
$ npm i axios <span class="token operator">-</span><span class="token constant">S</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_02-开启loading" tabindex="-1"><a class="header-anchor" href="#_02-开启loading" aria-hidden="true">#</a> 02：开启loading</h2>
<p>首先我们需要引入element-ui的Loading组件，这个组件有两种调用方式：</p>
<p>1、通过指v-loading</p>
<p>2、通过服务Loading.service();</p>
<p>样式见下图：</p>
<p><img src="/images/loading.png" alt="img"></p>
<p><a href="https://element.eleme.cn/#/zh-CN/component/loading">api:https://element.eleme.cn/#/zh-CN/component/loading</a></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Loading <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"element-ui"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> _ <span class="token keyword">from</span> <span class="token string">'lodash'</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> loading <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>    <span class="token comment">//设置全局变量loading</span>
<span class="token keyword">let</span> needRequestCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>   <span class="token comment">//设置全局的请求总数</span>

 <span class="token comment">//开启loading状态</span>
<span class="token keyword">const</span> <span class="token function-variable function">startLoading</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">headers<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  loading <span class="token operator">=</span> Loading<span class="token punctuation">.</span><span class="token function">service</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">lock</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>   <span class="token comment">//是否锁定屏幕的滚动</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> headers<span class="token punctuation">.</span>text<span class="token operator">||</span><span class="token string">"加载中……"</span><span class="token punctuation">,</span>   <span class="token comment">//loading下面的文字</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">"rgba(0, 0, 0, 0.7)"</span><span class="token punctuation">,</span>   <span class="token comment">//loading的背景色</span>
    <span class="token literal-property property">target</span><span class="token operator">:</span>headers<span class="token punctuation">.</span>target<span class="token operator">||</span><span class="token string">"body"</span>    <span class="token comment">//loading显示在容器</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="_03-关闭loading" tabindex="-1"><a class="header-anchor" href="#_03-关闭loading" aria-hidden="true">#</a> 03：关闭loading</h2>
<p>在关闭loading的时候为了防止loading的闪动，这里采用了防抖的方法，防抖的计时一般采用300-600ms之前为最佳，在关闭loading的之后，我们要注意全局变量导致的V8垃圾回收机制，把没用的变量清空为null</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//关闭loading状态</span>
<span class="token keyword">const</span> endLoading <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">debounce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  loading<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  loading <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_04-对多次请求loading的开启" tabindex="-1"><a class="header-anchor" href="#_04-对多次请求loading的开启" aria-hidden="true">#</a> 04：对多次请求loading的开启</h2>
<p>在这里，方法中设置了headers的参数,这个参数的用途在于，在我们请求的时候我们不用的接口和方法可能用到的样式和文字不同，这个时候我们可以通过这个参数来传递</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">showScreenLoading</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token parameter">headers</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
   <span class="token keyword">if</span><span class="token punctuation">(</span>needRequestCount <span class="token operator">==</span> <span class="token number">0</span><span class="token operator">&amp;&amp;</span><span class="token operator">!</span>loading<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">startLoading</span><span class="token punctuation">(</span>headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   needRequestCount<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>复制</p>
<h2 id="_05-对多次请求loading的关闭" tabindex="-1"><a class="header-anchor" href="#_05-对多次请求loading的关闭" aria-hidden="true">#</a> 05：对多次请求loading的关闭</h2>
<p>在关闭的方法中，使用了一个Math.max()取最大值的方法，是为了保险取到的needRequestCount是0</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">hideScreenLoading</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>needRequestCount<span class="token operator">&lt;=</span><span class="token number">0</span><span class="token punctuation">)</span>  <span class="token keyword">return</span> 
    needRequestCount<span class="token operator">--</span><span class="token punctuation">;</span>
    needRequestCount <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>needRequestCount<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>needRequestCount<span class="token operator">===</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">endLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="_06-在请求中设置loading" tabindex="-1"><a class="header-anchor" href="#_06-在请求中设置loading" aria-hidden="true">#</a> 06：在请求中设置loading</h2>
<p>在这里，我们使用的是axios的请求拦截器</p>
<p>我们可以在headers的参数里设置showLoading属性来灵活的设置loading的显示和隐藏</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token comment">//请求拦截器</span>
instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
   <span class="token parameter">config</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>Authorization <span class="token operator">=</span> Lockr<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"token"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>showLoading <span class="token operator">!==</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">showScreenLoading</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>showLoading <span class="token operator">!==</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token function">hideScreenLoading</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
      Message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"请求超时!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="_07-在响应中设置loading" tabindex="-1"><a class="header-anchor" href="#_07-在响应中设置loading" aria-hidden="true">#</a> 07：在响应中设置loading</h2>
<p>在这里，小编用了一个setTimeout定时器是为了模拟请求异步返回，查看loading的状态，在开发中我们可以去掉</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token comment">//响应拦截器</span>
 instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
     <span class="token parameter">response</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
       <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
           <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>showLoading <span class="token operator">!==</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token function">hideScreenLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
           <span class="token punctuation">}</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token keyword">return</span> response<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
     <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
       <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>showLoading <span class="token operator">!==</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token function">hideScreenLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
       <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token function">instance</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="_08-完整的代码" tabindex="-1"><a class="header-anchor" href="#_08-完整的代码" aria-hidden="true">#</a> 08：完整的代码</h2>
<p>开箱即用，就问你香不香</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">"axios"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Lockr <span class="token keyword">from</span> <span class="token string">"lockr"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> showScreenLoading<span class="token punctuation">,</span> hideScreenLoading <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./loading"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"element-ui"</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Service</span> <span class="token punctuation">{</span>
  <span class="token function">construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>baseURL <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_URL</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token number">3000</span><span class="token punctuation">;</span> <span class="token comment">//请求时间</span>
  <span class="token punctuation">}</span>
  <span class="token function">request</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>baseURL<span class="token punctuation">,</span>
      <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>timeout
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//请求拦截器</span>
    instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
      <span class="token parameter">config</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>Authorization <span class="token operator">=</span> Lockr<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"token"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>showLoading <span class="token operator">!==</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">showScreenLoading</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> config<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>showLoading <span class="token operator">!==</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">hideScreenLoading</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        Message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"请求超时!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//响应拦截器</span>
    instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
      <span class="token parameter">response</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>showLoading <span class="token operator">!==</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token function">hideScreenLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span> response<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>showLoading <span class="token operator">!==</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">hideScreenLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">instance</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Service</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Loading <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"element-ui"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> _ <span class="token keyword">from</span> <span class="token string">'lodash'</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> loading <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> needRequestCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>


<span class="token comment">//开启loading状态</span>
<span class="token keyword">const</span> <span class="token function-variable function">startLoading</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">headers<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  loading <span class="token operator">=</span> Loading<span class="token punctuation">.</span><span class="token function">service</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">lock</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> headers<span class="token punctuation">.</span>text<span class="token operator">||</span><span class="token string">"加载中……"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">"rgba(0, 0, 0, 0.7)"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">target</span><span class="token operator">:</span>headers<span class="token punctuation">.</span>target<span class="token operator">||</span><span class="token string">"body"</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//关闭loading状态</span>
<span class="token keyword">const</span> endLoading <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">debounce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  loading<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  loading <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">showScreenLoading</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token parameter">headers</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
   <span class="token keyword">if</span><span class="token punctuation">(</span>needRequestCount <span class="token operator">==</span> <span class="token number">0</span><span class="token operator">&amp;&amp;</span><span class="token operator">!</span>loading<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">startLoading</span><span class="token punctuation">(</span>headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   needRequestCount<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">hideScreenLoading</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>needRequestCount<span class="token operator">&lt;=</span><span class="token number">0</span><span class="token punctuation">)</span>  <span class="token keyword">return</span> 
    needRequestCount<span class="token operator">--</span><span class="token punctuation">;</span>
    needRequestCount <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>needRequestCount<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>needRequestCount<span class="token operator">===</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">endLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div></template>
