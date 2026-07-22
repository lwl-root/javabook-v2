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
        right: max(24px, env(safe-area-inset-right));
        bottom: max(24px, env(safe-area-inset-bottom));
        z-index: 50;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 7px;
        min-height: 42px;
        padding: 0 16px;
        border: 1px solid var(--c-brand, #3eaf7c);
        border-radius: 6px;
        background: var(--c-brand, #3eaf7c);
        color: #fff;
        font-size: 14px;
        font-weight: 600;
        line-height: 1;
        text-decoration: none;
        box-shadow: 0 4px 14px rgb(0 0 0 / 18%);
        transition: transform 160ms ease, box-shadow 160ms ease, filter 160ms ease;
      }

      .edit-article-button:hover {
        color: #fff;
        text-decoration: none;
        transform: translateY(-2px);
        filter: brightness(1.06);
        box-shadow: 0 7px 18px rgb(0 0 0 / 24%);
      }

      .edit-article-button:focus-visible {
        outline: 3px solid rgb(62 175 124 / 35%);
        outline-offset: 3px;
      }

      @media (max-width: 719px) {
        .edit-article-button {
          right: max(16px, env(safe-area-inset-right));
          bottom: max(16px, env(safe-area-inset-bottom));
          min-width: 42px;
          padding: 0 11px;
        }

        .edit-article-button span {
          display: none;
        }
      }
    `
    document.head.appendChild(style)
    app.config.globalProperties.$editArticleButtonStyle = style
  },
  rootComponents: [EditArticleButton],
})
