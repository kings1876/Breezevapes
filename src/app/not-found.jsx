import Link from 'next/link'

export const metadata = { title: 'Page Not Found', robots: { index: false, follow: true } }

export default function NotFound() {
  return (
    <div className="container section" style={{ textAlign: 'center', maxWidth: 480 }}>
      <h1>Page Not Found</h1>
      <p style={{ color: 'var(--text-muted)' }}>The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <Link href="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  )
}
