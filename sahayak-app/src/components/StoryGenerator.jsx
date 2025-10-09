import React, { useState } from 'react'
import { Wand2, BookOpen, Users, Clock, Target, Sparkles, Download, Share, X } from 'lucide-react'

const StoryGenerator = ({ isOpen, onClose }) => {
  const [storyParams, setStoryParams] = useState({
    theme: '',
    characters: '',
    setting: '',
    ageGroup: 'elementary',
    duration: '5-10',
    learningObjective: '',
    genre: 'adventure'
  })
  const [generatedStory, setGeneratedStory] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [step, setStep] = useState(1)

  const themes = [
    'Friendship', 'Courage', 'Kindness', 'Honesty', 'Perseverance', 
    'Teamwork', 'Respect', 'Responsibility', 'Empathy', 'Creativity'
  ]

  const genres = [
    { id: 'adventure', name: 'Adventure', icon: '🗺️' },
    { id: 'fantasy', name: 'Fantasy', icon: '🧙‍♂️' },
    { id: 'mystery', name: 'Mystery', icon: '🔍' },
    { id: 'friendship', name: 'Friendship', icon: '👫' },
    { id: 'educational', name: 'Educational', icon: '📚' },
    { id: 'funny', name: 'Funny', icon: '😄' }
  ]

  const ageGroups = [
    { id: 'preschool', name: 'Preschool (3-5)', description: 'Simple stories with basic concepts' },
    { id: 'elementary', name: 'Elementary (6-10)', description: 'Engaging stories with moral lessons' },
    { id: 'middle', name: 'Middle School (11-13)', description: 'Complex narratives with deeper themes' }
  ]

  const generateStory = () => {
    setIsGenerating(true)
    setStep(3)

    // Simulate AI story generation
    setTimeout(() => {
      const sampleStory = `# The ${storyParams.theme} Adventure

Once upon a time, in a ${storyParams.setting || 'magical kingdom'}, there lived ${storyParams.characters || 'a brave young hero named Alex'}. 

Alex had always dreamed of going on a great adventure, but had never found the courage to leave the comfort of home. One sunny morning, Alex discovered that the village's most precious treasure - the Crystal of ${storyParams.theme} - had gone missing!

The village elder explained that without the crystal, the people would slowly forget the importance of ${storyParams.theme.toLowerCase()}. Alex knew this was the moment to be brave and help the community.

**Chapter 1: The Journey Begins**

Alex packed a small bag with essentials and set off toward the Whispering Woods, where the crystal was last seen. Along the way, Alex met a wise owl who shared an important lesson: "${storyParams.theme} isn't just something you have - it's something you practice every day."

**Chapter 2: The Challenge**

Deep in the forest, Alex encountered a series of challenges that tested not just physical strength, but the very quality of ${storyParams.theme.toLowerCase()} that the crystal represented. Each obstacle required Alex to demonstrate ${storyParams.theme.toLowerCase()} in a new way.

**Chapter 3: The Discovery**

Through acts of genuine ${storyParams.theme.toLowerCase()}, Alex discovered that the crystal hadn't been stolen at all - it had simply lost its power because the villagers had stopped practicing ${storyParams.theme.toLowerCase()} in their daily lives.

**The Lesson**

Alex returned to the village with a glowing crystal and an important message: ${storyParams.theme} grows stronger when we share it with others and practice it every day.

**Discussion Questions:**
1. How did Alex show ${storyParams.theme.toLowerCase()} throughout the story?
2. Can you think of a time when you demonstrated ${storyParams.theme.toLowerCase()}?
3. What are some ways we can practice ${storyParams.theme.toLowerCase()} in our daily lives?

**Learning Objective:** ${storyParams.learningObjective || `Students will understand the importance of ${storyParams.theme.toLowerCase()} and identify ways to practice it in their own lives.`}

*Estimated reading time: ${storyParams.duration} minutes*`

      setGeneratedStory(sampleStory)
      setIsGenerating(false)
    }, 3000)
  }

  const resetGenerator = () => {
    setStep(1)
    setGeneratedStory('')
    setStoryParams({
      theme: '',
      characters: '',
      setting: '',
      ageGroup: 'elementary',
      duration: '5-10',
      learningObjective: '',
      genre: 'adventure'
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-4xl h-[90vh] bg-surface-900/95 backdrop-blur-xl rounded-3xl border border-primary-500/20 shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-primary-500/20 bg-gradient-to-r from-primary-600/10 to-secondary-600/10">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary-500/20 rounded-xl">
              <Wand2 className="w-6 h-6 text-primary-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">AI Story Generator</h3>
              <p className="text-sm text-surface-300">Create engaging educational stories</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-surface-700/50 rounded-xl transition-colors"
          >
            <X className="w-5 h-5 text-surface-400" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {step === 1 && (
            <div className="p-6 space-y-6">
              <div className="text-center mb-8">
                <h4 className="text-xl font-semibold text-white mb-2">Let's Create Your Story</h4>
                <p className="text-surface-300">Fill in the details to generate a personalized educational story</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Theme Selection */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-surface-200">Story Theme</label>
                  <select
                    value={storyParams.theme}
                    onChange={(e) => setStoryParams(prev => ({ ...prev, theme: e.target.value }))}
                    className="w-full p-3 bg-surface-800/50 border border-surface-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                  >
                    <option value="">Select a theme...</option>
                    {themes.map(theme => (
                      <option key={theme} value={theme}>{theme}</option>
                    ))}
                  </select>
                </div>

                {/* Genre Selection */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-surface-200">Genre</label>
                  <div className="grid grid-cols-2 gap-2">
                    {genres.map(genre => (
                      <button
                        key={genre.id}
                        onClick={() => setStoryParams(prev => ({ ...prev, genre: genre.id }))}
                        className={`p-3 rounded-xl border transition-all ${
                          storyParams.genre === genre.id
                            ? 'bg-primary-500/20 border-primary-500/50 text-primary-300'
                            : 'bg-surface-800/30 border-surface-600 text-surface-300 hover:bg-surface-700/50'
                        }`}
                      >
                        <div className="text-lg mb-1">{genre.icon}</div>
                        <div className="text-xs">{genre.name}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Characters */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-surface-200">Main Characters</label>
                  <input
                    type="text"
                    value={storyParams.characters}
                    onChange={(e) => setStoryParams(prev => ({ ...prev, characters: e.target.value }))}
                    placeholder="e.g., A curious rabbit named Luna"
                    className="w-full p-3 bg-surface-800/50 border border-surface-600 rounded-xl text-white placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                  />
                </div>

                {/* Setting */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-surface-200">Setting</label>
                  <input
                    type="text"
                    value={storyParams.setting}
                    onChange={(e) => setStoryParams(prev => ({ ...prev, setting: e.target.value }))}
                    placeholder="e.g., An enchanted forest"
                    className="w-full p-3 bg-surface-800/50 border border-surface-600 rounded-xl text-white placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                  />
                </div>

                {/* Age Group */}
                <div className="space-y-3 md:col-span-2">
                  <label className="text-sm font-medium text-surface-200">Target Age Group</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {ageGroups.map(age => (
                      <button
                        key={age.id}
                        onClick={() => setStoryParams(prev => ({ ...prev, ageGroup: age.id }))}
                        className={`p-4 rounded-xl border transition-all text-left ${
                          storyParams.ageGroup === age.id
                            ? 'bg-primary-500/20 border-primary-500/50'
                            : 'bg-surface-800/30 border-surface-600 hover:bg-surface-700/50'
                        }`}
                      >
                        <div className="font-medium text-white">{age.name}</div>
                        <div className="text-sm text-surface-400 mt-1">{age.description}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Learning Objective */}
                <div className="space-y-3 md:col-span-2">
                  <label className="text-sm font-medium text-surface-200">Learning Objective (Optional)</label>
                  <textarea
                    value={storyParams.learningObjective}
                    onChange={(e) => setStoryParams(prev => ({ ...prev, learningObjective: e.target.value }))}
                    placeholder="What should students learn from this story?"
                    className="w-full p-3 bg-surface-800/50 border border-surface-600 rounded-xl text-white placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 resize-none"
                    rows="3"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-6">
                <button
                  onClick={() => setStep(2)}
                  disabled={!storyParams.theme}
                  className="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl text-white font-medium transition-all duration-200 flex items-center space-x-2"
                >
                  <span>Continue</span>
                  <Sparkles className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="p-6 space-y-6">
              <div className="text-center mb-8">
                <h4 className="text-xl font-semibold text-white mb-2">Review Your Story Parameters</h4>
                <p className="text-surface-300">Make sure everything looks good before generating</p>
              </div>

              <div className="bg-surface-800/30 rounded-2xl p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-surface-400">Theme:</span>
                    <p className="text-white font-medium">{storyParams.theme}</p>
                  </div>
                  <div>
                    <span className="text-sm text-surface-400">Genre:</span>
                    <p className="text-white font-medium capitalize">{storyParams.genre}</p>
                  </div>
                  <div>
                    <span className="text-sm text-surface-400">Characters:</span>
                    <p className="text-white font-medium">{storyParams.characters || 'Auto-generated'}</p>
                  </div>
                  <div>
                    <span className="text-sm text-surface-400">Setting:</span>
                    <p className="text-white font-medium">{storyParams.setting || 'Auto-generated'}</p>
                  </div>
                  <div>
                    <span className="text-sm text-surface-400">Age Group:</span>
                    <p className="text-white font-medium">{ageGroups.find(a => a.id === storyParams.ageGroup)?.name}</p>
                  </div>
                </div>
                {storyParams.learningObjective && (
                  <div>
                    <span className="text-sm text-surface-400">Learning Objective:</span>
                    <p className="text-white font-medium">{storyParams.learningObjective}</p>
                  </div>
                )}
              </div>

              <div className="flex justify-between pt-6">
                <button
                  onClick={() => setStep(1)}
                  className="px-6 py-3 bg-surface-700 hover:bg-surface-600 rounded-xl text-white font-medium transition-all duration-200"
                >
                  Back
                </button>
                <button
                  onClick={generateStory}
                  className="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 rounded-xl text-white font-medium transition-all duration-200 flex items-center space-x-2"
                >
                  <Wand2 className="w-4 h-4" />
                  <span>Generate Story</span>
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="p-6">
              {isGenerating ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <Wand2 className="w-8 h-8 text-white animate-spin" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Creating Your Story...</h4>
                  <p className="text-surface-300">Our AI is crafting a personalized story just for you</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-semibold text-white">Your Generated Story</h4>
                    <div className="flex space-x-2">
                      <button className="p-2 bg-surface-700 hover:bg-surface-600 rounded-lg transition-colors">
                        <Download className="w-4 h-4 text-white" />
                      </button>
                      <button className="p-2 bg-surface-700 hover:bg-surface-600 rounded-lg transition-colors">
                        <Share className="w-4 h-4 text-white" />
                      </button>
                      <button
                        onClick={resetGenerator}
                        className="px-4 py-2 bg-primary-500 hover:bg-primary-600 rounded-lg text-white text-sm transition-colors"
                      >
                        Create Another
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-surface-800/30 rounded-2xl p-6 max-h-96 overflow-y-auto">
                    <div className="prose prose-invert max-w-none">
                      <pre className="whitespace-pre-wrap text-surface-100 font-sans text-sm leading-relaxed">
                        {generatedStory}
                      </pre>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default StoryGenerator