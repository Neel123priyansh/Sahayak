import React, { useEffect, useState } from 'react'

const STATES = [
  'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal','Delhi','Jammu & Kashmir','Ladakh'
]

export default function OnboardingBasic({ onNext }) {
  const [name, setName] = useState('')
  const [teacherId, setTeacherId] = useState('')
  const [state, setState] = useState('')
  const [query, setQuery] = useState('')
  const filtered = STATES.filter(s => s.toLowerCase().includes(query.toLowerCase()))

  const isValid = name.trim().length >= 3 && /^\d+$/.test(teacherId) && state

  const continueNext = () => {
    const payload = { name: name.trim(), teacherId, state }
    localStorage.setItem('ob.basic', JSON.stringify(payload))
    onNext?.()
  }

  useEffect(() => { document.title = 'Onboarding · Basic Details' }, [])

  return (
    <div className="space-y-6" role="form" aria-label="Basic Details">
      <h1 className="text-2xl font-semibold">Welcome! Tell us about you</h1>
      <div className="surface-card ios-shadow rounded-2xl p-6 space-y-4">
        <label className="block">
          <span className="text-sm opacity-70">Teacher Name</span>
          <input aria-required type="text" minLength={3} value={name} onChange={e=>setName(e.target.value)} className="mt-1 w-full px-3 py-2 rounded-xl border border-black/10 dark:border-white/20 bg-white/70 dark:bg-[#1C1C1E]/70" />
          {name && name.trim().length < 3 && (<p className="text-red-600 text-sm mt-1">Minimum 3 characters</p>)}
        </label>
        <label className="block">
          <span className="text-sm opacity-70">Teacher ID</span>
          <input aria-required type="text" value={teacherId} onChange={e=>setTeacherId(e.target.value)} className="mt-1 w-full px-3 py-2 rounded-xl border border-black/10 dark:border-white/20 bg-white/70 dark:bg-[#1C1C1E]/70" />
          {teacherId && !/^\d+$/.test(teacherId) && (<p className="text-red-600 text-sm mt-1">ID must be numeric</p>)}
        </label>
        <div className="grid grid-cols-1 gap-3">
          <label className="block">
            <span className="text-sm opacity-70">State</span>
            <input aria-label="Search states" placeholder="Search…" value={query} onChange={e=>setQuery(e.target.value)} className="mt-1 w-full px-3 py-2 rounded-xl border border-black/10 dark:border-white/20 bg-white/60 dark:bg-[#1C1C1E]/60" />
          </label>
          <div role="listbox" aria-label="Select state" className="max-h-52 overflow-auto surface-card rounded-xl p-2">
            {filtered.sort().map(s => (
              <button key={s} aria-selected={state===s} onClick={()=>setState(s)} className={`w-full text-left px-3 py-2 rounded-lg ${state===s ? 'bg-blue-500 text-white ios-shadow' : 'hover:bg-black/5 dark:hover:bg-white/5'}`}>{s}</button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button disabled={!isValid} onClick={continueNext} className={`px-4 py-2 rounded-xl ${isValid ? 'bg-blue-500 text-white ios-button ios-shadow' : 'bg-black/10 dark:bg-white/10 cursor-not-allowed'}`}>Continue</button>
      </div>
    </div>
  )
}

