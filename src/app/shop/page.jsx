import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import Breadcrumbs from '@/components/Breadcrumbs'
import { SITE, CATEGORIES, PRODUCTS } from '@/config/site'

export const metadata = {
  title: 'Shop All Breeze Vapes — Disposables, Pods & E-Liquids',
  description: `Browse the full Breeze vape catalog: disposables, pod systems, e-liquids, and accessories. ${SITE.shipsTo}.`,
  alternates: { canonical: `${SITE.url}/shop/` },
}

export default function ShopPage() {
  const aggOffer = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    numberOfItems: PRODUCTS.length,
    itemListElement: PRODUCTS.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE.url}/product/${p.slug}/`,
    })),
  }

  return (
    <div className="container section">
      <Breadcrumbs items={[{ label: 'Shop', href: '/shop/' }]} />
      <h1>Shop All Breeze Vapes</h1>
      <p style={{ maxWidth: 640, color: 'var(--text-muted)' }}>
        Browse the full Breeze catalog across disposables, pod systems, e-liquids, and accessories. Every category
        page links directly to individual products.
      </p>

      <div className="grid grid-4" style={{ margin: '2rem 0' }}>
        {CATEGORIES.map((c) => (
          <Link key={c.slug} href={`/shop/${c.slug}/`} className="card" style={{ padding: '1.25rem', color: 'inherit' }}>
            <h2 style={{ fontSize: '1.05rem' }}>{c.name}</h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>{c.description}</p>
          </Link>
        ))}
      </div>

      <h2>All Products</h2>
      <div className="grid grid-4">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggOffer) }} />
    </div>
  )
}
