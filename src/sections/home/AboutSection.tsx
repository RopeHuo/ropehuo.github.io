import type { HomeContent } from '../../../content/types'
import { Section } from '../../ui/Section'

export function AboutSection({ content }: { content: HomeContent['about'] }) {
  return (
    <Section index="02" label={content.label} note="profile / 08 years">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
        <div className="max-w-2xl space-y-4 text-[16px] leading-8 text-muted">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="border-t border-line">
          {content.features.map((feature, index) => (
            <div
              key={feature.title}
              className="grid grid-cols-[28px_minmax(0,1fr)] gap-3 border-b border-line py-4 sm:grid-cols-[36px_minmax(0,1fr)] sm:gap-4"
            >
              <span className="pt-1 font-mono text-[9px] text-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-display text-[15px] font-semibold leading-6 tracking-[-0.02em]">
                  {feature.title}
                </h3>
                <p className="mt-1 text-[13px] leading-6 text-muted">{feature.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
