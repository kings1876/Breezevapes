'use client'
import { useEffect, useState } from 'react'
import { SITE } from '@/config/site'

const KEY = 'bv-age-verified'

export default function AgeGate() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (localStorage.getItem(KEY) !== 'yes') setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  if (!visible) return null

  function confirm() {
    try {
      localStorage.setItem(KEY, 'yes')
    } catch {}
    setVisible(false)
  }

  function leave() {
    window.location.href = 'https://www.google.com'
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(11,27,51,0.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
      }}
    >
      <div className="card" style={{ maxWidth: 420, width: '100%', padding: '2rem', textAlign: 'center' }}>
        <h2 id="age-gate-title" style={{ fontSize: '1.4rem' }}>
          Are you {SITE.ageRestriction} or older?
        </h2>
        <p style={{ color: 'var(--text-muted)' }}>
          {SITE.name} sells nicotine vaping products. You must confirm you are of legal age to enter this site.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginTop: '1.25rem' }}>
          <button type="button" className="btn btn-primary" onClick={confirm}>
            Yes, I&apos;m {SITE.ageRestriction}
          </button>
          <button type="button" className="btn btn-outline" onClick={leave}>
            No, exit
          </button>
        </div>
      </div>
    </div>
  )
}
