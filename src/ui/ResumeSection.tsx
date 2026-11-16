import type { ReactNode } from 'react'

interface ResumeSectionProps {
  index: string
  label: string
  children: ReactNode
}

export function ResumeSection({ index, label, children }: ResumeSectionProps) {
  return (
    <section className="resume-section grid gap-5 border-t border-line py-9 lg:grid-cols-[150px_minmax(0,1fr)] lg:gap-12">
      <div>
        <p className="font-mono text-[10px] text-accent">{index}</p>
        <h2 className="mt-1 font-sans text-[13px] leading-6 text-ink">{label}</h2>
      </div>
      <div className="min-w-0">{children}</div>
    </section>
  )
}
