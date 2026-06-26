module.exports = [
	{
		text: 'MyBatis 基础',
		collapsible: false,
		children: [
			{ text: '关于 MyBatis', link: '/three-stage/mybatis/notes/01.关于mybatis.md' },
			{ text: '基本概念', link: '/three-stage/mybatis/notes/01.基本概念.md' },
			{ text: '执行 SQL 语句', link: '/three-stage/mybatis/notes/01.执行SQL语句.md' },
			{ text: 'SqlSession 线程安全', link: '/three-stage/mybatis/notes/01.SqlSession线程安全问题.md' },
		]
	},
	{
		text: 'MyBatis 进阶',
		collapsible: false,
		children: [
			{ text: '动态 SQL', link: '/three-stage/mybatis/notes/02.动态SQL.md' },
			{ text: '注解的简单使用', link: '/three-stage/mybatis/notes/02.注解的简单使用.md' },
			{ text: '映射结果集（基本）', link: '/three-stage/mybatis/notes/02.映射结果集（基本）.md' },
			{ text: '两种配置方式', link: '/three-stage/mybatis/notes/02.同用两种配置.md' },
			{ text: '映射结果集（高级）', link: '/three-stage/mybatis/notes/02.映射结果集（高级）.md' },
			{ text: '注解中的结果集映射', link: '/three-stage/mybatis/notes/02.注解中的结果集映射.md' },
			{ text: 'MyBatis 分页', link: '/three-stage/mybatis/notes/02.mybatis分页.md' },
		]
	},
	{
		text: 'MyBatis 高级',
		collapsible: false,
		children: [
			{ text: 'MyBatis Generator', link: '/three-stage/mybatis/notes/03.MyBatis Generator.md' },
			{ text: '延迟加载', link: '/three-stage/mybatis/notes/延迟加载.md' },
			{ text: 'MyBatis 内置缓存', link: '/three-stage/mybatis/notes/MyBatis内置缓存.md' },
			{ text: '个人习惯', link: '/three-stage/mybatis/notes/个人习惯.md' },
		]
	},
]
