import React from 'react'

const topics = [
  'Mathematics', 'Science', 'History', 'Geography', 'Art', 'Music',
  'Coding', 'Literature', 'Biology', 'Physics', 'Chemistry', 'Economics'
]

export default function TopicPicker({ open, onClose, onSelect }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-modal">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="absolute inset-x-4 bottom-8 surface-card ios-shadow rounded-2xl p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-base font-semibold">Choose a topic</h3>
          <button onClick={onClose} className="text-sm opacity-70">Close</button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {topics.map((t) => (
            <button
              key={t}
              onClick={() => { onSelect?.(t); onClose?.() }}
              className="px-3 py-2 rounded-xl pill ios-button bg-white/90 dark:bg-[#1C1C1E]/80 hover:bg-black/5 dark:hover:bg-white/10"
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
