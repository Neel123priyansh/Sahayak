import React from 'react'
import { Target, BarChart3, Brain } from 'lucide-react'

const items = [
  { title: 'Personalized Journeys', desc: 'Curated topics tailored to goals.', Icon: Target },
  { title: 'Progress Tracking', desc: 'Visualize completed, ongoing, and upcoming lessons.', Icon: BarChart3 },
  { title: 'Study Mode', desc: 'Focused practice with AI assistance.', Icon: Brain },
]

export default function Features() {
  return (
    <section aria-label="Features" className="space-y-4 animate-in">
      <h2 className="section-title text-xl sm:text-2xl font-bold">Why Sahayak</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((i) => {
          const Icon = i.Icon
          return (
            <div key={i.title} className="surface-card ios-shadow rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-accent-10">
                  <Icon className="w-5 h-5 accent" />
                </div>
                <div className="text-lg sm:text-xl font-semibold">{i.title}</div>
              </div>
              <p className="text-sm sm:text-base opacity-80">{i.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
