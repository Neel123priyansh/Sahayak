import React, { useEffect, useState } from 'react'

export default function VideoGeneration() {
  const [cls, setCls] = useState(Number(localStorage.getItem('ob.class')) || 1)
  useEffect(() => { document.title = 'Video Generation' }, [])

  const disabled = cls >= 5

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Generate Teaching Video</h1>
      <section className="surface-card ios-shadow rounded-2xl p-6 space-y-4">
        <label className="block">
          <span className="text-sm opacity-70">Class</span>
          <select value={cls} onChange={e=>setCls(Number(e.target.value))} className="mt-1 w-full px-3 py-2 rounded-xl border border-black/10 dark:border-white/20 bg-white/60 dark:bg-[#1C1C1E]/60">
            {[1,2,3,4,5,6].map(i => (<option key={i} value={i}>Class {i}</option>))}
          </select>
        </label>
        <button className={`px-4 py-2 rounded-xl ${disabled?'bg-black/10 dark:bg-white/10 cursor-not-allowed':'bg-green-500 text-white ios-button ios-shadow'}`} disabled={disabled}>
          Generate Video
        </button>
        {disabled && (
          <p className="text-sm opacity-80">This feature is available for Class 1–4. For Class 5–6, video generation is disabled.</p>
        )}
      </section>
    </div>
  )
}

