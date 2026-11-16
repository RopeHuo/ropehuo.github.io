import { projectItems, resumeContent, siteContent } from '../content'
import { usePageMeta } from '../logic/meta'
import { ResumePage } from '../sections/resume/ResumePage'

export default function Resume() {
  usePageMeta(resumeContent.meta)

  return <ResumePage content={resumeContent} projects={projectItems} name={siteContent.name} />
}
