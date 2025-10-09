import React from 'react'
import { MessageCircle, Sparkles } from 'lucide-react'

const FloatingChatButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-24 right-6 z-40 group"
      aria-label="Open AI Chat Assistant"
    >
      <div className="relative">
        {/* Main Button */}
        <div className="w-14 h-14 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:scale-110">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
        
        {/* Sparkle Animation */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
          <Sparkles className="w-2.5 h-2.5 text-yellow-900" />
        </div>
        
        {/* Ripple Effect */}
        <div className="absolute inset-0 rounded-full bg-primary-500/30 animate-ping"></div>
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-surface-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg">
        AI Teaching Assistant
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-surface-800"></div>
      </div>
    </button>
  )
}

export default FloatingChatButton