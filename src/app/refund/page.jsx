import Breadcrumbs from '@/components/Breadcrumbs'
import { SITE } from '@/config/site'

export const metadata = {
  title: 'Refund Policy',
  description: `Return and refund policy for orders placed with ${SITE.name}.`,
  alternates: { canonical: `${SITE.url}/refund/` },
}

export default function RefundPage() {
  return (
    <div className="container section" style={{ maxWidth: 720 }}>
      <Breadcrumbs items={[{ label: 'Refund Policy', href: '/refund/' }]} />
      <h1>Refund Policy</h1>
      <p>
        Due to the nature of vaping products, opened or used items cannot be returned. If your order arrives damaged,
        defective, or incorrect, contact us within 7 days of delivery and we will arrange a replacement or refund.
      </p>
      <h2>Damaged or Defective Items</h2>
      <p>Email us at the address on our Contact page with your order details and a description of the issue.</p>
      <h2>Cancellations</h2>
      <p>Orders can be cancelled before payment is confirmed. Once payment is confirmed, the order is final.</p>
    </div>
  )
}
