import type { HomeContent } from '../../../content/types'
import { ActionLink } from '../../ui/ActionLink'

export function ContactSection({ content }: { content: HomeContent['contact'] }) {
  return (
    <section className="relative mt-12 overflow-hidden bg-night px-6 py-10 text-night-fg sm:px-10 sm:py-12">
      <div className="dots-dark absolute inset-0 opacity-30" aria-hidden="true" />
      <span
        className="pointer-events-none absolute -bottom-12 right-4 select-none font-mono text-[190px] leading-none text-white/[0.04]"
        aria-hidden="true"
      >
        R.
      </span>

      <div className="relative max-w-2xl">
        <p className="mono-label text-night-muted">{content.label}</p>
        <h2 className="mt-4 font-mono text-[26px] leading-[1.15] tracking-[-0.03em] sm:text-[36px]">
          {content.headline.map((line, index) => (
            <span key={line}>
              {index > 0 && <br />}
              {line}
            </span>
          ))}
        </h2>
        <p className="mt-4 text-[14px] leading-6 text-night-muted">{content.body}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          {content.actions.map((action) => (
            <ActionLink key={action.label} action={action} tone="dark" />
          ))}
        </div>
      </div>
    </section>
  )
}
