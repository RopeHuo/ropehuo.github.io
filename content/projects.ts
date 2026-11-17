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
    project: '查看项目',
    post: '阅读记录',
  },
  nav: {
    back: '全部项目',
    previous: '上一个项目',
    next: '下一个项目',
  },
  notFound: {
    label: '[404] / project',
    title: '没有找到这个项目',
    actionLabel: '返回项目',
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
      detail: {
        ends: {
          left: {
            label: 'AI 编码宿主',
            body: '多类 AI 编码宿主已经有很强的代码理解，但缺少稳定的测试执行与证据链。',
          },
          right: {
            label: '研发自测',
            body: '研发要的不是再学一个测试平台，而是一个能自己跑、能回归、能留下证据的 QA 搭子。',
          },
          note: '这个项目要接住的，是「模型会判断」和「测试要可执行」之间的落差。',
        },
        knot: {
          intro: '最后选择重 Skill、轻 MCP：判断留在 Skill 层，MCP 只做确定性动作。',
          decisions: [
            {
              title: '重 Skill、轻 MCP',
              body: '测试判断、策略和报告交给 Skill；MCP 只保留点击、填表、截图、跑 spec 等机械动作。',
            },
            {
              title: '稳定骨架 + 能力插件',
              body: '骨架只声明少量挂载点，红线、外部上下文、报告归档等能力各自独立，新增能力骨架零改动。',
            },
            {
              title: '三种模式，一个入口',
              body: '按源码生成可回归用例、页面盲探、新老页面对照；建会话前自动判定模式。',
            },
          ],
        },
        load: {
          intro: '它不是一个更大的测试脚本，而是一套能被不同宿主复用的测试能力。',
          points: [
            '同一套 Skill 接入多类 AI 编码宿主，不把能力绑死在某个客户端。',
            '新增测试能力通过插件挂载，骨架不需要跟着改。',
            '输出可回归的 spec、截图和报告，测试结果能回到研发流程。',
          ],
          evidence: [
            { label: '形态', value: 'Agent Skill + MCP' },
            { label: '执行', value: 'Playwright' },
            { label: '模式', value: '生成 / 盲探 / 对照' },
            { label: '角色', value: '主导' },
          ],
        },
        light: {
          intro: '它点亮的是「研发自测」这件事：从一次性手工探索，变成可积累的用例资产。',
          points: [
            '测试判断留在模型侧，工具侧只做确定性动作，能力更容易复用和演进。',
            '让 AI 编码宿主不只写代码，也能对自己的改动给出验证证据。',
          ],
        },
      },
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
      detail: {
        ends: {
          left: {
            label: '开发者的意图',
            body: '提问、选方案、生成代码、提交工单，本来是一条链，但过去散落在多个工具里。',
          },
          right: {
            label: '研发流程',
            body: '流程需要状态、权限、可恢复的卡片，而不是一段聊完就丢的对话。',
          },
          note: '这个项目要接住的，是「对话」和「研发流程」之间的断层。',
        },
        knot: {
          intro: '把聊天做成一个能承载流程的容器：消息、卡片、状态机、工单都在同一条时间线上。',
          decisions: [
            {
              title: '按卡片类型动态挂载',
              body: '方案选择、代码生成、任务进度、工单等卡片按类型异步加载，聊天壳不关心具体业务。',
            },
            {
              title: '长任务状态机',
              body: '生成锁定、失败、停止等分支统一处理；刷新页面后卡片状态可以恢复。',
            },
            {
              title: '消息与工单互相转换',
              body: '普通消息 → 方案 / 工单 → 普通消息，形成可继续的闭环，而不是一次性回答。',
            },
          ],
        },
        load: {
          intro: '它承住的是一个更长的研发动作：从「问一下」到「把事做完」。',
          points: [
            '卡片按类型扩展，新增一种研发产物不用改聊天主流程。',
            '长任务有明确状态，刷新、失败、停止都不会把用户留在半路。',
            '工单 pause / resume 等能力补进组件库，聊天和流程系统真正接上。',
          ],
          evidence: [
            { label: '形态', value: '对话式研发助手' },
            { label: '链路', value: '提问 → 方案 → 代码 → 工单' },
            { label: '关键', value: '卡片 / 状态机 / 流式' },
            { label: '角色', value: '核心开发' },
          ],
        },
        light: {
          intro: '它点亮的是「对话即工作台」：聊天不再只是问答，而是研发流程的入口。',
          points: [
            '把方案、代码、工单这些重动作放进对话，减少工具切换。',
            '长任务状态可恢复，开发者敢把更长的任务交给它。',
          ],
        },
      },
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
      detail: {
        ends: {
          left: {
            label: '多种生成能力',
            body: '海报、视频、图文、菜谱、节日物料，背后是不同的模型、参数和结果形态。',
          },
          right: {
            label: '门店与业务人员',
            body: '他们不关心模型细节，只关心能不能在企微里快速生成、预览、分享和导出。',
          },
          note: '这个项目要接住的，是「多种生成能力」和「一个企微入口」之间的复杂度。',
        },
        knot: {
          intro: '把生成能力抽象成统一的来源 / 任务模型，新增场景只改常量、结果适配器和预览页。',
          decisions: [
            {
              title: '统一来源 / 任务模型',
              body: '不同生成场景共享同一套任务提交、轮询和结果结构，避免每个场景各写一条链路。',
            },
            {
              title: '封装企微 JS-SDK',
              body: '签名、选图、上传、分享、导出统一封装，处理授权不触发页面重载等宿主差异。',
            },
            {
              title: '完整生成链路',
              body: '参数配置 → 任务提交与轮询 → 结果预览 → 二次生成 → 导出，一条链路走完。',
            },
          ],
        },
        load: {
          intro: '它承住的是多场景生成背后的公共底座，而不是某一个海报模板。',
          points: [
            '新增场景只需要维护三处：常量、结果适配器、预览页。',
            '企微宿主差异被收在 SDK 封装里，业务页面不用重复处理。',
            '生成、预览、二次生成、导出形成闭环，业务人员能自己完成物料。',
          ],
          evidence: [
            { label: '形态', value: '企微内 AIGC 工具' },
            { label: '场景', value: '海报 / 视频 / 图文 / 菜谱' },
            { label: '关键', value: '任务模型 / JS-SDK' },
            { label: '角色', value: '核心开发' },
          ],
        },
        light: {
          intro: '它点亮的是门店的「即时表达」：不用等设计排期，自己就能把物料做出来。',
          points: [
            '把生成能力放进业务人员每天已经在用的企微，而不是再开一个平台。',
            '场景扩张不再从零搭链路，底座可以复用。',
          ],
        },
      },
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
      detail: {
        ends: {
          left: {
            label: '一套代码',
            body: '页面、组件、分包只维护一份，避免每个小程序复制一遍。',
          },
          right: {
            label: '多个 AppId',
            body: '不同小程序有不同的页面组合、tabBar、分包和上传密钥，不能靠手工改代码。',
          },
          note: '这个项目要接住的，是「复用」和「多实例差异」之间的冲突。',
        },
        knot: {
          intro: 'Shell / Coding 拆分：Shell 负责配置、构建与部署，Coding 只承载页面与组件。',
          decisions: [
            {
              title: 'Shell / Coding 拆分',
              body: 'Shell 拉配置、构建、部署；Coding 只写页面和组件，Vue / React 各一套。',
            },
            {
              title: '按 AppId 装配',
              body: '按 AppId 声明页面、组件、分包与 tabBar，Shell 据此生成路由和分包。',
            },
            {
              title: '构建期审计',
              body: '按 AppId 隔离上传密钥，补 Taro 样式引用审计，减少多端构建的人工操作和样式漏引。',
            },
          ],
        },
        load: {
          intro: '它承住的不是某个小程序，而是「多个小程序如何共用一套工程底座」。',
          points: [
            '页面与组件只维护一份，多实例差异收敛到配置。',
            '路由、分包、tabBar 由 Shell 生成，减少手工拼装。',
            '上传密钥按 AppId 隔离，构建链路更适合多人协作。',
          ],
          evidence: [
            { label: '形态', value: '小程序 SaaS 底座' },
            { label: '拆分', value: 'Shell / Coding' },
            { label: '关键', value: 'AppId 配置驱动' },
            { label: '角色', value: '核心共建' },
          ],
        },
        light: {
          intro: '它点亮的是「多小程序并行」：新实例不再从复制粘贴开始。',
          points: [
            '把差异放进配置，把共性留在 Coding。',
            '让部门可以同时维护多个小程序，而不把成本线性放大。',
          ],
        },
      },
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
      detail: {
        ends: {
          left: {
            label: '多个业务子应用',
            body: '不同团队、不同技术栈、不同发布节奏，但都要出现在同一个商家后台里。',
          },
          right: {
            label: '一个 Portal 壳',
            body: '菜单、用户、门店上下文、权限和公共能力需要统一，业务迭代要下沉。',
          },
          note: '这个项目要接住的，是「统一入口」和「独立发布」之间的边界。',
        },
        knot: {
          intro: '用双模式加载：内部子应用走 micro-app，外部团队页面走 iframe。',
          decisions: [
            {
              title: '双模式加载',
              body: '内部子应用用 micro-app 保留路由与通信；外部团队页面用 iframe 做隔离。',
            },
            {
              title: '主子通信',
              body: '主应用下发用户、门店等上下文，子应用用 datachange 回传事件，事件类型统一约定。',
            },
            {
              title: '配置驱动菜单',
              body: '菜单由后端配置，按应用注册路由；主应用只保留壳与公共能力。',
            },
          ],
        },
        load: {
          intro: '它承住的是一个商家后台的「壳」：入口统一，业务仍然可以各跑各的。',
          points: [
            '内部子应用保留路由与通信，外部页面用 iframe 控制隔离边界。',
            '用户、门店等上下文统一下发，子应用不需要各自接一遍。',
            '菜单和路由配置化，新增应用不需要改主应用代码。',
          ],
          evidence: [
            { label: '形态', value: '微前端 Portal' },
            { label: '加载', value: 'micro-app / iframe' },
            { label: '关键', value: '主子通信 / 配置菜单' },
            { label: '角色', value: '核心开发' },
          ],
        },
        light: {
          intro: '它点亮的是「一个入口，多种节奏」：主应用不拖慢子应用，子应用不撕开主应用。',
          points: [
            '团队可以独立发布，商家仍然看到一个完整后台。',
            '壳层只做公共能力，业务迭代回到业务团队。',
          ],
        },
      },
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
      detail: {
        ends: {
          left: {
            label: '一套业务',
            body: '积分、商品、活动、订单，在 Web、小程序和 App 上应该是同一套业务。',
          },
          right: {
            label: '三个端',
            body: '每个端的容器、交互和发布方式不同，不能简单复制三份代码。',
          },
          note: '这个项目要接住的，是「一套业务」和「多端体验」之间的差异。',
        },
        knot: {
          intro: '用 uni-app 把小程序与 App 收在一套代码里，Web 和活动页按场景选择更合适的栈。',
          decisions: [
            {
              title: 'uni-app 打移动端',
              body: '一套代码产出小程序与 App，负责移动端架构和页面开发。',
            },
            {
              title: 'Web / 活动页分栈',
              body: 'Web 用 Vue + Cube UI，活动页用 Vue + Vant 单独搭建，图表用 ECharts。',
            },
            {
              title: '组长与规范',
              body: '项目后期升任前端组长，负责小组支撑、项目资料和技术规范沉淀。',
            },
          ],
        },
        load: {
          intro: '它承住的是一个消费品牌积分商城的多端交付，而不是一个端上的页面。',
          points: [
            '小程序与 App 共用一套移动端代码，减少重复开发。',
            'Web、活动页、图表按场景选型，不被单一技术栈绑住。',
            '团队规范和资料沉淀下来，项目结束后仍然可复用。',
          ],
          evidence: [
            { label: '形态', value: '多端积分商城' },
            { label: '端', value: 'Web / 小程序 / App' },
            { label: '关键', value: 'uni-app / Vue / ECharts' },
            { label: '角色', value: '核心开发 / 前端组长' },
          ],
        },
        light: {
          intro: '它点亮的是「多端交付的确定性」：同一套业务，在不同端上都能跑起来。',
          points: [
            '把重复的移动端工作收成一套代码。',
            '把团队经验留成规范，而不是留在个人记忆里。',
          ],
        },
      },
    },
  ],
}
