import { Outlet, useLocation } from 'react-router-dom'
import type { SiteContent, UiCopy } from '../../content/types'
import { getActiveHref } from '../logic/nav'
import { useRouteScroll } from '../logic/useRouteScroll'
import { Masthead } from './Masthead'
import { SiteFooter } from './SiteFooter'

interface LayoutProps {
  site: SiteContent
  labels: UiCopy
}

export function Layout({ site, labels }: LayoutProps) {
  const { pathname } = useLocation()
  const activeHref = getActiveHref(site.nav, pathname)

  useRouteScroll()

  return (
    <div className="min-h-dvh">
      <a href="#main" className="skip-link">
        {labels.skipToContent}
      </a>

      <Masthead site={site} labels={labels} activeHref={activeHref} />

      <div className="site-body">
        <div className="site-shell mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
          <main id="main" className="site-main pt-10 lg:pt-14">
            <Outlet />
          </main>
          <SiteFooter site={site} />
        </div>
      </div>
    </div>
  )
}
