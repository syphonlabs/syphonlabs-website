"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FolderOpen,
  FileText,
  ImageIcon,
  Film,
  BrainCircuit,
  Search,
  Clock,
  Calendar,
  Download,
  Check,
  ChevronRight,
  Zap,
  Bell,
  Users,
  X,
} from "lucide-react"

export default function FileExplorerPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef(null)

  const slides = [
    {
      title: "Intelligent File Explorer",
      description: "Focus Frame transforms your file system with AI-powered organization and insights.",
      image: "file-explorer-main",
    },
    {
      title: "Smart File Organization",
      description: "AI automatically suggests the best location for your files based on content and context.",
      image: "auto-downloads",
    },
    {
      title: "Work Task Overlay",
      description: "See AI insights and task information directly on your files and folders.",
      image: "task-overlay",
    },
    {
      title: "Content Analysis",
      description: "AI analyzes your documents to extract key information and suggest next actions.",
      image: "content-analysis",
    },
    {
      title: "Seamless Integration",
      description: "Works with your existing file system while adding powerful AI capabilities.",
      image: "integration",
    },
  ]

  // Auto-advance slides
  useEffect(() => {
    if (playing) {
      const slideDuration = 5000 // 5 seconds per slide

      // Progress bar animation
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0
          }
          return prev + 1
        })
      }, slideDuration / 100)

      // Slide advancement
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setProgress(0)
      }, slideDuration)

      return () => {
        clearInterval(intervalRef.current)
        clearInterval(progressInterval)
      }
    }
  }, [playing, slides.length])

  const handlePlayPause = () => {
    setPlaying(!playing)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setProgress(0)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
      {/* Header with controls */}
      <div className="bg-gray-50 border-b border-gray-200 p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-400"></div>
          </div>
          <span className="text-sm font-medium text-gray-500">Syphon Explorer Presentation</span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={handlePlayPause} className="text-sm bg-violet-100 text-violet-700 px-2 py-1 rounded">
            {playing ? "Pause" : "Play"}
          </button>
        </div>
      </div>

      {/* Presentation content */}
      <div className="relative h-[500px] max-w-7xl mx-auto bg-gradient-to-br from-violet-50 to-indigo-50 overflow-x-hidden">
        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200">
          <div
            className="h-full bg-violet-500 transition-all duration-300 ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Slides */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="h-full flex flex-col items-center justify-center p-8"
          >
            {currentSlide === 0 && <FileExplorerMainView />}
            {currentSlide === 1 && <AutoDownloadsView />}
            {currentSlide === 2 && <TaskOverlayView />}
            {currentSlide === 3 && <ContentAnalysisView />}
            {currentSlide === 4 && <IntegrationView />}

            <div className="mt-8 text-center">
              <h3 className="text-2xl font-bold mb-3">{slides[currentSlide].title}</h3>
              <p className="text-lg text-gray-600">{slides[currentSlide].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation dots */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full transition-all ${
                index === currentSlide ? "bg-violet-600 w-6" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  )
}

// Slide content components
function FileExplorerMainView() {
  return (
    <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
      <div className="flex flex-col md:flex-row h-auto md:h-[350px]">
        {/* Sidebar - hidden on small screens */}
        <div className="w-full md:w-48 border-r border-gray-200 bg-gray-50 p-2 hidden md:block">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-500">FOLDERS</span>
            <div className="h-4 w-4 rounded bg-violet-100 flex items-center justify-center">
              <BrainCircuit className="h-2 w-2 text-violet-600" />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1 px-2 py-1 rounded text-sm bg-violet-100 text-violet-700">
              <FolderOpen className="h-5 w-5" />
              <span>Work</span>
            </div>
            <div className="pl-3 space-y-1">
              <div className="flex items-center gap-1 px-2 py-1 rounded text-sm text-gray-700">
                <FolderOpen className="h-5 w-5" />
                <span>Projects</span>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 rounded text-sm text-gray-700">
                <FolderOpen className="h-5 w-5" />
                <span>Reports</span>
              </div>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded text-sm text-gray-700">
              <FolderOpen className="h-5 w-5" />
              <span>Personal</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded text-sm text-gray-700">
              <FolderOpen className="h-5 w-5" />
              <span>Downloads</span>
              <div className="ml-auto flex items-center justify-center h-3 w-3 bg-red-500 rounded-full text-white text-[6px]">
                3
              </div>
            </div>
          </div>

          <div className="mt-3">
            <div className="text-sm font-medium text-gray-500 mb-1">AI INSIGHTS</div>
            <div className="bg-violet-50 p-1 rounded text-[10px] text-violet-700">
              <div className="flex items-center gap-1">
                <Zap className="h-2 w-2" />
                <span>3 files need attention</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          <div className="p-2 border-b border-gray-200 flex items-center gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                className="w-full pl-6 pr-2 py-1 text-sm border border-gray-200 rounded"
                placeholder="Search files..."
                readOnly
              />
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3 w-3 text-gray-400" />
            </div>
            <button className="p-1 rounded bg-gray-100">
              <Bell className="h-3 w-3 text-gray-500" />
            </button>
          </div>

          <div className="flex-1 p-3 grid grid-cols-2 sm:grid-cols-3 gap-2">
            <MiniFileItem name="Project Plan.docx" icon={<FileText className="h-5 w-5 text-blue-500" />} />
            <MiniFileItem name="Budget.xlsx" icon={<FileText className="h-5 w-5 text-green-500" />} />
            <MiniFileItem name="Logo.png" icon={<ImageIcon className="h-5 w-5 text-purple-500" />} />
            <MiniFileItem name="Meeting Notes.pdf" icon={<FileText className="h-5 w-5 text-red-500" />} />
            <MiniFileItem name="Product Demo.mp4" icon={<Film className="h-5 w-5 text-orange-500" />} />
            <MiniFileItem name="Presentation.pptx" icon={<FileText className="h-5 w-5 text-orange-500" />} />
          </div>
        </div>
      </div>
    </div>
  )
}

function AutoDownloadsView() {
  return (
    <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
      <div className="p-2 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center">
            <FolderOpen className="h-3 w-3 text-gray-600" />
          </div>
          <span className="text-base font-medium">File Explorer</span>
        </div>
        <div className="relative">
          <button className="flex items-center gap-1 text-sm bg-violet-100 text-violet-700 px-2 py-1 rounded">
            <Download className="h-5 w-5" />
            <span>Downloads</span>
          </button>
          <div className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-white text-[8px] flex items-center justify-center">
            1
          </div>
        </div>
      </div>

      <div className="flex h-[180px]">
        {/* Files area */}
        <div className="flex-1 p-2 border-r border-gray-200">
          <div className="grid grid-cols-3 gap-2">
            <MiniFileItem name="Project Plan.docx" icon={<FileText className="h-5 w-5 text-blue-500" />} />
            <MiniFileItem name="Budget.xlsx" icon={<FileText className="h-5 w-5 text-green-500" />} />
            <MiniFileItem name="Logo.png" icon={<ImageIcon className="h-5 w-5 text-purple-500" />} />
          </div>
        </div>

        {/* Integrated AI suggestion panel */}
        <div className="w-64 bg-white">
          <div className="bg-violet-50 p-2 flex items-center justify-between border-b border-violet-100">
            <div className="flex items-center gap-1">
              <BrainCircuit className="h-3 w-3 text-violet-600" />
              <span className="font-medium text-sm text-violet-700">AI File Organization</span>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <X className="h-3 w-3" />
            </button>
          </div>
          <div className="p-2">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-8 w-8 rounded-lg bg-gray-100 flex items-center justify-center">
                <FileText className="h-4 w-4 text-red-500" />
              </div>
              <div>
                <div className="font-medium text-sm">quarterly_report.pdf</div>
                <div className="text-[10px] text-gray-500">Downloaded just now</div>
              </div>
            </div>
            <div className="mb-2 text-sm">
              I suggest organizing this file in:
              <div className="mt-1 font-medium text-violet-700 bg-violet-50 p-1 rounded flex items-center gap-1 text-sm">
                <FolderOpen className="h-3 w-3" />
                <span>Work/Reports/Financial</span>
              </div>
            </div>
            <button className="w-full bg-violet-600 text-white py-1 rounded text-sm hover:bg-violet-700 transition-colors">
              Move File
            </button>
          </div>
        </div>
      </div>

      <div className="p-2 border-t border-gray-200 bg-gray-50">
        <div className="text-sm font-medium mb-1">RECENT ACTIVITY</div>
        <div className="space-y-1">
          <div className="flex items-start gap-1 text-sm">
            <Check className="h-3 w-3 text-green-500 mt-0.5" />
            <div>
              <span className="text-gray-700">Moved </span>
              <span className="text-violet-600">team_photo.jpg</span>
              <span className="text-gray-700"> to Work Events</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TaskOverlayView() {
  return (
    <div className="w-full max-w-3xl flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-200 w-64">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center">
            <FileText className="h-4 w-4 text-blue-600" />
          </div>
          <div>
            <div className="font-medium text-sm">Q3_Marketing_Plan.docx</div>
            <div className="text-xs text-gray-500">Modified 2 hours ago</div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-3 mb-3">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium">TASK OVERLAY</div>
            <div className="h-5 w-5 rounded bg-violet-100 flex items-center justify-center">
              <BrainCircuit className="h-3 w-3 text-violet-600" />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-5 w-5 text-violet-500" />
              <span className="text-gray-700">Due: Tomorrow, 5:00 PM</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Users className="h-5 w-5 text-violet-500" />
              <span className="text-gray-700">Assigned to: Marketing Team</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-5 w-5 text-violet-500" />
              <span className="text-gray-700">Est. completion: 3 hours</span>
            </div>
          </div>
        </div>

        <div className="bg-violet-50 border border-violet-100 rounded p-2 text-sm">
          <div className="flex items-center gap-1 mb-1">
            <Zap className="h-3 w-3 text-violet-600" />
            <span className="font-medium text-violet-700">AI Insight</span>
          </div>
          <p className="text-gray-700">This document needs review from Sarah before the meeting tomorrow.</p>
        </div>
      </div>

      <div className="relative ml-6">
        <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-8 h-[2px] bg-violet-300"></div>
        <div className="bg-white rounded-lg shadow-lg p-3 border border-gray-200 w-48">
          <div className="text-sm font-medium mb-2">RELATED FILES</div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm p-1 hover:bg-gray-50 rounded">
              <FileText className="h-5 w-5 text-blue-500" />
              <span className="text-gray-700">Q2_Marketing_Results.pdf</span>
            </div>
            <div className="flex items-center gap-2 text-sm p-1 hover:bg-gray-50 rounded">
              <FileText className="h-5 w-5 text-green-500" />
              <span className="text-gray-700">Marketing_Budget.xlsx</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ContentAnalysisView() {
  return (
    <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
      <div className="p-3 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-blue-500" />
          <span className="text-base font-medium">Project_Proposal.docx</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="h-6 w-6 rounded bg-gray-100 flex items-center justify-center">
            <Users className="h-3 w-3 text-gray-500" />
          </button>
          <button className="h-6 w-6 rounded bg-violet-100 flex items-center justify-center">
            <BrainCircuit className="h-3 w-3 text-violet-600" />
          </button>
        </div>
      </div>

      <div className="flex h-[300px]">
        <div className="flex-1 p-3 text-sm text-gray-700 overflow-y-auto">
          <p className="mb-2">
            This project proposal outlines our strategy for the upcoming quarter. We will focus on three main areas:
          </p>
          <ol className="list-decimal pl-5 mb-2 space-y-1">
            <li>Market expansion into the European region</li>
            <li>Product development for the new XYZ line</li>
            <li>Customer retention initiatives</li>
          </ol>
          <p>
            The estimated budget for this project is $250,000 with an expected ROI of 15% within the first year.
            Implementation will begin next month.
          </p>
        </div>

        <div className="w-64 border-l border-gray-200 bg-gray-50 p-3">
          <div className="text-sm font-medium text-gray-500 mb-2">AI CONTENT ANALYSIS</div>

          <div className="space-y-3">
            <div className="bg-white p-2 rounded border border-gray-200">
              <div className="text-sm font-medium mb-1">Key Information</div>
              <div className="space-y-1">
                <div className="flex items-center gap-1 text-sm">
                  <span className="h-2 w-2 rounded-full bg-violet-500"></span>
                  <span>Budget: $250,000</span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <span className="h-2 w-2 rounded-full bg-violet-500"></span>
                  <span>ROI: 15%</span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <span className="h-2 w-2 rounded-full bg-violet-500"></span>
                  <span>Timeline: Next month</span>
                </div>
              </div>
            </div>

            <div className="bg-violet-50 p-2 rounded border border-violet-100">
              <div className="flex items-center gap-1 mb-1">
                <Zap className="h-3 w-3 text-violet-600" />
                <span className="text-sm font-medium text-violet-700">Suggestions</span>
              </div>
              <p className="text-sm text-gray-700">
                Consider adding specific KPIs for each focus area to better track success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function IntegrationView() {
  return (
    <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
      <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 w-full md:w-80">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-8 w-8 rounded-lg bg-violet-100 flex items-center justify-center">
            <BrainCircuit className="h-4 w-4 text-violet-600" />
          </div>
          <div>
            <div className="font-medium text-sm">AI Integration</div>
            <div className="text-xs text-gray-500">Works with your files</div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <Check className="h-3 w-3 text-green-500" />
            <span>Works with your existing file system</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Check className="h-3 w-3 text-green-500" />
            <span>All files remain stored locally on your device</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Check className="h-3 w-3 text-green-500" />
            <span>No need to migrate or change workflows</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Check className="h-3 w-3 text-green-500" />
            <span>Integrates with cloud storage services</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Check className="h-3 w-3 text-green-500" />
            <span>Works offline with local files</span>
          </div>
        </div>
      </div>

      <div className="hidden md:flex flex-col items-center">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-violet-100 mb-2">
          <ChevronRight className="h-6 w-6 text-violet-600" />
        </div>
        <div className="text-sm font-medium text-gray-700">Seamless Integration</div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 w-full md:w-80">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center">
            <Zap className="h-4 w-4 text-blue-600" />
          </div>
          <div>
            <div className="font-medium text-sm">Enhanced Productivity</div>
            <div className="text-xs text-gray-500">AI-powered workflow</div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <Check className="h-3 w-3 text-green-500" />
            <span>Automatic file organization</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Check className="h-3 w-3 text-green-500" />
            <span>Content analysis and insights</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Check className="h-3 w-3 text-green-500" />
            <span>Task and deadline management</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Check className="h-3 w-3 text-green-500" />
            <span>Smart file recommendations</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function MiniFileItem({ name, icon }) {
  return (
    <div className="p-3 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer transition-colors">
      <div className="h-12 w-12 rounded bg-gray-100 flex items-center justify-center mx-auto mb-2">{icon}</div>
      <div className="text-sm text-center w-full overflow-hidden text-ellipsis">{name}</div>
    </div>
  )
}
