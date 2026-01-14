import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Splash from './pages/Splash';
import Landing from './pages/Landing';
import UserSelection from './pages/UserSelection';
import TeacherOnboarding from './pages/TeacherOnboarding';
import StudentOnboarding from './pages/StudentOnboarding';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import SubjectDetail from './pages/SubjectDetail';
import ClassDetail from './pages/ClassDetail';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Splash />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/select-user" element={<UserSelection />} />
        <Route path="/student-onboarding" element={<StudentOnboarding />} />
        <Route path="/teacher-onboarding" element={<TeacherOnboarding />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/subject/:subjectId" element={<SubjectDetail />} />
        <Route path="/class/:classId" element={<ClassDetail />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
