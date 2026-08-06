'use client'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { SITE, CATEGORIES } from '@/config/site'
import { getCart, cartCount } from '@/lib/cart'

const NAV_ITEMS = [
  { label: 'Shop', href: '/shop/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
  { label: 'FAQ', href: '/faq/' },
]

export default function Nav() {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [count, setCount] = useState(0)
  const searchInputRef = useRef(null)

  useEffect(() => {
    const sync = () => setCount(cartCount(getCart()))
    sync()
    window.addEventListener('bv-cart-updated', sync)
    return () => window.removeEventListener('bv-cart-updated', sync)
  }, [])

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus()
  }, [searchOpen])

  function submitSearch(e) {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search/?q=${encodeURIComponent(query.trim())}`)
      setSearchOpen(false)
    }
  }

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, background: '#fff', borderBottom: '1px solid var(--border)' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.85rem 1.25rem', gap: '1rem' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.25rem', color: 'var(--dark)' }}>
          <span aria-hidden="true" style={{ display: 'inline-flex', width: 34, height: 34, borderRadius: 10, background: 'linear-gradient(135deg, var(--primary), var(--accent))', color: '#fff', alignItems: 'center', justifyContent: 'center', fontWeight: 900 }}>B</span>
          {SITE.name}
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', position: 'relative' }}>
          {/* Search */}
          <div style={{ position: 'relative' }}>
            <button
              type="button"
              aria-label={searchOpen ? 'Close search' : 'Search products'}
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen(!searchOpen)}
              className="nav-icon-btn"
            >
              <span aria-hidden="true">{searchOpen ? '✕' : '🔍'}</span>
            </button>
            {searchOpen && (
              <form onSubmit={submitSearch} className="nav-search-panel" role="search">
                <input
                  ref={searchInputRef}
                  type="search"
                  name="q"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products…"
                  aria-label="Search products"
                  style={{ flex: 1, border: 'none', outline: 'none', padding: '0.6rem 0.75rem', fontSize: '0.95rem' }}
                />
                <button type="submit" className="btn btn-primary" style={{ padding: '0.5rem 0.9rem', margin: '0.25rem' }}>
                  Go
                </button>
              </form>
            )}
          </div>

          {/* Cart */}
          <Link
            href="/order/"
            className="nav-icon-btn"
            aria-label={`Order now, ${count} item${count === 1 ? '' : 's'} in cart`}
            style={{ position: 'relative', textDecoration: 'none' }}
          >
            <span aria-hidden="true">🛒</span>
            {count > 0 && (
              <span aria-hidden="true" className="cart-count">
                {count}
              </span>
            )}
          </Link>

          {/* Menu */}
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="nav-icon-btn"
          >
            <span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav aria-label="Primary" className="container" style={{ paddingBottom: '1.25rem' }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '0.75rem 0.25rem', color: 'var(--dark)', fontWeight: 600, minHeight: 44 }}>
                  {item.label}
                </Link>
                {item.href === '/shop/' && (
                  <ul style={{ listStyle: 'none', margin: '0 0 0.5rem', padding: '0 0 0 1rem', display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                    {CATEGORIES.map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={`/shop/${c.slug}/`}
                          onClick={() => setMenuOpen(false)}
                          style={{ display: 'block', padding: '0.5rem 0.25rem', color: 'var(--text-muted)', minHeight: 44 }}
                        >
                          {c.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}

      <style>{`
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
        }
        .nav-icon-btn:hover { border-color: var(--primary); }
        .cart-count {
          position: absolute;
          top: -6px;
          right: -6px;
          background: var(--primary);
          color: #fff;
          font-size: 0.7rem;
          font-weight: 700;
          min-width: 18px;
          height: 18px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 4px;
        }
        .nav-search-panel {
          position: absolute;
          top: calc(100% + 0.5rem);
          right: 0;
          display: flex;
          align-items: center;
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 12px;
          box-shadow: var(--shadow);
          width: min(320px, 80vw);
          z-index: 60;
        }
      `}</style>
    </header>
  )
}
