export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"J a v a\",\"description\":\"别睡着了，这不是尽头。\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"logo.png\"}]],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"J a v a\",\"description\":\"别睡着了，这不是尽头。\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  __VUE_HMR_RUNTIME__.updateSiteData?.(siteData)
}

if (import.meta.hot) {
  import.meta.hot.accept((m) => {
    __VUE_HMR_RUNTIME__.updateSiteData?.(m.siteData)
  })
}
