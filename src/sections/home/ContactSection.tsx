import type { HomeContent } from '../../../content/types'
import { ActionLink } from '../../ui/ActionLink'

function ContactKnot({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} fill="none" aria-hidden="true">
      <path
        d="M200 200C150 110 50 130 50 200C50 270 150 290 200 200C250 110 350 130 350 200C350 270 250 290 200 200Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M200 200C170 145 110 155 110 200C110 245 170 255 200 200C230 145 290 155 290 200C290 245 230 255 200 200Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle cx="200" cy="200" r="3" fill="currentColor" />
    </svg>
  )
}

export function ContactSection({ content }: { content: HomeContent['contact'] }) {
  return (
    <section className="relative mt-6 overflow-hidden bg-accent px-6 py-12 text-accent-ink sm:px-10 sm:py-16 lg:px-14">
      <div className="weave pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" />
      <ContactKnot className="pointer-events-none absolute -right-16 -top-20 h-[420px] w-[420px] text-accent-ink/15 sm:h-[520px] sm:w-[520px]" />

      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <p className="mono-label text-accent-ink/70">{content.label}</p>
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-accent-ink/55">
            05 / contact
          </p>
        </div>

        <h2 className="mt-6 max-w-3xl font-display text-[clamp(2rem,4.6vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.05em]">
          {content.headline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <p className="mt-5 max-w-xl text-[14px] leading-7 text-accent-ink/80">{content.body}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {content.actions.map((action) => (
            <ActionLink key={action.label} action={action} tone="accent" />
          ))}
        </div>
      </div>
    </section>
  )
}
