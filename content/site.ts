import type { SiteContent } from './types'

export const siteContent: SiteContent = {
  name: 'RopeHuo',
  role: '软件工程师',
  tagline: '软件工程师，做前端、AI 和全栈。',
  description: 'RopeHuo 的个人网站：软件工程师，8 年经验，工作围绕前端、AI 与全栈（Node）展开。',
  url: 'https://ropehuo.github.io',
  email: 'RopeHuo@163.com',
  github: 'https://github.com/RopeHuo',
  cnblogs: 'https://www.cnblogs.com/rope',
  startYear: 2018,
  wordmark: 'ropehuo',
  railTagline: 'swe / frontend · ai · full-stack',
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
    defaultTitle: 'RopeHuo — 软件工程师 · 前端 / AI / 全栈',
    defaultDescription:
      'RopeHuo 的个人网站：软件工程师，8 年经验，工作围绕前端、AI 与全栈（Node）展开。',
  },
}
