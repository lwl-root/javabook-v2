<template><h1 id="怎么删除oracle用户及表空间" tabindex="-1"><a class="header-anchor" href="#怎么删除oracle用户及表空间" aria-hidden="true">#</a> 怎么删除oracle用户及表空间</h1>
<div class="custom-container tip"><p class="custom-container-title">前言</p>
<p>在oracle中，可以使用“drop user 用户名称 cascade;”命令来删除指定用户，可以使用“DROP TABLESPACE 表空间名 INCLUDING CONTENTS AND DATAFILES;”命令来删除指定表空间。</p>
</div>
<p>本教程操作环境：Windows10系统、Oracle 11g版。</p>
<h2 id="删除oracle用户和表空间的方法" tabindex="-1"><a class="header-anchor" href="#删除oracle用户和表空间的方法" aria-hidden="true">#</a> 删除oracle用户和表空间的方法:</h2>
<p>删除用户</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">drop</span> <span class="token keyword">user</span> 用户名称 <span class="token keyword">cascade</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>删除表空间</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLESPACE</span> tablespace_name INCLUDING CONTENTS <span class="token operator">AND</span> DATAFILES<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>删除空的表空间，不包含物理文件</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLESPACE</span> tablespace_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>删除空表空间，包含物理文件</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLESPACE</span> tablespace_name INCLUDING DATAFILES<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>删除非空表空间，不包含物理文件</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLESPACE</span> tablespace_name INCLUDING DATAFILES<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>删除非空表空间，包含物理文件</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLESPACE</span> tablespace_name INCLUDING CONTENTS <span class="token operator">AND</span> DATAFILES<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>以上就是怎么删除oracle用户及表空间的详细内容。</p>
</template>
