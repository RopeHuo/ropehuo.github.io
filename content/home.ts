import { siteContent } from './site'
import type { HomeContent } from './types'

export const homeContent: HomeContent = {
  meta: {},
  hero: {
    eyebrow: '[0] SWE / frontend · ai · full-stack',
    headline: ['软件工程师', '前端、AI、全栈'],
    intro:
      '我是 RopeHuo，8 年经验的软件工程师。前端写 Web 与多端，AI 做 Agent 与 AIGC 落地，全栈用 Node 接服务端业务、接口、数据与部署。',
    actions: [
      { label: '查看项目', href: '/projects', emphasis: 'primary' },
      { label: '读博客', href: '/blog', emphasis: 'secondary' },
      { label: 'GitHub', href: siteContent.github, external: true, emphasis: 'link' },
    ],
  },
  work: {
    label: 'selected work',
    allLabel: '全部项目',
    cardLabel: '查看项目',
  },
  trust: {
    period: '[ 2018 — now ]',
    organizations: ['互联网大厂', '电商零售', 'AI Agent'],
    suffix: '— 8 年，从界面写到服务端。',
  },
  about: {
    label: '关于我',
    paragraphs: [
      '我是 RopeHuo，2018 年开始做开发。做过消费品牌积分商城的多端，也带过前端小组；2022 年加入一家互联网大厂，先后做过零售与多端相关业务。',
      '最近两年主要把 AI 接进真实业务流程：在开放平台做 AI 开发助手，在零售业务里做 AI 生图与 Agent 物料，也主导了一个通用测试智能体。',
      '后端主要用 Node：接服务端业务、接口、数据与部署。工作之外，我把踩过的坑写成笔记。',
      '如果用一个词概括我在做的事，是「编绳」：把分散的系统、团队和想法，接成一条能承重的线，再把它点亮。',
    ],
    features: [
      {
        title: '前端工程',
        body: 'React / Vue / TypeScript，Web 与多端；微前端、小程序 SaaS 底座，构建与发布链路。',
      },
      {
        title: 'AI 应用',
        body: '把 LLM 接进真实业务：Agent Skill、MCP、Playwright 用例生成，以及 AIGC 能力落地。',
      },
      {
        title: '全栈 / Node',
        body: '用 Node 接服务端业务、接口、数据与部署；不只画页面，也把后端这一段接住。',
      },
    ],
  },
  writing: {
    label: '最近在写',
    allLabel: '全部文章',
  },
  stats: {
    label: '方向',
    items: [
      { value: '8', label: '年经验' },
      { value: '前端', label: 'Web · 多端' },
      { value: 'AI', label: 'Agent · AIGC' },
      { value: '全栈', label: 'Node · 数据 · 部署' },
    ],
  },
  contact: {
    label: 'contact / 联系',
    headline: ['聊聊前端、AI、全栈，', '或者下一件值得做的事。'],
    body: '如果你在做前端工程、AI Agent 落地、Node 全栈，或者只是想聊聊某个想法，欢迎来信。',
    actions: [
      { label: '发邮件', href: `mailto:${siteContent.email}`, emphasis: 'primary' },
      { label: 'GitHub', href: siteContent.github, external: true, emphasis: 'secondary' },
    ],
  },
}
