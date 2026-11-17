import { useParams } from 'react-router-dom'
import { getAdjacentProjects, getProjectBySlug, projectsContent } from '../content'
import { usePageMeta } from '../logic/meta'
import { ProjectPage } from '../sections/projects/ProjectPage'

export default function Project() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug ?? '')
  const adjacent = project
    ? getAdjacentProjects(project.slug)
    : { previous: undefined, next: undefined }
  const index = project
    ? projectsContent.items.findIndex((item) => item.slug === project.slug)
    : 0

  usePageMeta({
    title: project?.title ?? projectsContent.notFound.title,
    description: project?.summary,
  })

  return (
    <ProjectPage
      content={projectsContent}
      project={project}
      index={index}
      previous={adjacent.previous}
      next={adjacent.next}
    />
  )
}
