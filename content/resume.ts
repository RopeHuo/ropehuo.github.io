import type { ResumeContent } from './types'

export const resumeContent: ResumeContent = {
  meta: {
    title: '简历',
    description: 'RopeHuo 的简历：前端工程师，8 年 Web 与多端开发，关注 AI Agent 与 AIGC 落地。',
  },
  header: {
    index: '[3]',
    label: 'resume',
    role: '前端工程师 · AI Agent',
    experience: '8 年经验',
    printLabel: '打印 / PDF',
    printNote: '点右上角「打印 / PDF」，用浏览器打印可以得到一份干净的简历。',
  },
  contacts: [
    { label: 'Email', value: 'RopeHuo@163.com', href: 'mailto:RopeHuo@163.com' },
    { label: 'GitHub', value: 'github.com/RopeHuo', href: 'https://github.com/RopeHuo', external: true },
    { label: '博客园', value: 'cnblogs.com/rope', href: 'https://www.cnblogs.com/rope', external: true },
  ],
  intro:
    '2016 年开始接触前端，2018 年正式从事前端开发。做过大厂业务研发，也带过前端小组；熟悉 React / Vue / 小程序与 Node.js，近年专注 AI Agent 与 AIGC 能力落地。习惯把一次性的人工流程，沉淀成可复用的工具、用例和资产。',
  sections: {
    skills: '技能清单',
    experience: '工作经历',
    projects: '项目经验',
    education: '教育背景',
    writing: '开源与文章',
  },
  skillGroups: [
    {
      label: 'AI 应用',
      items: ['LLM 接口接入', 'Agent Skill', 'MCP', 'Prompt 工程', 'AIGC 生图 / 视频'],
    },
    {
      label: '前端',
      items: ['TypeScript', 'JavaScript', 'React', 'Vue', 'NuxtJS'],
    },
    {
      label: '多端',
      items: ['微信小程序', 'uni-app', 'Taro', 'Electron', '企业微信 JS-SDK'],
    },
    {
      label: '工程化',
      items: ['Vite', 'Webpack', 'micro-app', 'qiankun', 'Node.js', 'EggJS'],
    },
    {
      label: '测试与可视化',
      items: ['Playwright', 'Jest', 'ECharts'],
    },
    {
      label: '协作与部署',
      items: ['Git', 'GitHub Actions', '私有 npm', '技术文档'],
    },
  ],
  experience: [
    {
      company: '某互联网大厂',
      role: '软件工程师',
      period: '2022 — 至今',
      points: [
        '负责多条零售业务线的 B/C 端研发，覆盖 Web、小程序与 App 多端。',
        '参与 AI 开发助手、AI 生图与 Agent 物料能力建设，把 AI 接进建品、客服与对话等既有业务流程。',
        '主导通用测试智能体的 Agent Skill + MCP Server 搭建，支持页面盲探与按源码生成 Playwright 用例；参与企业微信 AIGC 专项。',
        '推动前后端分离、系统融合、CDN 化、骨架屏与灰度发布体系，负责反爬治理、监控与埋点 SDK 接入。',
        '负责网关管理平台、自研 VSCode 插件、UI 框架与多页面脚手架，沉淀可复用的工程方案。',
      ],
    },
    {
      company: '某电商科技公司（广州）',
      role: '高级前端开发工程师 / 前端组长',
      period: '2020 — 2022',
      points: [
        '负责消费品牌积分商城多端开发，基于 uni-app 一套代码产出小程序与 App，用 ECharts 完成多个数据图表页面。',
        '项目后期升任前端组长，带小组支撑项目运行并沉淀技术规范。',
        '主导内部 ERP 系统开发，搭建私有 npm 仓库并发布多个项目插件，参与后端需求联调，获评优秀员工。',
      ],
    },
    {
      company: '某电商公司（广州）',
      role: '前端开发工程师',
      period: '2019 — 2020',
      points: ['负责主要项目的多端版本开发与服务器部署，完成技术架构设计与老旧依赖升级。'],
    },
    {
      company: '某软件服务公司（广州）',
      role: '前端开发工程师',
      period: '2018 — 2019',
      points: ['负责公司前端开发，推动技术文档与代码规范梳理，促进团队规范化开发。'],
    },
  ],
  education: {
    degree: '本科',
    major: '计算机科学与技术',
  },
  articles: [
    {
      title: 'EggJS 快速入门',
      href: 'https://www.cnblogs.com/rope/p/10859014.html',
      source: '博客园',
    },
    {
      title: '前端笔记之 Canvas',
      href: 'https://www.cnblogs.com/rope/p/10724189.html',
      source: '博客园',
    },
    {
      title: 'Vue 中的 $Bus 使用',
      href: 'https://www.cnblogs.com/rope/p/12330490.html',
      source: '博客园',
    },
  ],
}
