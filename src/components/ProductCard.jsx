'use client'
import { useState } from 'react'
import Link from 'next/link'
import SmartImage from '@/components/SmartImage'
import { SITE } from '@/config/site'
import { addToCart } from '@/lib/cart'

export default function ProductCard({ product, priority = false }) {
  const [added, setAdded] = useState(false)

  function handleAdd(e) {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product.slug, 1)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div className="card product-card">
      <Link
        href={`/product/${product.slug}/`}
        style={{ color: 'inherit', textDecoration: 'none', display: 'flex', flexDirection: 'column', flex: 1 }}
      >
        <div className="product-frame">
          <SmartImage
            src={`/images/${product.images[0]}`}
            alt={product.name}
            width={1600}
            height={1200}
            loading={priority ? 'eager' : 'lazy'}
          />
        </div>
        <div className="body" style={{ paddingBottom: '0.5rem' }}>
          {product.badge && <span className="badge">{product.badge}</span>}
          <h3 style={{ fontSize: '1.05rem', margin: '0.2rem 0' }}>{product.name}</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>{product.short}</p>
          <span className="price">
            {SITE.currencySymbol}
            {product.price.toFixed(2)}
          </span>
        </div>
      </Link>
      <div style={{ padding: '0 1.1rem 1.1rem' }}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAdd}
          aria-label={`Add ${product.name} to cart`}
          style={{ width: '100%' }}
        >
          {added ? 'Added ✓' : 'Add to Cart'}
        </button>
      </div>
    </div>
  )
}
