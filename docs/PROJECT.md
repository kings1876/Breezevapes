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
Structure A: Category → Subcategory → Product.
- Disposables → Breeze Bar, Breeze Plus, Breeze Pro Max
- Pod Systems → Rechargeable Pods, Refillable Pods
- E-Liquids → Nic Salts, Freebase
- Accessories → Chargers, Cases

## SEO Keywords
Primary: breeze vape. Secondary: breeze vapes, breeze vaping, breeze bar vape, breeze pro vape, breezevape,
breeze pro, breeze vape near me, breeze vape flavors, breeze pro flavors, breeze flavors.
Full assignment in `docs/keyword-map.md`. Competitor referenced: shopbreeze.ca.

## Products
**Placeholder catalog** (client asked for realistic placeholders since no real product list was supplied) —
10 Breeze-branded products across all 4 categories, defined in `PRODUCTS` in `src/config/site.js`. Images are
generated placeholder SVGs (`public/images/*.svg` — brand-gradient tile with product name). Replace both
before a real launch.

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
2. Real product catalog + photography needed before launch (placeholders are clearly usable but not final).
3. Tawk.to widget ID needed to activate live chat.
4. No Node.js/npm available in the build environment this session — `npm install`, `next build`, and
   `scripts/crosscheck.mjs` were not run locally. Verify the first Vercel build succeeds and address any
   compile errors that surface there.
5. Consider legal review of vape-specific compliance copy (PACT Act, state shipping restrictions) before launch.
