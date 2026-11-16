import { blogContent } from '../content'
import { posts } from '../content/posts'
import { usePageMeta } from '../logic/meta'
import { BlogPage } from '../sections/blog/BlogPage'

export default function Blog() {
  usePageMeta(blogContent.meta)

  return <BlogPage content={blogContent} posts={posts} />
}
