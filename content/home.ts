import { siteContent } from './site'
import type { HomeContent } from './types'

export const homeContent: HomeContent = {
  meta: {},
  hero: {
    eyebrow: '[0] frontend engineer / ai agent',
    headline: ['写前端，也造', '会自己干活的 Agent'],
    intro:
      '我是 RopeHuo，8 年 Web 与多端开发。现在在一家互联网公司做零售业务研发与 AI 应用落地，也把那些重复的流程，做成 agent 能跑的工具、用例和资产。',
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
    suffix: '— 8 年，一直在写前端。',
  },
  about: {
    label: '关于我',
    paragraphs: [
      '我是 RopeHuo，2018 年开始做前端。做过消费品牌积分商城的多端，也带过前端小组；2022 年加入一家互联网大厂，先后做过零售与多端相关业务。',
      '最近两年主要把 AI 接进真实业务流程：在开放平台做 AI 开发助手，在零售业务里做 AI 生图与 Agent 物料，也主导了一个通用测试智能体。工作之外，我把踩过的坑写成笔记。',
    ],
    features: [
      {
        title: 'AI Agent',
        body: '把 LLM 接进真实业务：Agent Skill、MCP、Playwright 用例生成，以及 AIGC 能力落地。',
      },
      {
        title: '前端工程',
        body: 'React / Vue / TypeScript，微前端、小程序 SaaS 底座，构建与发布链路。',
      },
      {
        title: '多端交付',
        body: '微信小程序、uni-app、Taro、企业微信 JS-SDK，一套代码覆盖多个端。',
      },
      {
        title: '团队与文档',
        body: '带过前端小组；习惯把方案写成能复用的文档、脚手架和技术规范。',
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
      { value: '8', label: '年前端' },
      { value: 'AI', label: 'Agent / AIGC' },
      { value: 'Web', label: '多端交付' },
      { value: 'Node', label: '全栈协作' },
    ],
  },
  contact: {
    label: 'contact / 联系',
    headline: ['聊聊前端、Agent，', '或者下一件值得做的事。'],
    body: '如果你在做前端工程、AI Agent 落地，或者只是想聊聊某个想法，欢迎来信。',
    actions: [
      { label: '发邮件', href: `mailto:${siteContent.email}`, emphasis: 'primary' },
      { label: 'GitHub', href: siteContent.github, external: true, emphasis: 'secondary' },
    ],
  },
}
