'use client'
import { useRef, useState } from 'react'
import { FORMS } from '@/config/site'

// The exact Web3Forms CORS method — do not change the fetch shape.
// FormData body + Accept-only header = a CORS-simple request, no preflight.
export default function WebForm({ subject, thankYouUrl, toEmail, children }) {
  const formRef = useRef(null)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  function onEmailInput(e) {
    const form = formRef.current
    const replyto = form.querySelector('input[name="replyto"]')
    if (replyto) replyto.value = e.target.value
  }

  async function onSubmit(e) {
    e.preventDefault()
    setError('')

    const keyMissing = !FORMS.web3formsKey || FORMS.web3formsKey.startsWith('YOUR-')
    if (keyMissing) {
      // Key-pending fallback — never dead-end the customer mid-order.
      window.location.href = thankYouUrl
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(formRef.current),
      })
      const data = await res.json()
      if (res.status === 200 && data.success) {
        window.location.href = thankYouUrl
      } else {
        throw new Error(data.message || 'Submission failed')
      }
    } catch (err) {
      setError('Something went wrong sending your message. Please try again, or reach us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate>
      <input type="hidden" name="access_key" value={FORMS.web3formsKey} />
      <input type="hidden" name="subject" value={subject} />
      <input type="hidden" name="from_name" value="Breeze Vapes website" />
      <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="replyto" defaultValue="" />
      {toEmail && <input type="hidden" name="to" value={toEmail} />}

      {typeof children === 'function' ? children({ onEmailInput }) : children}

      {error && (
        <p role="alert" aria-live="assertive" style={{ color: '#b91c1c', fontWeight: 600 }}>
          {error}
        </p>
      )}

      <button type="submit" className="btn btn-primary" disabled={submitting} style={{ width: '100%' }}>
        {submitting ? 'Sending…' : 'Submit'}
      </button>
    </form>
  )
}
