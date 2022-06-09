module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: 'Java笔记',
    description: '人民要有信仰，国家才有力量！',
    dest: './dist',
    port: '4950',
    head: [
        [
            'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
            {rel: 'icon', href: 'logo.png'}
        ],
        [
            'script', {}, `
            var _hmt = _hmt || [];
            (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?f1bb2cadd6233359a7e375f48570aab5";
                var s = document.getElementsByTagName("script")[0]; 
                s.parentNode.insertBefore(hm, s);
            })();
        `],
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
                maxSuggestions: 21,
            },
        ],
    ],
}