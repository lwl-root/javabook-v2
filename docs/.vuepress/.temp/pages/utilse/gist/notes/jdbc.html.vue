<template><h1 id="jdbc-properties" tabindex="-1"><a class="header-anchor" href="#jdbc-properties" aria-hidden="true">#</a> jdbc.properties</h1>
<p><strong>.properties</strong> 和命令行类似，原则上一行就是一个键值对，如果因为值太长需要折行继续编写，那么上一行的行尾需要加 <code>\</code> 表示本行还未结束，下一行的内容和本行算同一行 。</p>
<Badge type="tip" text="提示" vertical="middle" />   \ 被称作<b>“续行符”</b>
<h2 id="_1、自定义的-properties-配置" tabindex="-1"><a class="header-anchor" href="#_1、自定义的-properties-配置" aria-hidden="true">#</a> 1、自定义的 .properties 配置</h2>
<CodeGroup>
<CodeGroupItem title="jdbc.properties 版本">
<div class="language-properties ext-properties line-numbers-mode"><pre v-pre class="language-properties"><code><span class="token attr-name">datasource.driver-class-name</span><span class="token punctuation">=</span><span class="token attr-value">com.mysql.cj.jdbc.Driver</span>
<span class="token attr-name">datasource.url</span><span class="token punctuation">=</span><span class="token attr-value">jdbc:mysql://127.0.0.1:3306/&lt;数据库>\
    ?useUnicode=true\
    &amp;characterEncoding=utf-8\
    &amp;useSSL=false\
    &amp;serverTimezone=Asia/Shanghai</span>
<span class="token attr-name">datasource.username</span><span class="token punctuation">=</span><span class="token attr-value">&lt;用户名></span>
<span class="token attr-name">datasource.password</span><span class="token punctuation">=</span><span class="token attr-value">&lt;密码></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></CodeGroupItem>
</CodeGroup>
<h2 id="_2、spring-boot-项目中的配置" tabindex="-1"><a class="header-anchor" href="#_2、spring-boot-项目中的配置" aria-hidden="true">#</a> 2、Spring Boot 项目中的配置</h2>
<CodeGroup>
<CodeGroupItem title="application.properties 版本">
<div class="language-properties ext-properties line-numbers-mode"><pre v-pre class="language-properties"><code><span class="token attr-name">spring.datasource.driver-class-name</span><span class="token punctuation">=</span><span class="token attr-value">com.mysql.cj.jdbc.Driver</span>
<span class="token attr-name">spring.datasource.url</span><span class="token punctuation">=</span><span class="token attr-value">jdbc:mysql://127.0.0.1:3306/&lt;数据库>\
    ?useUnicode=true\
    &amp;characterEncoding=utf-8\
    &amp;useSSL=false\
    &amp;serverTimezone=Asia/Shanghai</span>
<span class="token attr-name">spring.datasource.username</span><span class="token punctuation">=</span><span class="token attr-value">&lt;用户名></span>
<span class="token attr-name">spring.</span> <span class="token attr-value">datasource.password=&lt;密码></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="application.yml 版本">
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span> 
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> defaultDataSource <span class="token comment"># 非必须</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> "jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span>3306/&lt;数据库<span class="token punctuation">></span>\
      <span class="token punctuation">?</span>useUnicode=true\
      <span class="token important">&amp;characterEncoding=utf-8\</span>
      <span class="token important">&amp;useSSL=false\</span>
      <span class="token important">&amp;serverTimezone=Asia/Shanghai"</span>
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
    <span class="token key atrule">username</span><span class="token punctuation">:</span> &lt;用户名<span class="token punctuation">></span>
    <span class="token key atrule">password</span><span class="token punctuation">:</span> &lt;密码<span class="token punctuation">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></CodeGroupItem>
</CodeGroup>
</template>
