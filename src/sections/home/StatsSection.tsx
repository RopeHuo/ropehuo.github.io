import type { HomeContent } from '../../../content/types'
import { Section } from '../../ui/Section'

export function StatsSection({ content }: { content: HomeContent['stats'] }) {
  return (
    <Section index="04" label={content.label} note="practice / 03 tracks">
      <div className="grid grid-cols-2 border-t border-line sm:grid-cols-4">
        {content.items.map((stat, index) => (
          <div
            key={stat.label}
            className={`border-b border-line py-6 sm:border-b-0 ${
              index > 0 ? 'sm:border-l sm:border-line sm:pl-6' : ''
            }`}
          >
            <p className="font-mono text-[40px] leading-none tracking-[-0.05em] sm:text-[48px]">
              {stat.value}
            </p>
            <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.14em] text-dim">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
