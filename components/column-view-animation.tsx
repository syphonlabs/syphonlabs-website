"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Columns, FolderKanban, File, Plus, X, Maximize2, Minimize2 } from "lucide-react"

export default function ColumnViewAnimation() {
  const [step, setStep] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [columns, setColumns] = useState(2)
  const [activeColumn, setActiveColumn] = useState(1)
  const [showFilePreview, setShowFilePreview] = useState(false)

  // Auto-play the animation steps
  useEffect(() => {
    if (!playing) return

    const timer = setTimeout(() => {
      if (step === 0) {
        setColumns(2)
        setStep(1)
      } else if (step === 1) {
        setActiveColumn(1)
        setStep(2)
      } else if (step === 2) {
        setColumns(3)
        setStep(3)
      } else if (step === 3) {
        setShowFilePreview(true)
        setStep(4)
      } else if (step === 4) {
        setShowFilePreview(false)
        setColumns(2)
        setActiveColumn(0)
        setStep(0)
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [step, playing])

  const handlePlayPause = () => {
    setPlaying(!playing)
  }

  const handleAddColumn = () => {
    if (columns < 4) {
      setColumns(columns + 1)
    }
  }

  const handleRemoveColumn = () => {
    if (columns > 1) {
      setColumns(columns - 1)
    }
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
      {/* Header with controls */}
      <div className="bg-gray-50 border-b border-gray-200 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="flex space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-400"></div>
          </div>
          <span className="text-base font-medium text-gray-500">Syphon Explorer Workspace</span>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button onClick={handlePlayPause} className="text-sm bg-violet-100 text-violet-700 px-2 py-1 rounded">
            {playing ? "Pause Demo" : "Play Demo"}
          </button>
          <div className="flex items-center gap-1 ml-auto sm:ml-0">
            <button
              onClick={handleRemoveColumn}
              disabled={columns <= 1}
              className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            >
              <Minimize2 className="h-3 w-3" />
            </button>
            <span className="text-sm text-gray-500">Columns: {columns}</span>
            <button
              onClick={handleAddColumn}
              disabled={columns >= 4}
              className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            >
              <Maximize2 className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Column view container - adjust height for mobile */}
      <div className="flex h-[300px] sm:h-[350px] md:h-[450px] max-w-6xl mx-auto overflow-hidden">
        {/* Sidebar */}
        <div className="w-56 border-r border-gray-200 p-4 flex flex-col bg-gray-50">
          <div className="flex items-center justify-between mb-4">
            <span className="font-medium text-base">WORKSPACES</span>
          </div>
          <div className="space-y-1">
            {["Personal", "Work", "Projects"].map((item, i) => (
              <div
                key={i}
                className={`px-2 py-1 rounded text-base ${i === 0 ? "bg-violet-100 text-violet-700" : "text-gray-700 hover:bg-gray-100"}`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic columns */}
        <div className="flex-1 flex">
          <AnimatePresence>
            {/* First column - always visible */}
            <motion.div
              key="column-0"
              initial={false}
              animate={{
                width: `${100 / columns}%`,
                opacity: 1,
                x: 0,
              }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="border-r border-gray-200 flex flex-col"
            >
              <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
                <span className="font-medium text-base">FOLDERS</span>
                <button className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center">
                  <Plus className="h-3 w-3" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-3">
                {["Documents", "Images", "Projects", "Archive"].map((folder, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2 px-3 py-2 rounded text-base cursor-pointer ${
                      activeColumn === 0 && i === 2
                        ? "bg-violet-100 text-violet-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveColumn(0)}
                  >
                    <FolderKanban className="h-4 w-4" />
                    <span>{folder}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Second column - always visible */}
            {columns >= 2 && (
              <motion.div
                key="column-1"
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  width: `${100 / columns}%`,
                  opacity: 1,
                  x: 0,
                }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="border-r border-gray-200 flex flex-col"
              >
                <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
                  <span className="font-medium text-base">FILES</span>
                  <button className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center">
                    <Plus className="h-3 w-3" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto p-3">
                  {[
                    { name: "Project Plan", date: "Today" },
                    { name: "Meeting Notes", date: "Yesterday" },
                    { name: "Research Data", date: "3 days ago" },
                  ].map((file, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-2 px-3 py-2 rounded text-base cursor-pointer ${
                        activeColumn === 1 && i === 0
                          ? "bg-violet-100 text-violet-700"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={() => {
                        setActiveColumn(1)
                        if (columns >= 3 && i === 0) {
                          setShowFilePreview(true)
                        }
                      }}
                    >
                      <File className="h-4 w-4" />
                      <div className="flex-1">
                        <div>{file.name}</div>
                        <div className="text-sm text-gray-500">{file.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Third column - conditionally visible */}
            {columns >= 3 && (
              <motion.div
                key="column-2"
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  width: `${100 / columns}%`,
                  opacity: 1,
                  x: 0,
                }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
                className="border-r border-gray-200 flex flex-col"
              >
                <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
                  <span className="font-medium text-base">PREVIEW</span>
                  <button className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center">
                    <X className="h-3 w-3" onClick={() => setShowFilePreview(false)} />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto p-4">
                  {showFilePreview ? (
                    <div>
                      <h3 className="text-xl font-bold mb-3">Project Plan</h3>
                      <div className="text-sm text-gray-500 mb-4">Last edited: Today at 2:30 PM</div>
                      <div className="space-y-3 text-base">
                        <p>This document outlines our project plan for Q3.</p>
                        <div className="bg-violet-50 border border-violet-100 rounded p-2 text-violet-700 text-sm">
                          <div className="flex items-center gap-1 mb-1">
                            <Columns className="h-3 w-3" />
                            <span className="font-medium">AI Suggestion</span>
                          </div>
                          I've analyzed your team's capacity and suggest a 3-phase approach.
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 text-base">
                      Select a file to preview
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Fourth column - conditionally visible */}
            {columns >= 4 && (
              <motion.div
                key="column-3"
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  width: `${100 / columns}%`,
                  opacity: 1,
                  x: 0,
                }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col"
              >
                <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
                  <span className="font-medium text-base">TASKS</span>
                  <button className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center">
                    <Plus className="h-3 w-3" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto p-3">
                  <div className="mb-3">
                    <div className="text-sm font-medium text-gray-500 mb-2">TO DO</div>
                    <div className="bg-gray-50 p-2 rounded border border-gray-200 mb-2 text-base">
                      Research competitors
                    </div>
                    <div className="bg-gray-50 p-2 rounded border border-gray-200 text-base">Create wireframes</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-2">IN PROGRESS</div>
                    <div className="bg-violet-50 p-2 rounded border border-violet-100 text-base text-violet-700">
                      Draft project plan
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-gray-50 border-t border-gray-200 p-4">
        <div className="text-center text-base text-gray-600">
          {step === 0 && "Starting column view demo..."}
          {step === 1 && "Browsing files in the second column"}
          {step === 2 && "Adding a third column for content preview"}
          {step === 3 && "Opening a file to view its contents"}
          {step === 4 && "Resetting the view"}
        </div>
      </div>
    </div>
  )
}
