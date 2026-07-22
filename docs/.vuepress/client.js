import { computed, h } from 'vue'
import { defineClientConfig, useRoute } from 'vuepress/client'

const toCollectionName = (section, module) =>
  `${section}_${module}`.replaceAll('-', '_').toLowerCase()

const getEditUrl = (routePath) => {
  const segments = routePath.split('/').filter(Boolean)
  if (segments.length !== 4 || segments[2] !== 'notes') return null

  const [section, module, , articlePath] = segments
  const articleSlug = decodeURIComponent(articlePath).replace(/\.html$/, '')
  if (!articleSlug) return null

  const collection = toCollectionName(section, module)
  return `/admin/#/collections/${collection}/entries/${encodeURIComponent(articleSlug)}`
}

const EditArticleButton = {
  setup() {
    const route = useRoute()
    const editUrl = computed(() => getEditUrl(route.path))

    return () => editUrl.value
      ? h('a', {
          class: 'edit-article-button',
          href: editUrl.value,
          target: '_blank',
          rel: 'noopener noreferrer',
          title: '编辑此文章',
          'aria-label': '编辑此文章',
        }, [
          h('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            width: 18,
            height: 18,
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            'stroke-width': 2,
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            'aria-hidden': 'true',
          }, [
            h('path', { d: 'M12 20h9' }),
            h('path', { d: 'M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z' }),
          ]),
          h('span', '编辑文章'),
        ])
      : null
  },
}

export default defineClientConfig({
  enhance({ app }) {
    if (typeof document === 'undefined') return

    const style = document.createElement('style')
    style.textContent = `
      .edit-article-button {
        position: fixed;
        right: 1rem;
        bottom: .5rem;
        z-index: 100;
        display: flex;
        box-sizing: border-box;
        width: 48px;
        min-width: 48px;
        height: 48px;
        min-height: 48px;
        align-items: center;
        justify-content: center;
        padding: 12px;
        border: 0;
        border-radius: 50%;
        background: var(--back-to-top-c-bg, var(--vp-c-bg, #fff));
        color: var(--back-to-top-c-accent-bg, var(--vp-c-accent-bg, #3eaf7c));
        text-decoration: none;
        box-shadow: 2px 2px 10px 4px var(--back-to-top-c-shadow, var(--vp-c-shadow, #00000026));
        transition: color .2s ease, transform .2s ease;
      }

      .edit-article-button:hover {
        color: var(--back-to-top-c-accent-hover, var(--vp-c-accent-hover, #4abf8a));
        transform: scale(1.05);
      }

      .edit-article-button:focus-visible {
        outline: 3px solid rgb(62 175 124 / 35%);
        outline-offset: 3px;
      }

      .edit-article-button svg {
        width: 24px;
        height: 24px;
        flex: 0 0 24px;
      }

      .edit-article-button span {
        position: absolute;
        right: 58px;
        white-space: nowrap;
        border-radius: 4px;
        background: rgb(0 0 0 / 75%);
        color: #fff;
        padding: 4px 10px;
        font-size: 13px;
        opacity: 0;
        pointer-events: none;
        transition: opacity .2s ease;
      }

      .edit-article-button:hover span,
      .edit-article-button:focus-visible span {
        opacity: 1;
      }

      @media (max-width: 719px) {
        .edit-article-button {
          right: 1rem;
          bottom: .5rem;
          transform: scale(.8);
          transform-origin: 100% 100%;
        }
      }
    `
    document.head.appendChild(style)
    app.config.globalProperties.$editArticleButtonStyle = style
  },
  rootComponents: [EditArticleButton],
})
