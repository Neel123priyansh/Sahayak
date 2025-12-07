import React from 'react'

export default function WelcomeCard({ name = 'Shivani', streakDays = 5, goalMinutes = 20, onResume }) {
  return (
    <div className="surface-card ios-shadow px-4 py-4 rounded-2xl flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 ios-shadow" />
        <div>
          <div className="text-sm opacity-70">Welcome back</div>
          <div className="text-lg font-semibold">{name}</div>
          <div className="text-xs opacity-70">Streak: {streakDays} days • Goal: {goalMinutes} mins</div>
        </div>
      </div>
      <button
        onClick={onResume}
        className="px-3 py-2 rounded-xl bg-green-500 text-white ios-button"
      >
        Resume Learning
      </button>
    </div>
  )
}

