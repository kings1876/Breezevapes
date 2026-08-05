# Breeze Vapes — Project Record

## Identity
- Site name: Breeze Vapes
- Tagline: "Catch the Breeze."
- Domain: breezevapes.net
- Brand colors: primary ice-blue `#1C7ED6`, dark navy `#0B1B33`, accent mint/teal `#3FE0C5` (Claude's choice — cool, "breeze" wind theme; no client direction given)
- Logo/favicon: simple wordmark + "B" monogram mark in the brand gradient (see `Nav.jsx` for the in-code mark; no separate image asset produced — recreate as a real logo file when the client has a designer)

## Contact & Business
- Location: United States
- Country of operation / currency: USA / USD
- Contact email: **placeholder** `orders@breezevapes.net` — client said "we'll provide email later"
- Phone: none provided

## Order Rules
- Minimum order: $150
- Free shipping over: $300
- Flat shipping fee (under threshold): $15
- Crypto discount: 10% (automatic, applied at checkout — see `OrderCart.jsx`)
- Discount code: none

## Pages / Menu
Nav order: Shop, Blog, About, Contact, FAQ. Footer adds legal pages: Shipping, Refund, Privacy, Terms.
No Wholesale page (client said no). No order-tracking, accounts, compare tool, or finance calculator (all "no").

## Checkout & Payment
- Ordering: order form only (no WhatsApp/chat checkout)
- Payment: cryptocurrency only (BTC, USDT)
- Email that receives orders: same placeholder as contact email, pending

## Live Chat
- Widget: Tawk.to requested, but no property/widget ID supplied. `CHAT.channels` in `src/config/site.js` has
  `PENDING/PENDING` — `ChatHub.jsx` will not load the widget until a real ID replaces that value; it falls
  back to a simple Contact-page button in the meantime.
- No WhatsApp/Telegram/Messenger numbers supplied.

## Compliance
- Age gate: 21+, implemented client-side (`AgeGate.jsx`, localStorage-persisted per browser)
- Compliance statement (standard, client approved generic safe language): "For adult smokers and vapers 21+
  only. Not evaluated by the FDA. Not intended to diagnose, treat, cure, or prevent any disease. Nicotine is
  an addictive chemical."
- Banned terms enforced in crosscheck: quit smoking, smoking cessation, cure, fda approved, completely safe,
  100% safe.
- Authority: general FDA/PACT Act vape-marketing caution — no state-specific legal text was provided by the
  client; recommend legal review before a hard launch given vape products carry real regulatory risk
  (PACT Act registration/reporting, state shipping restrictions, TPMPA age-verification requirements).

## Shop Structure
Real Breeze product-line taxonomy (flat categories, no subcategories):
- Breeze Pro — 2000 puffs, 1000mAh battery, 6mL e-liquid, 20mg nic salt, 31 flavors
- Breeze Prime — 6000 puffs, 1500mAh battery, 10mL e-liquid, 20mg nic salt, 12 flavors
- Breeze Elite — 4000 puffs, 1200mAh battery, 6mL e-liquid, 20mg nic salt, 12 flavors
- Breeze Mega — up to 60,000 puffs, 850mAh rechargeable battery, 20mg nic salt, 10 flavors
- E-Liquids — 30ml bottles, 20mg nic salt, 50VG/50PG, 10 flavors
- Bundles — 6 multi-packs (Pro Six/Trio Pack, Elite Six Pack, Prime Trio Pack, Mega Duo/Quad Pack)

81 products total. Flavor names, puff counts, battery specs, and bottle sizes are real, publicly available
Breeze product-line facts (not copyrightable creative expression) — cross-referenced against a competitor's
public collection pages on 2026-08-06 for accuracy, but **no images, descriptions, or marketing copy were
copied**; all product descriptions, images, and prices on this site are original. Prices are this site's own
figures, not matched to any competitor.

## SEO Keywords
Primary: breeze vape. Secondary: breeze vapes, breeze vaping, breeze bar vape, breeze pro vape, breezevape,
breeze pro, breeze vape near me, breeze vape flavors, breeze pro flavors, breeze flavors.
Full assignment in `docs/keyword-map.md`. Competitor referenced: shopbreeze.ca.

## Products
**Real Breeze catalog, placeholder images.** 81 products across Breeze Pro/Prime/Elite/Mega, E-Liquids, and
Bundles, defined in `PRODUCTS` in `src/config/site.js` (see Shop Structure above for sourcing notes). Images
are generic per-line placeholder SVGs (`public/images/breeze-{pro,prime,elite,mega,eliquids,bundles}-line.svg`
— one shared tile per product line, not per flavor). Replace with real product photography from the actual
Breeze distributor/manufacturer before launch — never scrape a competitor's photos.

## Forms & Email
- Provider: web3forms (default, both targets support it, no domain verification needed)
- Web3Forms API key: **pending** — `FORMS.web3formsKey` is a placeholder; forms use the documented
  key-pending fallback (redirect straight to the thank-you page, no email sent) until a real key is set.
- Contact form email / Order form email: placeholder `orders@breezevapes.net`, pending real address from client.

## Hosting & Deploy
- Target: **Vercel** (client-specified default)
- GitHub repo: https://github.com/kings1876/Breezevapes
- No client backend/CMS (client said no) — pure static-content Next.js site, content lives in `src/config/site.js`.

## Brand Story (AI visibility — real facts only)
- Founded: 2015, United States
- Ships to: nationwide, United States
- Differentiators, milestones, named founders, awards, and partnerships: **none supplied by client** — do not
  invent any. The homepage/about page authority sections deliberately omit these fields rather than fabricate them.

## Known gaps / follow-ups
1. Real contact/order email + Web3Forms key needed before forms function.
2. Real product photography needed before launch — catalog data (names/flavors/specs/prices) is real, but
   images are still generic per-line placeholders. Source real photos from the actual Breeze
   distributor/manufacturer, not a competitor's site.
3. Tawk.to widget ID needed to activate live chat.
4. No Node.js/npm available in the build environment this session — `npm install`, `next build`, and
   `scripts/crosscheck.mjs` were not run locally. Verify the first Vercel build succeeds (81-product catalog
   significantly increases build/page count vs. the original 10-product placeholder set) and address any
   compile errors that surface there.
5. Consider legal review of vape-specific compliance copy (PACT Act, state shipping restrictions) before launch.
6. Confirm this business is an authorized Breeze reseller — the site now presents the real Breeze product
   line by name; if not authorized, using these exact trademarked product names/flavors carries a trademark
   risk regardless of original imagery/copy.
