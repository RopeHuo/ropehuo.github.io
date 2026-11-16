import { useEffect, useState } from 'react'
import type { RefObject } from 'react'

export interface TocItem {
  id: string
  text: string
  level: number
}

/**
 * 从渲染后的文章正文里提取 h2/h3，并跟随滚动更新当前章节。
 * 不依赖具体页面或内容结构。
 */
export function useToc(containerRef: RefObject<HTMLElement | null>, contentKey: string | undefined) {
  const [toc, setToc] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const root = containerRef.current
    if (!root) {
      setToc([])
      return
    }

    const headings = Array.from(root.querySelectorAll<HTMLHeadingElement>('h2, h3'))
    setToc(
      headings.map((heading) => ({
        id: heading.id,
        text: heading.textContent ?? '',
        level: heading.tagName === 'H2' ? 2 : 3,
      })),
    )
    setActiveId(headings[0]?.id ?? '')
  }, [containerRef, contentKey])

  useEffect(() => {
    if (!toc.length) return

    const onScroll = () => {
      let current = toc[0]?.id ?? ''
      for (const item of toc) {
        const element = document.getElementById(item.id)
        if (!element) continue
        if (element.getBoundingClientRect().top <= 140) current = item.id
      }
      setActiveId(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [toc])

  return { toc, activeId, setActiveId }
}
