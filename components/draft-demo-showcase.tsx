"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  FileText, 
  MessageSquare, 
  ArrowRight, 
  Clock, 
  ArrowDown, 
  Maximize2,
  Play,
  Pause,
  RotateCcw
} from "lucide-react"

interface ChatMessage {
  id: number
  type: "user" | "assistant"
  content: string
  timestamp: Date
}

type ResumeVariation = 
  | "original"
  | "quantified"
  | "skills"
  | "summary"
  | "leadership"
  | "projects"
  | "ats"
  | "education"
  | "volunteer"
  | "formatting"

export default function DraftDemoShowcase() {
  const [currentView, setCurrentView] = useState<"landing" | "app">("landing")
  const [jobDescription, setJobDescription] = useState("")
  const [selectedDocument, setSelectedDocument] = useState<"resume" | "coverLetter">("resume")
  const [resumeVariation, setResumeVariation] = useState<ResumeVariation>("original")
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      type: "assistant",
      content: "Hello! I've optimized your resume and cover letter for the Senior Frontend Developer position. What would you like to improve?",
      timestamp: new Date(),
    },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [conversationStage, setConversationStage] = useState<"initial" | "followup1" | "followup2" | "ongoing">("initial")
  const [previewScale, setPreviewScale] = useState(0.8)
  const [isPlaying, setIsPlaying] = useState(false)
  const [demoStep, setDemoStep] = useState(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const demoSteps = [
    { action: "loadJob", delay: 2000 },
    { action: "startChat", delay: 3000 },
    { action: "askQuestion", delay: 2000 },
    { action: "updateResume", delay: 3000 },
    { action: "askAnother", delay: 2000 },
    { action: "updateAgain", delay: 3000 },
  ]

  useEffect(() => {
    if (!isPlaying) return

    const timer = setTimeout(() => {
      if (demoStep < demoSteps.length) {
        executeDemoStep(demoSteps[demoStep].action)
        setDemoStep(prev => prev + 1)
      } else {
        // Reset demo
        setDemoStep(0)
        setCurrentView("landing")
        setJobDescription("")
        setResumeVariation("original")
        setChatMessages([{
          id: 1,
          type: "assistant",
          content: "Hello! I've optimized your resume and cover letter for the Senior Frontend Developer position. What would you like to improve?",
          timestamp: new Date(),
        }])
        setConversationStage("initial")
      }
    }, demoSteps[demoStep]?.delay || 2000)

    return () => clearTimeout(timer)
  }, [isPlaying, demoStep])

  const executeDemoStep = (action: string) => {
    switch (action) {
      case "loadJob":
        const dummyJob = `Senior Frontend Developer - TechCorp Inc.

We are seeking a talented Senior Frontend Developer to join our dynamic team. The ideal candidate will have 5+ years of experience building modern web applications using React, TypeScript, and related technologies.

Key Responsibilities:
• Develop and maintain high-quality frontend applications using React and TypeScript
• Collaborate with design teams to implement pixel-perfect UI components
• Optimize applications for maximum speed and scalability
• Mentor junior developers and conduct code reviews
• Work with backend teams to integrate APIs and ensure seamless data flow

Required Skills:
• 5+ years of experience with React and modern JavaScript/TypeScript
• Strong proficiency in HTML5, CSS3, and responsive design principles
• Experience with state management libraries (Redux, Zustand)
• Familiarity with testing frameworks (Jest, React Testing Library)
• Knowledge of build tools and bundlers (Webpack, Vite)
• Experience with version control systems (Git)
• Understanding of web performance optimization techniques`
        setJobDescription(dummyJob)
        setCurrentView("app")
        break
      case "startChat":
        // Demo is already in chat mode
        break
      case "askQuestion":
        const question = "Make my experience bullets more quantified with specific metrics"
        handleQuestionClick(question)
        break
      case "updateResume":
        setResumeVariation("quantified")
        break
      case "askAnother":
        const question2 = "Add more technical skills relevant to frontend development"
        handleQuestionClick(question2)
        break
      case "updateAgain":
        setResumeVariation("skills")
        break
    }
  }

  const handleQuestionClick = (question: string) => {
    const userMessage = {
      id: chatMessages.length + 1,
      type: "user" as const,
      content: question,
      timestamp: new Date(),
    }
    setChatMessages((prev) => [...prev, userMessage])

    setTimeout(() => {
      let aiResponse = "I understand your request. I will adjust the resume accordingly."
      let newVariation = resumeVariation

      if (question.toLowerCase().includes("quantified") || question.toLowerCase().includes("metrics")) {
        aiResponse = "Great idea! I've updated your experience bullets with specific metrics and quantified achievements to make your impact more measurable."
        newVariation = "quantified"
      } else if (question.toLowerCase().includes("skills") || question.toLowerCase().includes("technical")) {
        aiResponse = "Perfect! I've expanded your technical skills section with more relevant frontend technologies and frameworks."
        newVariation = "skills"
      }

      setResumeVariation(newVariation)

      const ai = {
        id: userMessage.id + 1,
        type: "assistant" as const,
        content: aiResponse,
        timestamp: new Date(),
      }
      setChatMessages((prev) => [...prev, ai])

      if (conversationStage === "initial") {
        setConversationStage("followup1")
      } else if (conversationStage === "followup1") {
        setConversationStage("followup2")
      }
    }, 800)
  }

  const getResumeContent = () => {
    const baseContent = {
      name: "Sarah Johnson",
      title: "Senior Frontend Developer",
      contact: "San Francisco, CA · sarah@example.com · (555) 123-4567",
    }

    switch (resumeVariation) {
      case "quantified":
        return {
          ...baseContent,
          summary: "Frontend developer with 7+ years building scalable web applications. Expert in React, JavaScript, and modern development practices. Proven track record of delivering high-quality user experiences and leading technical initiatives.",
          experience: [
            {
              title: "Senior Frontend Developer · TechCorp Inc.",
              period: "2021 — Present",
              bullets: [
                "Architected and implemented responsive web applications serving 50k+ daily users, increasing user engagement by 35%.",
                "Led frontend team of 5 developers, establishing coding standards that reduced bugs by 60% and improved code review efficiency by 40%.",
                "Optimized application performance achieving 40% faster load times, resulting in 25% higher conversion rates across key pages.",
              ],
            },
            {
              title: "Frontend Developer · StartupXYZ",
              period: "2018 — 2021",
              bullets: [
                "Developed 15+ interactive dashboards and data visualization components using React and D3.js, processing 1M+ data points daily.",
                "Collaborated with 3 UX designers to implement pixel-perfect, accessible user interfaces, achieving 98% accessibility compliance.",
                "Integrated 20+ RESTful APIs and implemented state management solutions with Redux, reducing data loading time by 50%.",
              ],
            },
          ],
          skills: "React · JavaScript · TypeScript · HTML/CSS · Node.js · Git · Webpack · Jest",
        }
      case "skills":
        return {
          ...baseContent,
          summary: "Frontend developer with 7+ years building scalable web applications. Expert in React, JavaScript, and modern development practices. Proven track record of delivering high-quality user experiences and leading technical initiatives.",
          experience: [
            {
              title: "Senior Frontend Developer · TechCorp Inc.",
              period: "2021 — Present",
              bullets: [
                "Architected and implemented responsive web applications serving 50k+ daily users.",
                "Led frontend team of 5 developers, establishing coding standards and best practices.",
                "Optimized application performance, achieving 40% faster load times across key pages.",
              ],
            },
            {
              title: "Frontend Developer · StartupXYZ",
              period: "2018 — 2021",
              bullets: [
                "Developed interactive dashboards and data visualization components using React and D3.js.",
                "Collaborated with UX designers to implement pixel-perfect, accessible user interfaces.",
                "Integrated RESTful APIs and implemented state management solutions with Redux.",
              ],
            },
          ],
          skills: "React · JavaScript · TypeScript · HTML/CSS · Sass · Tailwind CSS · Node.js · Express · GraphQL · REST APIs · Git · GitHub · Webpack · Vite · Jest · Cypress · Figma · Adobe XD · Responsive Design · Web Accessibility · Performance Optimization",
        }
      default:
        return {
          ...baseContent,
          summary: "Frontend developer with 7+ years building scalable web applications. Expert in React, JavaScript, and modern development practices. Proven track record of delivering high-quality user experiences and leading technical initiatives.",
          experience: [
            {
              title: "Senior Frontend Developer · TechCorp Inc.",
              period: "2021 — Present",
              bullets: [
                "Architected and implemented responsive web applications serving 50k+ daily users.",
                "Led frontend team of 5 developers, establishing coding standards and best practices.",
                "Optimized application performance, achieving 40% faster load times across key pages.",
              ],
            },
            {
              title: "Frontend Developer · StartupXYZ",
              period: "2018 — 2021",
              bullets: [
                "Developed interactive dashboards and data visualization components using React and D3.js.",
                "Collaborated with UX designers to implement pixel-perfect, accessible user interfaces.",
                "Integrated RESTful APIs and implemented state management solutions with Redux.",
              ],
            },
          ],
          skills: "React · JavaScript · TypeScript · HTML/CSS · Node.js · Git · Webpack · Jest",
        }
    }
  }

  const getQuestionOptions = () => {
    switch (conversationStage) {
      case "initial":
        return [
          "Make my experience bullets more quantified with specific metrics",
          "Add more technical skills relevant to frontend development",
          "Improve the summary section to be more compelling",
        ]
      case "followup1":
        return [
          "Can you add leadership experience to highlight my management skills?",
          "Include more details about my project achievements and impact?",
          "Optimize the resume for better ATS keyword matching?",
        ]
      case "followup2":
        return [
          "Add education and certification details to strengthen my profile?",
          "Include volunteer work or side projects to show passion?",
          "Adjust the formatting to make it more visually appealing?",
        ]
      default:
        return []
    }
  }

  const handleStartDemo = () => {
    setIsPlaying(true)
    setDemoStep(0)
  }

  const handlePauseDemo = () => {
    setIsPlaying(false)
  }

  const handleResetDemo = () => {
    setIsPlaying(false)
    setDemoStep(0)
    setCurrentView("landing")
    setJobDescription("")
    setResumeVariation("original")
    setChatMessages([{
      id: 1,
      type: "assistant",
      content: "Hello! I've optimized your resume and cover letter for the Senior Frontend Developer position. What would you like to improve?",
      timestamp: new Date(),
    }])
    setConversationStage("initial")
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Demo Controls */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <button
          onClick={handleStartDemo}
          disabled={isPlaying}
          className="flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Play className="w-4 h-4" />
          Start Demo
        </button>
        <button
          onClick={handlePauseDemo}
          disabled={!isPlaying}
          className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Pause className="w-4 h-4" />
          Pause
        </button>
        <button
          onClick={handleResetDemo}
          className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Reset
        </button>
      </div>

      {/* Demo Window */}
      <div className="relative rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
        {/* Browser Header */}
        <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center px-4">
          <div className="flex space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-400"></div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="text-sm font-medium text-gray-500">Draft Demo</div>
          </div>
        </div>

        {/* Demo Content */}
        <div className="h-[600px] bg-stone-50/80 relative overflow-hidden flex flex-col">
          {currentView === "landing" ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8">
              <div className="text-center max-w-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Draft!</h3>
                <p className="text-gray-600 mb-6">
                  Paste your job description here and watch as our AI optimizes your resume in real-time.
                </p>
                <textarea
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  placeholder="Paste your job description here..."
                  className="w-full h-32 p-4 border-2 border-indigo-500 rounded-xl resize-none focus:outline-none focus:ring-0 focus:border-indigo-600 bg-white transition-all duration-300 mb-4"
                  disabled
                />
                <button
                  disabled={!jobDescription.trim()}
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Start Drafting
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-1 overflow-hidden">
              {/* Chat Panel */}
              <div className="w-[40%] flex-shrink-0 flex flex-col border-r border-gray-200">
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {chatMessages.map((message) => (
                    <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                      {message.type === "assistant" ? (
                        <div className="w-full text-sm text-gray-800">
                          <p className="whitespace-pre-wrap break-words">{message.content}</p>
                        </div>
                      ) : (
                        <div className="inline-block max-w-[85%] text-sm bg-white border border-gray-200 rounded-2xl p-3 text-gray-900 shadow-sm">
                          <p className="whitespace-pre-wrap break-words">{message.content}</p>
                        </div>
                      )}
                    </div>
                  ))}

                  {conversationStage !== "ongoing" && (
                    <div className="space-y-2">
                      <div className="text-xs text-gray-500 mb-2">
                        {conversationStage === "initial" ? "Try asking:" : "What else would you like to improve?"}
                      </div>
                      {getQuestionOptions().map((question, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuestionClick(question)}
                          className="w-full text-left p-3 text-sm bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl transition-colors duration-200"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Preview Panel */}
              <div className="w-[60%] flex flex-col overflow-hidden">
                {/* Document Controls */}
                <div className="flex items-center justify-center gap-2 p-4 border-b border-gray-200">
                  <button
                    onClick={() => setSelectedDocument("resume")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedDocument === "resume" 
                        ? "bg-indigo-700 text-white" 
                        : "bg-white text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-1">
                      <FileText className="w-3 h-3" />
                      Resume
                    </div>
                  </button>
                  <button
                    onClick={() => setSelectedDocument("coverLetter")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedDocument === "coverLetter" 
                        ? "bg-indigo-700 text-white" 
                        : "bg-white text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-1">
                      <MessageSquare className="w-3 h-3" />
                      Cover Letter
                    </div>
                  </button>
                </div>

                {/* Document Preview */}
                <div className="flex-1 overflow-auto p-4">
                  <div className="flex justify-center">
                    <div
                      className="relative flex items-center justify-center"
                      style={{ width: 816 * previewScale, height: 1056 * previewScale }}
                    >
                      <div
                        className="w-[816px] h-[1056px] bg-white border border-gray-200 rounded-lg shadow-sm"
                        style={{ transform: `scale(${previewScale})`, transformOrigin: "center center" }}
                      >
                        <div className="px-10 py-10">
                          {selectedDocument === "resume" ? (
                            (() => {
                              const content = getResumeContent()
                              return (
                                <>
                                  <div className="flex items-baseline justify-between">
                                    <h2 className="text-3xl font-bold text-gray-900">{content.name}</h2>
                                    <div className="text-sm text-gray-500">{content.contact}</div>
                                  </div>
                                  <div className="mt-1 text-gray-600">{content.title}</div>

                                  <div className="mt-8">
                                    <h3 className="text-xs font-semibold tracking-wider text-gray-500 uppercase">Summary</h3>
                                    <p className="mt-2 text-sm text-gray-700 leading-relaxed">{content.summary}</p>
                                  </div>

                                  <div className="mt-8">
                                    <h3 className="text-xs font-semibold tracking-wider text-gray-500 uppercase">Experience</h3>
                                    {content.experience.map((exp, index) => (
                                      <div key={index} className="mt-3">
                                        <div className="flex items-baseline justify-between">
                                          <div className="font-semibold text-gray-900">{exp.title}</div>
                                          <div className="text-xs text-gray-500">{exp.period}</div>
                                        </div>
                                        <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">
                                          {exp.bullets.map((bullet, bulletIndex) => (
                                            <li key={bulletIndex}>{bullet}</li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>

                                  <div className="mt-8">
                                    <h3 className="text-xs font-semibold tracking-wider text-gray-500 uppercase">Skills</h3>
                                    <div className="mt-2 text-sm text-gray-700">{content.skills}</div>
                                  </div>
                                </>
                              )
                            })()
                          ) : (
                            <div>
                              <div className="text-sm text-gray-600">October 20, 2025</div>
                              <div className="mt-2 text-sm text-gray-600">
                                Hiring Manager<br />
                                TechCorp Inc.<br />
                                San Francisco, CA
                              </div>
                              <div className="mt-6 text-sm text-gray-700">Dear Hiring Manager,</div>
                              <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                                I am excited to apply for the Senior Frontend Developer role at TechCorp. With extensive
                                experience in React, JavaScript, and building design systems, I have consistently delivered
                                performant, accessible, and delightful user interfaces at scale.
                              </p>
                              <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                                At my current role, I led the migration to a robust component library and improved core flow
                                performance, resulting in higher conversion and fewer UI defects. I thrive collaborating with
                                cross-functional partners and mentoring engineers.
                              </p>
                              <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                                I would welcome the opportunity to bring this experience to TechCorp and contribute to your
                                mission.
                              </p>
                              <div className="mt-6 text-sm text-gray-700">Sincerely,</div>
                              <div className="mt-1 text-sm font-semibold text-gray-900">Sarah Johnson</div>
                              <div className="text-sm text-gray-600">sarah@example.com · (555) 123-4567</div>
                            </div>
                          )}
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
  )
}

