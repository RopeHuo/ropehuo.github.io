import type { Post } from '../../content/types'

export interface LoadedPost extends Post {
  minutes: number
}

const sources = import.meta.glob('../../content/posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

/** 中文按 320 字/分钟、英文按 220 词/分钟估算，去掉代码块避免虚高 */
function getReadingMinutes(markdown: string): number {
  const text = markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/[#>*_~|-]/g, ' ')

  const cjk = (text.match(/[\u4e00-\u9fff]/g) ?? []).length
  const words = (text.replace(/[\u4e00-\u9fff]/g, ' ').match(/[A-Za-z0-9]+/g) ?? []).length

  return Math.max(1, Math.round(cjk / 320 + words / 220))
}

function parsePost(path: string, raw: string): LoadedPost {
  const frontmatter = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw)
  if (!frontmatter) {
    throw new Error(`[posts] ${path} 缺少 frontmatter`)
  }

  const fields: Record<string, string> = {}
  for (const line of frontmatter[1].split(/\r?\n/)) {
    const match = /^([A-Za-z][\w-]*):\s*(.*)$/.exec(line.trim())
    if (match) fields[match[1]] = match[2].trim()
  }

  const slug = path.split('/').pop()!.replace(/\.md$/, '')
  const content = raw.slice(frontmatter[0].length).trim()
  const tags = (fields.tags ?? '')
    .replace(/^\[|\]$/g, '')
    .split(',')
    .map((tag) => tag.trim().replace(/^['"]|['"]$/g, ''))
    .filter(Boolean)

  if (!fields.title || !fields.date) {
    throw new Error(`[posts] ${path} 的 frontmatter 至少需要 title 和 date`)
  }

  return {
    slug,
    title: fields.title,
    date: fields.date,
    summary: fields.summary ?? '',
    tags,
    minutes: getReadingMinutes(content),
    content,
  }
}

export const posts: LoadedPost[] = Object.entries(sources)
  .map(([path, raw]) => parsePost(path, raw))
  .sort((a, b) => b.date.localeCompare(a.date))

export function getPost(slug: string | undefined): LoadedPost | undefined {
  return posts.find((post) => post.slug === slug)
}

export function getAdjacentPosts(slug: string) {
  const index = posts.findIndex((post) => post.slug === slug)
  if (index === -1) return {}
  return {
    newer: index > 0 ? posts[index - 1] : undefined,
    older: index < posts.length - 1 ? posts[index + 1] : undefined,
  }
}
