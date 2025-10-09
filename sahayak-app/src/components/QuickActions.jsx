import React from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  BookOpen, 
  Users, 
  BarChart3, 
  Calendar,
  MessageSquare,
  Settings,
  Award,
  FileText,
  Clock,
  Star,
  TrendingUp,
  GraduationCap,
  Target,
  Lightbulb
} from 'lucide-react'

const QuickActions = ({ onStudentManagement, onAnalytics }) => {
  const navigate = useNavigate()

  // Educational SVG Illustration Component
  const EducationalIllustration = ({ type, className = "" }) => {
    const illustrations = {
      courses: (
        <svg viewBox="0 0 120 120" className={`w-full h-full ${className}`}>
          <rect x="20" y="40" width="25" height="35" rx="3" fill="#8B4513"/>
          <rect x="50" y="35" width="25" height="40" rx="3" fill="#D2691E"/>
          <rect x="80" y="45" width="25" height="30" rx="3" fill="#CD853F"/>
          <rect x="22" y="42" width="21" height="3" fill="#F5F1EB"/>
          <rect x="52" y="37" width="21" height="3" fill="#F5F1EB"/>
          <rect x="82" y="47" width="21" height="3" fill="#F5F1EB"/>
          <circle cx="60" cy="25" r="8" fill="#FFD700" opacity="0.8"/>
          <path d="M56 21 L60 17 L64 21 L62 25 L58 25 Z" fill="#FFA500"/>
        </svg>
      ),
      literature: (
        <svg viewBox="0 0 120 120" className={`w-full h-full ${className}`}>
          <rect x="30" y="30" width="60" height="60" rx="8" fill="#8B4513"/>
          <rect x="35" y="35" width="50" height="50" fill="#F5F1EB"/>
          <path d="M45 45 Q60 40 75 45" stroke="#8B4513" strokeWidth="2" fill="none"/>
          <path d="M45 55 Q60 50 75 55" stroke="#8B4513" strokeWidth="2" fill="none"/>
          <path d="M45 65 Q60 60 75 65" stroke="#8B4513" strokeWidth="2" fill="none"/>
          <circle cx="40" cy="25" r="5" fill="#FFD700"/>
        </svg>
      ),
      biology: (
        <svg viewBox="0 0 120 120" className={`w-full h-full ${className}`}>
          <circle cx="60" cy="60" r="25" fill="#8B4513" opacity="0.8"/>
          <circle cx="60" cy="60" r="15" fill="#D2691E"/>
          <circle cx="55" cy="55" r="3" fill="#F5F1EB"/>
          <circle cx="65" cy="55" r="3" fill="#F5F1EB"/>
          <circle cx="60" cy="65" r="5" fill="#CD853F"/>
          <path d="M45 45 Q60 35 75 45" stroke="#228B22" strokeWidth="3" fill="none"/>
          <path d="M45 75 Q60 85 75 75" stroke="#228B22" strokeWidth="3" fill="none"/>
        </svg>
      ),
      math: (
        <svg viewBox="0 0 120 120" className={`w-full h-full ${className}`}>
          <rect x="30" y="30" width="60" height="60" rx="8" fill="#8B4513"/>
          <text x="60" y="55" textAnchor="middle" fill="#F5F1EB" fontSize="20" fontWeight="bold">π</text>
          <text x="45" y="75" textAnchor="middle" fill="#F5F1EB" fontSize="16">x²</text>
          <text x="75" y="75" textAnchor="middle" fill="#F5F1EB" fontSize="16">∑</text>
          <circle cx="60" cy="20" r="8" fill="#FFD700"/>
        </svg>
      )
    }
    
    return illustrations[type] || illustrations.courses
  }

  const handleActionClick = (action) => {
    // Handle special actions with callbacks
    if (action.title === 'Create Story' && onStudentManagement) {
      onStudentManagement()
    } else if (action.title === 'Analytics' && onAnalytics) {
      onAnalytics()
    } else {
      // Navigate to regular routes
      navigate(action.path)
    }
  }

  // Circular progress component
  const CircularProgress = ({ percentage, size = 50, strokeWidth = 4, color = '#8B4513' }) => {
    const radius = (size - strokeWidth) / 2
    const circumference = radius * 2 * Math.PI
    const offset = circumference - (percentage / 100) * circumference

    return (
      <div className="relative">
        <svg width={size} height={size} className="progress-ring transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(139, 69, 19, 0.2)"
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
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold text-brown-700">{percentage}%</span>
        </div>
      </div>
    )
  }

  const actions = [
    {
      title: 'My courses',
      subtitle: '12 Subjects • 63 Lessons',
      icon: BookOpen,
      path: '/create-story',
      progress: 75,
      color: '#8B4513',
      stats: { lessons: 63, hours: 45 },
      illustration: 'courses'
    },
    {
      title: 'Literature',
      subtitle: 'Creative approaches to plane shapes',
      icon: Users,
      path: '/students',
      progress: 68,
      color: '#D2691E',
      stats: { lessons: 24, hours: 18 },
      illustration: 'literature'
    },
    {
      title: 'Biology',
      subtitle: 'Discoveries in cell biology',
      icon: BarChart3,
      path: '/analytics',
      progress: 82,
      color: '#228B22',
      stats: { lessons: 31, hours: 22 },
      illustration: 'biology'
    },
    {
      title: 'Math',
      subtitle: 'Advanced calculus concepts',
      icon: Calendar,
      path: '/schedule',
      progress: 56,
      color: '#CD853F',
      stats: { lessons: 18, hours: 14 },
      illustration: 'math'
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-brown-900 mb-2">
            My courses
          </h2>
          <div className="flex items-center space-x-3 text-brown-600">
            <span className="text-base">12 Subjects</span>
            <span className="text-base">•</span>
            <span className="text-base">63 Lessons</span>
            <span className="text-base">•</span>
            <span className="text-base">99 Hours</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full border border-green-200 shadow-sm">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <span className="text-green-700 text-sm font-medium">+12%</span>
          </div>
        </div>
      </div>
      
      {/* Course Cards */}
      <div className="grid grid-cols-1 gap-6">
        {actions.map((action, index) => (
          <div
            key={index}
            onClick={() => handleActionClick(action)}
            className="warm-card rounded-3xl p-8 cursor-pointer hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          >
            {/* Educational Background Illustrations */}
            <div className="absolute top-4 right-4 w-20 h-20 opacity-10">
              <EducationalIllustration type={action.illustration} />
            </div>
            
            {/* Floating Educational Elements */}
            <div className="absolute top-6 right-24 w-8 h-8 bg-amber-100 rounded-full animate-float shadow-sm"></div>
            <div className="absolute bottom-6 right-12 w-6 h-6 bg-orange-100 rounded-full animate-float shadow-sm"></div>
            <div className="absolute top-12 left-6 w-4 h-4 bg-yellow-100 rounded-full animate-float shadow-sm"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-6 flex-1">
                  <div className="p-5 bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl border border-amber-200 shadow-lg">
                    <action.icon className="w-8 h-8 text-brown-700" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-bold text-brown-900 mb-2">
                      {action.title}
                    </h3>
                    <p className="text-base text-brown-600 mb-3">
                      {action.subtitle}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-brown-500">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        <span>{action.stats.lessons} lessons</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{action.stats.hours}h</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-end gap-4">
                  <CircularProgress 
                    percentage={action.progress} 
                    size={70} 
                    color={action.color}
                  />
                  <button className="w-16 h-16 rounded-3xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center hover:from-amber-200 hover:to-orange-200 transition-all duration-200 group-hover:scale-110 border border-amber-200 shadow-lg hover:shadow-xl">
                    <div className="w-8 h-8 border-2 border-brown-600 rounded-xl flex items-center justify-center">
                      <div className="w-3 h-3 bg-brown-600 rounded-sm transform rotate-45"></div>
                    </div>
                  </button>
                </div>
              </div>
              
              {/* Enhanced Progress Section */}
              <div className="mt-8 pt-6 border-t border-amber-200">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-brown-600 text-base font-medium">Weekly Progress</span>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-500 fill-current" />
                    <span className="text-brown-700 text-base font-semibold">{action.progress}%</span>
                  </div>
                </div>
                <div className="w-full h-3 bg-amber-100 rounded-full overflow-hidden shadow-inner">
                  <div 
                    className="h-full rounded-full transition-all duration-1000 ease-out animate-progress-fill shadow-sm"
                    style={{ 
                      width: `${action.progress}%`,
                      backgroundColor: action.color
                    }}
                  />
                </div>
                
                {/* Activity dots */}
                <div className="flex justify-between mt-4">
                  {[...Array(7)].map((_, i) => (
                    <div 
                      key={i}
                      className={`w-3 h-3 rounded-full transition-all duration-500 shadow-sm ${
                        i < Math.floor(action.progress / 15) ? 'bg-brown-600' : 'bg-amber-200'
                      }`}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Warm shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-100/20 to-transparent -skew-x-12 transform translate-x-full group-hover:animate-shine"></div>
          </div>
        ))}
      </div>
      
      {/* Enhanced Bottom Action Bar */}
      <div className="warm-card rounded-3xl p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50/50 via-orange-50/50 to-yellow-50/50"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-brown-900 font-bold text-xl">Quick Actions</h3>
            <div className="text-brown-600 text-base">5 tools</div>
          </div>
          <div className="flex items-center justify-center space-x-6">
            <button className="p-5 rounded-3xl bg-gradient-to-br from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300 transition-all duration-200 hover:shadow-lg border border-blue-200 group">
              <Calendar className="w-7 h-7 text-blue-700 group-hover:scale-110 transition-transform" />
            </button>
            <button className="p-5 rounded-3xl bg-gradient-to-br from-green-100 to-green-200 hover:from-green-200 hover:to-green-300 transition-all duration-200 hover:shadow-lg border border-green-200 group">
              <MessageSquare className="w-7 h-7 text-green-700 group-hover:scale-110 transition-transform" />
            </button>
            <button className="p-5 rounded-3xl bg-gradient-to-br from-amber-200 to-orange-300 hover:from-amber-300 hover:to-orange-400 transition-all duration-200 hover:shadow-lg shadow-lg group">
              <Award className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
            </button>
            <button className="p-5 rounded-3xl bg-gradient-to-br from-purple-100 to-purple-200 hover:from-purple-200 hover:to-purple-300 transition-all duration-200 hover:shadow-lg border border-purple-200 group">
              <FileText className="w-7 h-7 text-purple-700 group-hover:scale-110 transition-transform" />
            </button>
            <button className="p-5 rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 transition-all duration-200 hover:shadow-lg border border-gray-200 group">
              <Settings className="w-7 h-7 text-gray-700 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickActions