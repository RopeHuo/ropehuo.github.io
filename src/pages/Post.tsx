import { useParams } from 'react-router-dom'
import { blogContent, uiCopy } from '../content'
import { getAdjacentPosts, getPost } from '../content/posts'
import { usePageMeta } from '../logic/meta'
import { PostPage } from '../sections/post/PostPage'

export default function Post() {
  const { slug } = useParams()
  const post = getPost(slug)
  const adjacent = post ? getAdjacentPosts(post.slug) : {}

  usePageMeta({
    title: post?.title ?? blogContent.post.notFound.title,
    description: post?.summary,
  })

  return (
    <PostPage
      content={blogContent}
      post={post}
      labels={uiCopy}
      newer={adjacent.newer}
      older={adjacent.older}
    />
  )
}
