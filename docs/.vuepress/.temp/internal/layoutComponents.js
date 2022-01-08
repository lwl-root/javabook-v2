import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("D:/学习/项目/my_book/javaBook/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("D:/学习/项目/my_book/javaBook/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
