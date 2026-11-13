import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { OG_IMAGE, PAGE_META } from './src/seo.js'

// Folder the site is served from. '/' for a domain of its own; GitHub Pages project sites use '/<repo>/'.
const BASE = process.env.BASE_PATH || '/'
// Production address, e.g. SITE_URL=https://www.example.com npm run build
// Canonical links, og:url, og:image and sitemap.xml need it, so they are skipped when it is not set.
const SITE_URL = (process.env.SITE_URL || '').replace(/\/+$/, '')

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function renderPage(html, { path, title, description }) {
  const absolute = SITE_URL
    ? `<link rel="canonical" href="${SITE_URL}${path}" />
    <meta property="og:url" content="${SITE_URL}${path}" />
    <meta property="og:image" content="${SITE_URL}${OG_IMAGE}" />
    <meta name="twitter:image" content="${SITE_URL}${OG_IMAGE}" />
`
    : ''
  return html
    .replace(/<title>.*?<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${esc(description)}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${esc(title)}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${esc(description)}`)
    .replace('</head>', `${absolute}</head>`)
}

// Writes a real HTML file per page, so each has its own title and direct links work on static hosting.
function staticPages() {
  let outDir
  return {
    name: 'static-pages',
    apply: 'build',
    configResolved(config) { outDir = config.build.outDir },
    closeBundle() {
      const template = readFileSync(join(outDir, 'index.html'), 'utf8')
      for (const meta of Object.values(PAGE_META)) {
        const dir = join(outDir, meta.path)
        mkdirSync(dir, { recursive: true })
        writeFileSync(join(dir, 'index.html'), renderPage(template, meta))
      }
      // Unknown addresses fall back to the home page (GitHub Pages serves 404.html for them)
      writeFileSync(join(outDir, '404.html'), renderPage(template, PAGE_META.home))
      const sitemapLine = SITE_URL ? `\nSitemap: ${SITE_URL}/sitemap.xml` : ''
      writeFileSync(join(outDir, 'robots.txt'), `User-agent: *\nAllow: /${sitemapLine}\n`)
      if (SITE_URL) {
        const urls = Object.values(PAGE_META).map((m) => `  <url><loc>${SITE_URL}${m.path}</loc></url>`).join('\n')
        writeFileSync(join(outDir, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`)
      }
    }
  }
}

export default defineConfig({ base: BASE, plugins: [react(), staticPages()] })
