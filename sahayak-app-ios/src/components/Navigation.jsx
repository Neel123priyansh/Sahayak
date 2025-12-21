import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navigation() {
  const location = useLocation()
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Stories', href: '/stories' },
    { label: 'Progress', href: '/progress' },
    { label: 'Study', href: '/study' },
    { label: 'Video', href: '/video' },
    { label: 'Profile', href: '/profile' }
  ]
  return (
    <nav className="fixed top-0 left-0 right-0 z-controls" role="navigation" aria-label="Main">
      <div className="surface-card ios-shadow px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-lg font-bold accent" aria-label="Sahayak Home">Sahayak</Link>
          <div className="flex items-center gap-1">
           {navItems.map((item) => {
             const active = location.pathname === item.href
             return (
               <Link
                 key={item.href}
                 to={item.href}
                aria-current={active ? 'page' : undefined}
                className={`px-3 py-2 rounded-xl ios-button transition-colors ${active ? 'bg-black/5 dark:bg-white/10 underline underline-offset-4' : 'hover:bg-black/5 dark:hover:bg-white/10'}`}
              >
                {item.label}
              </Link>
             )
           })}
          </div>
          <Link to="/study" className="btn btn-secondary">Get Started</Link>
        </div>
      </div>
    </nav>
  )
}
