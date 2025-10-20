"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import Image from "next/image"
import {
  Columns,
  BrainCircuit,
  X,
  Plus,
  Clock,
  Sparkles,
  Moon,
  Sun,
  Bot,
  Zap,
  Download,
  FileText,
  ImageIcon,
  Film,
  FolderOpen,
  Search,
} from "lucide-react"

export default function Hero() {
  const [email, setEmail] = useState("")
  const [activeTab, setActiveTab] = useState("explorer")
  const [showAIPanel, setShowAIPanel] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [typingEffect, setTypingEffect] = useState("")
  const fullText = "This project aims to revolutionize how teams collaborate."
  const typingRef = useRef(null)
  const [darkMode, setDarkMode] = useState(false)
  const [showDownloadNotification, setShowDownloadNotification] = useState(false)

  // Typing effect
  useEffect(() => {
    if (activeTab === "ai") {
      const interval = setInterval(() => {
        if (typingEffect.length < fullText.length) {
          setTypingEffect(fullText.substring(0, typingEffect.length + 1))
        } else {
          clearInterval(interval)
          setTimeout(() => {
            setShowAIPanel(true)
          }, 1000)
        }
      }, 50)
      return () => clearInterval(interval)
    }
  }, [activeTab, typingEffect])

  // Show notification after a delay
  useEffect(() => {
    if (activeTab === "explorer") {
      const timer = setTimeout(() => {
        setShowDownloadNotification(true)
      }, 2000)
      return () => clearTimeout(timer)
    } else {
      setShowDownloadNotification(false)
    }
  }, [activeTab])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Email submitted:", email)
    setEmail("")
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-white to-violet-50">
      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Image src="/Syphon Labs Logo 2.png" alt="Syphon Labs" width={48} height={48} priority className="h-12 w-12 rounded-full" />
                <div className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm text-violet-700">
                  <span className="flex h-2 w-2 rounded-full bg-violet-500 mr-2"></span>
                  AI-Powered File System
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                Introducing the Syphon Explorer: An Intelligent File Explorer for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                  Modern Work
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-lg">
              Syphon Explorer transforms your local file system with AI-powered organization, task management, and
              intelligent insights. Your files stay on your device while being reimagined with AI.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-2 mb-4">
              <div className="flex items-start gap-2">
                <Download className="h-5 w-5 text-violet-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Automatic Downloads Organization</span>
              </div>
              <div className="flex items-start gap-2">
                <BrainCircuit className="h-5 w-5 text-violet-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">AI-Powered File Analysis</span>
              </div>
              <div className="flex items-start gap-2">
                <Bot className="h-5 w-5 text-violet-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Task Management Overlay</span>
              </div>
              <div className="flex items-start gap-2">
                <Zap className="h-5 w-5 text-violet-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Smart File Recommendations</span>
              </div>
              <div className="flex items-start gap-2">
                <Columns className="h-5 w-5 text-violet-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Paper Trail View Organization</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-5 w-5 text-violet-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Deadline & Priority Management</span>
              </div>
            </div>

            {/* Early access form and adopters row removed as requested */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mt-8 lg:mt-0"
          >
            <div
              className={`relative rounded-xl border ${darkMode ? "border-gray-700 bg-gray-900" : "border-gray-200 bg-white"} shadow-lg overflow-hidden transition-colors duration-200`}
            >
              {/* Workspace Header */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                </div>
                <div className="ml-4">
                  <button
                    onClick={toggleDarkMode}
                    className="h-6 w-6 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    aria-label="Toggle dark mode"
                  >
                    {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  </button>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Syphon Explorer</div>
                </div>
              </div>

              {/* Workspace Tabs */}
              <div className={`pt-12 border-b ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
                <div className="flex">
                  <button
                    className={`px-4 py-2 text-sm font-medium ${
                      activeTab === "explorer"
                        ? `text-violet-500 border-b-2 border-violet-500 ${darkMode ? "dark:text-violet-400 dark:border-violet-400" : ""}`
                        : `text-gray-500 hover:text-gray-700 ${darkMode ? "dark:text-gray-400 dark:hover:text-gray-300" : ""}`
                    }`}
                    onClick={() => {
                      setActiveTab("explorer")
                      setShowAIPanel(false)
                      setTypingEffect("")
                    }}
                  >
                    <div className="flex items-center gap-1">
                      <FolderOpen className="h-4 w-4" />
                      <span>File Explorer</span>
                    </div>
                  </button>
                  <button
                    className={`px-4 py-2 text-sm font-medium ${
                      activeTab === "ai"
                        ? `text-violet-500 border-b-2 border-violet-500 ${darkMode ? "dark:text-violet-400 dark:border-violet-400" : ""}`
                        : `text-gray-500 hover:text-gray-700 ${darkMode ? "dark:text-gray-400 dark:hover:text-gray-300" : ""}`
                    }`}
                    onClick={() => {
                      setActiveTab("ai")
                      setShowAIPanel(false)
                      setTypingEffect("")
                    }}
                  >
                    <div className="flex items-center gap-1">
                      <BrainCircuit className="h-4 w-4" />
                      <span>AI Assistant</span>
                    </div>
                  </button>
                  <button
                    className={`px-4 py-2 text-sm font-medium ${
                      activeTab === "tasks"
                        ? `text-violet-500 border-b-2 border-violet-500 ${darkMode ? "dark:text-violet-400 dark:border-violet-400" : ""}`
                        : `text-gray-500 hover:text-gray-700 ${darkMode ? "dark:text-gray-400 dark:hover:text-gray-300" : ""}`
                    }`}
                    onClick={() => {
                      setActiveTab("tasks")
                      setShowAIPanel(false)
                      setTypingEffect("")
                    }}
                  >
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>Tasks</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Workspace Content */}
              <div className="h-[400px] overflow-hidden">
                {/* File Explorer View */}
                {activeTab === "explorer" && (
                  <div className="h-full flex">
                    {/* Sidebar - Folder structure */}
                    <div
                      className={`w-48 border-r ${darkMode ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-gray-50"} p-3 flex flex-col`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className={`font-medium text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                          FOLDERS
                        </span>
                        <button
                          className={`h-5 w-5 rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-100"} flex items-center justify-center`}
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <div className="space-y-1">
                        <div
                          className={`flex items-center gap-1 px-2 py-1 rounded text-sm ${darkMode ? "bg-violet-900/30 text-violet-300" : "bg-violet-100 text-violet-700"}`}
                        >
                          <FolderOpen className="h-3 w-3" />
                          <span>Work</span>
                        </div>
                        <div className="pl-3 space-y-1">
                          <div
                            className={`flex items-center gap-1 px-2 py-1 rounded text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                          >
                            <FolderOpen className="h-3 w-3" />
                            <span>Projects</span>
                          </div>
                          <div
                            className={`flex items-center gap-1 px-2 py-1 rounded text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                          >
                            <FolderOpen className="h-3 w-3" />
                            <span>Reports</span>
                          </div>
                        </div>
                        <div
                          className={`flex items-center gap-1 px-2 py-1 rounded text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                        >
                          <FolderOpen className="h-3 w-3" />
                          <span>Personal</span>
                        </div>
                        <div
                          className={`flex items-center gap-1 px-2 py-1 rounded text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                        >
                          <FolderOpen className="h-3 w-3" />
                          <span>Downloads</span>
                          {showDownloadNotification && (
                            <div className="ml-auto flex items-center justify-center h-4 w-4 bg-red-500 rounded-full text-white text-[8px]">
                              1
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="mt-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className={`font-medium text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                            RECENT FILES
                          </span>
                        </div>
                        <div className="space-y-1">
                          {["Project Plan.docx", "Budget.xlsx", "Meeting Notes.pdf"].map((file, i) => (
                            <div
                              key={i}
                              className={`flex items-center gap-1 px-2 py-1 rounded text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                            >
                              <FileText className="h-3 w-3" />
                              <span>{file}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Main content - Files */}
                    <div className="flex-1 flex flex-col">
                      <div
                        className={`p-3 border-b ${darkMode ? "border-gray-700" : "border-gray-200"} flex items-center gap-2`}
                      >
                        <div className="relative flex-1">
                          <input
                            type="text"
                            className={`w-full pl-7 pr-2 py-1 text-sm border ${darkMode ? "border-gray-700 bg-gray-800 text-gray-300" : "border-gray-200"} rounded`}
                            placeholder="Search files..."
                            readOnly
                          />
                          <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        </div>
                        <button
                          className={`h-7 w-7 rounded ${darkMode ? "bg-gray-700" : "bg-gray-100"} flex items-center justify-center`}
                        >
                          <BrainCircuit className={`h-4 w-4 ${darkMode ? "text-violet-400" : "text-violet-600"}`} />
                        </button>
                      </div>

                      <div className="flex-1 p-4 overflow-y-auto">
                        <div className="mb-4">
                          <h3 className={`text-lg font-bold ${darkMode ? "text-gray-200" : ""}`}>Work Files</h3>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                          {[
                            { name: "Project Plan.docx", icon: <FileText className="h-5 w-5 text-blue-500" /> },
                            { name: "Budget.xlsx", icon: <FileText className="h-5 w-5 text-green-500" /> },
                            { name: "Logo.png", icon: <ImageIcon className="h-5 w-5 text-purple-500" /> },
                            { name: "Meeting Notes.pdf", icon: <FileText className="h-5 w-5 text-red-500" /> },
                            { name: "Product Demo.mp4", icon: <Film className="h-5 w-5 text-orange-500" /> },
                            { name: "Presentation.pptx", icon: <FileText className="h-5 w-5 text-orange-500" /> },
                          ].map((file, i) => (
                            <div
                              key={i}
                              className={`p-3 border ${darkMode ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-white"} rounded-lg hover:shadow-md transition-shadow cursor-pointer`}
                            >
                              <div
                                className={`h-12 w-12 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-100"} flex items-center justify-center mx-auto mb-2`}
                              >
                                {file.icon}
                              </div>
                              <div className={`text-xs text-center truncate ${darkMode ? "text-gray-300" : ""}`}>
                                {file.name}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* AI Assistant View */}
                {activeTab === "ai" && (
                  <div className="h-full flex">
                    <div className="flex-1 p-4 flex flex-col">
                      <div className="mb-4 flex items-center justify-between">
                        <h3 className={`text-lg font-semibold ${darkMode ? "text-gray-200" : ""}`}>Project Proposal</h3>
                        <button
                          className={`flex items-center gap-1 text-xs ${darkMode ? "bg-violet-900/30 text-violet-300" : "bg-violet-100 text-violet-700"} px-2 py-1 rounded`}
                          onClick={() => setShowAIPanel(!showAIPanel)}
                        >
                          <BrainCircuit className="h-3 w-3" />
                          <span>AI Assistant</span>
                        </button>
                      </div>

                      <div className="flex-1 flex gap-4">
                        <div
                          className={`flex-1 border ${darkMode ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-white"} rounded-md p-3`}
                        >
                          <div
                            ref={typingRef}
                            className={`min-h-[200px] text-sm ${darkMode ? "text-gray-300" : ""}`}
                            style={{ position: "relative" }}
                          >
                            {typingEffect}
                            {typingEffect.length < fullText.length && <span className="animate-pulse">|</span>}
                          </div>
                        </div>

                        {showAIPanel && (
                          <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "40%", opacity: 1 }}
                            className={`border ${darkMode ? "border-violet-800 bg-violet-900/30" : "border-violet-200 bg-violet-50"} rounded-md p-3`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div
                                className={`flex items-center gap-1 ${darkMode ? "text-violet-300" : "text-violet-700"} text-sm font-medium`}
                              >
                                <BrainCircuit className="h-4 w-4" />
                                <span>AI File Analysis</span>
                              </div>
                              <button
                                className={`${darkMode ? "text-gray-400 hover:text-gray-300" : "text-gray-400 hover:text-gray-600"}`}
                              >
                                <X className="h-4 w-4" onClick={() => setShowAIPanel(false)} />
                              </button>
                            </div>

                            <div className="space-y-3 text-sm">
                              <div
                                className={`p-2 ${darkMode ? "bg-gray-800 border-violet-800" : "bg-white border-violet-100"} rounded border`}
                              >
                                <div
                                  className={`flex items-center gap-1 mb-1 text-xs ${darkMode ? "text-violet-300" : "text-violet-700"} font-medium`}
                                >
                                  <Sparkles className="h-3 w-3" />
                                  <span>Content Analysis</span>
                                </div>
                                <p className={`text-xs ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                                  This document appears to be a project proposal. I've identified key information:
                                </p>
                                <ul
                                  className={`mt-1 text-xs ${darkMode ? "text-gray-300" : "text-gray-600"} space-y-1 pl-4 list-disc`}
                                >
                                  <li>Project timeline: 3 months</li>
                                  <li>Budget: $50,000</li>
                                  <li>Team size: 5 people</li>
                                </ul>
                              </div>

                              <div
                                className={`p-2 ${darkMode ? "bg-gray-800 border-violet-800" : "bg-white border-violet-100"} rounded border`}
                              >
                                <div
                                  className={`flex items-center gap-1 mb-1 text-xs ${darkMode ? "text-violet-300" : "text-violet-700"} font-medium`}
                                >
                                  <FolderOpen className="h-3 w-3" />
                                  <span>File Organization</span>
                                </div>
                                <p className={`text-xs ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                                  Suggested location: Work/Projects/Q3 Initiatives
                                </p>
                                <button
                                  className={`mt-1 text-xs ${darkMode ? "bg-violet-800" : "bg-violet-100"} px-2 py-1 rounded ${darkMode ? "text-violet-300" : "text-violet-700"}`}
                                >
                                  Move File
                                </button>
                              </div>

                              <div
                                className={`p-2 ${darkMode ? "bg-gray-800 border-violet-800" : "bg-white border-violet-100"} rounded border`}
                              >
                                <div
                                  className={`flex items-center gap-1 mb-1 text-xs ${darkMode ? "text-violet-300" : "text-violet-700"} font-medium`}
                                >
                                  <FileText className="h-3 w-3" />
                                  <span>Related Files</span>
                                </div>
                                <div className={`space-y-1 text-xs ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                                  <div className="flex items-center gap-1">
                                    <FileText className="h-3 w-3" />
                                    <span>Q2_Results.pdf</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <FileText className="h-3 w-3" />
                                    <span>Team_Availability.xlsx</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Tasks View */}
                {activeTab === "tasks" && (
                  <div className="h-full flex flex-col">
                    <div
                      className={`p-3 border-b ${darkMode ? "border-gray-700" : "border-gray-200"} flex items-center justify-between`}
                    >
                      <h3 className={`text-sm font-semibold ${darkMode ? "text-gray-200" : ""}`}>Task Management</h3>
                      <div
                        className={`flex items-center gap-1 text-xs ${darkMode ? "bg-violet-900/30 text-violet-300" : "bg-violet-100 text-violet-700"} px-2 py-1 rounded`}
                      >
                        <BrainCircuit className="h-3 w-3" />
                        <span>AI Priority</span>
                      </div>
                    </div>

                    <div className="flex-1 p-3 overflow-y-auto">
                      <div className="space-y-3">
                        {[
                          {
                            title: "Review Q3 Marketing Report",
                            file: "Q3_Marketing_Report.pdf",
                            deadline: "Today, 5:00 PM",
                            priority: "High",
                            priorityColor: darkMode ? "bg-red-900/30 text-red-300" : "bg-red-100 text-red-700",
                          },
                          {
                            title: "Update project timeline",
                            file: "Project_Timeline.xlsx",
                            deadline: "Tomorrow, 12:00 PM",
                            priority: "Medium",
                            priorityColor: darkMode
                              ? "bg-yellow-900/30 text-yellow-300"
                              : "bg-yellow-100 text-yellow-700",
                          },
                          {
                            title: "Prepare presentation slides",
                            file: "Client_Presentation.pptx",
                            deadline: "Friday, 3:00 PM",
                            priority: "Medium",
                            priorityColor: darkMode
                              ? "bg-yellow-900/30 text-yellow-300"
                              : "bg-yellow-100 text-yellow-700",
                          },
                          {
                            title: "Organize team photos",
                            file: "Team_Photos folder",
                            deadline: "Next week",
                            priority: "Low",
                            priorityColor: darkMode ? "bg-green-900/30 text-green-300" : "bg-green-100 text-green-700",
                          },
                        ].map((task, i) => (
                          <div
                            key={i}
                            className={`p-3 border ${darkMode ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-white"} rounded-lg`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <h4 className={`font-medium ${darkMode ? "text-gray-200" : ""}`}>{task.title}</h4>
                              <span className={`text-xs px-2 py-0.5 rounded ${task.priorityColor}`}>
                                {task.priority}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-xs mb-2">
                              <FileText className={`h-3 w-3 ${darkMode ? "text-gray-400" : "text-gray-500"}`} />
                              <span className={`${darkMode ? "text-gray-400" : "text-gray-500"}`}>{task.file}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1 text-xs">
                                <Clock className={`h-3 w-3 ${darkMode ? "text-gray-400" : "text-gray-500"}`} />
                                <span className={`${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                                  {task.deadline}
                                </span>
                              </div>
                              <button
                                className={`text-xs ${darkMode ? "bg-violet-900/30 text-violet-300" : "bg-violet-100 text-violet-700"} px-2 py-0.5 rounded`}
                              >
                                Open File
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-lg bg-violet-100 blur-2xl opacity-80"></div>
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-lg bg-indigo-100 blur-2xl opacity-80"></div>
          </motion.div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-full max-h-6xl">
        <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-violet-200 mix-blend-multiply blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-indigo-200 mix-blend-multiply blur-3xl opacity-30"></div>
      </div>
    </section>
  )
}

function Bell(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}
