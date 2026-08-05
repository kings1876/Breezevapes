'use client'

const KEY = 'bv-cart'

export function getCart() {
  if (typeof window === 'undefined') return []
  try {
    return JSON.parse(localStorage.getItem(KEY)) || []
  } catch {
    return []
  }
}

export function saveCart(items) {
  localStorage.setItem(KEY, JSON.stringify(items))
  window.dispatchEvent(new Event('bv-cart-updated'))
}

export function addToCart(slug, qty = 1) {
  const items = getCart()
  const existing = items.find((i) => i.slug === slug)
  if (existing) {
    existing.qty += qty
  } else {
    items.push({ slug, qty })
  }
  saveCart(items)
  return items
}

export function updateQty(slug, qty) {
  let items = getCart()
  if (qty <= 0) {
    items = items.filter((i) => i.slug !== slug)
  } else {
    const existing = items.find((i) => i.slug === slug)
    if (existing) existing.qty = qty
  }
  saveCart(items)
  return items
}

export function removeFromCart(slug) {
  const items = getCart().filter((i) => i.slug !== slug)
  saveCart(items)
  return items
}

export function cartCount(items) {
  return items.reduce((sum, i) => sum + i.qty, 0)
}
