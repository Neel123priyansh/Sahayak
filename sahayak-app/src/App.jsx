import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Stories from './pages/Stories'
import Training from './pages/Training'
import Progress from './pages/Progress'
import Profile from './pages/Profile'
import LoginSelector from './components/LoginSelector'
import Navigation from './components/Navigation'
import AIChat from './components/AIChat'
import FloatingChatButton from './components/FloatingChatButton'
import AnimatedBackground from './components/AnimatedBackground'

function App() {
  const [user, setUser] = useState(null)
  const [isChatOpen, setIsChatOpen] = useState(false)

  const handleLogin = (userData) => {
    setUser(userData)
  }

  const handleLogout = () => {
    setUser(null)
  }

  // If user is not logged in, show login selector
  if (!user) {
    return <LoginSelector onLogin={handleLogin} />
  }

  return (
    <Router>
      <AnimatedBackground variant="neo">
        <div className="app">
          <Routes>
            <Route path="/" element={<Dashboard user={user} />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/training" element={<Training />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/profile" element={<Profile user={user} onLogout={handleLogout} />} />
          </Routes>
          <Navigation />
          
          {/* AI Chat Components */}
          <FloatingChatButton onClick={() => setIsChatOpen(true)} />
          <AIChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
        </div>
      </AnimatedBackground>
    </Router>
  )
}

export default App