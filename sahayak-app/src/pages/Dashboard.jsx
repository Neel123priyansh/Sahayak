import React, { useState } from 'react'
import { BookOpen, Users, Award, TrendingUp, Star, Clock, Target, Zap, Activity, Calendar, BarChart3, GraduationCap, Brain, Lightbulb } from 'lucide-react'
import WelcomeBanner from '../components/WelcomeBanner'
import ProgressTracker from '../components/ProgressTracker'
import QuickActions from '../components/QuickActions'
import StatsCard from '../components/StatsCard'
import Navigation from '../components/Navigation'
import StudentManagement from '../components/StudentManagement'
import AnalyticsDashboard from '../components/AnalyticsDashboard'

// Educational SVG Illustrations Component
const EducationalIllustration = ({ type, className = "" }) => {
  const illustrations = {
    student: (
      <svg viewBox="0 0 200 200" className={className}>
        <defs>
          <linearGradient id="studentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B35" />
            <stop offset="100%" stopColor="#E74C3C" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="80" r="25" fill="#8B4513" />
        <rect x="85" y="105" width="30" height="40" rx="15" fill="url(#studentGrad)" />
        <circle cx="100" cy="160" r="30" fill="#3498DB" opacity="0.2" />
        <path d="M80 70 Q100 50 120 70" stroke="#654321" strokeWidth="3" fill="none" />
        <circle cx="95" cy="75" r="2" fill="white" />
        <circle cx="105" cy="75" r="2" fill="white" />
        <path d="M95 85 Q100 90 105 85" stroke="white" strokeWidth="2" fill="none" />
      </svg>
    ),
    books: (
      <svg viewBox="0 0 200 200" className={className}>
        <defs>
          <linearGradient id="bookGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#27AE60" />
            <stop offset="100%" stopColor="#2ECC71" />
          </linearGradient>
          <linearGradient id="bookGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3498DB" />
            <stop offset="100%" stopColor="#2980B9" />
          </linearGradient>
        </defs>
        <rect x="60" y="80" width="25" height="80" rx="3" fill="url(#bookGrad1)" />
        <rect x="90" y="70" width="25" height="90" rx="3" fill="url(#bookGrad2)" />
        <rect x="120" y="85" width="25" height="75" rx="3" fill="#FF6B35" />
        <circle cx="100" cy="50" r="20" fill="#F1C40F" opacity="0.3" />
        <path d="M90 45 L100 35 L110 45" stroke="#8B4513" strokeWidth="2" fill="none" />
      </svg>
    ),
    trophy: (
      <svg viewBox="0 0 200 200" className={className}>
        <defs>
          <linearGradient id="trophyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F1C40F" />
            <stop offset="100%" stopColor="#F39C12" />
          </linearGradient>
        </defs>
        <ellipse cx="100" cy="120" rx="30" ry="40" fill="url(#trophyGrad)" />
        <rect x="85" y="160" width="30" height="20" rx="5" fill="#8B4513" />
        <circle cx="100" cy="100" r="15" fill="#E74C3C" />
        <path d="M70 110 Q60 100 70 90" stroke="#C0392B" strokeWidth="3" fill="none" />
        <path d="M130 110 Q140 100 130 90" stroke="#C0392B" strokeWidth="3" fill="none" />
        <circle cx="100" cy="60" r="25" fill="#FF6B35" opacity="0.2" />
        <path d="M90 55 L100 45 L110 55" stroke="#8B4513" strokeWidth="2" fill="none" />
      </svg>
    )
  }
  
  return illustrations[type] || illustrations.student
}

const Dashboard = ({ user }) => {
  const [showStudentManagement, setShowStudentManagement] = useState(false)
  const [showAnalytics, setShowAnalytics] = useState(false)
  
  const stats = [
    { 
      id: 1, 
      title: 'Active Students', 
      value: 156, 
      change: '+12%', 
      icon: Users, 
      gradient: 'card-gradient-brown',
      progress: 85,
      bgColor: 'from-orange-400 to-orange-500',
      illustration: 'student'
    },
    { 
      id: 2, 
      title: 'Stories Completed', 
      value: 89, 
      change: '+23%', 
      icon: BookOpen, 
      gradient: 'card-gradient-green',
      progress: 72,
      bgColor: 'from-green-400 to-green-500',
      illustration: 'books'
    },
    { 
      id: 3, 
      title: 'Training Sessions', 
      value: 24, 
      change: '+8%', 
      icon: Award, 
      gradient: 'card-gradient-orange',
      progress: 90,
      bgColor: 'from-yellow-400 to-yellow-500',
      illustration: 'trophy'
    }
  ]

  const activityData = {
    totalHours: '15h 43m',
    weeklyProgress: 78,
    activities: [
      { type: 'Done', count: 12, color: 'var(--color-progress-done)' },
      { type: 'Failed', count: 2, color: 'var(--color-progress-failed)' },
      { type: 'In Progress', count: 5, color: 'var(--color-progress-in-progress)' },
      { type: 'Missed', count: 1, color: 'var(--color-progress-missed)' }
    ]
  }

  const roadmapItems = [
    { 
      title: 'Review 60%', 
      status: 'done', 
      avatar: '👨‍💼',
      progress: 60
    },
    { 
      title: 'Done 100%', 
      status: 'done', 
      avatar: '👩‍🎓',
      progress: 100
    },
    { 
      title: 'Done 100%', 
      status: 'done', 
      avatar: '👨‍🏫',
      progress: 100
    },
    { 
      title: 'In progress 55%', 
      status: 'in-progress', 
      avatar: '👩‍💻',
      progress: 55
    },
    { 
      title: 'Prep', 
      status: 'review', 
      avatar: '👨‍🎨',
      progress: 25
    }
  ]

  // Circular progress component
  const CircularProgress = ({ percentage, size = 120, strokeWidth = 8, color = '#4f9cf9' }) => {
    const radius = (size - strokeWidth) / 2
    const circumference = radius * 2 * Math.PI
    const offset = circumference - (percentage / 100) * circumference

    return (
      <div className="progress-indicator">
        <svg width={size} height={size} className="progress-ring">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="progress-ring-circle animate-progress-fill"
            style={{ '--progress-offset': offset }}
          />
        </svg>
        <div className="progress-text text-2xl font-bold text-white">
          {percentage}%
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-tertiary relative overflow-hidden">
      {/* Educational Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 opacity-10">
          <EducationalIllustration type="student" className="w-full h-full" />
        </div>
        <div className="absolute top-60 right-20 w-32 h-32 opacity-10">
          <EducationalIllustration type="books" className="w-full h-full" />
        </div>
        <div className="absolute bottom-40 left-20 w-36 h-36 opacity-10">
          <EducationalIllustration type="trophy" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 right-10 w-28 h-28 bg-gradient-to-br from-accent-orange/10 to-accent-brown/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-gradient-to-br from-accent-green/10 to-accent-blue/10 rounded-full blur-xl"></div>
      </div>

      <div className="relative pb-20 px-4 sm:px-6 pt-6 space-y-6">
        {/* Welcome Banner with Educational Theme */}
        <div className="animate-slide-up-dark">
          <WelcomeBanner user={user} />
        </div>
        
        {/* Hero Section with Educational Imagery */}
        <div className="warm-card rounded-3xl p-6 sm:p-8 relative overflow-hidden">
          <div className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 opacity-20">
            <EducationalIllustration type="student" className="w-full h-full" />
          </div>
          <div className="relative z-10">
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-3 leading-tight">
              Putting Your Child's Future in Great Motion
            </h2>
            <p className="text-text-secondary mb-6 text-sm sm:text-base">
              We just don't give our students only lecture but real life experience.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 text-sm text-text-secondary">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                <span>No Credit Card</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-orange rounded-full"></div>
                <span>14 Days Trial</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                <span>Free For Teachers</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Cards with Proper Alignment */}
        <div className="space-y-4 animate-slide-up-dark" style={{ animationDelay: '0.1s' }}>
          {stats.map((stat, index) => (
            <div key={stat.id} className="animate-bounce-in-dark hover-lift-dark" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="warm-card rounded-3xl p-4 sm:p-6 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-12 h-12 sm:w-16 sm:h-16 opacity-20">
                  <EducationalIllustration type={stat.illustration} className="w-full h-full" />
                </div>
                <StatsCard
                  title={stat.title}
                  value={stat.value}
                  change={stat.change}
                  icon={stat.icon}
                  gradient={stat.gradient}
                  progress={stat.progress}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Timesheet Section with Educational Theme */}
        <div className="animate-slide-up-dark" style={{ animationDelay: '0.3s' }}>
          <div className="warm-card rounded-3xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 w-12 h-12 sm:w-16 sm:h-16 opacity-15">
              <EducationalIllustration type="books" className="w-full h-full" />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-accent-orange/20 rounded-2xl">
                  <Clock className="w-6 h-6 text-accent-brown" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-text-primary">Learning Progress</h3>
                  <p className="text-text-secondary text-sm sm:text-base">Weekly activity overview</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <button className="px-4 py-2 bg-accent-brown text-white rounded-xl text-sm font-medium">Week</button>
                <button className="px-4 py-2 bg-surface text-text-secondary rounded-xl text-sm">Month</button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-text-primary mb-1">{activityData.totalHours}</div>
                <div className="text-text-secondary text-sm sm:text-base">This week / 20h progress</div>
              </div>
              <div className="activity-ring flex justify-center sm:justify-end">
                <CircularProgress 
                  percentage={activityData.weeklyProgress} 
                  size={100} 
                  color="var(--color-accent-brown)"
                />
              </div>
            </div>

            {/* Activity Legend with Educational Colors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {activityData.activities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between sm:justify-start space-x-3 p-3 bg-surface/50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-4 h-4 rounded-full flex-shrink-0"
                      style={{ backgroundColor: activity.color }}
                    ></div>
                    <span className="text-text-secondary font-medium text-sm sm:text-base">{activity.type}</span>
                  </div>
                  <span className="text-text-primary font-bold">{activity.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Roadmap Section with Educational Theme */}
        <div className="animate-slide-up-dark" style={{ animationDelay: '0.4s' }}>
          <div className="warm-card rounded-3xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 w-12 h-12 sm:w-16 sm:h-16 opacity-15">
              <EducationalIllustration type="trophy" className="w-full h-full" />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-accent-green/20 rounded-2xl">
                  <Target className="w-6 h-6 text-accent-brown" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-text-primary">Learning Roadmap</h3>
              </div>
              <div className="flex space-x-2 text-sm text-text-secondary">
                <span className="px-3 py-1 bg-surface rounded-lg">D</span>
                <span className="px-3 py-1 bg-surface rounded-lg">W</span>
                <span className="px-3 py-1 bg-surface rounded-lg">M</span>
                <span className="px-3 py-1 bg-accent-brown text-white rounded-lg">Y</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {roadmapItems.map((item, index) => (
                <div key={index} className="p-4 bg-surface/50 rounded-2xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 flex-1 min-w-0">
                      <div className="text-2xl sm:text-3xl flex-shrink-0">{item.avatar}</div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-text-primary mb-2 text-sm sm:text-base truncate">{item.title}</div>
                        <div className="flex items-center space-x-3">
                          <div className="w-16 sm:w-20 h-2 bg-surface rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full transition-all duration-500 ${
                                item.status === 'done' ? 'bg-accent-green' : 
                                item.status === 'in-progress' ? 'bg-accent-orange' : 
                                'bg-accent-blue'
                              }`}
                              style={{ width: `${item.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-text-secondary font-medium">{item.progress}%</span>
                        </div>
                      </div>
                    </div>
                    <div className={`w-3 h-3 rounded-full flex-shrink-0 ml-2 ${
                      item.status === 'done' ? 'bg-accent-green' : 
                      item.status === 'in-progress' ? 'bg-accent-orange' : 
                      'bg-accent-blue'
                    }`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="animate-slide-up-dark" style={{ animationDelay: '0.5s' }}>
          <QuickActions 
            onStudentManagement={() => setShowStudentManagement(true)}
            onAnalytics={() => setShowAnalytics(true)}
          />
        </div>
      </div>

      {/* Bottom Navigation */}
      <Navigation />

      {/* Student Management Modal */}
      <StudentManagement 
        isOpen={showStudentManagement}
        onClose={() => setShowStudentManagement(false)}
      />

      {/* Analytics Dashboard Modal */}
      <AnalyticsDashboard 
        isOpen={showAnalytics}
        onClose={() => setShowAnalytics(false)}
      />
    </div>
  )
}

export default Dashboard