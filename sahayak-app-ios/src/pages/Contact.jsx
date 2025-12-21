import React, { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const submit = (e) => {
    e.preventDefault()
    alert('Message sent')
    setName('')
    setEmail('')
    setMessage('')
  }
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Contact</h1>
      <form onSubmit={submit} className="surface-card ios-shadow rounded-2xl p-6 space-y-3">
        <div className="space-y-1">
          <label className="text-sm opacity-80">Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2 rounded-xl bg-black/5 dark:bg-white/10 focus:outline-none" />
        </div>
        <div className="space-y-1">
          <label className="text-sm opacity-80">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 rounded-xl bg-black/5 dark:bg-white/10 focus:outline-none" />
        </div>
        <div className="space-y-1">
          <label className="text-sm opacity-80">Message</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full px-3 py-2 rounded-xl bg-black/5 dark:bg-white/10 focus:outline-none h-28" />
        </div>
        <button type="submit" className="px-4 py-2 rounded-xl ios-button bg-blue-500 text-white">Send</button>
      </form>
    </div>
  )
}
