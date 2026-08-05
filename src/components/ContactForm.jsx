'use client'
import WebForm from '@/components/WebForm'

export default function ContactForm() {
  return (
    <WebForm subject="New contact form submission — Breeze Vapes" thankYouUrl="/thank-you-contact/">
      {({ onEmailInput }) => (
        <>
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required autoComplete="name" />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required autoComplete="email" onInput={onEmailInput} />
          </div>
          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required />
          </div>
        </>
      )}
    </WebForm>
  )
}
