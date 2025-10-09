import React, { useState } from 'react'
import { User, GraduationCap, ArrowRight, Sparkles, BookOpen } from 'lucide-react'
import StudentLogin from './StudentLogin'
import TeacherLogin from './TeacherLogin'

const LoginSelector = ({ onLogin }) => {
  const [selectedLoginType, setSelectedLoginType] = useState(null)

  if (selectedLoginType === 'student') {
    return <StudentLogin onLogin={onLogin} />
  }

  if (selectedLoginType === 'teacher') {
    return <TeacherLogin onLogin={onLogin} />
  }

  return (
    <div className="login-selector-container" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white opacity-10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white opacity-15 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-white opacity-20 rounded-full animate-bounce"></div>
        <div className="absolute top-32 right-1/3 w-20 h-20 bg-white opacity-10 rounded-full animate-float"></div>
      </div>

      <div className="selector-card" style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        borderRadius: '24px',
        padding: '48px',
        width: '100%',
        maxWidth: '600px',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '24px'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: '700',
              fontSize: '24px',
              boxShadow: '0 8px 16px rgba(102, 126, 234, 0.3)'
            }}>
              S
            </div>
            <h1 style={{
              fontSize: '36px',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              margin: 0
            }}>
              Sahayak
            </h1>
          </div>
          
          <h2 style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#2d3748',
            margin: '0 0 12px 0'
          }}>
            Welcome to Your Learning Journey
          </h2>
          
          <p style={{
            color: '#4a5568',
            fontSize: '18px',
            margin: 0,
            lineHeight: '1.6'
          }}>
            Choose your role to access your personalized experience
          </p>
        </div>

        {/* Login Options */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px',
          marginBottom: '32px'
        }}>
          {/* Student Login Option */}
          <div
            onClick={() => setSelectedLoginType('student')}
            style={{
              background: 'linear-gradient(135deg, #ff6b6b, #4ecdc4)',
              borderRadius: '20px',
              padding: '32px 24px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              border: '2px solid transparent',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 8px 16px rgba(255, 107, 107, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-4px)'
              e.target.style.boxShadow = '0 12px 24px rgba(255, 107, 107, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = '0 8px 16px rgba(255, 107, 107, 0.2)'
            }}
          >
            {/* Fun Background Elements for Student */}
            <div className="absolute inset-0 overflow-hidden">
              <Sparkles className="absolute top-4 right-4 w-6 h-6 text-white opacity-30 animate-pulse" />
              <BookOpen className="absolute bottom-4 left-4 w-5 h-5 text-white opacity-40 animate-bounce" />
            </div>

            <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto',
                backdropFilter: 'blur(10px)'
              }}>
                <User size={32} color="white" />
              </div>
              
              <h3 style={{
                fontSize: '24px',
                fontWeight: '700',
                color: 'white',
                margin: '0 0 8px 0'
              }}>
                🎨 Student Login
              </h3>
              
              <p style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '16px',
                margin: '0 0 16px 0',
                lineHeight: '1.4'
              }}>
                Colorful and fun learning experience
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                color: 'white',
                fontSize: '14px',
                fontWeight: '600'
              }}>
                Get Started <ArrowRight size={16} />
              </div>
            </div>
          </div>

          {/* Teacher Login Option */}
          <div
            onClick={() => setSelectedLoginType('teacher')}
            style={{
              background: 'linear-gradient(135deg, #2d3748, #4a5568)',
              borderRadius: '20px',
              padding: '32px 24px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              border: '2px solid transparent',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 8px 16px rgba(45, 55, 72, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-4px)'
              e.target.style.boxShadow = '0 12px 24px rgba(45, 55, 72, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = '0 8px 16px rgba(45, 55, 72, 0.2)'
            }}
          >
            <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto',
                backdropFilter: 'blur(10px)'
              }}>
                <GraduationCap size={32} color="white" />
              </div>
              
              <h3 style={{
                fontSize: '24px',
                fontWeight: '700',
                color: 'white',
                margin: '0 0 8px 0'
              }}>
                Teacher Portal
              </h3>
              
              <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '16px',
                margin: '0 0 16px 0',
                lineHeight: '1.4'
              }}>
                Professional and minimal interface
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                color: 'white',
                fontSize: '14px',
                fontWeight: '600'
              }}>
                Access Portal <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          textAlign: 'center',
          paddingTop: '24px',
          borderTop: '1px solid rgba(0, 0, 0, 0.1)'
        }}>
          <p style={{
            color: '#6b7280',
            fontSize: '14px',
            margin: 0,
            lineHeight: '1.5'
          }}>
            AI-powered teaching assistant for enhanced learning experiences
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginSelector