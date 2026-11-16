import { readFile, readdir } from 'node:fs/promises'
import { join, relative } from 'node:path'

const ROOT = process.cwd()
const violations = []
const files = []

const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', 'resume'])

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    if (SKIP_DIRS.has(entry.name)) continue
    const path = join(dir, entry.name)
    if (entry.isDirectory()) {
      await walk(path)
    } else if (/\.(ts|tsx)$/.test(entry.name)) {
      files.push(path)
    }
  }
}

function report(file, message) {
  violations.push(`${relative(ROOT, file)}: ${message}`)
}

function imports(text) {
  const found = []
  const regex = /import\s+(type\s+)?[^;]*?from\s+['"]([^'"]+)['"]/g
  let match
  while ((match = regex.exec(text))) {
    found.push({ typeOnly: Boolean(match[1]), specifier: match[2] })
  }
  return found
}

await walk(join(ROOT, 'content'))
await walk(join(ROOT, 'src'))

for (const file of files) {
  const rel = relative(ROOT, file)
  const text = await readFile(file, 'utf8')
  const fileImports = imports(text)

  if (rel.startsWith('content/')) {
    if (/\bclassName\b/.test(text)) {
      report(file, '内容层不能包含 className / 样式')
    }
    for (const item of fileImports) {
      const spec = item.specifier
      const external = !spec.startsWith('.')
      if (external) {
        report(file, `内容层不能依赖外部包 "${spec}"`)
      } else if (spec.includes('/src/') || spec.startsWith('../src')) {
        report(file, `内容层不能依赖 src/ "${spec}"`)
      }
    }
  }

  if (rel.startsWith('src/ui/')) {
    for (const item of fileImports) {
      if (!item.typeOnly && /content\//.test(item.specifier)) {
        report(file, `UI 层不能直接读取内容数据 "${item.specifier}"，请通过 props 注入`)
      }
      if (/^\.\.\/(sections|pages|layout)/.test(item.specifier)) {
        report(file, `UI 层不能依赖上层组合 "${item.specifier}"`)
      }
    }
  }

  if (rel.startsWith('src/sections/')) {
    for (const item of fileImports) {
      if (!item.typeOnly && /content\//.test(item.specifier)) {
        report(file, `Section 不能直接读取内容数据 "${item.specifier}"，请通过 props 注入`)
      }
      if (/^\.\.\/(\.\.\/)?pages/.test(item.specifier)) {
        report(file, `Section 不能依赖页面 "${item.specifier}"`)
      }
    }
  }

  if (rel.startsWith('src/layout/')) {
    for (const item of fileImports) {
      if (!item.typeOnly && /content\//.test(item.specifier)) {
        report(file, `Layout 不能直接读取内容数据 "${item.specifier}"，请通过 props 注入`)
      }
    }
  }

  if (rel.startsWith('src/logic/')) {
    for (const item of fileImports) {
      if (/^\.\.\/(ui|sections|layout|pages|styles)/.test(item.specifier)) {
        report(file, `Logic 层不能依赖展示层 "${item.specifier}"`)
      }
    }
  }
}

if (violations.length) {
  console.error('边界检查失败：\n')
  for (const violation of violations) console.error(`  ✗ ${violation}`)
  console.error('\n规则见 ARCHITECTURE.md')
  process.exit(1)
}

console.log(`边界检查通过：${files.length} 个文件，内容 / 样式 / 逻辑分层正常。`)
