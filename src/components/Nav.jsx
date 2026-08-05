'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { SITE, CATEGORIES } from '@/config/site'
import { getCart, cartCount } from '@/lib/cart'

const NAV_ITEMS = [
  { label: 'Shop', href: '/shop/', mega: true },
  { label: 'Blog', href: '/blog/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
  { label: 'FAQ', href: '/faq/' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const sync = () => setCount(cartCount(getCart()))
    sync()
    window.addEventListener('bv-cart-updated', sync)
    return () => window.removeEventListener('bv-cart-updated', sync)
  }, [])

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, background: '#fff', borderBottom: '1px solid var(--border)' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.85rem 1.25rem', gap: '1rem' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.25rem', color: 'var(--dark)' }}>
          <span aria-hidden="true" style={{ display: 'inline-flex', width: 34, height: 34, borderRadius: 10, background: 'linear-gradient(135deg, var(--primary), var(--accent))', color: '#fff', alignItems: 'center', justifyContent: 'center', fontWeight: 900 }}>B</span>
          {SITE.name}
        </Link>

        <nav aria-label="Primary" style={{ display: 'none' }} className="nav-desktop">
          <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href} style={{ position: 'relative' }} className={item.mega ? 'has-mega' : ''}>
                <Link href={item.href} style={{ color: 'var(--dark)', fontWeight: 600 }}>
                  {item.label}
                </Link>
                {item.mega && (
                  <div className="mega-dropdown">
                    {CATEGORIES.map((c) => (
                      <Link key={c.slug} href={`/shop/${c.slug}/`}>
                        {c.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Link href="/order/" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', position: 'relative' }} aria-label={`Order now, ${count} item${count === 1 ? '' : 's'} in cart`}>
            Order{count > 0 ? ` (${count})` : ' Now'}
          </Link>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="hamburger"
            style={{ display: 'flex', width: 44, height: 44, alignItems: 'center', justifyContent: 'center', background: 'none', border: '1.5px solid var(--border)', borderRadius: 10 }}
          >
            <span aria-hidden="true">{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="container" style={{ paddingBottom: '1rem' }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)} style={{ display: 'block', padding: '0.75rem 0.25rem', color: 'var(--dark)', fontWeight: 600, minHeight: 44 }}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <style>{`
        @media (min-width: 901px) {
          .nav-desktop { display: block !important; }
          .hamburger { display: none !important; }
        }
        .has-mega .mega-dropdown {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 10px;
          box-shadow: var(--shadow);
          padding: 0.5rem;
          min-width: 200px;
          flex-direction: column;
          z-index: 50;
        }
        .has-mega:hover .mega-dropdown { display: flex; }
        .mega-dropdown a { padding: 0.5rem 0.75rem; border-radius: 8px; color: var(--dark); }
        .mega-dropdown a:hover { background: var(--bg-tint); text-decoration: none; }
        @media (max-width: 900px) { .mega-dropdown { display: none !important; } }
      `}</style>
    </header>
  )
}
