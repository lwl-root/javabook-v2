module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: 'Java笔记',
    description: 'I LOVE CHINA',
    dest: './dist',
    port: '4950',
    head: [
        [
            'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
            {rel: 'icon', href: 'logo.png'}
        ]
    ],
    markdown: {
        lineNumbers: true
    },
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'logo.png',
        contributors: false,
        sidebarDepth: 1,
        lastUpdated: 'Last Updated',
        navbar: require("./nav.js"),
        sidebar: require("./sidebar.js"),


    },

    plugins: [
        [
            '@vuepress/plugin-search',
            {
                maxSuggestions: 22,
            },
        ],
    ],
}