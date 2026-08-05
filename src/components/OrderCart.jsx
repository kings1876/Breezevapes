'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import QtyStepper from '@/components/QtyStepper'
import WebForm from '@/components/WebForm'
import { getCart, updateQty } from '@/lib/cart'
import { SITE, PRODUCTS, ORDER_RULES } from '@/config/site'

export default function OrderCart() {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(getCart())
  }, [])

  const lines = items
    .map((i) => ({ ...i, product: PRODUCTS.find((p) => p.slug === i.slug) }))
    .filter((i) => i.product)

  const subtotal = lines.reduce((sum, l) => sum + l.product.price * l.qty, 0)
  const shipping = subtotal === 0 ? 0 : subtotal >= ORDER_RULES.freeShippingOver ? 0 : ORDER_RULES.flatShippingFee
  const discount = subtotal * (ORDER_RULES.cryptoDiscountPercent / 100)
  const total = subtotal + shipping - discount
  const belowMin = subtotal > 0 && subtotal < ORDER_RULES.minOrder

  function onQtyChange(slug, qty) {
    setItems(updateQty(slug, qty))
  }

  const orderSummary = lines
    .map((l) => `${l.qty} x ${l.product.name} @ $${l.product.price.toFixed(2)} = $${(l.qty * l.product.price).toFixed(2)}`)
    .join('\n')

  if (lines.length === 0) {
    return (
      <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
        <p>Your order is empty.</p>
        <Link href="/shop/" className="btn btn-primary">
          Browse the Shop
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {lines.map((l) => (
              <tr key={l.slug}>
                <td>
                  <Link href={`/product/${l.slug}/`}>{l.product.name}</Link>
                </td>
                <td>
                  <QtyStepper value={l.qty} onChange={(q) => onQtyChange(l.slug, q)} min={0} />
                </td>
                <td>${(l.product.price * l.qty).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', maxWidth: 320, marginLeft: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Shipping</span>
          <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--primary)' }}>
          <span>Crypto discount ({ORDER_RULES.cryptoDiscountPercent}%)</span>
          <span>-${discount.toFixed(2)}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '1.1rem', borderTop: '1px solid var(--border)', paddingTop: '0.4rem' }}>
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      {belowMin && (
        <p role="alert" style={{ color: '#b45309', fontWeight: 600, textAlign: 'right' }}>
          Minimum order is ${ORDER_RULES.minOrder}. Add ${(ORDER_RULES.minOrder - subtotal).toFixed(2)} more to check out.
        </p>
      )}

      {!belowMin && (
        <div style={{ marginTop: '2.5rem', maxWidth: 480, marginLeft: 'auto' }}>
          <h2>Order Details</h2>
          <WebForm subject="New order — Breeze Vapes" thankYouUrl="/thank-you-order/">
            {({ onEmailInput }) => (
              <>
                <input type="hidden" name="order_summary" value={orderSummary} />
                <input type="hidden" name="order_total" value={`$${total.toFixed(2)}`} />
                <div className="form-field">
                  <label htmlFor="o-name">Full Name</label>
                  <input id="o-name" name="name" type="text" required autoComplete="name" />
                </div>
                <div className="form-field">
                  <label htmlFor="o-email">Email</label>
                  <input id="o-email" name="email" type="email" required autoComplete="email" onInput={onEmailInput} />
                </div>
                <div className="form-field">
                  <label htmlFor="o-address">Shipping Address</label>
                  <textarea id="o-address" name="shipping_address" required autoComplete="street-address" />
                </div>
                <div className="form-field">
                  <label htmlFor="o-notes">Order Notes (optional)</label>
                  <textarea id="o-notes" name="notes" />
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Payment: cryptocurrency only (BTC, USDT). We&apos;ll follow up by email with payment instructions.
                  Must be {SITE.ageRestriction} or older to order.
                </p>
              </>
            )}
          </WebForm>
        </div>
      )}
    </div>
  )
}
