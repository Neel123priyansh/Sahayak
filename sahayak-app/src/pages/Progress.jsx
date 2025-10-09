import React from 'react'
import { TrendingUp, Users, BookOpen, Award, Calendar } from 'lucide-react'

const Progress = () => {
  const weeklyData = [
    { day: 'Mon', stories: 2, students: 8 },
    { day: 'Tue', stories: 3, students: 12 },
    { day: 'Wed', stories: 1, students: 6 },
    { day: 'Thu', stories: 4, students: 15 },
    { day: 'Fri', stories: 2, students: 10 },
    { day: 'Sat', stories: 1, students: 4 },
    { day: 'Sun', stories: 0, students: 2 }
  ]

  const achievements = [
    { id: 1, title: 'Story Master', description: 'Created 10 stories', earned: true },
    { id: 2, title: 'Student Helper', description: 'Helped 50 students', earned: true },
    { id: 3, title: 'Learning Streak', description: '7 days in a row', earned: false }
  ]

  return (
    <div className="progress-page" style={{ paddingBottom: '80px' }}>
      <div className="container">
        <h1 style={{
          fontSize: '24px',
          fontWeight: '700',
          color: '#1f2937',
          margin: '20px 0'
        }}>
          Analytics & Progress
        </h1>

        {/* Overview Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '16px',
          marginBottom: '24px'
        }}>
          <div className="card" style={{ textAlign: 'center' }}>
            <TrendingUp size={32} color="#10b981" style={{ marginBottom: '8px' }} />
            <div style={{ fontSize: '24px', fontWeight: '700', color: '#1f2937' }}>85%</div>
            <div style={{ fontSize: '14px', color: '#6b7280' }}>Overall Progress</div>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <Users size={32} color="#3b82f6" style={{ marginBottom: '8px' }} />
            <div style={{ fontSize: '24px', fontWeight: '700', color: '#1f2937' }}>45</div>
            <div style={{ fontSize: '14px', color: '#6b7280' }}>Students Helped</div>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <BookOpen size={32} color="#f59e0b" style={{ marginBottom: '8px' }} />
            <div style={{ fontSize: '24px', fontWeight: '700', color: '#1f2937' }}>12</div>
            <div style={{ fontSize: '14px', color: '#6b7280' }}>Stories Created</div>
          </div>
        </div>

        {/* Weekly Activity Chart */}
        <div className="card" style={{ marginBottom: '24px' }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#1f2937',
            marginBottom: '16px'
          }}>
            Weekly Activity
          </h3>
          <div style={{
            display: 'flex',
            alignItems: 'end',
            gap: '12px',
            height: '200px',
            padding: '20px 0'
          }}>
            {weeklyData.map((data, index) => (
              <div key={index} style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px'
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <div style={{
                    width: '20px',
                    height: `${data.stories * 20 + 20}px`,
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    borderRadius: '4px'
                  }}></div>
                  <div style={{
                    width: '20px',
                    height: `${data.students * 8 + 10}px`,
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    borderRadius: '4px'
                  }}></div>
                </div>
                <span style={{
                  fontSize: '12px',
                  color: '#6b7280',
                  fontWeight: '500'
                }}>
                  {data.day}
                </span>
              </div>
            ))}
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            marginTop: '16px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '12px',
                height: '12px',
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                borderRadius: '2px'
              }}></div>
              <span style={{ fontSize: '14px', color: '#6b7280' }}>Stories</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '12px',
                height: '12px',
                background: 'linear-gradient(135deg, #10b981, #059669)',
                borderRadius: '2px'
              }}></div>
              <span style={{ fontSize: '14px', color: '#6b7280' }}>Students</span>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="card">
          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#1f2937',
            marginBottom: '16px'
          }}>
            Achievements
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {achievements.map(achievement => (
              <div key={achievement.id} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px',
                borderRadius: '8px',
                background: achievement.earned ? '#f0fdf4' : '#f9fafb',
                border: `1px solid ${achievement.earned ? '#bbf7d0' : '#e5e7eb'}`
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  background: achievement.earned ? '#10b981' : '#9ca3af',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Award size={20} color="white" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: achievement.earned ? '#065f46' : '#6b7280',
                    marginBottom: '2px'
                  }}>
                    {achievement.title}
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: achievement.earned ? '#047857' : '#9ca3af'
                  }}>
                    {achievement.description}
                  </div>
                </div>
                {achievement.earned && (
                  <div style={{
                    background: '#10b981',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>
                    Earned
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Progress