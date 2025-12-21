import React from 'react'

export default function About() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">About</h1>
      <p className="text-sm opacity-80">
        This is a fresh website scaffold. Replace this content with your brand story, mission, and team.
      </p>
      <div className="surface-card ios-shadow rounded-2xl p-6 space-y-2">
        <div className="text-lg font-semibold">What’s included</div>
        <ul className="list-disc ml-6 text-sm opacity-80 space-y-1">
          <li>Top navigation</li>
          <li>Homepage, About, Services, Contact pages</li>
          <li>Responsive layout and surfaces</li>
        </ul>
      </div>
    </div>
  )
}
