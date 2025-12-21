import React from 'react'

export default function Services() {
  const services = [
    { title: 'Design', desc: 'UI, UX, and brand design for web.' },
    { title: 'Development', desc: 'Modern frontend engineering and integration.' },
    { title: 'Consulting', desc: 'Architecture and performance optimization.' }
  ]
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {services.map((s) => (
          <div key={s.title} className="surface-card ios-shadow rounded-2xl p-6 space-y-2">
            <div className="text-lg font-semibold">{s.title}</div>
            <p className="text-sm opacity-80">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
