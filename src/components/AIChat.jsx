import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const AIChat = ({ compact = false }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm Shayak, your AI learning companion. How can I help you today?", sender: 'ai' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputText.trim()) return;

    const newMessage = { id: Date.now(), text: inputText, sender: 'user' };
    setMessages(prev => [...prev, newMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "That's an interesting question! Let's break it down together.",
        "Great job asking that! Here's a hint to get you started...",
        "I can definitely help with that. Have you tried looking at it from this angle?",
        "You're doing great! Keep going!"
      ];
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      
      setMessages(prev => [...prev, { id: Date.now() + 1, text: randomResponse, sender: 'ai' }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className={`flex flex-col bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden ${compact ? 'h-[400px]' : 'h-[600px]'}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-green to-emerald-500 p-4 flex items-center space-x-3 text-white">
        <div className="p-2 bg-white/15 rounded-full shadow-sm">
          <Sparkles size={20} className="text-brand-yellow" />
        </div>
        <div>
          <h3 className="font-bold flex items-center space-x-1">
            <span>Shayak AI</span>
            <span className="inline-flex items-center text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/10 border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 mr-1.5" />
              <span className="uppercase tracking-wide">Live</span>
            </span>
          </h3>
          <p className="text-xs text-brand-green-bg/90">Always here to help</p>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-gray-50">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] rounded-2xl p-3 ${
              msg.sender === 'user' 
                ? 'bg-brand-green text-white rounded-br-none' 
                : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm'
            }`}>
              <p className="text-sm">{msg.text}</p>
            </div>
          </motion.div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-gray-200 shadow-sm flex space-x-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-100">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask anything..."
            className="flex-grow px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green bg-gray-50"
          />
          <button 
            onClick={handleSend}
            disabled={!inputText.trim()}
            className="p-2 bg-brand-yellow text-brand-dark rounded-full hover:bg-brand-yellow-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
