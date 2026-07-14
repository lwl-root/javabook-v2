import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import navbar from './nav.js'
import sidebar from './sidebar.js'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'J a v a',
  description: '别睡着了，这不是尽头。',
  base: '/',
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
    navbar,
    sidebar,
  }),

  plugins: [
    searchPlugin({
      maxSuggestions: 21,
    }),
  ],
})
