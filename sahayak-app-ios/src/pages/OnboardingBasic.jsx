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
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#1E1E24] dark:text-white">Welcome! Tell us about you</h1>
      </div>

      <div className="bento-card p-8 space-y-6 dark:bg-[#1E1E24] dark:border dark:border-white/10">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#8E8E93]">Teacher Name</label>
          <input 
            aria-required 
            type="text" 
            minLength={3} 
            value={name} 
            onChange={e=>setName(e.target.value)} 
            className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-[#1E1E24] dark:bg-white/5 dark:border-white/10 dark:text-white"
            placeholder="Enter your full name"
          />
          {name && name.trim().length < 3 && (<p className="text-red-500 text-sm">Minimum 3 characters</p>)}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#8E8E93]">Teacher ID</label>
          <input 
            aria-required 
            type="text" 
            value={teacherId} 
            onChange={e=>setTeacherId(e.target.value)} 
            className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-[#1E1E24] dark:bg-white/5 dark:border-white/10 dark:text-white"
            placeholder="Enter your numeric ID"
          />
          {teacherId && !/^\d+$/.test(teacherId) && (<p className="text-red-500 text-sm">ID must be numeric</p>)}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#8E8E93]">State</label>
          <input 
            aria-label="Search states" 
            placeholder="Search state..." 
            value={query} 
            onChange={e=>setQuery(e.target.value)} 
            className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-[#1E1E24] dark:bg-white/5 dark:border-white/10 dark:text-white"
          />
          <div role="listbox" aria-label="Select state" className="max-h-48 overflow-auto rounded-xl border border-gray-100 bg-white p-2 dark:bg-[#2C2C32] dark:border-white/10">
            {filtered.length > 0 ? filtered.sort().map(s => (
              <button 
                key={s} 
                aria-selected={state===s} 
                onClick={()=>setState(s)} 
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-colors ${
                  state===s 
                    ? 'bg-[#1E1E24] text-white dark:bg-white dark:text-[#1E1E24]' 
                    : 'text-[#1E1E24] hover:bg-gray-50 dark:text-white dark:hover:bg-white/5'
                }`}
              >
                {s}
              </button>
            )) : (
              <p className="text-sm text-[#8E8E93] p-2 text-center">No states found</p>
            )}
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <button 
            disabled={!isValid} 
            onClick={continueNext} 
            className={`px-6 py-3 rounded-xl font-bold transition-all ${
              isValid 
                ? 'bg-[#1E1E24] text-white hover:bg-black hover:scale-[1.02] shadow-lg dark:bg-white dark:text-[#1E1E24]' 
                : 'bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-white/5 dark:text-white/20'
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

