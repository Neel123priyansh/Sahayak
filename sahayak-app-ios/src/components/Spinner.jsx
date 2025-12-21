import React from 'react'

export default function Spinner({ label = 'Loading...' }) {
  return (
    <div role="status" aria-live="polite" className="flex items-center justify-center py-10">
      <div className="animate-spin h-6 w-6 rounded-full border-2 border-black/20 border-t-black dark:border-white/20 dark:border-t-white mr-3" />
      <span className="text-sm opacity-80">{label}</span>
    </div>
  )
}
