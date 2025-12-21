import React, { useState, useMemo } from 'react'
import { Search, Mic, ArrowRight, BookOpen, Clock, MoreHorizontal, ChevronRight, Play, Trophy, Calendar } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import TopicPicker from '../components/TopicPicker'

export default function Home() {
  const navigate = useNavigate()
  const [pickerOpen, setPickerOpen] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState('Popular')

  const allJourneys = useMemo(() => ([
    { title: 'National Park Exploration', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=600&auto=format&fit=crop', tags: ['Popular', 'Geography'], duration: '45m' },
    { title: 'Mountain Retreat Basics', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop', tags: ['Recommended', 'Science'], duration: '30m' },
    { title: 'Island Escapades', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop', tags: ['New', 'Geography'], duration: '1h 15m' },
    { title: 'Math Patterns in Nature', image: 'https://images.unsplash.com/photo-1526312426976-593ca02c4f18?q=80&w=600&auto=format&fit=crop', tags: ['Math', 'Recommended'], duration: '50m' },
  ]), [])

  const recommended = useMemo(() => allJourneys.slice(0, 2), [allJourneys])
  const todaysReading = useMemo(() => allJourneys.slice(2, 4), [allJourneys])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-20">
      
      {/* Left Column */}
      <div className="lg:col-span-3 space-y-6">
        {/* Hero Card */}
        <div className="bento-card-purple rounded-[2rem] p-6 relative overflow-hidden min-h-[280px] flex flex-col justify-between group cursor-pointer transition-transform hover:scale-[1.02]" onClick={() => navigate('/study')}>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-2">Sahayak</h2>
            <p className="text-white/90 text-sm mb-6 font-medium">Simplifying learning.<br/>Amplifying growth.</p>
            <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-colors">
              <ArrowRight size={20} />
            </button>
          </div>
          <div className="absolute top-4 right-4 text-white/20">
            <Trophy size={80} />
          </div>
          {/* Decorative shapes */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bento-card flex flex-col items-center justify-center text-center py-6 dark:bg-[#1E1E24] dark:border dark:border-white/10">
            <div className="w-8 h-8 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mb-2 dark:bg-orange-900/30 dark:text-orange-400">
              <BookOpen size={16} />
            </div>
            <span className="text-[#8E8E93] text-xs font-medium">Lessons</span>
            <span className="text-2xl font-bold text-[#1E1E24] dark:text-white">78</span>
          </div>
          <div className="bento-card flex flex-col items-center justify-center text-center py-6 dark:bg-[#1E1E24] dark:border dark:border-white/10">
            <div className="w-8 h-8 bg-purple-100 text-purple-500 rounded-full flex items-center justify-center mb-2 dark:bg-purple-900/30 dark:text-purple-400">
              <Clock size={16} />
            </div>
            <span className="text-[#8E8E93] text-xs font-medium">Hours</span>
            <span className="text-2xl font-bold text-[#1E1E24] dark:text-white">43</span>
          </div>
        </div>

        {/* Subjects Pills */}
        <div className="flex flex-wrap gap-2">
          {['Literature', 'Math', 'Biology'].map(sub => (
            <button key={sub} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-[#1E1E24] shadow-sm hover:shadow-md transition-all flex items-center gap-2 dark:bg-[#1E1E24] dark:text-white dark:border dark:border-white/10">
              <span className={`w-2 h-2 rounded-full ${sub === 'Literature' ? 'bg-red-400' : sub === 'Math' ? 'bg-amber-400' : 'bg-cyan-400'}`}></span>
              {sub}
            </button>
          ))}
        </div>

        {/* Dark Card (Video/Creative) */}
        <div className="bento-card-dark rounded-[2rem] p-6 relative overflow-hidden min-h-[200px] flex flex-col justify-end group cursor-pointer" onClick={() => navigate('/video')}>
          <div className="absolute inset-0 opacity-40 group-hover:opacity-50 transition-opacity">
            <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Geometry" />
          </div>
          <div className="relative z-10">
            <span className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-1 block">Geometry in Action</span>
            <h3 className="text-lg font-bold leading-tight mb-3 text-white">Creative approaches to plane shapes</h3>
            <div className="flex items-center justify-between">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#1E1E24] bg-gray-600 overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="User" />
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-[#1E1E24] bg-gray-700 text-[10px] flex items-center justify-center font-bold text-white">+43</div>
              </div>
              <button className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center">
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Column */}
      <div className="lg:col-span-5 space-y-6">
        {/* Progress Chart Card */}
        <div className="bento-card-orange rounded-[2rem] p-8 relative overflow-hidden">
          <div className="flex items-center justify-between mb-8 relative z-10">
            <h2 className="text-2xl font-bold text-white">Progress</h2>
            <div className="flex bg-white/20 rounded-full p-1 text-xs font-medium">
              <button className="px-3 py-1 bg-black/20 text-white rounded-full">Weekly</button>
              <button className="px-3 py-1 text-white/70 hover:text-white">Month</button>
            </div>
          </div>
          
          <div className="flex items-baseline gap-8 mb-8 relative z-10">
            <div>
              <span className="block text-4xl font-bold text-white">48</span>
              <span className="text-white/70 text-sm">lessons</span>
            </div>
            <div>
              <span className="block text-4xl font-bold text-white">12</span>
              <span className="text-white/70 text-sm">hours</span>
            </div>
          </div>

          {/* CSS Bar Chart */}
          <div className="flex items-end justify-between h-40 gap-4 relative z-10 px-2">
            {[
              { d: 'Mon', h: '40%' }, 
              { d: 'Tue', h: '30%' }, 
              { d: 'Wed', h: '70%', active: true }, 
              { d: 'Thr', h: '45%' }, 
              { d: 'Fri', h: '55%' }
            ].map((day, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 flex-1">
                 <div className="w-full relative h-full flex items-end rounded-t-xl bg-black/5 overflow-hidden group">
                    <div 
                      style={{ height: day.h }} 
                      className={`w-full rounded-t-xl transition-all duration-1000 ${day.active ? 'bg-[#1E1E24] stripe-pattern' : 'bg-black/20 group-hover:bg-black/30'}`}
                    ></div>
                    {day.active && (
                       <div className="absolute top-[20%] left-1/2 -translate-x-1/2 bg-[#1E1E24] text-white text-xs py-1 px-2 rounded mb-2">
                         48
                       </div>
                    )}
                 </div>
                 <span className="text-xs text-white/60">{day.d}</span>
              </div>
            ))}
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        </div>

        {/* Rating of Students */}
        <div className="bento-card flex items-center justify-between dark:bg-[#1E1E24] dark:border dark:border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center dark:bg-yellow-900/30 dark:text-yellow-400">
              <Trophy size={20} />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 dark:text-white">Rating of students</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">10 best students</p>
            </div>
          </div>
          <div className="flex -space-x-2">
             {[4,5,6].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 dark:border-[#1E1E24]">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=student${i}`} alt="Student" />
                </div>
             ))}
          </div>
        </div>

        {/* List Items */}
        <div className="space-y-4">
          <div className="bento-card flex items-center justify-between py-4 hover:bg-gray-50 cursor-pointer dark:bg-[#1E1E24] dark:border dark:border-white/10 dark:hover:bg-white/5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center dark:bg-orange-900/30 dark:text-orange-400">
                <Search size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white">Introduction</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">1 lesson</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Clock size={14} />
              <span>4:54</span>
            </div>
          </div>

          <div className="bento-card flex items-center justify-between py-4 hover:bg-gray-50 cursor-pointer dark:bg-[#1E1E24] dark:border dark:border-white/10 dark:hover:bg-white/5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-500 flex items-center justify-center dark:bg-purple-900/30 dark:text-purple-400">
                <BookOpen size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white">Base part</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">4 lessons</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Clock size={14} />
              <span>3:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="lg:col-span-4 space-y-6">
        {/* Today's Reading */}
        <div className="bento-card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-[#1E1E24]">Today's reading 📚<br/>is ready</h2>
            <MoreHorizontal className="text-[#8E8E93]" />
          </div>
          
          <div className="flex justify-between mb-6 text-center">
             {['Mon', 'Tue', 'Wed', 'Thr', 'Fri'].map((d, i) => (
               <div key={d} className="flex flex-col items-center gap-2">
                 <span className="text-xs text-[#8E8E93] font-medium">{d}</span>
                 <span className="text-sm font-bold text-[#1E1E24]">{20 + i}</span>
                 {i < 3 && <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>}
               </div>
             ))}
          </div>

          <div className="space-y-4">
            {todaysReading.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer">
                 <img src={item.image} className="w-12 h-12 rounded-lg object-cover" alt="thumb" />
                 <div>
                   <h4 className="text-sm font-bold leading-tight line-clamp-1 text-[#1E1E24]">{item.title}</h4>
                   <span className="text-xs text-orange-500 font-medium">{item.duration} • {item.tags[0]}</span>
                 </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Performance */}
        <div className="bento-card">
           <div className="flex items-center justify-between mb-4">
             <h3 className="font-bold text-[#1E1E24]">Progress performance</h3>
             <MoreHorizontal className="text-[#8E8E93]" size={16} />
           </div>
           <div className="h-32 flex items-end gap-2">
              <div className="w-full h-[40%] bg-blue-100 rounded-t-lg"></div>
              <div className="w-full h-[60%] bg-indigo-100 rounded-t-lg"></div>
              <div className="w-full h-[80%] bg-purple-200 rounded-t-lg relative">
                 <div className="absolute top-0 w-full h-1 bg-purple-500 rounded-t-lg"></div>
              </div>
           </div>
           <div className="flex justify-between text-xs text-[#8E8E93] mt-2 font-medium">
             <span>June</span>
             <span>July</span>
             <span>August</span>
           </div>
        </div>

        {/* Purple Banner */}
        <div className="bento-card bg-purple-100 border-none p-4 flex items-center justify-between">
           <div>
             <h4 className="font-bold text-purple-900 text-sm">Reading routine</h4>
             <p className="text-xs text-purple-700">Increase your memory</p>
           </div>
           <BookOpen className="text-purple-500" />
        </div>

        {/* Recommended */}
        <div className="bento-card bg-transparent shadow-none border-none p-0">
          <div className="flex items-center justify-between mb-4">
             <h3 className="font-bold text-[#1E1E24]">Recommended for you</h3>
             <MoreHorizontal className="text-[#8E8E93]" size={16} />
           </div>
           <div className="grid grid-cols-2 gap-4">
             {recommended.map((item, i) => (
               <div key={i} className="bg-orange-50 rounded-2xl p-4 flex flex-col justify-between h-32 relative overflow-hidden group cursor-pointer hover:shadow-md transition-all">
                 <h4 className="font-bold text-sm z-10 relative leading-tight text-[#1E1E24]">{item.title}</h4>
                 <div className="z-10 relative w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                   <Play size={12} className="ml-0.5" />
                 </div>
                 <img src={item.image} className="absolute bottom-0 right-0 w-20 h-20 object-cover opacity-50 rounded-tl-3xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" alt="dec" />
               </div>
             ))}
           </div>
        </div>

      </div>

      {/* Hidden Topic Picker for compatibility */}
      <TopicPicker open={pickerOpen} onClose={() => setPickerOpen(false)} onSelect={setSelectedTopic} />
    </div>
  )
}
