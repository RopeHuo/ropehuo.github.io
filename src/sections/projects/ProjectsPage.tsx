import type { ProjectsContent, UiCopy } from '../../../content/types'
import { useProjectFilter } from '../../logic/useProjectFilter'
import { PageHeader } from '../../ui/PageHeader'
import { ProjectCard } from './ProjectCard'

interface ProjectsPageProps {
  content: ProjectsContent
  labels: UiCopy
}

export function ProjectsPage({ content, labels }: ProjectsPageProps) {
  const { filter, setFilter, visible } = useProjectFilter(content.items)

  const countOf = (key: (typeof content.filters)[number]['key']) =>
    key === 'all'
      ? content.items.length
      : content.items.filter((project) => project.category === key).length

  return (
    <>
      <PageHeader
        index={content.header.index}
        label={content.header.label}
        title={content.header.title}
        intro={content.header.intro}
      >
        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label={labels.projectFilter}>
          {content.filters.map((item) => {
            const active = filter === item.key
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => setFilter(item.key)}
                aria-pressed={active}
                className={`inline-flex h-8 items-center gap-2 border px-3 font-mono text-[10px] uppercase tracking-[0.08em] transition-colors ${
                  active
                    ? 'border-ink bg-ink text-bg'
                    : 'border-line text-muted hover:border-ink/40 hover:text-ink'
                }`}
              >
                {item.label}
                <span className={active ? 'text-bg/60' : 'text-dim'}>{countOf(item.key)}</span>
              </button>
            )
          })}
        </div>
      </PageHeader>

      <div className="grid gap-4 border-t border-line pt-6 sm:grid-cols-2 xl:gap-5">
        {visible.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={content.items.findIndex((item) => item.slug === project.slug)}
            actions={content.actions}
          />
        ))}
      </div>

      <p className="mt-8 max-w-2xl font-mono text-[10px] leading-5 text-dim">{content.note}</p>
    </>
  )
}
