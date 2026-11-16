import type { ProjectsContent } from './types'

export const projectsContent: ProjectsContent = {
  meta: {
    title: '项目',
    description: 'RopeHuo 的项目与作品：AI Agent、AIGC、微前端、多端与工程化实践。',
  },
  header: {
    index: '[1]',
    label: 'selected work',
    title: '项目 / Projects',
    intro:
      '从前端业务到工程底座，再到这两年的 AI Agent。只保留可以公开描述的架构思路；客户、内部系统与业务细节已做泛化。',
  },
  filters: [
    { key: 'all', label: '全部' },
    { key: 'ai', label: 'AI 应用' },
    { key: 'arch', label: '架构 / 工程化' },
    { key: 'multi', label: '多端' },
  ],
  note: '* 上述项目均为团队成果，这里只记录我负责的部分与其中的设计取舍；业务与客户信息已做泛化。',
  actions: {
    experience: '查看经历',
    post: '阅读记录',
  },
  items: [
    {
      slug: 'qa-agent',
      title: '全平台通用测试智能体',
      role: '主导',
      period: '2026',
      category: 'ai',
      postSlug: 'qa-agent-skill-mcp',
      featured: true,
      summary:
        '面向研发自测的 QA Agent，以 Agent Skill + MCP Server 的形态接入多类 AI 编码宿主。',
      highlights: [
        '重 Skill、轻 MCP：测试判断留在 Skill 层交给模型，MCP 只保留点击、填表、截图、跑 spec 等机械动作。',
        '稳定骨架 + 能力插件：骨架只声明少量挂载点，红线、外部上下文、报告归档等能力各自独立，新增能力骨架零改动。',
        '按源码生成可回归用例、页面盲探、新老页面对照，建会话前自动判定模式。',
      ],
      stack: ['Agent Skill', 'MCP', 'TypeScript', 'Playwright'],
    },
    {
      slug: 'ai-dev-assistant',
      title: 'AI 开发助手',
      role: '核心开发',
      period: '2026',
      category: 'ai',
      featured: true,
      summary:
        '面向开发者的对话式助手，覆盖提问、方案确认、生成代码到提交工单的完整链路。',
      highlights: [
        '按卡片类型动态挂载异步组件，打通方案选择、代码生成、任务进度与工单等卡片。',
        '长任务状态机：生成锁定、失败与停止等分支统一处理，刷新页面后卡片状态可恢复。',
        '扩展聊天组件库，补充卡片字段与工单 pause 能力，串起「普通消息 → 方案 / 工单 → 普通消息」闭环。',
      ],
      stack: ['React', 'AI Chat', '流式输出', '状态机'],
    },
    {
      slug: 'wecom-aigc',
      title: '企业微信 AIGC',
      role: '核心开发',
      period: '2025 — 2026',
      category: 'ai',
      featured: true,
      summary:
        '面向门店与业务人员的企业微信 AIGC 工具，生成海报、视频、图文、菜谱与节日营销物料。',
      highlights: [
        '把生成能力抽象为统一的来源 / 任务模型，新增场景只需维护常量、结果适配器与预览页三处。',
        '封装企业微信 JS-SDK 签名与选图、上传、分享、导出，处理授权不触发页面重载等宿主差异。',
        '覆盖参数配置、任务提交与轮询、结果预览、二次生成到导出的完整生成链路。',
      ],
      stack: ['企业微信', 'AIGC', 'Vue'],
    },
    {
      slug: 'mini-program-saas',
      title: '小程序 SaaS 化',
      role: '核心共建',
      period: '2025',
      category: 'multi',
      postSlug: 'mini-program-saas',
      summary:
        '部门小程序 SaaS 工程底座，一套代码按 AppId 装配页面、组件与分包，支撑多个小程序。',
      highlights: [
        'Shell / Coding 拆分：Shell 负责拉配置、构建与部署，Coding 只承载页面与组件，Vue / React 各一套。',
        '按 AppId 声明页面、组件、分包与 tabBar，Shell 据此生成路由与分包。',
        '按 AppId 隔离上传密钥，补充 Taro 样式引用审计脚本，减少多端构建时的人工操作与样式漏引。',
      ],
      stack: ['Taro', '小程序', 'Node.js', 'SaaS'],
    },
    {
      slug: 'merchant-portal-micro-frontend',
      title: '商家后台微前端 Portal',
      role: '核心开发',
      period: '2025',
      category: 'arch',
      postSlug: 'merchant-portal-micro-frontend',
      summary:
        '商家后台的微前端主应用，一个 Portal 按配置承载多个业务子应用，主子分仓、独立发布。',
      highlights: [
        '双模式加载：内部子应用用 micro-app 保留路由与通信，外部团队页面用 iframe 做隔离。',
        '主子通信：主应用下发用户、门店等上下文，子应用用 datachange 回传事件，事件类型统一约定。',
        '菜单由后端配置驱动，按应用注册路由；主应用只保留壳与公共能力，业务迭代下沉到子应用。',
      ],
      stack: ['micro-app', '微前端', 'iframe', '架构'],
    },
    {
      slug: 'multi-end-points-mall',
      title: '多端积分商城',
      role: '核心开发 / 前端组长',
      period: '2020 — 2022',
      category: 'multi',
      summary: '消费品牌积分商城，覆盖 Web、小程序与 App 多端。',
      highlights: [
        '基于 uni-app 用一套代码产出小程序与 App，负责移动端的架构设计和页面开发。',
        'Web 端基于 Vue + Cube UI，活动页用 Vue + Vant 单独搭建，用 ECharts 完成多个数据图表页面。',
        '项目后期升任前端组长，负责小组支撑、项目资料与技术规范沉淀。',
      ],
      stack: ['uni-app', 'Vue', 'ECharts', '小程序'],
    },
  ],
}
