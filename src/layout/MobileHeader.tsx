import type { SiteContent, UiCopy } from '../../content/types'
import { AppLink } from '../logic/AppLink'
import { routes } from '../logic/routes'
import { CloseIcon, MenuIcon } from '../ui/Icons'
import { Logo } from '../ui/Logo'
import { ThemeToggle } from '../ui/ThemeToggle'

interface MobileHeaderProps {
  site: SiteContent
  labels: UiCopy
  activeHref?: string
  open: boolean
  onToggle: () => void
}

export function MobileHeader({ site, labels, activeHref, open, onToggle }: MobileHeaderProps) {
  return (
    <>
      <header className="site-mobile-header sticky top-0 z-50 flex h-14 items-center justify-between border-b border-line bg-bg/95 px-5 backdrop-blur lg:hidden">
        <AppLink href={routes.home} className="flex items-center gap-2.5" ariaLabel={`${site.name} ${labels.homeLabel}`}>
          <Logo className="size-5 text-ink" />
          <span className="font-mono text-[12px] tracking-tight">{site.wordmark}</span>
        </AppLink>

        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-ink"
        >
          {open ? labels.close : labels.menu}
          {open ? <CloseIcon className="size-4" /> : <MenuIcon className="size-4" />}
        </button>
      </header>

      {open && (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 top-14 z-40 max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-b border-line bg-bg px-5 pb-8 pt-5 lg:hidden"
        >
          <nav aria-label={labels.mobileNav} className="flex flex-col">
            {site.nav.map((item) => {
              const active = item.href === activeHref
              return (
                <AppLink
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 border-l py-2.5 pl-3 font-mono text-[14px] transition-colors ${
                    active
                      ? 'border-accent text-ink'
                      : 'border-transparent text-muted hover:text-ink'
                  }`}
                >
                  <span className={`w-7 text-[10px] ${active ? 'text-accent' : 'text-dim'}`}>
                    [{item.index}]
                  </span>
                  {item.label}
                </AppLink>
              )
            })}
          </nav>

          <div className="mt-8 flex flex-col gap-2 border-t border-line pt-5 font-mono text-[11px]">
            {site.contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                {...(contact.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="text-muted"
              >
                [ ] {contact.label}
                {contact.external && ' ↗'}
              </a>
            ))}
          </div>

          <div className="mt-5 border-t border-line pt-4">
            <ThemeToggle labels={labels} />
          </div>
        </div>
      )}
    </>
  )
}
