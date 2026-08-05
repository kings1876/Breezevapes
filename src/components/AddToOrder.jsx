'use client'
import { useState } from 'react'
import QtyStepper from '@/components/QtyStepper'
import { addToCart } from '@/lib/cart'

export default function AddToOrder({ slug }) {
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  function handleAdd() {
    addToCart(slug, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '1.25rem 0', flexWrap: 'wrap' }}>
      <QtyStepper value={qty} onChange={setQty} />
      <button type="button" className="btn btn-primary" onClick={handleAdd}>
        {added ? 'Added ✓' : 'Add to Order'}
      </button>
    </div>
  )
}
