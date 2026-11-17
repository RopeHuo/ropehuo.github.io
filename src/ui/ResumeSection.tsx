import type { ReactNode } from 'react'

interface ResumeSectionProps {
  index: string
  label: string
  children: ReactNode
}

export function ResumeSection({ index, label, children }: ResumeSectionProps) {
  return (
    <section className="resume-section grid gap-4 border-t border-line py-8 lg:grid-cols-[110px_minmax(0,1fr)] lg:gap-10">
      <div className="flex items-baseline gap-3 lg:block">
        <p className="font-mono text-[9px] text-accent">{index}</p>
        <h2 className="font-display text-[13px] font-semibold leading-6 tracking-[-0.01em] lg:mt-1">
          {label}
        </h2>
      </div>
      <div className="min-w-0">{children}</div>
    </section>
  )
}
