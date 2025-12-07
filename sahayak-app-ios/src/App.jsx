import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Navigation from './components/Navigation.jsx'
import FloatingChatButton from './components/FloatingChatButton.jsx'
import AIChat from './components/AIChat.jsx'
import VideoBackground from './components/VideoBackground.jsx'
import Home from './pages/Home.jsx'
import Stories from './pages/Stories.jsx'
import SeeMore from './pages/SeeMore.jsx'
import Progress from './pages/Progress.jsx'
import SubjectProgress from './pages/SubjectProgress.jsx'
import Profile from './pages/Profile.jsx'

function Training() { return <div className="p-6"><h1 className="text-2xl font-semibold">Training</h1></div> }

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [theme, setTheme] = useState(null)

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const stored = localStorage.getItem('theme')
    let initial = stored
    if (!initial) {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      initial = prefersDark ? 'dark' : 'light'
    }
    setTheme(initial)
  }, [])

  // Apply theme to document
  useEffect(() => {
    if (!theme) return
    document.documentElement.setAttribute('data-theme', theme)
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
  }

  return (
    <div className="min-h-screen app-bg">
      <VideoBackground />
      {/* Header */}
      <header className="fixed top-4 right-4 z-controls">
        <button onClick={toggleTheme} className="ios-button px-3 py-2 rounded-xl bg-white/60 dark:bg-[#1C1C1E]/60 backdrop-blur-xl border border-black/10 dark:border-white/20 ios-shadow">
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </header>

      {/* Content surface */}
      <main className="surface-card ios-shadow mx-4 my-20 p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/training" element={<Training />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/progress/:subject" element={<SubjectProgress />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/see-more" element={<SeeMore />} />
        </Routes>
      </main>

      <Navigation />
      <FloatingChatButton onClick={() => setIsChatOpen(true)} />
      <AIChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  )
}
