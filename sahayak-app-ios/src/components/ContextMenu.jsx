import React, { useEffect } from 'react'

export default function ContextMenu({ x, y, open, onClose, actions = [] }) {
  useEffect(() => {
    const handler = (e) => { if (open) onClose?.() }
    window.addEventListener('click', handler)
    return () => window.removeEventListener('click', handler)
  }, [open, onClose])
  if (!open) return null
  return (
    <div className="fixed z-modal" style={{ left: x, top: y }}>
      <div className="surface-card ios-shadow rounded-2xl p-2 w-48">
        {actions.map((a) => (
          <button
            key={a.label}
            onClick={a.onClick}
            className="w-full text-left px-3 py-2 rounded-xl ios-button hover:bg-black/5 dark:hover:bg-white/10"
          >
            {a.label}
          </button>
        ))}
      </div>
    </div>
  )
}
