import type { ProjectItem, ProjectsContent } from '../../../content/types'
import { AppLink } from '../../logic/AppLink'
import { ProjectVisual } from '../../ui/ProjectVisual'
import { Tag } from '../../ui/Tag'

interface ProjectCardProps {
  project: ProjectItem
  index: number
  actions: ProjectsContent['actions']
}

export function ProjectCard({ project, index, actions }: ProjectCardProps) {
  const detail = project.postSlug
    ? { href: `/blog/${project.postSlug}`, label: actions.post }
    : { href: '/resume', label: actions.experience }

  return (
    <article id={project.slug} className="flex scroll-mt-16 flex-col border border-line">
      <ProjectVisual project={project} index={index} className="aspect-[16/10] border-b border-line" />

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.1em] text-dim">
          <span>[{String(index + 1).padStart(2, '0')}]</span>
          <span>
            {project.period} · {project.role}
          </span>
        </div>

        <h2 className="mt-3 font-mono text-[18px] leading-snug tracking-tight">
          {project.title}
        </h2>
        <p className="mt-2 text-[13px] leading-6 text-muted">{project.summary}</p>

        <ul className="mt-4 space-y-1.5">
          {project.highlights.slice(0, 2).map((highlight) => (
            <li key={highlight} className="flex gap-2 text-[12px] leading-5 text-muted">
              <span className="mt-[0.55rem] size-1 shrink-0 bg-accent" aria-hidden="true" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-5">
          {project.stack.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
          <AppLink
            href={detail.href}
            className="ml-auto font-mono text-[11px] text-muted transition-colors hover:text-accent"
          >
            {detail.label} →
          </AppLink>
        </div>
      </div>
    </article>
  )
}
