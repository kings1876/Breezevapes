import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import { SITE, CATEGORIES, PRODUCTS, FAQS, POSTS, ORDER_RULES, FEATURED_SLUGS } from '@/config/site'

export const metadata = {
  title: `${SITE.name} — Breeze Pro, Prime, Elite & Mega Disposable Vapes`,
  description: `Shop the full Breeze vape lineup — Pro, Prime, Elite, Mega disposables, e-liquids, and bundles. Nationwide US shipping, crypto payment accepted, ${ORDER_RULES.cryptoDiscountPercent}% off with crypto.`,
  alternates: { canonical: `${SITE.url}/` },
  openGraph: { url: `${SITE.url}/`, updatedTime: new Date().toISOString() },
}

export default function HomePage() {
  const featured = FEATURED_SLUGS.map((slug) => PRODUCTS.find((p) => p.slug === slug)).filter(Boolean)

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE.url}/search/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section
        className="section"
        style={{
          background: 'linear-gradient(135deg, var(--dark) 0%, #123a63 100%)',
          color: '#fff',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="container grid grid-2" style={{ alignItems: 'center', gap: '2.5rem' }}>
          <div>
            <span className="badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>
              Now shipping nationwide
            </span>
            <h1 style={{ color: '#fff' }}>Breeze Vape — Pro, Prime, Elite &amp; Mega, Delivered Fast</h1>
            <p style={{ color: '#cfe0f2', fontSize: '1.1rem', maxWidth: 520 }}>
              {SITE.name} is a {SITE.foundingLocation}-based vape shop established in {SITE.foundingYear}, offering the
              full Breeze Pro, Prime, Elite, and Mega disposable lineup plus Breeze e-liquids and bundles. We ship{' '}
              {SITE.shipsTo.toLowerCase()} with crypto payment and an automatic {ORDER_RULES.cryptoDiscountPercent}% discount.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              <Link href="/shop/" className="btn btn-accent">
                Shop Breeze Vapes
              </Link>
              <Link href="/faq/" className="btn btn-outline" style={{ borderColor: '#fff', color: '#fff' }}>
                Order Info
              </Link>
            </div>
          </div>
          <div className="card" style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)' }}>
            <h2 style={{ color: '#fff', fontSize: '1.15rem' }}>Order Essentials</h2>
            <ul style={{ color: '#cfe0f2', paddingLeft: '1.2rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Minimum order: ${ORDER_RULES.minOrder}</li>
              <li>Free shipping over ${ORDER_RULES.freeShippingOver}</li>
              <li>Flat ${ORDER_RULES.flatShippingFee} shipping under that</li>
              <li>Crypto payment — {ORDER_RULES.cryptoDiscountPercent}% off automatically</li>
              <li>{SITE.ageRestriction} and older only</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="container grid grid-4">
          {[
            ['🚚', 'Nationwide Shipping', SITE.shipsTo],
            ['🔒', 'Discreet Packaging', 'Plain, secure packaging'],
            ['₿', 'Crypto Accepted', `${ORDER_RULES.cryptoDiscountPercent}% discount`],
            ['💬', 'Real Support', 'Fast response times'],
          ].map(([icon, title, sub]) => (
            <div key={title} className="card" style={{ padding: '1.25rem', textAlign: 'center' }}>
              <div aria-hidden="true" style={{ fontSize: '1.6rem' }}>{icon}</div>
              <h3 style={{ fontSize: '1rem', margin: '0.4rem 0 0.2rem' }}>{title}</h3>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Category grid */}
      <section className="section section-tint">
        <div className="container">
          <h2>Shop by Category</h2>
          <div className="grid grid-4">
            {CATEGORIES.map((c) => (
              <Link key={c.slug} href={`/shop/${c.slug}/`} className="card" style={{ padding: '1.5rem', color: 'inherit' }}>
                <div className="product-frame" style={{ aspectRatio: '1/1', background: 'var(--bg-tint)', marginBottom: '0.75rem' }}>
                  <span aria-hidden="true" style={{ fontSize: '2.5rem' }}>
                    {{ 'breeze-pro': '💨', 'breeze-prime': '🌬️', 'breeze-elite': '⚡', 'breeze-mega': '🔋', 'e-liquids': '🧪', bundles: '🎁' }[c.slug]}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.05rem' }}>{c.name}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>{c.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="section">
        <div className="container">
          <h2>Featured Breeze Products</h2>
          <div className="grid grid-4">
            {featured.map((p, i) => (
              <ProductCard key={p.slug} product={p} priority={i < 2} />
            ))}
          </div>
        </div>
      </section>

      {/* Authority section */}
      <section className="section section-dark">
        <div className="container grid grid-2" style={{ alignItems: 'center', gap: '2.5rem' }}>
          <div>
            <h2>About {SITE.name}</h2>
            <p style={{ color: '#cfe0f2' }}>
              {SITE.name} was founded in {SITE.foundingYear} in {SITE.foundingLocation}. We specialize in the full
              Breeze Pro, Prime, Elite, and Mega disposable lineup plus Breeze e-liquids and bundles, shipping{' '}
              {SITE.shipsTo.toLowerCase()}. Every order over $
              {ORDER_RULES.freeShippingOver} ships free, and crypto payments receive an automatic{' '}
              {ORDER_RULES.cryptoDiscountPercent}% discount.
            </p>
            <Link href="/about/" className="btn btn-accent">
              Read Our Story
            </Link>
          </div>
          <div className="grid grid-2">
            {[
              [String(SITE.foundingYear), 'Founded'],
              [SITE.shipsTo.split(' ')[0], 'Shipping'],
              [`${PRODUCTS.length}+`, 'Products'],
              [SITE.ageRestriction, 'Age Restricted'],
            ].map(([stat, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent)' }}>{stat}</div>
                <div style={{ color: '#cfe0f2', fontSize: '0.85rem' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog teaser */}
      <section className="section section-tint">
        <div className="container">
          <h2>From the Blog</h2>
          <div className="grid grid-3">
            {POSTS.slice(0, 3).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}/`} className="card" style={{ padding: '1.5rem', color: 'inherit' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 700 }}>{post.category}</span>
                <h3 style={{ fontSize: '1.05rem' }}>{post.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: 800, margin: '0 auto', textAlign: 'left' }}>
            {FAQS.map((f) => (
              <details key={f.q} className="card faq-item" style={{ padding: '1rem 1.25rem' }}>
                <summary>{f.q}</summary>
                <p style={{ margin: '0.75rem 0 0', color: 'var(--text-muted)' }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
