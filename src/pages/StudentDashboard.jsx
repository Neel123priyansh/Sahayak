import React from 'react';
import MainLayout from '../layouts/MainLayout';
import AIChat from '../components/AIChat';
import { BookOpen, Trophy, Target, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const StudentDashboard = () => {
  const { user, visualMode, toggleVisualMode } = useApp();
  const navigate = useNavigate();

  const subjects = [
    { id: 'math', name: 'Mathematics', progress: 75, color: 'bg-blue-500' },
    { id: 'science', name: 'Science', progress: 60, color: 'bg-green-500' },
    { id: 'english', name: 'English', progress: 85, color: 'bg-yellow-500' },
    { id: 'history', name: 'History', progress: 40, color: 'bg-red-500' },
  ];

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-grow space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-brand-green rounded-3xl p-8 text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-24 -left-16 w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-brand-yellow to-pink-400 opacity-60 blur-3xl mix-blend-screen motion-safe:animate-float-blobs" />
                <div className="absolute -bottom-24 -right-10 w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-sky-400 to-brand-green-light opacity-50 blur-3xl mix-blend-screen motion-safe:animate-float-blobs-slow" />
              </div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-display font-bold mb-2">
                      Welcome back, {user.name}! 👋
                    </h1>
                    <p className="opacity-90">
                      You have 3 pending assignments today. Let's keep the streak going!
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={toggleVisualMode}
                    className="inline-flex items-center self-start md:self-auto px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold tracking-wide border border-white/20 backdrop-blur-sm transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full mr-2 bg-brand-yellow" />
                    {visualMode === 'playful' ? 'Playful mode' : 'Calm mode'}
                  </button>
                </div>

                <div className="flex items-center space-x-6 mt-6">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold">{user.streak}</span>
                    <span className="text-xs opacity-80 uppercase tracking-wider">
                      Day Streak
                    </span>
                  </div>
                  <div className="w-px h-10 bg-white/20" />
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold">{user.xp}</span>
                    <span className="text-xs opacity-80 uppercase tracking-wider">Points</span>
                  </div>
                  <div className="w-px h-10 bg-white/20" />
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold">{user.level}</span>
                    <span className="text-xs opacity-80 uppercase tracking-wider">Level</span>
                  </div>
                </div>
              </div>
              <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
                <Star size={200} fill="currentColor" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
            >
              <h2 className="text-xl font-bold text-brand-dark mb-4 flex items-center">
                <BookOpen className="mr-2 text-brand-green" /> Your Learning Path
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {subjects.map((sub) => (
                  <motion.div
                    key={sub.id}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer"
                    onClick={() => navigate(`/subject/${sub.id}`)}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold text-lg">{sub.name}</h3>
                      <span className="text-sm font-medium text-gray-500">
                        {sub.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full ${sub.color}`}
                        style={{ width: `${sub.progress}%` }}
                      />
                    </div>
                    <button className="mt-4 text-sm font-bold text-brand-green hover:underline">
                      Continue Lesson →
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-xl font-bold text-brand-dark mb-4 flex items-center">
                <Target className="mr-2 text-brand-yellow" /> Daily Missions
              </h2>
              <div className="space-y-3">
                {[
                  'Complete Math Quiz',
                  'Read Chapter 4 of Science',
                  'Practice Vocabulary',
                ].map((mission) => (
                  <div
                    key={mission}
                    className="flex items-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm"
                  >
                    <div className="w-6 h-6 rounded-full border-2 border-brand-green mr-4 cursor-pointer hover:bg-brand-green/20" />
                    <span className="flex-grow font-medium text-gray-700">{mission}</span>
                    <span className="text-xs font-bold text-brand-yellow bg-brand-yellow/10 px-2 py-1 rounded">
                      +50 XP
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="w-full md:w-96 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-xl font-bold text-brand-dark mb-4">Ask Shayak</h2>
              <AIChat compact />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <Trophy className="mr-2 text-brand-yellow" /> Achievements
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gray-50 rounded-xl flex items-center justify-center text-2xl grayscale hover:grayscale-0 transition-all cursor-pointer"
                    title="Locked Achievement"
                  >
                    🏆
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default StudentDashboard;
