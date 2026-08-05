// ★ SINGLE SOURCE OF TRUTH ★
// Every domain-bearing file, nav link, product page, and agent-ready file is
// generated from the data below. Never hand-edit generated output — edit here.

export const SITE = {
  name: 'Breeze Vapes',
  tagline: 'Catch the Breeze.',
  domain: 'breezevapes.net',
  url: 'https://breezevapes.net',
  description:
    'Breeze Vapes is a USA-based online vape shop offering disposable vapes, pod systems, e-liquids, and accessories nationwide, with crypto payment and fast, discreet shipping.',
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
    slug: 'disposables',
    name: 'Disposables',
    description: 'Single-use Breeze disposable vapes in a wide range of puff counts and flavors.',
    subcategories: [
      { slug: 'breeze-bar', name: 'Breeze Bar' },
      { slug: 'breeze-plus', name: 'Breeze Plus' },
      { slug: 'breeze-pro-max', name: 'Breeze Pro Max' },
    ],
  },
  {
    slug: 'pod-systems',
    name: 'Pod Systems',
    description: 'Rechargeable and refillable Breeze pod systems for everyday vaping.',
    subcategories: [
      { slug: 'rechargeable-pods', name: 'Rechargeable Pods' },
      { slug: 'refillable-pods', name: 'Refillable Pods' },
    ],
  },
  {
    slug: 'e-liquids',
    name: 'E-Liquids',
    description: 'Nic salt and freebase e-liquids in Breeze signature flavors.',
    subcategories: [
      { slug: 'nic-salts', name: 'Nic Salts' },
      { slug: 'freebase', name: 'Freebase' },
    ],
  },
  {
    slug: 'accessories',
    name: 'Accessories',
    description: 'Chargers, cases, and everyday essentials for your Breeze device.',
    subcategories: [
      { slug: 'chargers', name: 'Chargers' },
      { slug: 'cases', name: 'Cases' },
    ],
  },
]

// PLACEHOLDER CATALOG — realistic Breeze-branded products so the site has a
// working shop from day one. Swap in real names/prices/images before launch.
export const PRODUCTS = [
  {
    slug: 'breeze-pro-6000-blue-razz-ice',
    name: 'Breeze Pro 6000 — Blue Razz Ice',
    price: 24.99,
    category: 'disposables',
    subcategory: 'breeze-pro-max',
    short: 'A bold blue raspberry disposable with a cooling menthol finish, 6000 puffs.',
    description:
      'Breeze Pro 6000 in Blue Razz Ice pairs a bold blue raspberry profile with a cooling menthol finish for an all-day vape. Rechargeable battery and a large e-liquid capacity are built for extended sessions without needing a refill.',
    badge: 'Best Value',
    images: ['breeze-pro-6000-blue-razz-ice.svg'],
  },
  {
    slug: 'breeze-plus-800-watermelon-ice',
    name: 'Breeze Plus 800 — Watermelon Ice',
    price: 16.99,
    category: 'disposables',
    subcategory: 'breeze-plus',
    short: 'Juicy watermelon with an icy menthol edge in a compact 800-puff device.',
    description:
      'Breeze Plus 800 delivers juicy watermelon with an icy menthol edge in a slim, pocket-friendly device. Draw-activated with no buttons, it is built for grab-and-go convenience.',
    badge: 'Popular',
    images: ['breeze-plus-800-watermelon-ice.svg'],
  },
  {
    slug: 'breeze-bar-2000-mango',
    name: 'Breeze Bar 2000 — Mango',
    price: 19.99,
    category: 'disposables',
    subcategory: 'breeze-bar',
    short: 'Ripe mango flavor in the original Breeze Bar, 2000 puffs.',
    description:
      'The original Breeze Bar in Mango delivers a smooth, ripe tropical flavor across 2000 puffs. A balanced mid-size option between the compact Plus and the extended Pro Max lines.',
    badge: 'New',
    images: ['breeze-bar-2000-mango.svg'],
  },
  {
    slug: 'breeze-pro-max-10000-strawberry-kiwi',
    name: 'Breeze Pro Max 10000 — Strawberry Kiwi',
    price: 29.99,
    category: 'disposables',
    subcategory: 'breeze-pro-max',
    short: 'The longest-lasting Breeze disposable, strawberry kiwi in every puff, up to 10000 puffs.',
    description:
      'Breeze Pro Max 10000 combines a sweet strawberry kiwi blend with the largest capacity in the Breeze disposable lineup. A rechargeable battery and mesh coil keep flavor consistent from the first puff to the last.',
    badge: 'Premium',
    images: ['breeze-pro-max-10000-strawberry-kiwi.svg'],
  },
  {
    slug: 'breeze-pod-starter-kit',
    name: 'Breeze Pod System Starter Kit',
    price: 34.99,
    category: 'pod-systems',
    subcategory: 'rechargeable-pods',
    short: 'Everything needed to start with the Breeze rechargeable pod system.',
    description:
      'The Breeze Pod System Starter Kit includes the rechargeable battery, a USB-C cable, and two prefilled pods. Adjustable airflow and a low-e-liquid indicator make it an easy first step into pod-based vaping.',
    badge: 'New',
    images: ['breeze-pod-starter-kit.svg'],
  },
  {
    slug: 'breeze-rechargeable-pod-kit',
    name: 'Breeze Rechargeable Pod Kit',
    price: 27.99,
    category: 'pod-systems',
    subcategory: 'rechargeable-pods',
    short: 'A slim rechargeable pod device compatible with the full Breeze pod flavor line.',
    description:
      'The Breeze Rechargeable Pod Kit is a slim, magnetic pod device compatible with the full range of Breeze prefilled pods. Built-in battery indicator and fast USB-C charging keep it ready for daily use.',
    badge: 'Popular',
    images: ['breeze-rechargeable-pod-kit.svg'],
  },
  {
    slug: 'breeze-nic-salt-cool-mint-30ml',
    name: 'Breeze Nic Salt E-Liquid 30ml — Cool Mint',
    price: 12.99,
    category: 'e-liquids',
    subcategory: 'nic-salts',
    short: 'A crisp cool mint nic salt e-liquid in a 30ml bottle.',
    description:
      'Breeze Cool Mint nic salt e-liquid delivers a crisp, refreshing mint in a smooth nicotine salt formula designed for pod systems. Packaged in a 30ml child-resistant bottle.',
    badge: '',
    images: ['breeze-nic-salt-cool-mint-30ml.svg'],
  },
  {
    slug: 'breeze-freebase-peach-ice-60ml',
    name: 'Breeze Freebase E-Liquid 60ml — Peach Ice',
    price: 14.99,
    category: 'e-liquids',
    subcategory: 'freebase',
    short: 'Sweet peach with a cool finish in a 60ml freebase e-liquid bottle.',
    description:
      'Breeze Peach Ice freebase e-liquid balances sweet, ripe peach with a cool menthol finish. Bottled at 60ml for extended use in standard vape tanks and mods.',
    badge: 'Sale',
    images: ['breeze-freebase-peach-ice-60ml.svg'],
  },
  {
    slug: 'breeze-usb-c-fast-charger',
    name: 'Breeze USB-C Fast Charger',
    price: 9.99,
    category: 'accessories',
    subcategory: 'chargers',
    short: 'An official fast-charging USB-C cable for rechargeable Breeze devices.',
    description:
      'The Breeze USB-C Fast Charger is built and tested for rechargeable Breeze devices, delivering a full charge quickly and safely without overcharging your device.',
    badge: '',
    images: ['breeze-usb-c-fast-charger.svg'],
  },
  {
    slug: 'breeze-protective-carry-case',
    name: 'Breeze Protective Carry Case',
    price: 11.99,
    category: 'accessories',
    subcategory: 'cases',
    short: 'A slim protective case that keeps your Breeze device and spare pods together.',
    description:
      'The Breeze Protective Carry Case is a slim, silicone-lined case sized for Breeze disposables and pod devices, with a pocket for a spare pod or cable.',
    badge: '',
    images: ['breeze-protective-carry-case.svg'],
  },
]

export const POSTS = [
  {
    slug: 'breeze-vape-flavors-guide',
    title: 'The Complete Guide to Breeze Vape Flavors',
    date: '2026-07-15',
    excerpt:
      'A rundown of every Breeze flavor family — from icy fruit blends to classic menthol — and how to pick the right one for your taste.',
    category: 'Flavors',
    body: `Breeze vapes are built around a wide flavor lineup that spans icy fruit blends, classic menthol, and dessert-inspired profiles. This guide breaks down the main flavor families across the Breeze Bar, Breeze Plus, and Breeze Pro Max lines so you can find the right one faster.

**Icy fruit blends.** Flavors like Blue Razz Ice, Watermelon Ice, and Strawberry Kiwi pair a fruit-forward base with a cooling menthol finish. These are the most popular Breeze flavors for vapers who want sweetness without it feeling heavy.

**Tropical and stone fruit.** Mango and Peach Ice profiles lean sweeter and less icy, better suited to vapers who prefer a smoother, less menthol-forward draw.

**Classic mint and menthol.** For vapers who want a clean, refreshing draw without fruit sweetness, Breeze's Cool Mint nic salt e-liquid is the closest match to a traditional menthol profile.

Whichever flavor family you land on, pairing it with the right puff count and nicotine strength — covered in our other Breeze vape guides — makes the biggest difference in day-to-day satisfaction. Browse the full flavor lineup on the [Breeze Vapes shop](/shop/).`,
  },
  {
    slug: 'breeze-pro-vs-breeze-bar',
    title: 'Breeze Pro vs. Breeze Bar: Which One Should You Choose?',
    date: '2026-07-22',
    excerpt:
      'Breeze Pro and Breeze Bar cover different needs — here is how puff count, size, and battery life compare.',
    category: 'Comparisons',
    body: `Breeze Pro and Breeze Bar are both part of the Breeze disposable lineup, but they're built for different habits. Here's how they compare.

**Puff count and size.** Breeze Bar sits in the middle of the lineup at 2000 puffs, in a compact form factor. Breeze Pro Max scales up to 10000 puffs with a larger rechargeable battery, trading pocket size for longevity.

**Battery.** Breeze Pro devices use a rechargeable battery designed to last the full e-liquid capacity, while Breeze Bar is a fully disposable, single-use device.

**Who each is for.** If you vape occasionally or want the smallest device possible, Breeze Bar is the simpler pick. If you go through disposables quickly and want fewer replacements, Breeze Pro Max is built for that.

See both lines side by side in the [Disposables category](/shop/disposables/).`,
  },
  {
    slug: 'how-to-choose-your-breeze-vape',
    title: 'How to Choose the Right Breeze Vape for You',
    date: '2026-07-29',
    excerpt:
      'New to Breeze? Here is how to think about puff count, nicotine strength, and device type before you order.',
    category: 'Buying Guides',
    body: `Choosing between disposables, pod systems, and e-liquids comes down to three questions: how often you vape, how much control you want over nicotine strength, and whether you want to refill or replace.

**If you want zero maintenance,** a Breeze disposable — Bar, Plus, or Pro Max — is the simplest option. Pick a puff count that matches how often you'd otherwise replace the device.

**If you vape daily and want to control cost per session,** a Breeze pod system with refillable or prefilled pods generally works out cheaper over time than disposables.

**If you already own a device,** Breeze nic salt and freebase e-liquids let you customize flavor and nicotine strength independently.

Every Breeze product ships nationwide across the United States with crypto payment accepted. Have questions before ordering? Visit our [FAQ page](/faq/) or [contact us](/contact/) directly.`,
  },
]

export const FAQS = [
  {
    q: 'What is Breeze Vapes?',
    a: 'Breeze Vapes is a USA-based online vape shop founded in 2015, offering Breeze disposable vapes, pod systems, e-liquids, and accessories with nationwide shipping across the United States.',
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
