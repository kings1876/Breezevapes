import { notFound } from 'next/navigation'
import Link from 'next/link'
import SmartImage from '@/components/SmartImage'
import Breadcrumbs from '@/components/Breadcrumbs'
import ProductCard from '@/components/ProductCard'
import AddToOrder from '@/components/AddToOrder'
import { SITE, PRODUCTS, CATEGORIES } from '@/config/site'

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug)
  if (!product) return {}
  return {
    title: `${product.name} — $${product.price.toFixed(2)}`,
    description: product.short,
    alternates: { canonical: `${SITE.url}/product/${product.slug}/` },
    openGraph: { images: [`/images/${product.images[0]}`] },
  }
}

export default function ProductPage({ params }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug)
  if (!product) notFound()

  const category = CATEGORIES.find((c) => c.slug === product.category)
  const related = PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4)

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images.map((img) => `${SITE.url}/images/${img}`),
    brand: { '@type': 'Brand', name: SITE.name },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: SITE.currency,
      availability: 'https://schema.org/InStock',
      url: `${SITE.url}/product/${product.slug}/`,
    },
  }

  return (
    <div className="container section">
      <Breadcrumbs
        items={[
          { label: 'Shop', href: '/shop/' },
          { label: category.name, href: `/shop/${category.slug}/` },
          { label: product.name, href: `/product/${product.slug}/` },
        ]}
      />

      <div className="grid grid-2 product-top" style={{ alignItems: 'start', gap: '2.5rem' }}>
        <div className="product-frame card">
          <SmartImage src={`/images/${product.images[0]}`} alt={product.name} width={1600} height={1200} loading="eager" />
        </div>

        <div>
          {product.badge && <span className="badge">{product.badge}</span>}
          <p className="price" style={{ fontSize: '1.4rem', marginTop: '0.5rem' }}>
            {SITE.currencySymbol}
            {product.price.toFixed(2)}
          </p>
          <AddToOrder slug={product.slug} />
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '1rem' }}>
            {SITE.ageRestriction} and older only. {SITE.complianceStatement}
          </p>
          <Link href="/order/" style={{ display: 'inline-block', marginTop: '0.5rem' }}>
            View order →
          </Link>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h1>{product.name}</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>{product.description}</p>
      </div>

      {related.length > 0 && (
        <div style={{ marginTop: '3rem' }}>
          <h2>You May Also Like</h2>
          <div className="grid grid-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      )}

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
    </div>
  )
}
