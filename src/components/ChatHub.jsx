'use client'
import { useEffect, useState } from 'react'
import { CHAT } from '@/config/site'

function isPending(value) {
  return !value || value.includes('PENDING')
}

export default function ChatHub() {
  const [open, setOpen] = useState(false)
  const tawk = CHAT.channels.find((c) => c.type === 'tawk')
  const tawkReady = tawk && !isPending(tawk.value)

  useEffect(() => {
    if (!tawkReady) return
    const idleTimer = setTimeout(loadTawk, 3000)
    const onInteract = () => {
      loadTawk()
      clearTimeout(idleTimer)
    }
    window.addEventListener('scroll', onInteract, { once: true, passive: true })
    window.addEventListener('click', onInteract, { once: true })
    return () => {
      clearTimeout(idleTimer)
      window.removeEventListener('scroll', onInteract)
      window.removeEventListener('click', onInteract)
    }
    function loadTawk() {
      if (document.getElementById('tawk-script')) return
      const [propertyId, widgetId] = tawk.value.split('/')
      const s = document.createElement('script')
      s.id = 'tawk-script'
      s.async = true
      s.src = `https://embed.tawk.to/${propertyId}/${widgetId}`
      s.setAttribute('crossorigin', '*')
      document.body.appendChild(s)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tawkReady])

  if (!tawkReady) {
    // No live chat channel configured yet — link straight to Contact instead of an empty widget.
    return (
      <a
        href="/contact/"
        aria-label="Contact us"
        className="chat-fab"
        style={{
          position: 'fixed',
          bottom: '1.25rem',
          right: '1.25rem',
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: 'var(--primary)',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--shadow)',
          zIndex: 90,
          fontSize: '1.4rem',
        }}
      >
        <span aria-hidden="true">💬</span>
      </a>
    )
  }

  return null
}
