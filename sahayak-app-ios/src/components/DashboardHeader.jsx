import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Bell, Settings, LayoutDashboard, BookOpen, BarChart2, Video, User, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext.jsx'

export default function DashboardHeader() {
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
    { icon: BookOpen, label: 'Stories', href: '/stories' },
    { icon: BarChart2, label: 'Progress', href: '/progress' },
    { icon: Video, label: 'Video', href: '/video' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="bg-[#1E1E24] dark:bg-black rounded-full px-6 py-3 flex items-center justify-between shadow-lg text-white mx-auto max-w-[1600px] border border-white/5">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-white transform rotate-45" />
          </div>
          <span className="font-bold text-xl tracking-tight">Sahayak</span>
        </div>

        {/* Center: Navigation Pills */}
        <nav className="hidden md:flex items-center bg-[#2C2C32] dark:bg-white/10 rounded-full p-1.5 gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href
            const Icon = item.icon
            
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'bg-[#1E1E24] text-white shadow-md dark:bg-black' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon size={18} />
                {isActive && <span className="font-medium text-sm">{item.label}</span>}
              </Link>
            )
          })}
        </nav>

        {/* Right: User Profile */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex flex-col items-end">
            <span className="text-sm font-medium">Hello, Jacob</span>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <div className="w-2 h-3 text-purple-400">⚡</div>
              <span>Progress: 76%</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <Link to="/profile" className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden border-2 border-gray-600">
               <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jacob" alt="Profile" />
            </Link>
            <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              <Bell size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
