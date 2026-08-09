import { notFound } from 'next/navigation'
import SmartImage from '@/components/SmartImage'
import ProductCard from '@/components/ProductCard'
import Breadcrumbs from '@/components/Breadcrumbs'
import { SITE, CATEGORIES, PRODUCTS } from '@/config/site'

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ cat: c.slug }))
}

export function generateMetadata({ params }) {
  const cat = CATEGORIES.find((c) => c.slug === params.cat)
  if (!cat) return {}
  return {
    title: `${cat.name} — Breeze Vape ${cat.name}`,
    description: `${cat.description} Shop the full ${cat.name} lineup from ${SITE.name}.`,
    alternates: { canonical: `${SITE.url}/shop/${cat.slug}/` },
  }
}

export default function CategoryPage({ params }) {
  const cat = CATEGORIES.find((c) => c.slug === params.cat)
  if (!cat) notFound()

  const products = PRODUCTS.filter((p) => p.category === cat.slug)

  return (
    <div className="container section">
      <Breadcrumbs items={[{ label: 'Shop', href: '/shop/' }, { label: cat.name, href: `/shop/${cat.slug}/` }]} />

      <div className="card" style={{ aspectRatio: '21/6', overflow: 'hidden', marginBottom: '1.5rem' }}>
        <SmartImage src={`/images/${cat.image}`} alt={cat.name} width={1600} height={460} loading="eager" style={{ objectFit: 'cover' }} />
      </div>

      <h1>{cat.name}</h1>
      <p style={{ maxWidth: 640, color: 'var(--text-muted)' }}>{cat.description}</p>

      {cat.subcategories?.length > 0 && (
        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', margin: '1rem 0 2rem' }}>
          {cat.subcategories.map((s) => (
            <span key={s.slug} className="badge" style={{ background: 'var(--bg-tint)', color: 'var(--dark)', border: '1px solid var(--border)' }}>
              {s.name}
            </span>
          ))}
        </div>
      )}

      <div className="grid grid-4">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  )
}
