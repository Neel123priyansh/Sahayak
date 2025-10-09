import React, { useState } from 'react'
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  BookOpen, 
  Award, 
  Clock, 
  Target, 
  Calendar,
  Download,
  Filter,
  X,
  ChevronUp,
  ChevronDown,
  Star,
  Zap,
  Trophy
} from 'lucide-react'

const AnalyticsDashboard = ({ isOpen, onClose }) => {
  const [timeRange, setTimeRange] = useState('week')
  const [selectedMetric, setSelectedMetric] = useState('engagement')

  const overviewStats = {
    totalStudents: 156,
    activeStudents: 142,
    storiesCompleted: 1247,
    averageScore: 87.5,
    totalTime: '2,340h',
    completionRate: 94.2
  }

  const engagementData = [
    { day: 'Mon', students: 45, stories: 89, time: 156 },
    { day: 'Tue', students: 52, stories: 102, time: 178 },
    { day: 'Wed', students: 48, stories: 95, time: 165 },
    { day: 'Thu', students: 55, stories: 108, time: 189 },
    { day: 'Fri', students: 49, stories: 97, time: 171 },
    { day: 'Sat', students: 38, stories: 76, time: 134 },
    { day: 'Sun', students: 41, stories: 82, time: 142 }
  ]

  const performanceMetrics = [
    {
      category: 'Reading Comprehension',
      average: 89.2,
      trend: 5.3,
      students: 142,
      color: 'text-blue-400'
    },
    {
      category: 'Creative Writing',
      average: 85.7,
      trend: 3.1,
      students: 138,
      color: 'text-purple-400'
    },
    {
      category: 'Critical Thinking',
      average: 87.4,
      trend: -1.2,
      students: 134,
      color: 'text-green-400'
    },
    {
      category: 'Problem Solving',
      average: 83.9,
      trend: 7.8,
      students: 129,
      color: 'text-orange-400'
    }
  ]

  const topPerformers = [
    { name: 'Emma Johnson', score: 96.5, stories: 24, avatar: '👧', badge: 'gold' },
    { name: 'Liam Chen', score: 94.2, stories: 31, avatar: '👦', badge: 'silver' },
    { name: 'Sophia Rodriguez', score: 93.8, stories: 18, avatar: '👧', badge: 'bronze' },
    { name: 'Noah Williams', score: 92.1, stories: 22, avatar: '👦', badge: null },
    { name: 'Ava Davis', score: 91.7, stories: 19, avatar: '👧', badge: null }
  ]

  const recentAchievements = [
    {
      student: 'Emma Johnson',
      achievement: 'Completed 25 Stories',
      type: 'milestone',
      time: '2 hours ago',
      icon: BookOpen
    },
    {
      student: 'Liam Chen',
      achievement: 'Perfect Score Streak (5 days)',
      type: 'streak',
      time: '4 hours ago',
      icon: Zap
    },
    {
      student: 'Sophia Rodriguez',
      achievement: 'Creative Writing Master',
      type: 'badge',
      time: '1 day ago',
      icon: Award
    },
    {
      student: 'Noah Williams',
      achievement: 'Speed Reader Badge',
      type: 'badge',
      time: '2 days ago',
      icon: Trophy
    }
  ]

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'gold': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'silver': return 'bg-gray-400/20 text-gray-300 border-gray-400/30'
      case 'bronze': return 'bg-orange-600/20 text-orange-400 border-orange-600/30'
      default: return 'bg-surface-500/20 text-surface-400 border-surface-500/30'
    }
  }

  const getAchievementIcon = (type) => {
    switch (type) {
      case 'milestone': return 'bg-blue-500/20 text-blue-400'
      case 'streak': return 'bg-orange-500/20 text-orange-400'
      case 'badge': return 'bg-purple-500/20 text-purple-400'
      default: return 'bg-surface-500/20 text-surface-400'
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-7xl h-[90vh] bg-surface-900/95 backdrop-blur-xl rounded-3xl border border-primary-500/20 shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-primary-500/20 bg-gradient-to-r from-primary-600/10 to-secondary-600/10">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary-500/20 rounded-xl">
              <BarChart3 className="w-6 h-6 text-primary-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Analytics Dashboard</h3>
              <p className="text-sm text-surface-300">Comprehensive learning insights and metrics</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 bg-surface-800/50 border border-surface-600 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50"
            >
              <option value="day">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
            </select>
            <button className="flex items-center space-x-2 px-4 py-2 bg-surface-700/50 hover:bg-surface-600/50 rounded-xl text-surface-300 hover:text-white text-sm transition-colors">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-surface-700/50 rounded-xl transition-colors"
            >
              <X className="w-5 h-5 text-surface-400" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Overview Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            <div className="card-glass p-4">
              <div className="flex items-center justify-between mb-2">
                <Users className="w-5 h-5 text-primary-400" />
                <span className="text-xs text-green-400 flex items-center">
                  <ChevronUp className="w-3 h-3" />
                  12%
                </span>
              </div>
              <div className="text-2xl font-bold text-white">{overviewStats.totalStudents}</div>
              <div className="text-xs text-surface-400">Total Students</div>
            </div>

            <div className="card-glass p-4">
              <div className="flex items-center justify-between mb-2">
                <Zap className="w-5 h-5 text-green-400" />
                <span className="text-xs text-green-400 flex items-center">
                  <ChevronUp className="w-3 h-3" />
                  8%
                </span>
              </div>
              <div className="text-2xl font-bold text-white">{overviewStats.activeStudents}</div>
              <div className="text-xs text-surface-400">Active Students</div>
            </div>

            <div className="card-glass p-4">
              <div className="flex items-center justify-between mb-2">
                <BookOpen className="w-5 h-5 text-blue-400" />
                <span className="text-xs text-green-400 flex items-center">
                  <ChevronUp className="w-3 h-3" />
                  15%
                </span>
              </div>
              <div className="text-2xl font-bold text-white">{overviewStats.storiesCompleted}</div>
              <div className="text-xs text-surface-400">Stories Completed</div>
            </div>

            <div className="card-glass p-4">
              <div className="flex items-center justify-between mb-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-xs text-green-400 flex items-center">
                  <ChevronUp className="w-3 h-3" />
                  3%
                </span>
              </div>
              <div className="text-2xl font-bold text-white">{overviewStats.averageScore}%</div>
              <div className="text-xs text-surface-400">Average Score</div>
            </div>

            <div className="card-glass p-4">
              <div className="flex items-center justify-between mb-2">
                <Clock className="w-5 h-5 text-purple-400" />
                <span className="text-xs text-green-400 flex items-center">
                  <ChevronUp className="w-3 h-3" />
                  22%
                </span>
              </div>
              <div className="text-2xl font-bold text-white">{overviewStats.totalTime}</div>
              <div className="text-xs text-surface-400">Total Time</div>
            </div>

            <div className="card-glass p-4">
              <div className="flex items-center justify-between mb-2">
                <Target className="w-5 h-5 text-orange-400" />
                <span className="text-xs text-green-400 flex items-center">
                  <ChevronUp className="w-3 h-3" />
                  5%
                </span>
              </div>
              <div className="text-2xl font-bold text-white">{overviewStats.completionRate}%</div>
              <div className="text-xs text-surface-400">Completion Rate</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Engagement Chart */}
            <div className="card-glass p-6">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-semibold text-white">Weekly Engagement</h4>
                <div className="flex space-x-1 bg-surface-800/50 rounded-lg p-1">
                  {['students', 'stories', 'time'].map(metric => (
                    <button
                      key={metric}
                      onClick={() => setSelectedMetric(metric)}
                      className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                        selectedMetric === metric
                          ? 'bg-primary-500 text-white'
                          : 'text-surface-300 hover:text-white'
                      }`}
                    >
                      {metric.charAt(0).toUpperCase() + metric.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {engagementData.map((day, index) => {
                  const value = selectedMetric === 'students' ? day.students : 
                               selectedMetric === 'stories' ? day.stories : day.time
                  const maxValue = Math.max(...engagementData.map(d => 
                    selectedMetric === 'students' ? d.students : 
                    selectedMetric === 'stories' ? d.stories : d.time
                  ))
                  const percentage = (value / maxValue) * 100

                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-8 text-sm text-surface-300 font-medium">{day.day}</div>
                      <div className="flex-1 bg-surface-700/30 rounded-full h-3 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full transition-all duration-500"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <div className="w-12 text-sm text-white font-medium text-right">{value}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="card-glass p-6">
              <h4 className="text-lg font-semibold text-white mb-6">Performance by Category</h4>
              <div className="space-y-4">
                {performanceMetrics.map((metric, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-surface-700/30 rounded-xl">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-medium text-white">{metric.category}</h5>
                        <div className="flex items-center space-x-2">
                          <span className={`text-sm font-bold ${metric.color}`}>
                            {metric.average}%
                          </span>
                          <span className={`text-xs flex items-center ${
                            metric.trend > 0 ? 'text-green-400' : 'text-red-400'
                          }`}>
                            {metric.trend > 0 ? (
                              <ChevronUp className="w-3 h-3" />
                            ) : (
                              <ChevronDown className="w-3 h-3" />
                            )}
                            {Math.abs(metric.trend)}%
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-surface-400">{metric.students} students</span>
                        <div className="w-24 bg-surface-600/50 rounded-full h-2">
                          <div 
                            className={`h-full rounded-full ${
                              metric.average >= 90 ? 'bg-green-500' :
                              metric.average >= 80 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${metric.average}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Performers */}
            <div className="card-glass p-6">
              <h4 className="text-lg font-semibold text-white mb-6">Top Performers</h4>
              <div className="space-y-4">
                {topPerformers.map((student, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-surface-700/30 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center text-lg">
                          {student.avatar}
                        </div>
                        {student.badge && (
                          <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-surface-900 ${
                            student.badge === 'gold' ? 'bg-yellow-500' :
                            student.badge === 'silver' ? 'bg-gray-400' : 'bg-orange-600'
                          }`} />
                        )}
                      </div>
                      <div>
                        <div className="font-medium text-white">{student.name}</div>
                        <div className="text-sm text-surface-400">{student.stories} stories completed</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary-400">{student.score}%</div>
                      <div className="text-xs text-surface-400">avg score</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Achievements */}
            <div className="card-glass p-6">
              <h4 className="text-lg font-semibold text-white mb-6">Recent Achievements</h4>
              <div className="space-y-4">
                {recentAchievements.map((achievement, index) => {
                  const IconComponent = achievement.icon
                  return (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-surface-700/30 rounded-xl">
                      <div className={`p-2 rounded-lg ${getAchievementIcon(achievement.type)}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-white">{achievement.achievement}</div>
                        <div className="text-sm text-surface-300">{achievement.student}</div>
                        <div className="text-xs text-surface-400">{achievement.time}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsDashboard