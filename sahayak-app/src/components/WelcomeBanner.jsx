import React from 'react'
import { Bell, Search, Sun, Settings, Star, Trophy, BookOpen, Calendar, Clock, GraduationCap, Award, Target } from 'lucide-react'

const WelcomeBanner = ({ user }) => {
  // Minimal Progress Ring Component
  const MinimalProgress = ({ percentage, size = 60, strokeWidth = 3 }) => {
    const radius = (size - strokeWidth) / 2
    const circumference = radius * 2 * Math.PI
    const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`

    return (
      <div className="relative" style={{ width: size, height: size }}>
        <svg className="transform -rotate-90" width={size} height={size}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(148, 163, 184, 0.2)"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(59, 130, 246, 0.8)"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeLinecap="round"
            className="transition-all duration-700 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-semibold text-slate-700">{percentage}%</span>
        </div>
      </div>
    )
  }

  return (
    <div className="relative backdrop-blur-xl bg-white/40 border border-white/20 rounded-3xl p-8 shadow-xl shadow-black/5 overflow-hidden mb-8 group hover:bg-white/50 transition-all duration-500">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
      
      {/* Minimal floating elements */}
      <div className="absolute top-6 right-6 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse" />
      <div className="absolute bottom-8 left-8 w-1 h-1 bg-indigo-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10">
        {/* Header with Profile and Actions */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center gap-6">
            {/* Minimal Profile Section */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">
                    {user?.name?.charAt(0) || 'U'}
                  </span>
                </div>
                <div className="absolute -bottom-1 -right-1">
                  <MinimalProgress percentage={85} size={24} strokeWidth={2} />
                </div>
              </div>
              
              <div>
                <h1 className="text-2xl font-bold text-slate-800 mb-1">
                  Welcome back, {user?.name || 'User'}!
                </h1>
                <p className="text-slate-600 text-sm">
                  Ready to inspire minds today?
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="px-3 py-1 bg-blue-100/80 text-blue-700 text-xs font-medium rounded-full">
                    Teacher
                  </div>
                  <div className="px-3 py-1 bg-indigo-100/80 text-indigo-700 text-xs font-medium rounded-full">
                    Mathematics
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Minimal Action Buttons */}
          <div className="flex items-center gap-2">
            {[Bell, Search, Sun, Settings].map((Icon, index) => (
              <button 
                key={index}
                className="p-3 rounded-2xl bg-white/60 hover:bg-white/80 border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-black/5 backdrop-blur-sm group"
              >
                <Icon size={18} className="text-slate-600 group-hover:text-slate-800 transition-colors duration-200" />
              </button>
            ))}
          </div>
        </div>
        
        {/* Minimal Featured Content */}
        <div className="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/30 hover:border-blue-300/50 transition-all duration-300 hover:shadow-lg shadow-black/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                <Trophy className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-slate-800 font-bold text-lg mb-1">Mathematics Olympiad</h3>
                <p className="text-slate-600 text-sm mb-2">Prepare students for the upcoming competition</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-slate-500" />
                    <span className="text-xs text-slate-600">Due in 5 days</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-slate-500" />
                    <span className="text-xs text-slate-600">2 hours left</span>
                  </div>
                </div>
              </div>
            </div>
            
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
              Continue
            </button>
          </div>
        </div>

        {/* Minimal Stats Row */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          {[
            { label: 'Students', value: '156', icon: GraduationCap, color: 'blue' },
            { label: 'Lessons', value: '24', icon: BookOpen, color: 'indigo' },
            { label: 'Progress', value: '87%', icon: Target, color: 'purple' },
            { label: 'Awards', value: '12', icon: Award, color: 'amber' }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`w-10 h-10 rounded-xl bg-${stat.color}-100/80 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-200`}>
                <stat.icon className={`w-5 h-5 text-${stat.color}-600`} />
              </div>
              <div className="text-lg font-bold text-slate-800">{stat.value}</div>
              <div className="text-xs text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WelcomeBanner