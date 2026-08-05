import Breadcrumbs from '@/components/Breadcrumbs'
import { SITE } from '@/config/site'

export const metadata = {
  title: 'Privacy Policy',
  description: `How ${SITE.name} collects, uses, and protects your information.`,
  alternates: { canonical: `${SITE.url}/privacy/` },
}

export default function PrivacyPage() {
  return (
    <div className="container section" style={{ maxWidth: 720 }}>
      <Breadcrumbs items={[{ label: 'Privacy Policy', href: '/privacy/' }]} />
      <h1>Privacy Policy</h1>
      <p>
        {SITE.name} collects only the information you provide through our contact and order forms — name, email,
        shipping address, and order details — to fulfill your order and respond to inquiries.
      </p>
      <h2>How We Use Information</h2>
      <p>Your information is used solely to process orders, respond to messages, and provide customer support. We do not sell your data to third parties.</p>
      <h2>Cookies</h2>
      <p>This site uses local browser storage to remember your cart and age-verification status. No third-party tracking cookies are set beyond those required by our live chat widget, if enabled.</p>
      <h2>Contact</h2>
      <p>Questions about this policy can be sent through our Contact page.</p>
    </div>
  )
}
