<template><h1 id="在-vue-cli-中使用-axios" tabindex="-1"><a class="header-anchor" href="#在-vue-cli-中使用-axios" aria-hidden="true">#</a> 在 vue-cli 中使用 axios</h1>
<h2 id="_1-安装-axios" tabindex="-1"><a class="header-anchor" href="#_1-安装-axios" aria-hidden="true">#</a> 1. 安装 axios</h2>
<p>有 2 种安装方式：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 方式一（推荐）：使用 vue-cli 命令安装</span>
vue <span class="token function">add</span> axios

<span class="token comment"># 方式二：使用 npm 命令安装</span>
<span class="token function">npm</span> <span class="token function">install</span> axios
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>建议使用 “<strong>方式一</strong>” 。因为方式一通过 vue-cli 安装的是 ·vue-cli-plugin-axios· 插件，当插件安装成功之后，会去执行插件的代码逻辑，而插件的代码则会再去安装 axios 。之所以这么 “绕” 了一步是因为 vue-cli-plugin-axios 除了安装 axios 之外，它还帮我们生成了一些代码，也就是在项目中所看到的 “多” 出来的 <strong>plugins/axios.js</strong> 文件。</p>
<p>当然，你不需要 vue-cli-plugin-axios “帮忙” 也可以。那么，就使用 “方式二” 直接通过 npm 安装，然后自己去写那些代码。</p>
<Badge type="tip" text="补充" vertical="middle" /> vue-router、element-ui 也是这么个安装思路。
<h2 id="_2-vue-cli-中的跨域问题的解决" tabindex="-1"><a class="header-anchor" href="#_2-vue-cli-中的跨域问题的解决" aria-hidden="true">#</a> 2. vue-cli 中的跨域问题的解决</h2>
<p>详情见 vue-cli 的第一篇笔记。</p>
<h2 id="_3-vue-cli-中引入并使用-axios" tabindex="-1"><a class="header-anchor" href="#_3-vue-cli-中引入并使用-axios" aria-hidden="true">#</a> 3. vue-cli 中引入并使用 axios</h2>
<ol>
<li>
<p>如果实在不知道要在 package.json 的 dependencies 部分写什么的话，可以通过 vue ui 命令，打开 @vue/cli 的新特性：项目仪表盘。通过它来向我们的项目添加 axios 依赖。</p>
</li>
<li>
<p>在你需要发送 ajax 请求的 .vue 中，引入 axios：</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3">
<li>在你的 .vue 代码中，使用 axios 发送 ajax 请求。</li>
</ol>
<p>上述写法是 100% 没毛病的，但是有一个可以偷懒的地方：有太多的地方要写 import ，我们可以想办法只 import 一次。</p>
<p>这种『偷懒』的写法如下：</p>
<ol>
<li>在项目入口 main.js 中 import axios（只 import 这一次）</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2">
<li>在 main.js 中，把 axios 变量绑定到 Vue 的一个原型属性上<small>（原则上，属性名任意，不和已有属性名冲突就行）</small>。</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$http<span class="token operator">=</span> axios<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3">
<li>在你需要发送 ajax 请求的 .vue 中，使用 this.$http 就是在使用 axios 变量。无需再次 import axios 了。</li>
</ol>
<h2 id="_4-关于-vue-cli-中的-vue-use" tabindex="-1"><a class="header-anchor" href="#_4-关于-vue-cli-中的-vue-use" aria-hidden="true">#</a> 4. 关于 vue-cli 中的 Vue.use()</h2>
<p>在 vue-cli 项目中，很多人在使用别人的组件时，会用到 Vue.use() 。例如：Vue.use(VueRouter)、Vue.use(Vuex)、Vue.use(Element)。但是用 axios 时，就不需要用 Vue.use(axios)，就能直接使用。那这是为什么呢？</p>
<p>因为 axios 没有 <strong>install</strong> 。</p>
<p>当你在执行 <code>Vue.use(xxx)</code> 的时候，Vue 会去调用 xxx 的 <code>install</code> 方法<small>（前提是它得有这么个方法）</small>。借用这种机制，你可以将你对 xxx 插件/组件的初始化的代码放在 install 方法里面。</p>
<p>因此，你可以单独地创建一个 .js 文件，在其中创建、配置 axios 对象，并绑定到 Vue 全局和实例变量上，然后，再在 main.js 中通过 Vue.use() 来触发这段代码的执行。</p>
<p>例如，对 axios 的初始化：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">"axios"</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> config <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> _axios <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>

_axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
<span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">return</span> config<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

_axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
<span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">return</span> response<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 2. 利用 Vue 的插件机制：你（程序员）提前写好一个 install 方法，放在这里，等着 Vue 来调用。*/</span>
<span class="token keyword">const</span> Axios <span class="token operator">=</span> <span class="token punctuation">{</span>
<span class="token function-variable function">install</span><span class="token operator">:</span>
<span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">Vue<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
Vue<span class="token punctuation">.</span>axios <span class="token operator">=</span> _axios<span class="token punctuation">;</span>
window<span class="token punctuation">.</span>axios <span class="token operator">=</span> _axios<span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperties</span><span class="token punctuation">(</span><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token punctuation">{</span>
<span class="token literal-property property">axios</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">return</span> _axios<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">$axios</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">return</span> _axios<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Axios<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 你甚至可以就在这里执行 Vue.use()，只需要在 main.js 中 import 这个配置 js 即可。</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Axios<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div></template>
