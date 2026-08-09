// ★ SINGLE SOURCE OF TRUTH ★
// Every domain-bearing file, nav link, product page, and agent-ready file is
// generated from the data below. Never hand-edit generated output — edit here.

export const SITE = {
  name: 'Breeze Vapes',
  tagline: 'Catch the Breeze.',
  domain: 'www.breezevapes.net',
  url: 'https://www.breezevapes.net',
  description:
    'Breeze Vapes is a USA-based online vape shop offering the full Breeze Pro, Prime, Elite, and Mega disposable lineup plus Breeze e-liquids and multi-packs, nationwide, with crypto payment and fast, discreet shipping.',
  locale: 'en',
  target: 'vercel',
  currency: 'USD',
  currencySymbol: '$',
  primaryColor: '#1C7ED6',
  darkColor: '#0B1B33',
  accentColor: '#3FE0C5',
  foundingYear: 2015,
  foundingLocation: 'United States',
  areaServed: 'United States',
  shipsTo: 'Nationwide across the United States',
  contactEmail: 'orders@breezevapes.net', // PLACEHOLDER — replace with a real inbox, see README
  phone: '',
  ageRestriction: '21+',
  productType: 'Electronic nicotine vaping products',
  complianceStatement:
    'For adult smokers and vapers 21+ only. Not evaluated by the FDA. Not intended to diagnose, treat, cure, or prevent any disease. Nicotine is an addictive chemical.',
}

export const ORDER_RULES = {
  minOrder: 150,
  freeShippingOver: 300,
  flatShippingFee: 15,
  cryptoDiscountPercent: 10,
  discountCode: '',
}

export const FORMS = {
  provider: 'web3forms',
  web3formsKey: 'YOUR-WEB3FORMS-KEY', // PENDING — forms redirect to thank-you page but do not email until set
  resendFrom: '',
  turnstileSiteKey: '',
  contactEmail: 'orders@breezevapes.net', // PLACEHOLDER — update when a real inbox is provided
  orderEmail: 'orders@breezevapes.net', // PLACEHOLDER
}

export const CHAT = {
  channels: [
    // Tawk.to widget requested but no property/widget ID supplied yet.
    // Leave value as 'PENDING/PENDING' — ChatHub will not render a widget until this is set.
    { type: 'tawk', value: 'PENDING/PENDING' },
  ],
}

export const CATEGORIES = [
  {
    slug: 'breeze-pro',
    name: 'Breeze Pro',
    description: 'Breeze Pro disposable vapes — 2000 puffs, 1000mAh battery, 6mL pre-filled e-liquid, 20mg nicotine salt.',
    subcategories: [],
    image: 'categories/breeze-pro.jpeg',
  },
  {
    slug: 'breeze-prime',
    name: 'Breeze Prime',
    description: 'Breeze Prime disposable vapes — 6000 puffs, 1500mAh battery, 10mL pre-filled e-liquid, 20mg nicotine salt.',
    subcategories: [],
    image: 'categories/breeze-prime.jpeg',
  },
  {
    slug: 'breeze-elite',
    name: 'Breeze Elite',
    description: 'Breeze Elite disposable vapes — 4000 puffs, 1200mAh battery, 6mL pre-filled e-liquid, 20mg nicotine salt.',
    subcategories: [],
    image: 'categories/breeze-elite.jpeg',
  },
  {
    slug: 'breeze-mega',
    name: 'Breeze Mega',
    description: 'Breeze Mega rechargeable disposables — up to 60,000 puffs, 850mAh rechargeable battery, 20mg nicotine salt.',
    subcategories: [],
    image: 'categories/breeze-mega.jpeg',
  },
  {
    slug: 'e-liquids',
    name: 'E-Liquids',
    description: 'Breeze nicotine salt e-liquids — 30ml bottles, 20mg, 50VG/50PG blend.',
    subcategories: [],
    image: 'categories/e-liquids.jpeg',
  },
  {
    slug: 'bundles',
    name: 'Bundles',
    description: 'Multi-packs across the Breeze Pro, Prime, Elite, and Mega lineup at a bundle price.',
    subcategories: [],
    image: 'categories/bundles.jpeg',
  },
]

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[()]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

// Real Breeze product-line specs and flavor names (factual data only — puff
// counts, battery specs, bottle sizes, and flavor names are not creative
// expression). Descriptions, images, and prices below are original to this
// site, not copied from any retailer.
const LINE_SPECS = {
  'breeze-pro': {
    label: 'Breeze Pro',
    puffs: '2000 puffs',
    battery: '1000mAh internal battery',
    eliquid: '6mL pre-filled e-liquid',
    nicotine: '20mg nicotine salt',
    price: 19.99,
    image: 'breeze-pro-line.svg',
  },
  'breeze-prime': {
    label: 'Breeze Prime',
    puffs: '6000 puffs',
    battery: '1500mAh internal battery',
    eliquid: '10mL pre-filled e-liquid',
    nicotine: '20mg nicotine salt',
    price: 26.99,
    image: 'breeze-prime-line.svg',
  },
  'breeze-elite': {
    label: 'Breeze Elite',
    puffs: '4000 puffs',
    battery: '1200mAh internal battery',
    eliquid: '6mL pre-filled e-liquid',
    nicotine: '20mg nicotine salt',
    price: 24.99,
    image: 'breeze-elite-line.svg',
  },
  'breeze-mega': {
    label: 'Breeze Mega',
    puffs: 'up to 60,000 puffs',
    battery: '850mAh rechargeable battery',
    eliquid: 'high-capacity pre-filled e-liquid',
    nicotine: '20mg nicotine salt',
    price: 29.99,
    image: 'breeze-mega-line.svg',
  },
}

const FLAVORS_BY_LINE = {
  'breeze-pro': [
    'Blue Raspberry', 'Mint', 'Grape Blackcurrant', 'Raspberry Lemon', 'Tropical Summer',
    'Lemon Mint', 'Blueberry Watermelon', 'Glubule Mint (Chew Mint)', 'Blueberry Mint', 'Cherry Fizz',
    'Strawberry Watermelon', 'Cherry Lemon', 'Pineapple Passionfruit', 'Lush Ice', 'Banana Mint',
    'Strawberry Peach Mint', 'Peach Mango', 'Caribbean White (Pina)', 'BBG', 'Vani Tobacco (Vanilla Tobacco)',
    'Grape S', 'Pomegranate Mint', 'Blueberry Banana', 'StrawKiwi', 'Orange Mango Watermelon',
    'Tobacco', 'Strawberry Banana', 'Banana Coconut', 'Rush', 'Strawberry Lime Acai', 'Guava Lemon',
  ],
  'breeze-prime': [
    'Cherry Lemon', 'Peach Berry', 'Blueberry Lemon', 'Juicy Peach Ice', 'Mint', 'Strawberry Mint',
    'Grape', 'Honeydew Pineapple', 'Strawberry Apple', 'Double Apple', 'Mango', 'Banana Coconut',
  ],
  'breeze-elite': [
    'Blue Raspberry', 'Raspberry Peach Ice', 'Black Cherry', 'Strawberry Pineapple Ice', 'Cherry Lemon',
    'Raspberry Watermelon', 'Burst Ice (Punch Ice)', 'Strawberry Banana', 'Cherry Watermelon',
    'Orange Pineapple Tangerine', 'Kiwi Dragon Fruit Berry (Kiwi Dragon Berry)', 'Apple Cranberry',
  ],
  'breeze-mega': [
    'Blue Raspberry', 'Blueberry Lemon', 'Cherry Lemon', 'Grape', 'Juicy Peach Ice',
    'Lush Ice', 'Mango', 'Mint', 'Peach Berry', 'Strawberry Peach Mint',
  ],
}

// ---- Description generation ---------------------------------------------
// Every product gets a unique, 100+ word, SEO-oriented description built
// from rotating sentence templates (never a single find/replace template)
// plus a word-count safety net so the 100-word minimum is guaranteed
// programmatically rather than by hand-counting 81 paragraphs.

const FLAVOR_NOTES = [
  { test: /ice/i, note: 'cooling, icy finish' },
  { test: /mint|glubule/i, note: 'refreshing minty finish' },
  { test: /tobacco|vani/i, note: 'smooth, tobacco-forward profile' },
  { test: /grape/i, note: 'rich grape sweetness' },
  { test: /apple/i, note: 'crisp apple sweetness' },
  { test: /banana|coconut/i, note: 'smooth, creamy sweetness' },
  { test: /berry|cherry|raspberry|strawberry|blueberry|cranberry|acai/i, note: 'bold, tangy berry profile' },
  { test: /lemon|lime/i, note: 'bright citrus tang' },
  { test: /mango|peach|pineapple|guava|passionfruit|tropical|honeydew|watermelon|caribbean|orange|tangerine|dragon|kiwi|rush|bbg/i, note: 'juicy tropical sweetness' },
]
function flavorNote(flavor) {
  const hit = FLAVOR_NOTES.find((f) => f.test.test(flavor))
  return hit ? hit.note : 'signature Breeze flavor blend'
}

const FILLER_SENTENCES = [
  'Breeze Vapes ships fast and discreetly to addresses across the United States.',
  'Every order is processed quickly, with standard or free shipping depending on order size.',
  'Crypto payment is accepted on every order, with an automatic discount applied at checkout.',
  'Breeze Vapes carries the full Breeze Pro, Prime, Elite, and Mega lineup alongside Breeze E-Liquid and bundles.',
]
function ensureMinWords(text, minWords, seedIndex) {
  let result = text
  let i = 0
  while (result.trim().split(/\s+/).length < minWords && i < FILLER_SENTENCES.length) {
    result += ' ' + FILLER_SENTENCES[(seedIndex + i) % FILLER_SENTENCES.length]
    i++
  }
  return result
}

const DISPOSABLE_OPENERS = [
  (label, flavor, note) => `${label} in ${flavor} is one of the most requested flavors in the Breeze vape lineup, delivering a ${note} from the very first draw.`,
  (label, flavor, note) => `Looking for a ${label} flavor that stands out? ${flavor} brings a ${note} to every puff, making it a favorite among Breeze vape fans.`,
  (label, flavor, note) => `${flavor} is a standout in the ${label} collection, built around a ${note} that keeps every session interesting from start to finish.`,
  (label, flavor, note) => `For vapers who want a Breeze vape with real character, ${label} in ${flavor} delivers a ${note} that's hard to put down.`,
]
const DISPOSABLE_SPECS = [
  (label, puffs, battery, eliquid, nicotine) => `This ${label} disposable vape is built for all-day performance, packing ${puffs} from a reliable ${battery} and ${eliquid} at ${nicotine} strength.`,
  (label, puffs, battery, eliquid, nicotine) => `Under the hood, ${label} runs on a ${battery} paired with ${eliquid} at ${nicotine}, rated for ${puffs} of consistent flavor from the first draw to the last.`,
  (label, puffs, battery, eliquid, nicotine) => `Each device ships with ${eliquid} at ${nicotine} and a ${battery}, good for ${puffs} before it's time to reach for another.`,
]
const DISPOSABLE_CONVENIENCE = [
  () => `There's no charging, no refilling, and no buttons — just a draw-activated device that's ready to vape straight out of the box.`,
  () => `Fully disposable and draw-activated, there's nothing to charge, refill, or configure — just open the box and start vaping right away.`,
  () => `Once it's empty, simply dispose of it responsibly and grab a new one — no maintenance, no refills, no hassle involved.`,
]
const RECHARGEABLE_CONVENIENCE = [
  (label) => `A rechargeable battery keeps ${label} going well past a typical disposable, so you get far more puffs per device before it's time to recycle it.`,
  (label) => `Unlike single-use disposables, ${label} is rechargeable via USB-C, extending its lifespan well beyond a standard Breeze disposable vape.`,
  (label) => `Rechargeable and built to last, ${label} is designed for vapers who want disposable-vape convenience without replacing a device every few days.`,
]
const DISPOSABLE_USECASE = [
  (label, flavor, note) => `Whether you're new to ${label} vapes or restocking a favorite, ${flavor} is an easy pick for vapers who want a ${note} that doesn't fade by the last puff.`,
  (label, flavor) => `${flavor} works equally well as an everyday vape or as a flavor to keep in rotation alongside other ${label} flavors in your order.`,
  (label, flavor, note) => `If you're comparing Breeze vape flavors before you order, ${flavor} is a solid starting point for anyone who enjoys a ${note}.`,
]
const DISPOSABLE_CLOSING = [
  (label) => `Order ${label} online today with crypto payment accepted and fast nationwide shipping across the United States.`,
  (label) => `Shop the full ${label} flavor lineup at Breeze Vapes, with crypto payment and fast nationwide shipping on every order.`,
]

function buildDisposableDescription({ label, flavor, puffs, battery, eliquid, nicotine, index, rechargeable }) {
  const note = flavorNote(flavor)
  const parts = [
    DISPOSABLE_OPENERS[index % DISPOSABLE_OPENERS.length](label, flavor, note),
    DISPOSABLE_SPECS[index % DISPOSABLE_SPECS.length](label, puffs, battery, eliquid, nicotine),
    rechargeable
      ? RECHARGEABLE_CONVENIENCE[index % RECHARGEABLE_CONVENIENCE.length](label)
      : DISPOSABLE_CONVENIENCE[index % DISPOSABLE_CONVENIENCE.length](),
    DISPOSABLE_USECASE[index % DISPOSABLE_USECASE.length](label, flavor, note),
    DISPOSABLE_CLOSING[index % DISPOSABLE_CLOSING.length](label),
  ]
  return ensureMinWords(parts.join(' '), 100, index)
}

// Shorter (~50+ word) blurb shown in the purchase panel next to Add to
// Order — distinct from both the card `short` line and the full `description`.
const DISPOSABLE_SUMMARY_A = [
  (label, flavor, note, puffs, nicotine) => `${label} — ${flavor} delivers a ${note} in a compact, draw-activated disposable rated for ${puffs} at ${nicotine} strength.`,
  (label, flavor, note, puffs, nicotine) => `A ${note} defines ${label} in ${flavor}, a disposable vape built for ${puffs} of consistent flavor at ${nicotine}.`,
  (label, flavor, note, puffs, nicotine) => `${flavor} gives this ${label} its ${note}, backed by ${puffs} and ${nicotine} strength in every device.`,
]
const DISPOSABLE_SUMMARY_B = [
  () => `It's ready to vape straight out of the box, with no charging, refilling, or setup required — just open it and go.`,
  () => `No buttons, no maintenance, no refills — just a reliable everyday disposable that's ready the moment you open it.`,
]
const DISPOSABLE_SUMMARY_B_RECHARGEABLE = [
  () => `A rechargeable battery keeps it going far longer than a typical disposable, so you get more puffs before it's time to recycle.`,
  () => `Rechargeable via USB-C, it's built to outlast a standard disposable while keeping the same grab-and-go simplicity.`,
]

function buildDisposableSummary({ label, flavor, puffs, nicotine, index, rechargeable }) {
  const note = flavorNote(flavor)
  const bPool = rechargeable ? DISPOSABLE_SUMMARY_B_RECHARGEABLE : DISPOSABLE_SUMMARY_B
  const parts = [
    DISPOSABLE_SUMMARY_A[index % DISPOSABLE_SUMMARY_A.length](label, flavor, note, puffs, nicotine),
    bPool[index % bPool.length](),
  ]
  return ensureMinWords(parts.join(' '), 50, index + 1)
}

const ELIQUID_OPENERS = [
  (flavor, note) => `Breeze E-Liquid in ${flavor} brings a ${note} to any pod system or refillable device, made for vapers who want to customize their setup with genuine Breeze vape flavors.`,
  (flavor, note) => `${flavor} is one of the most popular Breeze E-Liquid flavors, delivering a ${note} in a nicotine salt formula built for smooth, everyday vaping sessions.`,
  (flavor, note) => `For vapers who already own a device, Breeze E-Liquid in ${flavor} offers a ${note} without committing to a specific disposable vape line.`,
]
const ELIQUID_SPECS = [
  () => `Each 30ml bottle is formulated at 20mg nicotine salt with a balanced 50VG/50PG blend, giving you a smooth throat hit alongside solid vapor production.`,
  () => `Bottled at 30ml and mixed 50VG/50PG at 20mg nicotine salt, it's engineered for fast nicotine absorption without the harshness of a higher-PG mix.`,
]
const ELIQUID_USECASE = [
  (flavor) => `${flavor} works well in most standard pod systems and refillable devices, making it easy to switch flavors without replacing hardware every time.`,
  (flavor) => `It's a flavor worth keeping on hand if you rotate between multiple Breeze vape flavors or top off a refillable pod between disposables.`,
]
const ELIQUID_EXTRA = 'Breeze E-Liquid is bottled in small batches for consistent flavor and vapor quality from the first fill to the last drop.'
const ELIQUID_CLOSING = [
  () => `Shop the full Breeze E-Liquid lineup at Breeze Vapes, with crypto payment accepted and fast nationwide shipping across the United States.`,
  () => `Order Breeze E-Liquid online today — crypto payment accepted, with fast, discreet shipping nationwide.`,
]

function buildEliquidDescription(flavor, index) {
  const note = flavorNote(flavor)
  const parts = [
    ELIQUID_OPENERS[index % ELIQUID_OPENERS.length](flavor, note),
    ELIQUID_SPECS[index % ELIQUID_SPECS.length](),
    ELIQUID_USECASE[index % ELIQUID_USECASE.length](flavor),
    ELIQUID_EXTRA,
    ELIQUID_CLOSING[index % ELIQUID_CLOSING.length](),
  ]
  return ensureMinWords(parts.join(' '), 100, index)
}

const ELIQUID_SUMMARY_A = [
  (flavor, note) => `Breeze E-Liquid — ${flavor} brings a ${note} to any pod system or refillable device, in a 30ml nicotine salt bottle at 20mg strength.`,
  (flavor, note) => `${flavor} is a 30ml Breeze E-Liquid nicotine salt blend with a ${note}, mixed 50VG/50PG at 20mg for a smooth throat hit.`,
]
const ELIQUID_SUMMARY_B = [
  () => `It's an easy way to switch flavors or top off a refillable device without buying a new disposable.`,
  () => `Great for rotating flavors alongside your Breeze disposables or keeping a refillable pod stocked between orders.`,
]
function buildEliquidSummary(flavor, index) {
  const note = flavorNote(flavor)
  const parts = [
    ELIQUID_SUMMARY_A[index % ELIQUID_SUMMARY_A.length](flavor, note),
    ELIQUID_SUMMARY_B[index % ELIQUID_SUMMARY_B.length](),
  ]
  return ensureMinWords(parts.join(' '), 50, index + 2)
}

function buildBundleDescription({ name, line, count }, index) {
  const spec = LINE_SPECS[line]
  const parts = [
    `The ${name} bundles ${count} ${spec.label} disposable vapes together at a lower per-device price than buying individually, making it an easy way to stock up on Breeze vape flavors without reordering every few weeks.`,
    `Each device delivers ${spec.puffs} from a ${spec.battery} and ${spec.eliquid} at ${spec.nicotine} strength, so a full ${name.toLowerCase()} adds up to a lot of vaping time across your chosen flavors.`,
    `Mix and match from the full ${spec.label} flavor lineup and note your picks in the order notes at checkout — every flavor in the ${spec.label} collection is available in this bundle.`,
    `Order the ${name} online today with crypto payment accepted and fast, discreet nationwide shipping across the United States.`,
  ]
  return ensureMinWords(parts.join(' '), 100, index)
}

function buildBundleSummary({ name, line, count }, index) {
  const spec = LINE_SPECS[line]
  const parts = [
    `The ${name} bundles ${count} ${spec.label} devices at a lower price than buying individually.`,
    `Each device delivers ${spec.puffs} at ${spec.nicotine} strength, so you get plenty of vaping time across your favorite Breeze flavors in one order.`,
  ]
  return ensureMinWords(parts.join(' '), 50, index + 3)
}

// ---- Product generation ---------------------------------------------------

// Real product photos live in public/images/products/<slug>.jpeg for every product.
let disposableIndex = 0
const disposableProducts = Object.entries(FLAVORS_BY_LINE).flatMap(([lineSlug, flavors]) => {
  const spec = LINE_SPECS[lineSlug]
  return flavors.map((flavor) => {
    const index = disposableIndex++
    const slug = `${lineSlug}-${slugify(flavor)}`
    return {
      slug,
      name: `${spec.label} — ${flavor}`,
      price: spec.price,
      category: lineSlug,
      subcategory: '',
      short: `${spec.label} disposable vape in ${flavor}, ${spec.puffs}.`,
      summary: buildDisposableSummary({
        label: spec.label,
        flavor,
        puffs: spec.puffs,
        nicotine: spec.nicotine,
        index,
        rechargeable: lineSlug === 'breeze-mega',
      }),
      description: buildDisposableDescription({
        label: spec.label,
        flavor,
        puffs: spec.puffs,
        battery: spec.battery,
        eliquid: spec.eliquid,
        nicotine: spec.nicotine,
        index,
        rechargeable: lineSlug === 'breeze-mega',
      }),
      badge: '',
      images: [`products/${slug}.jpeg`],
    }
  })
})

const ELIQUID_FLAVORS = [
  'Raspberry Lemon', 'Blue Raspberry', 'Peach Berry', 'Mint', 'Juicy Peach Ice',
  'Honeydew Pineapple', 'Grape', 'Blueberry Mint', 'Cherry Lemon', 'Blueberry Lemon',
]

const eliquidProducts = ELIQUID_FLAVORS.map((flavor, index) => ({
  slug: `e-liquid-${slugify(flavor)}`,
  name: `Breeze E-Liquid — ${flavor}`,
  price: 17.99,
  category: 'e-liquids',
  subcategory: '',
  short: `Breeze nicotine salt e-liquid in ${flavor}, 30ml bottle.`,
  summary: buildEliquidSummary(flavor, index),
  description: buildEliquidDescription(flavor, index),
  badge: '',
  images: [`products/e-liquid-${slugify(flavor)}.jpeg`],
}))

const BUNDLE_DEFS = [
  { slug: 'breeze-pro-six-pack', name: 'Breeze Pro Six Pack', price: 99.99, line: 'breeze-pro', count: 6 },
  { slug: 'breeze-elite-six-pack', name: 'Breeze Elite Six Pack', price: 124.99, line: 'breeze-elite', count: 6 },
  { slug: 'breeze-mega-duo-pack', name: 'Breeze Mega Duo Pack', price: 49.99, line: 'breeze-mega', count: 2 },
  { slug: 'breeze-pro-trio-pack', name: 'Breeze Pro Trio Pack', price: 54.99, line: 'breeze-pro', count: 3 },
  { slug: 'breeze-prime-trio-pack', name: 'Breeze Prime Trio Pack', price: 74.99, line: 'breeze-prime', count: 3 },
  { slug: 'breeze-mega-quad-pack', name: 'Breeze Mega Quad Pack', price: 99.99, line: 'breeze-mega', count: 4 },
]

const bundleProducts = BUNDLE_DEFS.map((b, index) => ({
  slug: b.slug,
  name: b.name,
  price: b.price,
  category: 'bundles',
  subcategory: '',
  short: `${b.count} ${LINE_SPECS[b.line].label} disposables (${LINE_SPECS[b.line].puffs} each), mixed or matched flavors.`,
  summary: buildBundleSummary(b, index),
  description: buildBundleDescription(b, index),
  badge: 'Bundle',
  images: [`products/${b.slug}.jpeg`],
}))

export const PRODUCTS = [...disposableProducts, ...eliquidProducts, ...bundleProducts]

// A curated, diverse subset for the homepage — one or two picks per line so
// the featured grid isn't dominated by a single product line.
export const FEATURED_SLUGS = [
  'breeze-pro-blue-raspberry',
  'breeze-pro-lush-ice',
  'breeze-prime-cherry-lemon',
  'breeze-prime-mint',
  'breeze-elite-blue-raspberry',
  'breeze-mega-blue-raspberry',
  'e-liquid-mint',
  'breeze-pro-six-pack',
]

export const POSTS = [
  {
    slug: 'breeze-vape-flavors-guide',
    title: 'The Complete Guide to Breeze Vape Flavors',
    date: '2026-07-15',
    excerpt:
      'A rundown of every Breeze flavor family — from icy fruit blends to classic menthol — and how to pick the right one for your taste.',
    category: 'Flavors',
    body: `Breeze vapes are built around a wide flavor lineup that spans icy fruit blends, classic mint, and tobacco-inspired profiles, offered across the Breeze Pro, Prime, Elite, and Mega lines. This guide breaks down the main flavor families so you can find the right one faster.

**Icy fruit blends.** Flavors like Blue Raspberry, Lush Ice, and Raspberry Peach Ice pair a fruit-forward base with a cooling menthol finish. These are some of the most popular Breeze flavors for vapers who want sweetness without it feeling heavy.

**Tropical and stone fruit.** Peach Berry, Mango, and Honeydew Pineapple profiles lean sweeter and less icy, better suited to vapers who prefer a smoother, less menthol-forward draw.

**Classic mint and tobacco.** For vapers who want a clean, refreshing draw without fruit sweetness, Breeze Mint (available across every line) and Breeze Pro Tobacco are the closest match to a traditional profile.

Whichever flavor family you land on, pairing it with the right puff count and nicotine strength — covered in our other Breeze vape guides — makes the biggest difference in day-to-day satisfaction. Browse the full flavor lineup on the [Breeze Vapes shop](/shop/).`,
  },
  {
    slug: 'breeze-pro-vs-breeze-bar',
    title: 'Breeze Pro vs. Breeze Prime vs. Breeze Elite: Which One Should You Choose?',
    date: '2026-07-22',
    excerpt:
      'Breeze Pro, Prime, and Elite cover different needs — here is how puff count, battery, and e-liquid capacity compare.',
    category: 'Comparisons',
    body: `Breeze Pro, Breeze Prime, and Breeze Elite are all part of the Breeze disposable lineup, but they're built for different habits. Here's how they compare.

**Puff count and battery.** Breeze Pro sits at the entry point with 2000 puffs and a 1000mAh battery. Breeze Elite steps up to 4000 puffs on a 1200mAh battery. Breeze Prime tops the disposable range at 6000 puffs with a 1500mAh battery — for even more, Breeze Mega is rechargeable and rated up to 60,000 puffs.

**E-liquid capacity.** Breeze Pro and Elite both ship with 6mL of pre-filled e-liquid, while Breeze Prime carries a larger 10mL fill to match its higher puff count.

**Who each is for.** If you vape occasionally or want the lowest price per device, Breeze Pro is the simpler pick. If you go through disposables quickly and want fewer replacements without paying for the largest device, Breeze Elite is the middle ground. If you want the longest-lasting single disposable, Breeze Prime is built for that.

See every line side by side in the [Breeze Pro category](/shop/breeze-pro/), [Breeze Prime category](/shop/breeze-prime/), and [Breeze Elite category](/shop/breeze-elite/).`,
  },
  {
    slug: 'how-to-choose-your-breeze-vape',
    title: 'How to Choose the Right Breeze Vape for You',
    date: '2026-07-29',
    excerpt:
      'New to Breeze? Here is how to think about puff count, nicotine strength, and device type before you order.',
    category: 'Buying Guides',
    body: `Choosing between the Breeze disposable lines and Breeze e-liquid comes down to three questions: how often you vape, how much device you want to carry, and whether you already own a refillable pod system.

**If you want zero maintenance,** a Breeze disposable — Pro, Elite, Prime, or Mega — is the simplest option. Pick a puff count that matches how often you'd otherwise replace the device: Pro for occasional use, Elite or Prime for daily use, Mega if you want a rechargeable device rated up to 60,000 puffs.

**If you buy in volume,** a Breeze Bundle (Six Pack, Trio Pack, Duo Pack, or Quad Pack) works out cheaper per device than buying single units.

**If you already own a refillable pod system,** Breeze E-Liquid in a 30ml nicotine salt bottle lets you customize flavor independently of any specific disposable device.

Every Breeze product ships nationwide across the United States with crypto payment accepted. Have questions before ordering? Visit our [FAQ page](/faq/) or [contact us](/contact/) directly.`,
  },
]

export const FAQS = [
  {
    q: 'What is Breeze Vapes?',
    a: 'Breeze Vapes is a USA-based online vape shop founded in 2015, offering the full Breeze Pro, Prime, Elite, and Mega disposable lineup plus Breeze e-liquids and multi-packs, with nationwide shipping across the United States.',
  },
  {
    q: 'What is the minimum order amount?',
    a: `The minimum order at Breeze Vapes is $${ORDER_RULES.minOrder}.`,
  },
  {
    q: 'Do you offer free shipping?',
    a: 'Yes — orders over $300 ship free. Orders under that threshold have a flat $15 shipping fee.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'Breeze Vapes accepts cryptocurrency payment. Paying with crypto also gets you an automatic 10% discount on your order.',
  },
  {
    q: 'Do you ship nationwide?',
    a: 'Yes, Breeze Vapes ships nationwide across the United States.',
  },
  {
    q: 'Is there an age requirement to order?',
    a: 'Yes — you must be 21 years of age or older to purchase from Breeze Vapes, in compliance with federal law.',
  },
]
