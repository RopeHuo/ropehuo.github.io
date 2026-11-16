export function Logo({ className = 'size-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect width="24" height="24" fill="currentColor" />
      <path
        d="M7.5 17.5v-11h4.4a3.4 3.4 0 0 1 0 6.8H10"
        fill="none"
        stroke="var(--c-bg)"
        strokeWidth="2"
        strokeLinecap="square"
      />
      <path d="m12.6 13.3 4.1 4.2" stroke="var(--c-bg)" strokeWidth="2" strokeLinecap="square" />
      <rect x="17.5" y="4" width="4" height="4" fill="var(--c-accent)" />
    </svg>
  )
}
