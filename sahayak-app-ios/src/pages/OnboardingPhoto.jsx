import React, { useEffect, useRef, useState } from 'react'

export default function OnboardingPhoto({ onNext }) {
  const [preview, setPreview] = useState(null)
  const fileRef = useRef()

  useEffect(() => { document.title = 'Onboarding · Profile Photo' }, [])

  const onFile = async (file) => {
    if (!file) return
    const img = await file.arrayBuffer()
    const blob = new Blob([img])
    const url = URL.createObjectURL(blob)
    setPreview(url)
    localStorage.setItem('ob.photo', url)
  }

  return (
    <div className="space-y-6" aria-label="Profile Photo">
      <h1 className="text-2xl font-semibold">Add your photo</h1>
      <section className="surface-card ios-shadow rounded-2xl p-6 flex flex-col items-center gap-4">
        <div className="w-[200px] h-[200px] rounded-full overflow-hidden border border-black/10 dark:border-white/20">
          {preview ? (
            <img src={preview} alt="Profile preview" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-black/5 dark:bg-white/5">Default avatar</div>
          )}
        </div>
        <div className="flex gap-3">
          <button onClick={() => fileRef.current?.click()} className="px-3 py-2 rounded-xl bg-white/60 dark:bg-[#1C1C1E]/60 border border-black/10 dark:border-white/20 ios-button">Choose from gallery</button>
          <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={e => onFile(e.target.files?.[0])} />
          <button className="px-3 py-2 rounded-xl bg-white/60 dark:bg-[#1C1C1E]/60 border border-black/10 dark:border-white/20 ios-button" disabled>Use camera (soon)</button>
        </div>
      </section>
      <div className="flex justify-end">
        <button onClick={onNext} className="px-4 py-2 rounded-xl bg-blue-500 text-white ios-button ios-shadow">Continue</button>
      </div>
    </div>
  )
}

