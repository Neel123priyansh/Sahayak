import React, { useState, useEffect } from 'react'
import MainLayout from '../layouts/MainLayout'
import Button from '../components/Button'
import ChatBox from '../components/ChatBox'
import { FolderTree, ChevronRight, ChevronDown, FileText, FileDown, Languages, Loader2, Search } from 'lucide-react'
import { motion } from 'framer-motion'
import { useApp } from '../context/AppContext'

const classStructure = [
  {
    id: 'class-1',
    name: 'Class 1',
    subjects: [
      {
        id: 'c1-english',
        name: 'English',
        chapters: [
          { id: 'c1-eng-ch1', name: 'Chapter 1: My Family' },
          { id: 'c1-eng-ch2', name: 'Chapter 2: At the Park' },
        ],
      },
      {
        id: 'c1-maths',
        name: 'Maths',
        chapters: [
          { id: 'c1-math-ch1', name: 'Chapter 1: Numbers 1–50' },
          { id: 'c1-math-ch2', name: 'Chapter 2: Shapes Around Us' },
        ],
      },
    ],
  },
  {
    id: 'class-2',
    name: 'Class 2',
    subjects: [
      {
        id: 'c2-english',
        name: 'English',
        chapters: [
          { id: 'c2-eng-ch1', name: 'Chapter 1: The Rainy Day' },
          { id: 'c2-eng-ch2', name: 'Chapter 2: Clever Rabbit' },
        ],
      },
      {
        id: 'c2-science',
        name: 'Science',
        chapters: [
          { id: 'c2-sci-ch1', name: 'Chapter 1: Our Body' },
          { id: 'c2-sci-ch2', name: 'Chapter 2: Plants Around Us' },
        ],
      },
    ],
  },
  {
    id: 'class-3',
    name: 'Class 3',
    subjects: [
      {
        id: 'c3-maths',
        name: 'Maths',
        chapters: [
          { id: 'c3-math-ch1', name: 'Chapter 1: Multiplication Basics' },
          { id: 'c3-math-ch2', name: 'Chapter 2: Fractions' },
        ],
      },
    ],
  },
]

const languages = ['English', 'Hindi', 'Marathi']

const CHAPTER_STATUS_STORAGE_KEY = 'teacherChapterStatus'

const findContextForChapter = (chapterId) => {
  for (const cls of classStructure) {
    for (const subj of cls.subjects) {
      const chapter = subj.chapters.find(ch => ch.id === chapterId);
      if (chapter) {
        return { cls, subj, chapter };
      }
    }
  }
  return null
}

const downloadText = (filename, content) => {
  if (!content) return
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

const TeacherDashboard = () => {
  const { user } = useApp()

  const [activeLanguage, setActiveLanguage] = useState('English')
  const [expandedClasses, setExpandedClasses] = useState(() => new Set(classStructure.map(c => c.id)))
  const [expandedSubjects, setExpandedSubjects] = useState(() => new Set())
  const [selectedChapterId, setSelectedChapterId] = useState(classStructure[0].subjects[0].chapters[0].id)
  const [isLoadingNotebook, setIsLoadingNotebook] = useState(false)
  const [isLoadingOutputs, setIsLoadingOutputs] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [chapterStatus, setChapterStatus] = useState(() => {
    if (typeof window === 'undefined') return {}
    try {
      const stored = window.localStorage.getItem(CHAPTER_STATUS_STORAGE_KEY)
      return stored ? JSON.parse(stored) : {}
    } catch {
      return {}
    }
  })

  const [notebookContent, setNotebookContent] = useState({
    overview: '',
    keyPoints: [],
    examples: [],
  });

  const [materialContent, setMaterialContent] = useState({
    teachingNotes: '',
    studentNotes: '',
    pptOutline: [],
  })
  const selectedContext = findContextForChapter(selectedChapterId)

  useEffect(() => {
    try {
      window.localStorage.setItem(CHAPTER_STATUS_STORAGE_KEY, JSON.stringify(chapterStatus))
    } catch {
      return
    }
  }, [chapterStatus])

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredClasses = normalizedQuery
    ? classStructure
        .map(cls => {
          const classMatches = cls.name.toLowerCase().includes(normalizedQuery);
          const filteredSubjects = cls.subjects
            .map(subj => {
              const subjectMatches = subj.name.toLowerCase().includes(normalizedQuery);
              const filteredChapters = subj.chapters.filter(ch =>
                ch.name.toLowerCase().includes(normalizedQuery)
              );
              if (subjectMatches) {
                return subj;
              }
              if (filteredChapters.length) {
                return { ...subj, chapters: filteredChapters };
              }
              return null;
            })
            .filter(Boolean);
          if (classMatches && !filteredSubjects.length) {
            return cls;
          }
          if (classMatches || filteredSubjects.length) {
            return { ...cls, subjects: filteredSubjects.length ? filteredSubjects : cls.subjects };
          }
          return null;
        })
        .filter(Boolean)
    : classStructure

  const currentChapterStatus = chapterStatus[selectedChapterId] || 'not-started'

  const teacherProfile = {
    name: user.name,
    qualification: 'B.Ed • Primary Education',
    capacity: 'Ideal capacity: 3–4 classes per day',
  }

  const handleSelectChapter = (chapterId) => {
    setSelectedChapterId(chapterId)
    setChapterStatus(prev => ({
      ...prev,
      [chapterId]: prev[chapterId] || 'in-progress',
    }))
    setIsLoadingNotebook(true)
    setIsLoadingOutputs(true)

    const context = findContextForChapter(chapterId)

    const languageSuffix = activeLanguage === 'English' ? '' : ` (${activeLanguage})`

    setTimeout(() => {
      if (context) {
        setNotebookContent({
          overview: `This chapter introduces ${context.chapter.name.replace(/Chapter \\d+: /, '')} in simple, classroom-ready language${languageSuffix}. Focus on one core idea at a time and connect it with the children's daily life.`,
          keyPoints: [
            `Start with a quick story related to "${context.chapter.name}".`,
            'Highlight 2–3 new words or concepts only.',
            'Use local classroom examples and objects already available.',
            'Check understanding with one simple question after each step.',
          ],
          examples: [
            'Ask students to share one real-life example related to the topic.',
            'Draw or show one picture on the board and discuss it together.',
          ],
        })

        setMaterialContent({
          teachingNotes: `Step-by-step notes for ${context.subj.name} • ${context.chapter.name}${languageSuffix}. Use this as your guide while teaching on the board.`,
          studentNotes: `Student-friendly explanation for ${context.chapter.name}${languageSuffix}. Short sentences, simple words, and space for drawings.`,
          pptOutline: [
            'Slide 1: Title and warm-up question',
            'Slide 2: Key idea with one visual',
            'Slide 3: Example from daily life',
            'Slide 4: Quick check-for-understanding question',
            'Slide 5: Exit ticket or short recap activity',
          ],
        })
      }
      setIsLoadingNotebook(false)
      setIsLoadingOutputs(false)
    }, 700)
  }

  const toggleClassExpanded = (id) => {
    setExpandedClasses(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const toggleSubjectExpanded = (id) => {
    setExpandedSubjects(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-brand-dark">
              Teaching Notebook
            </h1>
            <p className="text-sm md:text-base text-gray-600">
              Plan, understand, and generate materials in one teacher-friendly workspace.
            </p>
          </div>
          <motion.div
            layout
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className="px-3 py-2 rounded-2xl bg-white shadow-sm border border-gray-100 text-xs sm:text-sm md:self-end"
          >
            <div className="font-semibold text-brand-dark text-right">{teacherProfile.name}</div>
            <div className="text-gray-500 text-right">{teacherProfile.qualification}</div>
            <div className="text-gray-500 text-right">{teacherProfile.capacity}</div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-12 gap-4 h-[calc(100vh-190px)]"
        >
          <div className="col-span-12 md:col-span-3 bg-white/80 backdrop-blur rounded-2xl border border-gray-100 shadow-sm flex flex-col">
            <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-semibold text-brand-dark">
                <FolderTree className="w-4 h-4 text-brand-green" />
                <span>Classes & Chapters</span>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto px-2 py-3 space-y-2">
              <div className="px-1 pb-2">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search class, subject, or chapter"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-7 py-1.5 text-xs text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green/40 focus:border-brand-green/40"
                  />
                  <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2 top-1/2 -translate-y-1/2" />
                </div>
              </div>
              {filteredClasses.map(cls => {
                const isClassExpanded = normalizedQuery ? true : expandedClasses.has(cls.id);
                return (
                  <div key={cls.id}>
                    <button
                      type="button"
                      onClick={() => toggleClassExpanded(cls.id)}
                      className="w-full flex items-center justify-between px-2 py-1.5 rounded-md hover:bg-brand-green-bg text-sm text-brand-dark"
                    >
                      <div className="flex items-center gap-2">
                        {isClassExpanded ? (
                          <ChevronDown className="w-3 h-3 text-gray-400" />
                        ) : (
                          <ChevronRight className="w-3 h-3 text-gray-400" />
                        )}
                        <span>{cls.name}</span>
                      </div>
                      <span className="text-[11px] text-gray-400 uppercase tracking-wide">
                        {cls.subjects.length} Subjects
                      </span>
                    </button>
                    {isClassExpanded && (
                      <div className="ml-6 mt-1 space-y-1">
                        {cls.subjects.map(subj => {
                          const isSubjectExpanded = normalizedQuery
                            ? true
                            : expandedSubjects.has(subj.id);
                          return (
                            <div key={subj.id}>
                              <button
                                type="button"
                                onClick={() => toggleSubjectExpanded(subj.id)}
                                className="w-full flex items-center justify-between px-2 py-1.5 rounded-md hover:bg-gray-50 text-xs text-gray-700"
                              >
                                <div className="flex items-center gap-2">
                                  {isSubjectExpanded ? (
                                    <ChevronDown className="w-3 h-3 text-gray-400" />
                                  ) : (
                                    <ChevronRight className="w-3 h-3 text-gray-400" />
                                  )}
                                  <span>{subj.name}</span>
                                </div>
                                <span className="text-[10px] text-gray-400">
                                  {subj.chapters.length} chapters
                                </span>
                              </button>
                              {isSubjectExpanded && (
                                <div className="ml-6 mt-1 space-y-0.5">
                                  {subj.chapters.map(ch => {
                                    const isActive = ch.id === selectedChapterId;
                                    const status = chapterStatus[ch.id] || 'not-started';
                                    let statusDotClass = 'bg-gray-300';
                                    if (status === 'in-progress') {
                                      statusDotClass = 'bg-brand-yellow';
                                    } else if (status === 'completed') {
                                      statusDotClass = 'bg-brand-green';
                                    }
                                    return (
                                      <button
                                        key={ch.id}
                                        type="button"
                                        onClick={() => handleSelectChapter(ch.id)}
                                        className={`w-full text-left px-2 py-1.5 rounded-md text-xs flex items-center gap-2 ${
                                          isActive
                                            ? 'bg-brand-green text-white'
                                            : 'text-gray-700 hover:bg-brand-green-bg'
                                        }`}
                                      >
                                        <span
                                          className={`w-1.5 h-1.5 rounded-full ${statusDotClass}`}
                                        />
                                        <span className="truncate">{ch.name}</span>
                                      </button>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col">
            <motion.div
              layout
              transition={{ type: 'spring', stiffness: 260, damping: 26 }}
              className="px-4 py-3 border-b border-gray-100 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="space-y-1">
                <div className="text-xs uppercase tracking-wide text-gray-400">
                  Teacher understanding
                </div>
                <div className="text-sm font-semibold text-brand-dark">
                  {selectedContext
                    ? `${selectedContext.cls.name} • ${selectedContext.subj.name} • ${selectedContext.chapter.name}`
                    : 'Select a chapter'}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-gray-400 whitespace-nowrap">
                  Language
                </span>
                <div className="inline-flex items-center gap-1 rounded-full bg-gray-50 border border-gray-200 px-2 py-0.5 shadow-sm">
                  <Languages className="w-3.5 h-3.5 text-brand-green" />
                  <div className="flex rounded-full bg-white/80 p-0.5">
                    {languages.map(lang => (
                      <button
                        key={lang}
                        type="button"
                        onClick={() => setActiveLanguage(lang)}
                        className={`px-2 py-0.5 rounded-full text-[11px] transition-all duration-200 ${
                          activeLanguage === lang
                            ? 'bg-brand-green text-white shadow-sm'
                            : 'text-gray-500 hover:text-brand-dark hover:bg-gray-100'
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            {selectedContext && (
              <div className="px-4 py-2 border-b border-gray-100 flex items-center justify-between bg-gray-50/60 text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">Chapter status:</span>
                  <div className="inline-flex rounded-full bg-white border border-gray-200 p-0.5">
                    {['not-started', 'in-progress', 'completed'].map(statusValue => {
                      const isActiveStatus = currentChapterStatus === statusValue;
                      const label =
                        statusValue === 'not-started'
                          ? 'Not started'
                          : statusValue === 'in-progress'
                          ? 'In progress'
                          : 'Completed';
                      const activeClass = isActiveStatus
                        ? statusValue === 'completed'
                          ? 'bg-brand-green text-white'
                          : statusValue === 'in-progress'
                          ? 'bg-brand-yellow text-brand-dark'
                          : 'bg-gray-200 text-brand-dark'
                        : 'text-gray-500 hover:text-brand-dark';
                      return (
                        <button
                          key={statusValue}
                          type="button"
                          onClick={() =>
                            setChapterStatus(prev => ({
                              ...prev,
                              [selectedChapterId]: statusValue,
                            }))
                          }
                          className={`px-2 py-0.5 rounded-full transition-colors ${activeClass}`}
                        >
                          {label}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                  <span className="w-2 h-2 rounded-full bg-brand-green" />
                  <span>Marks completed chapters in the list</span>
                </div>
              </div>
            )}
            <div className="flex-1 p-4 space-y-4 text-sm overflow-hidden">
              <div className="h-2/5 overflow-y-auto space-y-4 pr-1">
                {isLoadingNotebook ? (
                  <div className="h-full flex flex-col items-center justify-center text-gray-500 gap-2">
                    <Loader2 className="w-5 h-5 animate-spin text-brand-green" />
                    <span>Please wait, preparing your notebook…</span>
                  </div>
                ) : notebookContent.overview ? (
                  <>
                    <div className="bg-brand-green-bg rounded-xl p-3 border border-brand-green/10">
                      <div className="text-xs font-semibold text-brand-green mb-1">
                        Quick overview
                      </div>
                      <p className="text-sm text-brand-dark/90 leading-relaxed">
                        {notebookContent.overview}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold tracking-wide text-gray-500 mb-2">
                        Step-by-step flow for you
                      </h3>
                      <ul className="space-y-2">
                        {notebookContent.keyPoints.map((point, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-gray-700"
                          >
                            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-green" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold tracking-wide text-gray-500 mb-2">
                        Suggested classroom activities
                      </h3>
                      <ul className="space-y-2">
                        {notebookContent.examples.map((ex, idx) => (
                          <li key={idx} className="text-sm text-gray-700">
                            {ex}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-gray-500 text-sm">
                    <p>Select a chapter from the left to generate your understanding notes.</p>
                  </div>
                )}
              </div>
              <div className="h-3/5">
                <ChatBox
                  threadId={selectedContext ? `${selectedContext.cls.id}:${selectedContext.subj.id}:${selectedContext.chapter.id}` : null}
                  counterpartName={selectedContext ? `${selectedContext.cls.name} • ${selectedContext.subj.name}` : undefined}
                />
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col">
            <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-wide text-gray-400">
                  Teaching outputs
                </div>
                <div className="text-sm font-semibold text-brand-dark">
                  Ready-to-use classroom material
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm">
              {isLoadingOutputs ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-500 gap-2">
                  <Loader2 className="w-5 h-5 animate-spin text-brand-green" />
                  <span>Generating teaching materials…</span>
                </div>
              ) : (
                <>
                  <div className="rounded-xl border border-gray-100 bg-gray-50 p-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-brand-green" />
                        <span className="text-xs font-semibold text-brand-dark">
                          Teaching notes
                        </span>
                      </div>
                      <div className="flex gap-1">
                        <Button
                          variant="secondary"
                          className="px-2 py-1 text-[11px]"
                          onClick={() =>
                            downloadText(
                              `${selectedContext ? selectedContext.chapter.name : 'teaching-notes'}.pdf.txt`,
                              materialContent.teachingNotes
                            )
                          }
                        >
                          <FileDown className="w-3 h-3 mr-1" />
                          PDF
                        </Button>
                        <Button
                          variant="secondary"
                          className="px-2 py-1 text-[11px]"
                          onClick={() =>
                            downloadText(
                              `${selectedContext ? selectedContext.chapter.name : 'teaching-notes'}.doc.txt`,
                              materialContent.teachingNotes
                            )
                          }
                        >
                          <FileDown className="w-3 h-3 mr-1" />
                          DOC
                        </Button>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {materialContent.teachingNotes ||
                        'Select a chapter to generate structured teaching notes you can follow in class.'}
                    </p>
                  </div>

                  <div className="rounded-xl border border-gray-100 bg-gray-50 p-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-brand-yellow" />
                        <span className="text-xs font-semibold text-brand-dark">
                          Student-friendly content
                        </span>
                      </div>
                      <Button
                        variant="secondary"
                        className="px-2 py-1 text-[11px]"
                        onClick={() =>
                          downloadText(
                            `${selectedContext ? selectedContext.chapter.name : 'student-notes'}.pdf.txt`,
                            materialContent.studentNotes
                          )
                        }
                      >
                        <FileDown className="w-3 h-3 mr-1" />
                        PDF
                      </Button>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {materialContent.studentNotes ||
                        'Adaptive notes in simpler language with space for visuals and practice.'}
                    </p>
                  </div>

                  <div className="rounded-xl border border-gray-100 bg-gray-50 p-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-blue-500" />
                        <span className="text-xs font-semibold text-brand-dark">
                          Slide deck outline
                        </span>
                      </div>
                      <Button
                        variant="secondary"
                        className="px-2 py-1 text-[11px]"
                        onClick={() =>
                          downloadText(
                            `${selectedContext ? selectedContext.chapter.name : 'slides'}.ppt.txt`,
                            (materialContent.pptOutline.length
                              ? materialContent.pptOutline
                              : [
                                  'Slide 1: Topic title and warm-up question.',
                                  'Slide 2–3: Key ideas with visuals.',
                                  'Slide 4: Short practice questions.',
                                ]
                            ).join('\n')
                          )
                        }
                      >
                        <FileDown className="w-3 h-3 mr-1" />
                        PPT
                      </Button>
                    </div>
                    <ul className="space-y-1">
                      {(materialContent.pptOutline.length
                        ? materialContent.pptOutline
                        : [
                            'Slide 1: Topic title and warm-up question.',
                            'Slide 2–3: Key ideas with visuals.',
                            'Slide 4: Short practice questions.',
                          ]
                      ).map((item, idx) => (
                        <li key={idx} className="text-xs text-gray-600">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default TeacherDashboard;
