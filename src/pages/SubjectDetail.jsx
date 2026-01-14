import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import Button from '../components/Button';
import Quiz from '../components/Quiz';
import AIChat from '../components/AIChat';
import { ArrowLeft, PlayCircle, BookOpen, CheckCircle, Lock } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const SubjectDetail = () => {
  const navigate = useNavigate();
  const { subjectId } = useParams();
  const [activeLesson, setActiveLesson] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);

  // Mock Data - In real app, fetch based on subjectId
  const subjectData = {
    id: 'math',
    title: 'Mathematics',
    grade: 'Class 5',
    description: 'Master the magic of numbers, shapes, and patterns.',
    progress: 75,
    chapters: [
      {
        id: 1,
        title: 'Number Systems',
        completed: true,
        lessons: [
          { id: 101, title: 'Understanding Place Value', type: 'video', duration: '10 min' },
          { id: 102, title: 'Rounding Off Numbers', type: 'reading', duration: '5 min' }
        ]
      },
      {
        id: 2,
        title: 'Fractions & Decimals',
        completed: false,
        lessons: [
          { id: 201, title: 'Introduction to Fractions', type: 'video', duration: '12 min' },
          { id: 202, title: 'Adding Like Fractions', type: 'video', duration: '8 min' },
          { id: 203, title: 'Decimal Point Basics', type: 'reading', duration: '15 min' }
        ]
      },
      {
        id: 3,
        title: 'Geometry',
        completed: false,
        locked: true,
        lessons: []
      }
    ]
  };

  const quizData = [
    {
      question: "What is the numerator in the fraction 3/5?",
      options: ["3", "5", "Both", "None"],
      correctAnswer: 0
    },
    {
      question: "If you have 1/4 of a pizza and your friend gives you 2/4 more, how much pizza do you have?",
      options: ["2/4", "3/4", "1/2", "Whole Pizza"],
      correctAnswer: 1
    },
    {
      question: "Which is larger: 0.5 or 0.05?",
      options: ["0.05", "0.5", "They are equal", "Cannot tell"],
      correctAnswer: 1
    }
  ];

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Navigation Header */}
        <button 
          onClick={() => navigate('/student-dashboard')}
          className="flex items-center text-gray-500 hover:text-brand-green mb-6 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" /> Back to Dashboard
        </button>

        {/* Hero Section */}
        <div className="bg-brand-dark rounded-3xl p-8 text-white mb-12 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="bg-brand-yellow text-brand-dark text-xs font-bold px-2 py-1 rounded mb-4 inline-block">
              {subjectData.grade}
            </span>
            <h1 className="text-4xl font-display font-bold mb-1">{subjectData.title}</h1>
            <p className="text-xs text-gray-400 mb-3">Subject ID: {subjectId}</p>
            <p className="text-gray-300 mb-8 text-lg">{subjectData.description}</p>
            
            <div className="flex items-center space-x-4">
               <div className="flex-grow max-w-xs bg-gray-700 rounded-full h-2">
                 <div className="bg-brand-green h-2 rounded-full" style={{ width: `${subjectData.progress}%` }}></div>
               </div>
               <span className="font-bold text-brand-green">{subjectData.progress}% Complete</span>
            </div>
          </div>
          {/* Decorative Background */}
          <div className="absolute right-0 top-0 h-full w-1/3 bg-brand-green/20 skew-x-12 transform translate-x-20"></div>
          <BookOpen size={200} className="absolute right-10 bottom-[-50px] text-white/5 rotate-12" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content: Curriculum or Lesson */}
          <div className="lg:col-span-2">
            {showQuiz ? (
               <Quiz 
                 title="Quick Check: Fractions"
                 questions={quizData}
                 onComplete={() => setShowQuiz(false)}
                 onClose={() => setShowQuiz(false)}
               />
            ) : activeLesson ? (
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
                {/* Video Player Placeholder */}
                <div className="aspect-video bg-black relative flex items-center justify-center group cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="Lesson Thumbnail" 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                  />
                  <PlayCircle size={80} className="text-white absolute opacity-90 group-hover:scale-110 transition-transform" />
                </div>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                     <div>
                       <h2 className="text-2xl font-bold text-brand-dark mb-2">{activeLesson.title}</h2>
                       <p className="text-gray-500">Chapter 2: Fractions & Decimals</p>
                     </div>
                     <Button variant="secondary" onClick={() => setShowQuiz(true)}>Take Quiz</Button>
                  </div>
                  
                  <div className="prose max-w-none text-gray-600">
                    <p>In this lesson, we will explore the concept of fractions. A fraction represents a part of a whole or, more generally, any number of equal parts.</p>
                    <p className="mt-4">Key concepts covered:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Numerator and Denominator</li>
                      <li>Equivalent Fractions</li>
                      <li>Simplifying Fractions</li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                 <h2 className="text-2xl font-bold text-brand-dark mb-4">Course Content</h2>
                 {subjectData.chapters.map((chapter) => (
                   <div key={chapter.id} className={`bg-white rounded-2xl border ${chapter.locked ? 'border-gray-100 opacity-70' : 'border-gray-200 shadow-sm'}`}>
                      <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50 rounded-t-2xl">
                        <div className="flex items-center space-x-3">
                          {chapter.locked ? <Lock size={20} className="text-gray-400" /> : <BookOpen size={20} className="text-brand-green" />}
                          <h3 className="font-bold text-lg text-brand-dark">{chapter.title}</h3>
                        </div>
                        {chapter.completed && <CheckCircle size={20} className="text-brand-green" />}
                      </div>
                      {!chapter.locked && (
                        <div className="p-2">
                          {chapter.lessons.map((lesson) => (
                            <button 
                              key={lesson.id}
                              onClick={() => setActiveLesson(lesson)}
                              className="w-full flex items-center justify-between p-4 hover:bg-brand-green-bg rounded-xl transition-colors group"
                            >
                              <div className="flex items-center space-x-4">
                                <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-sm font-bold text-gray-500 group-hover:border-brand-green group-hover:text-brand-green">
                                  {lesson.id}
                                </div>
                                <div className="text-left">
                                  <p className="font-medium text-brand-dark group-hover:text-brand-green">{lesson.title}</p>
                                  <p className="text-xs text-gray-400">{lesson.type} • {lesson.duration}</p>
                                </div>
                              </div>
                              <PlayCircle size={20} className="text-gray-300 group-hover:text-brand-green" />
                            </button>
                          ))}
                        </div>
                      )}
                   </div>
                 ))}
              </div>
            )}
          </div>

          {/* Sidebar: AI Assistant */}
          <div className="space-y-6">
             <div className="bg-brand-yellow/10 rounded-2xl p-6 border border-brand-yellow/20">
                <h3 className="font-bold text-brand-dark mb-2">Learning Tip 💡</h3>
                <p className="text-sm text-gray-700">Practice makes perfect! Try the quiz after watching the video to earn double XP points.</p>
             </div>
             
             <div>
               <h3 className="font-bold text-brand-dark mb-4">Ask about this topic</h3>
               <AIChat compact={true} />
             </div>
          </div>

        </div>
      </div>
    </MainLayout>
  );
};

export default SubjectDetail;
