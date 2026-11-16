import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import type { UiCopy } from '../../content/types'

export function CodeBlock({ children, labels }: { children?: ReactNode; labels: UiCopy }) {
  const ref = useRef<HTMLPreElement>(null)
  const timer = useRef<number | undefined>(undefined)
  const [copied, setCopied] = useState(false)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(ref.current?.innerText ?? '')
      setCopied(true)
      timer.current = window.setTimeout(() => setCopied(false), 1500)
    } catch {
      // 剪贴板不可用时静默失败
    }
  }

  return (
    <div className="code-block">
      <div className="code-bar">
        <span>{labels.code}</span>
        <button type="button" onClick={onCopy}>
          {copied ? labels.copied : labels.copy}
        </button>
      </div>
      <pre ref={ref}>{children}</pre>
    </div>
  )
}
