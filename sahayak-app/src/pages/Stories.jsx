import React, { useState } from 'react'
import { BookOpen, Plus, Search, Wand2, Star, Clock, Users } from 'lucide-react'
import StoryGenerator from '../components/StoryGenerator'

const Stories = () => {
  const [isGeneratorOpen, setIsGeneratorOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const stories = [
    { 
      id: 1, 
      title: 'The Brave Little Elephant', 
      level: 'Beginner', 
      duration: '5 min',
      theme: 'Courage',
      rating: 4.8,
      students: 156,
      description: 'A heartwarming tale about overcoming fears and finding inner strength.'
    },
    { 
      id: 2, 
      title: 'Adventures in the Magic Forest', 
      level: 'Intermediate', 
      duration: '8 min',
      theme: 'Friendship',
      rating: 4.9,
      students: 203,
      description: 'Join Luna and her friends as they discover the power of working together.'
    },
    { 
      id: 3, 
      title: 'The Curious Cat and the Moon', 
      level: 'Beginner', 
      duration: '6 min',
      theme: 'Curiosity',
      rating: 4.7,
      students: 89,
      description: 'Follow Whiskers on a magical journey to satisfy his curiosity about the moon.'
    },
    { 
      id: 4, 
      title: 'The Kindness Tree', 
      level: 'Elementary', 
      duration: '7 min',
      theme: 'Kindness',
      rating: 4.9,
      students: 234,
      description: 'Discover how small acts of kindness can grow into something beautiful.'
    }
  ]

  const filteredStories = stories.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    story.theme.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case 'beginner': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'elementary': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      default: return 'bg-surface-500/20 text-surface-400 border-surface-500/30'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-surface-900 via-surface-800 to-surface-900 pb-20">
      <div className="px-4 pt-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between animate-slide-up">
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">Story Library</h1>
            <p className="text-surface-300">Discover and create engaging educational stories</p>
          </div>
          <button 
            onClick={() => setIsGeneratorOpen(true)}
            className="flex items-center space-x-2 px-4 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 rounded-xl text-white font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Wand2 className="w-5 h-5" />
            <span>AI Generator</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="card-glass p-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center space-x-3">
            <Search className="w-5 h-5 text-surface-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search stories by title or theme..."
              className="flex-1 bg-transparent text-white placeholder-surface-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <button 
            onClick={() => setIsGeneratorOpen(true)}
            className="card-neomorphism p-4 text-left hover:elevation-3 transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 bg-primary-500/20 rounded-lg">
                <Wand2 className="w-5 h-5 text-primary-400" />
              </div>
              <span className="font-medium text-white">Create Story</span>
            </div>
            <p className="text-sm text-surface-400">Use AI to generate personalized educational stories</p>
          </button>
          
          <button className="card-neomorphism p-4 text-left hover:elevation-3 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 bg-secondary-500/20 rounded-lg">
                <BookOpen className="w-5 h-5 text-secondary-400" />
              </div>
              <span className="font-medium text-white">Browse Library</span>
            </div>
            <p className="text-sm text-surface-400">Explore our collection of educational stories</p>
          </button>
        </div>

        {/* Stories Grid */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-white animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {searchTerm ? `Search Results (${filteredStories.length})` : 'Featured Stories'}
          </h2>
          
          <div className="space-y-4">
            {filteredStories.map((story, index) => (
              <div 
                key={story.id} 
                className="card-glass hover:glass-strong transition-all duration-300 cursor-pointer animate-slide-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    {/* Story Icon */}
                    <div className="p-3 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl">
                      <BookOpen className="w-6 h-6 text-primary-400" />
                    </div>
                    
                    {/* Story Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white truncate">{story.title}</h3>
                        <div className="flex items-center space-x-1 ml-2">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-surface-300">{story.rating}</span>
                        </div>
                      </div>
                      
                      <p className="text-surface-300 text-sm mb-3 line-clamp-2">{story.description}</p>
                      
                      <div className="flex items-center space-x-4 mb-3">
                        <span className={`px-2 py-1 rounded-lg text-xs font-medium border ${getLevelColor(story.level)}`}>
                          {story.level}
                        </span>
                        <span className="px-2 py-1 bg-surface-700/50 text-surface-300 rounded-lg text-xs font-medium">
                          {story.theme}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-surface-400">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{story.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{story.students} students</span>
                          </div>
                        </div>
                        <button className="text-primary-400 hover:text-primary-300 font-medium transition-colors">
                          Read Story →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {filteredStories.length === 0 && searchTerm && (
          <div className="text-center py-12 animate-slide-up">
            <BookOpen className="w-16 h-16 text-surface-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">No stories found</h3>
            <p className="text-surface-400 mb-4">Try searching with different keywords or create a new story</p>
            <button 
              onClick={() => setIsGeneratorOpen(true)}
              className="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 rounded-xl text-white font-medium transition-all duration-200"
            >
              Create New Story
            </button>
          </div>
        )}
      </div>

      {/* Story Generator Modal */}
      <StoryGenerator 
        isOpen={isGeneratorOpen} 
        onClose={() => setIsGeneratorOpen(false)} 
      />
    </div>
  )
}

export default Stories