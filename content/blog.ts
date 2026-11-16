import type { BlogContent } from './types'

export const blogContent: BlogContent = {
  meta: {
    title: '博客',
    description: 'RopeHuo 的笔记：前端、工程化、AI Agent 与一些工作之外的思考。',
  },
  header: {
    index: '[2]',
    label: 'writing',
    title: '写作 / Notes',
    intro:
      '关于前端、工程化和 AI Agent 的实践记录。多数是踩坑之后的复盘，想到就写，不保证更新频率。',
  },
  countTemplate: '共 {count} 篇 · 按时间倒序',
  post: {
    backLabel: '返回博客',
    contentsLabel: 'contents',
    readTimeTemplate: '{minutes} min read',
    newerLabel: '更新',
    olderLabel: '更早',
    notFound: {
      label: '[404] / post',
      title: '没有找到这篇文章',
      actionLabel: '返回博客',
    },
  },
}
