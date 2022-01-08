<template><h1 id="数据库连接池" tabindex="-1"><a class="header-anchor" href="#数据库连接池" aria-hidden="true">#</a> 数据库连接池</h1>
<h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h2>
<p>与数据库建立连接（Connection）和断开连接是有时间开销的，而且在某一个时间点『同时』连接到数据库的客户端可能并没有想象中那么多，这就意味着数据库连接（Connection）对象是可以『重用』的。</p>
<p>数据库连接池的概念就是，预先准备好若干个与数据库建立好的连接，未来谁需要使用，就直接获取一个连接，在使用完毕后，再将该连接『还给』数据库连接池（而非真正断开连接）。如此就提高程序性能。</p>
<p>使用它们，对于 Connection 对象的管理工作，就完全转交到了它们的手里，Connection 对象不再由我们创建和销毁。</p>
<p>现在常见的数据库连接池有：DBCP2、C3P0、Druid 和 HikariCP（以出现先后顺序排序）。建议使用 Druid 和 HikariCP，原因见最后。</p>
<h2 id="选择哪个数据库连接池" tabindex="-1"><a class="header-anchor" href="#选择哪个数据库连接池" aria-hidden="true">#</a> 选择哪个数据库连接池</h2>
<ul>
<li>DBCP2 是 Appache 基金会下的项目，是最早出现的数据库连接池 DBCP 的第二个版本。</li>
<li>C3P0 最早出现时是作为 Hibernate 框架的默认数据库连接池而进入市场。</li>
<li>Druid 是阿里巴巴公司开源的一款数据库连接池，其特点在于有丰富的附加功能。</li>
<li>HikariCP 相较而言比较新，它最近两年才出现，据称是速度最快的数据库连接池。最近更是被 Spring 设置为默认数据库连接池。另外，Driud 的附加功能，HikariCP 基本也有。</li>
</ul>
<h3 id="不选择-c3p0-的原因" tabindex="-1"><a class="header-anchor" href="#不选择-c3p0-的原因" aria-hidden="true">#</a> 不选择 C3P0 的原因：</h3>
<ul>
<li>C3P0 的 Connection 是异步释放。这个特性会导致释放的在某些情况下 Connection 实际上 <strong>still in use</strong> ，并未真正释放掉，从而导致连接池中的 Connection 耗完，等待状况。</li>
<li>Hibernate 现在对所有数据库连接池一视同仁，官方不再指定『默认』数据库连接池。因此 C3P0 就失去了『官方』光环。</li>
<li>C3P0 最后一次更新是在 2015 年，和最近蓬勃发展的 Druid 和 HikariCP ，以及持续更新的 DBCP2 相比，C3P0 显得不是那么“欣欣向荣”。</li>
</ul>
<h3 id="不选择-dbcp2-的原因" tabindex="-1"><a class="header-anchor" href="#不选择-dbcp2-的原因" aria-hidden="true">#</a> 不选择 DBCP2 的原因：</h3>
<p>相较于 Druid 和 HikariCP，DBCP2 没有什么特色功能/卖点。基本上属于 <code>能用，没毛病</code> 的情况，地位显得略有尴尬。</p>
<h2 id="druid" tabindex="-1"><a class="header-anchor" href="#druid" aria-hidden="true">#</a> Druid</h2>
<p>Druid 阿里巴巴公司开源的一款数据库连接池。在功能、性能、扩展性方面，都超过它的先辈。</p>
<blockquote>
<p>虽然晚于 Druid 的 HikariCP 数据库对外宣称是性能最快的数据库连接池，而且 Druid 方面也并未对此说法作出反驳。但一般看法是 HikariCP 数据库的性能对于 Druid 不具备压倒性优势。</p>
</blockquote>
<h3 id="简单使用" tabindex="-1"><a class="header-anchor" href="#简单使用" aria-hidden="true">#</a> 简单使用</h3>
<ul>
<li>
<p>pom.xml</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>${mysql.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span> <span class="token comment">&lt;!-- 8.0.21 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>druid<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.1.20<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li>
</ul>
<p>有两种方式创建 Druid 数据库：通过 <strong>DruidDataSource</strong> 构造器，或者使用 <strong>DruidDataSourceFactory</strong> 工厂类。</p>
<ul>
<li>
<p>使用 DruidDataSource 构造器</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">DruidDataSource</span> dataSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DruidDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dataSource<span class="token punctuation">.</span><span class="token function">setDriverClassName</span><span class="token punctuation">(</span><span class="token string">"com.mysql.jdbc.Driver"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dataSource<span class="token punctuation">.</span><span class="token function">setUrl</span><span class="token punctuation">(</span><span class="token string">"jdbc:mysql://127.0.0.1:3306/scott?useUnicode=true&amp;characterEncoding=utf-8&amp;useSSL=false&amp;serverTimezone=Asia/Shanghai"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dataSource<span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token string">"******"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dataSource<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">"******"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">DataSource</span> dataSource <span class="token operator">=</span> <span class="token class-name">DruidDataSourceFactory</span><span class="token punctuation">.</span><span class="token function">createDataSource</span><span class="token punctuation">(</span>properties<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Connection</span> connection <span class="token operator">=</span> dataSource<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>connection <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token string">"not connected"</span> <span class="token operator">:</span> <span class="token string">"connected"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li>
<li>
<p>使用 DruidDataSourceFactory 工厂类</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Properties</span> properties <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
properties<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">"driver"</span><span class="token punctuation">,</span> <span class="token string">"com.mysql.jdbc.Driver"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
properties<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">"url"</span><span class="token punctuation">,</span> <span class="token string">"jdbc:mysql://127.0.0.1:3306/scott?serverTimezone=UTC&amp;useUnicode=true&amp;characterEncoding=utf-8&amp;useSSL=false"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
properties<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">,</span> <span class="token string">"******"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
properties<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">"password"</span><span class="token punctuation">,</span> <span class="token string">"******"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

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
<span class="token attr-name">url</span><span class="token punctuation">=</span><span class="token attr-value">jdbc:mysql://127.0.0.1:3306/scott?useUnicode=true&amp;characterEncoding=utf-8&amp;useSSL=false&amp;serverTimezone=UTC</span>
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
<p>Druid 的 <strong>com.alibaba.druid.util</strong> 包下有若干工具类，其中 <strong>JdbcUtils</strong> 中提供了我们常见 JDBC 操作的封装。</p>
<p>其中，</p>
<ul>
<li>增删改 SQL 操作，可以使用 <strong>.executeUpdate()</strong> 方法简化代码。</li>
<li>查询 SQL 操作，可以使用 <strong>.executeQuery()</strong> 方法简化代码。</li>
</ul>
<p>另外，<strong>.close()</strong> 方法 <strong>.printResultSet()</strong> 也很有实用价值。</p>
<h2 id="hikaricp" tabindex="-1"><a class="header-anchor" href="#hikaricp" aria-hidden="true">#</a> HikariCP</h2>
<p>HikariCP 是几个常见数据库连接池中出现的最晚的一个。它口号是“快速、简单、可靠”，官方宣传是性能最快的数据库连接池（貌似也没有其它方对此表示异议）。</p>
<h3 id="简单使用-1" tabindex="-1"><a class="header-anchor" href="#简单使用-1" aria-hidden="true">#</a> 简单使用</h3>
<ul>
<li>
<p>pom.xml</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>${mysql.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span> <span class="token comment">&lt;!-- 8.0.21 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.zaxxer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>HikariCP<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>${hikaricp.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span> <span class="token comment">&lt;!-- 3.2.0 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li>
<li>
<p>HikariCP 专门定义了一个 HikariConfig 的配置类，用于创建 HikariCP 数据库连接池。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">HikariConfig</span> config <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HikariConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
config<span class="token punctuation">.</span><span class="token function">setDriverClassName</span><span class="token punctuation">(</span><span class="token string">"com.mysql.cj.jdbc.Driver"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
config<span class="token punctuation">.</span><span class="token function">setJdbcUrl</span><span class="token punctuation">(</span><span class="token string">"jdbc:mysql://127.0.0.1:3306/******?serverTimezone=UTC&amp;useUnicode=true&amp;characterEncoding=utf-8&amp;useSSL=false"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
config<span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token string">"******"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
config<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">"******"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">HikariDataSource</span> dataSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HikariDataSource</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li>
<li>
<p>当然，因为某种原因，你也可以强行用上 <strong>Properties</strong> 对象，从 <em>Properties</em> 对象获得 <em>HikariConfig</em> 对象。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Properties</span> properties <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

properties<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">"driverClassName"</span><span class="token punctuation">,</span> <span class="token string">"com.mysql.cj.jdbc.Driver"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
properties<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">"jdbcUrl"</span><span class="token punctuation">,</span> <span class="token string">"jdbc:mysql://127.0.0.1:3306/******?serverTimezone=UTC&amp;useUnicode=true&amp;characterEncoding=utf-8&amp;useSSL=false"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
properties<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">,</span> <span class="token string">"******"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
properties<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">"password"</span><span class="token punctuation">,</span> <span class="token string">"******"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">DataSource</span> dataSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HikariDataSource</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">HikariConfig</span><span class="token punctuation">(</span>properties<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Druid</span>
<span class="token class-name">Connection</span> connection <span class="token operator">=</span> dataSource<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>connection <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token string">"not connected"</span> <span class="token operator">:</span> <span class="token string">"connected"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li>
</ul>
<p>这里需要注意的是，在配置数据库连接四大属性时，HikariCP 和其它数据库连接池用到了不同的单词。它使用到的是 <strong>driverClassName</strong> 和 <strong>jdbcUrl</strong> 。其它数据库连接池通常用的是 <em>driver</em> 和 <em>url</em> 。</p>
<h3 id="配合配置文件使用" tabindex="-1"><a class="header-anchor" href="#配合配置文件使用" aria-hidden="true">#</a> 配合配置文件使用</h3>
<ul>
<li>
<p>jdbc.properties</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>driverClassName=com.mysql.cj.jdbc.Driver
jdbcUrl=jdbc:mysql://127.0.0.1:3306/scott?serverTimezone=UTC&amp;useUnicode=true&amp;characterEncoding=utf-8&amp;useSSL=false
username=root
password=123456
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
