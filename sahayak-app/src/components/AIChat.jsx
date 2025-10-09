import React, { useState, useRef, useEffect } from 'react'
import { Send, Bot, User, Sparkles, MessageCircle, X } from 'lucide-react'

const AIChat = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: 'Hello! I\'m your AI teaching assistant. I can help you create lesson plans, generate educational content, answer questions about pedagogy, and support your teaching journey. How can I assist you today?',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const simulateAIResponse = (userMessage) => {
    const responses = {
      'lesson plan': 'I can help you create engaging lesson plans! What subject and grade level are you teaching? I\'ll suggest activities, learning objectives, and assessment methods.',
      'story': 'Stories are powerful teaching tools! I can help you create educational stories that align with your curriculum. What topic would you like the story to cover?',
      'assessment': 'Assessment is crucial for learning! I can suggest various assessment methods like formative assessments, rubrics, peer evaluations, and project-based assessments. What type of assessment are you looking for?',
      'classroom management': 'Effective classroom management creates a positive learning environment. I can share strategies for engagement, behavior management, and creating inclusive spaces. What specific challenge are you facing?',
      'differentiation': 'Differentiated instruction helps reach all learners! I can suggest ways to adapt content, process, and products based on student needs, interests, and learning profiles.',
      'technology': 'Technology can enhance learning when used thoughtfully. I can recommend educational tools, digital resources, and integration strategies. What technology challenge can I help with?'
    }

    const lowerMessage = userMessage.toLowerCase()
    let response = 'That\'s an interesting question! As your AI teaching assistant, I\'m here to help with lesson planning, educational strategies, student engagement techniques, assessment methods, and more. Could you tell me more about what you\'re working on?'

    for (const [key, value] of Object.entries(responses)) {
      if (lowerMessage.includes(key)) {
        response = value
        break
      }
    }

    return response
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate AI processing time
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        type: 'ai',
        content: simulateAIResponse(inputMessage),
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-2xl h-[80vh] bg-surface-900/95 backdrop-blur-xl rounded-3xl border border-primary-500/20 shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-primary-500/20 bg-gradient-to-r from-primary-600/10 to-secondary-600/10">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary-500/20 rounded-xl">
              <Bot className="w-6 h-6 text-primary-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">AI Teaching Assistant</h3>
              <p className="text-sm text-surface-300">Powered by Sahayak AI</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-surface-700/50 rounded-xl transition-colors"
          >
            <X className="w-5 h-5 text-surface-400" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start space-x-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`p-2 rounded-xl ${message.type === 'user' ? 'bg-primary-500/20' : 'bg-secondary-500/20'}`}>
                  {message.type === 'user' ? (
                    <User className="w-4 h-4 text-primary-400" />
                  ) : (
                    <Bot className="w-4 h-4 text-secondary-400" />
                  )}
                </div>
                <div className={`p-4 rounded-2xl ${
                  message.type === 'user' 
                    ? 'bg-primary-500/20 text-white' 
                    : 'bg-surface-800/50 text-surface-100'
                }`}>
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <p className="text-xs text-surface-400 mt-2">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-3 max-w-[80%]">
                <div className="p-2 bg-secondary-500/20 rounded-xl">
                  <Bot className="w-4 h-4 text-secondary-400" />
                </div>
                <div className="p-4 bg-surface-800/50 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-secondary-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-secondary-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-secondary-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-6 border-t border-primary-500/20 bg-surface-900/50">
          <div className="flex items-end space-x-3">
            <div className="flex-1 relative">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about lesson plans, teaching strategies, assessments..."
                className="w-full p-4 pr-12 bg-surface-800/50 border border-surface-600 rounded-2xl text-white placeholder-surface-400 resize-none focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all"
                rows="1"
                style={{ minHeight: '56px', maxHeight: '120px' }}
              />
              <Sparkles className="absolute right-4 top-4 w-5 h-5 text-primary-400" />
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isTyping}
              className="p-4 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Send className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIChat