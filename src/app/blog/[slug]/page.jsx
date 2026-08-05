import { notFound } from 'next/navigation'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { SITE, POSTS } from '@/config/site'

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }) {
  const post = POSTS.find((p) => p.slug === params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${SITE.url}/blog/${post.slug}/` },
    openGraph: { type: 'article', publishedTime: post.date, updatedTime: post.date },
  }
}

function renderBody(body) {
  return body.split('\n\n').map((para, i) => {
    if (para.startsWith('**') && para.includes('.**')) {
      const [, bold, rest] = para.match(/^\*\*(.+?)\*\*(.*)$/s) || []
      if (bold) {
        return (
          <p key={i}>
            <strong>{bold}</strong>
            {rest}
          </p>
        )
      }
    }
    // very small markdown-link handler for the [text](url) pattern used in POSTS
    const parts = []
    let last = 0
    const re = /\[([^\]]+)\]\(([^)]+)\)/g
    let m
    while ((m = re.exec(para))) {
      parts.push(para.slice(last, m.index))
      parts.push(
        <Link key={m.index} href={m[2]}>
          {m[1]}
        </Link>
      )
      last = m.index + m[0].length
    }
    parts.push(para.slice(last))
    return <p key={i}>{parts}</p>
  })
}

export default function BlogPost({ params }) {
  const post = POSTS.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: SITE.name },
    publisher: { '@type': 'Organization', name: SITE.name },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}/`,
  }

  return (
    <article className="container section" style={{ maxWidth: 760 }}>
      <Breadcrumbs items={[{ label: 'Blog', href: '/blog/' }, { label: post.title, href: `/blog/${post.slug}/` }]} />
      <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 700 }}>{post.category}</span>
      <h1>{post.title}</h1>
      <time dateTime={post.date} style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
        {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </time>
      <div style={{ marginTop: '1.5rem' }}>{renderBody(post.body)}</div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </article>
  )
}
