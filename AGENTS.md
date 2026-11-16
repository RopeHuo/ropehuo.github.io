# AGENTS.md

RopeHuo 个人网站（ropehuo.github.io）：Vite 8 + React 19 + TS + Tailwind v4 的纯静态 SPA，构建后由 GitHub Actions 部署到 GitHub Pages。用户已授权对本目录全部内容的完全掌控，可直接修改，无需逐项确认。

## 命令

- 包管理器是 pnpm；Node 用 `.nvmrc`（22，engines 要求 >=20.19）。本机 shell 默认 Node 可能是 18，跑 dev/build 前先 `nvm use`。
- `pnpm build` 依次执行：边界检查 → `tsc --noEmit` → `vite build` → postbuild（生成 `dist/404.html` 和 `dist/sitemap.xml`）。任何一步失败即整体失败。
- 没有测试框架、没有 lint/formatter。验证改动用 `pnpm boundaries && pnpm typecheck`，完整验证用 `pnpm build`。
- 预览构建产物用 `pnpm preview`；`file://` 打开 dist/index.html 无法正常路由。
- push 到 `main` 自动触发 `.github/workflows/deploy.yml`（pnpm 9 + Node 22，frozen lockfile）。不要提交 `dist/`。

## 分层边界（由 scripts/check-boundaries.mjs 强制执行，规则详见 ARCHITECTURE.md）

- `content/` 是纯数据：禁止外部包 import、禁止 import `src/`、禁止出现 `className`。
- `src/ui|sections|layout` 的内容只能走 props：禁止运行时 import `content/`，`import type` 允许。注意检查脚本只识别 `import type { X }` 写法，内联 `import { type X }` 会被当成运行时 import 而报错。
- `src/logic/` 禁止依赖展示层（ui/sections/layout/pages/styles）。已知例外：`logic/meta.ts` 读取 `content/site.ts` 的 SEO 默认值。
- `src/pages/` 是唯一装配层。路由表在 `src/App.tsx`，路径常量在 `src/logic/routes.ts`，链接渲染统一走 `src/logic/AppLink.tsx`（换路由方案只改这几处）。
- **注意：** 边界检查只扫描 `content/**/*.{ts,tsx}` 与 `src/**/*.{ts,tsx}`；文章 Markdown 不参与 import 检查。

## 博客文章

- 在 `content/posts/` 新建 `.md`，文件名即 slug（`my-post.md` → `/blog/my-post`）。`import.meta.glob` eager + `?raw` 在构建期打包，无需注册路由；sitemap 由 postbuild 自动生成。
- frontmatter 由 `src/content/posts.ts` 的简易逐行解析器处理（不是 YAML 库）：`title`、`date` 必填（缺失直接 throw），每个字段占一行，`tags` 用行内 `[a, b]`；不支持多行 YAML 值。

## 隐私与脱敏

- 对外身份只使用 **RopeHuo**，不得出现真实姓名。
- 不公开任职企业名称、客户/合作方名称、内部项目/系统名、内部字段名、精确业务指标。
- 教育只保留专业 + 学历（不写学校、证书）；工作时间只到年。
- 根目录 `resume/` 是私有仓库，不发布；不要把其中的信息复制到站点。
- 文章 slug、项目 slug 也不要包含内部项目名。

## 样式与类型

- Tailwind v4 走 `@tailwindcss/vite` 插件，没有 tailwind.config；设计变量在 `src/styles/tokens.css`（`@theme inline` + CSS 变量，暗色是 `.dark` class 的 custom variant）。
- tsconfig `include` 只有 `src` 和 `vite.config.ts`：`content/` 靠被 import 间接检查，`scripts/*.mjs` 不做类型检查。
- `verbatimModuleSyntax` 开启：类型导入必须写 `import type`；strict + noUnusedLocals/Parameters。

## 部署与目录注意

- 用户站部署在根域名，vite `base` 保持 `'/'`。若改项目站，需同时改 `base` 和 `BrowserRouter` 的 `basename`（src/main.tsx）。
- SPA 深链接靠 404.html 回退，GitHub Pages 会返回 404 状态码但页面内容正常，这是预期行为。
- 根目录 `resume/` 是另一个独立 git 仓库（个人简历源文件），被 `/resume/` 忽略；不要改动或提交它，也不要与 `src/sections/resume/` 混淆。
- 改文案/项目/简历只动 `content/*.ts`，不碰 `src/`；换视觉只动 `src/styles|ui|sections|layout`。