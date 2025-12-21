import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ContextMenu from './ContextMenu.jsx'

const defaultItems = [
  { title: 'Lesson 4: National Park Exploration', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=600&auto=format&fit=crop' },
  { title: 'Lesson 5: Mountain Retreat', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop' },
  { title: 'Island Escapades', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop' },
  { title: 'Safari Adventure', image: 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=600&auto=format&fit=crop' },
  { title: 'Beach Getaway', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop' },
  { title: 'Forest Camping', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop' },
  { title: 'Rainforest Expedition', image: 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=600&auto=format&fit=crop' }
]

export default function JourneyCarousel({ items = defaultItems }) {
  const [menu, setMenu] = useState({ open: false, x: 0, y: 0, idx: null })
  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between">
        <h2 className="text-lg font-semibold">Continue with journey</h2>
        <Link to="/see-more" className="text-sm opacity-70 flex items-center gap-1 hover:opacity-100">See More <span>▾</span></Link>
      </div>
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-3 w-max">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="w-36 sm:w-48"
              onContextMenu={(e) => {
                e.preventDefault()
                setMenu({ open: true, x: e.clientX, y: e.clientY, idx })
              }}
            >
              <div className="group rounded-2xl overflow-hidden ios-shadow relative">
                <div
                  className="h-28 sm:h-32 bg-center bg-cover transform transition-transform duration-300 group-hover:scale-[1.03]"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              </div>
              <div className="mt-2 text-xs sm:text-sm opacity-90 font-medium line-clamp-2" title={item.title}>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
      <ContextMenu
        open={menu.open}
        x={menu.x}
        y={menu.y}
        onClose={() => setMenu({ open: false, x: 0, y: 0, idx: null })}
        actions={[
          { label: 'Open', onClick: () => setMenu({ open: false, x: 0, y: 0, idx: null }) },
          { label: 'Add to favorites', onClick: () => setMenu({ open: false, x: 0, y: 0, idx: null }) },
        ]}
      />
    </div>
  )
}
