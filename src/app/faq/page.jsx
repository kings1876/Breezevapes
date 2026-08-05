import Breadcrumbs from '@/components/Breadcrumbs'
import { SITE, FAQS } from '@/config/site'

export const metadata = {
  title: 'FAQ',
  description: `Answers to common questions about ordering from ${SITE.name} — shipping, payment, minimum order, and age requirements.`,
  alternates: { canonical: `${SITE.url}/faq/` },
}

export default function FaqPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <div className="container section" style={{ maxWidth: 760 }}>
      <Breadcrumbs items={[{ label: 'FAQ', href: '/faq/' }]} />
      <h1>Frequently Asked Questions</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
        {FAQS.map((f) => (
          <div key={f.q} className="card" style={{ padding: '1.25rem' }}>
            <h2 style={{ fontSize: '1.05rem' }}>{f.q}</h2>
            <p style={{ margin: 0, color: 'var(--text-muted)' }}>{f.a}</p>
          </div>
        ))}
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  )
}
