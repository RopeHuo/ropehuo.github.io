import type { ProjectCategory, ProjectItem } from '../../content/types'

type Visual = 'terminal' | 'chat' | 'grid' | 'portal' | 'phone' | 'chart'

const VISUALS: Record<string, Visual> = {
  'qa-agent': 'terminal',
  'ai-dev-assistant': 'chat',
  'wecom-aigc': 'grid',
  'mini-program-saas': 'phone',
  'merchant-portal-micro-frontend': 'portal',
  'multi-end-points-mall': 'chart',
}

const FALLBACK_VISUAL: Record<ProjectCategory, Visual> = {
  ai: 'terminal',
  arch: 'portal',
  multi: 'phone',
}

const LABELS: Record<Visual, string> = {
  terminal: 'agent / testing',
  chat: 'ai / assistant',
  grid: 'aigc / studio',
  phone: 'mini program / saas',
  portal: 'micro frontend / portal',
  chart: 'data / dashboard',
}

function TerminalMotif() {
  return (
    <div className="absolute left-1/2 top-1/2 w-[86%] -translate-x-1/2 -translate-y-1/2 border border-night-line bg-black/70">
      <div className="flex h-[7cqw] items-center gap-[1.4cqw] border-b border-night-line px-[3cqw]">
        <span className="size-[1.5cqw] bg-[#ff5f57]" />
        <span className="size-[1.5cqw] bg-[#febc2e]" />
        <span className="size-[1.5cqw] bg-[#28c840]" />
        <span className="ml-auto font-mono text-[2cqw] text-night-muted">qa-agent — terminal</span>
      </div>
      <div className="space-y-[1.4cqw] p-[3.2cqw] font-mono text-[2.3cqw] leading-[1.65]">
        <p>
          <span className="text-[#6b8fff]">$</span> qa-agent run --target checkout
        </p>
        <p className="text-night-muted">› mapping source … files</p>
        <p>
          <span className="text-[#3fb950]">✓</span> specs generated
        </p>
        <div className="h-[0.6cqw] w-full bg-white/10">
          <div className="h-full w-[68%] bg-[#6b8fff]" />
        </div>
        <p className="text-night-muted">running playwright …</p>
        <p>
          <span className="text-[#3fb950]">✓</span> passed{' '}
          <span className="text-night-muted">/ 0 failed</span>
        </p>
        <p className="text-[#6b8fff]">▌</p>
      </div>
    </div>
  )
}

function ChatMotif() {
  return (
    <div className="absolute inset-x-[7%] top-1/2 -translate-y-1/2 space-y-[2.4cqw]">
      <div className="ml-auto w-[62%] border border-white/10 bg-white/[0.05] p-[2.6cqw] font-mono text-[2.2cqw] leading-[1.5] text-white/80">
        帮我生成一张商品主图
      </div>
      <div className="w-[88%] border border-[#6b8fff]/35 bg-[#0b1220] p-[2.6cqw]">
        <div className="flex items-center justify-between font-mono text-[1.9cqw] text-night-muted">
          <span>IMAGE · 1024×1024</span>
          <span className="text-[#6b8fff]">DONE</span>
        </div>
        <div className="relative mt-[2cqw] aspect-[16/7] w-full overflow-hidden border border-night-line bg-[radial-gradient(circle_at_30%_25%,#294066,transparent_55%),linear-gradient(135deg,#111b2c,#070b12)]">
          <span className="absolute left-[4%] top-[6%] font-mono text-[1.7cqw] text-white/30">
            AIGC / PREVIEW
          </span>
          <div className="absolute bottom-[8%] left-[4%] h-[1.2cqw] w-[30%] bg-white/10" />
        </div>
        <div className="mt-[2cqw] flex gap-[1.2cqw]">
          <span className="h-[5cqw] w-[22%] border border-night-line bg-white/[0.04]" />
          <span className="h-[5cqw] w-[22%] border border-night-line bg-white/[0.04]" />
          <span className="flex h-[5cqw] flex-1 items-center justify-center bg-[#6b8fff] font-mono text-[1.8cqw] text-black">
            导出
          </span>
        </div>
      </div>
    </div>
  )
}

const GRID_TILES = [
  { label: '海报', className: 'from-[#1a2233] to-[#0b0e14]' },
  { label: '视频', className: 'from-[#202a20] to-[#0c0f0c]' },
  { label: '图文', className: 'from-[#2a2220] to-[#0f0c0b]' },
  { label: '菜谱', className: 'from-[#1d2630] to-[#0a0d11]' },
]

function GridMotif() {
  return (
    <>
      <div className="absolute inset-x-[8%] inset-y-[14%] grid grid-cols-2 grid-rows-2 gap-[2.2cqw]">
        {GRID_TILES.map((tile) => (
          <div
            key={tile.label}
            className={`relative border border-night-line bg-gradient-to-br ${tile.className} p-[2.4cqw]`}
          >
            <span className="font-mono text-[2cqw] text-white/40">{tile.label}</span>
            <div className="absolute inset-x-[10%] bottom-[12%] space-y-[1cqw]">
              <div className="h-[1cqw] w-[70%] bg-white/10" />
              <div className="h-[1cqw] w-[45%] bg-white/10" />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-[5%] left-[8%] flex items-center gap-[1.5cqw] font-mono text-[1.9cqw] text-night-muted">
        <span className="size-[1.2cqw] bg-[#3fb950]" /> assets ready
      </div>
    </>
  )
}

function PortalNode({ label, center = false }: { label: string; center?: boolean }) {
  return (
    <div
      className={`flex h-[7cqw] w-full items-center justify-center border font-mono text-[1.8cqw] ${
        center
          ? 'border-[#6b8fff] bg-[#0d1730] text-[#a9c0ff]'
          : 'border-night-line bg-white/[0.03] text-night-muted'
      }`}
    >
      {label}
    </div>
  )
}

function PortalMotif() {
  return (
    <div className="absolute inset-x-[8%] top-1/2 -translate-y-1/2">
      <div className="grid grid-cols-[1fr_1.2fr_1fr] grid-rows-3 items-center gap-[2cqw]">
        <div />
        <PortalNode label="APP-A" />
        <div />
        <PortalNode label="APP-B" />
        <PortalNode label="PORTAL" center />
        <PortalNode label="APP-C" />
        <div />
        <PortalNode label="APP-D" />
        <div />
      </div>
      <div className="mt-[2.5cqw] flex justify-between font-mono text-[1.7cqw] text-night-muted">
        <span>micro-app</span>
        <span>iframe</span>
        <span>independent deploy</span>
      </div>
    </div>
  )
}

function PhoneMotif() {
  return (
    <>
      <div className="absolute inset-y-0 left-1/2 w-[40%] -translate-x-1/2 border-x border-night-line bg-[#0b0b0b] p-[2.5cqw]">
        <div className="mx-auto h-[0.8cqw] w-[24%] bg-white/20" />
        <div className="mt-[2.4cqw] border border-night-line bg-white/[0.02] p-[2.2cqw]">
          <div className="flex justify-between font-mono text-[1.7cqw] text-night-muted">
            <span>MINI APP</span>
            <span>A / B / C</span>
          </div>
          <div className="mt-[1.8cqw] aspect-[16/11] bg-[radial-gradient(circle_at_60%_35%,#24334d,transparent_55%),linear-gradient(135deg,#101827,#080a0f)]" />
          <div className="mt-[1.8cqw] flex items-baseline justify-between font-mono">
            <span className="text-[2cqw]">￥ --</span>
            <span className="text-[1.6cqw] text-night-muted">已售</span>
          </div>
          <div className="mt-[1.4cqw] grid grid-cols-3 gap-[1cqw]">
            <span className="aspect-square border border-night-line bg-white/[0.03]" />
            <span className="aspect-square border border-night-line bg-white/[0.03]" />
            <span className="aspect-square border border-night-line bg-white/[0.03]" />
          </div>
          <div className="mt-[2cqw] flex h-[4.5cqw] items-center justify-center bg-[#2f6bff] font-mono text-[1.6cqw] text-white">
            立即购买
          </div>
        </div>
        <div className="mt-[2.4cqw] flex justify-around">
          <span className="size-[1.2cqw] bg-white/30" />
          <span className="size-[1.2cqw] bg-white/15" />
          <span className="size-[1.2cqw] bg-white/15" />
          <span className="size-[1.2cqw] bg-white/15" />
        </div>
      </div>
      <span className="absolute bottom-[8%] left-[7%] font-mono text-[1.8cqw] text-night-muted">
        appId × N
      </span>
      <span className="absolute right-[7%] top-[18%] font-mono text-[1.8cqw] text-night-muted">
        config driven
      </span>
    </>
  )
}

const BARS = [28, 44, 36, 58, 48, 72, 64, 84]

function ChartMotif() {
  return (
    <div className="absolute inset-x-[8%] top-1/2 -translate-y-1/2 border border-night-line bg-black/40 p-[3.4cqw]">
      <div className="flex justify-between font-mono text-[1.9cqw] text-night-muted">
        <span>DATA / DASHBOARD</span>
        <span className="text-[#3fb950]">LIVE</span>
      </div>
      <div className="mt-[3cqw] flex h-[20cqw] items-end gap-[1.6cqw]">
        {BARS.map((height) => (
          <div key={height} className="flex-1 bg-white/10" style={{ height: `${height}%` }}>
            <div className="h-full w-full bg-gradient-to-t from-[#2f6bff]/70 to-transparent" />
          </div>
        ))}
      </div>
      <div className="mt-[2cqw] h-px bg-night-line" />
      <div className="mt-[2cqw] flex justify-between font-mono text-[1.7cqw] text-night-muted">
        <span>multi-end</span>
        <span>realtime</span>
        <span>dashboard</span>
      </div>
    </div>
  )
}

function Motif({ visual }: { visual: Visual }) {
  switch (visual) {
    case 'terminal':
      return <TerminalMotif />
    case 'chat':
      return <ChatMotif />
    case 'grid':
      return <GridMotif />
    case 'portal':
      return <PortalMotif />
    case 'phone':
      return <PhoneMotif />
    case 'chart':
      return <ChartMotif />
  }
}

interface ProjectVisualProps {
  project: ProjectItem
  index?: number
  className?: string
}

export function ProjectVisual({ project, index = 0, className = '' }: ProjectVisualProps) {
  const visual = VISUALS[project.slug] ?? FALLBACK_VISUAL[project.category]

  return (
    <div
      className={`relative overflow-hidden bg-night text-night-fg ring-1 ring-inset ring-black/5 dark:ring-white/10 ${className}`}
      style={{ containerType: 'inline-size' }}
      aria-hidden="true"
    >
      <div className="dots-dark absolute inset-0 opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.06),transparent_60%)]" />

      <span className="absolute left-[5%] top-[4.5%] z-10 font-mono text-[2.1cqw] uppercase tracking-[0.14em] text-white/35">
        {LABELS[visual]}
      </span>
      <span className="absolute bottom-[1%] right-[4%] z-0 font-mono text-[13cqw] leading-none text-white/[0.04]">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="absolute inset-0">
        <Motif visual={visual} />
      </div>
    </div>
  )
}
