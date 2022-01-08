<template><h1 id="数据库连接池" tabindex="-1"><a class="header-anchor" href="#数据库连接池" aria-hidden="true">#</a> 数据库连接池</h1>
<h2 id="数据库连接池-druid" tabindex="-1"><a class="header-anchor" href="#数据库连接池-druid" aria-hidden="true">#</a> 数据库连接池：Druid</h2>
<p>Druid 阿里巴巴公司开源的一款数据库连接池。在功能、性能、扩展性方面，都超过它的先辈。</p>
<h3 id="简单使用" tabindex="-1"><a class="header-anchor" href="#简单使用" aria-hidden="true">#</a> 简单使用</h3>
<ul>
<li>
<p>pom.xml</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>8.0.17<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>druid<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.1.20<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li>
<li>
<p>简单示例：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Properties</span> properties <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
properties<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">"driver"</span><span class="token punctuation">,</span> <span class="token string">"com.mysql.jdbc.Driver"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
properties<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">"url"</span><span class="token punctuation">,</span> <span class="token string">"jdbc:mysql://127.0.0.1:3306/scott?serverTimezone=UTC&amp;useUnicode=true&amp;characterEncoding=utf-8&amp;useSSL=false"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
properties<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">,</span> <span class="token string">"root"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
properties<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">"password"</span><span class="token punctuation">,</span> <span class="token string">"123456"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">DataSource</span> dataSource <span class="token operator">=</span> <span class="token class-name">DruidDataSourceFactory</span><span class="token punctuation">.</span><span class="token function">createDataSource</span><span class="token punctuation">(</span>properties<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Connection</span> connection <span class="token operator">=</span> dataSource<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>connection <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token string">"not connected"</span> <span class="token operator">:</span> <span class="token string">"connected"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li>
</ul>
<h3 id="结合配置文件使用" tabindex="-1"><a class="header-anchor" href="#结合配置文件使用" aria-hidden="true">#</a> 结合配置文件使用</h3>
<p>配置文件：</p>
<ul>
<li>
<p>jdbc.properties</p>
<div class="language-properties ext-properties line-numbers-mode"><pre v-pre class="language-properties"><code><span class="token attr-name">driver</span><span class="token punctuation">=</span><span class="token attr-value">com.mysql.cj.jdbc.Driver</span>
<span class="token attr-name">url</span><span class="token punctuation">=</span><span class="token attr-value">jdbc:mysql://127.0.0.1:3306/scott?serverTimezone=UTC&amp;useUnicode=true&amp;characterEncoding=utf-8&amp;useSSL=false</span>
<span class="token attr-name">username</span><span class="token punctuation">=</span><span class="token attr-value">root</span>
<span class="token attr-name">password</span><span class="token punctuation">=</span><span class="token attr-value">123456</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li>
</ul>
<p>从配置文件中加载配置信息，并创建数据库连接池：</p>
<ul>
<li>
<p>代码：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">InputStream</span> is <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getContextClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">"jdbc.properties"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Properties</span> properties <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
properties<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>is<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">DataSource</span> dataSource <span class="token operator">=</span> <span class="token class-name">DruidDataSourceFactory</span><span class="token punctuation">.</span><span class="token function">createDataSource</span><span class="token punctuation">(</span>properties<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Druid</span>
<span class="token class-name">Connection</span> connection <span class="token operator">=</span> dataSource<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>connection <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token string">"not connected"</span> <span class="token operator">:</span> <span class="token string">"connected"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li>
</ul>
<h3 id="druid-中的工具类-jdbcutils" tabindex="-1"><a class="header-anchor" href="#druid-中的工具类-jdbcutils" aria-hidden="true">#</a> Druid 中的工具类：JdbcUtils</h3>
<p>Druid 的 <em>com.alibaba.druid.util</em> 包下有若干工具类，其中 <strong>JdbcUtils</strong> 中提供了我们常见 JDBC 操作的封装。</p>
<p>其中，</p>
<ul>
<li>增删改 SQL 操作，可以使用 <strong>JdbcUtils.executeUpdate()</strong> 方法简化代码。</li>
<li>查询 SQL 操作，可以使用 <strong>JdbcUtils.executeQuery()</strong> 方法简化代码。</li>
</ul>
<p>另外，<strong>JdbcUtils.close()</strong> 方法 <strong>JdbcUtils.printResultSet()</strong> 也很有实用价值。</p>
<h2 id="数据库连接池-hikaricp" tabindex="-1"><a class="header-anchor" href="#数据库连接池-hikaricp" aria-hidden="true">#</a> 数据库连接池：HikariCP</h2>
<p>HikariCP 是几个常见数据库连接池中出现的最晚的一个。它口号是“快速、简单、可靠”，官方宣传是性能最快的数据库连接池（貌似也没有其它方对此表示异议）。</p>
<h3 id="简单使用-1" tabindex="-1"><a class="header-anchor" href="#简单使用-1" aria-hidden="true">#</a> 简单使用</h3>
<ul>
<li>
<p>pom.xml</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.zaxxer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>HikariCP<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.3.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>8.0.17<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li>
<li>
<p>示例代码</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Properties</span> properties <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

properties<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">"driverClassName"</span><span class="token punctuation">,</span> <span class="token string">"com.mysql.cj.jdbc.Driver"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
properties<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">"jdbcUrl"</span><span class="token punctuation">,</span> <span class="token string">"jdbc:mysql://127.0.0.1:3306/********?serverTimezone=UTC&amp;useUnicode=true&amp;characterEncoding=utf-8&amp;useSSL=false"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
properties<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">,</span> <span class="token string">"********"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
properties<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">"password"</span><span class="token punctuation">,</span> <span class="token string">"********"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">DataSource</span> dataSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HikariDataSource</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">HikariConfig</span><span class="token punctuation">(</span>properties<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Druid</span>
<span class="token class-name">Connection</span> connection <span class="token operator">=</span> dataSource<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>connection <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token string">"not connected"</span> <span class="token operator">:</span> <span class="token string">"connected"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li>
</ul>
<p>这里需要注意的是，在配置数据库连接四大属性时，HikariCP 和其它数据库连接池用到了不同的单词。它使用到的是 <em><strong>driverClassName</strong></em> 和 <em><strong>jdbcUrl</strong></em> 。其它数据库连接池通常用的是 <em>driver</em> 和 <em>url</em> 。</p>
<h3 id="配合配置文件使用" tabindex="-1"><a class="header-anchor" href="#配合配置文件使用" aria-hidden="true">#</a> 配合配置文件使用</h3>
<p>配置文件</p>
<ul>
<li>
<p>jdbc.properties</p>
<div class="language-properties ext-properties line-numbers-mode"><pre v-pre class="language-properties"><code><span class="token attr-name">driverClassName</span><span class="token punctuation">=</span><span class="token attr-value">com.mysql.cj.jdbc.Driver</span>
<span class="token attr-name">jdbcUrl</span><span class="token punctuation">=</span><span class="token attr-value">jdbc:mysql://127.0.0.1:3306/scott?serverTimezone=UTC&amp;useUnicode=true&amp;characterEncoding=utf-8&amp;useSSL=false</span>
<span class="token attr-name">username</span><span class="token punctuation">=</span><span class="token attr-value">root</span>
<span class="token attr-name">password</span><span class="token punctuation">=</span><span class="token attr-value">123456</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li>
<li>
<p>代码使用示例</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">InputStream</span> is <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getContextClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">"jdbc.properties"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Properties</span> properties <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
properties<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>is<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">DataSource</span> dataSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HikariDataSource</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">HikariConfig</span><span class="token punctuation">(</span>properties<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Connection</span> connection <span class="token operator">=</span> dataSource<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>connection <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token string">"not connected"</span> <span class="token operator">:</span> <span class="token string">"connected"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li>
</ul>
</template>
