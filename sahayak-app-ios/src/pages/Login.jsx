import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext.jsx'
import { Mail, Lock, ArrowRight, AlertCircle } from 'lucide-react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const { login } = useAuth()
  const nav = useNavigate()
  const location = useLocation()
  const from = location.state?.from || '/'

  const submit = (e) => {
    e.preventDefault()
    if (!email || !password) {
      setError('Please enter email and password')
      return
    }
    login(email)
    nav(from, { replace: true })
  }

  return (
    <div className="max-w-md mx-auto py-12 px-4 font-sans text-[#1E1E24] dark:text-white">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-[#1E1E24] mb-2 dark:text-white">Welcome Back</h1>
        <p className="text-[#8E8E93] dark:text-white/60">Sign in to access your dashboard</p>
      </div>

      <div className="bento-card p-8 dark:bg-[#1E1E24] dark:border dark:border-white/10">
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 text-red-600 flex items-center gap-3 text-sm font-medium dark:bg-red-900/30 dark:text-red-400">
            <AlertCircle size={18} />
            {error}
          </div>
        )}
        
        <form onSubmit={submit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-[#1E1E24] mb-2 dark:text-white" htmlFor="email">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-white/40" size={18} />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl text-[#1E1E24] focus:ring-2 focus:ring-orange-500/20 transition-all placeholder:text-gray-400 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40"
                placeholder="name@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-[#1E1E24] mb-2 dark:text-white" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-white/40" size={18} />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl text-[#1E1E24] focus:ring-2 focus:ring-orange-500/20 transition-all placeholder:text-gray-400 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
          >
            Sign In
            <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </div>
  )
}
