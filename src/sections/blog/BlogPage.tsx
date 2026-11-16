import type { BlogContent } from '../../../content/types'
import type { LoadedPost } from '../../content/posts'
import { routes } from '../../logic/routes'
import { PageHeader } from '../../ui/PageHeader'
import { PostRow } from '../../ui/PostRow'

interface BlogPageProps {
  content: BlogContent
  posts: LoadedPost[]
}

export function BlogPage({ content, posts }: BlogPageProps) {
  return (
    <>
      <PageHeader
        index={content.header.index}
        label={content.header.label}
        title={content.header.title}
        intro={content.header.intro}
      />

      <div className="border-b border-line">
        {posts.map((post) => (
          <PostRow
            key={post.slug}
            post={post}
            href={routes.post(post.slug)}
            readTimeTemplate={content.post.readTimeTemplate}
          />
        ))}
      </div>

      <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.08em] text-dim">
        {content.countTemplate.replace('{count}', String(posts.length))}
      </p>
    </>
  )
}
