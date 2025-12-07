import React, { useState, useMemo } from 'react'
import { ChevronLeft, Search, Mic, Bell } from 'lucide-react'
import HeroBanner from '../components/HeroBanner'
import JourneyCarousel from '../components/JourneyCarousel'
import PlusActionButton from '../components/PlusActionButton'
import TopicPicker from '../components/TopicPicker'
import TopicChips from '../components/TopicChips'
import WelcomeCard from '../components/WelcomeCard'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  const [pickerOpen, setPickerOpen] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState('Popular')

  const handleTopicSelect = (t) => {
    setSelectedTopic(t)
  }

  const allJourneys = useMemo(() => ([
    { title: 'Lesson 4: National Park Exploration', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=600&auto=format&fit=crop', tags: ['Popular', 'Geography'] },
    { title: 'Mountain Retreat Basics', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop', tags: ['Recommended', 'Science'] },
    { title: 'Island Escapades', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop', tags: ['New', 'Geography'] },
    { title: 'Safari Adventure', image: 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=600&auto=format&fit=crop', tags: ['Popular', 'Science'] },
    { title: 'Beach Getaway', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop', tags: ['Recommended', 'Art'] },
    { title: 'Forest Camping', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop', tags: ['New', 'Science'] },
    { title: 'Rainforest Expedition', image: 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=600&auto=format&fit=crop', tags: ['Geography', 'Popular'] },
    { title: 'Math Patterns in Nature', image: 'https://images.unsplash.com/photo-1526312426976-593ca02c4f18?q=80&w=600&auto=format&fit=crop', tags: ['Math', 'Recommended'] },
    { title: 'Intro to Creative Coding', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop', tags: ['Coding', 'New'] },
  ]), [])

  const filteredJourneys = useMemo(() => {
    if (!selectedTopic) return allJourneys
    return allJourneys.filter(j => j.tags.includes(selectedTopic))
  }, [allJourneys, selectedTopic])
  return (
    <div className="p-4 pb-24 space-y-4">
      {/* Welcome card */}
      <WelcomeCard name="Shivani" streakDays={5} goalMinutes={20} onResume={() => navigate('/see-more')} />

      {/* Top bar with back, profile, and notifications */}
      <div className="flex items-center justify-between">
        <button className="p-2 rounded-xl bg-white/60 dark:bg-[#1C1C1E]/60 backdrop-blur-xl ios-shadow">
          <ChevronLeft size={18} />
        </button>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-400 ios-shadow" />
          <div>
            <div className="text-sm font-semibold">Shivani Bisht</div>
            <div className="text-xs opacity-70">1st Class Mentor</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-xl bg-white/60 dark:bg-[#1C1C1E]/60 backdrop-blur-xl ios-shadow">
            <Bell size={18} />
          </button>
        </div>
      </div>

      {/* Hero banner */}
      <HeroBanner />

      {/* Search */}
      <div className="surface-card ios-shadow px-4 py-2 rounded-2xl flex items-center gap-3">
        <Search className="opacity-60" size={18} />
        <input
          placeholder="Search anything..."
          className="flex-1 bg-transparent focus:outline-none"
        />
        <Mic className="opacity-60" size={18} />
      </div>

      {/* Chips */}
      <TopicChips active={selectedTopic} onSelect={(c) => setSelectedTopic(c)} />

      {/* Topic card */}
      <div className="surface-card ios-shadow p-4 rounded-2xl flex items-center justify-between">
        <div>
          <div className="text-xl font-semibold">Find the topic:</div>
        </div>
        <button onClick={() => setPickerOpen(true)} className="w-28 h-28 rounded-full bg-blue-300/60 backdrop-blur-xl" />
      </div>

      {/* Journey carousel */}
      <JourneyCarousel items={filteredJourneys} />

      {/* Centered green plus button */}
      <PlusActionButton onClick={() => setPickerOpen(true)} />

      <TopicPicker open={pickerOpen} onClose={() => setPickerOpen(false)} onSelect={handleTopicSelect} />
    </div>
  )
}
