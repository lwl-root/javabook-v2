import fs from 'node:fs'
import path from 'node:path'

const normalizeLink = (link) =>
  link.replace(/\\/g, '/').replace(/\.md$/i, '').toLocaleLowerCase()

const collectLinks = (items, links = new Set()) => {
  for (const item of items) {
    if (item.link && !item.link.endsWith('/notes/.md')) {
      links.add(normalizeLink(item.link))
    }
    if (Array.isArray(item.children)) {
      collectLinks(item.children, links)
    }
  }
  return links
}

const readTitle = (filePath, fallback) => {
  const content = fs.readFileSync(filePath, 'utf8')
  const frontmatter = content.match(/^---\s*\r?\n([\s\S]*?)\r?\n---/)

  if (frontmatter) {
    const title = frontmatter[1].match(/^title:\s*(.+?)\s*$/m)
    if (title) {
      return title[1].replace(/^['"]|['"]$/g, '')
    }
  }

  const heading = content.match(/^#\s+(.+?)\s*$/m)
  return heading ? heading[1] : fallback
}

/** Add Markdown files that are not already present in a module's static menu. */
export default (route, sidebar) => {
  const notesDir = path.resolve(process.cwd(), 'docs', `.${route}`, 'notes')
  if (!fs.existsSync(notesDir)) return sidebar

  const existingLinks = collectLinks(sidebar)
  const articles = fs.readdirSync(notesDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith('.md'))
    .map((entry) => {
      const filename = entry.name.slice(0, -3)
      const link = `${route}/notes/${entry.name}`
      return {
        text: readTitle(path.join(notesDir, entry.name), filename),
        link,
      }
    })
    .filter((article) => !existingLinks.has(normalizeLink(article.link)))
    .sort((a, b) => a.text.localeCompare(b.text, 'zh-CN'))

  if (articles.length === 0) return sidebar

  const targetIndex = sidebar.findLastIndex((item) => Array.isArray(item.children))
  if (targetIndex === -1) return sidebar

  return sidebar.map((item, index) => index === targetIndex
    ? { ...item, children: [...item.children, ...articles] }
    : item)
}
