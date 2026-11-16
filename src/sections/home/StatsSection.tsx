import type { HomeContent } from '../../../content/types'
import { Section } from '../../ui/Section'

export function StatsSection({ content }: { content: HomeContent['stats'] }) {
  return (
    <Section label={content.label}>
      <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
        {content.items.map((stat) => (
          <div key={stat.label}>
            <p className="font-mono text-[44px] leading-none tracking-[-0.05em]">{stat.value}</p>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-dim">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
