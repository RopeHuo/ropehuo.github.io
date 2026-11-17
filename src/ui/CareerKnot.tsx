const MONO = 'var(--font-stack-mono)'
const SANS = 'var(--font-stack-sans)'

const NODES = [
  { y: 330, year: '2018', label: 'WEB' },
  { y: 260, year: '2020', label: 'MULTI-END' },
  { y: 190, year: '2022', label: 'MICRO-FRONTEND' },
  { y: 120, year: '2024', label: 'AI AGENT' },
]

export function CareerKnot() {
  return (
    <figure className="plate relative bg-panel/70 p-4 sm:p-5">
      <div className="grid-paper pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

      <svg
        viewBox="0 0 420 420"
        className="relative w-full"
        role="img"
        aria-label="RopeHuo 的实践路径：2018 Web，2020 多端，2022 微前端，2024 AI Agent；现在是软件工程师，工作覆盖前端、AI 与全栈"
      >
        <g
          stroke="currentColor"
          strokeWidth="1"
          className="text-line-strong"
          fill="none"
          vectorEffect="non-scaling-stroke"
        >
          {[30, 65, 100, 155, 225, 295, 365, 400].map((y) => (
            <line key={y} x1="112" x2={y % 65 === 0 ? 120 : 117} y1={y} y2={y} />
          ))}
        </g>

        <g
          fontFamily={MONO}
          fontSize="8"
          letterSpacing="1.6"
          fill="var(--c-dim)"
          textAnchor="middle"
        >
          <text transform="translate(48 210) rotate(-90)">PRACTICE / 2018 — NOW</text>
        </g>

        <path
          d="M132 392 L132 80"
          pathLength="1"
          className="draw-line text-ink"
          stroke="currentColor"
          strokeWidth="1.4"
          fill="none"
        />

        <path
          d="M132 50 C120 28 94 30 94 50 C94 70 120 72 132 50 C144 28 170 30 170 50 C170 70 144 72 132 50"
          pathLength="1"
          className="draw-line text-accent"
          stroke="currentColor"
          strokeWidth="1.6"
          fill="none"
          style={{ animationDelay: '0.65s' }}
        />
        <circle cx="132" cy="50" r="3" fill="var(--c-accent)" />

        {NODES.map((node, index) => (
          <g key={node.year}>
            <circle
              cx="132"
              cy={node.y}
              r="14"
              fill="var(--c-panel)"
              stroke="currentColor"
              strokeWidth="1.2"
              className="text-ink"
              pathLength="1"
            />
            {index === NODES.length - 1 && (
              <circle cx="132" cy={node.y} r="4" fill="var(--c-accent)" />
            )}
            <line
              x1="147"
              x2="170"
              y1={node.y}
              y2={node.y}
              stroke="currentColor"
              strokeWidth="1"
              className="text-line-strong"
            />
            <rect
              x="170"
              y={node.y - 2}
              width="4"
              height="4"
              fill={index === NODES.length - 1 ? 'var(--c-accent)' : 'var(--c-dim)'}
            />
            <text
              x="184"
              y={node.y - 3}
              fontFamily={MONO}
              fontSize="8"
              letterSpacing="1.4"
              fill="var(--c-dim)"
            >
              {node.year}
            </text>
            <text
              x="184"
              y={node.y + 11}
              fontFamily={SANS}
              fontSize="12"
              fontWeight="600"
              letterSpacing="0.2"
              fill="var(--c-ink)"
            >
              {node.label}
            </text>
          </g>
        ))}

        <g>
          <line
            x1="147"
            x2="170"
            y1="50"
            y2="50"
            stroke="var(--c-accent)"
            strokeWidth="1"
          />
          <rect x="170" y="48" width="4" height="4" fill="var(--c-accent)" />
          <text
            x="184"
            y="47"
            fontFamily={MONO}
            fontSize="8"
            letterSpacing="1.4"
            fill="var(--c-accent)"
          >
            NOW
          </text>
          <text
            x="184"
            y="61"
            fontFamily={SANS}
            fontSize="12"
            fontWeight="600"
            letterSpacing="0.2"
            fill="var(--c-ink)"
          >
            SOFTWARE ENGINEER
          </text>
          <text
            x="184"
            y="76"
            fontFamily={MONO}
            fontSize="7"
            letterSpacing="1"
            fill="var(--c-dim)"
          >
            FRONTEND · AI · FULL-STACK
          </text>
        </g>

        <text x="184" y="24" fontFamily={MONO} fontSize="8" letterSpacing="1.4" fill="var(--c-dim)">
          FIG. 01 — ONE LINE, THREE STRANDS
        </text>
      </svg>

      <figcaption className="relative mt-2 flex items-center justify-between gap-4 border-t border-line pt-2 font-mono text-[8px] uppercase tracking-[0.14em] text-dim">
        <span>one line / three strands</span>
        <span>2018 — now</span>
      </figcaption>
    </figure>
  )
}
