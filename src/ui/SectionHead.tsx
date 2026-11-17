interface SectionHeadProps {
  index: string
  label: string
  note?: string
}

export function SectionHead({ index, label, note }: SectionHeadProps) {
  return (
    <div className="section-head">
      <p className="mono-label">
        <span className="text-accent">{index}</span> / {label}
      </p>
      {note && <p className="mono-label hidden text-right sm:block">{note}</p>}
    </div>
  )
}
