import React from 'react'
import GoogleNotebookEmbed from '../components/GoogleNotebookEmbed'
import NotebookLMIntegration from '../components/NotebookLMIntegration'
import NotebookLMList from '../components/NotebookLMList'
import { BookOpen, FileText, ExternalLink } from 'lucide-react'

export default function Stories() {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
         <div>
            <h1 className="text-2xl font-bold text-[#1E1E24] dark:text-white">Stories & Notebooks</h1>
            <p className="text-[#8E8E93]">Integrate AI-powered notebooks into your learning journey.</p>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Notebook Area */}
        <div className="lg:col-span-8 space-y-6">
           <div className="bento-card p-6 min-h-[500px] flex flex-col dark:bg-[#1E1E24] dark:border dark:border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
                  <BookOpen size={20} />
                </div>
                <h2 className="text-xl font-bold text-[#1E1E24] dark:text-white">Current Notebook</h2>
              </div>
              <div className="flex-1 rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10">
                <GoogleNotebookEmbed />
              </div>
           </div>
        </div>

        {/* Sidebar Tools */}
        <div className="lg:col-span-4 space-y-6">
           {/* Integration Card */}
           <div className="bento-card-purple rounded-[2rem] p-6 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">NotebookLM</h3>
                <p className="text-white/80 text-sm mb-4">Generate insights and quizzes from your documents.</p>
                <NotebookLMIntegration />
              </div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
           </div>

           {/* List of Notebooks */}
           <div className="bento-card p-0 overflow-hidden dark:bg-[#1E1E24] dark:border dark:border-white/10">
              <div className="p-6 border-b border-gray-100 dark:border-white/10 flex justify-between items-center">
                 <h3 className="font-bold text-[#1E1E24] dark:text-white">Your Notebooks</h3>
                 <FileText size={18} className="text-[#8E8E93]" />
              </div>
              <div className="p-4">
                <NotebookLMList />
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
