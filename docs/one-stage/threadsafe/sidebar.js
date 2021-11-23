module.exports = [
	{
		title:'基础',
		collapsable: false,
		children:[
			'threadsafe/notes/a01.线程安全',
			'threadsafe/notes/a02.ThreadLocal',
			'threadsafe/notes/a04.synchronized',
			'threadsafe/notes/a06.ReentrantLock',
		]
	},
	{
		title:'进阶',
		collapsable: false,
		children:[
			'threadsafe/notes/b00.condition',
			'threadsafe/notes/b02.semaphore',
		]
	},
	{
		title:'高级',
		collapsable: false,
		children:[
			'threadsafe/notes/c00.atomic',
			'threadsafe/notes/c02.CAS',
		]
	},
]