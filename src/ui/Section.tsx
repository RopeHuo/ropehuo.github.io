import type { ReactNode } from 'react'

interface SectionProps {
  label: string
  children: ReactNode
  className?: string
}

export function Section({ label, children, className = '' }: SectionProps) {
  return (
    <section
      className={`grid gap-5 border-t border-line py-12 lg:grid-cols-[150px_minmax(0,1fr)] lg:gap-12 ${className}`}
    >
      <h2 className="font-sans text-[13px] leading-6 text-ink">{label}</h2>
      <div className="min-w-0">{children}</div>
    </section>
  )
}
