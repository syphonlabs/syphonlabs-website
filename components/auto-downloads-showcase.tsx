"use client"

import { useState, useEffect } from "react"
import { Download, FolderOpen, Check, FileText, ImageIcon, Film, Music, File, BrainCircuit, X } from "lucide-react"

export default function AutoDownloadsShowcase() {
  const [step, setStep] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [showNotification, setShowNotification] = useState(false)
  const [currentFile, setCurrentFile] = useState(null)
  const [suggestedFolder, setSuggestedFolder] = useState(null)
  const [organizedFiles, setOrganizedFiles] = useState([])

  const downloadQueue = [
    {
      id: 1,
      name: "Q3_Marketing_Report.pdf",
      type: "document",
      icon: <FileText className="h-6 w-6" />,
      suggestedFolder: "Work/Reports/Marketing",
    },
    {
      id: 2,
      name: "team_photo.jpg",
      type: "image",
      icon: <ImageIcon className="h-6 w-6" />,
      suggestedFolder: "Personal/Photos/Work Events",
    },
    {
      id: 3,
      name: "project_presentation.pptx",
      type: "document",
      icon: <FileText className="h-6 w-6" />,
      suggestedFolder: "Work/Presentations",
    },
    {
      id: 4,
      name: "vacation_video.mp4",
      type: "video",
      icon: <Film className="h-6 w-6" />,
      suggestedFolder: "Personal/Videos/Vacation",
    },
  ]

  // Auto-play the animation steps
  useEffect(() => {
    if (!playing) return

    const timer = setTimeout(
      () => {
        if (step === 0) {
          // Show download notification
          setShowNotification(true)
          setCurrentFile(downloadQueue[0])
          setSuggestedFolder(downloadQueue[0].suggestedFolder)
          setStep(1)
        } else if (step === 1) {
          // Accept suggestion and organize file
          setOrganizedFiles([...organizedFiles, currentFile])
          setShowNotification(false)
          setTimeout(() => {
            setShowNotification(true)
            setCurrentFile(downloadQueue[1])
            setSuggestedFolder(downloadQueue[1].suggestedFolder)
            setStep(2)
          }, 1000)
        } else if (step === 2) {
          // Accept suggestion for second file
          setOrganizedFiles([...organizedFiles, currentFile])
          setShowNotification(false)
          setTimeout(() => {
            setShowNotification(true)
            setCurrentFile(downloadQueue[2])
            setSuggestedFolder(downloadQueue[2].suggestedFolder)
            setStep(3)
          }, 1000)
        } else if (step === 3) {
          // Accept suggestion for third file
          setOrganizedFiles([...organizedFiles, currentFile])
          setShowNotification(false)
          setTimeout(() => {
            setShowNotification(true)
            setCurrentFile(downloadQueue[3])
            setSuggestedFolder(downloadQueue[3].suggestedFolder)
            setStep(4)
          }, 1000)
        } else if (step === 4) {
          // Accept suggestion for fourth file
          setOrganizedFiles([...organizedFiles, currentFile])
          setShowNotification(false)
          // Reset animation
          setTimeout(() => {
            setStep(0)
            setOrganizedFiles([])
          }, 2000)
        }
      },
      step === 0 ? 1000 : 3000,
    )

    return () => clearTimeout(timer)
  }, [step, playing, organizedFiles, currentFile])

  const handlePlayPause = () => {
    setPlaying(!playing)
  }

  const handleAcceptSuggestion = () => {
    if (currentFile) {
      setOrganizedFiles([...organizedFiles, currentFile])
      setShowNotification(false)
      setStep((prevStep) => prevStep + 1)
    }
  }

  const handleDismissSuggestion = () => {
    setShowNotification(false)
    setStep((prevStep) => prevStep + 1)
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
      {/* Header with controls */}
      <div className="bg-gray-50 border-b border-gray-200 p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-400"></div>
          </div>
          <span className="text-base font-medium text-gray-500">Syphon Explorer</span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={handlePlayPause} className="text-sm bg-violet-100 text-violet-700 px-2 py-1 rounded">
            {playing ? "Pause Demo" : "Play Demo"}
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="h-auto md:h-[500px] max-w-7xl mx-auto flex flex-col md:flex-row">
        {/* Sidebar - Folder structure */}
        <div className="w-full md:w-64 border-r border-gray-200 bg-gray-50 p-3 flex flex-col hidden md:flex">
          <div className="text-base font-medium text-gray-500 mb-3">FOLDERS</div>

          <div className="flex-1 overflow-y-auto">
            <div className="space-y-1">
              <FolderItem name="Work" expanded={true}>
                <FolderItem name="Reports" expanded={true}>
                  <FolderItem name="Marketing" highlight={suggestedFolder === "Work/Reports/Marketing"} />
                  <FolderItem name="Sales" />
                  <FolderItem name="Finance" />
                </FolderItem>
                <FolderItem name="Presentations" highlight={suggestedFolder === "Work/Presentations"} />
                <FolderItem name="Projects" />
              </FolderItem>

              <FolderItem name="Personal" expanded={true}>
                <FolderItem name="Photos" expanded={true}>
                  <FolderItem name="Work Events" highlight={suggestedFolder === "Personal/Photos/Work Events"} />
                  <FolderItem name="Family" />
                  <FolderItem name="Travel" />
                </FolderItem>
                <FolderItem name="Videos" expanded={true}>
                  <FolderItem name="Vacation" highlight={suggestedFolder === "Personal/Videos/Vacation"} />
                </FolderItem>
                <FolderItem name="Documents" />
              </FolderItem>

              <FolderItem name="Downloads" />
            </div>
          </div>

          <div className="mt-4">
            <div className="text-base font-medium text-gray-500 mb-2">RECENT ACTIVITY</div>
            <div className="space-y-1 text-sm text-gray-600">
              {organizedFiles.map((file, index) => (
                <div key={index} className="flex items-center gap-1 py-1">
                  <Check className="h-3 w-3 text-green-500" />
                  <span>
                    Moved {file.name} to {file.suggestedFolder}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="p-3 border-b border-gray-200 flex items-center">
            <div className="flex-1">
              <div className="text-base font-medium">File Explorer</div>
              <div className="text-sm text-gray-500">Organize your files with AI assistance</div>
            </div>
            <div className="relative">
              <button className="flex items-center gap-1 text-sm bg-violet-100 text-violet-700 px-2 py-1 rounded">
                <Download className="h-3 w-3" />
                <span>Downloads</span>
              </button>
              {showNotification && (
                <div className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-white text-[8px] flex items-center justify-center">
                  1
                </div>
              )}
            </div>
          </div>

          {/* Content area with files and suggestion panel */}
          <div className="flex-1 flex flex-col md:flex-row">
            {/* Files grid - Fixed width container */}
            <div className="flex-1 p-4 overflow-y-auto">
              {/* Use a fixed grid layout that doesn't change when the panel appears */}
              <div
                className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 ${showNotification ? "md:pr-4" : ""}`}
              >
                {/* Sample files with fixed dimensions */}
                <FileItem name="Project Plan.docx" icon={<FileText className="h-6 w-6 text-blue-500" />} />
                <FileItem name="Budget.xlsx" icon={<FileText className="h-6 w-6 text-green-500" />} />
                <FileItem name="Logo.png" icon={<ImageIcon className="h-6 w-6 text-purple-500" />} />
                <FileItem name="Meeting Notes.pdf" icon={<FileText className="h-6 w-6 text-red-500" />} />
                <FileItem name="Product Demo.mp4" icon={<Film className="h-6 w-6 text-orange-500" />} />
                <FileItem name="Playlist.mp3" icon={<Music className="h-6 w-6 text-pink-500" />} />
                <FileItem name="Contacts.csv" icon={<File className="h-6 w-6 text-gray-500" />} />
                <FileItem name="Presentation.pptx" icon={<FileText className="h-6 w-6 text-orange-500" />} />
              </div>
            </div>

            {/* AI Suggestion Panel - Absolutely positioned overlay */}
            {showNotification && currentFile && (
              <div className="md:w-[320px] bg-white border-t md:border-t-0 md:border-l border-gray-200 flex-shrink-0">
                <div className="bg-violet-50 p-2 flex items-center justify-between border-b border-violet-100">
                  <div className="flex items-center gap-2">
                    <BrainCircuit className="h-4 w-4 text-violet-600" />
                    <span className="font-medium text-sm text-violet-700">AI File Organization</span>
                  </div>
                  <button onClick={handleDismissSuggestion} className="text-gray-400 hover:text-gray-600">
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <div className="p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center">
                      {currentFile.icon}
                    </div>
                    <div>
                      <div className="font-medium text-sm">{currentFile.name}</div>
                      <div className="text-xs text-gray-500">Downloaded just now</div>
                    </div>
                  </div>
                  <div className="mb-3 text-sm">
                    I suggest organizing this file in:
                    <div className="mt-1 font-medium text-violet-700 bg-violet-50 p-2 rounded flex items-center gap-2">
                      <FolderOpen className="h-4 w-4" />
                      <span>{currentFile.suggestedFolder}</span>
                    </div>
                  </div>
                  <button
                    onClick={handleAcceptSuggestion}
                    className="w-full bg-violet-600 text-white py-1.5 rounded text-sm hover:bg-violet-700 transition-colors"
                  >
                    Move File
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-gray-50 border-t border-gray-200 p-3">
        <div className="text-center text-sm text-gray-600">
          {step === 0 && "Starting automatic downloads demo..."}
          {step === 1 && "AI suggesting folder for marketing report..."}
          {step === 2 && "AI suggesting folder for team photo..."}
          {step === 3 && "AI suggesting folder for project presentation..."}
          {step === 4 && "AI suggesting folder for vacation video..."}
        </div>
      </div>
    </div>
  )
}

// Helper components
function FolderItem({ name, children, expanded = false, highlight = false }) {
  const [isExpanded, setIsExpanded] = useState(expanded)

  return (
    <div>
      <div
        className={`flex items-center gap-1 px-2 py-1 rounded text-sm cursor-pointer ${
          highlight ? "bg-violet-100 text-violet-700" : "text-gray-700 hover:bg-gray-100"
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <FolderOpen className={`h-6 w-6 ${highlight ? "text-violet-500" : ""}`} />
        <span>{name}</span>
        {highlight && (
          <div className="ml-auto flex items-center justify-center h-4 w-4 bg-violet-200 rounded-full">
            <Check className="h-3 w-3 text-violet-700" />
          </div>
        )}
      </div>
      {isExpanded && children && <div className="pl-4 border-l border-gray-200 ml-2 mt-1">{children}</div>}
    </div>
  )
}

function FileItem({ name, icon }) {
  return (
    <div className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors h-[120px] flex flex-col items-center justify-center">
      <div className="h-14 w-14 rounded-lg bg-gray-100 flex items-center justify-center mb-2">{icon}</div>
      <div className="text-xs text-center w-full overflow-hidden text-ellipsis">{name}</div>
    </div>
  )
}
