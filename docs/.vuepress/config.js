module.exports = {
	title: 'Java笔记',
	description: 'I LOVE CHINA',
	dest: './dist',
	port: '7000',
	head: [
		['link',{rel: 'icon', href: '/hero.jpg'}]
		],
	markdown: {
		lineNumbers: true
	},
	themeConfig: {
		nav: require("./nav.js"),
		sidebar: require("./sidebar.js"),
		sidebarDepth: 1,
		lastUpdated: 'Last Updated',
		searchMaxSuggestoins: 10,
		
	},
}