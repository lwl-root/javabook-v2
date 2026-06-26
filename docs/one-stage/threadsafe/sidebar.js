module.exports = [
	{
		text:'基础',
		collapsible: false,
		link:'/one-stage/threadsafe/notes/a01.线程安全.md',
		children:[
			{text:'线程安全', link:'/one-stage/threadsafe/notes/a01.线程安全.md'},
			{text:'ThreadLocal', link:'/one-stage/threadsafe/notes/a02.ThreadLocal.md'},
			{text:'synchronized', link:'/one-stage/threadsafe/notes/a04.synchronized.md'},
			{text:'ReentrantLock', link:'/one-stage/threadsafe/notes/a06.ReentrantLock.md'},
			{text:'', link:'/one-stage/threadsafe/notes/.md'},
		]
	},
	{
		text:'进阶',
		collapsible: false,
		link:'/one-stage/threadsafe/notes/b00.condition.md',
		children:[
			{text:'Condition', link:'/one-stage/threadsafe/notes/b00.condition.md'},
			{text:'Semaphore', link:'/one-stage/threadsafe/notes/b02.semaphore.md'},
			{text:'', link:'/one-stage/threadsafe/notes/.md'},
		]
	},
	{
		text:'高级',
		collapsible: false,
		link:'/one-stage/threadsafe/notes/c00.atomic.md',
		children:[
			{text:'Atomic', link:'/one-stage/threadsafe/notes/c00.atomic.md'},
			{text:'CAS', link:'/one-stage/threadsafe/notes/c02.CAS.md'},
			{text:'', link:'/one-stage/threadsafe/notes/.md'},
		]
	},
]