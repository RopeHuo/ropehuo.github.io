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
      className="group grid gap-2 border-b border-line py-5 transition-colors hover:bg-panel/50 sm:grid-cols-[112px_minmax(0,1fr)_92px] sm:items-start sm:gap-6 sm:px-2"
    >
      <span className="pt-1 font-mono text-[9px] uppercase tracking-[0.1em] text-dim">
        {formatDate(post.date)}
      </span>

      <div className="min-w-0">
        <h3 className="font-display text-[17px] font-semibold leading-snug tracking-[-0.025em] transition-colors group-hover:text-accent sm:text-[19px]">
          {post.title}
        </h3>
        <p className="mt-1.5 max-w-2xl text-[13px] leading-6 text-muted">{post.summary}</p>
        <p className="mt-2.5 font-mono text-[9px] uppercase tracking-[0.1em] text-dim">
          {post.tags.join(' / ')}
        </p>
      </div>

      <span className="hidden pt-1 text-right font-mono text-[9px] uppercase tracking-[0.1em] text-dim transition-colors group-hover:text-accent sm:block">
        {readTime}
        <span className="ml-2">→</span>
      </span>
    </AppLink>
  )
}
