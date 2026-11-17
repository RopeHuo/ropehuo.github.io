import type { HomeContent, ProjectItem } from '../../../content/types'
import { AppLink } from '../../logic/AppLink'
import { routes } from '../../logic/routes'
import { ProjectVisual } from '../../ui/ProjectVisual'
import { SectionHead } from '../../ui/SectionHead'
import { Tag } from '../../ui/Tag'

interface FeaturedWorkSectionProps {
  content: HomeContent['work']
  projects: ProjectItem[]
}

export function FeaturedWorkSection({ content, projects }: FeaturedWorkSectionProps) {
  return (
    <section className="pt-14 lg:pt-20">
      <SectionHead
        index="01"
        label={content.label}
        note={`${String(projects.length).padStart(2, '0')} projects / selected`}
      />

      <div className="mt-6">
        {projects.map((project, index) => (
          <AppLink
            key={project.slug}
            href={routes.project(project.slug)}
            className="group grid grid-cols-[24px_minmax(0,1fr)] items-start gap-4 border-b border-line py-6 transition-colors hover:bg-panel/60 sm:grid-cols-[40px_minmax(0,1fr)_220px_20px] sm:gap-6 sm:px-2 lg:py-7"
          >
            <span className="pt-1 font-mono text-[9px] text-dim">
              {String(index + 1).padStart(2, '0')}
            </span>

            <div className="min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h2 className="font-display text-[21px] font-semibold leading-tight tracking-[-0.03em] transition-colors group-hover:text-accent sm:text-[25px]">
                  {project.title}
                </h2>
                <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-dim">
                  {project.period} · {project.role}
                </span>
              </div>
              <p className="mt-2 max-w-2xl text-[13px] leading-6 text-muted">{project.summary}</p>
              <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                {project.stack.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>

            <div className="hidden sm:block">
              <ProjectVisual
                project={project}
                index={index}
                className="aspect-[16/10] border border-line"
                compact
              />
            </div>

            <span className="hidden self-center font-mono text-[14px] text-dim transition-all group-hover:translate-x-1 group-hover:text-accent sm:block">
              →
            </span>
          </AppLink>
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <AppLink href={routes.projects} className="link-mono">
          {content.allLabel} →
        </AppLink>
      </div>
    </section>
  )
}
