import React from 'react'
import { Users, School, MapPin } from 'lucide-react'

export default function Stats() {
  return (
    <section aria-label="Stats" className="space-y-6 animate-in">
      <div className="surface-card ios-shadow rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-6 md:p-8 flex flex-col justify-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">Why Choose Our Services</h2>
            <p className="text-sm md:text-base opacity-80">Sahayak supports teachers and students with guided journeys, timely assistance, and trackable progress aligned to goals.</p>
            <div className="grid grid-cols-3 gap-3 mt-2">
              <div className="rounded-2xl p-4 bg-accent-10">
                <div className="text-2xl font-bold accent">3k</div>
                <div className="text-xs opacity-80">Teachers</div>
              </div>
              <div className="rounded-2xl p-4 bg-accent-2-10">
                <div className="text-2xl font-bold accent-2">300+</div>
                <div className="text-xs opacity-80">Schools</div>
              </div>
              <div className="rounded-2xl p-4 bg-black/5">
                <div className="text-2xl font-bold">48+</div>
                <div className="text-xs opacity-80">Districts</div>
              </div>
            </div>
          </div>
          <div
            className="h-72 md:h-full w-full bg-center bg-cover"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1520975922323-7d469a1363ae?q=80&w=1200&auto=format&fit=crop')" }}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="surface-card ios-shadow rounded-2xl p-6 space-y-2">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 accent" />
            <div className="text-lg font-semibold">Teacher Support</div>
          </div>
          <p className="text-sm opacity-80">Reduce disruptions with quick resources and guided practice.</p>
        </div>
        <div className="surface-card ios-shadow rounded-2xl p-6 space-y-2">
          <div className="flex items-center gap-2">
            <School className="w-5 h-5 accent-2" />
            <div className="text-lg font-semibold">Better Pathways</div>
          </div>
          <p className="text-sm opacity-80">Journeys help learners stay engaged and meet targets.</p>
        </div>
        <div className="surface-card ios-shadow rounded-2xl p-6 space-y-2">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <div className="text-lg font-semibold">Aligned Goals</div>
          </div>
          <p className="text-sm opacity-80">Track progress and adapt lessons to needs across classes.</p>
        </div>
      </div>
    </section>
  )
}
