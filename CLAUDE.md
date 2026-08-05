# Breeze Vapes — project instructions

Next.js (App Router) ecommerce site for Breeze Vapes, deployed to Vercel via GitHub. No client backend — this is a pure static-content site with a code-managed catalog.

## Non-negotiable: vape compliance language
- Never claim FDA approval, "cure," "safe," or smoking-cessation benefits for any product.
- Every product/legal page carries: "For adult smokers and vapers 21+ only. Not evaluated by the FDA. Not intended to diagnose, treat, cure, or prevent any disease. Nicotine is an addictive chemical."
- Age gate (21+) must remain on every session until confirmed.
- If a request would require breaking any of the above, stop and say so rather than complying.

## Architecture
`src/config/site.js` is the single source of truth. Adding one entry to `PRODUCTS` / `CATEGORIES` / `POSTS`
generates the page, route, meta, JSON-LD, sitemap entry, and nav links. Never hand-write pages for new products.
Never hand-edit generated files (`public/robots.txt`, `public/llms.txt`, `public/.well-known/*`, `vercel.json`,
`public/js/webmcp.js`) — edit `src/config/site.js` and re-run `node scripts/gen-agent-files.mjs`, or edit these
files directly if Node isn't available (they are also committed, not purely generated-at-build).

## Rules
- `npm run build` must pass before every push. Run `npm run crosscheck` too when Node is available locally.
- One `<h1>` per page. Meta descriptions ~150 chars. Titles ≤60.
- Product images are placeholder SVGs (`public/images/*.svg`) until real photography is supplied — swap
  filenames in `PRODUCTS[].images` and drop real `.webp`/`.avif` files in `public/images/`.
- Emails entity-encoded (`&#64;` etc.) everywhere, including in visible markup — see `Footer.jsx`.
- Never commit `node_modules/`, `.next/`, `out/`.

## Live placeholders (update before real launch)
- `SITE.contactEmail` / `FORMS.contactEmail` / `FORMS.orderEmail` in `src/config/site.js` — currently a
  placeholder (`orders@breezevapes.net`). Forms will not deliver anywhere until a real inbox is set.
- `FORMS.web3formsKey` — get a free key at web3forms.com tied to the real inbox above.
- `CHAT.channels` — Tawk.to property/widget ID is `PENDING/PENDING`; the chat widget stays off (falls back to
  a Contact-page button) until a real ID is set.
- Product catalog (`PRODUCTS` in site.js) is a realistic placeholder set — swap in real names, prices, and photos.

## Brand facts (only these are true — never invent more)
- Founded 2015, United States. Ships nationwide across the United States.
- Categories: Disposables, Pod Systems, E-Liquids, Accessories.
- Minimum order $150, free shipping over $300, flat $15 shipping fee under that.
- Payment: cryptocurrency only (BTC, USDT), 10% automatic discount for crypto.
- Age restriction: 21+.
No invented statistics, awards, press, or named clients. Ever.
