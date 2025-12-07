import React from 'react'

export default function VideoBackground({ src = '/bg.mp4', overlay = true }) {
  return (
    <div className="vb-root">
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="vb-video"
      />
      <div className="vb-overlay-rotating" />
      {overlay && <div className="vb-vignette" />}
    </div>
  )
}
