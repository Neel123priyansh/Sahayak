import React, { useEffect, useState } from 'react'

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
    } catch {}
  }, [])

  const save = () => {
    try {
      localStorage.setItem('profile', JSON.stringify(profile))
    } catch {}
    setEditMode(false)
  }

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <section className="surface-card ios-shadow rounded-2xl p-6 flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 ios-shadow flex items-center justify-center text-white text-xl font-semibold">
          {profile.name?.[0] || 'U'}
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold">{profile.name}</h2>
          <p className="opacity-75 text-sm">{profile.role}</p>
        </div>
        {!editMode ? (
          <button className="ios-button px-3 py-2 rounded-xl bg-white/60 dark:bg-[#1C1C1E]/60 backdrop-blur-xl border border-black/10 dark:border-white/20" onClick={() => setEditMode(true)}>
            Edit
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <button className="ios-button px-3 py-2 rounded-xl bg-green-500 text-white" onClick={save}>Save</button>
            <button className="ios-button px-3 py-2 rounded-xl bg-white/60 dark:bg-[#1C1C1E]/60" onClick={() => setEditMode(false)}>Cancel</button>
          </div>
        )}
      </section>

      {/* Details Card */}
      <section className="surface-card ios-shadow rounded-2xl p-6 space-y-4">
        <h3 className="text-lg font-semibold">Profile Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-sm opacity-70">Display Name</span>
            <input
              type="text"
              className="mt-1 w-full px-3 py-2 rounded-xl border border-black/10 dark:border-white/20 bg-white/70 dark:bg-[#1C1C1E]/70 backdrop-blur-xl ios-button"
              value={profile.name}
              disabled={!editMode}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            />
          </label>
          <label className="block">
            <span className="text-sm opacity-70">Email</span>
            <input
              type="email"
              className="mt-1 w-full px-3 py-2 rounded-xl border border-black/10 dark:border-white/20 bg-white/70 dark:bg-[#1C1C1E]/70 backdrop-blur-xl ios-button"
              value={profile.email}
              disabled={!editMode}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            />
          </label>
          <label className="block">
            <span className="text-sm opacity-70">Daily Goal (minutes)</span>
            <input
              type="number"
              min="5"
              max="180"
              className="mt-1 w-full px-3 py-2 rounded-xl border border-black/10 dark:border-white/20 bg-white/70 dark:bg-[#1C1C1E]/70 backdrop-blur-xl ios-button"
              value={profile.dailyGoalMinutes}
              disabled={!editMode}
              onChange={(e) => setProfile({ ...profile, dailyGoalMinutes: Number(e.target.value) })}
            />
          </label>
        </div>
      </section>

      {/* Preferences Card */}
      <section className="surface-card ios-shadow rounded-2xl p-6 space-y-4">
        <h3 className="text-lg font-semibold">Preferences</h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Notifications</p>
            <p className="text-sm opacity-70">Receive reminders and tips</p>
          </div>
          <button className="ios-button px-3 py-2 rounded-xl bg-white/60 dark:bg-[#1C1C1E]/60 border border-black/10 dark:border-white/20" disabled>
            Coming soon
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Reduce Motion</p>
            <p className="text-sm opacity-70">Minimize background animations</p>
          </div>
          <button className="ios-button px-3 py-2 rounded-xl bg-white/60 dark:bg-[#1C1C1E]/60 border border-black/10 dark:border-white/20" disabled>
            Coming soon
          </button>
        </div>
      </section>
    </div>
  )
}

