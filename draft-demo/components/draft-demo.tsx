"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Upload, BrainCircuit, CheckCircle, Star, Target, Download, Edit, Send, Play, Pause, Zap } from "lucide-react"

type DemoState = "welcome" | "uploading" | "analyzing" | "results" | "chatting" | "exporting"

interface ChatMessage {
  id: string
  type: "user" | "ai"
  content: string
  timestamp: Date
}

interface AnalysisStep {
  name: string
  completed: boolean
  active: boolean
  progress: number
}

const sampleResume = {
  name: "Sarah Johnson",
  title: "Senior Frontend Developer",
  sections: [
    {
      title: "Professional Summary",
      content:
        "Experienced frontend developer with 5+ years building scalable web applications using React and TypeScript. Proven track record of improving application performance and leading development teams.",
    },
    {
      title: "Experience",
      content:
        "Senior Frontend Developer at TechCorp Inc. (2021-Present). Led development of React-based dashboard serving 50K+ users. Improved application performance by 40% through code optimization. Mentored 3 junior developers.",
    },
    {
      title: "Skills",
      content: "React, TypeScript, JavaScript, Node.js, AWS, GraphQL, HTML5, CSS3, Git, Agile Development",
    },
  ],
}

const sampleJobDescription = `Senior Frontend Developer - Innovation Labs

We're looking for a Senior Frontend Developer to join our growing team. You'll be responsible for building modern web applications using React and TypeScript.

Requirements:
• 5+ years experience with React and TypeScript
• Experience with modern frontend frameworks and tools
• Knowledge of AWS and cloud deployment
• Strong problem-solving skills and attention to detail
• Experience with GraphQL and API integration
• Familiarity with Agile development methodologies

Nice to have:
• Experience with Next.js
• Knowledge of testing frameworks
• UI/UX design experience`

export default function DraftDemo() {
  const [demoState, setDemoState] = useState<DemoState>("welcome")
  const [playing, setPlaying] = useState(false)
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [fileName, setFileName] = useState("")
  const [jobDescription, setJobDescription] = useState("")
  const [isDragging, setIsDragging] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(false)
  const [atsScore, setAtsScore] = useState(0)
  const [keywordMatches, setKeywordMatches] = useState<string[]>([])
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([])
  const [chatInput, setChatInput] = useState("")
  const [statusMessage, setStatusMessage] = useState("Ready to optimize your resume")

  const [analysisSteps, setAnalysisSteps] = useState<AnalysisStep[]>([
    { name: "Parsing resume content", completed: false, active: false, progress: 0 },
    { name: "Extracting keywords from job description", completed: false, active: false, progress: 0 },
    { name: "Analyzing skill matches", completed: false, active: false, progress: 0 },
    { name: "Optimizing for ATS compatibility", completed: false, active: false, progress: 0 },
    { name: "Generating improvements", completed: false, active: false, progress: 0 },
  ])

  const sequence = [
    { state: "welcome" as DemoState, duration: 3000 },
    { state: "uploading" as DemoState, duration: 2000 },
    { state: "analyzing" as DemoState, duration: 8000 },
    { state: "results" as DemoState, duration: 5000 },
    { state: "chatting" as DemoState, duration: 10000 },
  ]

  // Auto-play sequence
  useEffect(() => {
    if (!playing) return

    const currentStep = sequence[currentStepIndex]
    const timer = setTimeout(() => {
      setDemoState(currentStep.state)
      setCurrentStepIndex((prev) => (prev + 1) % sequence.length)
    }, currentStep.duration)

    return () => clearTimeout(timer)
  }, [playing, currentStepIndex])

  // Handle state changes
  useEffect(() => {
    switch (demoState) {
      case "welcome":
        setStatusMessage("Ready to optimize your resume")
        setUploadProgress(0)
        setFileName("")
        setJobDescription("")
        setIsAnalyzing(false)
        setAnalysisComplete(false)
        setAtsScore(0)
        setKeywordMatches([])
        setChatMessages([])
        break

      case "uploading":
        setStatusMessage("Uploading resume...")
        setFileName("sarah-johnson-resume.pdf")
        setJobDescription(sampleJobDescription)
        // Simulate upload progress
        let progress = 0
        const uploadTimer = setInterval(() => {
          progress += 20
          setUploadProgress(progress)
          if (progress >= 100) {
            clearInterval(uploadTimer)
            setStatusMessage("Resume uploaded successfully")
          }
        }, 200)
        break

      case "analyzing":
        setStatusMessage("AI is analyzing your resume...")
        setIsAnalyzing(true)
        setAnalysisComplete(false)

        // Simulate analysis steps
        let stepIndex = 0
        const analysisTimer = setInterval(() => {
          setAnalysisSteps((prev) =>
            prev.map((step, index) => {
              if (index === stepIndex) {
                return { ...step, active: true, progress: 100 }
              } else if (index < stepIndex) {
                return { ...step, completed: true, active: false, progress: 100 }
              }
              return step
            }),
          )

          stepIndex++
          if (stepIndex >= analysisSteps.length) {
            clearInterval(analysisTimer)
            setIsAnalyzing(false)
            setAnalysisComplete(true)
            setAtsScore(95)
            setKeywordMatches(["React", "TypeScript", "AWS", "frontend", "development"])
            setStatusMessage("Analysis complete! Your resume has been optimized.")
          }
        }, 1500)
        break

      case "results":
        setStatusMessage("Resume optimization complete")
        break

      case "chatting":
        setStatusMessage("Chat with AI to refine your resume")
        // Add sample chat messages
        setTimeout(() => {
          setChatMessages([
            {
              id: "1",
              type: "ai",
              content:
                "Great! I've optimized your resume. Would you like me to add more specific metrics to your achievements?",
              timestamp: new Date(),
            },
          ])
        }, 1000)

        setTimeout(() => {
          setChatMessages((prev) => [
            ...prev,
            {
              id: "2",
              type: "user",
              content: "Yes, please add more quantifiable results",
              timestamp: new Date(),
            },
          ])
        }, 3000)

        setTimeout(() => {
          setChatMessages((prev) => [
            ...prev,
            {
              id: "3",
              type: "ai",
              content:
                'Perfect! I\'ve added specific metrics like "increased user engagement by 35%" and "reduced load times by 2.3 seconds". Your ATS score is now 97!',
              timestamp: new Date(),
            },
          ])
          setAtsScore(97)
        }, 5000)
        break
    }
  }, [demoState])

  const handleSendMessage = () => {
    if (!chatInput.trim()) return

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      type: "user",
      content: chatInput,
      timestamp: new Date(),
    }

    setChatMessages((prev) => [...prev, newMessage])
    setChatInput("")

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content:
          "I've made those changes to your resume. The updated version maintains strong keyword density while improving readability.",
        timestamp: new Date(),
      }
      setChatMessages((prev) => [...prev, aiResponse])
    }, 1500)
  }

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gray-50 border-b border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
            </div>
            <span className="text-sm font-medium text-gray-500">Draft Demo</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPlaying(!playing)}
              className="flex items-center gap-2 text-sm bg-violet-100 text-violet-700 px-3 py-1 rounded hover:bg-violet-200 transition-colors"
            >
              {playing ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
              {playing ? "Pause Demo" : "Play Demo"}
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex h-[600px]">
          {/* Left Panel - Input Section */}
          <div className="w-1/2 border-r border-gray-200 flex flex-col">
            {/* Upload Area */}
            <div className="p-4 border-b border-gray-200 bg-violet-50">
              <div
                className={`border-2 border-dashed rounded-lg p-6 text-center transition-all ${
                  isDragging ? "border-violet-400 bg-violet-100" : "border-violet-300"
                }`}
              >
                <Upload className="h-8 w-8 text-violet-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-violet-700 mb-1">Upload Resume</div>
                <div className="text-xs text-gray-600">Drag & drop or click to upload PDF, DOC files</div>

                {uploadProgress > 0 && (
                  <div className="mt-3">
                    <div className="text-xs text-violet-700 mb-1">Uploading {fileName}...</div>
                    <div className="w-full bg-violet-200 rounded-full h-2">
                      <motion.div
                        className="bg-violet-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${uploadProgress}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Job Description Input */}
            <div className="p-4 border-b border-gray-200">
              <div className="mb-2">
                <label className="text-sm font-medium text-gray-700">Job Description</label>
              </div>
              <textarea
                className="w-full h-32 p-3 border border-gray-300 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                placeholder="Paste the job description here..."
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
              />
            </div>

            {/* Analysis Progress */}
            {isAnalyzing && (
              <div className="p-4 border-b border-gray-200">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-violet-700">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <BrainCircuit className="h-4 w-4" />
                    </motion.div>
                    <span className="text-sm font-medium">AI Analysis in Progress</span>
                  </div>

                  {analysisSteps.map((step, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className={step.completed ? "text-green-700" : "text-gray-600"}>{step.name}</span>
                        {step.completed && <CheckCircle className="h-3 w-3 text-green-500" />}
                      </div>
                      {!step.completed && step.active && (
                        <div className="w-full bg-violet-200 rounded-full h-1">
                          <motion.div
                            className="bg-violet-600 h-1 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${step.progress}%` }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Panel - Results & Chat */}
          <div className="w-1/2 flex flex-col">
            {!analysisComplete ? (
              /* Loading State */
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <BrainCircuit className="h-12 w-12 text-violet-600 mx-auto mb-4" />
                  </motion.div>
                  <div className="text-gray-600">
                    {isAnalyzing ? "Analyzing your resume..." : "Ready to analyze your resume"}
                  </div>
                </div>
              </div>
            ) : (
              /* Results Display */
              <div className="flex-1 flex flex-col">
                {/* Results Header */}
                <div className="p-4 border-b border-gray-200 bg-violet-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">Optimized Resume</h3>
                      <div className="flex items-center gap-4 mt-1">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm font-bold text-violet-600">{atsScore}</span>
                          <span className="text-xs text-gray-500">ATS Score</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Target className="h-4 w-4 text-green-500" />
                          <span className="text-sm font-bold text-green-600">{keywordMatches.length}</span>
                          <span className="text-xs text-gray-500">Keywords Matched</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex items-center gap-1 px-3 py-1 text-xs bg-violet-600 text-white rounded hover:bg-violet-700">
                        <Download className="h-3 w-3" />
                        Download PDF
                      </button>
                      <button className="flex items-center gap-1 px-3 py-1 text-xs border border-gray-300 rounded hover:bg-gray-50">
                        <Edit className="h-3 w-3" />
                        Edit
                      </button>
                    </div>
                  </div>
                </div>

                {/* Resume Preview */}
                <div className="flex-1 overflow-y-auto p-4" style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#d1d5db transparent'
                }}>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="space-y-4">
                      <div className="text-center border-b border-gray-200 pb-3">
                        <h2 className="text-xl font-bold text-gray-900">{sampleResume.name}</h2>
                        <p className="text-gray-600">{sampleResume.title}</p>
                      </div>

                      {sampleResume.sections.map((section, index) => (
                        <div key={index} className="space-y-2">
                          <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                            {section.title}
                          </h4>
                          <div className="text-sm text-gray-700 leading-relaxed">
                            {section.content.split(" ").map((word, wordIndex) => (
                              <span
                                key={wordIndex}
                                className={
                                  keywordMatches.some((keyword) => word.toLowerCase().includes(keyword.toLowerCase()))
                                    ? "bg-yellow-200 text-yellow-900 px-1 rounded"
                                    : ""
                                }
                              >
                                {word}{" "}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Chat Interface */}
                <div className="p-4 border-t border-gray-200">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-violet-600" />
                      <div className="text-sm font-medium text-gray-700">AI Assistant</div>
                    </div>
                    <div className="space-y-2 max-h-32 overflow-y-auto" style={{
                      scrollbarWidth: 'thin',
                      scrollbarColor: '#d1d5db transparent'
                    }}>
                      <AnimatePresence>
                        {chatMessages.map((message) => (
                          <motion.div
                            key={message.id}
                            initial={{ opacity: 0, x: message.type === "user" ? 20 : -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: message.type === "user" ? 20 : -20 }}
                            className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                                message.type === "user" ? "bg-violet-600 text-white" : "bg-gray-100 text-gray-700"
                              }`}
                            >
                              {message.content}
                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Ask for changes..."
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white"
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      />
                      <button
                        onClick={handleSendMessage}
                        className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 flex items-center gap-1"
                      >
                        <Send className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Status Bar */}
        <div className="bg-gray-50 border-t border-gray-200 p-3">
          <div className="text-center text-sm text-gray-600">{statusMessage}</div>
        </div>
      </motion.div>
    </div>
  )
}
