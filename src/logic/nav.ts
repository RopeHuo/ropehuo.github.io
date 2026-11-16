import type { NavItem } from '../../content/types'

export function getActiveHref(nav: NavItem[], pathname: string): string | undefined {
  return nav.find((item) =>
    item.end ? pathname === item.href : pathname === item.href || pathname.startsWith(`${item.href}/`),
  )?.href
}
