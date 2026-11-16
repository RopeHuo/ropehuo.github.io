import { blogContent, featuredProjects, homeContent } from '../content'
import { posts } from '../content/posts'
import { usePageMeta } from '../logic/meta'
import { HomePage } from '../sections/home/HomePage'

export default function Home() {
  usePageMeta(homeContent.meta)

  return (
    <HomePage
      content={homeContent}
      featured={featuredProjects}
      latestPosts={posts.slice(0, 3)}
      readTimeTemplate={blogContent.post.readTimeTemplate}
    />
  )
}
