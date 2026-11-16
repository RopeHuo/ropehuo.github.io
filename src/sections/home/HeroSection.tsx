import type { HomeContent } from '../../../content/types'
import { ActionLink } from '../../ui/ActionLink'

export function HeroSection({ content }: { content: HomeContent['hero'] }) {
  return (
    <section className="pb-12">
      <p className="mono-label">{content.eyebrow}</p>

      <h1 className="mt-5 max-w-[1000px] font-mono text-[40px] leading-[1.04] tracking-[-0.045em] sm:text-[56px] lg:text-[64px]">
        {content.headline.map((line, index) => (
          <span key={line}>
            {index > 0 && <br />}
            {line}
          </span>
        ))}
        <span
          className="blink ml-2 inline-block h-[0.72em] w-[0.42em] translate-y-[0.04em] bg-accent"
          aria-hidden="true"
        />
      </h1>

      <p className="mt-6 max-w-2xl text-[16px] leading-7 text-muted">{content.intro}</p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        {content.actions.map((action) => (
          <ActionLink key={action.label} action={action} />
        ))}
      </div>
    </section>
  )
}
