module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: 'J a v a',
    description: '富强、民主、文明、和谐、自由、平等、公正、法治、爱国、敬业、诚信、友善',
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