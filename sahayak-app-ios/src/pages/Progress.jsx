import React, { useState, useMemo } from 'react'
import ProgressCard from '../components/ProgressCard'
import { Link } from 'react-router-dom'

const classes = [
  {
    id: 'class-1',
    name: 'Class 1',
    subjects: [
      { subject: 'Math', done: 8, ongoing: 2, left: 5 },
      { subject: 'Science', done: 6, ongoing: 3, left: 6 },
      { subject: 'English', done: 10, ongoing: 1, left: 4 },
      { subject: 'Geography', done: 4, ongoing: 3, left: 8 },
    ],
  },
  {
    id: 'class-2',
    name: 'Class 2',
    subjects: [
      { subject: 'Math', done: 12, ongoing: 1, left: 2 },
      { subject: 'Science', done: 9, ongoing: 3, left: 4 },
      { subject: 'English', done: 11, ongoing: 0, left: 5 },
      { subject: 'Art', done: 5, ongoing: 4, left: 7 },
    ],
  },
]

export default function Progress() {
  const [activeClass, setActiveClass] = useState(classes[0].id)
  const data = useMemo(() => classes.find(c => c.id === activeClass) || classes[0], [activeClass])
  const totals = useMemo(() => {
    const agg = { done: 0, ongoing: 0, left: 0 }
    data.subjects.forEach(s => { agg.done += s.done; agg.ongoing += s.ongoing; agg.left += s.left })
    return agg
  }, [data])

  return (
    <div className="p-4 space-y-4">
      <header className="surface-card ios-shadow px-4 py-3 rounded-2xl">
        <h1 className="text-lg font-semibold">Progress</h1>
        <p className="text-sm opacity-70">Track subjects taught and lessons completed across classes.</p>
      </header>

      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-2 w-max">
          {classes.map(c => (
            <button
              key={c.id}
              onClick={() => setActiveClass(c.id)}
              className={`px-3 py-1.5 rounded-full border text-sm ${
                activeClass === c.id
                  ? 'bg-blue-500 text-white ios-shadow border-blue-500'
                  : 'bg-white/70 dark:bg-[#1C1C1E]/70 border-black/10 dark:border-white/10'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      <section className="surface-card ios-shadow p-4 rounded-2xl">
        <div className="text-sm font-semibold mb-2">Class Overview</div>
        <div className="text-xs opacity-70">Completed {totals.done} • Ongoing {totals.ongoing} • Left {totals.left}</div>
        <div className="mt-3 h-3 w-full rounded-full bg-black/5 dark:bg-white/10 overflow-hidden">
          {(() => {
            const total = Math.max(totals.done + totals.ongoing + totals.left, 1)
            const d = Math.round((totals.done / total) * 100)
            const o = Math.round((totals.ongoing / total) * 100)
            const l = 100 - d - o
            return (
              <div className="h-full flex">
                <div style={{ width: `${d}%` }} className="bg-green-500" />
                <div style={{ width: `${o}%` }} className="bg-blue-500" />
                <div style={{ width: `${l}%` }} className="bg-gray-300 dark:bg-gray-600" />
              </div>
            )
          })()}
        </div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {data.subjects.map((s, idx) => (
          <Link key={idx} to={`/progress/${encodeURIComponent(s.subject)}`} className="block">
            <ProgressCard subject={s.subject} done={s.done} ongoing={s.ongoing} left={s.left} />
          </Link>
        ))}
      </div>
    </div>
  )
}
