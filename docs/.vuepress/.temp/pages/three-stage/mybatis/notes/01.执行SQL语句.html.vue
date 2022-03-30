<template><h1 id="执行-sql-语句" tabindex="-1"><a class="header-anchor" href="#执行-sql-语句" aria-hidden="true">#</a> 执行 SQL 语句</h1>
<p>Mapper 是 MyBatis 最强大的工具与功能，它用于执行 SQL 语句。</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span>
	<span class="token name">PUBLIC</span> <span class="token string">"-//mybatis.org//DTD Mapper 3.0//EN"</span>
		<span class="token string">"http://mybatis.org/dtd/mybatis-3-mapper.dtd"</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>insert</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>insert</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>delete</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>delete</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>update</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>update</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><table>
<thead>
<tr>
<th style="text-align:left">元素</th>
<th style="text-align:left">描述</th>
<th style="text-align:left">备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">select</td>
<td style="text-align:left">查询语句，常用又复杂</td>
<td style="text-align:left">可以自定义参数，返回结果集等</td>
</tr>
<tr>
<td style="text-align:left">insert</td>
<td style="text-align:left">插入语句</td>
<td style="text-align:left">执行后返回一个整数，代表插入的条数</td>
</tr>
<tr>
<td style="text-align:left">update</td>
<td style="text-align:left">更新语句</td>
<td style="text-align:left">执行后返回一个整数，代表更新的条数</td>
</tr>
<tr>
<td style="text-align:left">delete</td>
<td style="text-align:left">删除语句</td>
<td style="text-align:left">执行后返回一个整数，代表删除的条数</td>
</tr>
<tr>
<td style="text-align:left">resultMap</td>
<td style="text-align:left">定义查询结果映射关系，常用又复杂</td>
<td style="text-align:left">它将提供映射规则</td>
</tr>
</tbody>
</table>
<h2 id="_1-增删改操作" tabindex="-1"><a class="header-anchor" href="#_1-增删改操作" aria-hidden="true">#</a> 1. 增删改操作</h2>
<h3 id="insert-元素" tabindex="-1"><a class="header-anchor" href="#insert-元素" aria-hidden="true">#</a> insert 元素</h3>
<p>insert 元素的必要属性有 ：</p>
<table>
<thead>
<tr>
<th style="text-align:left">元素名</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">id</td>
<td style="text-align:left">和 Mapper 的 namespace 组合起来是唯一的，提供给 MyBatis 调用。</td>
</tr>
<tr>
<td style="text-align:left">parameterType</td>
<td style="text-align:left">类的完全限定名，或内置/自定义的类的别名（Alias）。 可以向 SQL 传递 JavaBean 和 Map 等复杂参数类型，但 Map 参数不建议使用。</td>
</tr>
</tbody>
</table>
<p>MyBatis 在执行插入之后会返回一个 <strong>整数</strong>，以表示插入的记录数。</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>insert</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>insertDepartment<span class="token punctuation">"</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.xja.hemiao.bean.Department<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  INSERT INTO dept(dname, loc) VALUES(#{dname}, #{loc});
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>insert</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote>
<p>在传递参数时，MyBatis 中可用的占位符有两种：<strong><code>#{}</code></strong> 和 <strong><code>${}</code></strong> 。</p>
<ul>
<li><strong><code>#{}</code></strong>：MyBatis 使用的是 JDBC 中的 <strong>PreparedStatement</strong> 。</li>
<li><strong><code>${}</code></strong>：MyBatis 使用的是 JDBC 中的 <strong>Statement</strong> 。</li>
</ul>
</blockquote>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 这是一个相较于 classpath 的文件路径名。而且，不需要使用 / 。</span>
<span class="token class-name">InputStream</span> is <span class="token operator">=</span> <span class="token class-name">Resources</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">"mybatis-config.xml"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">SqlSessionFactory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SqlSessionFactoryBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span>is<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">SqlSession</span> session <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">openSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Department</span> dept <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Department</span><span class="token punctuation">(</span><span class="token string">"Test"</span><span class="token punctuation">,</span> <span class="token string">"BeiJing"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> n <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token string">"xxx.yyy.zzz.insertDepartment"</span><span class="token punctuation">,</span> dept<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// 输出打印 1</span>

session<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
session<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="insert-过程中的主键回填" tabindex="-1"><a class="header-anchor" href="#insert-过程中的主键回填" aria-hidden="true">#</a> insert 过程中的主键回填</h3>
<p>大多数情况下，插入信息的主键是由数据库底层生成的，在插入数据后，我们往往需要这个主键，以便于未来的操作。为此，MyBatis 提供了主键回填功能。这个功能需要数据库和数据库驱动支持，MyBatis 才能正常使用它。</p>
<p>开启主键回填功能的 insert 必要属性：</p>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">useGeneratedKeys</td>
<td style="text-align:left">启用主键回填功能的开关属性。<code>&quot;true&quot;</code></td>
</tr>
<tr>
<td style="text-align:left">keyProperty</td>
<td style="text-align:left">指定需要回填的 Bean 属性（对应数据库主键列的那个属性）</td>
</tr>
</tbody>
</table>
<p>如果你有大量的 insert 都要用到主键回填功能，而你又觉得要在所有的这些 <code>&lt;insert ...&gt;</code> 中每一个都去写 <code>userGeneratedKeys=&quot;true&quot;</code> 很麻烦，MyBatis 的核心配置文件中的 <strong><code>&lt;settings&gt;</code></strong> 中有一个全局设置，可以帮你批量开启所有的 <code>&lt;insert ...&gt;</code> 的主键回填功能：</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>settings</span><span class="token punctuation">></span></span>
  ...
  <span class="token comment">&lt;!-- 默认值是 false 。因此你要一个个地写。 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>setting</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>useGeneratedKeys<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>settings</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>留意<code>&lt;settings&gt;</code> 的位置。MyBatis 对配置文件的内容的先后顺序有要求。</p>
</div>
<h3 id="delete-元素-和-update-元素" tabindex="-1"><a class="header-anchor" href="#delete-元素-和-update-元素" aria-hidden="true">#</a> delete 元素 和 update 元素</h3>
<p>和 insert 元素一样，MyBatis 执行完 update 元素 和 delete 元素后会返回一个整数，标示执行后影响的记录条数。</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>update</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>updateDepartment<span class="token punctuation">"</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dept<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  UPDATE dept SET dname = #{dname}, loc = #{loc} WHERE deptno = #{deptno}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>update</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>delete</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>deleteDepartment<span class="token punctuation">"</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>int<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  DELETE FROM dept WHERE deptno = #{deptno}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>delete</span><span class="token punctuation">></span></span>
...
session.insert("xxx.yyy.zzz.insertDepartment", dept);
...
session.update("xxx.yyy.zzz.updateDepartment", dept);
...
session.delete("xxx.yyy.zzz.deleteDepartment", 41);
...
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="_2-getmapper-方法" tabindex="-1"><a class="header-anchor" href="#_2-getmapper-方法" aria-hidden="true">#</a> 2. getMapper 方法</h2>
<p>通过 SqlSession 的 insert、upate、delete 和 selectOne、selectList 方法可以去调用 Mapper.xml 中定义的配置文件，进而操作数据库。不过，MyBatis 提供了更『高端』的操作，『帮』程序员去实现 DAO 层代码。</p>
<p>如果将 Mapper.xml 配置文件的 namespace『故意』写的和一个 DAO 接口的完全路径名一样，并且该接口中的方法名有『碰巧』和 Mapp.xml 配置文件中的各个 SQL 语句的 id 值一样，那么 MyBatis 就会去为该接口动态生成一个实现类。</p>
<p>通过 SqlSession 的 <strong>getMapper</strong> 方法传入接口的类对象，就可以获得这个由 MyBatis 动态生成的 DAO 接口的实现类。</p>
<p>3 个『保持一致』：</p>
<ul>
<li><em>Mapper.xml</em> 的 <strong>namespace</strong> 与接口的完全限定名保持一致。</li>
<li>SQL 语句的 <strong>id</strong> 属性值与接口中的方法名保持一致。</li>
<li>SQL 语句的 <strong>parameterType</strong> 属性值与接口的方法的参数类型保持一致。</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">xxx<span class="token punctuation">.</span>yyy<span class="token punctuation">.</span>zzz<span class="token punctuation">.</span>dao</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">DepartmentDao</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Department</span><span class="token punctuation">></span></span> <span class="token function">listDepartments</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span>mapper namespace<span class="token operator">=</span><span class="token string">"xxx.yyy.zzz.dao.DepartmentDao"</span><span class="token operator">></span> <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 注意，此处是接口的完全限定名字。<span class="token operator">--</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>select id<span class="token operator">=</span><span class="token string">"listDepartments"</span> resultType<span class="token operator">=</span><span class="token string">"dept"</span><span class="token operator">></span>
    SELECT <span class="token operator">*</span> FROM dept
  <span class="token operator">&lt;</span><span class="token operator">/</span>select<span class="token operator">></span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>mapper<span class="token operator">></span>
<span class="token class-name">DepartmentDao</span> dao <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">getMapper</span><span class="token punctuation">(</span><span class="token class-name">DepartmentDao</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Department</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> dao<span class="token punctuation">.</span><span class="token function">listDepartments</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="_3-查操作" tabindex="-1"><a class="header-anchor" href="#_3-查操作" aria-hidden="true">#</a> 3. 查操作</h2>
<h3 id="select-元素" tabindex="-1"><a class="header-anchor" href="#select-元素" aria-hidden="true">#</a> select 元素</h3>
<p>通过 MyBatis 执行 SQL 后，MyBatis 通过其强大的映射规则，可以自动地将返回的结果集绑定到 JavaBean 中。</p>
<p>select 元素的必要属性有：</p>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">id</td>
<td style="text-align:left">和 Mapper 的 namespace 组合起来必须唯一</td>
</tr>
<tr>
<td style="text-align:left">parameterType</td>
<td style="text-align:left">类的完全限定名，或内置/自定义的类的别名（Alias） 。可以向 SQL 传递 JavaBean 和 Map 等复杂参数类型。</td>
</tr>
<tr>
<td style="text-align:left">resultType</td>
<td style="text-align:left">类的完全限定名，查询结果将通过固定规范进行映射； 或者定义为 int、double、float 等参数。</td>
</tr>
<tr>
<td style="text-align:left">resultMap</td>
<td style="text-align:left">resultType 的“高级版”，允许我们自定义映射规则。 <strong>不能与 resultType 同时使用</strong>。</td>
</tr>
</tbody>
</table>
<h3 id="select-与-聚合函数" tabindex="-1"><a class="header-anchor" href="#select-与-聚合函数" aria-hidden="true">#</a> select 与 聚合函数</h3>
<p>并不是所有的 select 语句都会返回一行，或多行记录。例如，在 select 中使用聚合函数。这种情况对于 MyBatis 而言最为简单，因为不需要将结果集映射成 JavaBean ，它只需要返回一行一列的单个数据。</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getMaxSal<span class="token punctuation">"</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>int<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  SELECT * FROM dept WHERE deptno = #{deptno}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 此处特意是 string 类型，以验证效果 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getEmployeeCount<span class="token punctuation">"</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>string<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  SELECT count(empno) FROM emp;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
int n = session.selectOne("xxx.yyy.zzz.getMaxSal");
System.out.println(n);

String str = session.selectOne("xxx.yyy.zzz.getemployeeCount");
System.out.println(str);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>MyBatis 可以很智能地将返回结果转换为你所指定的类型，如：int、String 等。</p>
<h2 id="_4-传递多个参数" tabindex="-1"><a class="header-anchor" href="#_4-传递多个参数" aria-hidden="true">#</a> 4. 传递多个参数</h2>
<p>多参数的传递有三种方法：</p>
<table>
<thead>
<tr>
<th style="text-align:left">传递方式</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">使用 Map 传参</td>
<td style="text-align:left">不建议使用（已被 JavaBean 传参替代）</td>
</tr>
<tr>
<td style="text-align:left">使用 JavaBean 传参</td>
<td style="text-align:left"><strong>大量多参</strong> 传递时使用</td>
</tr>
<tr>
<td style="text-align:left">使用 注解 传参</td>
<td style="text-align:left"><strong>少量多参</strong> 传递时使用</td>
</tr>
</tbody>
</table>
<h3 id="使用-map-传递多参数" tabindex="-1"><a class="header-anchor" href="#使用-map-传递多参数" aria-hidden="true">#</a> 使用 Map 传递多参数</h3>
<p>MyBatis 支持 Map 对象作为参数，此时，要求 select 元素的 <code>parameterType</code> 值为 <code>map</code> 。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">></span></span> <span class="token function">selectBySal1</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">></span></span> salMap<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span>select id<span class="token operator">=</span><span class="token string">"selectBySal1"</span> parameterType<span class="token operator">=</span><span class="token string">"map"</span> resultType<span class="token operator">=</span><span class="token string">"Employee"</span><span class="token operator">></span>
  select <span class="token operator">*</span> from emp where sal <span class="token operator">>=</span> #<span class="token punctuation">{</span>minSal<span class="token punctuation">}</span> and sal <span class="token operator">&amp;</span>lt<span class="token punctuation">;</span> #<span class="token punctuation">{</span>maxSal<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>select<span class="token operator">></span>
<span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">></span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"minSal"</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"maxSal"</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> dao<span class="token punctuation">.</span><span class="token function">selectBySal1</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Employee</span> emp <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"{}"</span><span class="token punctuation">,</span> emp<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="使用-javabean-传递多参" tabindex="-1"><a class="header-anchor" href="#使用-javabean-传递多参" aria-hidden="true">#</a> 使用 JavaBean 传递多参</h3>
<p>由于 Map 的无语义性，因此官方 不建议使用 Map 传参！</p>
<p>此时，要求 <code>select</code> 元素的 <code>parameterType</code> 属性值为 JavaBean 的完全限定名（或别名）。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SallaryRegion</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> minSallary<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> maxSallary<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">></span></span> <span class="token function">selectBySal2</span><span class="token punctuation">(</span><span class="token class-name">SallaryRegion</span> region<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span>select id<span class="token operator">=</span><span class="token string">"selectBySal2"</span>
        parameterType<span class="token operator">=</span><span class="token string">"com.microboom.bean.po.SallaryRegion"</span>
        resultType<span class="token operator">=</span><span class="token string">"Employee"</span><span class="token operator">></span>
    select <span class="token operator">*</span> 
    from emp 
    where sal <span class="token operator">>=</span> #<span class="token punctuation">{</span>minSallary<span class="token punctuation">}</span> 
      and sal <span class="token operator">&amp;</span>lt<span class="token punctuation">;</span> #<span class="token punctuation">{</span>maxSallary<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>select<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="使用注解方式传递多参数" tabindex="-1"><a class="header-anchor" href="#使用注解方式传递多参数" aria-hidden="true">#</a> 使用注解方式传递多参数</h3>
<p>如果所有的多参数传递都通过定义并使用 JavaBean 来进行，那么项目中会出现大量的参数 JavaBean 的定义，显然这也并不太合理。</p>
<p>为此，Mybatis 提供了参数注解，以减少参数 JavaBean 的定义。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">></span></span> <span class="token function">selectBySal3</span><span class="token punctuation">(</span>
    <span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">"xxx"</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> minSallary<span class="token punctuation">,</span>
    <span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">"yyy"</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> <span class="token class-name">MaxSallary</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span>select id<span class="token operator">=</span><span class="token string">"selectBySal3"</span> resultType<span class="token operator">=</span><span class="token string">"Employee"</span><span class="token operator">></span>
  select <span class="token operator">*</span> 
  from emp 
  where sal <span class="token operator">>=</span> #<span class="token punctuation">{</span>xxx<span class="token punctuation">}</span> 
    and sal <span class="token operator">&amp;</span>lt<span class="token punctuation">;</span> #<span class="token punctuation">{</span>yyy<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>select<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><code>补充</code>，MyBatis 框架的注解功能相对而言比较薄弱，官方推荐使用 XML 配置，而非注解，但是少量的多参数传递，是 必须使用注解 的场景。</p>
</template>
