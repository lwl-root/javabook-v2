<template><h1 id="关于-mybatis" tabindex="-1"><a class="header-anchor" href="#关于-mybatis" aria-hidden="true">#</a> 关于 MyBatis</h1>
<p>『<strong>持久层</strong>』可以将业务数据存储到磁盘，具备长期存储能力，只要磁盘不损坏，即便实在断电情况下，重新开启系统仍然可以读取到这些数据。</p>
<p>『<strong>数据库系统</strong>』是最常见的执行持久化工作的工具。</p>
<p>MyBatis 是一款优秀的持久层框架，它支持定制化 SQL、存储过程以及高级映射。MyBatis 避免了几乎所有的 JDBC 代码和手动设置参数以及获取结果集。MyBatis 可以使用简单的 XML 或注解来配置和映射原生类型、接口和 Java 的 POJO（Plain Old Java Objects，普通老式 Java 对象）为数据库中的记录。</p>
<p>MyBatis 的成功主要有 3 点：</p>
<ul>
<li>不屏蔽 SQL，意味着可以更为精准地定位 SQL 语句，可以对其进行优化和改造。</li>
<li>提供强大、灵活的映射机制，方便 Java 开发者使用。提供了动态动态 SQL 的功能，允许使用者根据不同条件组装 SQL 语句。</li>
<li>在 MyBatis 中，提供了使用 Mapper 的接口编程，进一步简化了使用者的工作，使开发者能集中于业务逻辑，而非 Dao 层的编写。</li>
</ul>
<p>MyBatis 的持久化解决方案将用户从原始的 JDBC 访问中解放出来，用户只需要定义需要操作的 SQL 语句，无须关注底层的 JDBC 操作，就能以面向对象的方式进行持久化层操作。底层数据库连接的获取、数据访问的实现、事务控制等都无须用户关心。</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- mysql 数据库驱动包 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>${mysql.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span> <span class="token comment">&lt;!-- 8.0.21 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- mybatis --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.mybatis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mybatis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>${mybatis.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span> <span class="token comment">&lt;!-- 3.5.1 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></template>
