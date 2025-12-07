import React, { useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import ProgressBar from '../components/ProgressBar'

const SUBJECT_UNITS = {
  Math: [
    {
      name: 'Numbers & Operations', done: 5, ongoing: 1, left: 3,
      lessons: [
        { title: 'Addition basics', status: 'done', date: '2024-11-01' },
        { title: 'Subtraction basics', status: 'done', date: '2024-11-03' },
        { title: 'Multiplication intro', status: 'ongoing', date: '2024-11-10' },
        { title: 'Division intro', status: 'left' },
      ]
    },
    {
      name: 'Fractions & Decimals', done: 3, ongoing: 2, left: 4,
      lessons: [
        { title: 'Fractions as parts', status: 'done', date: '2024-11-15' },
        { title: 'Equivalent fractions', status: 'ongoing', date: '2024-11-18' },
        { title: 'Decimals to fractions', status: 'left' },
      ]
    }
  ],
  Science: [
    {
      name: 'Plants & Animals', done: 6, ongoing: 1, left: 2,
      lessons: [
        { title: 'Parts of a plant', status: 'done', date: '2024-10-20' },
        { title: 'Photosynthesis', status: 'done', date: '2024-10-22' },
        { title: 'Animal habitats', status: 'ongoing', date: '2024-10-25' },
      ]
    }
  ],
  English: [
    {
      name: 'Grammar Basics', done: 7, ongoing: 0, left: 2,
      lessons: [
        { title: 'Nouns & Verbs', status: 'done', date: '2024-09-10' },
        { title: 'Adjectives', status: 'done', date: '2024-09-12' },
        { title: 'Adverbs', status: 'left' },
      ]
    }
  ],
  Geography: [
    { name: 'Landforms', done: 4, ongoing: 2, left: 3, lessons: [
      { title: 'Mountains', status: 'done', date: '2024-08-04' },
      { title: 'Valleys', status: 'ongoing', date: '2024-08-06' },
      { title: 'Plains', status: 'left' },
    ] }
  ],
  Art: [
    { name: 'Color & Composition', done: 2, ongoing: 3, left: 4, lessons: [
      { title: 'Primary colors', status: 'done', date: '2024-07-01' },
      { title: 'Color mixing', status: 'ongoing', date: '2024-07-05' },
    ] }
  ],
  Coding: [
    { name: 'Scratch Basics', done: 5, ongoing: 1, left: 1, lessons: [
      { title: 'Sprites & Motion', status: 'done', date: '2024-06-10' },
      { title: 'Events', status: 'ongoing', date: '2024-06-12' },
    ] }
  ],
}

export default function SubjectProgress() {
  const { subject } = useParams()
  const navigate = useNavigate()
  const units = useMemo(() => SUBJECT_UNITS[subject] || [], [subject])
  const totals = useMemo(() => {
    const agg = { done: 0, ongoing: 0, left: 0 }
    units.forEach(u => { agg.done += u.done; agg.ongoing += u.ongoing; agg.left += u.left })
    return agg
  }, [units])

  return (
    <div className="p-4 space-y-4">
      <header className="surface-card ios-shadow px-4 py-3 rounded-2xl flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-xl bg-white/60 dark:bg-[#1C1C1E]/60 backdrop-blur-xl ios-shadow" onClick={() => navigate(-1)}>
            <ChevronLeft size={18} />
          </button>
          <div>
            <h1 className="text-lg font-semibold">{subject} Progress</h1>
            <p className="text-sm opacity-70">Units, lessons, and statuses for this subject.</p>
          </div>
        </div>
        <div className="text-xs opacity-70">Completed {totals.done} • Ongoing {totals.ongoing} • Left {totals.left}</div>
      </header>

      {units.length === 0 ? (
        <div className="surface-card ios-shadow p-4 rounded-2xl">
          <div className="text-sm opacity-70">No data available for {subject} yet.</div>
        </div>
      ) : (
        <div className="space-y-3">
          {units.map((u, idx) => (
            <div key={idx} className="surface-card ios-shadow p-4 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">{u.name}</div>
                <div className="text-xs opacity-70">Done {u.done} • Ongoing {u.ongoing} • Left {u.left}</div>
              </div>
              <ProgressBar done={u.done} ongoing={u.ongoing} left={u.left} />
              <div className="space-y-2">
                {u.lessons?.map((l, i) => (
                  <div key={i} className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/60 dark:bg-[#1C1C1E]/60 backdrop-blur-xl border border-black/10 dark:border-white/10">
                    <div className="text-sm">{l.title}</div>
                    <div className="flex items-center gap-3 text-xs">
                      <span className={`${l.status === 'done' ? 'text-green-600' : l.status === 'ongoing' ? 'text-blue-600' : 'text-gray-600'} font-medium`}>{l.status}</span>
                      {l.date && <span className="opacity-60">{l.date}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

