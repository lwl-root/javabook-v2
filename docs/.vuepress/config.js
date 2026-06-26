import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'J a v a',
  description: '别睡着了，这不是尽头。',
  base: '/javabook-v2/',
  dest: 'docs/.vuepress/dist',
  port: '4950',
  head: [
    ['link', { rel: 'icon', href: 'logo.png' }],
  ],

  bundler: viteBundler(),

  markdown: {
    html: false,
  },

  theme: defaultTheme({
    logo: 'logo.png',
    contributors: false,
    sidebarDepth: 1,
    lastUpdated: false,
    navbar: require("./nav.js"),
    sidebar: require("./sidebar.js"),
  }),

  plugins: [
    searchPlugin({
      maxSuggestions: 21,
    }),
  ],
})
