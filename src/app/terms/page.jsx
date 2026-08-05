import Breadcrumbs from '@/components/Breadcrumbs'
import { SITE } from '@/config/site'

export const metadata = {
  title: 'Terms of Service',
  description: `Terms governing use of the ${SITE.name} website and purchases.`,
  alternates: { canonical: `${SITE.url}/terms/` },
}

export default function TermsPage() {
  return (
    <div className="container section" style={{ maxWidth: 720 }}>
      <Breadcrumbs items={[{ label: 'Terms of Service', href: '/terms/' }]} />
      <h1>Terms of Service</h1>
      <h2>Age Restriction</h2>
      <p>By using this site and purchasing from {SITE.name}, you confirm you are {SITE.ageRestriction} years of age or older, as required by federal law for the purchase of nicotine vaping products.</p>
      <h2>Product Disclaimer</h2>
      <p>{SITE.complianceStatement}</p>
      <h2>Orders</h2>
      <p>All orders are subject to a minimum order amount and payment via cryptocurrency, as described on our Order page. We reserve the right to refuse or cancel any order.</p>
      <h2>Governing Law</h2>
      <p>These terms are governed by the laws of the United States and applicable state regulations.</p>
    </div>
  )
}
