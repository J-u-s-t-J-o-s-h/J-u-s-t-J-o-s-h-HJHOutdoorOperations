import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const appDir = join(process.cwd(), 'app')
const routesFile = readFileSync(join(process.cwd(), 'lib/site-routes.ts'), 'utf8')

function collectPageRoutes(dir, prefix = '') {
  const routes = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name.startsWith('_')) continue
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      const nextPrefix = entry.name.startsWith('(') ? prefix : `${prefix}/${entry.name}`
      routes.push(...collectPageRoutes(full, nextPrefix))
      continue
    }
    if (/^page\.(tsx|ts|jsx|js)$/.test(entry.name)) {
      routes.push(prefix || '/')
    }
  }
  return routes
}

const listedRoutes = [...routesFile.matchAll(/path: '([^']+)'/g)].map((match) => match[1]).sort()
const retiredRoutes = [...routesFile.matchAll(/'(?:\/book[^']*)'/g)].map((match) => match[1])
const diskRoutes = [...new Set(collectPageRoutes(appDir))].sort()

const missingFromSitemap = diskRoutes.filter((route) => !listedRoutes.includes(route))
const extraInSitemap = listedRoutes.filter((route) => !diskRoutes.includes(route))
const retiredInSitemap = listedRoutes.filter((route) => retiredRoutes.includes(route))

if (missingFromSitemap.length || extraInSitemap.length || retiredInSitemap.length) {
  console.error('Sitemap routes do not match app pages.')
  if (missingFromSitemap.length) console.error('Missing from sitemap:', missingFromSitemap)
  if (extraInSitemap.length) console.error('In sitemap but no page:', extraInSitemap)
  if (retiredInSitemap.length) console.error('Retired paths in sitemap:', retiredInSitemap)
  process.exit(1)
}

if (listedRoutes.includes('/bookonline') || listedRoutes.includes('/book-online')) {
  console.error('Retired booking URLs must not appear in the sitemap.')
  process.exit(1)
}

console.log(`Sitemap OK: ${listedRoutes.length} public routes.`)
console.log(listedRoutes.join('\n'))
