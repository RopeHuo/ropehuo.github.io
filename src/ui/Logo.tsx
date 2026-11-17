interface LogoProps {
  className?: string
  ember?: string
}

export function Logo({ className = 'size-7', ember = 'var(--c-accent)' }: LogoProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="none">
      <path
        d="M8 26V4h9a6 6 0 0 1 0 12h-5l10 10"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <rect x="19.5" y="23.5" width="5" height="5" fill={ember} />
    </svg>
  )
}
