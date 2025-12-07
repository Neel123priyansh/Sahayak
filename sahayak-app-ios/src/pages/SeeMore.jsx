import React from 'react'

const journeys = Array.from({ length: 12 }).map((_, i) => ({
  title: `Journey ${i + 1}`,
  image: `https://picsum.photos/seed/j${i}/400/240`
}))

export default function SeeMore() {
  return (
    <div className="p-4 space-y-4">
      <header className="surface-card ios-shadow px-4 py-3 rounded-2xl">
        <h1 className="text-lg font-semibold">Journeys</h1>
        <p className="text-sm opacity-70">Browse all learning journeys.</p>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {journeys.map((j, idx) => (
          <div key={idx} className="surface-card ios-shadow rounded-2xl overflow-hidden">
            <div className="h-24 bg-center bg-cover" style={{ backgroundImage: `url(${j.image})` }} />
            <div className="p-2 text-sm opacity-80">{j.title}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

