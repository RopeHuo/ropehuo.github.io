import { useEffect } from 'react'

/** 深链接锚点定位，等目标内容渲染后滚动。 */
export function useHashScroll(hash: string) {
  useEffect(() => {
    if (!hash) return
    const id = hash.slice(1)
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 60)
    return () => window.clearTimeout(timer)
  }, [hash])
}
