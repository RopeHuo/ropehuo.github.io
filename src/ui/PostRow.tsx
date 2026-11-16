import type { LoadedPost } from '../content/posts'
import { AppLink } from '../logic/AppLink'
import { formatDate } from '../logic/format'

interface PostRowProps {
  post: LoadedPost
  href: string
  readTimeTemplate: string
}

export function PostRow({ post, href, readTimeTemplate }: PostRowProps) {
  const readTime = readTimeTemplate.replace('{minutes}', String(post.minutes))

  return (
    <AppLink
      href={href}
      className="group grid gap-2 border-t border-line py-4 sm:grid-cols-[92px_minmax(0,1fr)_24px] sm:items-start sm:gap-5"
    >
      <span className="pt-0.5 font-mono text-[11px] text-dim">{formatDate(post.date)}</span>

      <div className="min-w-0">
        <h3 className="font-mono text-[15px] leading-6 tracking-tight transition-colors group-hover:text-accent">
          {post.title}
        </h3>
        <p className="mt-1 text-[13px] leading-5 text-muted">{post.summary}</p>
        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.08em] text-dim">
          {post.tags.join(' / ')} · {readTime}
        </p>
      </div>

      <span className="hidden pt-0.5 font-mono text-[12px] text-dim transition-colors group-hover:text-accent sm:block">
        →
      </span>
    </AppLink>
  )
}
