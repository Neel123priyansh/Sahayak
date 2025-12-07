import React, { useState } from 'react'
import { Home, BookOpen, BarChart3, User, Settings } from 'lucide-react'

const Navigation = ({ activeTab: propActiveTab, setActiveTab }) => {
  const [activeTab, setLocalActiveTab] = useState(propActiveTab || 'home')
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'stories', icon: BookOpen, label: 'Stories' },
    { id: 'progress', icon: BarChart3, label: 'Progress' },
    { id: 'profile', icon: User, label: 'Profile' },
    { id: 'settings', icon: Settings, label: 'Settings' }
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50">
      {/* iOS frosted background */}
      <div className="surface-card border-t backdrop-blur-xl">
        <div className="flex items-center justify-around px-4 py-3">
          {navItems.map((item, index) => {
            const isActive = activeTab === item.id
            return (
              <button
                key={item.id}
                onClick={() => {
                  setLocalActiveTab(item.id)
                  setActiveTab?.(item.id)
                }}
                className={`
                  relative flex flex-col items-center gap-1 px-3 py-2 rounded-material
                  transition-all duration-300 group
                  ${isActive 
                    ? 'text-primary-400' 
                    : 'text-surface-400 hover:text-surface-200'
                  }
                `}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Active indicator background (subtle) */}
                {isActive && (
                  <div className="absolute inset-0 bg-primary-500/10 rounded-material" />
                )}
                
                {/* Icon container with neumorphism */}
                <div className={`
                  relative w-8 h-8 flex items-center justify-center rounded-material
                  transition-all duration-300
                  ${isActive 
                    ? 'text-primary-400 ios-shadow' 
                    : 'group-hover:ios-shadow'
                  }
                `}>
                  <item.icon 
                    size={20} 
                    className={`transition-all duration-300 ${
                      isActive ? '' : ''
                    }`}
                  />
                </div>
                
                {/* Label */}
                <span className={`
                  text-label-small font-medium transition-all duration-300
                  ${isActive ? 'text-primary-400' : 'text-surface-400'}
                `}>
                  {item.label}
                </span>
                
                {/* Active indicator dot (subtle) */}
                {isActive && (
                  <div className="absolute -top-1 w-1 h-1 bg-primary-400 rounded-full" />
                )}
                
                {/* Ripple effect on tap */}
                <div className="absolute inset-0 rounded-material overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 rounded-material 
                                scale-0 group-active:scale-100 transition-transform 
                                duration-200 ease-out" />
                </div>
              </button>
            )
          })}
        </div>
        
        {/* Bottom safe area for mobile devices */}
        <div className="h-safe-bottom bg-transparent" />
      </div>
    </nav>
  )
}

export default Navigation
