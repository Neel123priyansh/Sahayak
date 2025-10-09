import React from 'react'
import { User, Settings, Bell, Globe, LogOut, Edit, Award, BookOpen } from 'lucide-react'

const Profile = ({ user, onLogout }) => {
  const userStats = [
    { label: 'Stories Created', value: '12', icon: BookOpen },
    { label: 'Students Helped', value: '45', icon: User },
    { label: 'Certificates', value: '5', icon: Award }
  ]

  const handleMenuClick = (item) => {
    if (item.label === 'Logout') {
      onLogout()
    }
    // Handle other menu items here
  }

  const menuItems = [
    { id: 1, label: 'Edit Profile', icon: Edit, color: '#667eea' },
    { id: 2, label: 'Notifications', icon: Bell, color: '#f59e0b' },
    { id: 3, label: 'Language Settings', icon: Globe, color: '#10b981' },
    { id: 4, label: 'App Settings', icon: Settings, color: '#6b7280' },
    { id: 5, label: 'Logout', icon: LogOut, color: '#ef4444' }
  ]

  return (
    <div className="profile-page" style={{ paddingBottom: '80px' }}>
      <div className="container">
        {/* Profile Header */}
        <div className="profile-header card" style={{
          textAlign: 'center',
          margin: '20px 0',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px auto'
          }}>
            <User size={40} color="white" />
          </div>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '700',
            marginBottom: '4px'
          }}>
            Priya Sharma
          </h2>
          <p style={{
            fontSize: '16px',
            opacity: '0.9',
            marginBottom: '16px'
          }}>
            Primary School Teacher
          </p>
          <div style={{
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '20px',
            padding: '8px 16px',
            display: 'inline-block',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            Level 3 Educator
          </div>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
          marginBottom: '24px'
        }}>
          {userStats.map((stat, index) => (
            <div key={index} className="card" style={{
              textAlign: 'center',
              padding: '16px 12px'
            }}>
              <stat.icon size={24} color="#667eea" style={{ marginBottom: '8px' }} />
              <div style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#1f2937',
                marginBottom: '4px'
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '12px',
                color: '#6b7280'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Menu Items */}
        <div className="profile-menu">
          {menuItems.map(item => (
            <div key={item.id} className="menu-item card" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '16px',
              marginBottom: '12px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onClick={() => handleMenuClick(item)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateX(4px)'
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateX(0)'
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: `${item.color}20`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <item.icon size={20} color={item.color} />
              </div>
              <span style={{
                fontSize: '16px',
                fontWeight: '500',
                color: '#1f2937',
                flex: 1
              }}>
                {item.label}
              </span>
              <div style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#d1d5db'
              }}></div>
            </div>
          ))}
        </div>

        {/* App Version */}
        <div style={{
          textAlign: 'center',
          marginTop: '24px',
          padding: '16px',
          fontSize: '14px',
          color: '#9ca3af'
        }}>
          Sahayak AI Teaching Assistant v1.0.0
        </div>
      </div>
    </div>
  )
}

export default Profile