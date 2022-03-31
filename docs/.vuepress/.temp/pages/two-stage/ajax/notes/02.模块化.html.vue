<template><h1 id="模块化" tabindex="-1"><a class="header-anchor" href="#模块化" aria-hidden="true">#</a> 模块化</h1>
<h2 id="_1-关于模块化" tabindex="-1"><a class="header-anchor" href="#_1-关于模块化" aria-hidden="true">#</a> 1. 关于模块化</h2>
<p>所有的编程语言都会面对『模块化』的需求。因为，大家都会遇到 2 个问题：</p>
<ul>
<li>命名冲突</li>
<li>文件依赖</li>
</ul>
<p>通过『模块化』可以解决上述两个问题：</p>
<ul>
<li>模块化就是把单独的一个功能封装到一个模块（文件）中，模块之间相互隔离，但是可以通过特定的接口公开内部成 员，也可以依赖别的模块。</li>
<li>模块化开发的好处：方便代码的重用，从而提升开发效率，并且方便后期的维护。</li>
</ul>
<p>虽然，我们更常见的是在前端『工程化的项目』中大量使用到模块化，但是，现在的浏览器也支持在普通的、静态的 html 文件中使用模块化。</p>
<p>你只需要做 2 件事情：</p>
<ol>
<li>将 js 代码写在独立的 .js 文件中，并 export 你想要导出的内容；</li>
<li>在 .html 文件中使用 <code>&lt;script type=&quot;module&quot;&gt;&lt;/script&gt;</code> 引入它，并正确使用 import 即可。</li>
</ol>
<div class="custom-container danger"><p class="custom-container-title">警告</p>
<p>在静态 html 页面中使用多模块，.html 文件不能以双击的方式在浏览器中直接打开，要把它运行访问。最简单的方式，就是在 vscode 中安装 liverserver 插件运行。</p>
</div>
<h2 id="_2-javascript-的模块化" tabindex="-1"><a class="header-anchor" href="#_2-javascript-的模块化" aria-hidden="true">#</a> 2. JavaScript 的模块化</h2>
<p>JavaScript 引入模块化的概念比较晚。在 ES6 提出模块化规范之前，社区中已经尝试并提出了 AMD、CMD、CommonJS 等模块化规范。不过这些非官方的模块化标准存在一定的局限性。</p>
<p>因此，ES6 语法规范中，在语言层面上定义了 ES6 模块化规范，是浏览器端与服务器端通用的模块化开发规范。</p>
<p>ES6 模块化规范中定义：</p>
<ul>
<li>每个 js 文件都是一个独立的模块</li>
<li>导入模块成员使用 <strong>import</strong> 关键字</li>
<li>暴露模块成员使用 <strong>export</strong> 关键字</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>『<strong>暴露模块成员</strong>』这个说法有些奇怪，但是其它语言也实现了同样的功能，只不过不是叫这个名字。例如，C++ 和 Java 是以『<strong>访问权限</strong>』实现的类似功能，而 C 语言是以『<strong>本地（静态）变量</strong>』实现的类似功能。</p>
</div>
<h2 id="_3-export-命令" tabindex="-1"><a class="header-anchor" href="#_3-export-命令" aria-hidden="true">#</a> 3. export 命令</h2>
<p><strong>一个模块就是一个独立的文件</strong>，文件内部的所有变量外部无法获取。如果希望外部能够读取到模块内部的某个变量，就必须使用 <strong>export</strong> 关键字输出该变量。</p>
<p>输出（export）变量有 2 种写法：</p>
<ol>
<li>
<p>单个输出</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">var</span> firstName <span class="token operator">=</span> <span class="token string">'Michael'</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">var</span> lastName <span class="token operator">=</span> <span class="token string">'Jackson'</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">var</span> year <span class="token operator">=</span> <span class="token number">1958</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>这种写法中，对于（你所想要输出的）每个变量要单独书写 <code>export</code>（输出几个变量，就要写几个 <code>export</code> ）。</p>
</li>
<li>
<p>统一输出</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> firstName <span class="token operator">=</span> <span class="token string">'Michael'</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> lastName <span class="token operator">=</span> <span class="token string">'Jackson'</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> year <span class="token operator">=</span> <span class="token number">1958</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span>firstName<span class="token punctuation">,</span> lastName<span class="token punctuation">,</span> year<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>这种写法中，你只要书写一个 <code>export</code> ，将你所想要输出的变量都写在这里，写在一起。</p>
</li>
</ol>
<p><strong><code>export</code> 除了输出变量，还可以输出函数</strong>。也分为单个输出和同意输出 2 种写法。</p>
<ol>
<li>
<p>单个输出</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">one</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">two</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>
<li>
<p>统一输出</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">one</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">two</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> one<span class="token punctuation">,</span> two <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li>
</ol>
<h2 id="_4-import-命令" tabindex="-1"><a class="header-anchor" href="#_4-import-命令" aria-hidden="true">#</a> 4. import 命令</h2>
<p>使用 <strong>export</strong> 定义模块的对外接口以后，其它 JS 文件就可以通过 <strong>import</strong> 来加载这个模块。</p>
<p><strong>import</strong> 命令用于加载其它的文件，并从中输入变量。</p>
<p>需要强调的一点是，并非人家 export，你就能直接使用，你需要 import 别人 export 出来的变量和方法，而后你才能用。</p>
<p><strong>import</strong> 命令接受一对大括号，里面指定从其它模块导入的变量名（或函数名），<strong>大括号里面的变量名必须与被导入模块 export 的“东西”的名称相同</strong>。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> firstName<span class="token punctuation">,</span> lastName<span class="token punctuation">,</span> year <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./xxx.js'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>import</strong> 后面的 <strong>from</strong> 指定模块文件的位置，可以使用相对路径，也可以使用绝对路径。<code>.js</code> 后缀可以省略。</p>
<blockquote>
<p><strong>import</strong> 命令输入的变量都是『<strong>只读</strong>』的，即，不允许再加载它的脚本中改写它。如果导入的是一个对象，虽然改写对象的属性是允许的，但是仍不推荐这样使用。</p>
<p>建议凡是 <strong>import</strong> 的变量，都当作完全只读。若无必要，轻易不要改变它（和它的属性）。</p>
</blockquote>
<h2 id="_5-export-default-命令" tabindex="-1"><a class="header-anchor" href="#_5-export-default-命令" aria-hidden="true">#</a> 5. export default 命令</h2>
<p>在使用 <strong>import</strong> 命令时，<strong>import</strong> 方需要明确知道 <strong>export</strong> 方对外导出的变量名或函数名，否则无法加载。这就需要 <strong>import</strong> 方去阅读 <strong>export</strong> 方的源码（或文档）。</p>
<p>很显然，这样是很不方便的。更有甚者，<strong>export</strong> 方对外导出的是匿名对象，或匿名类，这里压根就没名字！例如：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>这种情况下，你又怎么可能获得它所导出的变量（匿名对象）和函数？</p>
<p>为了给用户提供方便，不用阅读源码（或文档）就能加载模板，可以使用 <strong><code>export default</code></strong> 命令，为模块指定默认输出。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
或
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>这样，<strong>import</strong> 方就可以『<strong>以任意的名字</strong>』去接受这个匿名对象（或匿名函数）。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> obj <span class="token keyword">from</span> <span class="token string">'xxx.js'</span>
或
<span class="token keyword">import</span> sayHello <span class="token keyword">from</span> <span class="token string">'xxx.js'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote>
<p>逻辑上等同于：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">sayHello</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></blockquote>
<p>需要注意的是，使用 <strong>export default</strong> 时，对应的 <strong>import</strong> 命令后面不使用大括号；使用 <strong>export</strong> 时，对应的 <strong>import</strong> 需要使用大括号。</p>
<p>毫无疑问，一个模块只能有一个默认输出 <strong>export default</strong> 。</p>
</template>
