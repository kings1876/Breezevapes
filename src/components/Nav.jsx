'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { SITE, CATEGORIES, PRODUCTS } from '@/config/site'
import { getCart, cartCount } from '@/lib/cart'

const NAV_ITEMS = CATEGORIES.map((c) => ({ label: c.name, href: `/shop/${c.slug}/` }))

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
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        // Dark overlay layered under the gradient so white text/icons stay
        // readable across the whole gradient, including its lighter teal end.
        background: 'linear-gradient(rgba(11,27,51,0.5), rgba(11,27,51,0.5)), linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
      }}
    >
      {/* Utility bar */}
      <div style={{ background: 'rgba(0,0,0,0.12)', color: '#eef8ff', fontSize: '0.78rem', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
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
      <div className="container main-row" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '0.9rem 1.25rem' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 800, fontSize: '1.3rem', color: '#fff', flexShrink: 0, textShadow: '0 1px 8px rgba(0,0,0,0.15)' }}>
          <span aria-hidden="true" style={{ display: 'inline-flex', width: 36, height: 36, borderRadius: 10, background: '#fff', color: 'var(--primary)', alignItems: 'center', justifyContent: 'center', fontWeight: 900, boxShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>B</span>
          {SITE.name}
        </Link>

        <form onSubmit={submitSearch} role="search" className="search-bar" style={{ flex: 1, display: 'flex' }}>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            aria-label="Category"
            style={{ border: 'none', borderRight: '1px solid var(--border)', borderRadius: '999px 0 0 999px', padding: '0 0.7rem', background: '#fff', fontSize: '0.85rem', minHeight: 46 }}
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
            style={{ flex: 1, border: 'none', padding: '0 0.9rem', minHeight: 46, minWidth: 0, background: '#fff' }}
          />
          <button type="submit" aria-label="Search" className="search-submit">
            🔍
          </button>
        </form>

        <Link href="/order/" className="cart-pill" aria-label={`Order now, ${count} item${count === 1 ? '' : 's'} in cart, total $${total.toFixed(2)}`}>
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

      {/* Category nav row */}
      <nav aria-label="Primary" className="nav-desktop" style={{ background: 'rgba(11, 27, 51, 0.28)' }}>
        <div className="container">
          <ul style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', listStyle: 'none', margin: 0, padding: '0.7rem 0' }}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="cat-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {mobileOpen && (
        <nav aria-label="Mobile" className="container" style={{ paddingBottom: '1.25rem' }}>
          <form onSubmit={submitSearch} role="search" style={{ display: 'flex', margin: '0.75rem 0' }}>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products…"
              aria-label="Search products"
              style={{ flex: 1, border: 'none', borderRadius: '10px 0 0 10px', padding: '0 0.9rem', minHeight: 44, background: '#fff' }}
            />
            <button type="submit" aria-label="Search" className="search-submit" style={{ borderRadius: '0 10px 10px 0' }}>
              🔍
            </button>
          </form>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setMobileOpen(false)} style={{ display: 'block', padding: '0.75rem 0.25rem', color: '#fff', fontWeight: 700, minHeight: 44 }}>
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
          background: rgba(255,255,255,0.18);
          border: 1.5px solid rgba(255,255,255,0.5);
          border-radius: 10px;
          font-size: 1.1rem;
          color: #fff;
          cursor: pointer;
          flex-shrink: 0;
        }
        .search-submit {
          background: var(--dark);
          color: #fff;
          border: none;
          border-radius: 0 999px 999px 0;
          padding: 0 1.2rem;
          font-size: 1rem;
          cursor: pointer;
        }
        .search-submit:hover { background: #0f2440; }
        .cart-pill {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #fff;
          flex-shrink: 0;
          text-decoration: none;
          background: rgba(255,255,255,0.18);
          border: 1.5px solid rgba(255,255,255,0.5);
          border-radius: 999px;
          padding: 0.4rem 0.9rem;
        }
        .cart-pill:hover { background: rgba(255,255,255,0.3); text-decoration: none; }
        .cart-count {
          position: absolute;
          top: -8px;
          right: -10px;
          background: var(--dark);
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
        .cat-link {
          color: #fff;
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 0.02em;
          padding-bottom: 4px;
          border-bottom: 2px solid transparent;
          transition: border-color 0.15s ease, text-shadow 0.15s ease;
        }
        .cat-link:hover {
          text-decoration: none;
          border-bottom-color: #fff;
          text-shadow: 0 0 12px rgba(255,255,255,0.8);
        }
        @media (max-width: 700px) {
          .search-bar { display: none !important; }
        }
      `}</style>
    </header>
  )
}
