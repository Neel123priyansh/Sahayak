import React from 'react'

export default function ProgressBar({ done = 0, ongoing = 0, left = 0 }) {
  const total = Math.max(done + ongoing + left, 1)
  const donePct = Math.round((done / total) * 100)
  const ongoingPct = Math.round((ongoing / total) * 100)
  const leftPct = 100 - donePct - ongoingPct
  return (
    <div>
      <div className="flex items-center justify-between text-xs opacity-70 mb-1">
        <span>Completed {done}</span>
        <span>Ongoing {ongoing}</span>
        <span>Left {left}</span>
      </div>
      <div className="w-full h-3 rounded-full bg-black/5 dark:bg-white/10 overflow-hidden">
        <div className="h-full flex">
          <div style={{ width: `${donePct}%` }} className="bg-green-500" />
          <div style={{ width: `${ongoingPct}%` }} className="bg-blue-500" />
          <div style={{ width: `${leftPct}%` }} className="bg-gray-300 dark:bg-gray-600" />
        </div>
      </div>
    </div>
  )
}

