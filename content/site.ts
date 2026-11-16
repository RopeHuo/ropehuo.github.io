import type { SiteContent } from './types'

export const siteContent: SiteContent = {
  name: 'RopeHuo',
  role: '前端工程师 · AI Agent',
  tagline: '写前端，也造会自己干活的 Agent。',
  description: 'RopeHuo 的个人网站：8 年 Web 与多端开发，关注 AI Agent、MCP、AIGC 与工程化。',
  url: 'https://ropehuo.github.io',
  email: 'RopeHuo@163.com',
  github: 'https://github.com/RopeHuo',
  cnblogs: 'https://www.cnblogs.com/rope',
  startYear: 2018,
  wordmark: 'ropehuo',
  railTagline: 'frontend / agent',
  nav: [
    { href: '/', label: '首页', index: '0', end: true },
    { href: '/projects', label: '项目', index: '1' },
    { href: '/blog', label: '博客', index: '2' },
    { href: '/resume', label: '简历', index: '3' },
  ],
  contacts: [
    { label: 'GitHub', value: 'github.com/RopeHuo', href: 'https://github.com/RopeHuo', external: true },
    { label: '博客园', value: 'cnblogs.com/rope', href: 'https://www.cnblogs.com/rope', external: true },
    { label: 'Email', value: 'RopeHuo@163.com', href: 'mailto:RopeHuo@163.com' },
  ],
  footer: {
    status: 'building for the web',
    copyright: '© 2026 RopeHuo',
    railCopyright: '© 2026',
    builtWith: 'react · vite · github pages',
    wordmarkLabel: 'ropehuo / 2026',
  },
  meta: {
    defaultTitle: 'RopeHuo — 前端工程师 · AI Agent',
    defaultDescription:
      'RopeHuo 的个人网站：8 年 Web 与多端开发，关注 AI Agent、MCP、AIGC 与工程化。',
  },
}
