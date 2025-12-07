import React, { useState } from 'react'

const isAllowedNotebookUrl = (url) => {
  try {
    const u = new URL(url)
    return [
      'colab.research.google.com',
      'drive.google.com',
      'github.com'
    ].some((host) => u.host.includes(host))
  } catch (e) {
    return false
  }
}

export default function GoogleNotebookEmbed({ initialUrl }) {
  const [url, setUrl] = useState(initialUrl || '')
  const valid = url && isAllowedNotebookUrl(url)

  return (
    <div className="space-y-4">
      <div className="surface-card ios-shadow p-4">
        <label className="block text-sm opacity-70 mb-2">Paste a public Google Colab or Drive notebook URL</label>
        <div className="flex gap-2">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://colab.research.google.com/drive/XXXXXXXXXXXX"
            className="flex-1 px-3 py-2 rounded-xl bg-white/60 dark:bg-[#1C1C1E]/60 backdrop-blur-xl border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
          />
          <button
            onClick={() => setUrl('https://colab.research.google.com/github/google/colab-notebooks/blob/master/colabtools/google-colab-demo.ipynb')}
            className="px-3 py-2 rounded-xl bg-blue-500 text-white ios-button"
          >
            Load Demo
          </button>
        </div>
        <p className="mt-2 text-xs opacity-60">Make sure sharing is set to “Anyone with the link can view” for Drive notebooks.</p>
      </div>

      {valid ? (
        <div className="surface-card ios-shadow p-2">
          <iframe
            title="Google Notebook"
            src={url}
            className="w-full h-[70vh] rounded-xl"
            sandbox="allow-forms allow-scripts allow-same-origin allow-popups"
          />
        </div>
      ) : (
        <div className="surface-card ios-shadow p-4">
          <p className="opacity-70 text-sm">Enter a valid Google Colab or Drive notebook URL to preview it here.</p>
          <ul className="list-disc ml-6 mt-2 text-sm opacity-70">
            <li>Colab: https://colab.research.google.com/drive/&lt;id&gt;</li>
            <li>GitHub Colab: https://colab.research.google.com/github/&lt;repo&gt;/blob/&lt;branch&gt;/&lt;path&gt;.ipynb</li>
          </ul>
        </div>
      )}
    </div>
  )
}

