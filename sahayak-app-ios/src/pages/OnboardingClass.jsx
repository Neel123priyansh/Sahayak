import React, { useEffect, useState } from 'react'

const CLASSES = [
  { id: 1, age: '6–7', icon: '📘' },
  { id: 2, age: '7–8', icon: '📗' },
  { id: 3, age: '8–9', icon: '📙' },
  { id: 4, age: '9–10', icon: '📕' },
  { id: 5, age: '10–11', icon: '📔' },
  { id: 6, age: '11–12', icon: '📓' },
]

export default function OnboardingClass({ onConfirm }) {
  const [selected, setSelected] = useState(null)
  useEffect(() => { document.title = 'Onboarding · Class Selection' }, [])

  const confirm = () => { localStorage.setItem('ob.class', String(selected)); localStorage.setItem('onboardingComplete','true'); onConfirm?.() }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Select your class</h1>
      <div className="grid grid-cols-2 gap-3">
        {CLASSES.map(c => (
          <button key={c.id} onClick={()=>setSelected(c.id)} className={`surface-card ios-shadow rounded-2xl p-4 flex flex-col items-center gap-2 ${selected===c.id?'ring-2 ring-blue-500':''}`} aria-pressed={selected===c.id}>
            <div className="text-2xl" aria-hidden>{c.icon}</div>
            <div className="font-semibold">Class {c.id}</div>
            <div className="text-sm opacity-70">Age {c.age}</div>
          </button>
        ))}
      </div>
      <div className="flex justify-end">
        <button disabled={!selected} onClick={confirm} className={`px-4 py-2 rounded-xl ${selected?'bg-blue-500 text-white ios-button ios-shadow':'bg-black/10 dark:bg-white/10 cursor-not-allowed'}`}>Confirm</button>
      </div>
    </div>
  )
}

