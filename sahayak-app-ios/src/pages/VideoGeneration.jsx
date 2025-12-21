import React, { useEffect, useState } from 'react'
import { Video, AlertCircle, Play } from 'lucide-react'

export default function VideoGeneration() {
  const [cls, setCls] = useState(Number(localStorage.getItem('ob.class')) || 1)
  useEffect(() => { document.title = 'Video Generation' }, [])

  const disabled = cls >= 5

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
         <div>
            <h1 className="text-2xl font-bold text-[#1E1E24] dark:text-white">Video Studio</h1>
            <p className="text-[#8E8E93]">Generate AI teaching videos for your lessons.</p>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
         <div className="lg:col-span-8">
            <div className="bento-card p-8 min-h-[400px] flex flex-col items-center justify-center text-center space-y-6 dark:bg-[#1E1E24] dark:border dark:border-white/10">
               <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 mb-4 dark:bg-purple-900/30 dark:text-purple-400">
                  <Video size={40} />
               </div>
               
               <h2 className="text-2xl font-bold text-[#1E1E24] dark:text-white">Create New Lesson Video</h2>
               <p className="text-[#8E8E93] max-w-md">Select your target class and let our AI generate a comprehensive video lesson tailored to your curriculum.</p>

               <div className="w-full max-w-md space-y-4 pt-4">
                  <div className="text-left">
                     <label className="block text-sm font-medium text-[#1E1E24] mb-2 dark:text-white">Select Class Level</label>
                     <select 
                       value={cls} 
                       onChange={e=>setCls(Number(e.target.value))} 
                       className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-[#1E1E24] dark:bg-white/5 dark:border-white/10 dark:text-white"
                     >
                       {[1,2,3,4,5,6].map(i => (<option key={i} value={i} className="dark:bg-[#1E1E24]">Class {i}</option>))}
                     </select>
                  </div>

                  <button 
                    className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                      disabled 
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-white/5 dark:text-white/20' 
                        : 'bg-[#1E1E24] text-white hover:bg-black hover:scale-[1.02] shadow-lg dark:bg-white dark:text-[#1E1E24]'
                    }`} 
                    disabled={disabled}
                  >
                    <Play size={20} fill="currentColor" />
                    Generate Video
                  </button>

                  {disabled && (
                    <div className="flex items-start gap-3 p-4 bg-orange-50 text-orange-700 rounded-xl text-sm dark:bg-orange-900/20 dark:text-orange-400">
                       <AlertCircle size={18} className="shrink-0 mt-0.5" />
                       <p>Video generation is currently optimized for Classes 1–4. Support for higher classes is coming soon.</p>
                    </div>
                  )}
               </div>
            </div>
         </div>

         <div className="lg:col-span-4 space-y-6">
            <div className="bento-card-orange rounded-[2rem] p-6 relative overflow-hidden">
               <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2">Tips</h3>
                  <ul className="space-y-3 text-white/90 text-sm">
                     <li className="flex gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0"></span>
                        Choose lower classes for simpler, animated explanations.
                     </li>
                     <li className="flex gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0"></span>
                        Processing may take 2-3 minutes.
                     </li>
                     <li className="flex gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0"></span>
                        Videos are saved to your library automatically.
                     </li>
                  </ul>
               </div>
               <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            </div>
         </div>
      </div>
    </div>
  )
}
