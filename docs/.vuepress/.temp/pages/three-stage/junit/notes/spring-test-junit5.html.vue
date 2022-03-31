<template><h1 id="spring-整合-junit5" tabindex="-1"><a class="header-anchor" href="#spring-整合-junit5" aria-hidden="true">#</a> Spring 整合 JUnit5</h1>
<h2 id="_1-基本使用和-contextconfiguration-注解" tabindex="-1"><a class="header-anchor" href="#_1-基本使用和-contextconfiguration-注解" aria-hidden="true">#</a> 1. 基本使用和 @ContextConfiguration 注解</h2>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>${spring.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span><span class="token comment">&lt;!-- 偷懒，一口气引入『一堆』junit5 相关依赖 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.junit.jupiter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>junit-jupiter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>5.6.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>spring-text 并不是一个『新』的测试框架！它和 JUnit 的关系类似于 slf4j 和 logback，我们是直接使用 spring-text，间接使用 JUnit ，在整个测试工作中真正『干活』的仍然是 JUnit 。</p>
<p>之所以这么『绕』一下再使用 JUnit 是因为我们直接使用 JUnit 的话，我们至少有两件事情是需要亲自去干：</p>
<ol>
<li>手动加载 <code>.xml</code> 配置文件，构建 Spring IoC 容器。</li>
<li>手动向 Spring『要』Spring IoC 容器中的单例对象。</li>
</ol>
<p>例如：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * 麻烦的写法
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test1</span> <span class="token punctuation">{</span>

  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">ApplicationContext</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClassPathXmlApplicationContext</span><span class="token punctuation">(</span><span class="token string">"demo1.xml"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">DataSource</span> ds <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">DataSource</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ds<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>如果我们是直接使用 spring-text，而间接使用 JUnit，那么至少上述两件事情我们就不用『手动』处理了。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@ExtendWith</span><span class="token punctuation">(</span><span class="token class-name">SpringExtension</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token comment">// ①</span>
<span class="token annotation punctuation">@ContextConfiguration</span><span class="token punctuation">(</span><span class="token string">"classpath:demo1.xml"</span><span class="token punctuation">)</span>  <span class="token comment">// ②</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test2</span> <span class="token punctuation">{</span>

  <span class="token annotation punctuation">@Autowired</span> <span class="token comment">// ③</span>
  <span class="token keyword">private</span> <span class="token class-name">DataSource</span> ds<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
    ds<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>上述 spring-test 代码有 3 处注解：</p>
<ol>
<li><strong>@ExtendWith</strong> 指定使用 Spring JUnit 的测试运行器，也就是『真正』干活的那个测试框架。上例中指定的是 JUnit 5，如果有特殊需要和偏好，你也可以指定为别的测试框架，例如 JUnit 4、TestNG 等。</li>
<li><strong>@ContextConfiguration</strong> 注解指定测试用的 Spring 配置文件的位置。根据你的配置，spring-test 会去加载该文件构建 IoC 容器。</li>
<li><strong>@Autowired</strong> 任何 Spring IoC 容器中有的，你所需要的对象，你都可以要求 spring-test 注入到你的测试类的属性中。</li>
</ol>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>在 Maven 项目中，spring-test 代码加载的是 test 配套的资源文件，即，<code>项目 &gt; src &gt; test &gt; resources</code> 下的配置文件。</p>
</div>
<p>另外，上述代码还有一个可优化之处：使用 <strong>@SpringJUnitConfig</strong> 注解，一个顶俩。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// @ExtendWith(SpringExtension.class)</span>
<span class="token comment">// @ContextConfiguration("classpath:demo.xml")</span>
<span class="token annotation punctuation">@SpringJUnitConfig</span><span class="token punctuation">(</span>locations <span class="token operator">=</span> <span class="token string">"classpath:demo.xml"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_2-spring-test-利用事务避免污染数据库" tabindex="-1"><a class="header-anchor" href="#_2-spring-test-利用事务避免污染数据库" aria-hidden="true">#</a> 2. spring-test 利用事务避免污染数据库</h2>
<p>如果涉及测试增删改的 DAO 方法，或者是测试涉及这些 DAO 的 Service 方法，每一个 Test 方法执行结束后都会对数据库造成影响，从而极大可能影响后续 Test 方法的执行。（因为对于第二个 Test 方法而言，数据库环境发生了变化，初始条件可能就已经不满足了）。</p>
<p>为此，spring-test 利用事务的回滚可以在 Test 方法执行结束后，撤销 Test 方法对数据库造成的影响。注意，你的 spring 配置文件中，必须有相关的事务（spring-tx）配置部分。即，必须引入 <code>spring-service.xml</code> 配置文件</p>
<ul>
<li><strong>@Transactional</strong>：表示启用事务。</li>
<li><strong>@Rollback</strong>：表示本方法执行结束后事务回滚。</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token annotation punctuation">@Transactional</span>
<span class="token annotation punctuation">@Rollback</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">demo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Department</span> dept <span class="token operator">=</span> departmentDao<span class="token punctuation">.</span><span class="token function">selectByPrimaryKey</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"{}"</span><span class="token punctuation">,</span> dept<span class="token punctuation">)</span><span class="token punctuation">;</span>

    dept<span class="token punctuation">.</span><span class="token function">setDname</span><span class="token punctuation">(</span>dept<span class="token punctuation">.</span><span class="token function">getDname</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    departmentDao<span class="token punctuation">.</span><span class="token function">updateByPrimaryKey</span><span class="token punctuation">(</span>dept<span class="token punctuation">)</span><span class="token punctuation">;</span>

    dept <span class="token operator">=</span> departmentDao<span class="token punctuation">.</span><span class="token function">selectByPrimaryKey</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"{}"</span><span class="token punctuation">,</span> dept<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>@Transactional 和 @Rollback 还可以直接标注在类上，相当于对测试类下的所有的测试方法进行了统一设置。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RunWith</span><span class="token punctuation">(</span><span class="token class-name">SpringJUnit4ClassRunner</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ContextConfiguration</span><span class="token punctuation">(</span>locations <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">"classpath:spring/spring-dao.xml"</span><span class="token punctuation">,</span> 
    <span class="token string">"classpath:spring/spring-service.xml"</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Transactional</span>
<span class="token annotation punctuation">@Rollback</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppTest</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>@Transactional 和 @Rollback 不仅对 Dao 测试的回滚有效，对 Service 方法的测试，甚至是 Web 方法的测试也都有效。</p>
<h2 id="_3-sql-注解" tabindex="-1"><a class="header-anchor" href="#_3-sql-注解" aria-hidden="true">#</a> 3. @Sql 注解</h2>
<p><strong>@Sql</strong> 注解可以执行 SQL 脚本，也可以执行 SQL 语句。它既可以加上类上面，也可以加在方法上面。</p>
<p><strong>@Sql</strong> 有下面的属性：</p>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">config</td>
<td style="text-align:left">与注解 @SqlConfig 作用一样，用来配置 <code>注释前缀</code>、<code>分隔符</code> 等。</td>
</tr>
<tr>
<td style="text-align:left">executionPhase</td>
<td style="text-align:left">决定 SQL 脚本或语句什么时候会执行，默认是 BEFORE_TEST_METHOD 。</td>
</tr>
<tr>
<td style="text-align:left"><strong>statements</strong></td>
<td style="text-align:left">配置要一起执行的 SQL 语句。</td>
</tr>
<tr>
<td style="text-align:left"><strong>scripts</strong></td>
<td style="text-align:left">配置 SQL 脚本路径。</td>
</tr>
<tr>
<td style="text-align:left">value</td>
<td style="text-align:left">scripts 的别名，它不能和 scripts 同时配置，但 statements 可以。</td>
</tr>
</tbody>
</table>
<p>默认情况下，方法上的 @Sql 注解会覆盖类上的 @Sql 注解。</p>
<p>例如：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Sql</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">"/drop_schema.sql"</span><span class="token punctuation">,</span> <span class="token string">"/create_schema.sql"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Sql</span><span class="token punctuation">(</span>scripts <span class="token operator">=</span> <span class="token string">"/insert_data1.sql"</span><span class="token punctuation">,</span> statements <span class="token operator">=</span> <span class="token string">"insert into student(id, name) values (100, 'Shiva')"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ExtendWith</span><span class="token punctuation">(</span><span class="token class-name">SpringExtension</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ContextConfiguration</span><span class="token punctuation">(</span>classes <span class="token operator">=</span> <span class="token class-name">AppConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SqlTest</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Autowired</span>
	<span class="token keyword">private</span> <span class="token class-name">JdbcTemplate</span> jdbcTemplate<span class="token punctuation">;</span>

	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fetchRows1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span><span class="token punctuation">></span></span> students <span class="token operator">=</span> jdbcTemplate<span class="token punctuation">.</span><span class="token function">queryForList</span><span class="token punctuation">(</span><span class="token string">"SELECT * FROM student"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> students<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Sql</span><span class="token punctuation">(</span><span class="token string">"/insert_more_data1.sql"</span><span class="token punctuation">)</span>
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fetchRows2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span><span class="token punctuation">></span></span> students <span class="token operator">=</span> jdbcTemplate<span class="token punctuation">.</span><span class="token function">queryForList</span><span class="token punctuation">(</span><span class="token string">"SELECT * FROM student"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> students<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="_4-mvn-test-执行-junit-5" tabindex="-1"><a class="header-anchor" href="#_4-mvn-test-执行-junit-5" aria-hidden="true">#</a> 4. mvn test 执行 Junit 5</h2>
<p>直接或间接执行 maven 的 <code>mvn test</code> 命令时，JUnit 5 测试用例不会执行，因为现在（2021.07.16）并不能识别到 JUnit 5 测试用例。如果需要（像 JUnit 4 那样被 mvn test 命令直接执行），这需要在 maven 的 pom.xml 配置中指定 maven surefire 插件：</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.apache.maven.plugins<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>maven-surefire-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.22.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></template>
