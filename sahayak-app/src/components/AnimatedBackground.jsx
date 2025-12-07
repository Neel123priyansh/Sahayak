import React, { useEffect, useState } from 'react'

const AnimatedBackground = ({ children, variant = 'default' }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const getBackgroundStyle = () => {
    switch (variant) {
      case 'warm': {
        const themeAttr = document.documentElement.getAttribute('data-theme')
        const isDark = themeAttr === 'dark'
        return {
          background: `
            radial-gradient(120% 120% at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(255, 177, 66, 0.10) 0%, 
              rgba(255, 177, 66, 0.04) 35%, 
              transparent 70%),
            radial-gradient(80% 80% at 20% 90%, 
              rgba(255, 105, 97, 0.08) 0%, 
              rgba(255, 105, 97, 0.03) 40%, 
              transparent 70%),
            linear-gradient(135deg, 
              ${isDark ? '#121214 0%, #18181c 45%, #0e0e12 100%' : '#fff5eb 0%, #fff0e6 45%, #fff5eb 100%'}
            )
          `
        }
      }
      case 'neo':
        return {
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(17, 24, 39, 0.03) 0%, 
              rgba(31, 41, 55, 0.02) 35%, 
              transparent 55%),
            linear-gradient(135deg, 
              rgba(248, 250, 252, 1) 0%, 
              rgba(241, 245, 249, 1) 50%, 
              rgba(248, 250, 252, 1) 100%)
          `
        }
      case 'gradient':
        return {
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(107, 114, 128, 0.05) 0%, 
              rgba(156, 163, 175, 0.03) 25%, 
              transparent 50%),
            linear-gradient(135deg, 
              rgba(249, 250, 251, 1) 0%, 
              rgba(243, 244, 246, 1) 50%, 
              rgba(249, 250, 251, 1) 100%)
          `
        }
      case 'particles':
        return {
          background: `
            radial-gradient(circle at 20% 80%, rgba(156, 163, 175, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(107, 114, 128, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(75, 85, 99, 0.04) 0%, transparent 50%),
            linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)
          `
        }
      case 'mesh':
        return {
          background: `
            conic-gradient(from ${mousePosition.x}deg at 50% 50%, 
              rgba(107, 114, 128, 0.03) 0deg, 
              rgba(156, 163, 175, 0.02) 120deg, 
              rgba(75, 85, 99, 0.04) 240deg, 
              rgba(107, 114, 128, 0.03) 360deg),
            linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)
          `
        }
      default:
        return {
          background: `
            linear-gradient(135deg, 
              rgba(249, 250, 251, 1) 0%, 
              rgba(243, 244, 246, 1) 50%, 
              rgba(249, 250, 251, 1) 100%)
          `
        }
    }
  }

  return (
    <div 
      className="relative min-h-screen overflow-hidden transition-all duration-1000 ease-out"
      style={getBackgroundStyle()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle Animated Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 rounded-full opacity-5 blur-3xl animate-float"
          style={{
            background: 'linear-gradient(45deg, #e5e7eb, #d1d5db)',
            left: `${20 + mousePosition.x * 0.02}%`,
            top: `${10 + mousePosition.y * 0.02}%`,
            transform: `translate(-50%, -50%) scale(${isHovered ? 1.05 : 1})`,
            transition: 'transform 1.2s ease-out'
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full opacity-3 blur-2xl animate-float-delayed"
          style={{
            background: 'linear-gradient(45deg, #f3f4f6, #e5e7eb)',
            right: `${15 + mousePosition.x * 0.01}%`,
            bottom: `${20 + mousePosition.y * 0.01}%`,
            transform: `translate(50%, 50%) scale(${isHovered ? 1.03 : 1})`,
            transition: 'transform 1.0s ease-out'
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full opacity-2 blur-3xl animate-pulse-slow"
          style={{
            background: 'linear-gradient(45deg, #d1d5db, #9ca3af)',
            left: `${60 + mousePosition.x * 0.015}%`,
            top: `${70 + mousePosition.y * 0.015}%`,
            transform: `translate(-50%, -50%) scale(${isHovered ? 1.02 : 1})`,
            transition: 'transform 1.5s ease-out'
          }}
        />
      </div>

      {/* Minimal Grid Pattern */}
      {variant !== 'neo' && (
        <div 
          className="absolute inset-0 opacity-2"
          style={{
            backgroundImage: `
              linear-gradient(rgba(107, 114, 128, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(107, 114, 128, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`,
            transition: 'transform 0.8s ease-out'
          }}
        />
      )}

      {/* Subtle Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-gray-400 rounded-full opacity-10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 25}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Subtle Gradient/Noise Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: variant === 'neo'
            ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.12) 70%)`
            : `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, transparent 0%, rgba(249, 250, 251, 0.1) 80%)`,
          transition: 'background 0.8s ease-out'
        }}
      />
      {variant === 'neo' && (
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27160%27 height=%27160%27 viewBox=%270 0 160 160%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence baseFrequency=%270.9%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E")',
            mixBlendMode: 'multiply'
          }}
        />
      )}
    </div>
  )
}

export default AnimatedBackground
