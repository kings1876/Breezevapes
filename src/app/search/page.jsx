'use client'
import { Suspense, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import { PRODUCTS, POSTS } from '@/config/site'

function SearchResults() {
  const params = useSearchParams()
  const [query, setQuery] = useState(params.get('q') || '')

  const products = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    return PRODUCTS.filter(
      (p) => p.name.toLowerCase().includes(q) || p.short.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    )
  }, [query])

  const posts = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    return POSTS.filter((p) => p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q))
  }, [query])

  return (
    <div className="container section">
      <h1>Search</h1>
      <div className="form-field" style={{ maxWidth: 480 }}>
        <label htmlFor="search-q">Search products &amp; articles</label>
        <input id="search-q" type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="e.g. blue razz, pod kit, mint" />
      </div>

      {query.trim() && (
        <>
          <h2>Products ({products.length})</h2>
          {products.length > 0 ? (
            <div className="grid grid-4">
              {products.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          ) : (
            <p style={{ color: 'var(--text-muted)' }}>No matching products.</p>
          )}

          <h2 style={{ marginTop: '2rem' }}>Articles ({posts.length})</h2>
          {posts.length > 0 ? (
            <ul>
              {posts.map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}/`}>{p.title}</Link>
                </li>
              ))}
            </ul>
          ) : (
            <p style={{ color: 'var(--text-muted)' }}>No matching articles.</p>
          )}
        </>
      )}
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="container section"><h1>Search</h1></div>}>
      <SearchResults />
    </Suspense>
  )
}
