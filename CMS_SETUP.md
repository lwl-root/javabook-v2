# Decap CMS 后台配置指南（零服务器 / 免费 / GitHub 登录）

本项目已集成 [Decap CMS](https://decapcms.org/)，部署在 Vercel 后，你可以通过 `https://你的域名/admin/` 直接进入可视化后台，用 GitHub 账号登录后在线编写、编辑、发布 Markdown 文章，无需本地改文件。

## 一、整体架构

```
浏览器  →  /admin/  (Decap CMS SPA, 静态文件)
   │
   ├─ GitHub OAuth (PKCE)  → 浏览器直接拿 token
   │
   └─ GitHub Content API   → 直接读写 master 分支的 .md 文件
                                 │
                                 └─ Vercel 监听 push → 自动重新构建并部署站点
```

- **零服务器**：CMS 是纯静态 SPA，通过 PKCE 直接和 GitHub 交互，不需要任何后端服务。
- **免费**：Vercel + GitHub + Decap CMS 全部免费额度内可用。
- **GitHub 登录**：使用 GitHub OAuth App 的 PKCE 流程，无需密码、无需 Gateway。

## 二、文件清单（已完成）

| 文件 | 作用 |
| --- | --- |
| `docs/.vuepress/public/admin/index.html` | CMS 入口页面（加载 decap-cms.js） |
| `docs/.vuepress/public/admin/config.yml` | CMS 配置（后端、集合、字段） |
| `vercel.json` | Vercel 构建配置 + `/admin` 路由重写 |
| `CMS_SETUP.md` | 本文档 |

> VuePress 会把 `docs/.vuepress/public/` 下的所有文件原样复制到 `dist/` 根目录，所以 `public/admin/` 会变成 `/admin/`。

## 三、一次性配置：创建 GitHub OAuth App（必须）

Decap CMS 的 PKCE 模式需要一个 GitHub OAuth App 来完成登录。

1. 打开 https://github.com/settings/applications/new （已登录 GitHub 状态下）。
2. 按下表填写：

   | 字段 | 值 |
   | --- | --- |
   | Application name | `javabook-v2 CMS`（随意） |
   | Homepage URL | `https://你的Vercel域名`（例如 `https://javabook-v2.vercel.app`） |
   | Authorization callback URL | `https://你的Vercel域名/admin/` |

3. 创建后，在 OAuth App 详情页找到 **Client ID**（形如 `Iv1.xxxxxxxx`），复制它。
   > 注意：PKCE 模式只需要 Client ID，**不需要** Client Secret。

4. 打开 `docs/.vuepress/public/admin/config.yml`，把 `app_id` 替换成你的 Client ID：

   ```yaml
   backend:
     name: github
     repo: lwl-root/javabook-v2
     branch: master
     auth_type: pkce
     app_id: Iv1.xxxxxxxx   # ← 改成你的 Client ID
   ```

5. 同时确认 `site_url` 改成你的正式域名：

   ```yaml
   site_url: https://javabook-v2.vercel.app
   ```

6. 提交代码并推送到 master，Vercel 会自动重新部署。

## 四、使用后台

1. 部署完成后访问 `https://你的域名/admin/`。
2. 点击「Login with GitHub」，授权后进入后台。
3. 左侧会出现与项目目录结构一一对应的内容集合，例如：
   - 工具库 / Guava
   - Java & MySQL / Java 基础
   - C-Book / Kafka
   - …
4. 点击「New 文章」即可可视化编写：标题 + Markdown 正文，支持粘贴/拖拽图片（自动上传到 `docs/.vuepress/public/images`）。
5. 保存后 CMS 会直接向 master 分支提交 commit，Vercel 监听到 push 后自动重新构建并发布。

## 五、关于编辑工作流（editorial_workflow）

`config.yml` 中启用了 `publish_mode: editorial_workflow`，这意味着：

- 草稿保存在独立的 `draft` 分支/草稿状态，不会立刻发布到线上。
- 你可以先保存草稿 → 预览 → 审核 → 发布，再合并进 master。

如果你希望「保存即发布」，可以把 `publish_mode: editorial_workflow` 这一行删掉。

## 六、把文章加入侧边栏（重要）

Decap CMS 只负责创建/编辑 `.md` 文件本身。VuePress 的侧边栏（`sidebar.js`）是手动维护的，新文章默认不会自动出现在侧边栏里。

两种方案：

1. **手动维护（当前模式）**：在 CMS 里写完文章后，顺手编辑对应模块的 `sidebar.js`，加一行 `{text:'标题', link:'/.../文件名.md'}`。CMS 也可以直接编辑这些 js 文件（见下方「七」）。
2. **自动生成（可选进阶）**：后续可以写一个脚本或 VuePress 插件，扫描 `notes/` 目录自动生成 sidebar，彻底免维护。

## 七、（可选）让 CMS 也能编辑 sidebar.js / nav.js

如果你想在 CMS 里直接编辑侧边栏配置，可以在 `config.yml` 的 `collections:` 末尾追加一个「文件集合」：

```yaml
  - name: config
    label: "站点配置"
    files:
      - label: "导航栏 nav.js"
        name: nav
        file: docs/.vuepress/nav.js
        fields:
          - { label: "内容", name: body, widget: text }
      - label: "侧边栏总入口 sidebar.js"
        name: sidebar
        file: docs/.vuepress/sidebar.js
        fields:
          - { label: "内容", name: body, widget: text }
```

> 用 `text` widget 直接编辑 js 源码，简单粗暴但有效。更优雅的做法是用 `list`/`object` widget 结构化编辑，但配置较复杂，按需添加。

## 八、常见问题

**Q: 登录后报「Error: Not Found」？**
A: 检查 `config.yml` 里的 `repo` 是否正确（应为 `lwl-root/javabook-v2`），以及你的账号对该仓库有写权限。

**Q: 回调跳转回来变成白屏？**
A: 99% 是 OAuth App 的 **Authorization callback URL** 没填对，必须严格是 `https://你的域名/admin/`（带末尾斜杠）。

**Q: 图片上传失败？**
A: 确认 `media_folder` 路径 `docs/.vuepress/public/images` 在仓库里存在（可在本地建一个空 `.gitkeep` 提交一次）。

**Q: 本地预览后台？**
A: `npm run docs:dev` 后访问 `http://localhost:4950/admin/` 即可，但 PKCE 登录需要线上域名，所以登录请在 Vercel 部署后进行。

**Q: Vercel 上访问 /admin/ 报「Failed to load config.yml (404)」？**
A: 这是 Vercel 的 `cleanUrls` 功能去掉末尾斜杠，导致 CMS 相对路径解析错误。本项目已通过两层修复解决：
1. `index.html` 中加了 `<base href="/admin/" />`，强制浏览器以 `/admin/` 为基准解析 `config.yml`。
2. `vercel.json` 用 `redirects` 把 `/admin` 重定向到 `/admin/`（而不是用 `cleanUrls`）。
   如果你之前在 Vercel 控制台手动开了 cleanUrls 或改过路由，请以 `vercel.json` 为准，删除冲突配置后重新部署。
