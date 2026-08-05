// Generates simple branded placeholder SVGs, one per Breeze product LINE
// (Pro/Prime/Elite/Mega/E-Liquids/Bundles), reused across every flavor in
// that line until real photography is supplied. Run once; safe to re-run.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, '..', 'public', 'images')
fs.mkdirSync(outDir, { recursive: true })

const LINES = [
  { file: 'breeze-pro-line.svg', label: 'Breeze Pro', sub: '2000 Puffs', c1: '#1c7ed6', c2: '#3fe0c5' },
  { file: 'breeze-prime-line.svg', label: 'Breeze Prime', sub: '6000 Puffs', c1: '#0b1b33', c2: '#1c7ed6' },
  { file: 'breeze-elite-line.svg', label: 'Breeze Elite', sub: '4000 Puffs', c1: '#1c7ed6', c2: '#0b1b33' },
  { file: 'breeze-mega-line.svg', label: 'Breeze Mega', sub: 'Up to 60,000 Puffs', c1: '#4a5a70', c2: '#1c7ed6' },
  { file: 'breeze-eliquids-line.svg', label: 'Breeze E-Liquid', sub: '30ml — 20mg', c1: '#3fe0c5', c2: '#0b1b33' },
  { file: 'breeze-bundles-line.svg', label: 'Breeze Bundle', sub: 'Multi-pack savings', c1: '#0b1b33', c2: '#3fe0c5' },
]

for (const line of LINES) {
  const svg = `<svg viewBox="0 0 1600 1200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${line.label}">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${line.c1}"/><stop offset="100%" stop-color="${line.c2}"/></linearGradient></defs>
  <rect width="1600" height="1200" fill="url(#g)"/>
  <circle cx="800" cy="430" r="150" fill="rgba(255,255,255,0.15)"/>
  <text x="800" y="460" font-size="140" font-family="Arial, sans-serif" font-weight="900" fill="#ffffff" text-anchor="middle">B</text>
  <text x="800" y="620" font-size="60" font-family="Arial, sans-serif" font-weight="700" fill="#ffffff" text-anchor="middle">${line.label}</text>
  <text x="800" y="680" font-size="34" font-family="Arial, sans-serif" fill="rgba(255,255,255,0.85)" text-anchor="middle">${line.sub}</text>
  <text x="800" y="1120" font-size="34" font-family="Arial, sans-serif" fill="rgba(255,255,255,0.85)" text-anchor="middle">Breeze Vapes — placeholder image</text>
</svg>`
  fs.writeFileSync(path.join(outDir, line.file), svg, 'utf8')
}

console.log(`Generated ${LINES.length} line-level placeholder images in public/images/`)
