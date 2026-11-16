import type { ActionItem } from '../../content/types'
import { AppLink } from '../logic/AppLink'

const LIGHT_STYLES = {
  primary: 'btn-solid',
  secondary: 'btn-outline',
  link: 'btn-ghost',
} as const

const DARK_STYLES = {
  primary: 'btn-invert',
  secondary: 'btn-night-outline',
  link: 'btn-night-ghost',
} as const

interface ActionLinkProps {
  action: ActionItem
  tone?: 'light' | 'dark'
}

export function ActionLink({ action, tone = 'light' }: ActionLinkProps) {
  const emphasis = action.emphasis ?? 'primary'
  const className = (tone === 'dark' ? DARK_STYLES : LIGHT_STYLES)[emphasis]
  const content = (
    <>
      {action.label}
      <span aria-hidden="true">{action.external ? '↗' : '→'}</span>
    </>
  )

  if (action.external) {
    return (
      <a href={action.href} target="_blank" rel="noreferrer" className={className}>
        {content}
      </a>
    )
  }

  return (
    <AppLink href={action.href} className={className}>
      {content}
    </AppLink>
  )
}
