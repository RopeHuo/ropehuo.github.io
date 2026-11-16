import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** 页面切换时回到顶部；带 hash 时交给目标页面自己定位。 */
export function useRouteScroll() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])
}
