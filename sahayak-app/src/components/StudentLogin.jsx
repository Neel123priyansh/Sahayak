import React, { useState } from 'react'
import { Eye, EyeOff, User, Sparkles, Heart, Star, Smile, BookOpen, Gamepad2 } from 'lucide-react'

const StudentLogin = ({ onLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    onLogin({ email, userType: 'student' })
  }

  return (
    <div className="login-container" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 25%, #45b7d1 50%, #96ceb4 75%, #feca57 100%)',
      backgroundSize: '400% 400%',
      animation: 'gradientShift 8s ease infinite',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Fun Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-32 right-16 w-16 h-16 bg-pink-400 rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-400 rounded-full opacity-25 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-32 w-12 h-12 bg-green-400 rounded-full opacity-35 animate-bounce" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-8 w-8 h-8 bg-orange-400 rounded-full opacity-50 animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-20 right-1/3 w-14 h-14 bg-cyan-400 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '5s' }}></div>
        
        {/* Sparkle Effects */}
        <Sparkles className="absolute top-16 right-20 w-8 h-8 text-yellow-300 opacity-70 animate-pulse" style={{ animationDelay: '1s' }} />
        <Star className="absolute bottom-32 left-16 w-6 h-6 text-pink-300 opacity-80 animate-bounce" style={{ animationDelay: '2s' }} />
        <Heart className="absolute top-1/3 left-1/4 w-5 h-5 text-red-400 opacity-60 animate-pulse" style={{ animationDelay: '3s' }} />
        <Smile className="absolute bottom-16 right-16 w-7 h-7 text-orange-300 opacity-50 animate-bounce" style={{ animationDelay: '4s' }} />
        <BookOpen className="absolute top-40 left-1/3 w-6 h-6 text-blue-300 opacity-60 animate-float" style={{ animationDelay: '5s' }} />
        <Gamepad2 className="absolute bottom-1/3 right-1/4 w-6 h-6 text-purple-300 opacity-70 animate-pulse" style={{ animationDelay: '6s' }} />
      </div>

      <div className="login-card" style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        borderRadius: '24px',
        padding: '40px',
        width: '100%',
        maxWidth: '420px',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.3)',
        border: '2px solid rgba(255, 255, 255, 0.2)',
        position: 'relative',
        overflow: 'hidden',
        animation: 'cardFloat 6s ease-in-out infinite'
      }}>
        {/* Card Background Sparkles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-400 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute top-12 left-6 w-2 h-2 bg-pink-400 rounded-full opacity-50 animate-bounce"></div>
          <div className="absolute bottom-8 right-8 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute bottom-16 left-4 w-3 h-3 bg-green-400 rounded-full opacity-40 animate-bounce"></div>
        </div>

        {/* Logo and Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px', position: 'relative', zIndex: 10 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '20px'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #ff6b6b, #4ecdc4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: '700',
              fontSize: '24px',
              boxShadow: '0 8px 16px rgba(255, 107, 107, 0.3)',
              animation: 'logoSpin 4s ease-in-out infinite'
            }}>
              S
            </div>
            <h1 style={{
              fontSize: '32px',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              margin: 0
            }}>
              Sahayak
            </h1>
          </div>
          
          <div style={{
            background: 'linear-gradient(135deg, #ff9a9e, #fecfef, #fecfef)',
            borderRadius: '20px',
            padding: '16px',
            marginBottom: '20px',
            border: '2px solid rgba(255, 255, 255, 0.3)'
          }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#2d3748',
              margin: '0 0 8px 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}>
              🎉 Welcome Back, Student! 🌟
            </h2>
            
            <p style={{
              color: '#4a5568',
              fontSize: '16px',
              margin: 0,
              fontWeight: '500'
            }}>
              Ready for another amazing learning adventure? 🚀
            </p>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'flex',
              color: '#2d3748',
              fontSize: '16px',
              fontWeight: '600',
              marginBottom: '8px',
              alignItems: 'center',
              gap: '8px'
            }}>
              📧 Your Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your awesome email! ✨"
              required
              style={{
                width: '100%',
                padding: '16px 20px',
                borderRadius: '16px',
                border: '2px solid #e2e8f0',
                background: 'rgba(255, 255, 255, 0.8)',
                color: '#2d3748',
                fontSize: '16px',
                outline: 'none',
                transition: 'all 0.3s ease',
                boxSizing: 'border-box',
                fontWeight: '500'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#4ecdc4'
                e.target.style.boxShadow = '0 0 0 3px rgba(78, 205, 196, 0.1)'
                e.target.style.transform = 'translateY(-2px)'
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e2e8f0'
                e.target.style.boxShadow = 'none'
                e.target.style.transform = 'translateY(0)'
              }}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'flex',
              color: '#2d3748',
              fontSize: '16px',
              fontWeight: '600',
              marginBottom: '8px',
              alignItems: 'center',
              gap: '8px'
            }}>
              🔐 Your Secret Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Super secret password! 🤫"
                required
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  paddingRight: '56px',
                  borderRadius: '16px',
                  border: '2px solid #e2e8f0',
                  background: 'rgba(255, 255, 255, 0.8)',
                  color: '#2d3748',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  boxSizing: 'border-box',
                  fontWeight: '500'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#4ecdc4'
                  e.target.style.boxShadow = '0 0 0 3px rgba(78, 205, 196, 0.1)'
                  e.target.style.transform = 'translateY(-2px)'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e2e8f0'
                  e.target.style.boxShadow = 'none'
                  e.target.style.transform = 'translateY(0)'
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'linear-gradient(135deg, #ff6b6b, #4ecdc4)',
                  border: 'none',
                  borderRadius: '12px',
                  color: 'white',
                  cursor: 'pointer',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-50%) scale(1.1)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(-50%) scale(1)'}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '32px'
          }}>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              color: '#4a5568',
              fontSize: '16px',
              cursor: 'pointer',
              fontWeight: '500'
            }}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{
                  width: '20px',
                  height: '20px',
                  accentColor: '#4ecdc4',
                  borderRadius: '4px'
                }}
              />
              Remember me! 💭
            </label>
            <a href="#" style={{
              color: '#ff6b6b',
              fontSize: '16px',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#ff5252'}
            onMouseLeave={(e) => e.target.style.color = '#ff6b6b'}
            >
              Forgot password? 🤔
            </a>
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '18px',
              borderRadius: '16px',
              border: 'none',
              background: 'linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1)',
              backgroundSize: '200% 200%',
              color: 'white',
              fontSize: '18px',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 16px rgba(255, 107, 107, 0.3)',
              animation: 'gradientShift 3s ease infinite',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)'
              e.target.style.boxShadow = '0 12px 24px rgba(255, 107, 107, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = '0 8px 16px rgba(255, 107, 107, 0.3)'
            }}
          >
            🚀 Let's Learn Together! 🌟
          </button>
        </form>

        {/* Fun Footer Message */}
        <div style={{
          textAlign: 'center',
          marginTop: '24px',
          padding: '16px',
          background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(78, 205, 196, 0.1))',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.3)'
        }}>
          <p style={{
            color: '#4a5568',
            fontSize: '14px',
            margin: 0,
            fontWeight: '500'
          }}>
            🎨 Every day is a new adventure in learning! 🎨
          </p>
        </div>
      </div>
    </div>
  )
}

export default StudentLogin