import type { NotFoundContent } from './types'

export const notFoundContent: NotFoundContent = {
  meta: {
    title: '页面不存在',
  },
  label: '[404] / not found',
  code: '404',
  command: '$ cd /this-page\ncd: no such file or directory',
  message: '可能是链接过期，也可能是文章还没写完。回首页看看，或者去博客翻翻。',
  actions: [
    { label: '回到首页', href: '/', emphasis: 'primary' },
    { label: '去博客', href: '/blog', emphasis: 'secondary' },
  ],
}
