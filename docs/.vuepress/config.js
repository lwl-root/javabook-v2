module.exports = {
	title: 'Java笔记',
	description: 'I LOVE CHINA',
	dest: './dist',
	port: '4950',
	head: [
		['link',{rel: 'icon', href: '/hero.jpg'}],
		[
            'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
            { rel: 'icon', href: 'logo.png' }
        ]
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
		music: 'http://music.163.com/#/song?id=1415663223',
	},
}