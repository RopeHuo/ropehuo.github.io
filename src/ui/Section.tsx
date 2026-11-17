import type { ReactNode } from 'react'
import { SectionHead } from './SectionHead'

interface SectionProps {
  index: string
  label: string
  note?: string
  children: ReactNode
  className?: string
}

export function Section({ index, label, note, children, className = '' }: SectionProps) {
  return (
    <section className={`py-14 lg:py-20 ${className}`}>
      <SectionHead index={index} label={label} note={note} />
      <div className="mt-8 lg:mt-10">{children}</div>
    </section>
  )
}
