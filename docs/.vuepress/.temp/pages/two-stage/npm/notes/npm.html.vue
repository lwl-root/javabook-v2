<template><h1 id="npm-的使用" tabindex="-1"><a class="header-anchor" href="#npm-的使用" aria-hidden="true">#</a> NPM 的使用</h1>
<h2 id="npm-的全局安装和局部安装" tabindex="-1"><a class="header-anchor" href="#npm-的全局安装和局部安装" aria-hidden="true">#</a> npm 的全局安装和局部安装</h2>
<p>虽然我们可以用 Maven 来类比 NPM，但是 NPM 中有 “全局安装” 和 “本地安装” 的区别，而 Maven 中并没有这样的概念。</p>
<p>因此，npm 的本地仓库就细分为：“本地全局安装仓库” 和 “本地局部安装仓库” 。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>全局安装仓库和本地局部安装仓库一共是 1 + N 个。</p>
</div>
<p>在 JavaScript / node.js 领域我们通过 npm 来下载、管理包。其实，这里的 “包” 分为两种：</p>
<p>一种包本质上是命令、工具、软件。我们下载这个包的目的是为了系统（的命令行）中能 “多” 出来一个命令使用。例如 vue-cli 和 cnpm 。</p>
<p>对于这种本质上是『命令』的包，我们要通过全局安装将它们下载、安装到『本地的全局仓库』中。</p>
<p>另一种包，就和 Java 领域中使用 Maven 下载的包一样，是就普普通通的包，是在项目中要引用、使用到的 JavaScript 代码、CSS 代码等。例如，vue 和 bootstrap 。</p>
<p>对于这种本质上是『代码』的包，我们要通过局部安装将他们下载、安装到『本地的局部仓库』中。</p>
<h2 id="npm-全局安装包及使用" tabindex="-1"><a class="header-anchor" href="#npm-全局安装包及使用" aria-hidden="true">#</a> npm 全局安装包及使用</h2>
<p>当你使用 npm install xxx -g 命令去全局安装 xxx 库时，npm 会从网络上的『中央仓库』下载包到你的『本地全局仓库』。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>-g 是 --global 的简写，表示当前的安装操作是全局安装。</p>
</div>
<p>如果你没有改动过你的 npm 的设置，你的本地全局仓库应该在：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>C:\Users\\&lt;用户名>\AppData\Roaming\npm\node_modules
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>这里需要注意的是 AppData 是一个隐藏文件夹。你需要想办法看到它。关于这个文件夹：</p>
<ol>
<li>
<p>路径你可以通过 npm root -g 命令查看得到它。</p>
</li>
<li>
<p>在Windows 的文件资源管理器中你可以通过 %APPDATA%\npm\node_modules 可以直接进入到这个目录，%appdata% 大小写不敏感。</p>
</li>
</ol>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>另外，%APPDATA% = %HOMEPATH%\AppData 。</p>
</div>
<p>全局安装后， %APPDATA%\npm\node_modules 目录下会出现你所安装的 xxx 库的源码，而上一级目录，即 %APPDATA%\npm 则会出现这个库的可执行程序。</p>
<p>由于 npm 是 node.js 的默认的包管理工具。因此，通过 npm 全局安装的包无需额外的配置，你就可在命令行中使用它。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>在 Windows 上全局安装包（命令），你可以通过 where 命令查看该命令在哪。</p>
</div>
<h2 id="npm-局部安装包及使用" tabindex="-1"><a class="header-anchor" href="#npm-局部安装包及使用" aria-hidden="true">#</a> npm 局部安装包及使用</h2>
<p>与全局安装对应的是局部安装。之前反复提到过，全局安装安装的包本质上『是命令、是工具、是软件』。而局部安装的包，才是我们开发中要用到的 “那种” 包。</p>
<p>如果在安装命令 npm install xxx 中没有出现 --global，或其简写 -g ，那么就意味着是局部安装。即，相当于安装命令自带了 --save-dev ，即， --save-dev 是 npm install 的默认值。</p>
<p>局部安装都是安装在『当前项目中』的。即，通常在使用局部安装命令时，你是在项目所在的位置执行安装命令。</p>
<p>局部安装结束后，你的当前项目的 node_modules 目录下会出现一个你所安装的包的文件夹，其中有该包的内容。至此，你在你的项目中也就可以引用、使用这个包。</p>
<p>另外，你所安装的这个包的信息，会记录在前项目的 package.json 文件中。</p>
<div class="custom-container warning"><p class="custom-container-title">再次强调</p>
<p>『全局安装』的包无法在项目中使用，因为，我们反复强调过：全局安装的包不是我们项目中要用到的 “那种包” 。</p>
<p>『全局安装』安装的是的命令，是软件；</p>
<p>『局部安装』安装的是才是库。</p>
</div>
<p>局部安装的包在项目中可以通过 .require 的方式使用。例如：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> webapck <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> xxx <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'xxx'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="两种安装方式的由来" tabindex="-1"><a class="header-anchor" href="#两种安装方式的由来" aria-hidden="true">#</a> 两种安装方式的由来</h2>
<p>早期的 npm 的包的安装方式只有全局安装，并没有局部安装的概念，所有下载的包都放在了全局的仓库中。这和 Java 的 Maven 的行为很像。</p>
<p>但是 npm 在这里有个小问题：<strong>全局安装没有办法下载/安装同一个包的多个版本。</strong></p>
<p>以 Java 的 Maven 做类比，在 Maven 中如果你下载了同一个包的多个版本，那么在本地仓库中它们的目录结构会是如下形式：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>xxx
│── 1.0
│   └── ...
│── 1.1
│   └── ...
│── 1.2
│   └── ...
└── 等等
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>但是 npm 没有这版本这层文件夹，即，npm 全局安装所下载的总是 xxx 包的 <strong>『当前最新版本』</strong>。形如：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>xxx
└── ...
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>这就导致了一个问题：你的 PC 上的两个不同的项目使用的如果是 <strong>『同一个包的两个不同版本』</strong> ，那么这里完全没有办法满足这个需求。</p>
<p>为此，npm 才提出了 <strong>『局部安装』</strong> 的概念，各个项目各下各的、各装各的、各用各的，各人玩各人的，互不干扰。</p>
<p>这样以前的安装方式<small>（即，全局安装）</small>的用途就越来越弱，最终慢慢退化成用来安装命令类的包。</p>
<h2 id="命令总结" tabindex="-1"><a class="header-anchor" href="#命令总结" aria-hidden="true">#</a> 命令总结</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 查看所安装的 node 环境的版本信息</span>
$ <span class="token function">node</span> -v

<span class="token comment"># 查看所安装的包管理器 npm 的版本信息</span>
$ <span class="token function">npm</span> -v

<span class="token comment"># 查看 npm 所使用的网络仓库网址</span>
$ <span class="token function">npm</span> config get registry

<span class="token comment"># 更换 npm 所使用的网络仓库网址。换为淘宝提供的镜像网址。</span>
$ <span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npm.taobao.org/

<span class="token comment"># 从网络仓库下载并全局安装 xxx 包。</span>
$ <span class="token function">npm</span> <span class="token function">install</span> xxx -g 
$ <span class="token function">npm</span> <span class="token function">install</span> xxx --global

<span class="token comment"># npm 全局安装的包的安装路径</span>
$ <span class="token builtin class-name">echo</span> %APPDATA%<span class="token punctuation">\</span>npm<span class="token punctuation">\</span>node_modules

<span class="token comment"># npm 全局安装的包的可执行文件的所在路径</span>
$ <span class="token builtin class-name">echo</span> %APPDATA%<span class="token punctuation">\</span>npm

<span class="token comment"># npm 全局卸载 vue-cli（1.x、2.x 版本）</span>
$ <span class="token function">npm</span> uninstall -g vue-cli

<span class="token comment"># npm 全局安装 vue-cli（3.x 版本）</span>
$ <span class="token function">npm</span> <span class="token function">install</span> -g @vue/cli

<span class="token comment"># 从网络仓库下载并局部安装 xxx 包（到当前项目）</span>
<span class="token function">npm</span> <span class="token function">install</span> xxx
<span class="token function">npm</span> <span class="token function">install</span> xxx --save-dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div></template>
