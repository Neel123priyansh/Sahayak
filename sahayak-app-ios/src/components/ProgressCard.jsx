import React from 'react'
import ProgressBar from './ProgressBar'

export default function ProgressCard({ subject, done, ongoing, left }) {
  return (
    <div className="surface-card ios-shadow p-4 rounded-2xl space-y-3">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold">{subject}</div>
        <div className="flex gap-2">
          <span className="px-2 py-1 text-xs rounded-lg bg-green-500/20 text-green-700 dark:text-green-300">Done {done}</span>
          <span className="px-2 py-1 text-xs rounded-lg bg-blue-500/20 text-blue-700 dark:text-blue-300">Ongoing {ongoing}</span>
          <span className="px-2 py-1 text-xs rounded-lg bg-gray-500/20 text-gray-700 dark:text-gray-300">Left {left}</span>
        </div>
      </div>
      <ProgressBar done={done} ongoing={ongoing} left={left} />
    </div>
  )
}

