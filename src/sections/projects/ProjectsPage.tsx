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
        <div
          className="mt-8 flex flex-wrap items-baseline gap-x-6 gap-y-3 border-t border-line pt-4"
          role="group"
          aria-label={labels.projectFilter}
        >
          {content.filters.map((item) => {
            const active = filter === item.key
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => setFilter(item.key)}
                aria-pressed={active}
                className={`group inline-flex items-baseline gap-1.5 border-b pb-1 font-mono text-[10px] uppercase tracking-[0.1em] transition-colors ${
                  active
                    ? 'border-accent text-ink'
                    : 'border-transparent text-dim hover:text-ink'
                }`}
              >
                {item.label}
                <span className={`text-[9px] ${active ? 'text-accent' : 'text-dim'}`}>
                  {String(countOf(item.key)).padStart(2, '0')}
                </span>
              </button>
            )
          })}
        </div>
      </PageHeader>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:gap-6">
        {visible.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={content.items.findIndex((item) => item.slug === project.slug)}
            actions={content.actions}
          />
        ))}
      </div>

      <p className="mt-10 max-w-2xl font-mono text-[9px] leading-5 text-dim">{content.note}</p>
    </>
  )
}
