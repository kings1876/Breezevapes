# Breeze Vapes

Next.js (App Router) ecommerce site for Breeze Vapes, deployed to Vercel via GitHub.

## Stack
- Next.js 14 (App Router), React 18
- Single source of truth: `src/config/site.js`
- Forms: Web3Forms (see `src/components/WebForm.jsx`)

## Commands
```bash
npm install
npm run dev        # local dev server
npm run build       # production build (runs prebuild generators first)
npm run crosscheck  # pre-ship checks (agent-ready files, compliance scan, product integrity)
```

## Live placeholders — set these before a real launch
| What | Where | Currently |
|---|---|---|
| Contact/order email | `src/config/site.js` → `SITE.contactEmail`, `FORMS.contactEmail`, `FORMS.orderEmail` | `orders@breezevapes.net` (placeholder) |
| Web3Forms API key | `src/config/site.js` → `FORMS.web3formsKey` | pending — forms redirect to thank-you page but don't email |
| Tawk.to widget ID | `src/config/site.js` → `CHAT.channels` | `PENDING/PENDING` — widget stays off |
| Product catalog + photos | `src/config/site.js` → `PRODUCTS`, `public/images/*.svg` | realistic placeholders |

## Deploy (Vercel)
1. `git push` to the connected GitHub repo (already configured: https://github.com/kings1876/Breezevapes).
2. In Vercel: Add New → Project → import the repo → **Framework Preset: Next.js** → Deploy.
3. Once `breezevapes.net` is pointed at Vercel, no code changes are needed — `SITE.domain` already matches.

## Note on this build
This repo was generated without a local Node.js/npm install available, so `npm install`, `npm run build`, and
`npm run crosscheck` were not run in this environment. Run them locally or let Vercel's build be the first
real compile check, and fix anything that surfaces there.
