import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-10 px-4 border-t border-edu">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs opacity-70">© Sahayak</div>
        <nav className="flex items-center gap-3 text-xs">
          <Link to="/stories" className="opacity-80 hover:opacity-100">Stories</Link>
          <Link to="/progress" className="opacity-80 hover:opacity-100">Progress</Link>
          <Link to="/study" className="opacity-80 hover:opacity-100">Study</Link>
          <Link to="/profile" className="opacity-80 hover:opacity-100">Profile</Link>
        </nav>
      </div>
    </footer>
  )
}
