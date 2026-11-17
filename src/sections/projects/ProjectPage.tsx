import type { ReactNode } from 'react'
import type { ProjectEnd, ProjectItem, ProjectsContent } from '../../../content/types'
import { AppLink } from '../../logic/AppLink'
import { routes } from '../../logic/routes'
import { ArrowLeft, ArrowRight } from '../../ui/Icons'
import { ProjectVisual } from '../../ui/ProjectVisual'
import { Tag } from '../../ui/Tag'

function ProjectSection({
  index,
  label,
  children,
}: {
  index: string
  label: string
  children: ReactNode
}) {
  return (
    <section className="border-t border-line py-10 lg:py-14">
      <div className="grid gap-6 lg:grid-cols-[150px_minmax(0,1fr)] lg:gap-12">
        <div className="flex items-baseline gap-3 lg:block">
          <p className="font-mono text-[9px] text-accent">{index}</p>
          <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-dim lg:mt-1">
            {label}
          </p>
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  )
}

function EndCard({ code, end }: { code: string; end: ProjectEnd }) {
  return (
    <div className="border-t border-line pt-4">
      <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-dim">{code}</p>
      <h3 className="mt-2 font-display text-[18px] font-semibold tracking-[-0.02em]">
        {end.label}
      </h3>
      <p className="mt-2 text-[13px] leading-6 text-muted">{end.body}</p>
    </div>
  )
}

interface ProjectPageProps {
  content: ProjectsContent
  project?: ProjectItem
  index: number
  previous?: ProjectItem
  next?: ProjectItem
}

export function ProjectPage({ content, project, index, previous, next }: ProjectPageProps) {
  if (!project) {
    return (
      <div className="py-24">
        <p className="mono-label">{content.notFound.label}</p>
        <h1 className="mt-4 font-display text-[36px] font-semibold tracking-[-0.04em]">
          {content.notFound.title}
        </h1>
        <AppLink href={routes.projects} className="btn-solid mt-8">
          {content.notFound.actionLabel} <ArrowRight className="size-3.5" />
        </AppLink>
      </div>
    )
  }

  const categoryLabel =
    content.filters.find((filter) => filter.key === project.category)?.label ?? project.category
  const detail = project.detail

  return (
    <article>
      <header className="border-b border-line pb-10 pt-2">
        <AppLink href={routes.projects} className="link-mono inline-flex items-center gap-2">
          <ArrowLeft className="size-3" />
          {content.nav.back}
        </AppLink>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 font-mono text-[9px] uppercase tracking-[0.14em] text-dim">
          <span>
            <span className="text-accent">[{String(index + 1).padStart(2, '0')}]</span> / PROJECT
          </span>
          <span>
            {categoryLabel} · {project.period} · {project.role}
          </span>
        </div>

        <h1 className="mt-5 max-w-4xl text-balance font-display text-[clamp(2.6rem,6vw,5rem)] font-semibold leading-[0.98] tracking-[-0.055em]">
          {project.title}
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-8 text-muted">{project.summary}</p>

        <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1">
          {project.stack.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>

        {project.postSlug && (
          <AppLink href={routes.post(project.postSlug)} className="link-mono mt-5 inline-flex">
            {content.actions.post} →
          </AppLink>
        )}
      </header>

      <figure className="mx-auto mt-8 max-w-[960px]">
        <ProjectVisual
          project={project}
          index={index}
          className="aspect-[16/9] border border-line"
        />
        <figcaption className="mt-2 flex flex-wrap items-center justify-between gap-3 font-mono text-[8px] uppercase tracking-[0.14em] text-dim">
          <span>
            FIG. {String(index + 1).padStart(2, '0')} — {project.title} / KNOT
          </span>
          <span>{project.period}</span>
        </figcaption>
      </figure>

      <ProjectSection index="01" label="两端 / TWO ENDS">
        <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:items-start sm:gap-4">
          <EndCard code="END A" end={detail.ends.left} />

          <div
            className="hidden items-center gap-2 self-start pt-[3px] sm:flex"
            aria-hidden="true"
          >
            <span className="h-px w-6 bg-line-strong" />
            <span className="knot-bullet" />
            <span className="h-px w-6 bg-line-strong" />
          </div>

          <EndCard code="END B" end={detail.ends.right} />
        </div>

        <p className="mt-6 max-w-2xl text-[15px] leading-8 text-muted">{detail.ends.note}</p>
      </ProjectSection>

      <ProjectSection index="02" label="结 / THE KNOT">
        <p className="max-w-2xl text-[15px] leading-8 text-muted">{detail.knot.intro}</p>

        <div className="mt-8 border-t border-line">
          {detail.knot.decisions.map((decision, decisionIndex) => (
            <div
              key={decision.title}
              className="grid gap-3 border-b border-line py-5 sm:grid-cols-[36px_minmax(0,1fr)] sm:gap-5"
            >
              <span className="pt-1 font-mono text-[9px] text-accent">
                {String(decisionIndex + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-display text-[17px] font-semibold tracking-[-0.02em]">
                  {decision.title}
                </h3>
                <p className="mt-1.5 text-[14px] leading-7 text-muted">{decision.body}</p>
              </div>
            </div>
          ))}
        </div>
      </ProjectSection>

      <ProjectSection index="03" label="承重 / WHAT IT HOLDS">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div>
            <p className="max-w-2xl text-[15px] leading-8 text-muted">{detail.load.intro}</p>
            <ul className="mt-6 space-y-2.5">
              {detail.load.points.map((point) => (
                <li key={point} className="flex gap-3 text-[14px] leading-7 text-muted">
                  <span className="mt-[0.7rem] size-1.5 shrink-0 bg-accent" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="plate bg-panel p-5">
            <p className="mono-label">Evidence</p>
            <dl className="mt-4">
              {detail.load.evidence.map((item) => (
                <div
                  key={item.label}
                  className="flex items-baseline justify-between gap-4 border-b border-line py-2.5 last:border-b-0"
                >
                  <dt className="font-mono text-[9px] uppercase tracking-[0.1em] text-dim">
                    {item.label}
                  </dt>
                  <dd className="text-right font-mono text-[11px] text-ink">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection index="04" label="点亮 / WHAT IT LIT">
        <div className="relative border-l-2 border-accent bg-accent-soft px-5 py-6 sm:px-8 sm:py-8">
          <span
            className="absolute -left-[5px] top-7 size-2 rotate-45 bg-accent"
            aria-hidden="true"
          />
          <p className="mono-label text-accent">WHAT IT LIT</p>
          <p className="mt-4 max-w-2xl text-[18px] leading-8 tracking-[-0.01em]">
            {detail.light.intro}
          </p>
          <ul className="mt-5 space-y-2">
            {detail.light.points.map((point) => (
              <li key={point} className="flex gap-3 text-[13px] leading-6 text-muted">
                <span className="mt-[0.6rem] size-1 shrink-0 bg-accent" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </ProjectSection>

      <nav
        className="mt-16 grid gap-6 border-t border-line pt-6 sm:grid-cols-2"
        aria-label="项目导航"
      >
        {previous ? (
          <AppLink href={routes.project(previous.slug)} className="group">
            <span className="mono-label">← {content.nav.previous}</span>
            <p className="mt-1.5 font-display text-[15px] font-semibold leading-6 tracking-[-0.01em] transition-colors group-hover:text-accent">
              {previous.title}
            </p>
          </AppLink>
        ) : (
          <span />
        )}
        {next && (
          <AppLink href={routes.project(next.slug)} className="group sm:text-right">
            <span className="mono-label">{content.nav.next} →</span>
            <p className="mt-1.5 font-display text-[15px] font-semibold leading-6 tracking-[-0.01em] transition-colors group-hover:text-accent">
              {next.title}
            </p>
          </AppLink>
        )}
      </nav>
    </article>
  )
}
