import Link from 'next/link'

export const metadata = { title: 'Order Received', robots: { index: false, follow: true } }

export default function ThankYouOrder() {
  return (
    <div className="container section" style={{ textAlign: 'center', maxWidth: 480 }}>
      <h1>Order Received</h1>
      <p style={{ color: 'var(--text-muted)' }}>
        Thanks for your order — we&apos;ll follow up with payment and shipping details shortly.
      </p>
      <Link href="/shop/" className="btn btn-primary">
        Continue Shopping
      </Link>
    </div>
  )
}
