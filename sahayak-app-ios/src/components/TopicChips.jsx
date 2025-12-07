import React from 'react'

const chips = ['Popular', 'Recommended', 'New', 'Math', 'Science', 'Geography', 'Art', 'Coding']

export default function TopicChips({ onSelect, active }) {
  return (
    <div className="overflow-x-auto no-scrollbar">
      <div className="flex gap-2 w-max">
        {chips.map((c) => {
          const isActive = active === c
          return (
            <button
              key={c}
              onClick={() => onSelect?.(c)}
              className={`px-3 py-1.5 rounded-full border text-sm transition-colors ${
                isActive
                  ? 'bg-blue-500 text-white ios-shadow border-blue-500'
                  : 'bg-white/70 dark:bg-[#1C1C1E]/70 border-black/10 dark:border-white/10'
              }`}
            >
              {c}
            </button>
          )
        })}
      </div>
    </div>
  )
}
