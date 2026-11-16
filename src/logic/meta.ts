import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { siteContent } from '../../content/site'

function setMeta(attribute: 'name' | 'property', key: string, value: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', value)
}

interface PageMeta {
  title?: string
  description?: string
}

export function usePageMeta({ title, description }: PageMeta = {}) {
  const { pathname } = useLocation()

  useEffect(() => {
    const fullTitle = title
      ? `${title} · ${siteContent.name}`
      : siteContent.meta.defaultTitle
    const desc = description || siteContent.meta.defaultDescription
    const url = `${siteContent.url}${pathname}`

    document.title = fullTitle
    setMeta('name', 'description', desc)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', desc)
    setMeta('property', 'og:url', url)

    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (canonical) canonical.href = url
  }, [title, description, pathname])
}
