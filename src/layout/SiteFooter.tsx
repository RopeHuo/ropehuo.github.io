import type { SiteContent } from '../../content/types'
import { DotWordmark } from '../ui/DotWordmark'

export function SiteFooter({ site }: { site: SiteContent }) {
  return (
    <footer className="site-footer mt-24 pb-10">
      <div className="border-t border-line pt-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <ul className="flex flex-col gap-1.5">
            {site.contacts.map((contact) => (
              <li key={contact.label}>
                <a
                  href={contact.href}
                  {...(contact.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className="group inline-flex items-center gap-2 font-mono text-[11px] text-muted transition-colors hover:text-ink"
                >
                  <span className="text-dim transition-colors group-hover:text-accent">[ ]</span>
                  {contact.label}
                  {contact.external && <span className="text-dim">↗</span>}
                </a>
              </li>
            ))}
          </ul>

          <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-dim sm:text-right">
            <p className="flex items-center gap-2 sm:justify-end">
              <span className="size-1.5 bg-success" aria-hidden="true" />
              {site.footer.status}
            </p>
            <p className="mt-2">{site.footer.copyright}</p>
            <p className="mt-1 normal-case tracking-normal">{site.footer.builtWith}</p>
          </div>
        </div>

        <div className="mt-16 flex items-end justify-between gap-6">
          <DotWordmark className="w-full max-w-[520px] text-line-strong transition-colors duration-300 hover:text-accent/40" />
          <span className="hidden shrink-0 font-mono text-[9px] uppercase tracking-[0.18em] text-dim sm:block">
            {site.footer.wordmarkLabel}
          </span>
        </div>
      </div>
    </footer>
  )
}
