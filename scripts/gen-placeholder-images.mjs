// Generates simple branded placeholder SVGs for every product until real
// photography is supplied. Run once; safe to re-run (overwrites deterministically).
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { PRODUCTS, SITE } from '../src/config/site.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, '..', 'public', 'images')
fs.mkdirSync(outDir, { recursive: true })

const CATEGORY_COLORS = {
  disposables: ['#1c7ed6', '#3fe0c5'],
  'pod-systems': ['#0b1b33', '#1c7ed6'],
  'e-liquids': ['#3fe0c5', '#0b1b33'],
  accessories: ['#4a5a70', '#1c7ed6'],
}

function wrapText(text, maxChars) {
  const words = text.split(' ')
  const lines = []
  let line = ''
  for (const w of words) {
    if ((line + ' ' + w).trim().length > maxChars) {
      lines.push(line.trim())
      line = w
    } else {
      line = (line + ' ' + w).trim()
    }
  }
  if (line) lines.push(line)
  return lines
}

for (const p of PRODUCTS) {
  const [c1, c2] = CATEGORY_COLORS[p.category] || ['#1c7ed6', '#3fe0c5']
  const lines = wrapText(p.name, 22)
  const startY = 600 - (lines.length - 1) * 30
  const textEls = lines
    .map((l, i) => `<text x="800" y="${startY + i * 60}" font-size="52" font-family="Arial, sans-serif" font-weight="700" fill="#ffffff" text-anchor="middle">${escapeXml(l)}</text>`)
    .join('')

  const svg = `<svg viewBox="0 0 1600 1200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${escapeXml(p.name)}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${c1}"/>
      <stop offset="100%" stop-color="${c2}"/>
    </linearGradient>
  </defs>
  <rect width="1600" height="1200" fill="url(#g)"/>
  <circle cx="800" cy="430" r="150" fill="rgba(255,255,255,0.15)"/>
  <text x="800" y="460" font-size="140" font-family="Arial, sans-serif" font-weight="900" fill="#ffffff" text-anchor="middle">B</text>
  ${textEls}
  <text x="800" y="1120" font-size="34" font-family="Arial, sans-serif" fill="rgba(255,255,255,0.85)" text-anchor="middle">${escapeXml(SITE.name)} — placeholder image</text>
</svg>`

  fs.writeFileSync(path.join(outDir, p.images[0]), svg, 'utf8')
}

function escapeXml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

console.log(`Generated ${PRODUCTS.length} placeholder product images in public/images/`)
