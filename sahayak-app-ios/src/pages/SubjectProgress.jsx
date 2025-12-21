import React, { useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ChevronLeft, CheckCircle2, Clock, Circle, BookOpen } from 'lucide-react'
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
    <div className="max-w-5xl mx-auto p-4 lg:p-8 space-y-6 font-sans text-[#1E1E24] dark:text-white">
      {/* Header */}
      <div className="bento-card p-6 flex items-center justify-between dark:bg-[#1E1E24] dark:border dark:border-white/10">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors dark:bg-white/10 dark:hover:bg-white/20"
          >
            <ChevronLeft size={20} className="text-[#1E1E24] dark:text-white" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-[#1E1E24] dark:text-white">{subject} Progress</h1>
            <p className="text-[#8E8E93] text-sm">Detailed breakdown of your learning journey</p>
          </div>
        </div>
        
        <div className="hidden sm:flex items-center gap-4 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100 dark:bg-white/5 dark:border-white/10">
          <div className="flex items-center gap-2 text-xs font-medium dark:text-white">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span>{totals.done} Done</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium dark:text-white">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span>{totals.ongoing} Ongoing</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium dark:text-white">
            <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600" />
            <span>{totals.left} Left</span>
          </div>
        </div>
      </div>

      {/* Units List */}
      {units.length === 0 ? (
        <div className="bento-card p-12 flex flex-col items-center justify-center text-center space-y-4 dark:bg-[#1E1E24] dark:border dark:border-white/10">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 dark:bg-white/10 dark:text-gray-500">
            <BookOpen size={32} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#1E1E24] dark:text-white">No Data Available</h3>
            <p className="text-[#8E8E93]">There is no progress tracking available for {subject} yet.</p>
          </div>
          <button onClick={() => navigate(-1)} className="text-orange-600 font-medium hover:underline dark:text-orange-400">
            Go Back
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {units.map((u, idx) => (
            <div key={idx} className="bento-card p-6 space-y-6 dark:bg-[#1E1E24] dark:border dark:border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 font-bold dark:bg-orange-900/30 dark:text-orange-400">
                    {idx + 1}
                  </div>
                  <h2 className="text-lg font-bold text-[#1E1E24] dark:text-white">{u.name}</h2>
                </div>
                <div className="w-full sm:w-64">
                  <ProgressBar done={u.done} ongoing={u.ongoing} left={u.left} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {u.lessons?.map((l, i) => (
                  <div 
                    key={i} 
                    className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-md transition-all duration-200 group dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className="font-medium text-[#1E1E24] line-clamp-1 group-hover:text-orange-600 transition-colors dark:text-white dark:group-hover:text-orange-400">
                        {l.title}
                      </span>
                      {l.status === 'done' && <CheckCircle2 size={16} className="text-green-500 shrink-0" />}
                      {l.status === 'ongoing' && <Clock size={16} className="text-blue-500 shrink-0" />}
                      {l.status === 'left' && <Circle size={16} className="text-gray-300 shrink-0 dark:text-gray-600" />}
                    </div>
                    
                    <div className="flex items-center justify-between text-xs">
                      <span className={`px-2 py-0.5 rounded-md font-medium capitalize
                        ${l.status === 'done' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 
                          l.status === 'ongoing' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' : 
                          'bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-400'
                        }`}
                      >
                        {l.status}
                      </span>
                      {l.date && (
                        <span className="text-[#8E8E93]">{new Date(l.date).toLocaleDateString()}</span>
                      )}
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
