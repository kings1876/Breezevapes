'use client'

export default function QtyStepper({ value, onChange, min = 1 }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1.5px solid var(--border)', borderRadius: 999, padding: '0.15rem' }}>
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={() => onChange(Math.max(min, value - 1))}
        style={{ width: 36, height: 36, borderRadius: '50%', border: 'none', background: 'var(--bg-tint)', fontSize: '1.1rem' }}
      >
        −
      </button>
      <span aria-live="polite" style={{ minWidth: 24, textAlign: 'center', fontWeight: 700 }}>
        {value}
      </span>
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={() => onChange(value + 1)}
        style={{ width: 36, height: 36, borderRadius: '50%', border: 'none', background: 'var(--bg-tint)', fontSize: '1.1rem' }}
      >
        +
      </button>
    </div>
  )
}
