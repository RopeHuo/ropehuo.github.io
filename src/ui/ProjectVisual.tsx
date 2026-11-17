import type { ReactNode } from 'react'
import type { ProjectCategory, ProjectItem } from '../../content/types'

type Visual = 'loop' | 'braid' | 'grid' | 'branch' | 'portal' | 'spool'

const VISUALS: Record<string, Visual> = {
  'qa-agent': 'loop',
  'ai-dev-assistant': 'braid',
  'wecom-aigc': 'grid',
  'mini-program-saas': 'branch',
  'merchant-portal-micro-frontend': 'portal',
  'multi-end-points-mall': 'spool',
}

const FALLBACK_VISUAL: Record<ProjectCategory, Visual> = {
  ai: 'loop',
  arch: 'portal',
  multi: 'branch',
}

const LABELS: Record<Visual, string> = {
  loop: 'agent / quality loop',
  braid: 'ai / conversation',
  grid: 'aigc / asset grid',
  branch: 'mini program / saas',
  portal: 'micro frontend / portal',
  spool: 'multi-end / spool',
}

function SvgLabel({
  x,
  y,
  children,
  anchor = 'middle',
  accent = false,
}: {
  x: number
  y: number
  children: string
  anchor?: 'start' | 'middle' | 'end'
  accent?: boolean
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fontFamily="var(--font-stack-mono)"
      fontSize="9"
      letterSpacing="1.2"
      fill={accent ? 'var(--c-accent)' : 'var(--c-dim)'}
    >
      {children}
    </text>
  )
}

function Frame({
  children,
  label,
  index,
  className,
  compact,
}: {
  children: ReactNode
  label: string
  index: number
  className: string
  compact: boolean
}) {
  return (
    <div className={`relative overflow-hidden bg-panel ${className}`} aria-hidden="true">
      <div className="grid-paper pointer-events-none absolute inset-0 opacity-50" />
      <svg viewBox="0 0 400 250" className="relative h-full w-full" fill="none">
        {children}
      </svg>
      <span className="absolute left-3 top-2.5 font-mono text-[7px] uppercase tracking-[0.16em] text-dim">
        {label}
      </span>
      <span className="absolute bottom-2 right-3 font-mono text-[9px] text-dim">
        {String(index + 1).padStart(2, '0')}
      </span>
      {!compact && (
        <span className="absolute right-3 top-2.5 font-mono text-[7px] uppercase tracking-[0.16em] text-dim">
          fig.
        </span>
      )}
    </div>
  )
}

function LoopDiagram({ compact }: { compact: boolean }) {
  return (
    <>
      <g className="text-ink/55" stroke="currentColor" strokeWidth="1">
        <path d="M84 178C84 110 140 72 200 72C260 72 316 110 316 178C316 210 260 222 200 222C140 222 84 210 84 178Z" />
        <path d="M104 178C104 128 148 96 200 96C252 96 296 128 296 178" strokeDasharray="3 5" />
      </g>
      <g className="text-ink" stroke="currentColor" strokeWidth="1.4">
        <rect x="196" y="68" width="8" height="8" fill="var(--c-accent)" stroke="none" />
        <rect x="312" y="174" width="8" height="8" fill="var(--c-ink)" stroke="none" />
        <rect x="196" y="218" width="8" height="8" fill="var(--c-ink)" stroke="none" />
        <rect x="80" y="174" width="8" height="8" fill="var(--c-ink)" stroke="none" />
      </g>
      <g className="text-accent" stroke="currentColor" strokeWidth="1.6">
        <path d="M176 150l14 14 30-34" />
      </g>
      {!compact && (
        <g>
          <SvgLabel x={200} y={52}>PLAN</SvgLabel>
          <SvgLabel x={338} y={182} anchor="start">ACT</SvgLabel>
          <SvgLabel x={200} y={242}>ASSERT</SvgLabel>
          <SvgLabel x={62} y={182} anchor="end">REPORT</SvgLabel>
          <SvgLabel x={200} y={132} accent>QA / LOOP</SvgLabel>
        </g>
      )}
    </>
  )
}

function BraidDiagram({ compact }: { compact: boolean }) {
  return (
    <>
      <g className="text-ink/55" stroke="currentColor" strokeWidth="1.2">
        <path d="M40 80C90 170 140 170 200 125C260 80 310 80 360 170" />
      </g>
      <circle cx="200" cy="125" r="7" fill="var(--c-panel)" stroke="none" />
      <g className="text-ink" stroke="currentColor" strokeWidth="1.4">
        <path d="M40 170C90 80 140 80 200 125C260 170 310 170 360 80" />
        <rect x="36" y="166" width="8" height="8" fill="var(--c-ink)" stroke="none" />
        <rect x="356" y="76" width="8" height="8" fill="var(--c-ink)" stroke="none" />
      </g>
      <g className="text-ink/55" stroke="currentColor" strokeWidth="1">
        <path d="M40 80C90 170 140 170 200 125" strokeDasharray="3 5" />
        <path d="M200 125C260 80 310 80 360 170" strokeDasharray="3 5" />
      </g>
      <rect x="196" y="121" width="8" height="8" transform="rotate(45 200 125)" fill="var(--c-accent)" />
      {!compact && (
        <g>
          <SvgLabel x={40} y={62} anchor="start">PROMPT</SvgLabel>
          <SvgLabel x={360} y={196} anchor="end">RESPONSE</SvgLabel>
          <SvgLabel x={200} y={152} accent>CONTEXT</SvgLabel>
        </g>
      )}
    </>
  )
}

function GridDiagram({ compact }: { compact: boolean }) {
  const tiles = [
    { x: 58, y: 46, label: 'POSTER' },
    { x: 222, y: 46, label: 'VIDEO' },
    { x: 58, y: 144, label: 'COPY' },
    { x: 222, y: 144, label: 'RECIPE' },
  ]

  return (
    <>
      <g className="text-ink/55" stroke="currentColor" strokeWidth="1">
        {tiles.map((tile) => (
          <rect key={tile.label} x={tile.x} y={tile.y} width="120" height="60" />
        ))}
        <path d="M58 206C110 206 110 176 160 166C220 154 220 116 282 106C320 100 320 76 342 76" strokeDasharray="3 5" />
      </g>
      <g className="text-ink" stroke="currentColor" strokeWidth="1.4">
        <path d="M58 206C110 206 110 176 160 166C220 154 220 116 282 106C320 100 320 76 342 76" />
        <rect x="338" y="72" width="8" height="8" fill="var(--c-accent)" stroke="none" />
      </g>
      {!compact && (
        <g>
          {tiles.map((tile) => (
            <SvgLabel key={tile.label} x={tile.x + 10} y={tile.y + 22} anchor="start">
              {tile.label}
            </SvgLabel>
          ))}
          <SvgLabel x={58} y={228} anchor="start" accent>
            GENERATED ASSETS
          </SvgLabel>
        </g>
      )}
    </>
  )
}

function BranchDiagram({ compact }: { compact: boolean }) {
  const apps = [
    { y: 72, label: 'APP-A' },
    { y: 126, label: 'APP-B' },
    { y: 180, label: 'APP-C' },
  ]

  return (
    <>
      <g className="text-ink/55" stroke="currentColor" strokeWidth="1.2">
        {apps.map((app) => (
          <path key={app.label} d={`M112 126C170 126 180 ${app.y} 272 ${app.y}`} />
        ))}
        <path d="M78 102h34v48H78z" />
      </g>
      <g className="text-ink" stroke="currentColor" strokeWidth="1.4">
        <rect x="78" y="102" width="34" height="48" fill="var(--c-panel)" />
        <rect x="272" y="54" width="86" height="36" fill="var(--c-panel)" />
        <rect x="272" y="108" width="86" height="36" fill="var(--c-panel)" stroke="var(--c-accent)" />
        <rect x="272" y="162" width="86" height="36" fill="var(--c-panel)" />
      </g>
      <rect x="110" y="122" width="8" height="8" fill="var(--c-accent)" />
      {!compact && (
        <g>
          <SvgLabel x={95} y={96}>SHELL</SvgLabel>
          {apps.map((app) => (
            <SvgLabel key={app.label} x={315} y={app.y + 5}>
              {app.label}
            </SvgLabel>
          ))}
          <SvgLabel x={78} y={228} anchor="start" accent>
            APP-ID × N
          </SvgLabel>
        </g>
      )}
    </>
  )
}

function PortalDiagram({ compact }: { compact: boolean }) {
  const nodes = [
    { x: 54, y: 38, label: 'APP-A' },
    { x: 286, y: 38, label: 'APP-B' },
    { x: 54, y: 176, label: 'APP-C' },
    { x: 286, y: 176, label: 'APP-D' },
  ]

  return (
    <>
      <g className="text-ink/55" stroke="currentColor" strokeWidth="1.2">
        {nodes.map((node) => (
          <path
            key={node.label}
            d={`M200 125C160 125 ${node.x + 30} 125 ${node.x + 30} ${node.y + 18}`}
          />
        ))}
        {nodes.map((node) => (
          <rect key={node.label} x={node.x} y={node.y} width="60" height="36" strokeDasharray="3 3" />
        ))}
      </g>
      <g className="text-ink" stroke="currentColor" strokeWidth="1.4">
        <rect x="160" y="99" width="80" height="52" fill="var(--c-panel)" stroke="var(--c-accent)" />
        <path d="M160 125h-20M240 125h20" />
      </g>
      <rect x="196" y="121" width="8" height="8" fill="var(--c-accent)" />
      {!compact && (
        <g>
          <SvgLabel x={200} y={91} accent>PORTAL</SvgLabel>
          {nodes.map((node) => (
            <SvgLabel key={node.label} x={node.x + 30} y={node.y + 23}>
              {node.label}
            </SvgLabel>
          ))}
          <SvgLabel x={200} y={232} accent>ONE SHELL / MANY APPS</SvgLabel>
        </g>
      )}
    </>
  )
}

function SpoolDiagram({ compact }: { compact: boolean }) {
  return (
    <>
      <g className="text-ink/55" stroke="currentColor" strokeWidth="1.2">
        <ellipse cx="78" cy="125" rx="22" ry="58" />
        <ellipse cx="78" cy="125" rx="12" ry="58" />
        <path d="M56 67h44M56 183h44" />
        <rect x="236" y="42" width="118" height="66" />
        <rect x="276" y="132" width="42" height="76" />
        <rect x="330" y="132" width="42" height="76" />
        <path d="M100 98C150 98 190 75 236 75" />
        <path d="M100 125C170 125 220 170 276 170" />
        <path d="M100 152C170 152 260 170 330 170" />
      </g>
      <g className="text-ink" stroke="currentColor" strokeWidth="1.4">
        <rect x="276" y="132" width="42" height="76" fill="var(--c-panel)" stroke="var(--c-accent)" />
        <rect x="330" y="132" width="42" height="76" fill="var(--c-panel)" />
      </g>
      <rect x="96" y="121" width="8" height="8" fill="var(--c-accent)" />
      {!compact && (
        <g>
          <SvgLabel x={78} y={62}>SPOOL</SvgLabel>
          <SvgLabel x={295} y={80}>WEB</SvgLabel>
          <SvgLabel x={297} y={224}>MINI</SvgLabel>
          <SvgLabel x={351} y={224}>APP</SvgLabel>
          <SvgLabel x={78} y={228} anchor="start" accent>
            ONE CODEBASE
          </SvgLabel>
        </g>
      )}
    </>
  )
}

function Diagram({ visual, compact }: { visual: Visual; compact: boolean }) {
  switch (visual) {
    case 'loop':
      return <LoopDiagram compact={compact} />
    case 'braid':
      return <BraidDiagram compact={compact} />
    case 'grid':
      return <GridDiagram compact={compact} />
    case 'branch':
      return <BranchDiagram compact={compact} />
    case 'portal':
      return <PortalDiagram compact={compact} />
    case 'spool':
      return <SpoolDiagram compact={compact} />
  }
}

interface ProjectVisualProps {
  project: ProjectItem
  index?: number
  className?: string
  compact?: boolean
}

export function ProjectVisual({
  project,
  index = 0,
  className = '',
  compact = false,
}: ProjectVisualProps) {
  const visual = VISUALS[project.slug] ?? FALLBACK_VISUAL[project.category]

  return (
    <Frame label={LABELS[visual]} index={index} className={className} compact={compact}>
      <Diagram visual={visual} compact={compact} />
    </Frame>
  )
}
