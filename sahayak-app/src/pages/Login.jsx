import React, { useState } from 'react'
import { Eye, EyeOff, GraduationCap, User } from 'lucide-react'

const Login = ({ onLogin }) => {
  const [userType, setUserType] = useState('teacher')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simple authentication - in real app, this would validate credentials
    onLogin({ email, userType })
  }

  return (
    <div className="login-container" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div className="login-card" style={{
        background: '#1f1f1f',
        borderRadius: '16px',
        padding: '40px',
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
        border: '1px solid #333'
      }}>
        {/* Logo and Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '16px'
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: '#22c55e',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: '700',
              fontSize: '18px'
            }}>
              S
            </div>
            <h1 style={{
              fontSize: '24px',
              fontWeight: '700',
              color: 'white',
              margin: 0
            }}>
              Sahayak
            </h1>
          </div>
          
          <p style={{
            color: '#9ca3af',
            fontSize: '14px',
            margin: 0,
            marginBottom: '24px'
          }}>
            AI Teaching Assistant for enhanced learning experiences
          </p>
          
          <h2 style={{
            fontSize: '20px',
            fontWeight: '600',
            color: 'white',
            margin: 0,
            marginBottom: '8px'
          }}>
            Welcome Back
          </h2>
          
          <p style={{
            color: '#9ca3af',
            fontSize: '14px',
            margin: 0
          }}>
            Sign in to access your personalized learning dashboard
          </p>
        </div>

        {/* User Type Selection */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{
            display: 'flex',
            gap: '8px',
            background: '#2a2a2a',
            borderRadius: '8px',
            padding: '4px'
          }}>
            <button
              type="button"
              onClick={() => setUserType('teacher')}
              style={{
                flex: 1,
                padding: '12px',
                borderRadius: '6px',
                border: 'none',
                background: userType === 'teacher' ? '#22c55e' : 'transparent',
                color: userType === 'teacher' ? 'white' : '#9ca3af',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'all 0.2s ease'
              }}
            >
              <GraduationCap size={16} />
              Teacher
            </button>
            <button
              type="button"
              onClick={() => setUserType('student')}
              style={{
                flex: 1,
                padding: '12px',
                borderRadius: '6px',
                border: 'none',
                background: userType === 'student' ? '#22c55e' : 'transparent',
                color: userType === 'student' ? 'white' : '#9ca3af',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'all 0.2s ease'
              }}
            >
              <User size={16} />
              Student
            </button>
          </div>
          
          {userType === 'teacher' && (
            <p style={{
              color: '#22c55e',
              fontSize: '12px',
              margin: '8px 0 0 0',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <span style={{ fontSize: '10px' }}>●</span>
              Teacher Portal
            </p>
          )}
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              color: 'white',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '8px'
            }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '8px',
                border: '1px solid #404040',
                background: '#2a2a2a',
                color: 'white',
                fontSize: '14px',
                outline: 'none',
                transition: 'border-color 0.2s ease',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#22c55e'}
              onBlur={(e) => e.target.style.borderColor = '#404040'}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              color: 'white',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '8px'
            }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  paddingRight: '48px',
                  borderRadius: '8px',
                  border: '1px solid #404040',
                  background: '#2a2a2a',
                  color: 'white',
                  fontSize: '14px',
                  outline: 'none',
                  transition: 'border-color 0.2s ease',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#22c55e'}
                onBlur={(e) => e.target.style.borderColor = '#404040'}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#9ca3af',
                  cursor: 'pointer',
                  padding: '4px'
                }}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px'
          }}>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#9ca3af',
              fontSize: '14px',
              cursor: 'pointer'
            }}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{
                  width: '16px',
                  height: '16px',
                  accentColor: '#22c55e'
                }}
              />
              Remember me
            </label>
            <a href="#" style={{
              color: '#22c55e',
              fontSize: '14px',
              textDecoration: 'none'
            }}>
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: 'none',
              background: '#22c55e',
              color: 'white',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#16a34a'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#22c55e'}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login