import React, { useState, useRef, useEffect } from 'react'
import { Send, Bot, User, Sparkles, X } from 'lucide-react'

export default function AIChat({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    { id: 1, type: 'ai', content: "Hi! I’m your AI assistant. Ask me anything.", timestamp: new Date() }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }) }
  useEffect(() => { scrollToBottom() }, [messages])

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return
    const userMessage = { id: Date.now(), type: 'user', content: inputMessage, timestamp: new Date() }
    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)
    setTimeout(() => {
      const aiResponse = { id: Date.now() + 1, type: 'ai', content: 'Got it! How else can I help?', timestamp: new Date() }
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 900)
  }

  const handleKeyPress = (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSendMessage() } }
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-modal flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-2xl h-[80vh] surface-card rounded-3xl border border-black/10 dark:border-white/20 ios-shadow flex flex-col overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-black/10 dark:border-white/10 bg-white/40 dark:bg-[#1C1C1E]/40 backdrop-blur-xl">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-500/15 rounded-xl">
              <Bot className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">AI Teaching Assistant</h3>
              <p className="text-sm opacity-70">Powered by Sahayak</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl ios-button" title="Close"><X className="w-5 h-5" /></button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex items-start space-x-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`p-2 rounded-xl ${message.type === 'user' ? 'bg-blue-500/15' : 'bg-cyan-500/15'}`}>{message.type === 'user' ? <User className="w-4 h-4 text-blue-500" /> : <Bot className="w-4 h-4 text-cyan-500" />}</div>
                <div className={`p-4 rounded-2xl ${message.type === 'user' ? 'bg-blue-500/12' : 'bg-white/40 dark:bg-[#1C1C1E]/40 backdrop-blur-xl'}`}>
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <p className="text-xs opacity-60 mt-2">{message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-3 max-w-[80%]">
                <div className="p-2 bg-cyan-500/15 rounded-xl"><Bot className="w-4 h-4 text-cyan-500" /></div>
                <div className="p-4 bg-white/40 dark:bg-[#1C1C1E]/40 backdrop-blur-xl rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-6 border-t border-black/10 dark:border-white/10 bg-white/30 dark:bg-[#1C1C1E]/30 backdrop-blur-xl">
          <div className="flex items-end space-x-3">
            <div className="flex-1 relative">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="w-full p-4 pr-12 bg-white/50 dark:bg-[#1C1C1E]/50 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/40 transition-all"
                rows="1"
                style={{ minHeight: '56px', maxHeight: '120px' }}
              />
              <Sparkles className="absolute right-4 top-4 w-5 h-5 text-blue-500" />
            </div>
            <button onClick={handleSendMessage} disabled={!inputMessage.trim() || isTyping} className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-2xl transition-all ios-shadow ios-button">
              <Send className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

