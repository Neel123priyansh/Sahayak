import React, { useState, useEffect } from 'react'
import { Home, BookOpen, BarChart3, User, Settings } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export default function Navigation({ activeTab: propActiveTab, setActiveTab }) {
  const location = useLocation()
  const [activeTab, setLocalActiveTab] = useState(propActiveTab || 'home')
  useEffect(() => {
    const path = location.pathname
    if (path.startsWith('/stories')) setLocalActiveTab('stories')
    else if (path.startsWith('/progress')) setLocalActiveTab('progress')
    else if (path.startsWith('/profile')) setLocalActiveTab('profile')
    else setLocalActiveTab('home')
  }, [location.pathname])
  const navItems = [
    { id: 'home', icon: Home, label: 'Home', href: '/' },
    { id: 'stories', icon: BookOpen, label: 'Stories', href: '/stories' },
    { id: 'progress', icon: BarChart3, label: 'Progress', href: '/progress' },
    { id: 'profile', icon: User, label: 'Profile', href: '/profile' },
    { id: 'settings', icon: Settings, label: 'Settings', href: '#' }
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-controls">
      <div className="surface-card backdrop-blur-xl">
        <div className="flex items-center justify-around px-4 py-3">
          {navItems.map((item) => {
            const isActive = activeTab === item.id
            const Icon = item.icon
            return (
              <Link
                key={item.id}
                to={item.href}
                onClick={() => { setLocalActiveTab(item.id); setActiveTab?.(item.id) }}
                className={`relative flex flex-col items-center gap-1 px-3 py-2 rounded-xl ios-button ${isActive ? 'text-blue-500' : 'opacity-80 hover:opacity-100'}`}
              >
                {isActive && <div className="absolute inset-0 bg-blue-500/10 rounded-xl" />}
                <div className={`relative w-8 h-8 flex items-center justify-center rounded-xl ${isActive ? 'ios-shadow' : ''}`}>
                  <Icon size={20} />
                </div>
                <span className={`text-xs ${isActive ? 'text-blue-500' : ''}`}>{item.label}</span>
              </Link>
            )
          })}
        </div>
        <div className="h-6" />
      </div>
    </nav>
  )
}
