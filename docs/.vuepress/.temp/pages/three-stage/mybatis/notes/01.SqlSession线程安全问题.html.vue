<template><h1 id="sqlsession-线程安全问题" tabindex="-1"><a class="header-anchor" href="#sqlsession-线程安全问题" aria-hidden="true">#</a> SqlSession 线程安全问题</h1>
<p>当你翻看 <strong>SqlSession</strong> 的源码时，你会发现它只是一个接口。我们通过 MyBatis 操作数据库，实际上就是通过 SqlSession 获取一个 JDBC 链接，然后操作数据库。</p>
<p>SqlSession 接口有 3 个实现类：</p>
<ul>
<li>DefaultSqlSession；</li>
<li>SqlSessionManager；</li>
<li>SqlSessionTemplate（在 mybatis-spring 包中）。</li>
</ul>
<p>其中</p>
<ul>
<li>DefaultSqlSession 的注释中很直接地标识：<code>Note that this class is not Thread-Safe.</code> 。</li>
<li>SqlSessionManager 最终用到的也是 SqlSession，它也是非线程安全的。</li>
<li>SqlSessionTemplate 倒是线程安全的，但是它在 mybatis-spring 包中，是用在 mybatis 和 spring 整合中的，我们暂时又用不上。</li>
</ul>
<p>因此，<strong>SqlSession 不应该是单例的</strong>，于此同时，依赖于 session 的 Mapper 要么也应该是多例的，要么就要用上 ThreadLocal ！</p>
</template>
