import '@/styles/globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ChatHub from '@/components/ChatHub'
import AgeGate from '@/components/AgeGate'
import { SITE } from '@/config/site'

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} — ${SITE.tagline}`, template: `%s | ${SITE.name}` },
  description: SITE.description,
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
}

export default function RootLayout({ children }) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Store', 'Organization'],
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    foundingDate: String(SITE.foundingYear),
    foundingLocation: SITE.foundingLocation,
    address: { '@type': 'PostalAddress', addressCountry: 'US' },
    areaServed: SITE.areaServed,
    priceRange: '$$',
    knowsAbout: ['Disposable vapes', 'Pod systems', 'E-liquids', 'Vape accessories'],
  }

  return (
    <html lang={SITE.locale}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="/js/webmcp.js" defer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <AgeGate />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <ChatHub />
      </body>
    </html>
  )
}
