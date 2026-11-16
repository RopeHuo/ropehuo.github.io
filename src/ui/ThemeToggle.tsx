import { useEffect, useState } from 'react'
import type { UiCopy } from '../../content/types'
import { applyTheme, getInitialTheme } from '../logic/theme'
import type { Theme } from '../logic/theme'
import { MoonIcon, SunIcon } from './Icons'

export function ThemeToggle({ labels }: { labels: UiCopy }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme)}
      aria-label={nextTheme === 'dark' ? labels.themeToDark : labels.themeToLight}
      title={nextTheme === 'dark' ? labels.themeToDark : labels.themeToLight}
      className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-dim transition-colors hover:text-ink"
    >
      {theme === 'dark' ? (
        <SunIcon className="size-3.5" />
      ) : (
        <MoonIcon className="size-3.5" />
      )}
      <span>{labels.theme}</span>
    </button>
  )
}
