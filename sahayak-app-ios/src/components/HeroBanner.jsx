import React from 'react'

export default function HeroBanner() {
  return (
    <section aria-label="Hero" className="surface-card ios-shadow rounded-2xl overflow-hidden relative">
      <div
        className="h-48 sm:h-64 w-full bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200&auto=format&fit=crop')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <div className="absolute left-6 bottom-6 right-6 animate-in">
        <h1 className="hero-title text-white font-bold leading-tight drop-shadow scribble">Sahayak</h1>
        <p className="hero-subtitle text-white/90 font-medium leading-tight drop-shadow">Simplifying learning. Amplifying growth.</p>
        <div className="mt-3">
          <a href="/study" className="btn btn-secondary">Start studying</a>
        </div>
      </div>
    </section>
  )
}
