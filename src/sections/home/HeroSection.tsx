import type { HomeContent } from '../../../content/types'
import { ActionLink } from '../../ui/ActionLink'
import { CareerKnot } from '../../ui/CareerKnot'

export function HeroSection({ content }: { content: HomeContent['hero'] }) {
  return (
    <section className="relative border-b border-line pb-10 pt-6 lg:pb-14 lg:pt-10">
      <div className="weave pointer-events-none absolute inset-0 opacity-25" aria-hidden="true" />

      <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-start lg:gap-14">
        <div className="lg:pt-6">
          <p className="mono-label flex items-center gap-2.5">
            <span className="knot-bullet" aria-hidden="true" />
            {content.eyebrow}
          </p>

          <h1 className="mt-6 max-w-[780px] font-display text-[clamp(2.7rem,5.2vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.055em]">
            {content.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-7 max-w-[640px] text-[16px] leading-8 text-muted">{content.intro}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {content.actions.map((action) => (
              <ActionLink key={action.label} action={action} />
            ))}
          </div>
        </div>

        <div className="lg:pt-2">
          <CareerKnot />
        </div>
      </div>

      <div className="relative mt-12 grid grid-cols-2 gap-3 border-t border-line pt-4 font-mono text-[9px] uppercase tracking-[0.14em] text-dim sm:grid-cols-4">
        <span>EST. 2018</span>
        <span>WEB / MULTI-END</span>
        <span>AI AGENT / MCP</span>
        <span className="sm:text-right">SCROLL ↓</span>
      </div>
    </section>
  )
}
