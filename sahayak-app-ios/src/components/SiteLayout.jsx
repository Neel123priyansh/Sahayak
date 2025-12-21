import React from 'react'
import DashboardHeader from './DashboardHeader.jsx'
import Footer from './Footer.jsx'
import { Outlet } from 'react-router-dom'

export default function SiteLayout() {
  return (
    <div className="min-h-screen theme-edu bg-[var(--edu-bg)] text-[var(--edu-text)] font-sans selection:bg-purple-200 selection:text-purple-900">
      <DashboardHeader />
      <main id="main" className="pt-28 pb-10 px-4 md:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto min-h-[calc(100vh-160px)]">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}
