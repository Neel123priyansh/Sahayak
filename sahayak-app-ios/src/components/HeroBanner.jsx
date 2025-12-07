import React from 'react'

export default function HeroBanner() {
  return (
    <div className="surface-card ios-shadow rounded-2xl overflow-hidden relative">
      <div
        className="h-40 sm:h-48 w-full bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200&auto=format&fit=crop')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <div className="absolute left-4 bottom-4 right-4">
        <div className="max-w-[75%]">
          <div className="text-white text-2xl sm:text-3xl font-bold leading-tight drop-shadow">
            Sahayak:
          </div>
          <div className="text-white text-xl sm:text-2xl font-semibold leading-tight drop-shadow">
            Simplifying Learning,
          </div>
          <div className="text-white text-xl sm:text-2xl font-semibold leading-tight drop-shadow">
            Amplifying Growth.
          </div>
        </div>
      </div>
    </div>
  )
}

