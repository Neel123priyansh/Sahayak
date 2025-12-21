import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GraduationCap, BookOpen, ChevronRight } from 'lucide-react'

export default function EntryScreen() {
  const nav = useNavigate()
  const [last, setLast] = useState(localStorage.getItem('lastMode') || 'teach')

  useEffect(() => { document.title = 'Entry'; }, [])

  const pick = (mode) => {
    setLast(mode)
    localStorage.setItem('lastMode', mode)
    nav(mode === 'teach' ? '/' : '/study')
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 font-sans text-[#1E1E24] dark:text-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-[#1E1E24] mb-3 dark:text-white">Welcome to Sahayak</h1>
        <p className="text-[#8E8E93] text-lg dark:text-white/60">Choose your learning mode to get started</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button
          onClick={() => pick('teach')}
          className="group relative p-8 rounded-[2rem] bg-orange-500 text-left overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:border dark:border-white/10"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 flex flex-col h-full justify-between min-h-[240px]">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm mb-6">
              <GraduationCap className="text-white" size={32} />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Teach</h2>
              <p className="text-white/80 text-lg mb-6">Access the teacher interface to manage classes and students.</p>
              
              <div className="flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all">
                Enter Teach Mode <ChevronRight size={20} />
              </div>
            </div>
          </div>
        </button>

        <button
          onClick={() => pick('study')}
          className="group relative p-8 rounded-[2rem] bg-purple-600 text-left overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:border dark:border-white/10"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 flex flex-col h-full justify-between min-h-[240px]">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm mb-6">
              <BookOpen className="text-white" size={32} />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Study</h2>
              <p className="text-white/80 text-lg mb-6">Explore syllabus, notes, and AI-generated content.</p>
              
              <div className="flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all">
                Enter Study Mode <ChevronRight size={20} />
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}
