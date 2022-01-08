<template><h1 id="classpath-在哪" tabindex="-1"><a class="header-anchor" href="#classpath-在哪" aria-hidden="true">#</a> Classpath 在哪？</h1>
<p>问题</p>
<p>src 目录就是 classpath 。这个说法对不对？</p>
<h2 id="_1-什么叫-classpath" tabindex="-1"><a class="header-anchor" href="#_1-什么叫-classpath" aria-hidden="true">#</a> 1. 什么叫 Classpath？</h2>
<p>Classpath 就是『<strong>字面含义</strong>』！指的就是放项目的 <code>.class</code> 文件的文件夹（位置）。</p>
<h3 id="java-项目的-classpath" tabindex="-1"><a class="header-anchor" href="#java-项目的-classpath" aria-hidden="true">#</a> Java 项目的 Classpath</h3>
<p>对于 java 项目，<strong>.class</strong> 文件在项目编译后出现的 <strong>bin</strong> 目录下。</p>
<p>这个目录下的内容是：</p>
<ul>
<li>与包名一致的目录层次结构</li>
<li><strong>.class</strong> 文件</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Java 项目
│── ...
└── bin
    └── com
        └── softeem
            └── App.class
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="java-web-项目的-classpath" tabindex="-1"><a class="header-anchor" href="#java-web-项目的-classpath" aria-hidden="true">#</a> Java Web 项目的 Classpath</h3>
<p>对于 java-web 项目，<strong>.class</strong> 文件在项目编译后出现的 <strong>build/classes</strong> 下。</p>
<p>这个目录下的内容是：</p>
<ul>
<li>与包名一致的目录层次结构</li>
<li><strong>.class</strong> 文件</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Java Web 项目
│── ...
└── build
    └── classes
        └── com
            └── softeem
                └── App.class
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>这两个文件夹（的位置）才是名副其实的 Classpath 。</strong></p>
<h3 id="『src-目录就是-classpath』不对" tabindex="-1"><a class="header-anchor" href="#『src-目录就是-classpath』不对" aria-hidden="true">#</a> 『src 目录就是 Classpath』不对</h3>
<p>原因很简单，src 目录下根本就没有 <em>.class</em> 文件！</p>
<p>一个根本就没有 <em>.class</em> 文件的文件夹 <strong>根本不可能</strong> / <strong>没有资格</strong> 是 Classpath 。</p>
<h3 id="『src-目录就是-classpath』有一定道理" tabindex="-1"><a class="header-anchor" href="#『src-目录就是-classpath』有一定道理" aria-hidden="true">#</a> 『src 目录就是 Classpath』有一定道理</h3>
<p>在编译项目时，编译器（或开发工具）是对 src 下的内容进行编译，而后再将编译的结果『搬运』到 Classpath 下。</p>
<p>那么也即是说，<strong>src</strong> 和 Classpath 是有对应关系的！</p>
<ul>
<li><strong>src</strong> 下的目录结构（即包结构）与 Classpath 下的目录结构（即包结构）是一样的。</li>
<li><strong>src</strong> 下出现的 <strong>.java</strong> 文件，在 Classpath 下就是对应的 <strong>.class</strong> 文件。</li>
<li><strong>src</strong> 下出现的配置文件（<strong>.xml</strong> 和 <strong>.properties</strong>）会被『搬运』到 Classpath 下的同样位置。</li>
</ul>
<p>因为 <strong>src</strong> 和 Classpath 的对应关系，所以，说 <strong>src</strong> 就是 Classpath（从最终的效果上看）<strong>勉强也算对</strong>。</p>
<h2 id="_2-有对应关系的文件夹可以不止一个" tabindex="-1"><a class="header-anchor" href="#_2-有对应关系的文件夹可以不止一个" aria-hidden="true">#</a> 2. 有对应关系的文件夹可以不止一个</h2>
<p><strong>src</strong> 和 Classpath 的对应关系并非唯一。你可以去设置更多的文件夹与 Classpath 的对应关系。</p>
<p>未来编译器在编译项目时，会将这 N 个配置文件的内容编译并『搬运』到 Classpath 中。</p>
</template>
