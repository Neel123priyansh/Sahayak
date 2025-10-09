import React, { useState } from 'react'
import { 
  Users, 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Star, 
  TrendingUp, 
  BookOpen, 
  Award,
  Calendar,
  Mail,
  Phone,
  Edit,
  Trash2,
  Eye,
  X
} from 'lucide-react'

const StudentManagement = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [showAddStudent, setShowAddStudent] = useState(false)

  const students = [
    {
      id: 1,
      name: 'Emma Johnson',
      age: 8,
      grade: '3rd Grade',
      avatar: '👧',
      email: 'emma.parent@email.com',
      phone: '+1 (555) 123-4567',
      joinDate: '2024-01-15',
      status: 'active',
      progress: {
        storiesCompleted: 24,
        averageScore: 92,
        totalTime: '45h 30m',
        streak: 12
      },
      recentActivity: [
        { type: 'story', title: 'The Brave Little Elephant', score: 95, date: '2024-01-20' },
        { type: 'assessment', title: 'Reading Comprehension', score: 88, date: '2024-01-19' },
        { type: 'story', title: 'Magic Forest Adventure', score: 94, date: '2024-01-18' }
      ],
      strengths: ['Reading Comprehension', 'Creative Writing', 'Vocabulary'],
      improvements: ['Math Problem Solving', 'Time Management']
    },
    {
      id: 2,
      name: 'Liam Chen',
      age: 9,
      grade: '4th Grade',
      avatar: '👦',
      email: 'liam.parent@email.com',
      phone: '+1 (555) 987-6543',
      joinDate: '2024-01-10',
      status: 'active',
      progress: {
        storiesCompleted: 31,
        averageScore: 87,
        totalTime: '52h 15m',
        streak: 8
      },
      recentActivity: [
        { type: 'story', title: 'The Curious Cat', score: 91, date: '2024-01-20' },
        { type: 'story', title: 'Kindness Tree', score: 85, date: '2024-01-19' },
        { type: 'assessment', title: 'Critical Thinking', score: 89, date: '2024-01-18' }
      ],
      strengths: ['Logical Thinking', 'Pattern Recognition', 'Science'],
      improvements: ['Creative Expression', 'Social Skills']
    },
    {
      id: 3,
      name: 'Sophia Rodriguez',
      age: 7,
      grade: '2nd Grade',
      avatar: '👧',
      email: 'sophia.parent@email.com',
      phone: '+1 (555) 456-7890',
      joinDate: '2024-01-20',
      status: 'new',
      progress: {
        storiesCompleted: 8,
        averageScore: 94,
        totalTime: '12h 45m',
        streak: 5
      },
      recentActivity: [
        { type: 'story', title: 'First Day Adventure', score: 96, date: '2024-01-20' },
        { type: 'story', title: 'Friendship Garden', score: 92, date: '2024-01-20' }
      ],
      strengths: ['Creativity', 'Enthusiasm', 'Quick Learning'],
      improvements: ['Focus Duration', 'Following Instructions']
    }
  ]

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.grade.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTab = activeTab === 'all' || student.status === activeTab
    return matchesSearch && matchesTab
  })

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'new': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'inactive': return 'bg-red-500/20 text-red-400 border-red-500/30'
      default: return 'bg-surface-500/20 text-surface-400 border-surface-500/30'
    }
  }

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-400'
    if (score >= 80) return 'text-yellow-400'
    return 'text-red-400'
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-6xl h-[90vh] bg-surface-900/95 backdrop-blur-xl rounded-3xl border border-primary-500/20 shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-primary-500/20 bg-gradient-to-r from-primary-600/10 to-secondary-600/10">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary-500/20 rounded-xl">
              <Users className="w-6 h-6 text-primary-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Student Management</h3>
              <p className="text-sm text-surface-300">Manage and track student progress</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowAddStudent(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 rounded-xl text-white text-sm transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Add Student</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-surface-700/50 rounded-xl transition-colors"
            >
              <X className="w-5 h-5 text-surface-400" />
            </button>
          </div>
        </div>

        {/* Tabs and Search */}
        <div className="p-6 border-b border-surface-700/50">
          <div className="flex items-center justify-between mb-4">
            <div className="flex space-x-1 bg-surface-800/50 rounded-xl p-1">
              {[
                { id: 'all', label: 'All Students', count: students.length },
                { id: 'active', label: 'Active', count: students.filter(s => s.status === 'active').length },
                { id: 'new', label: 'New', count: students.filter(s => s.status === 'new').length }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-primary-500 text-white'
                      : 'text-surface-300 hover:text-white hover:bg-surface-700/50'
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-surface-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search students by name or grade..."
                className="w-full pl-10 pr-4 py-3 bg-surface-800/50 border border-surface-600 rounded-xl text-white placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
              />
            </div>
            <button className="p-3 bg-surface-800/50 border border-surface-600 rounded-xl hover:bg-surface-700/50 transition-colors">
              <Filter className="w-4 h-4 text-surface-400" />
            </button>
          </div>
        </div>

        {/* Student List */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredStudents.map(student => (
              <div
                key={student.id}
                className="card-glass hover:glass-strong transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedStudent(student)}
              >
                <div className="p-6">
                  {/* Student Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center text-2xl">
                        {student.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{student.name}</h4>
                        <p className="text-sm text-surface-300">{student.grade} • Age {student.age}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-lg text-xs font-medium border ${getStatusColor(student.status)}`}>
                      {student.status}
                    </span>
                  </div>

                  {/* Progress Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">{student.progress.storiesCompleted}</div>
                      <div className="text-xs text-surface-400">Stories</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-lg font-bold ${getScoreColor(student.progress.averageScore)}`}>
                        {student.progress.averageScore}%
                      </div>
                      <div className="text-xs text-surface-400">Avg Score</div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium text-surface-200">Recent Activity</h5>
                    {student.recentActivity.slice(0, 2).map((activity, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2">
                          {activity.type === 'story' ? (
                            <BookOpen className="w-3 h-3 text-primary-400" />
                          ) : (
                            <Award className="w-3 h-3 text-secondary-400" />
                          )}
                          <span className="text-surface-300 truncate">{activity.title}</span>
                        </div>
                        <span className={`font-medium ${getScoreColor(activity.score)}`}>
                          {activity.score}%
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button className="w-full mt-4 py-2 bg-surface-700/50 hover:bg-surface-600/50 rounded-lg text-sm text-surface-300 hover:text-white transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredStudents.length === 0 && (
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-surface-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">No students found</h3>
              <p className="text-surface-400 mb-4">Try adjusting your search or add a new student</p>
              <button
                onClick={() => setShowAddStudent(true)}
                className="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 rounded-xl text-white font-medium transition-all duration-200"
              >
                Add First Student
              </button>
            </div>
          )}
        </div>

        {/* Student Detail Modal */}
        {selectedStudent && (
          <div className="absolute inset-0 bg-surface-900/95 backdrop-blur-xl flex items-center justify-center p-6">
            <div className="w-full max-w-4xl bg-surface-800/50 rounded-2xl border border-surface-600 overflow-hidden">
              {/* Detail Header */}
              <div className="flex items-center justify-between p-6 border-b border-surface-600">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center text-3xl">
                    {selectedStudent.avatar}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{selectedStudent.name}</h3>
                    <p className="text-surface-300">{selectedStudent.grade} • Age {selectedStudent.age}</p>
                    <p className="text-sm text-surface-400">Joined {new Date(selectedStudent.joinDate).toLocaleDateString()}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedStudent(null)}
                  className="p-2 hover:bg-surface-700/50 rounded-xl transition-colors"
                >
                  <X className="w-5 h-5 text-surface-400" />
                </button>
              </div>

              {/* Detail Content */}
              <div className="p-6 max-h-96 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Contact Info */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-white">Contact Information</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-4 h-4 text-surface-400" />
                        <span className="text-surface-300">{selectedStudent.email}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-4 h-4 text-surface-400" />
                        <span className="text-surface-300">{selectedStudent.phone}</span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Overview */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-white">Progress Overview</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-surface-700/30 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-white">{selectedStudent.progress.storiesCompleted}</div>
                        <div className="text-xs text-surface-400">Stories Completed</div>
                      </div>
                      <div className="bg-surface-700/30 rounded-lg p-3 text-center">
                        <div className={`text-lg font-bold ${getScoreColor(selectedStudent.progress.averageScore)}`}>
                          {selectedStudent.progress.averageScore}%
                        </div>
                        <div className="text-xs text-surface-400">Average Score</div>
                      </div>
                      <div className="bg-surface-700/30 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-white">{selectedStudent.progress.totalTime}</div>
                        <div className="text-xs text-surface-400">Total Time</div>
                      </div>
                      <div className="bg-surface-700/30 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-orange-400">{selectedStudent.progress.streak}</div>
                        <div className="text-xs text-surface-400">Day Streak</div>
                      </div>
                    </div>
                  </div>

                  {/* Strengths & Improvements */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-white">Strengths</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedStudent.strengths.map((strength, index) => (
                        <span key={index} className="px-3 py-1 bg-green-500/20 text-green-400 rounded-lg text-sm">
                          {strength}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-white">Areas for Improvement</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedStudent.improvements.map((improvement, index) => (
                        <span key={index} className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-lg text-sm">
                          {improvement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Recent Activity Detail */}
                <div className="mt-6">
                  <h4 className="font-semibold text-white mb-4">Recent Activity</h4>
                  <div className="space-y-3">
                    {selectedStudent.recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-surface-700/30 rounded-lg">
                        <div className="flex items-center space-x-3">
                          {activity.type === 'story' ? (
                            <BookOpen className="w-5 h-5 text-primary-400" />
                          ) : (
                            <Award className="w-5 h-5 text-secondary-400" />
                          )}
                          <div>
                            <div className="text-white font-medium">{activity.title}</div>
                            <div className="text-sm text-surface-400">{new Date(activity.date).toLocaleDateString()}</div>
                          </div>
                        </div>
                        <div className={`text-lg font-bold ${getScoreColor(activity.score)}`}>
                          {activity.score}%
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default StudentManagement