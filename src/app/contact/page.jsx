import Breadcrumbs from '@/components/Breadcrumbs'
import ContactForm from '@/components/ContactForm'
import { SITE } from '@/config/site'

export const metadata = {
  title: 'Contact Us',
  description: `Get in touch with ${SITE.name} for product questions, order help, or general inquiries.`,
  alternates: { canonical: `${SITE.url}/contact/` },
}

export default function ContactPage() {
  return (
    <div className="container section" style={{ maxWidth: 600 }}>
      <Breadcrumbs items={[{ label: 'Contact', href: '/contact/' }]} />
      <h1>Contact Us</h1>
      <p style={{ color: 'var(--text-muted)' }}>
        Questions about a Breeze product, an existing order, or anything else — send us a message and we&apos;ll get
        back to you.
      </p>
      <ContactForm />
    </div>
  )
}
