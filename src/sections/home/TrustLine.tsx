import type { HomeContent } from '../../../content/types'

export function TrustLine({ content }: { content: HomeContent['trust'] }) {
  return (
    <p className="mt-10 border-t border-line pt-5 font-mono text-[11px] leading-6 text-dim">
      <span className="text-muted">{content.period}</span> {content.organizations.join(' · ')}
      <span className="ml-2 text-dim">{content.suffix}</span>
    </p>
  )
}
