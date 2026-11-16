import type { HomeContent } from '../../../content/types'
import type { LoadedPost } from '../../content/posts'
import { AppLink } from '../../logic/AppLink'
import { routes } from '../../logic/routes'
import { PostRow } from '../../ui/PostRow'
import { Section } from '../../ui/Section'

interface WritingSectionProps {
  content: HomeContent['writing']
  posts: LoadedPost[]
  readTimeTemplate: string
}

export function WritingSection({ content, posts, readTimeTemplate }: WritingSectionProps) {
  return (
    <Section label={content.label}>
      <div>
        {posts.map((post) => (
          <PostRow
            key={post.slug}
            post={post}
            href={routes.post(post.slug)}
            readTimeTemplate={readTimeTemplate}
          />
        ))}
      </div>
      <AppLink href={routes.blog} className="link-mono mt-6 inline-flex">
        {content.allLabel} →
      </AppLink>
    </Section>
  )
}
