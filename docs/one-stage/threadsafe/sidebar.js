module.exports = [
	{
		text:'基础',
		collapsable: false,
		link:'/one-stage/threadsafe/notes/a01.线程安全.html',
		children:[
			'a01.线程安全.html',
			'a02.ThreadLocal.html',
			'a04.synchronized.html',
			'a06.ReentrantLock.html',
		]
	},
	{
		text:'进阶',
		collapsable: false,
		link:'/one-stage/threadsafe/notes/b00.condition.html',
		children:[
			'b00.condition.html',
			'b02.semaphore.html',
		]
	},
	{
		text:'高级',
		collapsable: false,
		link:'/one-stage/threadsafe/notes/c00.atomic.html',
		children:[
			'c00.atomic.html',
			'c02.CAS.html',
		]
	},
]