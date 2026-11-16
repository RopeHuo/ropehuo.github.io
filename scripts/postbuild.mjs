import { copyFile, readdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const ORIGIN = 'https://ropehuo.github.io'
const DIST = 'dist'

// GitHub Pages 对未知路径返回 404.html，复制一份 SPA 入口兜住前端路由
await copyFile(join(DIST, 'index.html'), join(DIST, '404.html'))

const postFiles = await readdir('content/posts')
const postRoutes = postFiles
  .filter((file) => file.endsWith('.md'))
  .map((file) => `/blog/${file.replace(/\.md$/, '')}`)

const routes = ['/', '/projects', '/blog', '/resume', ...postRoutes]
const lastmod = new Date().toISOString().slice(0, 10)

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) =>
      `  <url><loc>${ORIGIN}${route === '/' ? '/' : route}</loc><lastmod>${lastmod}</lastmod></url>`,
  )
  .join('\n')}
</urlset>
`

await writeFile(join(DIST, 'sitemap.xml'), sitemap)

console.log(`postbuild: 已生成 404.html 与 sitemap.xml（${routes.length} 个地址）`)
