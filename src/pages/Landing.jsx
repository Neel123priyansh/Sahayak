import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Star, Users, Shield, Sparkles } from 'lucide-react';
import Button from '../components/Button';
import MainLayout from '../layouts/MainLayout';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-brand-green pt-12 pb-32 overflow-hidden">
        {/* Decorative Doodles */}
        <div className="absolute top-10 left-10 opacity-20 text-brand-yellow transform -rotate-12">
          <Sparkles size={64} />
        </div>
        <div className="absolute bottom-40 right-10 opacity-20 text-white transform rotate-12">
          <Star size={80} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-center lg:text-left"
            >
              <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
                <span className="bg-brand-yellow text-brand-dark text-xs font-bold px-2 py-0.5 rounded-full">NEW</span>
                <span className="text-sm font-medium">AI-Powered Learning Journey</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
                UNLOCK THE JOY <br />
                <span className="text-brand-yellow relative inline-block">
                   OF LEARNING!
                   <svg className="absolute -bottom-2 left-0 w-full h-3 text-white opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                     <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                   </svg>
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-brand-green-bg/90 mb-8 max-w-xl mx-auto lg:mx-0">
                We believe every child deserves access to joyful, meaningful learning experiences. 
                Let your children shine with personalized AI learning journeys.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Button onClick={() => navigate('/select-user')} className="w-full sm:w-auto text-lg px-8 py-4">
                  Start Free Trial
                </Button>
                <div className="flex items-center space-x-[-10px]">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-green bg-gray-300 overflow-hidden">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i*13}`} alt="User" />
                    </div>
                  ))}
                  <span className="ml-4 text-sm font-medium">Join 10k+ students</span>
                </div>
              </div>
            </motion.div>

            {/* Right Images */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden md:block"
            >
              <div className="relative h-[500px] w-full">
                 {/* Main Image */}
                 <div className="absolute top-10 right-10 w-64 h-80 bg-white p-2 shadow-2xl transform rotate-3 rounded-2xl z-20">
                    <img 
                      src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                      alt="Student Learning" 
                      className="w-full h-full object-cover rounded-xl"
                    />
                 </div>
                 {/* Secondary Image */}
                 <div className="absolute top-20 left-10 w-60 h-72 bg-white p-2 shadow-xl transform -rotate-6 rounded-2xl z-10">
                    <img 
                      src="https://images.unsplash.com/photo-1427504746696-ea5abd7dfe88?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                      alt="Teacher" 
                      className="w-full h-full object-cover rounded-xl"
                    />
                 </div>
                 {/* Floating Elements */}
                 <div className="absolute bottom-10 left-32 bg-white px-4 py-2 rounded-lg shadow-lg z-30 flex items-center space-x-2 animate-bounce">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-bold text-brand-dark">AI Active</span>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wavy Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-brand-light"></path>
          </svg>
        </div>
      </section>

      {/* Features Strip */}
      <div className="bg-brand-light py-8 relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-wrap justify-between items-center gap-6">
            {[
              { icon: <Sparkles className="text-brand-yellow" />, text: "Play-based Learning" },
              { icon: <BookOpen className="text-brand-green" />, text: "Expert Curriculum" },
              { icon: <Users className="text-blue-500" />, text: "Personalized Progress" },
              { icon: <Shield className="text-red-500" />, text: "Safe Environment" },
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-3 font-bold text-brand-dark">
                <div className="p-2 bg-gray-100 rounded-full">{feature.icon}</div>
                <span className="text-sm md:text-base">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-20 bg-brand-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-4">
              A BRIGHTER FUTURE BEGINS <br />
              WITH <span className="text-brand-green">SHAYAK ACADEMY</span>
            </h2>
             <div className="w-24 h-2 bg-brand-yellow mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image Cluster */}
             <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                   <img 
                      src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                      className="rounded-full w-full h-64 object-cover border-4 border-white shadow-lg transform translate-y-8"
                      alt="Kids playing"
                   />
                   <img 
                      src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                      className="rounded-3xl w-full h-64 object-cover border-4 border-white shadow-lg"
                      alt="Girl reading"
                   />
                </div>
                {/* Decorative Doodle */}
                <svg className="absolute -top-10 -left-10 w-24 h-24 text-pink-300 opacity-80" viewBox="0 0 100 100">
                   <path d="M10,50 Q30,10 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
             </div>

            {/* Right Text */}
            <div>
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-4 flex items-center">
                   LEARN THROUGH PLAY
                   <span className="ml-3 text-brand-yellow"><Star fill="currentColor" /></span>
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Explore games, puzzles, and challenges that make learning fun — you won't even know you're studying! 
                  Complete daily missions to stay on track and celebrate small wins every day.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  "AI-Driven Conversations for instant help",
                  "Real-time feedback on assignments",
                  "Gamified progress tracking"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <div className="w-8 h-8 rounded-full bg-brand-green-bg flex items-center justify-center text-brand-green font-bold">
                      {i + 1}
                    </div>
                    <span className="font-medium text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex items-center space-x-6">
                <Button variant="primary">Learn More</Button>
                <button className="flex items-center font-bold text-brand-dark hover:text-brand-green transition-colors">
                  Our Teaching Method <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-green-bg">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="bg-brand-green rounded-3xl p-12 shadow-2xl relative overflow-hidden">
             <div className="relative z-10">
               <h2 className="text-4xl font-display font-bold text-white mb-6">Ready to start your journey?</h2>
               <p className="text-brand-green-bg text-xl mb-8">Join thousands of students and teachers transforming education today.</p>
               <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                 <Button variant="primary" onClick={() => navigate('/select-user')}>Get Started Now</Button>
                 <Button variant="outline">Schedule Demo</Button>
               </div>
             </div>
             {/* Background Circles */}
             <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-yellow opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Landing;
