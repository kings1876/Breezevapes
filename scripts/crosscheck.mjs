// Pre-ship crosscheck — scans the repo source + generated public files.
// Exits non-zero on any failure. Run before every deploy.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { SITE, PRODUCTS, CATEGORIES } from '../src/config/site.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

let failures = []
let warnings = []

function fail(msg) {
  failures.push(msg)
}
function warn(msg) {
  warnings.push(msg)
}

// B1 — domain placeholder
if (SITE.domain === 'DOMAIN.com') {
  warn('SITE.domain is still the placeholder DOMAIN.com (fine for a preview build, not for production).')
}

// B4 — strategy docs must not leak into public/
const pub = path.join(root, 'public')
for (const bad of ['PROJECT.md', 'keyword-map.md']) {
  if (fs.existsSync(path.join(pub, bad))) fail(`Strategy doc ${bad} present in public/ — must live only in docs/`)
}
if (fs.existsSync(path.join(pub, 'docs'))) fail('docs/ directory leaked into public/')

// B5 — secrets
const siteSrc = fs.readFileSync(path.join(root, 'src/config/site.js'), 'utf8')
if (/RESEND_API_KEY\s*=\s*['"][^'"]+['"]/.test(siteSrc)) fail('A literal RESEND_API_KEY value is committed in site.js — use an env var.')

// B6 — agent-ready files present
const agentFiles = [
  'robots.txt',
  'llms.txt',
  'auth.md',
  '.well-known/api-catalog',
  '.well-known/agent-skills/index.json',
  '.well-known/mcp/server-card.json',
  '.well-known/oauth-protected-resource',
  '.well-known/oauth-authorization-server',
  '.well-known/openid-configuration',
  '.well-known/acp.json',
  '.well-known/ucp',
  'js/webmcp.js',
]
for (const f of agentFiles) {
  if (!fs.existsSync(path.join(pub, f))) fail(`Missing agent-ready file: public/${f} — run "node scripts/gen-agent-files.mjs"`)
}
if (!fs.existsSync(path.join(root, 'vercel.json'))) fail('Missing vercel.json at repo root — run "node scripts/gen-agent-files.mjs"')

// B7 — compliance banned terms
const BANNED_TERMS = ['quit smoking', 'smoking cessation', 'cure', 'fda approved', 'completely safe', '100% safe']
function scanDir(dir, exts) {
  let hits = []
  if (!fs.existsSync(dir)) return hits
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === '.next' || entry.name === '.git') continue
      hits = hits.concat(scanDir(full, exts))
    } else if (exts.some((e) => entry.name.endsWith(e))) {
      const text = fs.readFileSync(full, 'utf8').toLowerCase()
      for (const term of BANNED_TERMS) {
        if (text.includes(term)) hits.push(`"${term}" found in ${path.relative(root, full)}`)
      }
    }
  }
  return hits
}
const complianceHits = scanDir(path.join(root, 'src'), ['.jsx', '.js']).concat(
  scanDir(pub, ['.txt', '.md', '.json'])
)
for (const h of complianceHits) fail(`Compliance violation — ${h}`)

// Product/category integrity
const catSlugs = new Set(CATEGORIES.map((c) => c.slug))
for (const p of PRODUCTS) {
  if (!catSlugs.has(p.category)) fail(`Product ${p.slug} references unknown category "${p.category}"`)
  if (!p.images || p.images.length === 0) fail(`Product ${p.slug} has no images`)
}

// Report
console.log(`\nCROSSCHECK — ${SITE.name}`)
console.log(`Failures: ${failures.length}   Warnings: ${warnings.length}\n`)
for (const w of warnings) console.log(`WARN  ${w}`)
for (const f of failures) console.log(`FAIL  ${f}`)

if (failures.length > 0) {
  console.log('\nCrosscheck FAILED — fix the above before shipping.')
  process.exit(1)
} else {
  console.log('\nCrosscheck PASSED.')
}
