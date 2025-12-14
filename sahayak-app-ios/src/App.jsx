import React, { useEffect, useState } from 'react'
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'
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
import SplashOverlay from './components/SplashOverlay.jsx'
import OnboardingBasic from './pages/OnboardingBasic.jsx'
import OnboardingPhoto from './pages/OnboardingPhoto.jsx'
import OnboardingLanguage from './pages/OnboardingLanguage.jsx'
import OnboardingClass from './pages/OnboardingClass.jsx'
import EntryScreen from './pages/EntryScreen.jsx'
import StudyMode from './pages/StudyMode.jsx'
import VideoGeneration from './pages/VideoGeneration.jsx'

function Training() { return <div className="p-6"><h1 className="text-2xl font-semibold">Training</h1></div> }

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [theme, setTheme] = useState(null)
  const [showSplash, setShowSplash] = useState(true)
  const location = useLocation()
  const nav = useNavigate()

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

  // Decide initial navigation based on onboarding and last mode
  useEffect(() => {
    const onboarded = localStorage.getItem('onboardingComplete') === 'true'
    if (!onboarded) {
      if (!location.pathname.startsWith('/onboarding')) nav('/onboarding/basic')
    } else {
      // Persisted entry screen after onboarding
      const lastMode = localStorage.getItem('lastMode') || 'teach'
      if (location.pathname === '/') {
        nav('/entry', { replace: true })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const hideChrome = location.pathname.startsWith('/onboarding') || location.pathname.startsWith('/entry')
  const quickPick = (mode) => { localStorage.setItem('lastMode', mode); nav(mode==='teach' ? '/' : '/study') }

  return (
    <div className="min-h-screen app-bg">
      <VideoBackground />
      {showSplash && (
        <SplashOverlay
          duration={2500}
          src="/@fs/C:/Users/b2c2b/OCT/sahayak-mobile/assets/splash-icon.png"
          onDone={() => setShowSplash(false)}
        />
      )}
      {/* Header */}
      <header className="fixed top-4 right-4 z-controls flex items-center gap-2">
        <button onClick={() => quickPick('teach')} className="ios-button px-3 py-2 rounded-xl bg-white/60 dark:bg-[#1C1C1E]/60 backdrop-blur-xl border border-black/10 dark:border-white/20 ios-shadow" title="Teach Mode">Teach</button>
        <button onClick={() => quickPick('study')} className="ios-button px-3 py-2 rounded-xl bg-white/60 dark:bg-[#1C1C1E]/60 backdrop-blur-xl border border-black/10 dark:border-white/20 ios-shadow" title="Study Mode">Study</button>
        <button onClick={toggleTheme} className="ios-button px-3 py-2 rounded-xl bg-white/60 dark:bg-[#1C1C1E]/60 backdrop-blur-xl border border-black/10 dark:border-white/20 ios-shadow" title="Toggle theme">
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
          {/* Entry and Study */}
          <Route path="/entry" element={<EntryScreen />} />
          <Route path="/study" element={<StudyMode />} />
          <Route path="/video" element={<VideoGeneration />} />
          {/* Onboarding flow */}
          <Route path="/onboarding/basic" element={<OnboardingBasic onNext={() => nav('/onboarding/photo')} />} />
          <Route path="/onboarding/photo" element={<OnboardingPhoto onNext={() => nav('/onboarding/language')} />} />
          <Route path="/onboarding/language" element={<OnboardingLanguage onNext={() => nav('/onboarding/class')} />} />
          <Route path="/onboarding/class" element={<OnboardingClass onConfirm={() => nav('/entry')} />} />
        </Routes>
      </main>
      {!hideChrome && (
        <>
          <Navigation />
          <FloatingChatButton onClick={() => setIsChatOpen(true)} />
          <AIChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
        </>
      )}
    </div>
  )
}
