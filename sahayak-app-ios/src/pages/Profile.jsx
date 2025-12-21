import React, { useEffect, useState } from 'react'
import { User, Mail, Clock, Bell, Zap, Edit2, Save, X, Shield } from 'lucide-react'

export default function Profile() {
  const [editMode, setEditMode] = useState(false)
  const [profile, setProfile] = useState({
    name: 'Shivani Bisht',
    role: '1st Class Mentor',
    email: 'shivani@example.com',
    dailyGoalMinutes: 20,
  })

  useEffect(() => {
    try {
      const stored = localStorage.getItem('profile')
      if (stored) setProfile(JSON.parse(stored))
    } catch { }
  }, [])

  const save = () => {
    try {
      localStorage.setItem('profile', JSON.stringify(profile))
    } catch { }
    setEditMode(false)
  }

  return (
    <div className="max-w-4xl mx-auto p-4 lg:p-8 space-y-8 font-sans text-[#1E1E24] dark:text-white">
      <header>
        <h1 className="text-4xl font-extrabold text-[#1E1E24] mb-2 dark:text-white">My Profile</h1>
        <p className="text-[#8E8E93] text-lg dark:text-gray-400">Manage your account settings and preferences</p>
      </header>

      {/* Header Card */}
      <div className="bento-card-purple p-8 rounded-[2rem] relative overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center text-white text-3xl font-bold shadow-xl">
            {profile.name?.[0] || 'U'}
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-3xl font-bold text-white mb-1">{profile.name}</h2>
            <p className="text-white/80 text-lg">{profile.role}</p>
          </div>
          {!editMode ? (
            <button
              onClick={() => setEditMode(true)}
              className="px-6 py-3 bg-white text-purple-600 rounded-xl font-bold hover:bg-white/90 transition-colors flex items-center gap-2"
            >
              <Edit2 size={18} />
              Edit Profile
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <button
                onClick={save}
                className="px-6 py-3 bg-white text-green-600 rounded-xl font-bold hover:bg-white/90 transition-colors flex items-center gap-2"
              >
                <Save size={18} />
                Save
              </button>
              <button
                onClick={() => setEditMode(false)}
                className="px-6 py-3 bg-white/20 text-white rounded-xl font-bold hover:bg-white/30 transition-colors flex items-center gap-2 backdrop-blur-md"
              >
                <X size={18} />
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Details */}
        <div className="bento-card p-6 space-y-6 dark:bg-[#1E1E24] dark:border dark:border-white/10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              <User size={20} />
            </div>
            <h3 className="text-xl font-bold text-[#1E1E24] dark:text-white">Personal Details</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-[#8E8E93] mb-1.5 dark:text-gray-400">Display Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border-none rounded-xl text-[#1E1E24] focus:ring-2 focus:ring-purple-500/20 disabled:opacity-60 disabled:cursor-not-allowed transition-all dark:bg-white/5 dark:text-white"
                  value={profile.name}
                  disabled={!editMode}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-[#8E8E93] mb-1.5 dark:text-gray-400">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="email"
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border-none rounded-xl text-[#1E1E24] focus:ring-2 focus:ring-purple-500/20 disabled:opacity-60 disabled:cursor-not-allowed transition-all dark:bg-white/5 dark:text-white"
                  value={profile.email}
                  disabled={!editMode}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#8E8E93] mb-1.5 dark:text-gray-400">Daily Goal (Minutes)</label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="number"
                  min="5"
                  max="180"
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border-none rounded-xl text-[#1E1E24] focus:ring-2 focus:ring-purple-500/20 disabled:opacity-60 disabled:cursor-not-allowed transition-all dark:bg-white/5 dark:text-white"
                  value={profile.dailyGoalMinutes}
                  disabled={!editMode}
                  onChange={(e) => setProfile({ ...profile, dailyGoalMinutes: Number(e.target.value) })}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="bento-card p-6 space-y-6 dark:bg-[#1E1E24] dark:border dark:border-white/10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
              <Zap size={20} />
            </div>
            <h3 className="text-xl font-bold text-[#1E1E24] dark:text-white">Preferences</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl dark:bg-white/5">
              <div className="flex items-center gap-3">
                <Bell size={20} className="text-gray-400" />
                <div>
                  <p className="font-bold text-[#1E1E24] dark:text-white">Notifications</p>
                  <p className="text-xs text-[#8E8E93] dark:text-gray-400">Reminders & tips</p>
                </div>
              </div>
              <span className="px-2 py-1 bg-gray-200 text-gray-500 text-xs font-bold rounded-lg uppercase tracking-wide dark:bg-white/10 dark:text-gray-400">Soon</span>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl dark:bg-white/5">
              <div className="flex items-center gap-3">
                <Shield size={20} className="text-gray-400" />
                <div>
                  <p className="font-bold text-[#1E1E24] dark:text-white">Privacy Mode</p>
                  <p className="text-xs text-[#8E8E93] dark:text-gray-400">Hide personal stats</p>
                </div>
              </div>
              <span className="px-2 py-1 bg-gray-200 text-gray-500 text-xs font-bold rounded-lg uppercase tracking-wide dark:bg-white/10 dark:text-gray-400">Soon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
