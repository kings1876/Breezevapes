import Link from 'next/link'
import SmartImage from '@/components/SmartImage'
import { SITE } from '@/config/site'

export default function ProductCard({ product, priority = false }) {
  return (
    <Link href={`/product/${product.slug}/`} className="card product-card" style={{ color: 'inherit' }}>
      <div className="product-frame">
        <SmartImage
          src={`/images/${product.images[0]}`}
          alt={product.name}
          width={1600}
          height={1200}
          loading={priority ? 'eager' : 'lazy'}
        />
      </div>
      <div className="body">
        {product.badge && <span className="badge">{product.badge}</span>}
        <h3 style={{ fontSize: '1.05rem', margin: '0.2rem 0' }}>{product.name}</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>{product.short}</p>
        <span className="price">
          {SITE.currencySymbol}
          {product.price.toFixed(2)}
        </span>
      </div>
    </Link>
  )
}
