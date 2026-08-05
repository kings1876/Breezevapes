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
  },
  {
    slug: 'breeze-prime',
    name: 'Breeze Prime',
    description: 'Breeze Prime disposable vapes — 6000 puffs, 1500mAh battery, 10mL pre-filled e-liquid, 20mg nicotine salt.',
    subcategories: [],
  },
  {
    slug: 'breeze-elite',
    name: 'Breeze Elite',
    description: 'Breeze Elite disposable vapes — 4000 puffs, 1200mAh battery, 6mL pre-filled e-liquid, 20mg nicotine salt.',
    subcategories: [],
  },
  {
    slug: 'breeze-mega',
    name: 'Breeze Mega',
    description: 'Breeze Mega rechargeable disposables — up to 60,000 puffs, 850mAh rechargeable battery, 20mg nicotine salt.',
    subcategories: [],
  },
  {
    slug: 'e-liquids',
    name: 'E-Liquids',
    description: 'Breeze nicotine salt e-liquids — 30ml bottles, 20mg, 50VG/50PG blend.',
    subcategories: [],
  },
  {
    slug: 'bundles',
    name: 'Bundles',
    description: 'Multi-packs across the Breeze Pro, Prime, Elite, and Mega lineup at a bundle price.',
    subcategories: [],
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

const disposableProducts = Object.entries(FLAVORS_BY_LINE).flatMap(([lineSlug, flavors]) => {
  const spec = LINE_SPECS[lineSlug]
  return flavors.map((flavor) => ({
    slug: `${lineSlug}-${slugify(flavor)}`,
    name: `${spec.label} — ${flavor}`,
    price: spec.price,
    category: lineSlug,
    subcategory: '',
    short: `${spec.label} disposable vape in ${flavor}, ${spec.puffs}.`,
    description: `${spec.label} in ${flavor} delivers ${spec.puffs} from a ${spec.battery}, with ${spec.eliquid} at ${spec.nicotine}. Draw-activated — no charging or refilling required.`,
    badge: '',
    images: [spec.image],
  }))
})

const ELIQUID_FLAVORS = [
  'Raspberry Lemon', 'Blue Raspberry', 'Peach Berry', 'Mint', 'Juicy Peach Ice',
  'Honeydew Pineapple', 'Grape', 'Blueberry Mint', 'Cherry Lemon', 'Blueberry Lemon',
]

const eliquidProducts = ELIQUID_FLAVORS.map((flavor) => ({
  slug: `e-liquid-${slugify(flavor)}`,
  name: `Breeze E-Liquid — ${flavor}`,
  price: 17.99,
  category: 'e-liquids',
  subcategory: '',
  short: `Breeze nicotine salt e-liquid in ${flavor}, 30ml bottle.`,
  description: `Breeze E-Liquid in ${flavor} is a 30ml nicotine salt e-liquid at 20mg, blended 50VG/50PG for a smooth throat hit and balanced vapor production. Compatible with standard pod systems and refillable devices.`,
  badge: '',
  images: ['breeze-eliquids-line.svg'],
}))

const bundleProducts = [
  { slug: 'breeze-pro-six-pack', name: 'Breeze Pro Six Pack', price: 99.99, desc: 'Six Breeze Pro disposables (2000 puffs each), mixed or matched flavors.' },
  { slug: 'breeze-elite-six-pack', name: 'Breeze Elite Six Pack', price: 124.99, desc: 'Six Breeze Elite disposables (4000 puffs each), mixed or matched flavors.' },
  { slug: 'breeze-mega-duo-pack', name: 'Breeze Mega Duo Pack', price: 49.99, desc: 'Two Breeze Mega rechargeable disposables (up to 60,000 puffs each).' },
  { slug: 'breeze-pro-trio-pack', name: 'Breeze Pro Trio Pack', price: 54.99, desc: 'Three Breeze Pro disposables (2000 puffs each), mixed or matched flavors.' },
  { slug: 'breeze-prime-trio-pack', name: 'Breeze Prime Trio Pack', price: 74.99, desc: 'Three Breeze Prime disposables (6000 puffs each), mixed or matched flavors.' },
  { slug: 'breeze-mega-quad-pack', name: 'Breeze Mega Quad Pack', price: 99.99, desc: 'Four Breeze Mega rechargeable disposables (up to 60,000 puffs each).' },
].map((b) => ({
  slug: b.slug,
  name: b.name,
  price: b.price,
  category: 'bundles',
  subcategory: '',
  short: b.desc,
  description: `${b.desc} Bundle pricing saves compared to buying each device individually — mix flavors across the bundle by noting your picks in the order notes.`,
  badge: 'Bundle',
  images: ['breeze-bundles-line.svg'],
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
