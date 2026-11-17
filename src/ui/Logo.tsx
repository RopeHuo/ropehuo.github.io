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
        strokeWidth="3.1"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <rect x="19.1" y="23.1" width="5.8" height="5.8" fill={ember} />
    </svg>
  )
}
