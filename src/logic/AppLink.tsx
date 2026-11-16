import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface AppLinkProps {
  href: string
  children: ReactNode
  className?: string
  ariaLabel?: string
  onClick?: () => void
}

/**
 * 路由适配器。
 * 内容层只给普通 href，样式层只关心渲染；换路由方案时只需要改这个文件。
 */
export function AppLink({ href, children, className, ariaLabel, onClick }: AppLinkProps) {
  return (
    <Link to={href} className={className} aria-label={ariaLabel} onClick={onClick}>
      {children}
    </Link>
  )
}
