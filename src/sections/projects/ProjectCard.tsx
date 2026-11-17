import type { ProjectItem, ProjectsContent } from '../../../content/types'
import { AppLink } from '../../logic/AppLink'
import { routes } from '../../logic/routes'
import { ProjectVisual } from '../../ui/ProjectVisual'
import { Tag } from '../../ui/Tag'

interface ProjectCardProps {
  project: ProjectItem
  index: number
  actions: ProjectsContent['actions']
}

export function ProjectCard({ project, index, actions }: ProjectCardProps) {
  return (
    <article
      id={project.slug}
      className="plate flex scroll-mt-24 flex-col transition-colors hover:border-line-strong"
    >
      <AppLink
        href={routes.project(project.slug)}
        ariaLabel={`${project.title} ${actions.project}`}
        className="block"
      >
        <ProjectVisual
          project={project}
          index={index}
          className="aspect-[16/10] border-b border-line"
        />
      </AppLink>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3 font-mono text-[9px] uppercase tracking-[0.12em] text-dim">
          <span>{project.period}</span>
          <span>{project.role}</span>
        </div>

        <AppLink href={routes.project(project.slug)} className="group mt-3">
          <h2 className="font-display text-[20px] font-semibold leading-snug tracking-[-0.03em] transition-colors group-hover:text-accent">
            {project.title}
          </h2>
        </AppLink>
        <p className="mt-2 text-[13px] leading-6 text-muted">{project.summary}</p>

        <ul className="mt-4 space-y-1.5">
          {project.highlights.slice(0, 2).map((highlight) => (
            <li key={highlight} className="flex gap-2 text-[12px] leading-5 text-muted">
              <span className="mt-[0.55rem] size-1 shrink-0 bg-accent" aria-hidden="true" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1.5 pt-5">
          {project.stack.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
          <div className="ml-auto flex items-center gap-3">
            {project.postSlug && (
              <AppLink
                href={routes.post(project.postSlug)}
                className="font-mono text-[10px] text-dim transition-colors hover:text-accent"
              >
                {actions.post}
              </AppLink>
            )}
            <AppLink
              href={routes.project(project.slug)}
              className="font-mono text-[10px] text-muted transition-colors hover:text-accent"
            >
              {actions.project} →
            </AppLink>
          </div>
        </div>
      </div>
    </article>
  )
}
