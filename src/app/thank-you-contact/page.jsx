import Link from 'next/link'

export const metadata = { title: 'Thank You', robots: { index: false, follow: true } }

export default function ThankYouContact() {
  return (
    <div className="container section" style={{ textAlign: 'center', maxWidth: 480 }}>
      <h1>Message Sent</h1>
      <p style={{ color: 'var(--text-muted)' }}>Thanks for reaching out — we&apos;ll get back to you shortly.</p>
      <Link href="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  )
}
