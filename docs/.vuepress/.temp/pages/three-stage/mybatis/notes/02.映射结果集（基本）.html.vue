<template><h1 id="映射结果集-基本" tabindex="-1"><a class="header-anchor" href="#映射结果集-基本" aria-hidden="true">#</a> 映射结果集（基本）</h1>
<p>在前面的内容中，由于我们的 PO 类的属性名与数据库中表的列名是一致的，因此，在 Mapper.xml 配置文件中，Mybatis 省略/简化 掉了一块配置。</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resultMap</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>xxx<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo.bean.po.Department<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span> <span class="token attr-name">jdbcType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>INTEGER<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">jdbcType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>VARCHAR<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>location<span class="token punctuation">"</span></span> <span class="token attr-name">jdbcType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>VARCHAR<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>location<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resultMap</span><span class="token punctuation">></span></span>

...

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>xxx<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 如何配合 @Select 注解使用见后续内容 --></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>很容易猜得到这个块配置的作用就是（在查询功能中）<strong>指定数据库的表的列与 PO 类的属性之间的对应关系</strong> 。</p>
<p>实际上，Mybatis 需要有这样的一个配置来 指导/告诉 它如何将结果集（ResultSet）中的数据映射成对象，或对象的集合。这是任何一个 ORM 框架的基本功能（重要功能）之一。</p>
<h2 id="_1-resultmap" tabindex="-1"><a class="header-anchor" href="#_1-resultmap" aria-hidden="true">#</a> 1. <code>&lt;resultMap&gt;</code></h2>
<p>resultMap 元素必要的两个属性有：</p>
<table>
<thead>
<tr>
<th style="text-align:left">属性名</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">id</td>
<td style="text-align:left">resultMap 的唯一标识符。</td>
</tr>
<tr>
<td style="text-align:left">type</td>
<td style="text-align:left">它表示映射所返回的实际类型。</td>
</tr>
</tbody>
</table>
<h2 id="_2-id-和-result" tabindex="-1"><a class="header-anchor" href="#_2-id-和-result" aria-hidden="true">#</a> 2. <code>&lt;id&gt;</code> 和 <code>&lt;result&gt;</code></h2>
<p>resultMap 最常见的两个子元素有：</p>
<ul>
<li>
<p>id 子元素</p>
<p>表示数据库表的主键列。 其中，</p>
<p><em><code>column</code></em> 属性表示表的列名；</p>
<p><em><code>property</code></em> 属性，表示映射对象的属性名</p>
</li>
<li>
<p>result 子元素</p>
<p>表示数据库的普通列。其中，</p>
<p><em><code>column</code></em> 属性，表示数据库表的列名；</p>
<p><em><code>property</code></em> 属性，表示映射对象的属性名</p>
</li>
</ul>
<h2 id="_3-jdbctype" tabindex="-1"><a class="header-anchor" href="#_3-jdbctype" aria-hidden="true">#</a> 3. jdbcType</h2>
<p>将 ResultSet 数据映射成对象时，会涉及到两种数据类型：数据库类型（varchar) 和 Java 类型（String）。MyBatis 使用 <strong>类型转换器</strong>（typeHandler）来处理两种类型数据的转换问题。</p>
<blockquote>
<p><code>补充</code>，不同的数据库对于同一个数据类型的概念可能会使用不同的『单词』。例如：</p>
<p><strong>整型</strong>，在 MySQL 中是 <em><strong>INT</strong></em> ，在 Oracle 中是 <em><strong>INTEGER</strong></em> 。</p>
</blockquote>
<p>在 Java 的 JDBC 中，对不同数据库的各种类型的『称呼』进行了统一：<strong>JDBC 类型</strong> 。例如：</p>
<p>『整型』的 JDBC Type 表示为 <em><strong>INTEGER</strong></em> ，即表示 MySQL 中的 <em><strong>INT</strong></em> ，又表示 Oracle 中的 <em><strong>INTEGER</strong></em> 。</p>
<p>常见的有：</p>
<table>
<thead>
<tr>
<th style="text-align:left">JDBC Type</th>
<th style="text-align:left">Mysql Type</th>
<th style="text-align:left">Java Type</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">SMALLINT</td>
<td style="text-align:left">SMALLINT</td>
<td style="text-align:left">short java.lang.Short</td>
</tr>
<tr>
<td style="text-align:left">INTEGER</td>
<td style="text-align:left">INTEGER</td>
<td style="text-align:left">int java.lang.Integer</td>
</tr>
<tr>
<td style="text-align:left">BIGINT</td>
<td style="text-align:left">BIGINT</td>
<td style="text-align:left">long java.lang.Long</td>
</tr>
<tr>
<td style="text-align:left">FLOAT</td>
<td style="text-align:left">FLOAT</td>
<td style="text-align:left">float java.lang.Float</td>
</tr>
<tr>
<td style="text-align:left">DOUBLE</td>
<td style="text-align:left">DOUBLE</td>
<td style="text-align:left">double java.lang.Double</td>
</tr>
<tr>
<td style="text-align:left">DECIMAL</td>
<td style="text-align:left">DECIMAL</td>
<td style="text-align:left">java.math.BigDecimal</td>
</tr>
<tr>
<td style="text-align:left">CHAR</td>
<td style="text-align:left">CHAR</td>
<td style="text-align:left">java.lang.String</td>
</tr>
<tr>
<td style="text-align:left">VARCHAR</td>
<td style="text-align:left">VARCHAR</td>
<td style="text-align:left">java.lang.String</td>
</tr>
<tr>
<td style="text-align:left">DATE</td>
<td style="text-align:left">DATE</td>
<td style="text-align:left">java.util.Date</td>
</tr>
<tr>
<td style="text-align:left">TIME</td>
<td style="text-align:left">TIME</td>
<td style="text-align:left">java.util.Date</td>
</tr>
<tr>
<td style="text-align:left">TIMESTAMP</td>
<td style="text-align:left">TIMESTAMP</td>
<td style="text-align:left">java.util.Date</td>
</tr>
</tbody>
</table>
<p><strong>注意</strong>：对于 <em><strong>java.lang.Date</strong></em> 和 <em><strong>java.sql.Date</strong></em> ，是两种不同的类型。在写 JavaBean 一定要确认你所使用的是哪个 Date 类型（ 一般都是使用 <em><strong>java.lang.Date</strong></em> ）。</p>
<h2 id="_4-自动映射原理" tabindex="-1"><a class="header-anchor" href="#_4-自动映射原理" aria-hidden="true">#</a> 4. 自动映射原理</h2>
<p>在 MyBatis 的配置文件（<em><code>settings</code></em> 元素部分）中，有一个 <code>autoMappingBehavior</code> 配置，其默认值为 <code>PARTIAL</code> ，表示 MyBatis 会自动映射（简单的，没有嵌套关系的）结果集。</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">></span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>settings</span><span class="token punctuation">></span></span>
    ...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>setting</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>autoMappingBehavior<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>PARTIAL<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    ...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>settings</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>typeAliases</span><span class="token punctuation">></span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>typeAliases</span><span class="token punctuation">></span></span> 

  ...

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>如果你的类的属性名与表的字段名一致，那么 MyBatis 会自动将结果集的一行封装成一个 JavaBean 。</p>
<p>一般而言，数据库表和字段的命名风格是以下划线为分隔符，而 Java 中命名风格是驼峰命风格。</p>
<p>如果，PO 类的属性名和 Table 的列名仅仅是命名风格的不同，那么此时你可以使用 <code>mapUnderscoreToCamelCase</code> 进行控制，以便于自动转换或不转换。</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">></span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>settings</span><span class="token punctuation">></span></span>
    ...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>setting</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mapUnderscoreToCamelCase<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    ...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>settings</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>typeAliases</span><span class="token punctuation">></span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>typeAliases</span><span class="token punctuation">></span></span> 

  ...

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></template>
