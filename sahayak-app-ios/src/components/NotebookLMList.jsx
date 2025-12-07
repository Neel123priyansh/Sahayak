import React, { useEffect, useState } from 'react'

const STORAGE_KEY = 'notebooklm_links'

export default function NotebookLMList() {
  const [links, setLinks] = useState([])

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setLinks(JSON.parse(raw))
    } catch (e) {
      // ignore
    }
  }, [])

  const removeLink = (idx) => {
    const next = links.filter((_, i) => i !== idx)
    setLinks(next)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  }

  if (!links.length) return (
    <div className="surface-card ios-shadow p-4 rounded-2xl">
      <div className="text-sm opacity-70">No saved NotebookLM links yet.</div>
    </div>
  )

  return (
    <div className="surface-card ios-shadow p-4 rounded-2xl space-y-2">
      <div className="text-sm font-semibold">Saved NotebookLM Links</div>
      <ul className="space-y-2">
        {links.map((url, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <a href={url} target="_blank" rel="noopener noreferrer" className="flex-1 text-blue-600 underline break-all">{url}</a>
            <button onClick={() => removeLink(idx)} className="px-2 py-1 rounded-lg bg-white/70 dark:bg-[#1C1C1E]/70 border border-black/10 dark:border-white/10">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

