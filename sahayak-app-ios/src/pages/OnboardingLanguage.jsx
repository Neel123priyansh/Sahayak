import React, { useEffect, useState } from 'react'

const REGIONAL = {
  North: ['Hindi','Punjabi','Kashmiri'],
  West: ['Marathi','Gujarati','Konkani'],
  South: ['Tamil','Telugu','Kannada','Malayalam'],
  East: ['Bengali','Odia','Assamese'],
  Central: ['Chhattisgarhi','Bundeli']
}

export default function OnboardingLanguage({ onNext }) {
  const [selected, setSelected] = useState(['English','Hindi'])
  useEffect(() => { document.title = 'Onboarding · Languages' }, [])

  const toggle = (lang) => {
    setSelected(prev => prev.includes(lang) ? prev.filter(l => l!==lang) : (prev.length<5 ? [...prev, lang] : prev))
  }

  const valid = selected.length >= 3
  const save = () => { localStorage.setItem('ob.langs', JSON.stringify(selected)); onNext?.() }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Choose your languages</h1>
      <div className="grid gap-4">
        {Object.entries(REGIONAL).map(([region, langs]) => (
          <section key={region} className="surface-card ios-shadow rounded-2xl p-4">
            <h3 className="font-medium mb-2">{region}</h3>
            <div className="grid grid-cols-2 gap-2">
              {langs.map(l => (
                <button key={l} onClick={()=>toggle(l)} className={`px-3 py-2 rounded-xl border ${selected.includes(l)?'bg-blue-500 text-white ios-shadow border-blue-500':'border-black/10 dark:border-white/20 bg-white/60 dark:bg-[#1C1C1E]/60'}`}>{l}</button>
              ))}
            </div>
          </section>
        ))}
      </div>
      <div className="flex justify-end">
        <button disabled={!valid} onClick={save} className={`px-4 py-2 rounded-xl ${valid?'bg-blue-500 text-white ios-button ios-shadow':'bg-black/10 dark:bg-white/10 cursor-not-allowed'}`}>Save</button>
      </div>
    </div>
  )
}

