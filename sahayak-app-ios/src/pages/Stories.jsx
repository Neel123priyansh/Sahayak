import React from 'react'
import GoogleNotebookEmbed from '../components/GoogleNotebookEmbed'
import NotebookLMIntegration from '../components/NotebookLMIntegration'
import NotebookLMList from '../components/NotebookLMList'

export default function Stories() {
  return (
    <div className="p-4 space-y-4">
      <header className="surface-card ios-shadow px-4 py-3 rounded-2xl">
        <h1 className="text-lg font-semibold">Stories & Notebooks</h1>
        <p className="text-sm opacity-70">Integrate Google Colab notebooks into your learning stories.</p>
      </header>

      <GoogleNotebookEmbed />

      <NotebookLMIntegration />
      <NotebookLMList />
    </div>
  )
}
