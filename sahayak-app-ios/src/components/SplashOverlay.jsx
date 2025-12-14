import React, { useEffect, useState } from 'react'

export default function SplashOverlay({ onDone, duration = 2500, src = '/brand/splash-logo.png' }) {
  const [useImage, setUseImage] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => onDone?.(), duration)
    return () => clearTimeout(t)
  }, [onDone, duration])

  return (
    <div role="dialog" aria-label="Splash" className="fixed inset-0 z-modal flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative w-[240px] h-[240px] flex items-center justify-center">
        <div className="splash-backlight" aria-hidden="true" />
        {useImage ? (
          <img
            src={src}
            alt="Sahayak logo"
            className="splash-logo-img"
            onError={() => setUseImage(false)}
          />
        ) : (
          <div aria-hidden="true" />
        )}
      </div>
    </div>
  )
}
