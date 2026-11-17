import type { NotFoundContent } from './types'

export const notFoundContent: NotFoundContent = {
  meta: {
    title: '页面不存在',
  },
  label: '[404] / strand cut',
  code: '404',
  command: '$ rope find /this-page\nstrand: no such page',
  message: '这条线在这里断了。可能是链接过期，也可能是文章还没写完。回首页看看，或者去博客翻翻。',
  actions: [
    { label: '回到首页', href: '/', emphasis: 'primary' },
    { label: '去博客', href: '/blog', emphasis: 'secondary' },
  ],
}
