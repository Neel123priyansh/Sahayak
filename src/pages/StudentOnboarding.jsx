import React, { useState } from 'react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const StudentOnboarding = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    grade: '',
    schoolName: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.grade && formData.schoolName) {
      // In a real app, save to backend
      localStorage.setItem('userType', 'student');
      localStorage.setItem('userName', formData.name);
      navigate('/student-dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-brand-light flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-green-bg rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-yellow/10 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full text-center relative z-10"
      >
        <h2 className="text-3xl font-display font-bold text-brand-dark mb-2">Student Zone</h2>
        <p className="text-gray-600 mb-8">Ready to learn? Tell us about yourself.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-left">
             <label className="block text-sm font-bold text-gray-700 mb-1 ml-1">Your Name</label>
             <input 
               type="text" 
               required
               value={formData.name}
               onChange={(e) => setFormData({...formData, name: e.target.value})}
               placeholder="e.g. Rahul Kumar" 
               className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all outline-none" 
             />
          </div>
          
          <div className="text-left">
             <label className="block text-sm font-bold text-gray-700 mb-1 ml-1">Class / Grade</label>
             <select 
               required
               value={formData.grade}
               onChange={(e) => setFormData({...formData, grade: e.target.value})}
               className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all outline-none bg-white"
             >
                <option value="">Select Grade</option>
                {[...Array(12)].map((_, i) => (
                  <option key={i} value={i+1}>Class {i+1}</option>
                ))}
             </select>
          </div>

          <div className="text-left">
             <label className="block text-sm font-bold text-gray-700 mb-1 ml-1">School Name</label>
             <input 
               type="text" 
               required
               value={formData.schoolName}
               onChange={(e) => setFormData({...formData, schoolName: e.target.value})}
               placeholder="e.g. Delhi Public School" 
               className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all outline-none" 
             />
          </div>

          <Button type="submit" className="w-full mt-4">Start Learning</Button>
        </form>
        
        <button onClick={() => navigate('/select-user')} className="mt-6 text-sm text-gray-400 hover:text-brand-dark">
          Back
        </button>
      </motion.div>
    </div>
  );
};

export default StudentOnboarding;
