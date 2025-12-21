import React from 'react'
import { Compass, ChevronRight } from 'lucide-react'

const journeys = Array.from({ length: 12 }).map((_, i) => ({
  title: `Journey ${i + 1}`,
  image: `https://picsum.photos/seed/j${i}/400/240`,
  category: ['Science', 'Math', 'History', 'Art'][i % 4]
}))

export default function SeeMore() {
  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-8 space-y-8 font-sans text-[#1E1E24] dark:text-white">
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold text-[#1E1E24] mb-2 dark:text-white">All Journeys</h1>
        <p className="text-[#8E8E93] text-lg dark:text-white/60">Explore our complete collection of learning paths</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {journeys.map((j, idx) => (
          <div 
            key={idx} 
            className="bento-card p-0 overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer dark:bg-[#1E1E24] dark:border dark:border-white/10"
          >
            <div className="relative h-48 overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${j.image})` }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <ChevronRight size={16} />
                </div>
              </div>
            </div>
            
            <div className="p-5">
              <span className="inline-block px-2 py-1 rounded-md bg-gray-100 text-[#8E8E93] text-xs font-bold uppercase tracking-wider mb-2 dark:bg-white/10 dark:text-white/60">
                {j.category}
              </span>
              <h3 className="text-lg font-bold text-[#1E1E24] group-hover:text-orange-600 transition-colors dark:text-white dark:group-hover:text-orange-400">
                {j.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center pt-8">
        <button className="px-6 py-3 bg-gray-100 text-[#8E8E93] rounded-xl font-bold hover:bg-gray-200 transition-colors flex items-center gap-2 dark:bg-white/10 dark:text-white dark:hover:bg-white/20">
          <Compass size={18} />
          Load More
        </button>
      </div>
    </div>
  )
}
