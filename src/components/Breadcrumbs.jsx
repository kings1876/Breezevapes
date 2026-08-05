import Link from 'next/link'
import { SITE } from '@/config/site'

export default function Breadcrumbs({ items }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.url}/` },
      ...items.map((it, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: it.label,
        item: `${SITE.url}${it.href}`,
      })),
    ],
  }

  return (
    <nav aria-label="Breadcrumb" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '1rem 0' }}>
      <ol style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', listStyle: 'none', padding: 0, margin: 0 }}>
        <li>
          <Link href="/">Home</Link>
          <span aria-hidden="true"> / </span>
        </li>
        {items.map((it, i) => (
          <li key={it.href}>
            {i < items.length - 1 ? (
              <>
                <Link href={it.href}>{it.label}</Link>
                <span aria-hidden="true"> / </span>
              </>
            ) : (
              <span aria-current="page">{it.label}</span>
            )}
          </li>
        ))}
      </ol>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </nav>
  )
}
