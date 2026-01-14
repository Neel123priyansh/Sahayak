import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Button from '../components/Button';
import { ArrowLeft, Users, BookOpen, Plus, MoreVertical, MessageCircle, BarChart2 } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const ClassDetail = () => {
  const navigate = useNavigate();
  const { classId } = useParams();
  
  // Mock Data
  const classData = {
    id: classId || '5a',
    name: `Class 5A`,
    subject: 'Mathematics',
    studentsCount: 32,
    attendance: '94%',
    nextClass: 'Today, 10:00 AM'
  };

  const students = [
    { id: 1, name: 'Aarav Patel', status: 'Present', performance: 'High' },
    { id: 2, name: 'Diya Sharma', status: 'Present', performance: 'Medium' },
    { id: 3, name: 'Rohan Gupta', status: 'Absent', performance: 'Low' },
    { id: 4, name: 'Sanya Singh', status: 'Present', performance: 'High' },
    { id: 5, name: 'Vihaan Kumar', status: 'Present', performance: 'Medium' },
  ];

  const assignments = [
    { id: 1, title: 'Fractions Worksheet', dueDate: 'Tomorrow', submitted: '28/32' },
    { id: 2, title: 'Chapter 1 Quiz', dueDate: 'Completed', submitted: '32/32' },
  ];

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
           <button 
             onClick={() => navigate('/teacher-dashboard')}
             className="flex items-center text-gray-500 hover:text-brand-dark transition-colors"
           >
             <ArrowLeft size={20} className="mr-2" /> Back to Dashboard
           </button>
           <div className="flex space-x-3">
             <Button variant="secondary" className="flex items-center"><MessageCircle size={18} className="mr-2" /> Message Class</Button>
             <Button variant="primary" className="flex items-center"><Plus size={18} className="mr-2" /> New Assignment</Button>
           </div>
        </div>

        {/* Class Overview */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h1 className="text-3xl font-display font-bold text-brand-dark mb-2">{classData.name} - {classData.subject}</h1>
              <div className="flex items-center space-x-6 text-gray-500">
                <span className="flex items-center"><Users size={18} className="mr-2" /> {classData.studentsCount} Students</span>
                <span className="flex items-center"><BookOpen size={18} className="mr-2" /> Next: {classData.nextClass}</span>
              </div>
            </div>
            <div className="mt-6 md:mt-0 flex space-x-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-brand-green">{classData.attendance}</p>
                <p className="text-xs text-gray-400 uppercase tracking-wide">Attendance</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-brand-yellow">B+</p>
                <p className="text-xs text-gray-400 uppercase tracking-wide">Avg Grade</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Students List */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-bold text-brand-dark flex items-center justify-between">
              <span>Students</span>
              <button className="text-sm text-brand-green hover:underline">View All</button>
            </h2>
            
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="text-left p-4 text-xs font-bold text-gray-500 uppercase">Name</th>
                    <th className="text-left p-4 text-xs font-bold text-gray-500 uppercase">Status</th>
                    <th className="text-left p-4 text-xs font-bold text-gray-500 uppercase">Performance</th>
                    <th className="text-right p-4 text-xs font-bold text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {students.map((student) => (
                    <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center font-bold mr-3">
                            {student.name.charAt(0)}
                          </div>
                          <span className="font-medium text-gray-900">{student.name}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded text-xs font-bold ${
                          student.status === 'Present' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {student.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center">
                          <div className="w-16 bg-gray-100 rounded-full h-1.5 mr-2">
                            <div className={`h-1.5 rounded-full ${
                              student.performance === 'High' ? 'bg-green-500 w-3/4' : 
                              student.performance === 'Medium' ? 'bg-yellow-500 w-1/2' : 'bg-red-500 w-1/4'
                            }`}></div>
                          </div>
                          <span className="text-xs text-gray-500">{student.performance}</span>
                        </div>
                      </td>
                      <td className="p-4 text-right">
                        <button className="text-gray-400 hover:text-brand-dark"><MoreVertical size={16} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Assignments & Stats */}
          <div className="space-y-8">
            {/* Recent Assignments */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-brand-dark mb-4">Active Assignments</h3>
              <div className="space-y-4">
                {assignments.map((assign) => (
                  <div key={assign.id} className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-sm text-gray-900">{assign.title}</h4>
                      <span className="text-xs bg-white px-2 py-1 rounded border border-gray-200">{assign.dueDate}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>Submitted</span>
                      <span className="font-bold text-brand-green">{assign.submitted}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                      <div className="bg-brand-green h-1 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-brand-dark text-white rounded-2xl p-6 shadow-sm relative overflow-hidden">
              <h3 className="font-bold text-lg mb-2 relative z-10">Class Insights</h3>
              <p className="text-sm text-gray-300 mb-4 relative z-10">
                Class 5A is performing 12% better in Geometry compared to last month.
              </p>
              <button className="text-sm font-bold text-brand-yellow hover:underline relative z-10">View Detailed Report →</button>
              <BarChart2 size={120} className="absolute -right-4 -bottom-4 text-white/5" />
            </div>
          </div>

        </div>
      </div>
    </MainLayout>
  );
};

export default ClassDetail;
