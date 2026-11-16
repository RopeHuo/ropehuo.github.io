import type { ProjectItem, ResumeContent } from '../../../content/types'
import { AppLink } from '../../logic/AppLink'
import { routes } from '../../logic/routes'
import { PrinterIcon } from '../../ui/Icons'
import { ResumeSection } from '../../ui/ResumeSection'

interface ResumePageProps {
  content: ResumeContent
  projects: ProjectItem[]
  name: string
}

export function ResumePage({ content, projects, name }: ResumePageProps) {
  return (
    <>
      <header className="resume-header pb-10 pt-2">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="mono-label">
              {content.header.index} / {content.header.label}
            </p>
            <h1 className="resume-title mt-4 font-mono text-[44px] leading-[1.02] tracking-[-0.045em] sm:text-[64px]">
              {name}
            </h1>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-dim">
              {content.header.role} · {content.header.experience}
            </p>
          </div>

          <button type="button" onClick={() => window.print()} className="no-print btn-outline">
            <PrinterIcon className="size-3.5" />
            {content.header.printLabel}
          </button>
        </div>

        <p className="mt-6 max-w-4xl text-balance text-[15px] leading-7 text-muted">
          {content.intro}
        </p>

        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px]">
          {content.contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              {...(contact.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="text-muted transition-colors hover:text-accent"
            >
              {contact.label}: {contact.value}
            </a>
          ))}
        </div>
      </header>

      <ResumeSection index="01" label={content.sections.skills}>
        <div className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
          {content.skillGroups.map((group) => (
            <div key={group.label} className="print-avoid-break">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.1em] text-dim">
                {group.label}
              </h3>
              <p className="mt-1.5 text-[13px] leading-6 text-muted">{group.items.join(' / ')}</p>
            </div>
          ))}
        </div>
      </ResumeSection>

      <ResumeSection index="02" label={content.sections.experience}>
        <div className="space-y-8">
          {content.experience.map((job) => (
            <div key={job.company} className="print-avoid-break">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-mono text-[14px] leading-6 text-ink">
                  {job.company}
                  <span className="ml-2 text-[11px] text-muted">{job.role}</span>
                </h3>
                <span className="font-mono text-[10px] text-dim">{job.period}</span>
              </div>
              <ul className="mt-3 space-y-1.5">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-[13px] leading-6 text-muted">
                    <span
                      className="mt-[0.68rem] size-1 shrink-0 bg-accent"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ResumeSection>

      <ResumeSection index="03" label={content.sections.projects}>
        <ul className="space-y-5">
          {projects.map((project) => (
            <li key={project.slug} className="print-avoid-break">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <AppLink
                  href={routes.project(project.slug)}
                  className="font-mono text-[13px] leading-6 transition-colors hover:text-accent"
                >
                  {project.title}
                  <span className="ml-2 font-sans text-[11px] text-dim">{project.role}</span>
                </AppLink>
                <span className="font-mono text-[10px] text-dim">{project.period}</span>
              </div>
              <p className="mt-1 text-[12px] leading-5 text-muted">{project.summary}</p>
            </li>
          ))}
        </ul>
      </ResumeSection>

      <ResumeSection index="04" label={content.sections.education}>
        <div className="print-avoid-break">
          <p className="font-mono text-[13px]">
            {content.education.degree} · {content.education.major}
          </p>
        </div>
      </ResumeSection>

      <ResumeSection index="05" label={content.sections.writing}>
        <ul className="space-y-2.5">
          {content.articles.map((article) => (
            <li key={article.href}>
              <a
                href={article.href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-line pb-2 text-[13px] transition-colors hover:text-accent"
              >
                <span>{article.title}</span>
                <span className="font-mono text-[10px] text-dim">{article.source} ↗</span>
              </a>
            </li>
          ))}
        </ul>
      </ResumeSection>

      <p className="no-print mt-6 font-mono text-[10px] leading-5 text-dim">
        {content.header.printNote}
      </p>
    </>
  )
}
