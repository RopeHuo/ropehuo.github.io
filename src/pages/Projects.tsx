import { useLocation } from 'react-router-dom'
import { projectsContent, uiCopy } from '../content'
import { useHashScroll } from '../logic/useHashScroll'
import { usePageMeta } from '../logic/meta'
import { ProjectsPage } from '../sections/projects/ProjectsPage'

export default function Projects() {
  usePageMeta(projectsContent.meta)

  const { hash } = useLocation()
  useHashScroll(hash)

  return <ProjectsPage content={projectsContent} labels={uiCopy} />
}
