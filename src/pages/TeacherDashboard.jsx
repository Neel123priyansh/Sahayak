import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import Button from '../components/Button';
import { Users, BookOpen, Plus, BarChart2, Calendar, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AIChat from '../components/AIChat';
import { useApp } from '../context/AppContext';

const TeacherDashboard = () => {
  const navigate = useNavigate();
  const { user, addNotification } = useApp();
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleCreateClass = (e) => {
    e.preventDefault();
    setShowCreateModal(false);
    addNotification('✅ New class created successfully!');
  };

  const classes = [
    { name: 'Class 5A - Math', students: 28, avgScore: 82 },
    { name: 'Class 6B - Science', students: 30, avgScore: 78 },
    { name: 'Class 5C - Math', students: 25, avgScore: 88 },
  ];

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-8">
          <div>
             <h1 className="text-3xl font-display font-bold text-brand-dark">Teacher Dashboard</h1>
             <p className="text-gray-600">Welcome back, {user.name}. Here's what's happening today.</p>
          </div>
          <Button variant="primary" className="hidden sm:flex items-center" onClick={() => setShowCreateModal(true)}>
            <Plus size={20} className="mr-2" /> Create New Class
          </Button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            { label: 'Total Students', value: '83', icon: <Users className="text-blue-500" /> },
            { label: 'Active Assignments', value: '12', icon: <BookOpen className="text-brand-green" /> },
            { label: 'Avg. Class Performance', value: '82%', icon: <BarChart2 className="text-brand-yellow" /> },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
              <div className="p-3 bg-gray-50 rounded-xl">{stat.icon}</div>
              <div>
                <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                <p className="text-2xl font-bold text-brand-dark">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content: Class List */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-bold text-brand-dark">Your Classes</h2>
            <div className="space-y-4">
              {classes.map((cls, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -2 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                >
                  <div>
                    <h3 className="font-bold text-lg text-brand-dark">{cls.name}</h3>
                    <p className="text-sm text-gray-500">{cls.students} Students • Next class at 10:00 AM</p>
                  </div>
                  <div className="flex items-center space-x-4 w-full sm:w-auto">
                    <div className="text-right hidden sm:block">
                      <span className="block text-xs font-bold text-gray-400 uppercase">Avg Score</span>
                      <span className="font-bold text-brand-green">{cls.avgScore}%</span>
                    </div>
                    <Button 
                      variant="secondary" 
                      className="px-4 py-2 text-sm w-full sm:w-auto"
                      onClick={() => navigate(`/class/${idx}`)}
                    >
                      View Details
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar: Schedule & Actions */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
               <h3 className="font-bold text-lg mb-4 flex items-center">
                 <Calendar className="mr-2 text-brand-dark" size={20} /> Today's Schedule
               </h3>
               <div className="space-y-4 relative">
                 {/* Timeline Line */}
                 <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gray-100"></div>
                 
                 {[
                   { time: '09:00 AM', event: 'Morning Assembly', type: 'misc' },
                   { time: '10:00 AM', event: 'Math - Class 5A', type: 'class' },
                   { time: '11:30 AM', event: 'Science - Class 6B', type: 'class' },
                   { time: '02:00 PM', event: 'Staff Meeting', type: 'meeting' },
                 ].map((item, i) => (
                   <div key={i} className="flex items-start relative z-10">
                     <div className="w-6 h-6 rounded-full bg-white border-2 border-brand-green flex-shrink-0 mr-3"></div>
                     <div>
                       <p className="text-xs text-gray-500 font-bold">{item.time}</p>
                       <p className="text-sm font-medium text-brand-dark">{item.event}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>

            <div className="bg-brand-green-bg p-6 rounded-2xl border border-brand-green/10">
              <h3 className="font-bold text-brand-dark mb-2">Teacher Assistant 🤖</h3>
              <p className="text-sm text-gray-600 mb-4">Generate lesson plans or quiz questions instantly.</p>
              <AIChat compact={true} />
            </div>
          </div>

        </div>
      </div>

      {/* Create Class Modal */}
      <AnimatePresence>
        {showCreateModal && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full relative"
            >
              <button 
                onClick={() => setShowCreateModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
              
              <h2 className="text-2xl font-bold text-brand-dark mb-6">Create New Class</h2>
              
              <form onSubmit={handleCreateClass} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Class Name</label>
                  <input type="text" required placeholder="e.g. Class 7A" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-green outline-none" />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-green outline-none bg-white">
                    <option>Mathematics</option>
                    <option>Science</option>
                    <option>English</option>
                    <option>History</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Schedule</label>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="time" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-green outline-none" />
                    <div className="flex items-center space-x-2">
                       {['M','T','W','T','F'].map(day => (
                         <button type="button" key={day} className="w-8 h-8 rounded-full bg-gray-100 text-xs font-bold hover:bg-brand-green hover:text-white transition-colors">{day}</button>
                       ))}
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full mt-4">Create Class</Button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </MainLayout>
  );
};

export default TeacherDashboard;
