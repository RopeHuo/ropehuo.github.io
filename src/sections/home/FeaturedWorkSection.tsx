import type { HomeContent, ProjectItem } from '../../../content/types'
import { AppLink } from '../../logic/AppLink'
import { routes } from '../../logic/routes'
import { ProjectVisual } from '../../ui/ProjectVisual'

interface FeaturedWorkSectionProps {
  content: HomeContent['work']
  projects: ProjectItem[]
}

export function FeaturedWorkSection({ content, projects }: FeaturedWorkSectionProps) {
  return (
    <section className="border-t border-line pt-5">
      <div className="flex items-end justify-between gap-4 pb-4">
        <p className="mono-label">{content.label}</p>
        <AppLink href={routes.projects} className="link-mono">
          {content.allLabel} →
        </AppLink>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2 max-lg:-mx-5 max-lg:px-5 lg:grid lg:grid-cols-3 lg:overflow-visible">
        {projects.map((project, index) => (
          <AppLink
            key={project.slug}
            href={routes.project(project.slug)}
            className="group w-[280px] shrink-0 sm:w-[320px] lg:w-auto"
          >
            <ProjectVisual
              project={project}
              index={index}
              className="aspect-[4/5] transition-opacity group-hover:opacity-95"
            />

            <div className="mt-3 flex items-baseline justify-between gap-3">
              <h2 className="font-mono text-[15px] leading-5 tracking-tight transition-colors group-hover:text-accent sm:text-[16px]">
                {project.title}
              </h2>
              <span className="shrink-0 font-mono text-[10px] text-dim">{project.period}</span>
            </div>
            <p className="mt-1.5 text-[13px] leading-5 text-muted">{project.summary}</p>

            <span className="mt-3 inline-flex h-9 items-center border border-line px-3 font-mono text-[11px] text-muted transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-bg">
              {content.cardLabel} →
            </span>
          </AppLink>
        ))}
      </div>
    </section>
  )
}
