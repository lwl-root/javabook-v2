<template><h1 id="sql-优化" tabindex="-1"><a class="header-anchor" href="#sql-优化" aria-hidden="true">#</a> SQL 优化</h1>
<ul>
<li>使用『刚好』合适的数据类型。</li>
<li>绝不查询比需求多的数据。换句话说，不要使用 <code>SELECT * FROM ...</code>（除非是真的需要所有列的数据）。</li>
<li>为常用的查询条件列，建立索引。</li>
<li>如果有一系列复杂的 OR 条件，改用多条 Select 语句，再用 UNION 连接。</li>
<li>非必要情况下，不要使用模糊查询（LIKE），LIKE 很慢。</li>
<li>非必要情况下，不要使用子查询。</li>
<li>将字段多的表拆分成多表。</li>
<li>故意增加冗余字段，减少多表关联查询。</li>
<li>批量插入数据时，暂时禁用索引和唯一性检查。</li>
<li>批量插入数据时，使用 INSERT 语句的简写形式。</li>
<li>搭建 MySQL 主从服务器，实现读-写分离。</li>
</ul>
</template>
