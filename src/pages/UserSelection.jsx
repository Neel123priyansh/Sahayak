import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const UserSelection = () => {
  const navigate = useNavigate();

  const handleSelection = (role) => {
    // In a real app, save this preference
    if (role === 'teacher') navigate('/teacher-onboarding');
    else navigate('/student-onboarding');
  };

  return (
    <div className="min-h-screen bg-brand-light flex flex-col items-center justify-center p-6">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl text-brand-green-dark mb-4">Who are you?</h1>
        <p className="text-gray-600">Choose your role to get started with Shayak</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        <SelectionCard 
          icon={<School size={64} />}
          title="I'm a Teacher"
          description="Manage classes, track progress, and get AI teaching assistance."
          onClick={() => handleSelection('teacher')}
          color="bg-brand-green text-white"
          hoverColor="hover:bg-brand-green-dark"
        />
        <SelectionCard 
          icon={<GraduationCap size={64} />}
          title="I'm a Student"
          description="Learn at your own pace with personalized AI tutoring."
          onClick={() => handleSelection('student')}
          color="bg-white text-brand-green-dark border-2 border-brand-green"
          hoverColor="hover:shadow-xl hover:border-brand-yellow"
        />
      </div>
      
      <button 
        onClick={() => navigate('/')}
        className="mt-12 text-gray-500 hover:text-brand-green underline"
      >
        Back to Home
      </button>
    </div>
  );
};

const SelectionCard = ({ icon, title, description, onClick, color, hoverColor }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`flex flex-col items-center justify-center p-10 rounded-3xl shadow-lg transition-all ${color} ${hoverColor} text-center h-80 group`}
    >
      <div className="mb-6 p-4 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
        {icon}
      </div>
      <h2 className="text-2xl font-bold mb-3">{title}</h2>
      <p className="opacity-90">{description}</p>
    </motion.button>
  );
};

export default UserSelection;
