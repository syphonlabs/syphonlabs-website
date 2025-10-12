"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BrainCircuit, Edit, CheckCircle2, Clock, Calendar, Sparkles, X } from "lucide-react"

export default function AIAssistantsAnimation() {
  const [step, setStep] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [activeTab, setActiveTab] = useState("writing")
  const [showAIPanel, setShowAIPanel] = useState(false)
  const [writingText, setWritingText] = useState("")
  const [suggestion, setSuggestion] = useState("")
  const [showSuggestion, setShowSuggestion] = useState(false)
  const [taskProgress, setTaskProgress] = useState(0)
  const [timelineProgress, setTimelineProgress] = useState(0)

  const fullText =
    "This project aims to revolutionize how teams collaborate on complex tasks. We'll focus on implementing AI-driven solutions that enhance productivity."
  const aiSuggestion =
    "We should prioritize user experience and ensure the interface is intuitive. Based on similar projects, I estimate this will take approximately 3 weeks to complete."

  const writingRef = useRef(null)

  // Auto-play the animation steps
  useEffect(() => {
    if (!playing) return

    const timer = setTimeout(
      () => {
        if (step === 0) {
          setActiveTab("writing")
          setShowAIPanel(true)
          setStep(1)
        } else if (step === 1) {
          // Start typing animation
          if (writingText.length < fullText.length) {
            setWritingText(fullText.substring(0, writingText.length + 1))
          } else {
            setShowSuggestion(true)
            if (suggestion.length < aiSuggestion.length) {
              setSuggestion(aiSuggestion.substring(0, suggestion.length + 1))
            } else {
              setStep(2)
            }
          }
        } else if (step === 2) {
          setActiveTab("tasks")
          setShowSuggestion(false)
          setStep(3)
        } else if (step === 3) {
          // Animate task progress
          if (taskProgress < 100) {
            setTaskProgress((prev) => Math.min(prev + 5, 100))
          } else {
            setStep(4)
          }
        } else if (step === 4) {
          setActiveTab("timeline")
          setStep(5)
        } else if (step === 5) {
          // Animate timeline progress
          if (timelineProgress < 100) {
            setTimelineProgress((prev) => Math.min(prev + 5, 100))
          } else {
            // Reset animation
            setStep(0)
            setWritingText("")
            setSuggestion("")
            setShowSuggestion(false)
            setTaskProgress(0)
            setTimelineProgress(0)
            setShowAIPanel(false)
          }
        }
      },
      step === 1 || step === 3 || step === 5 ? 50 : 2000,
    )

    return () => clearTimeout(timer)
  }, [step, playing, writingText, suggestion, taskProgress, timelineProgress])

  const handlePlayPause = () => {
    setPlaying(!playing)
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab)
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
          <span className="text-base font-medium text-gray-500">Syphon Explorer AI Assistants</span>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button onClick={handlePlayPause} className="text-sm bg-violet-100 text-violet-700 px-2 py-1 rounded">
            {playing ? "Pause Demo" : "Play Demo"}
          </button>
        </div>
      </div>

      {/* Tabs - make scrollable on mobile */}
      <div className="flex overflow-x-auto border-b border-gray-200">
        <button
          className={`px-4 py-2 text-base font-medium ${
            activeTab === "writing"
              ? "text-violet-700 border-b-2 border-violet-700"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => handleTabChange("writing")}
        >
          <div className="flex items-center gap-1">
            <Edit className="h-4 w-4" />
            <span>Writing Assistant</span>
          </div>
        </button>
        <button
          className={`px-4 py-2 text-base font-medium ${
            activeTab === "tasks" ? "text-violet-700 border-b-2 border-violet-700" : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => handleTabChange("tasks")}
        >
          <div className="flex items-center gap-1">
            <CheckCircle2 className="h-4 w-4" />
            <span>Task Management</span>
          </div>
        </button>
        <button
          className={`px-4 py-2 text-base font-medium ${
            activeTab === "timeline"
              ? "text-violet-700 border-b-2 border-violet-700"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => handleTabChange("timeline")}
        >
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>Completion Timeline</span>
          </div>
        </button>
      </div>

      {/* Content area - adjust height for mobile */}
      <div className="h-[300px] sm:h-[350px] md:h-[450px] max-w-6xl mx-auto overflow-hidden relative">
        <AnimatePresence mode="wait">
          {/* Writing Assistant */}
          {activeTab === "writing" && (
            <motion.div
              key="writing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full p-4 flex flex-col"
            >
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-lg font-semibold">Project Proposal</h3>
                <button
                  className="flex items-center gap-1 text-sm bg-violet-100 text-violet-700 px-2 py-1 rounded"
                  onClick={() => setShowAIPanel(!showAIPanel)}
                >
                  <BrainCircuit className="h-3 w-3" />
                  <span>AI Assistant</span>
                </button>
              </div>

              <div className="flex-1 flex gap-4">
                <div className="flex-1 border border-gray-200 rounded-md p-4 bg-white w-full">
                  <div ref={writingRef} className="min-h-[300px] text-base" style={{ position: "relative" }}>
                    {writingText}
                    {writingText.length < fullText.length && playing && <span className="animate-pulse">|</span>}
                  </div>
                </div>

                {showAIPanel && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "40%", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    className="border border-violet-200 rounded-md p-4 bg-violet-50"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1 text-violet-700 text-base font-medium">
                        <BrainCircuit className="h-4 w-4" />
                        <span>AI Writing Assistant</span>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <X className="h-4 w-4" onClick={() => setShowAIPanel(false)} />
                      </button>
                    </div>

                    <div className="space-y-3 text-base">
                      <div className="p-4 bg-white rounded border border-violet-100">
                        <div className="flex items-center gap-1 mb-1 text-sm text-violet-700 font-medium">
                          <Sparkles className="h-3 w-3" />
                          <span>Grammar Check</span>
                        </div>
                        <p className="text-sm text-gray-600">Your writing looks good! No grammar issues detected.</p>
                      </div>

                      {showSuggestion && (
                        <div className="p-4 bg-white rounded border border-violet-100">
                          <div className="flex items-center gap-1 mb-1 text-sm text-violet-700 font-medium">
                            <Sparkles className="h-3 w-3" />
                            <span>Suggestion</span>
                          </div>
                          <p className="text-sm text-gray-600">
                            {suggestion}
                            {suggestion.length < aiSuggestion.length && playing && (
                              <span className="animate-pulse">|</span>
                            )}
                          </p>
                          <div className="flex gap-1 mt-2">
                            <button className="text-sm bg-violet-100 text-violet-700 px-2 py-1 rounded">Accept</button>
                            <button className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded">Ignore</button>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {/* Task Management */}
          {activeTab === "tasks" && (
            <motion.div
              key="tasks"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full p-4"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">AI Task Management</h3>
                <div className="flex items-center gap-1 text-sm bg-violet-100 text-violet-700 px-2 py-1 rounded">
                  <BrainCircuit className="h-3 w-3" />
                  <span>AI Prioritization Active</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 h-[280px]">
                <div className="border border-gray-200 rounded-md p-4 bg-gray-50">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-base">To Do</h4>
                    <span className="text-sm text-gray-500">3 tasks</span>
                  </div>

                  <div className="space-y-2">
                    <div className="p-4 bg-white rounded border border-gray-200 text-base">
                      <div className="flex items-center justify-between mb-1">
                        <span>Research competitors</span>
                        <span className="text-sm px-1.5 py-0.5 bg-yellow-100 text-yellow-700 rounded">Medium</span>
                      </div>
                      <div className="text-sm text-gray-500">Due in 5 days</div>
                    </div>

                    <div className="p-4 bg-white rounded border border-gray-200 text-base">
                      <div className="flex items-center justify-between mb-1">
                        <span>Create wireframes</span>
                        <span className="text-sm px-1.5 py-0.5 bg-red-100 text-red-700 rounded">High</span>
                      </div>
                      <div className="text-sm text-gray-500">Due in 3 days</div>
                      <div className="mt-1 text-sm text-violet-700 bg-violet-50 p-1 rounded flex items-center gap-1">
                        <BrainCircuit className="h-3 w-3" />
                        <span>AI suggests doing this first</span>
                      </div>
                    </div>

                    <div className="p-4 bg-white rounded border border-gray-200 text-base">
                      <div className="flex items-center justify-between mb-1">
                        <span>Schedule team meeting</span>
                        <span className="text-sm px-1.5 py-0.5 bg-green-100 text-green-700 rounded">Low</span>
                      </div>
                      <div className="text-sm text-gray-500">Due in 7 days</div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-md p-4 bg-gray-50">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-base">In Progress</h4>
                    <span className="text-sm text-gray-500">1 task</span>
                  </div>

                  <div className="space-y-2">
                    <div className="p-4 bg-white rounded border border-violet-200 text-base">
                      <div className="flex items-center justify-between mb-1">
                        <span>Draft project proposal</span>
                        <span className="text-sm px-1.5 py-0.5 bg-red-100 text-red-700 rounded">High</span>
                      </div>
                      <div className="text-sm text-gray-500">Due tomorrow</div>
                      <div className="mt-2">
                        <div className="text-sm text-gray-500 mb-1 flex justify-between">
                          <span>Progress</span>
                          <span>{taskProgress}%</span>
                        </div>
                        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-violet-500 rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: `${taskProgress}%` }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-md p-4 bg-gray-50">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-base">Completed</h4>
                    <span className="text-sm text-gray-500">2 tasks</span>
                  </div>

                  <div className="space-y-2">
                    <div className="p-4 bg-white rounded border border-gray-200 text-base opacity-75">
                      <div className="flex items-center justify-between mb-1">
                        <span className="line-through">Initial project setup</span>
                        <CheckCircle2 className="h-3 w-3 text-green-500" />
                      </div>
                      <div className="text-sm text-gray-500">Completed 2 days ago</div>
                    </div>

                    <div className="p-4 bg-white rounded border border-gray-200 text-base opacity-75">
                      <div className="flex items-center justify-between mb-1">
                        <span className="line-through">Stakeholder interviews</span>
                        <CheckCircle2 className="h-3 w-3 text-green-500" />
                      </div>
                      <div className="text-sm text-gray-500">Completed yesterday</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Completion Timeline */}
          {activeTab === "timeline" && (
            <motion.div
              key="timeline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full p-4"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">AI Completion Timeline</h3>
                <div className="flex items-center gap-1 text-sm bg-violet-100 text-violet-700 px-2 py-1 rounded">
                  <BrainCircuit className="h-3 w-3" />
                  <span>AI Prediction</span>
                </div>
              </div>

              <div className="border border-gray-200 rounded-md p-4 bg-white mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="h-5 w-5 text-violet-600" />
                  <h4 className="font-medium">Project Timeline: Website Redesign</h4>
                </div>

                <div className="text-base text-gray-600 mb-4">
                  Based on your team's historical velocity and current capacity, the AI predicts this project will be
                  completed in <span className="font-medium text-violet-700">3 weeks and 2 days</span>.
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-base mb-1">
                      <span>Research & Planning</span>
                      <span className="text-violet-700">
                        {timelineProgress >= 25 ? "100%" : `${Math.min(timelineProgress * 4, 100)}%`}
                      </span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-violet-500 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: timelineProgress >= 25 ? "100%" : `${Math.min(timelineProgress * 4, 100)}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>May 1</span>
                      <span>May 5</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-base mb-1">
                      <span>Design & Prototyping</span>
                      <span className="text-violet-700">
                        {timelineProgress >= 50
                          ? "100%"
                          : timelineProgress < 25
                            ? "0%"
                            : `${Math.min((timelineProgress - 25) * 4, 100)}%`}
                      </span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-violet-500 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{
                          width:
                            timelineProgress >= 50
                              ? "100%"
                              : timelineProgress < 25
                                ? "0%"
                                : `${Math.min((timelineProgress - 25) * 4, 100)}%`,
                        }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>May 6</span>
                      <span>May 12</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-base mb-1">
                      <span>Development</span>
                      <span className="text-violet-700">
                        {timelineProgress >= 75
                          ? "100%"
                          : timelineProgress < 50
                            ? "0%"
                            : `${Math.min((timelineProgress - 50) * 4, 100)}%`}
                      </span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-violet-500 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{
                          width:
                            timelineProgress >= 75
                              ? "100%"
                              : timelineProgress < 50
                                ? "0%"
                                : `${Math.min((timelineProgress - 50) * 4, 100)}%`,
                        }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>May 13</span>
                      <span>May 19</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-base mb-1">
                      <span>Testing & Launch</span>
                      <span className="text-violet-700">
                        {timelineProgress >= 100
                          ? "100%"
                          : timelineProgress < 75
                            ? "0%"
                            : `${Math.min((timelineProgress - 75) * 4, 100)}%`}
                      </span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-violet-500 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{
                          width:
                            timelineProgress >= 100
                              ? "100%"
                              : timelineProgress < 75
                                ? "0%"
                                : `${Math.min((timelineProgress - 75) * 4, 100)}%`,
                        }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>May 20</span>
                      <span>May 24</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-violet-50 border border-violet-200 rounded-md p-4 text-base">
                <div className="flex items-center gap-1 mb-2 text-violet-700 font-medium">
                  <BrainCircuit className="h-4 w-4" />
                  <span>AI Insights</span>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-1">
                    <span className="text-violet-500 mt-1">•</span>
                    <span>Based on similar projects, the design phase typically takes longer than estimated.</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <span className="text-violet-500 mt-1">•</span>
                    <span>Your team completes development tasks 15% faster than the industry average.</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <span className="text-violet-500 mt-1">•</span>
                    <span>Consider allocating more resources to testing to maintain quality standards.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Instructions */}
      <div className="bg-gray-50 border-t border-gray-200 p-4">
        <div className="text-center text-sm text-gray-600">
          {activeTab === "writing" &&
            step <= 2 &&
            (step === 0
              ? "Starting AI writing assistant demo..."
              : step === 1 && writingText.length < fullText.length
                ? "AI is helping you write your document..."
                : "AI is providing suggestions to improve your content...")}
          {activeTab === "tasks" && step >= 3 && step <= 4 && "AI is prioritizing tasks and tracking progress..."}
          {activeTab === "timeline" &&
            step >= 5 &&
            "AI is predicting project completion timelines based on team velocity..."}
        </div>
      </div>
    </div>
  )
}
