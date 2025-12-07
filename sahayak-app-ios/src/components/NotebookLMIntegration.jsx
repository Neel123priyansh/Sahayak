import React, { useState } from 'react'

export default function NotebookLMIntegration() {
  const [docUrl, setDocUrl] = useState('')
  const STORAGE_KEY = 'notebooklm_links'

  const openNotebookLM = () => {
    window.open('https://notebooklm.google.com/', '_blank', 'noopener,noreferrer')
  }

  const openDoc = () => {
    if (!docUrl) return
    window.open(docUrl, '_blank', 'noopener,noreferrer')
  }

  const saveDoc = () => {
    if (!docUrl) return
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      const arr = raw ? JSON.parse(raw) : []
      if (!arr.includes(docUrl)) arr.push(docUrl)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(arr))
    } catch (e) {
      // ignore
    }
  }

  return (
    <div className="surface-card ios-shadow p-4 rounded-2xl space-y-3">
      <div>
        <h2 className="text-lg font-semibold">NotebookLM</h2>
        <p className="text-sm opacity-70">NotebookLM requires Google sign-in and cannot be embedded directly. Use the quick launch below.</p>
      </div>

      <div className="flex gap-2">
        <button onClick={openNotebookLM} className="px-4 py-2 rounded-xl bg-blue-500 text-white ios-button">Open NotebookLM</button>
        <input
          type="url"
          value={docUrl}
          onChange={(e) => setDocUrl(e.target.value)}
          placeholder="Paste NotebookLM doc link (optional)"
          className="flex-1 px-3 py-2 rounded-xl bg-white/60 dark:bg-[#1C1C1E]/60 backdrop-blur-xl border border-black/10 dark:border-white/10 focus:outline-none"
        />
        <button onClick={openDoc} className="px-4 py-2 rounded-xl bg-white/70 dark:bg-[#1C1C1E]/70 border border-black/10 dark:border-white/10">Open Doc</button>
        <button onClick={saveDoc} className="px-4 py-2 rounded-xl bg-green-500 text-white">Save</button>
      </div>

      <p className="text-xs opacity-60">Tip: After opening NotebookLM, you can create or access your notebooks. If you paste a specific notebook link, we’ll open it in a new tab.</p>
    </div>
  )
}
