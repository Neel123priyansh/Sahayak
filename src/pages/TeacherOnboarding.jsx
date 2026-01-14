import React, { useState } from 'react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const TeacherOnboarding = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    schoolName: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.schoolName) {
      localStorage.setItem('userType', 'teacher');
      localStorage.setItem('userName', formData.name);
      navigate('/teacher-dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-brand-light flex items-center justify-center p-6 relative overflow-hidden">
       {/* Background decoration */}
       <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/20 rounded-full translate-x-1/2 -translate-y-1/2"></div>
       <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/10 rounded-full -translate-x-1/3 translate-y-1/3"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full text-center relative z-10"
      >
        <h2 className="text-3xl font-display font-bold text-brand-dark mb-2">Teacher Portal</h2>
        <p className="text-gray-600 mb-8">Welcome, Educator! Let's set up your classroom.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
           <div className="text-left">
             <label className="block text-sm font-bold text-gray-700 mb-1 ml-1">Full Name</label>
             <input 
               type="text" 
               required
               value={formData.name}
               onChange={(e) => setFormData({...formData, name: e.target.value})}
               placeholder="e.g. Mrs. Sharma" 
               className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all outline-none" 
             />
          </div>

          <div className="text-left">
             <label className="block text-sm font-bold text-gray-700 mb-1 ml-1">Official Email</label>
             <input 
               type="email" 
               required
               value={formData.email}
               onChange={(e) => setFormData({...formData, email: e.target.value})}
               placeholder="name@school.edu" 
               className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all outline-none" 
             />
          </div>

           <div className="text-left">
             <label className="block text-sm font-bold text-gray-700 mb-1 ml-1">School Name</label>
             <input 
               type="text" 
               required
               value={formData.schoolName}
               onChange={(e) => setFormData({...formData, schoolName: e.target.value})}
               placeholder="e.g. City High School" 
               className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all outline-none" 
             />
          </div>

          <Button type="submit" className="w-full mt-4">Create Classroom</Button>
        </form>

        <button onClick={() => navigate('/select-user')} className="mt-6 text-sm text-gray-400 hover:text-brand-dark">
          Back
        </button>
      </motion.div>
    </div>
  );
};

export default TeacherOnboarding;
