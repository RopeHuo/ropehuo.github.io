import type { BrandContent, BrandTypeSample, ProjectItem } from '../../../content/types'
import { AppLink } from '../../logic/AppLink'
import { routes } from '../../logic/routes'
import { CareerKnot } from '../../ui/CareerKnot'
import { DotWordmark } from '../../ui/DotWordmark'
import { Logo } from '../../ui/Logo'
import { ProjectVisual } from '../../ui/ProjectVisual'
import { Section } from '../../ui/Section'
import { SectionHead } from '../../ui/SectionHead'
import { Tag } from '../../ui/Tag'

function TypeSample({ kind, sample }: { kind: BrandTypeSample['kind']; sample: string }) {
  if (kind === 'display') {
    return (
      <p className="font-display text-[clamp(2rem,4vw,3.4rem)] font-semibold leading-[1.02] tracking-[-0.05em]">
        {sample}
      </p>
    )
  }

  if (kind === 'body') {
    return <p className="max-w-2xl text-[16px] leading-8 text-muted">{sample}</p>
  }

  return (
    <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-ink">{sample}</p>
  )
}

const EVIDENCE_ROWS = [
  ['scope', 'Agent Skill + MCP'],
  ['role', 'Lead'],
  ['verdict', 'SHIP'],
]

interface BrandPageProps {
  content: BrandContent
  project: ProjectItem
}

export function BrandPage({ content, project }: BrandPageProps) {
  return (
    <>
      <header className="relative overflow-hidden border-b border-line pb-12 pt-4">
        <div className="weave pointer-events-none absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="relative">
          <p className="mono-label">
            <span className="text-accent">{content.header.index}</span> / {content.header.label}
          </p>

          <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-end">
            <div>
              <h1 className="font-display text-[clamp(3.6rem,8vw,7rem)] font-semibold leading-[0.9] tracking-[-0.065em]">
                {content.header.title}
              </h1>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-dim">
                {content.header.subtitle}
              </p>
              <p className="mt-6 max-w-xl text-[16px] leading-8 text-muted">
                {content.header.intro}
              </p>
            </div>

            <div className="plate flex flex-col items-center justify-center gap-5 bg-panel px-8 py-10">
              <Logo className="size-24 text-ink" />
              <p className="font-mono text-[13px] tracking-[-0.02em]">{content.logo.wordmark}</p>
              <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-dim">rope / huo</p>
            </div>
          </div>
        </div>
      </header>

      <Section index="01" label="manifesto" note="ROPE + HUO">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <div className="space-y-2">
            {content.manifesto.zh.map((line) => (
              <p
                key={line}
                className="font-display text-[clamp(1.4rem,2.8vw,2.2rem)] font-semibold leading-[1.25] tracking-[-0.04em]"
              >
                {line}
              </p>
            ))}
          </div>
          <div className="border-l border-line pl-5 text-[13px] leading-7 text-muted sm:pl-8">
            {content.manifesto.en.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
          {content.manifesto.note}
        </p>
      </Section>

      <Section index="02" label="rope + huo" note="TWO MOTIFS / ONE LINE">
        <div className="grid gap-4 sm:grid-cols-3">
          {content.duality.map((item) => (
            <div key={item.name} className="plate bg-panel p-5">
              <p className="mono-label">{item.role}</p>
              <h2 className="mt-3 font-display text-[28px] font-semibold tracking-[-0.04em]">
                {item.name}
              </h2>
              <p className="mt-2 text-[13px] leading-6 text-muted">{item.body}</p>
              <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
                {item.keywords.map((keyword) => (
                  <Tag key={keyword}>{keyword}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-line">
          {content.ladder.map((row) => (
            <div
              key={row.layer}
              className="grid grid-cols-[88px_62px_minmax(0,1fr)] gap-4 border-b border-line py-2.5 text-[12px]"
            >
              <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-dim">
                {row.layer}
              </span>
              <span className="text-ink">{row.zh}</span>
              <span className="text-muted">{row.meaning}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section index="03" label="logo" note="MARK / WORDMARK">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="plate flex flex-col items-center justify-center gap-4 border-[#ded6c8] bg-[#f3efe6] py-12">
            <Logo className="size-20 text-[#191713]" ember="#d84a21" />
            <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#746b5e]">
              light / ink
            </p>
          </div>
          <div className="plate flex flex-col items-center justify-center gap-4 border-[#342f27] bg-[#1b1814] py-12">
            <Logo className="size-20 text-[#f4eee4]" ember="#ff6f47" />
            <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#a79d8f]">
              dark / paper
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div>
            <p className="mono-label">Notes</p>
            <ul className="mt-3 space-y-2">
              {content.logo.notes.map((note) => (
                <li key={note} className="flex gap-3 text-[13px] leading-6 text-muted">
                  <span className="mt-[0.55rem] size-1 shrink-0 bg-accent" aria-hidden="true" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="plate bg-panel p-5">
            <DotWordmark className="w-full text-line-strong" />
            <p className="mt-3 font-mono text-[8px] uppercase tracking-[0.16em] text-dim">
              dot wordmark / stitched strand
            </p>
          </div>
        </div>
      </Section>

      <Section index="04" label="color" note="PAPER / INK / EMBER">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {content.colors.map((color) => (
            <div key={color.token} className="plate overflow-hidden">
              <div
                className="h-16 border-b border-line"
                style={{ background: `var(${color.token})` }}
              />
              <div className="p-4">
                <p className="font-mono text-[10px] tracking-[-0.01em]">{color.token}</p>
                <p className="mt-1 text-[12px] leading-5 text-muted">{color.role}</p>
                <p className="mt-2 font-mono text-[8px] text-dim">
                  {color.light} / {color.dark}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section index="05" label="type" note="SANS / MONO">
        <div className="space-y-8">
          {content.type.map((item) => (
            <div
              key={item.name}
              className="grid gap-4 border-t border-line pt-4 lg:grid-cols-[150px_minmax(0,1fr)] lg:gap-10"
            >
              <div>
                <p className="mono-label">{item.name}</p>
                <p className="mt-1 font-mono text-[8px] text-dim">{item.spec}</p>
              </div>
              <TypeSample kind={item.kind} sample={item.sample} />
            </div>
          ))}
        </div>
      </Section>

      <Section index="06" label="space" note="4PX BASE">
        <div className="flex flex-wrap items-end gap-6">
          {content.spacing.map((item) => (
            <div key={item.value}>
              <div className="bg-accent" style={{ width: item.value, height: 6 }} />
              <p className="mt-2 font-mono text-[9px] text-dim">{item.value}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-[13px] leading-6 text-muted">
          页面最大宽度 1240px；区块间距 56–80px；边框 1px；橙色短线 48px。
        </p>
      </Section>

      <Section index="07" label="components" note="SQUARE / QUIET / TACTILE">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="mono-label">Buttons</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <button type="button" className="btn-solid">
                Primary →
              </button>
              <button type="button" className="btn-outline">
                Secondary →
              </button>
              <button type="button" className="btn-ghost">
                Ghost →
              </button>
            </div>

            <p className="mono-label mt-8">Tags</p>
            <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
              <Tag>Agent Skill</Tag>
              <Tag>MCP</Tag>
              <Tag>TypeScript</Tag>
            </div>
          </div>

          <div>
            <p className="mono-label">Section head</p>
            <div className="mt-3">
              <SectionHead index="01" label="selected work" note="03 projects / selected" />
            </div>

            <p className="mono-label mt-8">Evidence plate</p>
            <div className="plate mt-3 bg-panel p-4">
              {EVIDENCE_ROWS.map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-baseline justify-between gap-4 border-b border-line py-2 last:border-b-0"
                >
                  <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-dim">
                    {label}
                  </span>
                  <span className="font-mono text-[10px] text-ink">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-8 border-l-2 border-accent bg-accent-soft px-5 py-5">
          <span
            className="absolute -left-[5px] top-6 size-2 rotate-45 bg-accent"
            aria-hidden="true"
          />
          <p className="mono-label text-accent">What it lit</p>
          <p className="mt-2 text-[15px] leading-7">它点亮的是「研发自测」这件事。</p>
        </div>
      </Section>

      <Section index="08" label="graphics" note="ONE LINE / ONE EMBER">
        <div className="grid gap-6 lg:grid-cols-2">
          <CareerKnot />
          <div>
            <ProjectVisual
              project={project}
              index={0}
              className="aspect-[16/10] border border-line"
            />
            <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.14em] text-dim">
              FIG. 02 — PROJECT KNOT / {project.title}
            </p>
          </div>
        </div>
        <p className="mt-6 max-w-2xl text-[13px] leading-6 text-muted">
          线稿只表达关系：分叉、汇合、循环、交织。一张图最多一个橙色节点。
        </p>
      </Section>

      <Section index="09" label="voice" note="HOLD FIRST / LIGHT SECOND">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="mono-label text-success">Do</p>
            <ul className="mt-3 space-y-2.5">
              {content.voice.dos.map((item) => (
                <li key={item} className="flex gap-3 text-[13px] leading-6 text-muted">
                  <span className="mt-[0.55rem] size-1 shrink-0 bg-success" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mono-label text-danger">Don't</p>
            <ul className="mt-3 space-y-2.5">
              {content.voice.donts.map((item) => (
                <li key={item} className="flex gap-3 text-[13px] leading-6 text-muted">
                  <span className="mt-[0.55rem] size-1 shrink-0 bg-danger" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section index="10" label="use" note={content.version}>
        <div className="grid gap-8 lg:grid-cols-2">
          <ol className="space-y-3">
            {content.usage.map((item, index) => (
              <li key={item} className="flex gap-3">
                <span className="pt-0.5 font-mono text-[9px] text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-[14px] leading-6 text-muted">{item}</span>
              </li>
            ))}
          </ol>

          <pre className="overflow-x-auto border border-night-line bg-night p-5 font-mono text-[11px] leading-7 text-night-fg">
            <code>{`:root {
  --c-bg: #f3efe6;
  --c-ink: #191713;
  --c-accent: #d84a21;
  --font-mono: ui-monospace, ...;
}`}</code>
          </pre>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <AppLink href={routes.projects} className="btn-solid">
            看项目 →
          </AppLink>
          <AppLink href={routes.home} className="btn-outline">
            回首页 →
          </AppLink>
        </div>
      </Section>
    </>
  )
}
