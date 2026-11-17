/**
 * 内容访问层。
 * 只负责把 content/ 的内容暴露给应用，不包含 JSX、样式和交互逻辑。
 */
import { projectsContent } from '../../content/projects'

export { siteContent } from '../../content/site'
export { homeContent } from '../../content/home'
export { projectsContent } from '../../content/projects'
export { brandContent } from '../../content/brand'
export { resumeContent } from '../../content/resume'
export { blogContent } from '../../content/blog'
export { notFoundContent } from '../../content/notFound'
export { uiCopy } from '../../content/ui'

export const projectItems = projectsContent.items

export const featuredProjects = projectItems.filter((project) => project.featured)

export function getProjectBySlug(slug: string) {
  return projectItems.find((project) => project.slug === slug)
}

export function getAdjacentProjects(slug: string) {
  const index = projectItems.findIndex((project) => project.slug === slug)
  if (index === -1) return {}
  return {
    previous: index > 0 ? projectItems[index - 1] : undefined,
    next: index < projectItems.length - 1 ? projectItems[index + 1] : undefined,
  }
}
