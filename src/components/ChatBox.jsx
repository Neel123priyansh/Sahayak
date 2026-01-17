import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Send, Check, CheckCheck, Wifi, WifiOff } from 'lucide-react'
import { motion } from 'framer-motion'
import { useApp } from '../context/AppContext'

const createWebSocket = (threadId, user) => {
  const url = import.meta.env.VITE_CHAT_WS_URL
  if (!url) return null
  const params = new URLSearchParams({
    threadId,
    name: user.name || 'Guest',
    type: user.type || 'unknown',
  })
  const separator = url.includes('?') ? '&' : '?'
  const fullUrl = `${url}${separator}${params.toString()}`
  return new WebSocket(fullUrl)
}

const ChatBox = ({ threadId, counterpartName }) => {
  const { user } = useApp()
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isConnected, setIsConnected] = useState(false)
  const [connectionError, setConnectionError] = useState(null)
  const [typingUsers, setTypingUsers] = useState([])
  const [isSending, setIsSending] = useState(false)
  const socketRef = useRef(null)
  const messagesEndRef = useRef(null)
  const typingTimeoutRef = useRef(null)

  const canUseChat = user.type === 'teacher'
  const chatConfigured = Boolean(import.meta.env.VITE_CHAT_WS_URL)

  const sortedMessages = useMemo(
    () =>
      [...messages].sort((a, b) => {
        return a.createdAt - b.createdAt
      }),
    [messages]
  )

  const currentUserId = useMemo(
    () => `${user.type || 'unknown'}:${user.name || 'Guest'}`,
    [user.type, user.name]
  )

  const scrollToBottom = () => {
    if (messagesEndRef.current && typeof messagesEndRef.current.scrollIntoView === 'function') {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [sortedMessages.length])

  useEffect(() => {
    if (!threadId || !canUseChat) return
    const ws = createWebSocket(threadId, user)
    if (!ws) {
      return undefined
    }
    socketRef.current = ws
    ws.onopen = () => {
      setIsConnected(true)
      ws.send(
        JSON.stringify({
          type: 'join',
          threadId,
          userId: currentUserId,
          name: user.name,
        })
      )
    }
    ws.onmessage = event => {
      try {
        const payload = JSON.parse(event.data)
        if (payload.type === 'message') {
          setMessages(prev => {
            const exists = prev.some(m => m.id === payload.message.id)
            if (exists) return prev
            return [...prev, payload.message]
          })
        } else if (payload.type === 'typing') {
          setTypingUsers(prev => {
            const others = prev.filter(p => p.userId !== payload.userId)
            if (payload.isTyping && payload.userId !== currentUserId) {
              return [...others, { userId: payload.userId, name: payload.name }]
            }
            return others
          })
        } else if (payload.type === 'read') {
          setMessages(prev =>
            prev.map(m => {
              if (!payload.messageIds.includes(m.id)) return m
              return { ...m, readAt: payload.readAt || Date.now() }
            })
          )
        } else if (payload.type === 'history') {
          if (Array.isArray(payload.messages)) {
            setMessages(prev => {
              const all = [...prev, ...payload.messages]
              const map = new Map()
              all.forEach(m => {
                map.set(m.id, m)
              })
              return Array.from(map.values())
            })
          }
        }
      } catch {
        return
      }
    }
    ws.onerror = () => {
      setConnectionError('Unable to connect to chat')
    }
    ws.onclose = () => {
      setIsConnected(false)
      socketRef.current = null
    }
    return () => {
      ws.close()
    }
  }, [threadId, user, canUseChat, currentUserId])

  useEffect(() => {
    const fetchHistory = async () => {
      if (!threadId || !canUseChat) return
      try {
        const res = await fetch(`/api/chat/threads/${encodeURIComponent(threadId)}`, {
          credentials: 'include',
        })
        if (!res.ok) return
        const data = await res.json()
        if (Array.isArray(data.messages)) {
          setMessages(prev => {
            const all = [...prev, ...data.messages]
            const map = new Map()
            all.forEach(m => {
              map.set(m.id, m)
            })
            return Array.from(map.values())
          })
        }
      } catch {
        return
      }
    }
    fetchHistory()
  }, [threadId, canUseChat])

  const sendTyping = isTyping => {
    const ws = socketRef.current
    if (!ws || ws.readyState !== WebSocket.OPEN) return
    ws.send(
      JSON.stringify({
        type: 'typing',
        threadId,
        userId: currentUserId,
        name: user.name,
        isTyping,
      })
    )
  }

  const handleChangeInput = e => {
    const value = e.target.value
    setInputValue(value)
    if (!socketRef.current || socketRef.current.readyState !== WebSocket.OPEN) return
    sendTyping(true)
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }
    typingTimeoutRef.current = setTimeout(() => {
      sendTyping(false)
    }, 1500)
  }

  const handleSend = async () => {
    const text = inputValue.trim()
    if (!text || !canUseChat) return
    if (!socketRef.current || socketRef.current.readyState !== WebSocket.OPEN) {
      setConnectionError('Chat disconnected')
      return
    }
    setIsSending(true)
    const tempId = `temp-${Date.now()}`
    const message = {
      id: tempId,
      threadId,
      senderId: currentUserId,
      senderName: user.name,
      senderType: user.type || 'teacher',
      text,
      createdAt: Date.now(),
      readAt: null,
      status: 'sending',
    }
    setMessages(prev => [...prev, message])
    setInputValue('')
    try {
      socketRef.current.send(
        JSON.stringify({
          type: 'message',
          threadId,
          clientId: tempId,
          text,
          senderId: currentUserId,
          senderName: user.name,
          senderType: user.type || 'teacher',
        })
      )
      setMessages(prev =>
        prev.map(m => {
          if (m.id !== tempId) return m
          return { ...m, status: 'sent' }
        })
      )
      setIsSending(false)
      fetch('/api/chat/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          threadId,
          text,
          senderId: currentUserId,
          senderName: user.name,
          senderType: user.type || 'teacher',
        }),
      }).catch(() => {})
    } catch {
      setMessages(prev =>
        prev.map(m => {
          if (m.id !== tempId) return m
          return { ...m, status: 'error' }
        })
      )
      setIsSending(false)
      setConnectionError('Failed to send message')
    }
  }

  const handleKeyDown = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const renderStatusLabel = message => {
    if (message.senderId !== currentUserId) return null
    if (message.status === 'error') {
      return (
        <span className="flex items-center gap-1 text-[10px] text-red-500">
          <WifiOff className="w-3 h-3" />
          Failed
        </span>
      )
    }
    if (message.readAt) {
      return (
        <span className="flex items-center gap-1 text-[10px] text-brand-green">
          <CheckCheck className="w-3 h-3" />
          Read
        </span>
      )
    }
    if (message.status === 'sent' || message.status === 'sending') {
      return (
        <span className="flex items-center gap-1 text-[10px] text-gray-400">
          <Check className="w-3 h-3" />
          Sent
        </span>
      )
    }
    return null
  }

  const formatTime = timestamp => {
    const date = new Date(timestamp)
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  if (!canUseChat) {
    return (
      <div className="rounded-xl border border-dashed border-gray-200 bg-gray-50 p-4 text-xs text-gray-500">
        Chat is available when logged in as a teacher.
      </div>
    )
  }

  return (
    <div className="flex flex-col h-80 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="px-3 py-2 border-b border-gray-100 flex items-center justify-between bg-gray-50/70">
        <div className="flex flex-col">
          <span className="text-[11px] uppercase tracking-wide text-gray-400">
            Teacher–student chat
          </span>
          <span className="text-xs font-semibold text-brand-dark">
            {counterpartName || 'Students in this class'}
          </span>
        </div>
        <div className="flex items-center gap-1 text-[11px]">
          {isConnected ? (
            <span className="inline-flex items-center gap-1 text-brand-green">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
              <Wifi className="w-3 h-3" />
              Live
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
              <WifiOff className="w-3 h-3" />
              {chatConfigured ? 'Offline' : 'Not configured'}
            </span>
          )}
        </div>
      </div>
      {connectionError && (
        <div className="px-3 py-1.5 text-[11px] text-red-600 bg-red-50 border-b border-red-100">
          {connectionError}
        </div>
      )}
      <div className="flex-1 px-3 py-2 overflow-y-auto space-y-2 bg-gray-50">
        {sortedMessages.map(message => {
          const isOwn = message.senderId === currentUserId
          return (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-3 py-2 text-xs space-y-1 ${
                  isOwn
                    ? 'bg-brand-green text-white rounded-br-none'
                    : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                }`}
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span className={`font-semibold ${isOwn ? 'text-white/90' : 'text-gray-700'}`}>
                    {isOwn ? 'You' : message.senderName || 'Student'}
                  </span>
                  <span className={`text-[10px] ${isOwn ? 'text-white/70' : 'text-gray-400'}`}>
                    {formatTime(message.createdAt)}
                  </span>
                </div>
                <div className="whitespace-pre-wrap break-words text-xs">
                  {message.text}
                </div>
                <div className="flex justify-end">{renderStatusLabel(message)}</div>
              </div>
            </motion.div>
          )
        })}
        {typingUsers.length > 0 && (
          <div className="flex items-center gap-2 text-[11px] text-gray-500">
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" />
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce delay-75" />
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce delay-150" />
            </div>
            <span>
              {typingUsers.map(t => t.name).join(', ')} typing
            </span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="px-3 py-2 border-t border-gray-100 bg-white">
        <div className="flex items-end gap-2">
          <textarea
            rows={1}
            value={inputValue}
            onChange={handleChangeInput}
            onKeyDown={handleKeyDown}
            placeholder="Send a quick note or doubt clarification"
            className="flex-1 resize-none rounded-xl border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-brand-green/40 focus:border-brand-green/40"
          />
          <button
            type="button"
            onClick={handleSend}
            disabled={!inputValue.trim() || !isConnected || isSending}
            className="inline-flex items-center justify-center rounded-full bg-brand-yellow text-brand-dark p-2 hover:bg-brand-yellow-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatBox
