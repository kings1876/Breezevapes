import Breadcrumbs from '@/components/Breadcrumbs'
import OrderCart from '@/components/OrderCart'
import { SITE, ORDER_RULES } from '@/config/site'

export const metadata = {
  title: 'Your Order',
  description: `Review your cart and submit your order to ${SITE.name}. Minimum order $${ORDER_RULES.minOrder}, crypto payment accepted.`,
  alternates: { canonical: `${SITE.url}/order/` },
}

export default function OrderPage() {
  return (
    <div className="container section" style={{ maxWidth: 720 }}>
      <Breadcrumbs items={[{ label: 'Order', href: '/order/' }]} />
      <h1>Your Order</h1>
      <p style={{ color: 'var(--text-muted)' }}>
        Review the items below, then submit your order details. We accept cryptocurrency payment only — a{' '}
        {ORDER_RULES.cryptoDiscountPercent}% discount is applied automatically.
      </p>
      <OrderCart />
    </div>
  )
}
