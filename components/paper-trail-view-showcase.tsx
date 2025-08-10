"use client"

import { motion } from "framer-motion"
import {
  FolderKanban,
  Plus,
  File,
  Folders,
  Check,
  Filter,
  ExpandIcon as ArrowsExpand,
  ChevronDown,
  ChevronRight,
} from "lucide-react"
import { BrainCircuit } from "lucide-react"
import { useState, useRef, useEffect } from "react"

export default function PaperTrailViewShowcase() {
  const [compareMode, setCompareMode] = useState(true)
  const [selectedFolder, setSelectedFolder] = useState("Marketing Campaign")
  const [expandedFolders, setExpandedFolders] = useState({
    q32025: true,
    product: true,
  })

  const [scrollPosition, setScrollPosition] = useState(0)
  const filesColumnRef = useRef(null)
  const contentColumnRef = useRef(null)
  const [contentScrollPosition, setContentScrollPosition] = useState(0)

  // Toggle folder expansion
  const toggleFolder = (folder) => {
    setExpandedFolders({
      ...expandedFolders,
      [folder]: !expandedFolders[folder],
    })
  }

  // Project folders with logically related files
  const projectFolders = [
    {
      name: "Marketing Campaign",
      count: 8,
      files: [
        { name: "Campaign Strategy.docx", date: "Today", match: true },
        { name: "Social Media Plan.docx", date: "Yesterday", match: true },
        { name: "Budget Allocation.xlsx", date: "3 days ago", match: true },
        { name: "Target Audience.pdf", date: "1 week ago", match: false },
        { name: "Content Calendar.xlsx", date: "2 weeks ago", match: true },
        { name: "Performance Metrics.xlsx", date: "2 weeks ago", match: false },
        { name: "Creative Assets.zip", date: "3 weeks ago", match: false },
        { name: "Competitor Analysis.pdf", date: "1 month ago", match: false },
      ],
    },
    {
      name: "Q3 Planning",
      count: 6,
      files: [
        { name: "Campaign Strategy.docx", date: "2 days ago", match: true },
        { name: "Q3 Goals.docx", date: "1 week ago", match: false },
        { name: "Budget Allocation.xlsx", date: "2 weeks ago", match: true },
        { name: "Team Assignments.docx", date: "3 weeks ago", match: false },
        { name: "Content Calendar.xlsx", date: "1 month ago", match: true },
        { name: "Quarterly Review.pptx", date: "1 month ago", match: false },
      ],
    },
    {
      name: "Product Launch",
      count: 5,
      files: [
        { name: "Launch Strategy.docx", date: "Yesterday", match: false },
        { name: "Social Media Plan.docx", date: "3 days ago", match: true },
        { name: "Press Release.docx", date: "1 week ago", match: false },
        { name: "Budget Allocation.xlsx", date: "2 weeks ago", match: true },
        { name: "Content Calendar.xlsx", date: "3 weeks ago", match: true },
      ],
    },
    {
      name: "Research",
      count: 4,
      files: [
        { name: "Market Analysis.pdf", date: "Today", match: false },
        { name: "User Interviews.docx", date: "2 days ago", match: false },
        { name: "Competitive Landscape.pdf", date: "1 week ago", match: false },
        { name: "Industry Trends.pptx", date: "2 weeks ago", match: false },
      ],
    },
  ]

  // Track scroll position for files column
  useEffect(() => {
    const handleScroll = () => {
      if (filesColumnRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = filesColumnRef.current
        // Ensure we don't divide by zero and cap at 100
        const denominator = Math.max(scrollHeight - clientHeight, 1)
        const newPosition = Math.min((scrollTop / denominator) * 100, 100)
        setScrollPosition(newPosition || 0)
      }
    }

    const filesColumn = filesColumnRef.current
    if (filesColumn) {
      filesColumn.addEventListener("scroll", handleScroll)
      // Initialize scroll position
      handleScroll()
    }

    return () => {
      if (filesColumn) {
        filesColumn.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  // Track content column scroll position
  useEffect(() => {
    const handleContentScroll = () => {
      if (contentColumnRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = contentColumnRef.current
        // Ensure we don't divide by zero and cap at 100
        const denominator = Math.max(scrollHeight - clientHeight, 1)
        const newPosition = Math.min((scrollTop / denominator) * 100, 100)
        setContentScrollPosition(newPosition || 0)
      }
    }

    const contentColumn = contentColumnRef.current
    if (contentColumn) {
      contentColumn.addEventListener("scroll", handleContentScroll)
      // Initialize scroll position
      handleContentScroll()
    }

    return () => {
      if (contentColumn) {
        contentColumn.removeEventListener("scroll", handleContentScroll)
      }
    }
  }, [])

  // Find the selected folder data
  const getSelectedFolderData = () => {
    return projectFolders.find((folder) => folder.name === selectedFolder) || projectFolders[0]
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-violet-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm text-violet-700 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-violet-500 mr-2"></span>
            Organizational Structure
          </div>
          <h2 className="text-3xl font-bold mb-4">Powerful Paper Trail View & Folder Organization</h2>
          <p className="text-xl text-gray-600">
            Organize your workspace exactly how you want with our flexible Paper Trail View system and multiple folder
            organization. Open and compare up to four folders simultaneously for efficient file management.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-6xl"
        >
          <div className="rounded-xl border border-gray-200 bg-white p-2 shadow-xl overflow-hidden">
            <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center px-4 rounded-t-lg">
              <div className="flex space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="text-base font-medium text-gray-500">Syphon Explorer Workspace</div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row h-[400px] md:h-[550px] overflow-hidden">
              {/* Sidebar - hidden on mobile */}
              <div className="w-full md:w-48 border-r border-gray-200 p-3 flex-col hidden md:flex">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-medium">Workspaces</span>
                  <button className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center">
                    <Plus className="h-3 w-3" />
                  </button>
                </div>
                <div className="space-y-1">
                  {["Personal", "Work", "Projects", "Research"].map((item, i) => (
                    <div
                      key={i}
                      className={`px-2 py-1 rounded text-base ${i === 0 ? "bg-violet-100 text-violet-700" : "text-gray-700 hover:bg-gray-100"}`}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm text-gray-500">PAPER TRAILS</span>
                  </div>
                  <div className="pl-2 border-l border-gray-200">
                    {/* Q3 2025 Folder */}
                    <div
                      className="flex items-center gap-1 text-base mb-1 text-violet-700 hover:bg-violet-50 rounded px-1 py-0.5 cursor-pointer"
                      onClick={() => toggleFolder("q32025")}
                    >
                      {expandedFolders.q32025 ? (
                        <ChevronDown className="h-3 w-3" />
                      ) : (
                        <ChevronRight className="h-3 w-3" />
                      )}
                      <Folders className="h-3 w-3" />
                      <span>Q3 2025</span>
                    </div>

                    {/* Subfolders - only shown if Q3 2025 is expanded */}
                    {expandedFolders.q32025 && (
                      <div className="pl-3 border-l border-gray-200">
                        {/* Marketing Folder */}
                        <div
                          className={`flex items-center gap-1 text-base mb-1 rounded px-1 py-0.5 cursor-pointer ${
                            selectedFolder === "Marketing Campaign"
                              ? "bg-violet-100 text-violet-700"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                          onClick={() => setSelectedFolder("Marketing Campaign")}
                        >
                          <FolderKanban className="h-3 w-3" />
                          <span>Marketing</span>
                        </div>

                        {/* Product Folder with subfolders */}
                        <div>
                          <div
                            className="flex items-center gap-1 text-base mb-1 text-gray-700 hover:bg-gray-100 rounded px-1 py-0.5 cursor-pointer"
                            onClick={() => toggleFolder("product")}
                          >
                            {expandedFolders.product ? (
                              <ChevronDown className="h-3 w-3" />
                            ) : (
                              <ChevronRight className="h-3 w-3" />
                            )}
                            <FolderKanban className="h-3 w-3" />
                            <span>Product</span>
                          </div>

                          {/* Product subfolders - only shown if Product is expanded */}
                          {expandedFolders.product && (
                            <div className="pl-3 border-l border-gray-200 ml-3">
                              <div
                                className={`flex items-center gap-1 text-base mb-1 rounded px-1 py-0.5 cursor-pointer ${
                                  selectedFolder === "Q3 Planning"
                                    ? "bg-violet-100 text-violet-700"
                                    : "text-gray-700 hover:bg-gray-100"
                                }`}
                                onClick={() => setSelectedFolder("Q3 Planning")}
                              >
                                <FolderKanban className="h-3 w-3" />
                                <span>Planning</span>
                              </div>
                              <div
                                className={`flex items-center gap-1 text-base mb-1 rounded px-1 py-0.5 cursor-pointer ${
                                  selectedFolder === "Product Launch"
                                    ? "bg-violet-100 text-violet-700"
                                    : "text-gray-700 hover:bg-gray-100"
                                }`}
                                onClick={() => setSelectedFolder("Product Launch")}
                              >
                                <FolderKanban className="h-3 w-3" />
                                <span>Launch</span>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Research Folder */}
                        <div
                          className={`flex items-center gap-1 text-base mb-1 rounded px-1 py-0.5 cursor-pointer ${
                            selectedFolder === "Research"
                              ? "bg-violet-100 text-violet-700"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                          onClick={() => setSelectedFolder("Research")}
                        >
                          <FolderKanban className="h-3 w-3" />
                          <span>Research</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Multi-Column Paper Trail View */}
              <div className="flex-1 flex flex-col">
                {/* Compare Mode Header */}
                <div className="p-2 border-b border-gray-200 bg-violet-50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-violet-700">Compare Mode</span>
                    <button
                      onClick={() => setCompareMode(!compareMode)}
                      className={`h-5 w-10 rounded-full p-0.5 flex items-center transition-colors ${compareMode ? "bg-violet-200" : "bg-gray-200"}`}
                      aria-pressed={compareMode}
                      role="switch"
                    >
                      <div
                        className={`h-4 w-4 rounded-full transition-transform ${
                          compareMode ? "bg-violet-600 transform translate-x-5" : "bg-gray-400 transform translate-x-0"
                        }`}
                      ></div>
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      className={`flex items-center gap-1 px-2 py-1 rounded text-sm border ${
                        compareMode
                          ? "bg-white border-gray-200 text-gray-700"
                          : "bg-gray-100 border-gray-200 text-gray-400"
                      }`}
                      disabled={!compareMode}
                    >
                      <Filter className="h-3 w-3" />
                      <span>Filter</span>
                    </button>
                    <button
                      className={`flex items-center gap-1 px-2 py-1 rounded text-sm border ${
                        compareMode
                          ? "bg-white border-gray-200 text-gray-700"
                          : "bg-gray-100 border-gray-200 text-gray-400"
                      }`}
                      disabled={!compareMode}
                    >
                      <ArrowsExpand className="h-3 w-3" />
                      <span>Expand All</span>
                    </button>
                  </div>
                </div>

                {compareMode ? (
                  <>
                    {/* Multi-Column View - Only shown when compare mode is on */}
                    <div className="flex-1 flex overflow-x-auto">
                      {projectFolders.map((folder, folderIndex) => (
                        <div
                          key={folderIndex}
                          className={`w-64 min-w-[16rem] flex flex-col ${
                            folderIndex < projectFolders.length - 1 ? "border-r border-gray-200" : ""
                          } relative`}
                        >
                          <div className="p-2 border-b border-gray-200 flex items-center justify-between bg-gray-50">
                            <div className="flex items-center gap-1">
                              <FolderKanban className="h-4 w-4 text-violet-600" />
                              <span className="font-medium">{folder.name}</span>
                              <span className="text-xs text-gray-500">({folder.count})</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <button className="h-5 w-5 rounded bg-violet-100 flex items-center justify-center">
                                <Check className="h-3 w-3 text-violet-600" />
                              </button>
                            </div>
                          </div>
                          <div className="flex-1 overflow-y-auto p-1 relative">
                            {folder.files.map((file, fileIndex) => (
                              <div
                                key={fileIndex}
                                className={`flex items-center gap-2 px-2 py-1.5 rounded text-sm mb-1 ${
                                  fileIndex === 0 ? "bg-violet-100 text-violet-700" : "text-gray-700 hover:bg-gray-100"
                                } ${file.match ? "border-l-2 border-violet-400" : ""}`}
                              >
                                <File className="h-4 w-4 flex-shrink-0" />
                                <div className="flex-1 min-w-0">
                                  <div className="truncate">{file.name}</div>
                                  <div className="text-xs text-gray-500">{file.date}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  // Single Column View - Shown when compare mode is off
                  <div className="flex-1 flex flex-col md:flex-row">
                    {/* Column 1 - Folders */}
                    <div className="w-full md:w-1/4 border-r border-gray-200 flex-col hidden md:flex">
                      <div className="p-3 border-b border-gray-200 flex items-center justify-between">
                        <span className="font-medium">Folders</span>
                        <button className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center">
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <div className="flex-1 overflow-y-auto p-2">
                        <div
                          className="flex items-center gap-2 px-3 py-2 rounded text-base text-gray-700 hover:bg-gray-100 cursor-pointer"
                          onClick={() => toggleFolder("q32025")}
                        >
                          {expandedFolders.q32025 ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                          <FolderKanban className="h-4 w-4" />
                          <span>Q3 2025</span>
                        </div>

                        {expandedFolders.q32025 && (
                          <>
                            <div
                              className={`flex items-center gap-2 px-3 py-2 rounded text-base ml-4 cursor-pointer ${
                                selectedFolder === "Marketing Campaign"
                                  ? "bg-violet-100 text-violet-700"
                                  : "text-gray-700 hover:bg-gray-100"
                              }`}
                              onClick={() => setSelectedFolder("Marketing Campaign")}
                            >
                              <FolderKanban className="h-4 w-4" />
                              <span>Marketing</span>
                            </div>

                            <div
                              className="flex items-center gap-2 px-3 py-2 rounded text-base ml-4 text-gray-700 hover:bg-gray-100 cursor-pointer"
                              onClick={() => toggleFolder("product")}
                            >
                              {expandedFolders.product ? (
                                <ChevronDown className="h-4 w-4" />
                              ) : (
                                <ChevronRight className="h-4 w-4" />
                              )}
                              <FolderKanban className="h-4 w-4" />
                              <span>Product</span>
                            </div>

                            {expandedFolders.product && (
                              <>
                                <div
                                  className={`flex items-center gap-2 px-3 py-2 rounded text-base ml-8 cursor-pointer ${
                                    selectedFolder === "Q3 Planning"
                                      ? "bg-violet-100 text-violet-700"
                                      : "text-gray-700 hover:bg-gray-100"
                                  }`}
                                  onClick={() => setSelectedFolder("Q3 Planning")}
                                >
                                  <FolderKanban className="h-4 w-4" />
                                  <span>Planning</span>
                                </div>
                                <div
                                  className={`flex items-center gap-2 px-3 py-2 rounded text-base ml-8 cursor-pointer ${
                                    selectedFolder === "Product Launch"
                                      ? "bg-violet-100 text-violet-700"
                                      : "text-gray-700 hover:bg-gray-100"
                                  }`}
                                  onClick={() => setSelectedFolder("Product Launch")}
                                >
                                  <FolderKanban className="h-4 w-4" />
                                  <span>Launch</span>
                                </div>
                              </>
                            )}

                            <div
                              className={`flex items-center gap-2 px-3 py-2 rounded text-base ml-4 cursor-pointer ${
                                selectedFolder === "Research"
                                  ? "bg-violet-100 text-violet-700"
                                  : "text-gray-700 hover:bg-gray-100"
                              }`}
                              onClick={() => setSelectedFolder("Research")}
                            >
                              <FolderKanban className="h-4 w-4" />
                              <span>Research</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Column 2 - Files */}
                    <div className="w-full md:w-1/3 border-r border-gray-200 flex-col hidden md:flex relative">
                      <div className="p-3 border-b border-gray-200 flex items-center justify-between">
                        <span className="font-medium">Files in {selectedFolder}</span>
                        <button className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center">
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <div ref={filesColumnRef} className="flex-1 overflow-y-auto p-2 relative">
                        {getSelectedFolderData().files.map((file, i) => (
                          <div
                            key={i}
                            className={`flex items-center gap-2 px-3 py-2 rounded text-base ${i === 0 ? "bg-violet-100 text-violet-700" : "text-gray-700 hover:bg-gray-100"}`}
                          >
                            <File className="h-4 w-4" />
                            <div className="flex-1">
                              <div>{file.name}</div>
                              <div className="text-xs text-gray-500">{file.date}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Column 3 - Content */}
                    <div className="w-full md:w-5/12 flex flex-col relative">
                      <div className="p-3 border-b border-gray-200 flex items-center justify-between">
                        <span className="font-medium">Content</span>
                        <button className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center">
                          <ArrowsExpand className="h-3 w-3" />
                        </button>
                      </div>
                      <div ref={contentColumnRef} className="flex-1 overflow-y-auto p-6 relative">
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold">{getSelectedFolderData().files[0].name}</h3>
                          <div className="text-base text-gray-500">
                            Last edited: {getSelectedFolderData().files[0].date} at 2:30 PM
                          </div>
                        </div>
                        <div className="space-y-4 text-base text-gray-700">
                          <p>
                            This document outlines our{" "}
                            {selectedFolder === "Marketing Campaign"
                              ? "Q3 marketing campaign strategy"
                              : selectedFolder === "Q3 Planning"
                                ? "Q3 planning objectives"
                                : selectedFolder === "Product Launch"
                                  ? "product launch strategy"
                                  : "research findings"}
                            . The AI assistant has suggested the following:
                          </p>
                          <div className="bg-violet-50 border border-violet-200 rounded-lg p-4 text-violet-700 mb-4">
                            <div className="flex items-center gap-2 mb-2">
                              <BrainCircuit className="h-4 w-4" />
                              <span className="font-medium">AI Suggestion</span>
                            </div>
                            <p className="text-sm">
                              {selectedFolder === "Marketing Campaign"
                                ? "Based on your team's velocity and the content calendar, I recommend launching the social media campaign in phases, starting with awareness content in week 1, followed by engagement content in weeks 2-3, and conversion-focused content in week 4."
                                : selectedFolder === "Q3 Planning"
                                  ? "Looking at your team's capacity and project timeline, I suggest prioritizing the core features in sprint 1-2, followed by secondary features in sprint 3-4, with a buffer week for testing and refinement."
                                  : selectedFolder === "Product Launch"
                                    ? "Based on market analysis, I recommend a soft launch to early adopters two weeks before the official launch to gather feedback and make final adjustments."
                                    : "The research data indicates a strong correlation between user engagement and feature discovery. Consider implementing an interactive onboarding tour to highlight key features."}
                            </p>
                          </div>
                          <p>
                            We should align our{" "}
                            {selectedFolder === "Marketing Campaign"
                              ? "budget allocation"
                              : selectedFolder === "Q3 Planning"
                                ? "resource allocation"
                                : selectedFolder === "Product Launch"
                                  ? "marketing efforts"
                                  : "research methodology"}{" "}
                            with this approach for optimal results.
                          </p>

                          {/* Add more content to make scrolling necessary */}
                          <div className="mt-6 space-y-4">
                            <h4 className="text-lg font-medium">Key Objectives</h4>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>Increase engagement by 25% across all channels</li>
                              <li>Improve conversion rates by optimizing the user journey</li>
                              <li>Expand market reach to new demographic segments</li>
                              <li>Strengthen brand positioning through consistent messaging</li>
                            </ul>

                            <h4 className="text-lg font-medium mt-6">Timeline</h4>
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="font-medium">Phase 1: Planning</span>
                                <span className="text-sm text-gray-500">Weeks 1-2</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="font-medium">Phase 2: Implementation</span>
                                <span className="text-sm text-gray-500">Weeks 3-6</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="font-medium">Phase 3: Evaluation</span>
                                <span className="text-sm text-gray-500">Weeks 7-8</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 h-24 w-24 rounded-lg bg-violet-100 blur-2xl opacity-80 -z-10"></div>
          <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-lg bg-indigo-100 blur-2xl opacity-80 -z-10"></div>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-violet-100 mb-4">
              <FolderKanban className="h-6 w-6 text-violet-600" />
            </div>
            <h3 className="text-lg font-medium mb-2">Multi-Folder Comparison</h3>
            <p className="text-gray-600">
              Compare up to four folders side by side to easily spot similarities and differences.
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-violet-100 mb-4">
              <Folders className="h-6 w-6 text-violet-600" />
            </div>
            <h3 className="text-lg font-medium mb-2">Flexible Column View</h3>
            <p className="text-gray-600">
              Customize your view with resizable columns and flexible layouts for perfect organization.
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-violet-100 mb-4">
              <BrainCircuit className="h-6 w-6 text-violet-600" />
            </div>
            <h3 className="text-lg font-medium mb-2">Smart File Matching</h3>
            <p className="text-gray-600">
              AI automatically identifies and highlights matching files across different folders.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
