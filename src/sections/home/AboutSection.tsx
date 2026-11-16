import type { HomeContent } from '../../../content/types'
import { Section } from '../../ui/Section'

export function AboutSection({ content }: { content: HomeContent['about'] }) {
  return (
    <Section label={content.label}>
      <div className="space-y-4 text-[16px] leading-7 text-muted">
        {content.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-8 grid gap-x-10 gap-y-7 sm:grid-cols-2">
        {content.features.map((feature) => (
          <div key={feature.title}>
            <h3 className="font-mono text-[13px] leading-5 text-ink">{feature.title}</h3>
            <p className="mt-1.5 text-[13px] leading-6 text-muted">{feature.body}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
