import React from 'react'
import { Star } from 'lucide-react'

const items = [
  { name: 'Jamie Khan', role: 'Parent', rating: 5, text: 'Sahayak helped my child stay on track with clear lessons and helpful prompts.' },
  { name: 'Maira Winters', role: 'Teacher', rating: 5, text: 'The journeys are easy to use and the progress view is perfect for planning.' },
  { name: 'Jenny Wilson', role: 'Student', rating: 5, text: 'I like the focused practice and the way topics are grouped to goals.' }
]

export default function Testimonials() {
  return (
    <section aria-label="Testimonials" className="space-y-4 animate-in">
      <h2 className="text-2xl font-bold">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((i) => (
          <div key={i.name} className="surface-card ios-shadow rounded-2xl p-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center font-semibold">{i.name[0]}</div>
              <div>
                <div className="text-sm font-semibold">{i.name}</div>
                <div className="text-xs opacity-70">{i.role}</div>
              </div>
            </div>
            <div className="flex items-center gap-1 accent-2">
              {Array.from({ length: i.rating }).map((_, idx) => (
                <Star key={idx} className="w-4 h-4" fill="currentColor" />
              ))}
            </div>
            <p className="text-sm opacity-80">{i.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
