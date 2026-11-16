import type { SiteContent, UiCopy } from '../../content/types'
import { AppLink } from '../logic/AppLink'
import { routes } from '../logic/routes'
import { Logo } from '../ui/Logo'
import { ThemeToggle } from '../ui/ThemeToggle'

interface SidebarProps {
  site: SiteContent
  labels: UiCopy
  activeHref?: string
}

export function Sidebar({ site, labels, activeHref }: SidebarProps) {
  return (
    <aside className="site-sidebar fixed inset-y-0 left-0 z-40 hidden w-[284px] flex-col justify-between px-6 py-6 lg:flex">
      <div>
        <AppLink href={routes.home} className="inline-flex items-center gap-3" ariaLabel={`${site.name} ${labels.homeLabel}`}>
          <Logo className="size-6 text-ink" />
          <span className="font-mono text-[13px] tracking-tight">{site.wordmark}</span>
        </AppLink>
        <p className="mt-2 pl-9 font-mono text-[9px] uppercase tracking-[0.18em] text-dim">
          {site.railTagline}
        </p>

        <nav aria-label={labels.mainNav} className="mt-12 flex flex-col">
          {site.nav.map((item) => {
            const active = item.href === activeHref
            return (
              <AppLink
                key={item.href}
                href={item.href}
                className={`group flex items-center gap-3 border-l py-1.5 pl-3 font-mono text-[14px] transition-colors ${
                  active
                    ? 'border-accent text-ink'
                    : 'border-transparent text-muted hover:text-ink'
                }`}
              >
                <span className={`w-6 text-[10px] ${active ? 'text-accent' : 'text-dim'}`}>
                  [{item.index}]
                </span>
                <span>{item.label}</span>
              </AppLink>
            )
          })}
        </nav>
      </div>

      <div>
        <div className="flex flex-col gap-1.5 border-t border-line pt-4">
          {site.contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              {...(contact.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="group flex items-center gap-2 font-mono text-[11px] text-muted transition-colors hover:text-ink"
            >
              <span className="text-dim transition-colors group-hover:text-accent">[ ]</span>
              {contact.label}
              {contact.external && <span className="text-dim">↗</span>}
            </a>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
          <ThemeToggle labels={labels} />
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-dim">
            {site.footer.railCopyright}
          </span>
        </div>
      </div>
    </aside>
  )
}
