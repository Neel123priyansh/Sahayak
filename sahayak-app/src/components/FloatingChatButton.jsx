import React from 'react'
import { MessageCircle, Sparkles } from 'lucide-react'

const FloatingChatButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-24 right-6 z-40 group ios-button"
      aria-label="Open AI Chat Assistant"
    >
      <div className="relative">
        {/* Main Button */}
        <div className="w-14 h-14 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 rounded-full ios-shadow transition-all duration-200 flex items-center justify-center">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
        
        {/* Sparkle Animation */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
          <Sparkles className="w-2.5 h-2.5 text-yellow-900" />
        </div>
        
        {/* Ripple Effect */}
        <div className="absolute inset-0 rounded-full bg-primary-500/15 scale-0 group-active:scale-100 transition-transform duration-200"></div>
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-white/80 dark:bg-[#1C1C1E]/80 backdrop-blur-xl text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap ios-shadow">
        AI Teaching Assistant
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/80 dark:border-t-[#1C1C1E]/80"></div>
      </div>
    </button>
  )
}

export default FloatingChatButton
