import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Spinner from './components/Spinner.jsx'
import RequireAuth from './auth/RequireAuth.jsx'
import SiteLayout from './components/SiteLayout.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'

const Login = lazy(() => import('./pages/Login.jsx'))
const Home = lazy(() => import('./pages/Home.jsx'))
const Stories = lazy(() => import('./pages/Stories.jsx'))
const SeeMore = lazy(() => import('./pages/SeeMore.jsx'))
const Progress = lazy(() => import('./pages/Progress.jsx'))
const SubjectProgress = lazy(() => import('./pages/SubjectProgress.jsx'))
const Profile = lazy(() => import('./pages/Profile.jsx'))
const OnboardingBasic = lazy(() => import('./pages/OnboardingBasic.jsx'))
const OnboardingPhoto = lazy(() => import('./pages/OnboardingPhoto.jsx'))
const OnboardingLanguage = lazy(() => import('./pages/OnboardingLanguage.jsx'))
const OnboardingClass = lazy(() => import('./pages/OnboardingClass.jsx'))
const EntryScreen = lazy(() => import('./pages/EntryScreen.jsx'))
const StudyMode = lazy(() => import('./pages/StudyMode.jsx'))
const VideoGeneration = lazy(() => import('./pages/VideoGeneration.jsx'))
const StyleGuide = lazy(() => import('./pages/StyleGuide.jsx'))

function Training() { return <div className="p-6"><h1 className="text-2xl font-semibold">Training</h1></div> }

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0B0C]">
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route element={<SiteLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/stories" element={<Stories />} />
              <Route path="/training" element={<Training />} />
              <Route path="/progress" element={<RequireAuth><Progress /></RequireAuth>} />
              <Route path="/progress/:subject" element={<RequireAuth><SubjectProgress /></RequireAuth>} />
              <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
              <Route path="/see-more" element={<SeeMore />} />
              <Route path="/entry" element={<EntryScreen />} />
              <Route path="/study" element={<StudyMode />} />
              <Route path="/video" element={<VideoGeneration />} />
              <Route path="/style" element={<StyleGuide />} />
            </Route>
            <Route path="/onboarding/basic" element={<OnboardingBasic />} />
            <Route path="/onboarding/photo" element={<OnboardingPhoto />} />
            <Route path="/onboarding/language" element={<OnboardingLanguage />} />
            <Route path="/onboarding/class" element={<OnboardingClass />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}
