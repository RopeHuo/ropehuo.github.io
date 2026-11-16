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
    <header className="pb-10 pt-2">
      <p className="mono-label">
        {index} / {label}
      </p>
      <h1 className="mt-4 max-w-4xl font-mono text-[38px] leading-[1.04] tracking-[-0.045em] sm:text-[52px]">
        {title}
      </h1>
      {intro && <p className="mt-5 max-w-2xl text-[15px] leading-7 text-muted">{intro}</p>}
      {children}
    </header>
  )
}
