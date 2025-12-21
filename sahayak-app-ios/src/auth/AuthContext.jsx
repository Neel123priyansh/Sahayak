import React, { createContext, useContext, useMemo, useState, useEffect } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const raw = localStorage.getItem('auth.user')
    if (raw) setUser(JSON.parse(raw))
  }, [])
  const login = (email) => {
    const u = { email }
    setUser(u)
    localStorage.setItem('auth.user', JSON.stringify(u))
  }
  const logout = () => {
    setUser(null)
    localStorage.removeItem('auth.user')
  }
  const value = useMemo(() => ({ user, login, logout }), [user])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}
