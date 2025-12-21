import React from 'react'

const chips = ['Popular', 'Recommended', 'New', 'Math', 'Science', 'Geography', 'Art', 'Coding']

export default function TopicChips({ onSelect, active }) {
  return (
    <div className="overflow-x-auto no-scrollbar" aria-label="Topic filters">
      <div className="flex gap-3 w-max">
        {chips.map((c) => {
          const isActive = active === c
          return (
            <button
              key={c}
              onClick={() => onSelect?.(c)}
              aria-pressed={isActive}
              className={`px-4 py-2 rounded-full text-sm sm:text-base transition-colors ios-button ${
                isActive
                  ? 'pill pill-active ios-shadow'
                  : 'pill bg-white/90 dark:bg-[#1C1C1E]/80 hover:bg-black/5 dark:hover:bg-white/10'
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
