import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { SITE, POSTS } from '@/config/site'

export const metadata = {
  title: 'Breeze Vape Blog — Flavors, Comparisons & Buying Guides',
  description: 'Guides on Breeze vape flavors, product comparisons, and how to choose the right disposable, pod, or e-liquid.',
  alternates: { canonical: `${SITE.url}/blog/` },
}

export default function BlogIndex() {
  return (
    <div className="container section">
      <Breadcrumbs items={[{ label: 'Blog', href: '/blog/' }]} />
      <h1>Breeze Vape Blog</h1>
      <p style={{ maxWidth: 640, color: 'var(--text-muted)' }}>
        Flavor guides, product comparisons, and buying advice for the full Breeze vape lineup.
      </p>

      <div className="grid grid-3" style={{ marginTop: '2rem' }}>
        {POSTS.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}/`} className="card" style={{ padding: '1.5rem', color: 'inherit' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 700 }}>{post.category}</span>
            <h2 style={{ fontSize: '1.1rem' }}>{post.title}</h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{post.excerpt}</p>
            <time dateTime={post.date} style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
          </Link>
        ))}
      </div>
    </div>
  )
}
