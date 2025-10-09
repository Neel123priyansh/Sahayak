import React from 'react'
import { GraduationCap, Clock, Award, Play } from 'lucide-react'

const Training = () => {
  const courses = [
    { 
      id: 1, 
      title: 'Modern Teaching Techniques', 
      duration: '2 hours', 
      progress: 75,
      level: 'Intermediate',
      badge: 'Popular'
    },
    { 
      id: 2, 
      title: 'Digital Classroom Management', 
      duration: '1.5 hours', 
      progress: 30,
      level: 'Beginner',
      badge: 'New'
    },
    { 
      id: 3, 
      title: 'Student Engagement Strategies', 
      duration: '3 hours', 
      progress: 100,
      level: 'Advanced',
      badge: 'Completed'
    }
  ]

  return (
    <div className="training-page" style={{ paddingBottom: '80px' }}>
      <div className="container">
        <h1 style={{
          fontSize: '24px',
          fontWeight: '700',
          color: '#1f2937',
          margin: '20px 0'
        }}>
          Teacher Training
        </h1>

        <div className="training-stats card" style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          marginBottom: '20px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '20px',
            textAlign: 'center'
          }}>
            <div>
              <div style={{ fontSize: '24px', fontWeight: '700' }}>8</div>
              <div style={{ fontSize: '14px', opacity: '0.9' }}>Courses Completed</div>
            </div>
            <div>
              <div style={{ fontSize: '24px', fontWeight: '700' }}>24h</div>
              <div style={{ fontSize: '14px', opacity: '0.9' }}>Learning Time</div>
            </div>
            <div>
              <div style={{ fontSize: '24px', fontWeight: '700' }}>5</div>
              <div style={{ fontSize: '14px', opacity: '0.9' }}>Certificates</div>
            </div>
          </div>
        </div>

        <h2 style={{
          fontSize: '18px',
          fontWeight: '600',
          color: '#1f2937',
          marginBottom: '16px'
        }}>
          Available Courses
        </h2>

        <div className="courses-list">
          {courses.map(course => (
            <div key={course.id} className="course-card card" style={{
              marginBottom: '16px',
              cursor: 'pointer',
              transition: 'transform 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '12px'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #3b82f620, #3b82f640)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <GraduationCap size={24} color="#3b82f6" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '4px'
                  }}>
                    <h3 style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#1f2937',
                      margin: 0
                    }}>
                      {course.title}
                    </h3>
                    <span style={{
                      background: course.badge === 'Completed' ? '#10b981' : 
                                 course.badge === 'New' ? '#f59e0b' : '#667eea',
                      color: 'white',
                      padding: '2px 8px',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}>
                      {course.badge}
                    </span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={16} />
                      {course.duration}
                    </div>
                    <span>{course.level}</span>
                  </div>
                </div>
                <button style={{
                  background: course.progress === 100 ? '#10b981' : '#667eea',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  {course.progress === 100 ? <Award size={16} /> : <Play size={16} />}
                  {course.progress === 100 ? 'Completed' : 'Continue'}
                </button>
              </div>
              
              {course.progress > 0 && course.progress < 100 && (
                <div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '8px'
                  }}>
                    <span style={{ fontSize: '14px', color: '#6b7280' }}>Progress</span>
                    <span style={{ fontSize: '14px', fontWeight: '600', color: '#667eea' }}>
                      {course.progress}%
                    </span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Training