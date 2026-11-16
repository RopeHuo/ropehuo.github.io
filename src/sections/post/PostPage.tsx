import { useRef } from 'react'
import type { ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import type { BlogContent, UiCopy } from '../../../content/types'
import type { LoadedPost } from '../../content/posts'
import { AppLink } from '../../logic/AppLink'
import { formatDate } from '../../logic/format'
import { routes } from '../../logic/routes'
import { useToc } from '../../logic/useToc'
import { CodeBlock } from '../../ui/CodeBlock'
import { ArrowLeft, ArrowRight } from '../../ui/Icons'
import { Tag } from '../../ui/Tag'

function MarkdownLink({ href = '', children }: { href?: string; children?: ReactNode }) {
  const external = /^https?:\/\//.test(href)
  return (
    <a href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
      {children}
    </a>
  )
}

interface PostPageProps {
  content: BlogContent
  post: LoadedPost | undefined
  labels: UiCopy
  newer?: LoadedPost
  older?: LoadedPost
}

export function PostPage({ content, post, labels, newer, older }: PostPageProps) {
  const proseRef = useRef<HTMLDivElement>(null)
  const { toc, activeId, setActiveId } = useToc(proseRef, post?.slug)

  if (!post) {
    return (
      <div className="py-24">
        <p className="mono-label">{content.post.notFound.label}</p>
        <h1 className="mt-4 font-mono text-[36px] tracking-[-0.04em]">
          {content.post.notFound.title}
        </h1>
        <AppLink href={routes.blog} className="btn-solid mt-8">
          {content.post.notFound.actionLabel} <ArrowRight className="size-3.5" />
        </AppLink>
      </div>
    )
  }

  const readTime = content.post.readTimeTemplate.replace('{minutes}', String(post.minutes))

  return (
    <article>
      <AppLink href={routes.blog} className="link-mono inline-flex items-center gap-2">
        <ArrowLeft className="size-3" />
        {content.post.backLabel}
      </AppLink>

      <header className="mt-8 max-w-[820px] border-b border-line pb-8">
        <div className="flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <h1 className="mt-5 max-w-[820px] text-balance font-mono text-[30px] leading-[1.12] tracking-[-0.04em] sm:text-[42px]">
          {post.title}
        </h1>
        {post.summary && (
          <p className="mt-4 max-w-[820px] text-balance text-[15px] leading-7 text-muted">
            {post.summary}
          </p>
        )}
        <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.1em] text-dim">
          {formatDate(post.date)} · {readTime}
        </p>
      </header>

      <div className="mt-10 grid gap-10 min-[1360px]:grid-cols-[minmax(0,760px)_180px] min-[1360px]:items-start">
        <div ref={proseRef} className="prose-docs min-w-0">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSlug]}
            components={{
              a: MarkdownLink,
              pre: ({ children }) => <CodeBlock labels={labels}>{children}</CodeBlock>,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {toc.length > 1 && (
          <aside className="post-toc hidden min-[1360px]:sticky min-[1360px]:top-10 min-[1360px]:block">
            <p className="mono-label">{content.post.contentsLabel}</p>
            <ul className="mt-3 border-l border-line">
              {toc.map((item) => {
                const active = item.id === activeId
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setActiveId(item.id)}
                      aria-current={active ? 'location' : undefined}
                      className={`-ml-px block border-l py-1 pr-2 font-mono text-[11px] leading-5 transition-colors ${
                        item.level === 3 ? 'pl-6' : 'pl-3'
                      } ${active ? 'border-accent text-ink' : 'border-transparent text-dim hover:text-ink'}`}
                    >
                      {item.text}
                    </a>
                  </li>
                )
              })}
            </ul>
          </aside>
        )}
      </div>

      <nav
        className="mt-16 grid gap-6 border-t border-line pt-6 sm:grid-cols-2"
        aria-label={labels.postNav}
      >
        {older ? (
          <AppLink href={routes.post(older.slug)} className="group">
            <span className="mono-label">← {content.post.olderLabel}</span>
            <p className="mt-1.5 font-mono text-[13px] leading-5 transition-colors group-hover:text-accent">
              {older.title}
            </p>
          </AppLink>
        ) : (
          <span />
        )}
        {newer && (
          <AppLink href={routes.post(newer.slug)} className="group sm:text-right">
            <span className="mono-label">{content.post.newerLabel} →</span>
            <p className="mt-1.5 font-mono text-[13px] leading-5 transition-colors group-hover:text-accent">
              {newer.title}
            </p>
          </AppLink>
        )}
      </nav>
    </article>
  )
}
