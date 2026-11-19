# ropehuo.github.io

RopeHuo 的个人网站源码。纯静态前端，构建后部署在 GitHub Pages：

- 线上地址：<https://ropehuo.github.io>
- 技术栈：Vite + React 19 + TypeScript + Tailwind CSS v4 + React Router
- 视觉：RopeHuo / Strand v1.0——暖纸色、信号橙、无衬线标题 + 等宽标注、绳结线稿；跨项目规范在工作区 `../brand/`
- 博客：Markdown 文件 + frontmatter，构建时由 `import.meta.glob` 直接读取
- 部署：GitHub Actions 构建并上传 `dist/`，路由回退由 `dist/404.html` 处理

## 结构：内容 / 样式 / 逻辑解耦

详细规则见 [ARCHITECTURE.md](./ARCHITECTURE.md)。一句话版本：

- **内容**只放在 `content/`，不依赖 React、Tailwind、路由
- **样式**集中在 `src/styles/`、`src/ui/`、`src/sections/`、`src/layout/`，可以整体替换
- **逻辑**放在 `src/logic/`，不写 JSX 和样式
- **页面**只放在 `src/pages/` 做装配

## 本地开发

需要 Node 20.19+（推荐 22，仓库里有 `.nvmrc`）：

```bash
nvm use
pnpm install
pnpm dev          # http://localhost:5173
pnpm build        # 先做边界检查 + 类型检查，再构建到 dist/
pnpm preview      # 预览构建产物
pnpm typecheck    # 只做类型检查
pnpm boundaries   # 检查内容 / 样式 / 逻辑的依赖边界
```

## 目录结构

```text
content/                 # 内容层：文案、项目、简历、文章，不依赖代码
  types.ts               # 内容契约
  site.ts                # 身份、联系方式、导航、页脚、SEO
  home.ts                # 首页文案
  projects.ts            # 项目内容
  resume.ts              # 简历内容
  blog.ts                # 博客页文案
  brand.ts               # 品牌页文案
  notFound.ts            # 404 文案
  ui.ts                  # 通用 UI 文案
  posts/                 # 博客文章（Markdown）

src/
  content/               # 内容访问：读取、解析、查询
  logic/                 # 逻辑：主题、筛选、TOC、滚动、meta、路由适配
  styles/                # 样式：tokens / base / components / prose / print
  ui/                    # 展示原语：按钮、标签、标题、视觉组件
  layout/                # 站点外壳：顶部导航、页脚
  sections/              # 组合层：把内容 props 映射成页面区块（含 brand/）
  pages/                 # 装配层：读取内容、调用逻辑、渲染 sections

public/                  # favicon、分享图、robots.txt
scripts/                 # 边界检查、构建后处理
.github/workflows/       # Pages 部署流水线
```

## 改内容

### 写一篇新文章

在 `content/posts/` 下新建 Markdown 文件，文件名就是 URL（`my-post.md` → `/blog/my-post`）：

```markdown
---
title: 文章标题
date: 2026-11-16
summary: 列表页和文章页显示的一句话摘要。
tags: [前端, 工程化]
---

正文从这里开始，支持 GFM（表格、任务列表、代码块）。
```

保存后列表、文章页、sitemap 都会自动更新，不需要改路由。

### 改项目 / 简历 / 首页

- 首页文案：`content/home.ts`
- 项目卡片与详情：`content/projects.ts`。详情按「两端 / 结 / 承重 / 点亮」四段写在每个项目的 `detail` 字段里，模板是 `src/sections/projects/ProjectPage.tsx`
- 简历内容、技能、工作经历：`content/resume.ts`
- 站点名称、邮箱、社交链接、导航、页脚：`content/site.ts`
- 博客 / 404 文案：`content/blog.ts`、`content/notFound.ts`

这些文件都是纯数据，不包含组件和样式。改完内容不需要碰 `src/`。

## 设计系统 / Strand

站点使用 **RopeHuo / Strand v1.0**：暖纸 + 墨 + 信号橙，无衬线大标题 + 等宽标注，绳结线稿代替假终端窗口。线上说明书在 `/brand`。

- 规范、色板、字体、组件与跨项目用法：工作区 `../brand/README.md`
- Token 源：工作区 `../brand/tokens.css`；本站 vendored 到 `src/styles/tokens.css`
- 标志源：工作区 `../brand/logo.svg`、`../brand/mark.svg`
- 改 token 时同步 `../qagent/styles.css`，并更新 `brand/README.md` 的版本号

## 换样式 / 换逻辑

### 换样式

- 设计变量（背景、文字、边框、强调色、字体栈）：`src/styles/tokens.css`
- 全局与组件样式：`src/styles/base.css`、`components.css`、`prose.css`、`print.css`
- 按钮、标签、区块标题等原语：`src/ui/`
- 页面区块结构与布局：`src/sections/`、`src/layout/`

如果要做一版完全不同的视觉，替换 `src/styles` + `src/ui` + `src/sections` + `src/layout` 即可，`content/` 和 `src/logic/` 不需要动。

分享图是 `public/og.png`（1200×630），改完姓名或定位后可以直接替换同名文件。

### 换逻辑

- 路由适配：`src/logic/AppLink.tsx`（全站唯一直接依赖 react-router 的渲染入口）
- 筛选：`src/logic/useProjectFilter.ts`
- 目录 / 滚动：`src/logic/useToc.ts`、`useHashScroll.ts`、`useRouteScroll.ts`
- 主题：`src/logic/theme.ts`
- SEO：`src/logic/meta.ts`

## 部署到 GitHub Pages

仓库只有 `main` 一个分支；GitHub Pages 使用 **GitHub Actions** 发布，不再维护 `master` / `gh-pages` 部署分支。

首次配置：

1. 在 GitHub 新建仓库，**仓库名必须是 `ropehuo.github.io`**（用户站，部署在根域名）。
2. 关联并推送源码：

   ```bash
   git remote add origin git@github.com:RopeHuo/ropehuo.github.io.git
   git push -u origin main
   ```

3. 打开仓库 **Settings → Pages**，Source 选择 **GitHub Actions**。
4. 之后每次 push 到 `main`，`.github/workflows/deploy.yml` 会构建 `dist/` 并直接发布；不需要提交 `dist/`，也不用手动切分支。

工作流还会把 private `qagent` 的落地页聚合到 `/qagent/`：

- 需要仓库 secret `QAGENT_PROOF_TOKEN`（读取 private `qagent`；secret 名沿用历史命名）。
- `qagent` 自己的 Pages 必须保持关闭，否则会遮蔽主站聚合页。
- `qagent` 更新页面文件时，通过 `repository_dispatch` 触发本站重建。
- 聚合失败时会发布 fallback 页面，主站仍会正常部署。

## 几个说明

- 工作区根目录 `../resume/` 是另一个独立的 git 仓库（个人简历源文件），不在本站点仓库内；不要把其中的信息复制到站点。
- 站点部署在根域名，所以 `vite.config.ts` 的 `base` 保持默认 `'/'`。如果以后改放到项目站（`/<repo>/`），需要同时设置 `base` 和 `BrowserRouter` 的 `basename`。
- 站内路由是 SPA，`pnpm build` 会把 `index.html` 复制成 `404.html`；直接用 `file://` 打开 `dist/index.html` 不能正常跳转，请用 `pnpm preview`。
- 因为走的是 404.html 回退，深链接由浏览器端渲染，GitHub Pages 会返回 404 状态码（页面内容正常）。如果以后更在意 SEO 和分享预览，可以再加一层构建期预渲染。
- 简历页支持浏览器打印样式，Cmd + P 可直接存成 PDF。
