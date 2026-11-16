import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import type { SiteContent, UiCopy } from '../../content/types'
import { getActiveHref } from '../logic/nav'
import { useRouteScroll } from '../logic/useRouteScroll'
import { MobileHeader } from './MobileHeader'
import { Sidebar } from './Sidebar'
import { SiteFooter } from './SiteFooter'

interface LayoutProps {
  site: SiteContent
  labels: UiCopy
}

export function Layout({ site, labels }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const activeHref = getActiveHref(site.nav, pathname)

  useRouteScroll()

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!menuOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previous
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  return (
    <div className="min-h-dvh">
      <a href="#main" className="skip-link">
        {labels.skipToContent}
      </a>

      <Sidebar site={site} labels={labels} activeHref={activeHref} />
      <MobileHeader
        site={site}
        labels={labels}
        activeHref={activeHref}
        open={menuOpen}
        onToggle={() => setMenuOpen((value) => !value)}
      />

      <div className="site-body lg:pl-[284px]">
        <div className="site-shell mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10">
          <main id="main" className="site-main pt-8 lg:pt-12">
            <Outlet />
          </main>
          <SiteFooter site={site} />
        </div>
      </div>
    </div>
  )
}
