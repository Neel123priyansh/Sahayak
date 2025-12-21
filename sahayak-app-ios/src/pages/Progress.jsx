import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { BarChart2, BookOpen, CheckCircle, Clock, ChevronRight } from 'lucide-react'

const classes = [
  {
    id: 'class-1',
    name: 'Class 1',
    subjects: [
      { subject: 'Math', done: 8, ongoing: 2, left: 5, color: 'bg-amber-400' },
      { subject: 'Science', done: 6, ongoing: 3, left: 6, color: 'bg-cyan-400' },
      { subject: 'English', done: 10, ongoing: 1, left: 4, color: 'bg-purple-400' },
      { subject: 'Geography', done: 4, ongoing: 3, left: 8, color: 'bg-green-400' },
    ],
  },
  {
    id: 'class-2',
    name: 'Class 2',
    subjects: [
      { subject: 'Math', done: 12, ongoing: 1, left: 2, color: 'bg-amber-400' },
      { subject: 'Science', done: 9, ongoing: 3, left: 4, color: 'bg-cyan-400' },
      { subject: 'English', done: 11, ongoing: 0, left: 5, color: 'bg-purple-400' },
      { subject: 'Art', done: 5, ongoing: 4, left: 7, color: 'bg-pink-400' },
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
    <div className="space-y-6 text-[#1E1E24] dark:text-white">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#1E1E24] dark:text-white">Your Progress</h1>
        
        {/* Class Selector Pills */}
        <div className="flex bg-white rounded-full p-1 shadow-sm dark:bg-white/10">
          {classes.map(c => (
            <button
              key={c.id}
              onClick={() => setActiveClass(c.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeClass === c.id
                  ? 'bg-[#1E1E24] text-white shadow-md dark:bg-white dark:text-[#1E1E24]'
                  : 'text-[#8E8E93] hover:text-[#1E1E24] dark:text-white/60 dark:hover:text-white'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Overview Card */}
        <div className="lg:col-span-8 bento-card-orange rounded-[2rem] p-8 relative overflow-hidden">
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-2">Class Overview</h2>
                <p className="text-white/80">Track your journey across all subjects</p>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <BarChart2 className="text-white" size={24} />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-8">
              <div>
                <span className="block text-5xl font-bold">{totals.done}</span>
                <span className="text-white/70 font-medium">Completed</span>
              </div>
              <div>
                <span className="block text-5xl font-bold">{totals.ongoing}</span>
                <span className="text-white/70 font-medium">In Progress</span>
              </div>
              <div>
                <span className="block text-5xl font-bold">{totals.left}</span>
                <span className="text-white/70 font-medium">Remaining</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-8">
               <div className="flex justify-between text-sm mb-2 opacity-80">
                 <span>Overall Completion</span>
                 <span>{Math.round((totals.done / (totals.done + totals.ongoing + totals.left)) * 100)}%</span>
               </div>
               <div className="h-4 bg-black/10 rounded-full overflow-hidden flex">
                 <div style={{ width: `${(totals.done / (totals.done + totals.ongoing + totals.left)) * 100}%` }} className="bg-white h-full" />
                 <div style={{ width: `${(totals.ongoing / (totals.done + totals.ongoing + totals.left)) * 100}%` }} className="bg-white/50 h-full" />
               </div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        {/* Quick Stats / Motivation */}
        <div className="lg:col-span-4 space-y-6">
           <div className="bento-card-purple rounded-[2rem] p-6 min-h-[180px] flex flex-col justify-center items-center text-center relative overflow-hidden">
             <div className="relative z-10">
               <h3 className="text-xl font-bold mb-2">Keep it up! 🎉</h3>
               <p className="text-white/80 text-sm">You're making great progress this week.</p>
             </div>
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
           </div>
           
           <div className="bento-card flex items-center justify-between p-6 dark:bg-[#1E1E24] dark:border dark:border-white/10">
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center dark:bg-green-900/30 dark:text-green-400">
                 <CheckCircle size={24} />
               </div>
               <div>
                 <h4 className="font-bold text-[#1E1E24] dark:text-white">Tasks Done</h4>
                 <p className="text-xs text-[#8E8E93] dark:text-gray-400">Total completed</p>
               </div>
             </div>
             <span className="text-2xl font-bold text-[#1E1E24] dark:text-white">{totals.done}</span>
           </div>
        </div>
      </div>

      {/* Subjects Grid */}
      <div>
        <h3 className="text-xl font-bold text-[#1E1E24] mb-4 dark:text-white">Subjects Breakdown</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.subjects.map((s, idx) => (
            <Link key={idx} to={`/progress/${encodeURIComponent(s.subject)}`} className="bento-card group hover:shadow-lg transition-all relative overflow-hidden dark:bg-[#1E1E24] dark:border dark:border-white/10">
               <div className={`absolute top-0 right-0 w-24 h-24 ${s.color} opacity-10 rounded-bl-[4rem] group-hover:scale-110 transition-transform`}></div>
               
               <div className="mb-4">
                 <div className={`w-10 h-10 ${s.color} bg-opacity-20 rounded-xl flex items-center justify-center text-[#1E1E24] mb-3 dark:text-white`}>
                   <BookOpen size={20} />
                 </div>
                 <h4 className="text-lg font-bold text-[#1E1E24] dark:text-white">{s.subject}</h4>
               </div>

               <div className="space-y-3">
                 <div className="flex justify-between text-sm">
                   <span className="text-[#8E8E93] dark:text-gray-400">Done</span>
                   <span className="font-bold text-[#1E1E24] dark:text-white">{s.done}</span>
                 </div>
                 <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden dark:bg-white/10">
                   <div style={{ width: `${(s.done / (s.done + s.ongoing + s.left)) * 100}%` }} className={`h-full ${s.color.replace('bg-', 'bg-')}`}></div>
                 </div>
                 <div className="flex justify-between text-xs text-[#8E8E93] pt-2 dark:text-gray-400">
                   <span className="flex items-center gap-1"><Clock size={12} /> {s.ongoing} ongoing</span>
                   <span>{s.left} left</span>
                 </div>
               </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
