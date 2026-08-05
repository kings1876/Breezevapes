import Breadcrumbs from '@/components/Breadcrumbs'
import { SITE, ORDER_RULES } from '@/config/site'

export const metadata = {
  title: 'Shipping Policy',
  description: `Shipping rates, timelines, and coverage for ${SITE.name} orders.`,
  alternates: { canonical: `${SITE.url}/shipping/` },
}

export default function ShippingPage() {
  return (
    <div className="container section" style={{ maxWidth: 720 }}>
      <Breadcrumbs items={[{ label: 'Shipping', href: '/shipping/' }]} />
      <h1>Shipping Policy</h1>
      <p>{SITE.name} ships {SITE.shipsTo.toLowerCase()}.</p>
      <h2>Rates</h2>
      <ul>
        <li>Orders ${ORDER_RULES.freeShippingOver} and over: free shipping</li>
        <li>Orders under ${ORDER_RULES.freeShippingOver}: flat ${ORDER_RULES.flatShippingFee} shipping fee</li>
        <li>Minimum order: ${ORDER_RULES.minOrder}</li>
      </ul>
      <h2>Packaging</h2>
      <p>All orders ship in plain, discreet packaging with no product branding visible on the exterior.</p>
      <h2>Age Verification</h2>
      <p>All orders require confirmation that the purchaser is {SITE.ageRestriction} or older, per federal law.</p>
    </div>
  )
}
