module.exports = [
	{
		text: 'Java 多线程',
		collapsible: false,
		children: [
			{ text: '多进程', link: '/one-stage/javathread/notes/多进程.md' },
			{ text: '多线程', link: '/one-stage/javathread/notes/多线程.md' },
			{ text: 'Thread', link: '/one-stage/javathread/notes/thread.md' },
			{ text: 'Runnable', link: '/one-stage/javathread/notes/runnable.md' },
			{ text: '线程的状态', link: '/one-stage/javathread/notes/线程的状态.md' },
			{ text: '线程的调用', link: '/one-stage/javathread/notes/线程的调用.md' },
			{ text: '锁', link: '/one-stage/javathread/notes/锁.md' },
		]
	},
	{
		text: '线程池',
		collapsible: false,
		children: [
			{ text: '线程池概述', link: '/one-stage/javathread/notes/线程池.md' },
			{ text: 'ThreadPoolExecutor', link: '/one-stage/javathread/notes/ThreadPoolExecutor.md' },
			{ text: 'Executors', link: '/one-stage/javathread/notes/Executors.md' },
		]
	}
]
