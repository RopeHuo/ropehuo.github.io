import type { SiteContent } from '../../content/types'
import { AppLink } from '../logic/AppLink'
import { DotWordmark } from '../ui/DotWordmark'
import { Logo } from '../ui/Logo'

export function SiteFooter({ site }: { site: SiteContent }) {
  return (
    <footer className="site-footer mt-24 pb-10">
      <div className="border-t border-line pt-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Logo className="size-6 text-ink" />
              <span className="font-mono text-[13px] tracking-[-0.02em]">{site.wordmark}</span>
            </div>
            <p className="mt-4 max-w-xs text-[13px] leading-6 text-muted">{site.tagline}</p>
            <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.16em] text-dim">
              {site.role}
            </p>
          </div>

          <div>
            <p className="mono-label">Index</p>
            <ul className="mt-4 space-y-2">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <AppLink
                    href={item.href}
                    className="group inline-flex items-baseline gap-2 font-mono text-[11px] text-muted transition-colors hover:text-ink"
                  >
                    <span className="text-[9px] text-dim transition-colors group-hover:text-accent">
                      {item.index}
                    </span>
                    {item.label}
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mono-label">Elsewhere</p>
            <ul className="mt-4 space-y-2">
              {site.contacts.map((contact) => (
                <li key={contact.label}>
                  <a
                    href={contact.href}
                    {...(contact.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className="group inline-flex items-baseline gap-2 font-mono text-[11px] text-muted transition-colors hover:text-ink"
                  >
                    <span className="text-dim transition-colors group-hover:text-accent">[ ]</span>
                    {contact.label}
                    {contact.external && <span className="text-dim">↗</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-line pt-5 sm:flex-row sm:items-end sm:justify-between">
          <DotWordmark className="w-full max-w-[460px] text-line-strong transition-colors duration-300 hover:text-accent/40" />
          <div className="shrink-0 font-mono text-[9px] uppercase tracking-[0.12em] text-dim sm:text-right">
            <p className="flex items-center gap-2 sm:justify-end">
              <span className="size-1.5 bg-success" aria-hidden="true" />
              {site.footer.status}
            </p>
            <p className="mt-2">{site.footer.copyright}</p>
            <p className="mt-1">{site.footer.builtWith}</p>
            <p className="mt-1">strand / v1.0</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
