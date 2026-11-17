export function Logo({ className = 'size-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="none">
      <path d="M3.5 3.5h25v25h-25z" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M10 25V8h7.5a4.5 4.5 0 0 1 0 9H11"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="square"
      />
      <path
        d="M16.5 17 24 25"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="square"
      />
      <rect x="25" y="3" width="5" height="5" fill="var(--c-accent)" />
    </svg>
  )
}
