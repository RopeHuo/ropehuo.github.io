import type { HomeContent } from '../../../content/types'

export function TrustLine({ content }: { content: HomeContent['trust'] }) {
  return (
    <div className="mt-12 flex flex-col gap-2 border-y border-line py-3 sm:flex-row sm:items-center sm:justify-between">
      <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-dim">
        <span className="text-ink">{content.period}</span>
        <span className="mx-2 text-line-strong">/</span>
        {content.organizations.join(' · ')}
      </p>
      <p className="font-mono text-[10px] text-dim">{content.suffix}</p>
    </div>
  )
}
