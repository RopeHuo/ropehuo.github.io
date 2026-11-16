# 架构：内容 / 样式 / 逻辑解耦

这个项目的目标不是“把页面写出来”就结束，而是让三个维度可以独立变化：

- **内容**：文案、项目、简历、文章。换设计、换交互时不需要动。
- **样式**：设计变量、组件外观、布局、视觉素材。换整套皮肤时只动这一层。
- **逻辑**：路由、主题、筛选、TOC、滚动、meta。换实现方式时不影响内容和样式。

## 分层

```text
content/                  内容层：纯数据与 Markdown
  types.ts                内容契约（只定义类型）
  site.ts                 身份、联系方式、导航、页脚、SEO 默认值
  home.ts                 首页文案
  projects.ts             项目内容
  resume.ts               简历内容
  blog.ts / notFound.ts   页面文案
  ui.ts                   通用 UI 文案
  posts/*.md              文章正文

src/
  content/                内容访问层：读取、解析、派生
  logic/                  逻辑层：主题、筛选、TOC、滚动、meta、路由适配
  styles/                 样式层：tokens / base / components / prose / print
  ui/                     展示原语：按钮、标签、区块标题、视觉组件
  layout/                 站点外壳：侧栏、移动端导航、页脚
  sections/               组合层：把内容 props 映射成具体页面区块
  pages/                  装配层：读取内容、调用逻辑、渲染 sections
```

## 依赖方向

```text
pages  ──→  sections  ──→  ui
  │                           │
  ├──→  content (data)        └──→  logic (仅 AppLink / theme 等)
  ├──→  logic
  └──→  layout (site / labels 由 App 注入)

content  ──→  content/types    （不依赖 src）
logic    ──→  content/types    （meta.ts 例外：读取 site 默认值）
```

规则：

1. `content/` 只能 import `content/types` 或其他内容文件；不能出现 React、路由、`className`、浏览器 API。
2. `src/ui/` 只接收 props；不能读取内容数据、页面、section 或 layout。
3. `src/sections/` 只通过 props 接收内容；运行时不能 import `content/` 或 `src/content/`（类型可以）。
4. `src/layout/` 的站点数据由 `App` 注入；不能直接读取内容。
5. `src/logic/` 不写 JSX、不写样式，也不依赖展示层。
6. `src/pages/` 是唯一的装配层，可以同时读取内容、逻辑和区块。

## 三种常见改动

### 只改内容

只动 `content/`。

- 改首页文案：`content/home.ts`
- 改项目：`content/projects.ts`
- 改简历：`content/resume.ts`
- 加文章：`content/posts/*.md`
- 改导航 / 联系方式 / 页脚：`content/site.ts`

### 换样式 / 重做设计

按需替换：

- `src/styles/`：颜色、字体、间距、组件类、文章排版、打印样式
- `src/ui/`：按钮、标签、标题、视觉组件
- `src/sections/`：页面区块的具体结构
- `src/layout/`：侧栏、移动端导航、页脚

`content/` 和 `src/logic/` 不需要动。

### 换逻辑 / 换路由

主要动 `src/logic/`：

- 路由适配：`AppLink.tsx`（全站唯一直接依赖 react-router 的渲染入口）
- 筛选：`useProjectFilter.ts`
- TOC / 滚动：`useToc.ts`、`useHashScroll.ts`、`useRouteScroll.ts`
- 主题：`theme.ts`
- SEO：`meta.ts`

`content/` 和 `src/styles/` 不需要动。

## 边界检查

```bash
pnpm boundaries
```

脚本会检查：

- 内容层是否引入了 React / 样式 / 外部代码
- UI 是否直接读取内容数据
- Section / Layout 是否绕过 props 读取内容
- Logic 是否反向依赖展示层

`pnpm build` 会先跑边界检查，再跑类型检查和构建。

## 已知例外

- `src/logic/meta.ts` 读取 `content/site.ts` 的默认 title / description / URL，用于全站 SEO 兜底。
- 内容里的站内链接使用稳定的路径字符串（如 `/projects`）。如果未来路由结构变化，需要同步 `content/` 中的链接；也可以把路径改成路由 key，但会牺牲内容的可读性，当前没有采用。
- `src/ui/ProjectVisual.tsx` 里有一份“项目 → 视觉主题”的映射。它属于设计决策，放在样式层，不放进内容。
