import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import type { SiteContent, UiCopy } from '../../content/types'
import { AppLink } from '../logic/AppLink'
import { routes } from '../logic/routes'
import { CloseIcon, MenuIcon } from '../ui/Icons'
import { Logo } from '../ui/Logo'
import { ThemeToggle } from '../ui/ThemeToggle'

interface MastheadProps {
  site: SiteContent
  labels: UiCopy
  activeHref?: string
}

export function Masthead({ site, labels, activeHref }: MastheadProps) {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="site-masthead sticky top-0 z-50 border-b border-line bg-bg/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[1240px] items-center justify-between gap-6 px-5 sm:px-8 lg:h-[72px] lg:px-10">
        <AppLink
          href={routes.home}
          className="group flex shrink-0 items-center gap-3"
          ariaLabel={`${site.name} ${labels.homeLabel}`}
        >
          <Logo className="size-7 text-ink transition-colors group-hover:text-accent" />
          <span className="flex flex-col leading-none">
            <span className="font-mono text-[13px] tracking-[-0.02em]">{site.wordmark}</span>
            <span className="mt-1.5 font-mono text-[8px] uppercase tracking-[0.18em] text-dim">
              {site.railTagline}
            </span>
          </span>
        </AppLink>

        <nav aria-label={labels.mainNav} className="hidden items-center gap-7 lg:flex">
          {site.nav.map((item) => {
            const active = item.href === activeHref
            return (
              <AppLink
                key={item.href}
                href={item.href}
                className={`group relative py-2 font-mono text-[11px] tracking-[0.06em] transition-colors ${
                  active ? 'text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                <span className="mr-1.5 text-[9px] text-dim">{item.index}</span>
                {item.label}
                <span
                  className={`absolute inset-x-0 bottom-0 h-px origin-left bg-accent transition-transform duration-200 ${
                    active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                  aria-hidden="true"
                />
              </AppLink>
            )
          })}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <ThemeToggle labels={labels} />
          </div>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? labels.close : labels.menu}
            className="inline-flex size-9 items-center justify-center border border-line text-muted transition-colors hover:border-ink hover:text-ink lg:hidden"
          >
            {open ? <CloseIcon className="size-4" /> : <MenuIcon className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-bg lg:hidden">
          <nav aria-label={labels.mobileNav} className="px-5 pb-4 pt-2 sm:px-8">
            {site.nav.map((item) => {
              const active = item.href === activeHref
              return (
                <AppLink
                  key={item.href}
                  href={item.href}
                  className="group flex items-baseline gap-4 border-b border-line py-4"
                >
                  <span
                    className={`font-mono text-[9px] ${active ? 'text-accent' : 'text-dim'}`}
                  >
                    {item.index}
                  </span>
                  <span
                    className={`font-display text-[26px] font-semibold tracking-[-0.04em] ${
                      active ? 'text-accent' : 'text-ink'
                    }`}
                  >
                    {item.label}
                  </span>
                </AppLink>
              )
            })}
          </nav>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line px-5 py-4 sm:px-8">
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {site.contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  {...(contact.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className="font-mono text-[10px] text-muted transition-colors hover:text-accent"
                >
                  {contact.label}
                  {contact.external ? ' ↗' : ''}
                </a>
              ))}
            </div>
            <ThemeToggle labels={labels} />
          </div>
        </div>
      )}
    </header>
  )
}
