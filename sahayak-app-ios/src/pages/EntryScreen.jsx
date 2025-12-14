import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">What would you like to do?</h1>
      <div className="grid grid-cols-1 gap-4">
        <button onClick={() => pick('teach')} className="surface-card ios-shadow rounded-2xl p-6 text-left">
          <div className="text-xl font-semibold">Teach</div>
          <p className="opacity-75">Access the teacher interface</p>
        </button>
        <button onClick={() => pick('study')} className="surface-card ios-shadow rounded-2xl p-6 text-left">
          <div className="text-xl font-semibold">Study</div>
          <p className="opacity-75">Explore syllabus, notes, and AI-generated content</p>
        </button>
      </div>
    </div>
  )
}

