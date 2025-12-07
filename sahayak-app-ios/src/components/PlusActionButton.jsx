import React from 'react'
import { Plus } from 'lucide-react'

export default function PlusActionButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-16 left-1/2 -translate-x-1/2 z-controls w-14 h-14 rounded-full bg-gradient-to-b from-green-400 to-green-600 text-white ios-shadow flex items-center justify-center border border-white/30"
      aria-label="Add"
    >
      <div className="absolute inset-0 rounded-full ring-4 ring-white/20" />
      <Plus size={24} />
    </button>
  )
}
