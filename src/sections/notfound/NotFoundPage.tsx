import type { NotFoundContent } from '../../../content/types'
import { ActionLink } from '../../ui/ActionLink'

export function NotFoundPage({ content }: { content: NotFoundContent }) {
  return (
    <div className="py-20">
      <p className="mono-label">{content.label}</p>
      <h1 className="mt-4 font-mono text-[96px] leading-none tracking-[-0.06em] sm:text-[140px]">
        {content.code}
      </h1>

      <pre className="mt-8 max-w-md border border-line bg-panel p-4 font-mono text-[12px] leading-6 text-muted">
        {content.command}
      </pre>

      <p className="mt-6 max-w-md text-[14px] leading-6 text-muted">{content.message}</p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        {content.actions.map((action) => (
          <ActionLink key={action.label} action={action} />
        ))}
      </div>
    </div>
  )
}
