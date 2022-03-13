<template><h1 id="mysql中的子查询" tabindex="-1"><a class="header-anchor" href="#mysql中的子查询" aria-hidden="true">#</a> MySql中的子查询</h1>
<p>在平时的工作中mysql的子查询十分常见，下面就子查询的注意事项进行总结。</p>
<h2 id="子查询使用场景" tabindex="-1"><a class="header-anchor" href="#子查询使用场景" aria-hidden="true">#</a> 子查询使用场景</h2>
<p>一般在不能一步求解的时候用到子查询</p>
<p><strong>子查询的语法：</strong></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> select_list
<span class="token keyword">FROM</span> <span class="token keyword">table</span>
<span class="token keyword">WHERE</span> expr operator
    <span class="token punctuation">(</span><span class="token keyword">SELECT</span> select_list
    <span class="token keyword">FROM</span>  <span class="token keyword">table</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>子查询有常见的十个问题，弄清楚这十个问题是了解子查询的关键。</p>
</div>
<h2 id="问题一-子查询语法中的小括号" tabindex="-1"><a class="header-anchor" href="#问题一-子查询语法中的小括号" aria-hidden="true">#</a> 问题一：子查询语法中的小括号</h2>
<p>子查询语句必须使用小括号嵌套起来，否则执行报错</p>
<CodeGroup>
<CodeGroupItem title="正确写法">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment">-- 查询年龄比jack大的用户</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token identifier"><span class="token punctuation">`</span>user<span class="token punctuation">`</span></span>
<span class="token keyword">where</span> <span class="token identifier"><span class="token punctuation">`</span>age<span class="token punctuation">`</span></span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token identifier"><span class="token punctuation">`</span>age<span class="token punctuation">`</span></span> form 
               <span class="token identifier"><span class="token punctuation">`</span>user<span class="token punctuation">`</span></span> <span class="token keyword">where</span> <span class="token identifier"><span class="token punctuation">`</span>name<span class="token punctuation">`</span></span> <span class="token operator">=</span> <span class="token string">'jack'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="错误写法">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment">-- 查询年龄比jack大的用户</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token identifier"><span class="token punctuation">`</span>user<span class="token punctuation">`</span></span>
<span class="token keyword">where</span> <span class="token identifier"><span class="token punctuation">`</span>age<span class="token punctuation">`</span></span> <span class="token operator">=</span> <span class="token keyword">select</span> <span class="token identifier"><span class="token punctuation">`</span>age<span class="token punctuation">`</span></span> form 
               <span class="token identifier"><span class="token punctuation">`</span>user<span class="token punctuation">`</span></span> <span class="token keyword">where</span> <span class="token identifier"><span class="token punctuation">`</span>name<span class="token punctuation">`</span></span> <span class="token operator">=</span> <span class="token string">'jack'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></CodeGroupItem>
</CodeGroup>
<h2 id="问题二-子查询的书写风格" tabindex="-1"><a class="header-anchor" href="#问题二-子查询的书写风格" aria-hidden="true">#</a> 问题二：子查询的书写风格</h2>
<p>一个好的sql语句书写习惯可以规避很多没有必要出现的小问题，提高开发的效率。</p>
<p>书写风格规范的sql在出现错误的时候可以清晰的查询到初五出现的位置，方便阅读，提高开发效率。</p>
<h2 id="问题三-可以使用子查询的位置" tabindex="-1"><a class="header-anchor" href="#问题三-可以使用子查询的位置" aria-hidden="true">#</a> 问题三：可以使用子查询的位置</h2>
<p>子查询可以使用的位置： <code>where</code>、<code>select</code>、<code>having</code>、<code>from</code></p>
<CodeGroup>
<CodeGroupItem title="where 使用">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment">-- 查询年龄比jack大的用户</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token identifier"><span class="token punctuation">`</span>user<span class="token punctuation">`</span></span>
<span class="token keyword">where</span> <span class="token identifier"><span class="token punctuation">`</span>age<span class="token punctuation">`</span></span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token identifier"><span class="token punctuation">`</span>age<span class="token punctuation">`</span></span> form 
               <span class="token identifier"><span class="token punctuation">`</span>user<span class="token punctuation">`</span></span> <span class="token keyword">where</span> <span class="token identifier"><span class="token punctuation">`</span>name<span class="token punctuation">`</span></span> <span class="token operator">=</span> <span class="token string">'jack'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>where条件后面的子查询只能是单行子查询（只能返回一条数据）</p>
</div>
</CodeGroupItem>
<p>:::</p>
<CodeGroupItem title="select 使用">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment">-- 查询学生的信息以及对应的班级名称</span>
<span class="token keyword">select</span> <span class="token identifier"><span class="token punctuation">`</span>name<span class="token punctuation">`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">`</span>age<span class="token punctuation">`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">`</span>class_no<span class="token punctuation">`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token identifier"><span class="token punctuation">`</span>class_name<span class="token punctuation">`</span></span> 
    <span class="token keyword">from</span> <span class="token identifier"><span class="token punctuation">`</span>class<span class="token punctuation">`</span></span> 
    <span class="token keyword">where</span> class_no <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">//这里的班级号暂时写死，后面相关子查询有详细介绍</span>
<span class="token keyword">from</span> <span class="token identifier"><span class="token punctuation">`</span>student<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>select后面的子查询只能是单行子查询（只能返回一条数据）</p>
</div>
</CodeGroupItem>
<p>:::</p>
<CodeGroupItem title="having 使用">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment">-- 平均分比一班最高分高的班级号</span>
<span class="token keyword">select</span> class_no<span class="token punctuation">,</span><span class="token function">AVG</span><span class="token punctuation">(</span>score<span class="token punctuation">)</span>
<span class="token keyword">from</span> student
<span class="token keyword">group</span> <span class="token keyword">by</span> class_no
<span class="token keyword">having</span> <span class="token function">AVG</span><span class="token punctuation">(</span>score<span class="token punctuation">)</span><span class="token operator">>=</span><span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token function">MAX</span><span class="token punctuation">(</span>score<span class="token punctuation">)</span> <span class="token keyword">from</span> student <span class="token keyword">where</span> class_no<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>having后面的子查询只能是单行子查询（只能返回一条数据）</p>
</div>
</CodeGroupItem>
<p>:::</p>
<CodeGroupItem title="from 使用">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment">-- 下面的sql语句中子查询返回的数据被当作一张表放在主查询中使用</span>
<span class="token keyword">SELECT</span>
	<span class="token operator">*</span> 
<span class="token keyword">FROM</span>
	<span class="token punctuation">(</span> <span class="token keyword">SELECT</span> age <span class="token keyword">FROM</span> student <span class="token punctuation">)</span> <span class="token keyword">AS</span> a
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>在使用子查询作为表的时候推荐使用别名，在mysql中from后面使用子查询需要给子查询返回的数据取别名，否则会报错，但在oracle中可以不取别名。</p>
<blockquote>
<p>1248 - Every derived table must have its own alias</p>
</blockquote>
</div>
</CodeGroupItem>
<p>:::</p>
</CodeGroup>
<h2 id="问题四-不可以使用子查询的位置" tabindex="-1"><a class="header-anchor" href="#问题四-不可以使用子查询的位置" aria-hidden="true">#</a> 问题四：不可以使用子查询的位置</h2>
<p>在<strong>oracle</strong>中group by分组语句是不可以使用子查询的，但是在mysql中是可以的</p>
<CodeGroup>
<CodeGroupItem title="oracle中">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> item_name
  <span class="token keyword">from</span> item
 <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token keyword">select</span> item_name
             <span class="token keyword">from</span> item
            <span class="token keyword">where</span> item_code <span class="token operator">=</span> <span class="token string">'item_code_0_0_0_10'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">警告</p>
<p>在oracle中group by后面出现子查询语句会报错</p>
<blockquote>
<p>ORA-&gt;22818:这里不允许出现子查询表达式</p>
</blockquote>
</div>
</CodeGroupItem>
<p>:::</p>
<CodeGroupItem title="mysql中">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">AVG</span><span class="token punctuation">(</span>score<span class="token punctuation">)</span>
  <span class="token keyword">from</span> student
 <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> <span class="token punctuation">(</span><span class="token keyword">select</span> class_no <span class="token keyword">from</span> student <span class="token keyword">where</span> id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>在mysql中group by后面出现子查询语句会正常执行</p>
</div>
</CodeGroupItem>
<p>:::</p>
</CodeGroup>
<h2 id="问题五-from-后面的子查询" tabindex="-1"><a class="header-anchor" href="#问题五-from-后面的子查询" aria-hidden="true">#</a> 问题五：FROM 后面的子查询</h2>
<p>在平时的工作中在from后面出现的子查询十分的常见，我们可以将from后的子查询看成一张新的表。</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment">-- 查询员工的姓名，月薪，年薪=(月薪*12)</span>
<span class="token keyword">select</span> <span class="token operator">*</span> 
<span class="token keyword">from</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token identifier"><span class="token punctuation">`</span>name<span class="token punctuation">`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">`</span>sal<span class="token punctuation">`</span></span><span class="token punctuation">,</span>sal<span class="token operator">*</span><span class="token number">12</span> <span class="token keyword">as</span> 年薪 <span class="token keyword">from</span> emp<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>我们在使用from后面的子查询时可以在已有的列上加更多的列，然后在主查询中对这些列添加条件从而得到想要的数据。</p>
</div>
<h2 id="问题六-子查询和主查询使用的表" tabindex="-1"><a class="header-anchor" href="#问题六-子查询和主查询使用的表" aria-hidden="true">#</a> 问题六：子查询和主查询使用的表</h2>
<p>主查询和子查询使用的表可以是同一张表，也可以不是同一张表。对我们自己来说只要子查询返回的结果主查询可以使用就可以了</p>
<CodeGroup>
<CodeGroupItem title="使用不同表的子查询">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token identifier"><span class="token punctuation">`</span>name<span class="token punctuation">`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">`</span>age<span class="token punctuation">`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">`</span>class_no<span class="token punctuation">`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token identifier"><span class="token punctuation">`</span>class_name<span class="token punctuation">`</span></span> 
    <span class="token keyword">from</span> <span class="token identifier"><span class="token punctuation">`</span>class<span class="token punctuation">`</span></span> 
    <span class="token keyword">where</span> class_no <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">//这里的班级号暂时写死，后面相关子查询有详细介绍</span>
<span class="token keyword">from</span> <span class="token identifier"><span class="token punctuation">`</span>student<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="使用相同表的子查询">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment">-- 查询每个班级的平均年龄</span>
<span class="token keyword">select</span> <span class="token function">avg</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">`</span>class_no<span class="token punctuation">`</span></span><span class="token punctuation">,</span>
<span class="token keyword">from</span> <span class="token identifier"><span class="token punctuation">`</span>student<span class="token punctuation">`</span></span>
<span class="token keyword">order</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token identifier"><span class="token punctuation">`</span>class_no<span class="token punctuation">`</span></span> <span class="token keyword">from</span> <span class="token identifier"><span class="token punctuation">`</span>class<span class="token punctuation">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 在mysql中可以在group by后面使用子查询，在oracle中是不可以的</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></CodeGroupItem>
</CodeGroup>
<h2 id="问题七-子查询中的排序" tabindex="-1"><a class="header-anchor" href="#问题七-子查询中的排序" aria-hidden="true">#</a> 问题七：子查询中的排序</h2>
<p>一般不在子查询中使用排序，应该大部分情况下子查询中的结果只是拿来使用，排序与不排序都不影响我们使用，所以意义不大。但是在Top-N分析问题中，必须对子查询进行排序。</p>
<div class="custom-container tip"><p class="custom-container-title">Top-N解释</p>
<p>例子：找到员工表中工资最高的前三名 这时N=3</p>
<table>
<thead>
<tr>
<th>ROWNUM</th>
<th>EMPNO</th>
<th>ENAME</th>
<th>SAL</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>0001</td>
<td>JACK</td>
<td>5000</td>
</tr>
<tr>
<td>2</td>
<td>0002</td>
<td>TOM</td>
<td>3000</td>
</tr>
<tr>
<td>3</td>
<td>0003</td>
<td>ABC</td>
<td>3000</td>
</tr>
</tbody>
</table>
<p>在oracle数据库中为我们提供了很多伪列，比如：rownum（行号）</p>
<ul>
<li>行号永远按照默认的顺序生成，即使你对查询的数据进行了排序，行号也是不会改变的。</li>
<li>并且行号只能使用<code>&lt;</code>或者<code>&lt;=</code>，不能使用<code>&gt;</code>或者<code>&gt;=</code>。</li>
</ul>
</div>
<CodeGroup>
<CodeGroupItem title="错误写法">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment">-- 找到员工表中工资最高的前三名，使用行号取降序排列后的前三个</span>
<span class="token keyword">select</span> rownum<span class="token punctuation">,</span>empon<span class="token punctuation">,</span>ename<span class="token punctuation">,</span>sal
<span class="token keyword">from</span> emp
<span class="token keyword">where</span> rownum<span class="token operator">&lt;=</span><span class="token number">3</span>
<span class="token keyword">order</span> <span class="token keyword">by</span> sal <span class="token keyword">desc</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>sql执行之后发现结果并不是我们想要的，这是因为行号是默认生成的，并不会因为排序而改变。</p>
</CodeGroupItem>
<CodeGroupItem title="正确写法">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment">-- 找到员工表中工资最高的前三名,在子查询中进行排序之后在取行号</span>
<span class="token keyword">select</span> rownum<span class="token punctuation">,</span>empon<span class="token punctuation">,</span>ename<span class="token punctuation">,</span>sal
<span class="token keyword">from</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token operator">*</span> form emp oreder <span class="token keyword">by</span> sal <span class="token keyword">desc</span><span class="token punctuation">)</span>
<span class="token keyword">where</span> rownum<span class="token operator">&lt;=</span><span class="token number">3</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>这时发现结果是我们想要的效果，这是因为from后面的子查询被看作是一张新的表，他是已经根据工资降序排列好的，所以他的行号前三对应的数据就是我们想要的数据。</p>
</CodeGroupItem>
</CodeGroup>
<h2 id="问题八-子查询的执行顺序" tabindex="-1"><a class="header-anchor" href="#问题八-子查询的执行顺序" aria-hidden="true">#</a> 问题八：子查询的执行顺序</h2>
<p>一般先执行主查询在执行子查询，但相关子查询例外。</p>
<CodeGroup>
<CodeGroupItem title="相关子查询">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>相关子查询的执行依赖于外部查询。多数情况下是子查询的WHERE子句中引用了外部查询的表。
执行过程：
    1. 从外层查询中取出一个元组，将元组相关列的值传给内层查询。
    2. 执行内层查询，得到子查询操作的值。
    3. 外查询根据子查询返回的结果或结果集得到满足条件的行。
    4. 然后外层查询取出下一个元组重复做步骤1-3，直到外层的元组全部处理完毕。
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>1.返回单值：查询所有价格高于平均价格的图书名，作者，出版社和价格。</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SElECT</span> 图书名，作者，出版社，价格
<span class="token keyword">FROM</span> Books
<span class="token keyword">WHERE</span> 价格 <span class="token operator">></span>
<span class="token punctuation">(</span>
<span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>价格<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> Books
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>2.返回值列表–查询所有借阅图书的读者信息</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SElECT</span> <span class="token operator">*</span>
<span class="token keyword">FROM</span> Readers
<span class="token keyword">WHERE</span> 读者编号 <span class="token operator">IN</span>
<span class="token punctuation">(</span>
<span class="token keyword">SELECT</span> 读者编号
<span class="token keyword">FROM</span> <span class="token punctuation">[</span>Borrow History<span class="token punctuation">]</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="非相关子查询">
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>非相关子查询的执行不依赖与外部的查询。
执行过程：
    1. 执行子查询，其结果不被显示，而是传递给外部查询，作为外部查询的条件使用。
    2. 执行外部查询，并显示整个结果。　　
非相关子查询一般可以分为：返回单值的子查询和返回一个列表的子查询
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>查询Booka表中大于该类图书价格平均值的图书信息SElECT 图书名,出版社,类编号,价格</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">FROM</span> Books <span class="token keyword">As</span> a
<span class="token keyword">WHERE</span> 价格 <span class="token operator">></span>
<span class="token punctuation">(</span>
<span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>价格<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> Books <span class="token keyword">AS</span> b
<span class="token keyword">WHERE</span> a<span class="token punctuation">.</span>类编号<span class="token operator">=</span>b<span class="token punctuation">.</span>类编号
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></CodeGroupItem>
</CodeGroup>
<div class="custom-container tip"><p class="custom-container-title">总结</p>
<ul>
<li>非相关子查询是独立于外部查询的子查询，子查询总共执行一次，执行完毕后将值传递给外部查询。</li>
<li>相关子查询的执行依赖于外部查询的数据，外部查询执行一行，子查询就执行一次。</li>
<li>故非相关子查询比相关子查询效率高。</li>
</ul>
</div>
<h2 id="问题九-单行子查询与多行子查询的区别" tabindex="-1"><a class="header-anchor" href="#问题九-单行子查询与多行子查询的区别" aria-hidden="true">#</a> 问题九：单行子查询与多行子查询的区别</h2>
<p>见名知意，单行子查询就是只返回一条数据的子查询，多行子查询就是返回多行数据的子查询。</p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>在单行子查询中使用单行运算符，在多行子查询中用多行运算符。</p>
<ul>
<li>单行运算符：子查询结果只有一个：&lt; &gt; = &lt;= &gt;= !=</li>
<li>多行子查询：子查询结果是单列多行：in ， any，all</li>
<li>多列子查询：子查询为多列，一定要在FROM后作为表，且一定要取别名，否则无法访问这张表中的字段。</li>
</ul>
</div>
<h2 id="问题十-子查询中的null值问题" tabindex="-1"><a class="header-anchor" href="#问题十-子查询中的null值问题" aria-hidden="true">#</a> 问题十：子查询中的null值问题</h2>
<p>x为外部查询结果 a b c ..... null 是子查询中结果</p>
<ol>
<li>in 子查询的逻辑关系</li>
</ol>
<blockquote>
<p>X == a  or  X == b  or  x == c .....  or  x == null</p>
</blockquote>
<p>任何值和null比较结果NULL, 由于是OR语句只要一个为真结果就为真， 所以只看前半部分 null值忽略</p>
<ol start="2">
<li>not in 子查询的逻辑关系</li>
</ol>
<blockquote>
<p>X != a  and  X != b  and  x != c .....  and  x != null</p>
</blockquote>
<p>同理任何值和null比较结果NULL, 由于是and语句短路原理，只要一个为假结果为假， 所以结果必为 NULL/FALSE</p>
<div class="custom-container tip"><p class="custom-container-title">结论</p>
<p>由此可见在in 子查询结果列表中含有null值时,不影响正常比较。</p>
<p>而在not in 子查询结果列表中 含有null值时,必然返回空,就算有项目符合前面所有结果。</p>
</div>
</template>
