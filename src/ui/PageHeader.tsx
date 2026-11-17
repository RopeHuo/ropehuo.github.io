import type { ReactNode } from 'react'

interface PageHeaderProps {
  index: string
  label: string
  title: string
  intro?: string
  children?: ReactNode
}

export function PageHeader({ index, label, title, intro, children }: PageHeaderProps) {
  return (
    <header className="border-b border-line pb-10 pt-4 lg:pb-14">
      <div className="flex items-start justify-between gap-8">
        <div className="min-w-0">
          <p className="mono-label">
            <span className="text-accent">{index}</span> / {label}
          </p>
          <h1 className="mt-5 max-w-4xl text-balance font-display text-[clamp(2.6rem,5.4vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.05em]">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-[15px] leading-8 text-muted">{intro}</p>
          )}
        </div>
        <span className="fig-label hidden shrink-0 pt-1 text-right sm:block">
          ropehuo
          <br />
          {label}
        </span>
      </div>
      {children}
    </header>
  )
}
