<template><h1 id="注解中的结果集映射" tabindex="-1"><a class="header-anchor" href="#注解中的结果集映射" aria-hidden="true">#</a> 注解中的结果集映射</h1>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>由于注解在映射结果集上没有实现 <code>&lt;resultMap&gt;</code> 的 100% 功能，因此，十全十美的方案是在 mapper.xml 配置文件中通过 <code>&lt;resultMap&gt;</code> 映射结果集，然后再在接口中引用它。</p>
<p>因此，以下内容仅作了解。</p>
</div>
<h2 id="_1-结果集映射" tabindex="-1"><a class="header-anchor" href="#_1-结果集映射" aria-hidden="true">#</a> 1. 结果集映射</h2>
<p>我们在使用 MyBatis 不可能都是遇到最简单的情况：表的列名与类的属性名一致。当表的列明与类的属性名不一致时，需要去配置结果集映射。</p>
<p>通过注解进行结果集的映射是通过使用 <strong>@Results</strong>、<strong>@Result</strong> 和 <strong>@ResultMap</strong> 注解完成的。其中，</p>
<ul>
<li><strong>@Results</strong> 和 <strong>@Result</strong> 结合使用进行结果集映射；</li>
<li><strong>@ResultMap</strong> 则是在别处『调用』映射规则。</li>
<li><strong>@Results</strong> 和 <strong>@Result</strong> 只需要配置一次，而 <strong>@ResultMap</strong> 会在多出使用。</li>
</ul>
<p>例如：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">"select * from dept where deptno=#{id}"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Results</span><span class="token punctuation">(</span>id <span class="token operator">=</span> <span class="token string">"department"</span><span class="token punctuation">,</span> value <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">"id"</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">"deptno"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">"name"</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">"location"</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">"loc"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">Department</span> <span class="token function">selectByPK</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">"select * from dept"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResultMap</span><span class="token punctuation">(</span><span class="token string">"department"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Department</span><span class="token punctuation">></span></span> <span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="_2-关系映射" tabindex="-1"><a class="header-anchor" href="#_2-关系映射" aria-hidden="true">#</a> 2. 关系映射</h2>
<p>一对一、一对多和多对多的关系映射就是在结果集映射的基础上再使用 <strong>@One</strong> 和 <strong>@Many</strong> 注解。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">"select * from emp where empno=#{id}"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Results</span><span class="token punctuation">(</span>id <span class="token operator">=</span> <span class="token string">"employee"</span><span class="token punctuation">,</span> value <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">"empno"</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">"empno"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">"ename"</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">"ename"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">"job"</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">"job"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">"mgr"</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">"mgr"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">"hiredate"</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">"hiredate"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">"sal"</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">"sal"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">"comm"</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">"comm"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">"dept"</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">"deptno"</span><span class="token punctuation">,</span> one <span class="token operator">=</span> <span class="token annotation punctuation">@One</span><span class="token punctuation">(</span>select <span class="token operator">=</span> <span class="token string">"dao.DepartmentMapper.selectByPK"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">Employee</span> <span class="token function">selectByPK</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">"select * from emp where deptno = #{id}"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResultMap</span><span class="token punctuation">(</span><span class="token string">"employee"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">></span></span> <span class="token function">selectByEmployeeID</span><span class="token punctuation">(</span><span class="token keyword">int</span> deptno<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">"select * from dept where deptno=#{id}"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Results</span><span class="token punctuation">(</span>id <span class="token operator">=</span> <span class="token string">"department"</span><span class="token punctuation">,</span> value <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">"id"</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">"deptno"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">"name"</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">"deptno"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">"location"</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">"loc"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token annotation punctuation">@Result</span><span class="token punctuation">(</span>property <span class="token operator">=</span> <span class="token string">"employeeList"</span><span class="token punctuation">,</span> column <span class="token operator">=</span> <span class="token string">"deptno"</span><span class="token punctuation">,</span> many <span class="token operator">=</span> <span class="token annotation punctuation">@Many</span><span class="token punctuation">(</span>select <span class="token operator">=</span> <span class="token string">"dao.EmployeeMapper.selectByDepartmentID"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">Department</span> <span class="token function">selectByPK</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="_3-常用功能注解汇总" tabindex="-1"><a class="header-anchor" href="#_3-常用功能注解汇总" aria-hidden="true">#</a> 3. 常用功能注解汇总</h2>
<table>
<thead>
<tr>
<th style="text-align:left">注解</th>
<th style="text-align:left">目标</th>
<th style="text-align:left">相对应的 XML</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><strong>@Param</strong></td>
<td style="text-align:left">参数</td>
<td style="text-align:left">N/A</td>
<td style="text-align:left">如果你的映射器的方法需要多个参数，这个注解可以被应用于映射器的方法参数来给每个参数一个名字。 否则，多参数将会以它们的顺序位置来被命名（不包括任何 RowBounds 参数）比如。<em>#{param1}</em> , <em>#{param2}</em> 等，这是默认的。 使用 <strong>@Param(&quot;person&quot;)</strong>，参数应该被命名为 <strong>#{person}</strong>。</td>
</tr>
<tr>
<td style="text-align:left"><strong>@Insert</strong>  <strong>@Update</strong>  <strong>@Delete</strong>  <strong>@Select</strong></td>
<td style="text-align:left">方法</td>
<td style="text-align:left"><code>&lt;insert&gt;</code> <code>&lt;update&gt;</code> <code>&lt;delete&gt;</code> <code>&lt;select&gt;</code></td>
<td style="text-align:left">这些注解中的每一个代表了执行的真实 SQL。它们每一个都使用字符串数组（或单独的字符串）。  如果传递的是字符串数组，它们由每个分隔它们的单独空间串联起来。</td>
</tr>
<tr>
<td style="text-align:left"><strong>@Results</strong></td>
<td style="text-align:left">方法</td>
<td style="text-align:left"><code>&lt;resultMap&gt;</code></td>
<td style="text-align:left">结果映射的列表，包含了一个特别结果列如何被映射到属性或字段的详情。属性有 <em>value</em>，<em>id</em> 。 <strong>value</strong> 属性是 Result 注解的数组。 <strong>id</strong> 的属性是结果映射的名称。</td>
</tr>
<tr>
<td style="text-align:left"><strong>@Result</strong></td>
<td style="text-align:left">N/A</td>
<td style="text-align:left"><code>&lt;result&gt;</code> <code>&lt;id&gt;</code></td>
<td style="text-align:left">在列和属性或字段之间的单独结果映射。属性有 id，column，property，javaType，jdbcType，typeHandler，one，many。 <strong>id</strong> 属性是一个布尔值，表示了应该被用于比较（和在 XML 映射中的 <code>&lt;id&gt;</code> 相似）的属性。 <strong>one</strong> 属性是单独的联系，和 <code>&lt;association&gt;</code> 相似 , 而 <strong>many</strong> 属性是对集合而言的 , 和<code> &lt;collection&gt;</code> 相似。</td>
</tr>
<tr>
<td style="text-align:left"><strong>@ResultMap</strong></td>
<td style="text-align:left">方法</td>
<td style="text-align:left">N/A</td>
<td style="text-align:left">这个注解给 <strong>@Select</strong> 或者**@SelectProvider** 提供在 XML 映射中的 <code>&lt;resultMap&gt;</code> 的id。 这使得注解的 select 可以复用那些定义在 XML 中的 ResultMap。 如果同一 select 注解中还存在 <strong>@Results</strong> 或者 <strong>@ConstructorArgs</strong> ，那么这两个注解将被此注解覆盖。</td>
</tr>
<tr>
<td style="text-align:left"><strong>@One</strong></td>
<td style="text-align:left">N/A</td>
<td style="text-align:left"><code>&lt;association&gt;</code></td>
<td style="text-align:left">复杂类型的单独属性值映射。属性有 <strong>select</strong>，已映射语句（也就是映射器方法）的完全限定名，它可以加载合适类型的实例。 注意：联合映射在注解 API 中是不支持的。这是因为 Java 注解的限制，不允许循环引用。 <strong>fetchType</strong> 会覆盖全局的配置参数 <strong>lazyLoadingEnabled</strong> 。</td>
</tr>
<tr>
<td style="text-align:left"><strong>@Many</strong></td>
<td style="text-align:left">N/A</td>
<td style="text-align:left"><code>&lt;collection&gt;</code></td>
<td style="text-align:left">映射到复杂类型的集合属性。属性有 select，已映射语句（也就是映射器方法）的全限定名，它可以加载合适类型的实例的集合，<strong>fetchType</strong> 会覆盖全局的配置参数 <strong>lazyLoadingEnabled</strong> 。 注意联合映射在注解 API 中是不支持的。这是因为 Java 注解的限制，不允许循环引用。</td>
</tr>
<tr>
<td style="text-align:left"><strong>@InsertProvider</strong>  <strong>@UpdateProvider</strong>  <strong>@DeleteProvider</strong>  <strong>@SelectProvider</strong></td>
<td style="text-align:left">方法</td>
<td style="text-align:left"><code>&lt;insert&gt; </code> <code>&lt;update&gt;</code> <code>&lt;delete&gt;</code> <code>&lt;select&gt;</code></td>
<td style="text-align:left">这些可选的 SQL 注解允许你指定一个类名和一个方法在执行时来返回运行允许创建动态的 SQL。基于执行的映射语句，MyBatis 会实例化这个类，然后执行由 provider 指定的方法。 You can pass objects that passed to arguments of a mapper method, &quot;Mapper interface type&quot; and &quot;Mapper method&quot; via theProviderContext(available since MyBatis 3.4.5 or later) as method argument. (In MyBatis 3.4 or later, it's allow multiple parameters) 属性有 <strong>type</strong> ，<strong>method</strong> 。<strong>type</strong> 属性是类。<strong>method</strong> 属性是方法名。</td>
</tr>
</tbody>
</table>
</template>
