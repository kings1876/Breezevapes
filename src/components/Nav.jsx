'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { SITE, CATEGORIES, PRODUCTS } from '@/config/site'
import { getCart, cartCount } from '@/lib/cart'

const NAV_ITEMS = [
  ...CATEGORIES.map((c) => ({ label: c.name, href: `/shop/${c.slug}/` })),
  { label: 'Blog', href: '/blog/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
  { label: 'FAQ', href: '/faq/' },
]

function cartTotal(items) {
  return items.reduce((sum, i) => {
    const p = PRODUCTS.find((pr) => pr.slug === i.slug)
    return sum + (p ? p.price * i.qty : 0)
  }, 0)
}

export default function Nav() {
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const sync = () => setCartItems(getCart())
    sync()
    window.addEventListener('bv-cart-updated', sync)
    return () => window.removeEventListener('bv-cart-updated', sync)
  }, [])

  const count = cartCount(cartItems)
  const total = cartTotal(cartItems)

  function submitSearch(e) {
    e.preventDefault()
    const params = new URLSearchParams()
    if (query.trim()) params.set('q', query.trim())
    if (category) params.set('category', category)
    router.push(`/search/?${params.toString()}`)
  }

  const emailEncoded = SITE.contactEmail
    .split('')
    .map((c) => `&#${c.charCodeAt(0)};`)
    .join('')

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100 }}>
      {/* Utility bar */}
      <div style={{ background: 'var(--dark)', color: '#cfe0f2', fontSize: '0.8rem' }}>
        <div
          className="container"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.4rem 1.25rem', gap: '1rem', flexWrap: 'wrap' }}
        >
          <span>{SITE.ageRestriction} only &middot; Crypto payment accepted &middot; Ships {SITE.shipsTo.toLowerCase()}</span>
          <span>
            Mail us: <span dangerouslySetInnerHTML={{ __html: emailEncoded }} />
          </span>
        </div>
      </div>

      {/* Main row: logo, search, cart */}
      <div style={{ background: '#fff', borderBottom: '1px solid var(--border)' }}>
        <div className="container main-row" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '0.85rem 1.25rem' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.25rem', color: 'var(--dark)', flexShrink: 0 }}>
            <span aria-hidden="true" style={{ display: 'inline-flex', width: 34, height: 34, borderRadius: 10, background: 'linear-gradient(135deg, var(--primary), var(--accent))', color: '#fff', alignItems: 'center', justifyContent: 'center', fontWeight: 900 }}>B</span>
            {SITE.name}
          </Link>

          <form onSubmit={submitSearch} role="search" className="search-bar" style={{ flex: 1, display: 'flex' }}>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              aria-label="Category"
              style={{ border: '1.5px solid var(--border)', borderRight: 'none', borderRadius: '10px 0 0 10px', padding: '0 0.6rem', background: 'var(--bg-tint)', fontSize: '0.85rem', minHeight: 44 }}
            >
              <option value="">All</option>
              {CATEGORIES.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products…"
              aria-label="Search products"
              style={{ flex: 1, border: '1.5px solid var(--border)', borderLeft: 'none', borderRight: 'none', padding: '0 0.9rem', minHeight: 44, minWidth: 0 }}
            />
            <button type="submit" className="btn btn-accent" aria-label="Search" style={{ borderRadius: '0 10px 10px 0', padding: '0 1.1rem' }}>
              🔍
            </button>
          </form>

          <Link href="/order/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--dark)', flexShrink: 0 }} aria-label={`Order now, ${count} item${count === 1 ? '' : 's'} in cart, total $${total.toFixed(2)}`}>
            <span style={{ position: 'relative' }} aria-hidden="true">
              🛒
              {count > 0 && <span className="cart-count">{count}</span>}
            </span>
            <span style={{ fontSize: '0.85rem', lineHeight: 1.2 }}>
              <strong style={{ display: 'block' }}>{count}</strong>
              {SITE.currencySymbol}
              {total.toFixed(2)}
            </span>
          </Link>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="hamburger nav-icon-btn"
          >
            <span aria-hidden="true">{mobileOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {/* Category nav row */}
      <nav aria-label="Primary" className="nav-desktop" style={{ background: 'var(--bg-tint)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <ul style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.25rem', listStyle: 'none', margin: 0, padding: '0.65rem 0' }}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} style={{ color: 'var(--dark)', fontWeight: 600, fontSize: '0.9rem' }}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {mobileOpen && (
        <nav aria-label="Mobile" className="container" style={{ paddingBottom: '1.25rem', background: '#fff' }}>
          <form onSubmit={submitSearch} role="search" style={{ display: 'flex', margin: '0.75rem 0' }}>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products…"
              aria-label="Search products"
              style={{ flex: 1, border: '1.5px solid var(--border)', borderRight: 'none', borderRadius: '10px 0 0 10px', padding: '0 0.9rem', minHeight: 44 }}
            />
            <button type="submit" className="btn btn-accent" aria-label="Search" style={{ borderRadius: '0 10px 10px 0', padding: '0 1.1rem' }}>
              🔍
            </button>
          </form>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setMobileOpen(false)} style={{ display: 'block', padding: '0.75rem 0.25rem', color: 'var(--dark)', fontWeight: 600, minHeight: 44 }}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <style>{`
        .nav-desktop { display: none; }
        @media (min-width: 901px) {
          .nav-desktop { display: block; }
          .hamburger { display: none !important; }
        }
        .nav-icon-btn {
          display: flex;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          background: none;
          border: 1.5px solid var(--border);
          border-radius: 10px;
          font-size: 1.1rem;
          color: var(--dark);
          cursor: pointer;
          flex-shrink: 0;
        }
        .cart-count {
          position: absolute;
          top: -8px;
          right: -10px;
          background: var(--primary);
          color: #fff;
          font-size: 0.65rem;
          font-weight: 700;
          min-width: 16px;
          height: 16px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 3px;
        }
        @media (max-width: 700px) {
          .search-bar { display: none !important; }
        }
      `}</style>
    </header>
  )
}
