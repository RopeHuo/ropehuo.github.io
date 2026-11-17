import type { NotFoundContent } from '../../../content/types'
import { ActionLink } from '../../ui/ActionLink'

function CutStrand() {
  return (
    <svg viewBox="0 0 420 90" className="w-full max-w-lg text-line-strong" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="square">
        <path d="M0 45h150" />
        <path d="M270 45h150" />
      </g>
      <g stroke="var(--c-accent)" strokeWidth="1.4" strokeLinecap="square">
        <path d="M150 45l-12-11M150 45l-15 7M150 45l-7 14" />
        <path d="M270 45l12-11M270 45l15 7M270 45l7 14" />
      </g>
      <text
        x="210"
        y="24"
        textAnchor="middle"
        fontFamily="var(--font-stack-mono)"
        fontSize="9"
        letterSpacing="1.6"
        fill="var(--c-dim)"
      >
        FIG. 404 — CUT
      </text>
    </svg>
  )
}

export function NotFoundPage({ content }: { content: NotFoundContent }) {
  return (
    <div className="py-16 lg:py-24">
      <p className="mono-label">{content.label}</p>

      <h1 className="mt-6 font-display text-[clamp(6rem,18vw,12rem)] font-semibold leading-[0.8] tracking-[-0.07em]">
        {content.code}
      </h1>

      <div className="mt-10">
        <CutStrand />
      </div>

      <pre className="mt-8 max-w-md border border-line bg-panel p-4 font-mono text-[12px] leading-6 text-muted">
        {content.command}
      </pre>

      <p className="mt-6 max-w-md text-[14px] leading-7 text-muted">{content.message}</p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        {content.actions.map((action) => (
          <ActionLink key={action.label} action={action} />
        ))}
      </div>
    </div>
  )
}
