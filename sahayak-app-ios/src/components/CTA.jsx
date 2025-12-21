import React from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function CTA() {
  return (
    <section aria-label="CTA" className="animate-in">
      <div className="rounded-2xl overflow-hidden ios-shadow">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 surface-card">
            <div className="text-sm font-semibold accent-2">Get in Touch</div>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">Join our community of school partners</h2>
            <p className="text-sm md:text-base opacity-80 mt-3">Connect with Sahayak to bring guided journeys and AI support to classrooms. Explore how it fits your goals.</p>
            <div className="mt-6 flex items-center gap-3">
              <a href="/study" className="btn btn-primary">Start studying</a>
              <a href="/profile" className="btn btn-secondary">Contact</a>
            </div>
          </div>
          <div className="relative bg-accent/15 flex items-center justify-center p-8">
            <ArrowUpRight className="w-14 h-14 accent" />
          </div>
        </div>
      </div>
    </section>
  )
}

