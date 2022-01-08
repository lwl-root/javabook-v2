<template><h1 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h1>
<h2 id="_1-mybatis-的体系结构" tabindex="-1"><a class="header-anchor" href="#_1-mybatis-的体系结构" aria-hidden="true">#</a> 1. MyBatis 的体系结构</h2>
<p>MyBatis 中的常用对象有 <strong>SqlSessionFactory</strong> 和 <strong>SqlSession</strong> 。</p>
<p>SqlSessionFactory 对象是 MyBatis 的关键对象，它对应着单个数据库。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>XML 配置文件
└── SqlSessionFactoryBuilder
    └── SqlSessionFactory
        └── SqlSession
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>整个关系可以如下述这样『反推』：</p>
<ul>
<li>最终是需要获得一个 <strong>SqlSession</strong> 对象来操作数据库。SqlSession 对象代表着与数据库之间的连接。</li>
<li>要『弄』到 <strong>SqlSession</strong> 对象，首先要先『弄』到一个 <strong>SqlSessionFactory</strong> 对象。</li>
<li>要『弄』到 <strong>SqlSessionFactory</strong> 对象，首先要先『弄』到一个 <strong>SqlSessionFactoryBuilder</strong> 对象。</li>
<li>而在这个整个过程中，需要用到 <strong><code>1 + N</code></strong> 个配置文件。</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 这是一个相对于 classpath 的文件路径名。而且，不需要使用 / 。</span>
<span class="token class-name">InputStream</span> is <span class="token operator">=</span> <span class="token class-name">Resources</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">"mybatis-config.xml"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">SqlSessionFactoryBuilder</span> builder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SqlSessionFactoryBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">SqlSessionFactory</span> factory <span class="token operator">=</span> builder<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span>is<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">SqlSession</span> session <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">openSession</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><strong>注意</strong>：使用完 SqlSession 之后『<strong>关闭 Session 很重要</strong>』，应该确保使用 <strong>finally</strong> 块来关闭它。</p>
<ul>
<li>一个 MyBatis 应用程序只需要一个 <strong>SqlSessionFactory</strong> 的对象。因此，SqlSessionFactory 对象应该是『<strong>单例对象</strong>』。在将 Mybatis 和 Spring 整合后，毫无疑问，<strong>SqlSessionFactory</strong> 单例对象的创建工作就交到了 Spring 手里。 `</li>
<li><strong>SqlSession</strong> 是线程不安全的，所以 <strong>SqlSession</strong> 对象是非单例的。</li>
</ul>
<h2 id="_2-使用-xml-构建-sqlsessionfactory" tabindex="-1"><a class="header-anchor" href="#_2-使用-xml-构建-sqlsessionfactory" aria-hidden="true">#</a> 2. 使用 XML 构建 SqlSessionFactory</h2>
<p>MyBatis 中的 XML 文件分为两类，一类是『<strong>基础配置文件</strong>』（也叫『<strong>核心配置文件</strong>』），它只有一个。另一类是『<strong>映射文件</strong>』，它至少有一个。合计是 <code>1 + N</code> 个配置文件。</p>
<p>『<strong>基础配置文件</strong>』通常叫做 <strong>mybatis-config.xml</strong> 文件。</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">configuration</span>
  <span class="token name">PUBLIC</span> <span class="token string">"-//mybatis.org//DTD Config 3.0//EN"</span>
  <span class="token string">"http://mybatis.org/dtd/mybatis-3-config.dtd"</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 别名。非必须。
  &lt;typeAliases>
    &lt;typeAlias alias="dept" type="com.xja.scott.bean.Department"/>
  &lt;/typeAliases>
--></span>
  <span class="token comment">&lt;!-- 数据库环境。必须。--></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>environments</span> <span class="token attr-name">default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>development<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>environment</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>development<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transactionManager</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>JDBC<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dataSource</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>POOLED<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>driver<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.mysql.cj.jdbc.Driver<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>jdbc:mysql://localhost:3306/scott?useUnicode=true<span class="token entity named-entity" title="&amp;">&amp;amp;</span>characterEncoding=utf-8<span class="token entity named-entity" title="&amp;">&amp;amp;</span>useSSL=false<span class="token entity named-entity" title="&amp;">&amp;amp;</span>serverTimezone=UTC<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>123456<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dataSource</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>environment</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>environments</span><span class="token punctuation">></span></span>

  <span class="token comment">&lt;!-- 映射文件。必须。--></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mappers</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--这是一个相对于 classpath 的路径名。另外，不需要使用 / 。 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">resource</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mapper/DeptMapper.xml<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mappers</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><ul>
<li><code>&lt;typeAlias&gt;</code> 元素为一个类定义了一个别名，这样在后续使用该类时，可以直接使用别名，而不是它的完全限定名。</li>
<li><code>&lt;environment&gt;</code>元素描述了一个数据库相关信息。
<ul>
<li>它里面的 <code>&lt;transactionManager&gt;</code> 元素配置了『<strong>事务管理器</strong>』 ，这里采用的是 MyBatis 的 JDBC 管理器方式。</li>
<li>它里面的 <code>&lt;dataSource&gt;</code> 元素配置了数据库连接的相关信息，其中属性 <strong>type=&quot;POOLED&quot;</strong> 表示采用 MyBatis 内部提供的连接池方式。</li>
</ul>
</li>
<li><code>&lt;mapper&gt;</code> 元素代表引入指定的 Mapper 配置文件。</li>
</ul>
<p>为了加载 XML 配置文件来构建 <strong>SqlSessionFactory</strong> 对象。MyBaits 专门提供了 <strong>Resources</strong> 类来加载配置文件。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">String</span> resource <span class="token operator">=</span> <span class="token string">"mybatis-config.xml"</span><span class="token punctuation">;</span>
<span class="token class-name">SqlSessionFactory</span> factory <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token class-name">InputStream</span> is <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
    is <span class="token operator">=</span> <span class="token class-name">Resources</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span>resource<span class="token punctuation">)</span><span class="token punctuation">;</span>
    factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SqlSessionFactoryBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span>is<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>Mybatis 对核心配置文件中的内容（子元素） 出现的『<strong>先后顺序有要求</strong>』，你可以没有使用到某个子元素，但是如果你用到了，那么必须符合固定的先后顺序：</p>
</div>
<ul>
<li>properties（属性）</li>
<li>settings（设置）</li>
<li>typeAliases（类型别名）</li>
<li>typeHandlers（类型处理器）</li>
<li>objectFactory（对象工厂）</li>
<li>plugins（插件）</li>
<li>environments（环境配置）
<ul>
<li>environment（环境变量）
<ul>
<li>transactionManager（事务管理器）</li>
<li>dataSource（数据源）</li>
</ul>
</li>
</ul>
</li>
<li>databaseIdProvider（数据库厂商标识）</li>
<li>mappers（映射器）</li>
</ul>
<h2 id="_3-sqlsession" tabindex="-1"><a class="header-anchor" href="#_3-sqlsession" aria-hidden="true">#</a> 3. SqlSession</h2>
<p><strong>SqlSession</strong> 是 MyBatis 的核心接口。<strong>SqlSession</strong> 的作用类似于 JDBC 中的 <strong>Connection</strong> 对象，代表着一个数据库的连接。</p>
<p>它的作用有 3 个：</p>
<ul>
<li>获取 Mapper 接口。</li>
<li>发送 SQL 给数据库。</li>
<li>控制数据库事务。</li>
</ul>
<p>有了 <strong>SqlSessionFactory</strong> 创建 <strong>SqlSession</strong> 就十分简单了：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">SqlSession</span> sqlSession <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">openSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 相当于</span>
<span class="token class-name">SqlSession</span> sqlSession <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">openSession</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>由此可见，SqlSession 默认『<strong>未开启</strong>』事务的自动提交（autoCommit）功能。因此需要程序员手动操作事务。</p>
<blockquote>
<p>另外，如果在建表时，有意或无意使用的是 <strong>MyIsam</strong> 引擎，那么此处无论是 <strong>true</strong> ，或者 <strong>false</strong> ，都无法回滚，因为 <strong>MyIsam</strong> 数据库引擎本身就不支持事务功能（这是它与 <strong>InnoDB</strong> 引擎的重要区别之一）。</p>
<p>对初学者而言，建表是错误地使用了数据库引擎，而导致『<strong>事务不回滚</strong>』的常见原因。</p>
</blockquote>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">SqlSession</span> session <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
    session <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">openSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// some code ...</span>
    session<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>		<span class="token comment">// 提交事务</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    session<span class="token punctuation">.</span><span class="token function">rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>		<span class="token comment">// 回滚事务</span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>session <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        session<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 务必确保关闭 session</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="_4-默认的别名" tabindex="-1"><a class="header-anchor" href="#_4-默认的别名" aria-hidden="true">#</a> 4. 默认的别名</h2>
<table>
<thead>
<tr>
<th style="text-align:right">别名</th>
<th style="text-align:left">Java 类型</th>
<th style="text-align:center">是否支持数组</th>
<th style="text-align:right">别名</th>
<th style="text-align:left">Java 类型</th>
<th style="text-align:center">是否支持数组</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right">_byte</td>
<td style="text-align:left">byte</td>
<td style="text-align:center">Y</td>
<td style="text-align:right">byte</td>
<td style="text-align:left">Byte</td>
<td style="text-align:center">Y</td>
</tr>
<tr>
<td style="text-align:right">_short</td>
<td style="text-align:left">short</td>
<td style="text-align:center">Y</td>
<td style="text-align:right">short</td>
<td style="text-align:left">Short</td>
<td style="text-align:center">Y</td>
</tr>
<tr>
<td style="text-align:right">_int</td>
<td style="text-align:left">int</td>
<td style="text-align:center">Y</td>
<td style="text-align:right">int</td>
<td style="text-align:left">Integer</td>
<td style="text-align:center">Y</td>
</tr>
<tr>
<td style="text-align:right">_integer</td>
<td style="text-align:left">int</td>
<td style="text-align:center">Y</td>
<td style="text-align:right">integer</td>
<td style="text-align:left">Integer</td>
<td style="text-align:center">Y</td>
</tr>
<tr>
<td style="text-align:right">_long</td>
<td style="text-align:left">long</td>
<td style="text-align:center">Y</td>
<td style="text-align:right">long</td>
<td style="text-align:left">Long</td>
<td style="text-align:center">Y</td>
</tr>
<tr>
<td style="text-align:right">_float</td>
<td style="text-align:left">float</td>
<td style="text-align:center">Y</td>
<td style="text-align:right">float</td>
<td style="text-align:left">Float</td>
<td style="text-align:center">Y</td>
</tr>
<tr>
<td style="text-align:right">_double</td>
<td style="text-align:left">double</td>
<td style="text-align:center">Y</td>
<td style="text-align:right">double</td>
<td style="text-align:left">Double</td>
<td style="text-align:center">Y</td>
</tr>
<tr>
<td style="text-align:right">_boolean</td>
<td style="text-align:left">boolean</td>
<td style="text-align:center">Y</td>
<td style="text-align:right">boolean</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:center">Y</td>
</tr>
<tr>
<td style="text-align:right">decimal</td>
<td style="text-align:left">BigDecimal</td>
<td style="text-align:center">Y</td>
<td style="text-align:right">bigdecimal</td>
<td style="text-align:left">BigDecimal</td>
<td style="text-align:center">Y</td>
</tr>
<tr>
<td style="text-align:right">string</td>
<td style="text-align:left">String</td>
<td style="text-align:center">Y</td>
<td style="text-align:right">date</td>
<td style="text-align:left">Date</td>
<td style="text-align:center">Y</td>
</tr>
<tr>
<td style="text-align:right">object</td>
<td style="text-align:left">Object</td>
<td style="text-align:center">Y</td>
<td style="text-align:right">collection</td>
<td style="text-align:left">Collection</td>
<td style="text-align:center">—</td>
</tr>
<tr>
<td style="text-align:right">map</td>
<td style="text-align:left">Map</td>
<td style="text-align:center">——</td>
<td style="text-align:right">hashmap</td>
<td style="text-align:left">HashMap</td>
<td style="text-align:center">——</td>
</tr>
</tbody>
</table>
<h2 id="_5-补充" tabindex="-1"><a class="header-anchor" href="#_5-补充" aria-hidden="true">#</a> 5. 补充</h2>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>environments</span> <span class="token attr-name">default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>environment</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transactionManager</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dataSource</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>driver<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dataSource</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>environment</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>environments</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><code>&lt;transactionManager type=&quot;...&quot;/&gt;</code> 表示事务管理器配置，可选值有：<strong>JDBC</strong> 和 <strong>MANAGED</strong> 。</p>
<table>
<thead>
<tr>
<th style="text-align:left">属性值</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">JDBC</td>
<td style="text-align:left">这个配置表示 MyBatis 底层使用 JDBC 中的 Connection 对象进行事务的提交和回滚。</td>
</tr>
<tr>
<td style="text-align:left">MANAGED</td>
<td style="text-align:left">这个配置表示 MyBatis 底层不进行任何事物的提交和回滚操作，而是由『别人』（容器）来进行事务的操作。 不过，默认情况下它会关闭连接，而有些容器并不希望如此， 所以通常使用子元素 <code>&lt;property name=closeConnection&quot; value=&quot;false&quot;/&gt;</code> 来取消这种行为。</td>
</tr>
</tbody>
</table>
<p>在整合 Spring 和 MyBaits 时，不需要在此配置事务管理器，因为 Spring 会使用其自身的事务管理器来覆盖此处的配置。</p>
<p><code>&lt;dataSource type=&quot;...&quot;&gt;</code>表示数据源配置，其可选值有：<strong>UNPOOLED</strong> 、<strong>POOLED</strong> 和 <strong>JNDI</strong> 。</p>
<table>
<thead>
<tr>
<th style="text-align:left">属性值</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">UNPOOLED</td>
<td style="text-align:left">表示不使用连接池，因此每次请求都会打开/关闭连接。</td>
</tr>
<tr>
<td style="text-align:left">POOLED</td>
<td style="text-align:left">表示使用 MyBatis 内部的数连接池功能，此时在底层 Connection 对象会被复用。</td>
</tr>
<tr>
<td style="text-align:left">JNDI</td>
<td style="text-align:left">这表示这数据库连接由容器维护。使用较少。</td>
</tr>
</tbody>
</table>
</template>
