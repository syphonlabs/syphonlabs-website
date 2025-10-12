"use client"

import DraftAppHeader from "@/components/DraftAppHeader"
import React, { useState, useRef, useEffect } from "react"
import { useAuth } from "@/features/auth/AuthProvider"
import { FileText, MessageSquare, ArrowRight, Clock, ArrowDown, Maximize2 } from "lucide-react"
import BackgroundAnimation from "@/components/BackgroundAnimation"
import DashboardPage from "@/components/dashboard-page"

const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    {...props}
    className={`bg-indigo-700 hover:bg-indigo-800 text-white px-4 h-12 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg ${props.className || ""}`}
  />
)

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  (props, ref) => (
    <textarea
      ref={ref}
      {...props}
      className={`w-full text-sm focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-xl transition-all duration-200 ${props.className || ""}`}
    />
  ),
)
Textarea.displayName = "Textarea"

export default function DraftApp() {
  const [currentView, setCurrentView] = useState<"landing" | "app" | "dashboard">("landing")
  const [jobDescription, setJobDescription] = useState("")
  const [showPopup, setShowPopup] = useState(true)
  const [selectedDocument, setSelectedDocument] = useState<"resume" | "coverLetter">("resume")
  const [selectedVersion, setSelectedVersion] = useState("1.0")
  const [selectedCoverLetterVersion, setSelectedCoverLetterVersion] = useState("1.0")
  const [showVersionHistory, setShowVersionHistory] = useState(false)
  const [isEnlarged, setIsEnlarged] = useState(false)
  const [newMessage, setNewMessage] = useState("")
  const [resumeVariation, setResumeVariation] = useState<
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
  >("original")
  const [askedQuestions, setAskedQuestions] = useState<string[]>([])
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: "assistant",
      content:
        "Hello! I've optimized your resume and cover letter for the Senior Frontend Developer position. What would you like to improve?",
      timestamp: new Date(),
    },
  ])
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const historyRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLTextAreaElement | null>(null)
  const { user } = useAuth()
  const [conversationStage, setConversationStage] = useState<"initial" | "followup1" | "followup2" | "ongoing">(
    "initial",
  )

  const [previewScale, setPreviewScale] = useState<number>(() => {
    const savedScale = localStorage.getItem("previewScale")
    return savedScale ? Number.parseFloat(savedScale) : 1.0
  })
  const previewScrollRef = useRef<HTMLDivElement | null>(null)
  const gestureStateRef = useRef<{ startScale: number } | null>(null)

  useEffect(() => {
    localStorage.setItem("previewScale", previewScale.toString())
  }, [previewScale])

  const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v))
  const handlePreviewWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    // Only zoom when browser sends wheel events representing pinch (ctrlKey true).
    // Avoid metaKey (Cmd) which can trigger browser page zoom.
    if (e.ctrlKey) {
      e.preventDefault()
      const delta = -e.deltaY
      const factor = Math.exp(delta * 0.0015)
      setPreviewScale((s) => clamp(s * factor, 0.5, 2.5))
    }
  }

  // Prevent Safari/Chromium gesture zoom from affecting the whole page and map to preview zoom
  useEffect(() => {
    const el = previewScrollRef.current
    if (!el) return

    const onGestureStart = (e: any) => {
      if (typeof e.preventDefault === "function") e.preventDefault()
      gestureStateRef.current = { startScale: previewScale }
    }
    const onGestureChange = (e: any) => {
      if (typeof e.preventDefault === "function") e.preventDefault()
      const base = gestureStateRef.current?.startScale ?? previewScale
      const next = clamp(base * (e.scale || 1), 0.5, 2.5)
      setPreviewScale(next)
    }
    const onGestureEnd = (e: any) => {
      if (typeof e.preventDefault === "function") e.preventDefault()
      gestureStateRef.current = null
    }

    el.addEventListener("gesturestart", onGestureStart as EventListener, { passive: false })
    el.addEventListener("gesturechange", onGestureChange as EventListener)
    el.addEventListener("gestureend", onGestureEnd as EventListener)

    return () => {
      el.removeEventListener("gesturestart", onGestureStart as EventListener)
      el.removeEventListener("gesturechange", onGestureChange as EventListener)
      el.removeEventListener("gestureend", onGestureEnd as EventListener)
    }
  }, [previewScale])

  // No persistence by design

  // Hard-stop page-level zoom shortcuts and ctrl+wheel at the document level
  useEffect(() => {
    const preventPageZoomWheel = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault()
      }
    }
    const preventPageZoomKeys = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === "+" || e.key === "-" || e.key === "=" || e.key === "0")) {
        e.preventDefault()
      }
    }
    const preventPageGestureStart = (e: Event) => {
      // Safari trackpad pinch
      e.preventDefault()
    }
    const preventPageGestureChange = (e: Event) => {
      e.preventDefault()
    }

    window.addEventListener("wheel", preventPageZoomWheel, { passive: false })
    window.addEventListener("keydown", preventPageZoomKeys, { passive: false })
    document.addEventListener("gesturestart", preventPageGestureStart as EventListener, { passive: false })
    document.addEventListener("gesturechange", preventPageGestureChange as EventListener)
    document.addEventListener("gestureend", preventPageGestureChange as EventListener)

    return () => {
      window.removeEventListener("wheel", preventPageZoomWheel as EventListener)
      window.removeEventListener("keydown", preventPageZoomKeys as EventListener)
      document.removeEventListener("gesturestart", preventPageGestureStart as EventListener)
      document.removeEventListener("gesturechange", preventPageGestureChange as EventListener)
      document.removeEventListener("gestureend", preventPageGestureChange as EventListener)
    }
  }, [])

  const computeUserDisplayName = (): string => {
    const fullName = (user?.user_metadata as any)?.full_name as string | undefined
    if (fullName && fullName.trim().length > 0) {
      return fullName.trim().split(" ")[0]
    }
    const email = user?.email
    if (email) {
      const handle = email.split("@")[0]
      const token = handle.split(/[._-]/)[0] || handle
      return token.charAt(0).toUpperCase() + token.slice(1)
    }
    return "there"
  }
  const placeholderText = `What changes would you like to make, ${computeUserDisplayName()}?`

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [chatMessages])

  useEffect(() => {
    if (!showVersionHistory) return
    const handleClickOutside = (event: MouseEvent) => {
      if (historyRef.current && !historyRef.current.contains(event.target as Node)) setShowVersionHistory(false)
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [showVersionHistory])

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

  const handleSend = () => {
    if (!newMessage.trim()) return
    const messageToSend = newMessage.trimEnd()
    const userMessage = {
      id: chatMessages.length + 1,
      type: "user",
      content: messageToSend,
      timestamp: new Date(),
    }
    setChatMessages((prev) => [...prev, userMessage])
    setNewMessage("")
    setAskedQuestions((prev) => [...prev, messageToSend])

    // Reset the textbox height back to its base size after sending
    if (inputRef.current) {
      inputRef.current.style.height = ""
    }

    setTimeout(() => {
      let aiResponse = "I understand your request. I will adjust the resume accordingly."
      let newVariation = resumeVariation

      // Update resume based on question type
      if (messageToSend.toLowerCase().includes("quantified") || messageToSend.toLowerCase().includes("metrics")) {
        aiResponse =
          "Great idea! I've updated your experience bullets with specific metrics and quantified achievements to make your impact more measurable."
        newVariation = "quantified"
      } else if (messageToSend.toLowerCase().includes("skills") || messageToSend.toLowerCase().includes("technical")) {
        aiResponse =
          "Perfect! I've expanded your technical skills section with more relevant frontend technologies and frameworks."
        newVariation = "skills"
      } else if (
        messageToSend.toLowerCase().includes("summary") ||
        messageToSend.toLowerCase().includes("compelling")
      ) {
        aiResponse =
          "Excellent suggestion! I've rewritten your summary to be more compelling and highlight your unique value proposition."
        newVariation = "summary"
      } else if (
        messageToSend.toLowerCase().includes("leadership") ||
        messageToSend.toLowerCase().includes("management")
      ) {
        aiResponse =
          "Great point! I've enhanced your experience section to better highlight your leadership and team management accomplishments."
        newVariation = "leadership"
      } else if (
        messageToSend.toLowerCase().includes("project") ||
        messageToSend.toLowerCase().includes("achievements")
      ) {
        aiResponse =
          "Excellent! I've added more specific project details and measurable achievements to showcase your impact."
        newVariation = "projects"
      } else if (messageToSend.toLowerCase().includes("ats") || messageToSend.toLowerCase().includes("keyword")) {
        aiResponse =
          "Smart thinking! I've optimized the resume with relevant keywords and phrases that ATS systems commonly look for."
        newVariation = "ats"
      } else if (
        messageToSend.toLowerCase().includes("education") ||
        messageToSend.toLowerCase().includes("certification")
      ) {
        aiResponse =
          "Good idea! I've added an education section with relevant certifications to strengthen your technical credentials."
        newVariation = "education"
      } else if (
        messageToSend.toLowerCase().includes("volunteer") ||
        messageToSend.toLowerCase().includes("side projects")
      ) {
        aiResponse =
          "Nice touch! I've included a projects section that demonstrates your passion and continuous learning in frontend development."
        newVariation = "volunteer"
      } else if (messageToSend.toLowerCase().includes("formatting") || messageToSend.toLowerCase().includes("visual")) {
        aiResponse =
          "I've improved the visual hierarchy and formatting to make your resume more scannable and professional."
        newVariation = "formatting"
      }

      setResumeVariation(newVariation)

      const ai = {
        id: userMessage.id + 1,
        type: "assistant",
        content: aiResponse,
        timestamp: new Date(),
      }
      setChatMessages((prev) => [...prev, ai])

      setTimeout(() => {
        if (conversationStage === "initial") {
          setConversationStage("followup1")
        } else if (conversationStage === "followup1") {
          setConversationStage("followup2")
        } else if (conversationStage === "followup2") {
          setConversationStage("ongoing")
        }
      }, 1000)
    }, 800)
  }

  const handleQuestionClick = (question: string) => {
    const userMessage = {
      id: chatMessages.length + 1,
      type: "user",
      content: question,
      timestamp: new Date(),
    }
    setChatMessages((prev) => [...prev, userMessage])
    setAskedQuestions((prev) => [...prev, question])

    setTimeout(() => {
      let aiResponse = "I understand your request. I will adjust the resume accordingly."
      let newVariation = resumeVariation

      // Update resume based on question type
      if (question.toLowerCase().includes("quantified") || question.toLowerCase().includes("metrics")) {
        aiResponse =
          "Great idea! I've updated your experience bullets with specific metrics and quantified achievements to make your impact more measurable."
        newVariation = "quantified"
      } else if (question.toLowerCase().includes("skills") || question.toLowerCase().includes("technical")) {
        aiResponse =
          "Perfect! I've expanded your technical skills section with more relevant frontend technologies and frameworks."
        newVariation = "skills"
      } else if (question.toLowerCase().includes("summary") || question.toLowerCase().includes("compelling")) {
        aiResponse =
          "Excellent suggestion! I've rewritten your summary to be more compelling and highlight your unique value proposition."
        newVariation = "summary"
      } else if (question.toLowerCase().includes("leadership") || question.toLowerCase().includes("management")) {
        aiResponse =
          "Great point! I've enhanced your experience section to better highlight your leadership and team management accomplishments."
        newVariation = "leadership"
      } else if (question.toLowerCase().includes("project") || question.toLowerCase().includes("achievements")) {
        aiResponse =
          "Excellent! I've added more specific project details and measurable achievements to showcase your impact."
        newVariation = "projects"
      } else if (question.toLowerCase().includes("ats") || question.toLowerCase().includes("keyword")) {
        aiResponse =
          "Smart thinking! I've optimized the resume with relevant keywords and phrases that ATS systems commonly look for."
        newVariation = "ats"
      } else if (question.toLowerCase().includes("education") || question.toLowerCase().includes("certification")) {
        aiResponse =
          "Good idea! I've added an education section with relevant certifications to strengthen your technical credentials."
        newVariation = "education"
      } else if (question.toLowerCase().includes("volunteer") || question.toLowerCase().includes("side projects")) {
        aiResponse =
          "Nice touch! I've included a projects section that demonstrates your passion and continuous learning in frontend development."
        newVariation = "volunteer"
      } else if (question.toLowerCase().includes("formatting") || question.toLowerCase().includes("visual")) {
        aiResponse =
          "I've improved the visual hierarchy and formatting to make your resume more scannable and professional."
        newVariation = "formatting"
      }

      setResumeVariation(newVariation)

      const ai = {
        id: userMessage.id + 1,
        type: "assistant",
        content: aiResponse,
        timestamp: new Date(),
      }
      setChatMessages((prev) => [...prev, ai])

      setTimeout(() => {
        if (conversationStage === "initial") {
          setConversationStage("followup1")
        } else if (conversationStage === "followup1") {
          setConversationStage("followup2")
        } else if (conversationStage === "followup2") {
          setConversationStage("ongoing")
        }
      }, 1000)
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
          summary:
            "Frontend developer with 7+ years building scalable web applications. Expert in React, JavaScript, and modern development practices. Proven track record of delivering high-quality user experiences and leading technical initiatives.",
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
          summary:
            "Frontend developer with 7+ years building scalable web applications. Expert in React, JavaScript, and modern development practices. Proven track record of delivering high-quality user experiences and leading technical initiatives.",
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
          skills:
            "React · JavaScript · TypeScript · HTML/CSS · Sass · Tailwind CSS · Node.js · Express · GraphQL · REST APIs · Git · GitHub · Webpack · Vite · Jest · Cypress · Figma · Adobe XD · Responsive Design · Web Accessibility · Performance Optimization",
        }

      case "summary":
        return {
          ...baseContent,
          summary:
            "Passionate frontend architect with 7+ years of expertise in crafting exceptional user experiences for high-traffic applications. Specializes in React ecosystem and modern JavaScript, with a proven ability to transform complex requirements into intuitive, performant interfaces. Known for mentoring teams, driving technical excellence, and delivering solutions that directly impact business growth.",
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

      case "leadership":
        return {
          ...baseContent,
          summary:
            "Senior frontend leader with 7+ years building scalable web applications and managing high-performing engineering teams. Expert in React, JavaScript, and modern development practices with proven leadership in cross-functional collaboration and technical mentorship.",
          experience: [
            {
              title: "Senior Frontend Developer · TechCorp Inc.",
              period: "2021 — Present",
              bullets: [
                "Led and mentored a team of 8 frontend developers, implementing agile practices that improved delivery speed by 45%.",
                "Spearheaded cross-functional initiatives with product and design teams, resulting in 30% faster feature delivery cycles.",
                "Established technical leadership in architecture decisions, code reviews, and engineering best practices across the organization.",
              ],
            },
            {
              title: "Frontend Developer · StartupXYZ",
              period: "2018 — 2021",
              bullets: [
                "Mentored 4 junior developers, creating comprehensive onboarding programs that reduced ramp-up time by 50%.",
                "Led technical discussions and architectural planning sessions for major product initiatives.",
                "Collaborated with stakeholders to translate business requirements into technical solutions and development roadmaps.",
              ],
            },
          ],
          skills:
            "React · JavaScript · TypeScript · HTML/CSS · Node.js · Git · Webpack · Jest · Team Leadership · Mentoring",
        }

      case "projects":
        return {
          ...baseContent,
          summary:
            "Frontend developer with 7+ years building scalable web applications. Expert in React, JavaScript, and modern development practices. Proven track record of delivering high-impact projects and leading technical initiatives.",
          experience: [
            {
              title: "Senior Frontend Developer · TechCorp Inc.",
              period: "2021 — Present",
              bullets: [
                "Led complete redesign of customer dashboard, resulting in 40% increase in user engagement and 25% reduction in support tickets.",
                "Architected and delivered real-time analytics platform processing 2M+ events daily, improving decision-making speed by 60%.",
                "Spearheaded migration to micro-frontend architecture, reducing deployment time by 70% and enabling independent team scaling.",
              ],
            },
            {
              title: "Frontend Developer · StartupXYZ",
              period: "2018 — 2021",
              bullets: [
                "Built comprehensive data visualization suite with 20+ interactive charts, increasing user retention by 35%.",
                "Delivered mobile-first responsive redesign that improved mobile conversion rates by 45% across all key funnels.",
                "Created automated testing framework that reduced QA time by 50% and improved release confidence.",
              ],
            },
          ],
          skills: "React · JavaScript · TypeScript · HTML/CSS · Node.js · Git · Webpack · Jest",
        }

      case "ats":
        return {
          ...baseContent,
          summary:
            "Senior Frontend Developer with 7+ years of experience in React, JavaScript, TypeScript, and modern web development. Proven expertise in building scalable applications, leading development teams, and delivering high-performance user interfaces. Strong background in agile development, code optimization, and cross-functional collaboration.",
          experience: [
            {
              title: "Senior Frontend Developer · TechCorp Inc.",
              period: "2021 — Present",
              bullets: [
                "Developed responsive web applications using React, JavaScript, and TypeScript serving 50k+ daily active users.",
                "Implemented modern frontend technologies including Webpack, Jest, and CSS frameworks for optimal performance.",
                "Led agile development processes and collaborated with cross-functional teams to deliver scalable software solutions.",
              ],
            },
            {
              title: "Frontend Developer · StartupXYZ",
              period: "2018 — 2021",
              bullets: [
                "Built interactive user interfaces with React, Redux, and modern JavaScript frameworks for data-driven applications.",
                "Developed RESTful API integrations and implemented responsive design principles for mobile-first experiences.",
                "Utilized version control systems (Git) and automated testing frameworks to ensure code quality and reliability.",
              ],
            },
          ],
          skills:
            "React · JavaScript · TypeScript · HTML5 · CSS3 · Node.js · Git · Webpack · Jest · Redux · RESTful APIs · Responsive Design · Agile Development · Cross-functional Collaboration · Performance Optimization",
        }

      case "education":
        return {
          ...baseContent,
          summary:
            "Frontend developer with 7+ years building scalable web applications. Expert in React, JavaScript, and modern development practices. Proven track record of delivering high-quality user experiences and leading technical initiatives.",
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
          education: [
            {
              degree: "Bachelor of Science in Computer Science",
              school: "University of California, Berkeley",
              period: "2014 — 2018",
            },
            {
              degree: "AWS Certified Developer Associate",
              school: "Amazon Web Services",
              period: "2022",
            },
            {
              degree: "React Developer Certification",
              school: "Meta (Facebook)",
              period: "2021",
            },
          ],
        }

      case "volunteer":
        return {
          ...baseContent,
          summary:
            "Frontend developer with 7+ years building scalable web applications. Expert in React, JavaScript, and modern development practices. Proven track record of delivering high-quality user experiences and leading technical initiatives.",
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
          projects: [
            {
              title: "Open Source Contributor · React Component Library",
              period: "2020 — Present",
              description:
                "Contributed to popular React UI library with 50k+ GitHub stars, focusing on accessibility improvements.",
            },
            {
              title: "Volunteer Developer · Code for America",
              period: "2019 — 2021",
              description:
                "Built civic technology solutions for local government, improving citizen services and digital accessibility.",
            },
            {
              title: "Personal Project · Weather Dashboard",
              period: "2023",
              description:
                "Full-stack weather application using React, Node.js, and external APIs with real-time data visualization.",
            },
          ],
        }

      case "formatting":
        return {
          ...baseContent,
          summary:
            "Frontend developer with 7+ years building scalable web applications. Expert in React, JavaScript, and modern development practices. Proven track record of delivering high-quality user experiences and leading technical initiatives.",
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
          formatting: "enhanced",
        }

      default:
        return {
          ...baseContent,
          summary:
            "Frontend developer with 7+ years building scalable web applications. Expert in React, JavaScript, and modern development practices. Proven track record of delivering high-quality user experiences and leading technical initiatives.",
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

  const handleStartDrafting = () => {
    if (jobDescription.trim()) {
      setCurrentView("app")
    }
  }

  const handleLogoClick = () => {
    setCurrentView("landing")
  }

  const handleDashboardClick = () => {
    setCurrentView("dashboard")
  }

  const loadDummyJobDescription = () => {
    const dummyJobDescription = `Senior Frontend Developer - TechCorp Inc.

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
• Understanding of web performance optimization techniques

Preferred Qualifications:
• Experience with Next.js and server-side rendering
• Knowledge of GraphQL and modern API integration
• Familiarity with design systems and component libraries
• Experience with CI/CD pipelines and deployment processes
• Bachelor's degree in Computer Science or related field

We offer competitive salary, comprehensive benefits, and opportunities for professional growth in a collaborative environment.`

    setJobDescription(dummyJobDescription)
    setShowPopup(false)
    setTimeout(() => {
      const textarea = document.querySelector(
        'textarea[placeholder="Paste your job description here"]',
      ) as HTMLTextAreaElement
      if (textarea) {
        textarea.style.height = "auto"
        textarea.style.height = Math.min(textarea.scrollHeight, 300) + "px" // Max height of 300px
      }
    }, 100)
  }

  if (currentView === "landing") {
    return (
      <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: "#F8F8F8" }}>
        <BackgroundAnimation />
        <div className="relative z-10">
          <DraftAppHeader onLogoClick={handleLogoClick} onDashboardClick={handleDashboardClick} />
        </div>

        <div className="flex flex-col justify-between min-h-[calc(100vh-80px)] px-6 relative z-10">
          <div className="flex-1 flex flex-col items-center justify-between h-full">
            <div className="text-center pt-16">
              <h1 className="text-6xl font-bold text-black mb-8 leading-tight">Designed to get you hired.</h1>
              <p className="text-2xl font-normal leading-relaxed mb-16">
                <span style={{ color: "#4f46e5" }}>Draft</span>{" "}
                <span style={{ color: "#000000" }}>your perfect resumes and cover letters with</span>{" "}
                <span style={{ color: "#4f46e5" }}>Syphon AI</span>
                <span style={{ color: "#000000" }}>, effortlessly.</span>
              </p>
            </div>

            <div className="relative max-w-3xl w-full">
              <div className="relative">
                <Textarea
                  value={jobDescription}
                  onChange={(e) => {
                    setJobDescription(e.target.value)
                    const textarea = e.target as HTMLTextAreaElement
                    textarea.style.height = "auto"
                    textarea.style.height = Math.min(textarea.scrollHeight, 300) + "px"
                  }}
                  placeholder="Paste your job description here"
                  className="w-full h-24 p-6 text-base border-2 border-indigo-500 rounded-3xl resize-none focus:outline-none focus:ring-0 focus:border-indigo-600 bg-white transition-all duration-300"
                />

                {showPopup && (
                  <div className="absolute -right-80 -top-64 w-64 bg-white rounded-2xl p-4 shadow-2xl border border-gray-200 z-10">
                    <div className="text-left">
                      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                        <FileText className="w-6 h-6 text-indigo-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Welcome to Draft!</h3>
                      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                        Upload your job description here and watch as our AI optimizes your resume in real-time.
                      </p>
                      <button
                        onClick={loadDummyJobDescription}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm"
                      >
                        Load Demo Job Description
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-center pt-6">
                <button
                  onClick={handleStartDrafting}
                  disabled={!jobDescription.trim()}
                  className="h-11 px-8 py-3 rounded-full text-lg text-white flex items-center gap-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed animate-in fade-in-0 duration-600 delay-600"
                  style={{
                    background: jobDescription.trim()
                      ? "linear-gradient(to right, #4338CA, #3B82F6)"
                      : "linear-gradient(to right, #4338CA, #3B82F6)",
                  }}
                  onMouseEnter={(e) => {
                    if (jobDescription.trim()) {
                      e.currentTarget.style.background = "linear-gradient(to right, #3730A3, #2563EB)"
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (jobDescription.trim()) {
                      e.currentTarget.style.background = "linear-gradient(to right, #4338CA, #3B82F6)"
                    }
                  }}
                >
                  Start Drafting
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (currentView === "dashboard") {
    return <DashboardPage onNavigateHome={handleLogoClick} />
  }

  // Main app interface
  return (
    <div className="h-screen bg-stone-50/80 relative overflow-hidden flex flex-col">
      <div className="flex-shrink-0">
        <DraftAppHeader onLogoClick={handleLogoClick} onDashboardClick={handleDashboardClick} />
      </div>
      <div className="flex flex-1 overflow-hidden px-3 sm:py-2 min-h-0 relative">
        {/* Chat */}
        <div className="w-[40%] flex-shrink-0 flex flex-col">
          <div
            className="flex-1 overflow-y-auto min-h-0"
            style={{
              fontFamily: '"Noto Sans", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
              fontSize: "16px",
            }}
          >
            <div className="px-6 pt-4 pb-4 space-y-6">
              {chatMessages.map((m) => (
                <div key={m.id} className={`w-full flex ${m.type === "user" ? "justify-end" : "justify-start"} px-6`}>
                  {m.type === "assistant" ? (
                    <div className="w-full text-sm leading-relaxed text-gray-800">
                      <p className="whitespace-pre-wrap break-words">{m.content}</p>
                    </div>
                  ) : (
                    <div className="inline-block max-w-[85%] text-sm leading-relaxed bg-white border border-gray-200 rounded-2xl p-3 text-gray-900 shadow-sm">
                      <p className="whitespace-pre-wrap break-words">{m.content}</p>
                    </div>
                  )}
                </div>
              ))}

              {conversationStage !== "ongoing" && (
                <div className="px-6">
                  <div className="text-xs text-gray-500 mb-3">
                    {conversationStage === "initial" ? "Try asking:" : "What else would you like to improve?"}
                  </div>
                  <div className="space-y-2">
                    {getQuestionOptions().map((question, index) => (
                      <button
                        key={`${conversationStage}-${index}`}
                        onClick={() => handleQuestionClick(question)}
                        className="w-full text-left p-3 text-sm bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl transition-colors duration-200"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="flex-shrink-0 px-6 pt-2 pb-0">
            <div className="flex gap-3">
              <div className="flex-1">
                <div className="relative rounded-2xl border border-gray-300 bg-white overflow-hidden px-3 py-2 focus-within:border-gray-400 flex items-center">
                  <Textarea
                    ref={inputRef}
                    aria-label="Message input"
                    value={newMessage}
                    onChange={(e) => {
                      setNewMessage(e.target.value)
                      const el = inputRef.current
                      if (el) {
                        el.style.height = "auto"
                        const max = 128 // ~4 lines
                        el.style.height = Math.min(el.scrollHeight, max) + "px"
                      }
                    }}
                    onKeyDown={(e) => {
                      // Prevent sending during IME composition
                      // and support Enter=send, Shift+Enter=newline
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      if (e.isComposing) return
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault()
                        handleSend()
                      }
                    }}
                    placeholder={placeholderText}
                    rows={1}
                    className="bg-transparent border-0 outline-none focus:outline-none px-0 py-0 pr-14 pb-4 text-sm leading-[2.25rem] min-h-[2.25rem] max-h-32 resize-none placeholder:text-gray-500 text-left w-full"
                  />
                  <button
                    type="button"
                    onClick={handleSend}
                    disabled={!newMessage.trim()}
                    aria-label="Send message"
                    className="absolute right-2 bottom-2 inline-flex items-center justify-center h-9 w-9 rounded-full bg-white text-indigo-700 border border-gray-200 hover:bg-gray-50 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed z-10"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="w-[60%] flex flex-col overflow-hidden relative">
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full shadow-md px-3 py-2">
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Enlarge"
                onClick={() => setIsEnlarged(true)}
                className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
              <div className="relative" ref={historyRef}>
                <button
                  onClick={() => setShowVersionHistory((v) => !v)}
                  className="relative inline-flex items-center justify-center h-8 w-28 rounded-full text-xs font-medium transition-all duration-300 ease-out bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50 border border-gray-200 gap-2"
                >
                  <Clock className="w-3 h-3" />
                  <span>Version</span>
                </button>
                {showVersionHistory && (
                  <div className="absolute bottom-full left-0 mb-2 bg-white rounded-xl border border-gray-200 shadow-2xl w-[min(560px,calc(60vw-1rem))] max-h-[70vh] p-5">
                    <div className="max-h-[56vh] overflow-y-auto pr-2">
                      {selectedDocument === "resume" ? (
                        <div className="space-y-3">
                          {["1.0", "1.1", "1.2", "1.3"].map((version) => (
                            <button
                              key={version}
                              onClick={() => setSelectedVersion(version)}
                              className={`w-full text-left p-3 rounded-lg text-sm border transition-all duration-200 ${selectedVersion === version ? "bg-indigo-700 text-white border-indigo-700" : "bg-white border-gray-200 hover:bg-gray-50"}`}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span
                                  className={`font-semibold ${selectedVersion === version ? "text-white" : "text-gray-900"}`}
                                >
                                  Version {version}
                                </span>
                                <span
                                  className={`text-xs px-2 py-1 rounded ${selectedVersion === version ? "bg-white text-indigo-700" : "bg-indigo-700 text-white"}`}
                                >
                                  95/100 ATS
                                </span>
                              </div>
                              <div
                                className={`text-sm font-medium mb-1 ${selectedVersion === version ? "text-white" : "text-gray-800"}`}
                              >
                                Senior Frontend Developer
                              </div>
                              <div
                                className={`text-sm ${selectedVersion === version ? "text-white/80" : "text-gray-600"}`}
                              >
                                TechCorp Inc.
                              </div>
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="space-y-3">
                          {["1.0", "1.1", "1.2", "1.3"].map((version) => (
                            <button
                              key={version}
                              onClick={() => setSelectedCoverLetterVersion(version)}
                              className={`w-full text-left p-3 rounded-lg text-sm border transition-all duration-200 ${selectedCoverLetterVersion === version ? "bg-indigo-700 text-white border-indigo-700" : "bg-white border-gray-200 hover:bg-gray-50"}`}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span
                                  className={`font-semibold ${selectedCoverLetterVersion === version ? "text-white" : "text-gray-900"}`}
                                >
                                  Version {version}
                                </span>
                              </div>
                              <div
                                className={`text-sm font-medium mb-1 ${selectedCoverLetterVersion === version ? "text-white" : "text-gray-800"}`}
                              >
                                Senior Frontend Developer
                              </div>
                              <div
                                className={`text-sm ${selectedCoverLetterVersion === version ? "text-white/80" : "text-gray-600"}`}
                              >
                                TechCorp Inc.
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => setSelectedDocument("resume")}
                className={`relative inline-flex items-center justify-center h-8 w-28 rounded-full text-xs font-medium transition-all duration-300 ease-out border ${selectedDocument === "resume" ? "bg-indigo-700 text-white border-indigo-700 shadow-sm" : "bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-gray-200"}`}
              >
                <div className="flex items-center gap-1 justify-center">
                  <FileText className={`w-3 h-3 ${selectedDocument === "resume" ? "text-white" : "text-gray-600"}`} />
                  <span>Resume</span>
                </div>
              </button>
              <button
                onClick={() => setSelectedDocument("coverLetter")}
                className={`relative inline-flex items-center justify-center h-8 w-28 rounded-full text-xs font-medium transition-all duration-300 ease-out border ${selectedDocument === "coverLetter" ? "bg-indigo-700 text-white border-indigo-700 shadow-sm" : "bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-gray-200"}`}
              >
                <div className="flex items-center gap-1 justify-center">
                  <MessageSquare
                    className={`w-3 h-3 ${selectedDocument === "coverLetter" ? "text-white" : "text-gray-600"}`}
                  />
                  <span>Cover Letter</span>
                </div>
              </button>

              <button
                type="button"
                aria-label="Download"
                className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              >
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div
            className="flex-1 overflow-auto min-h-0 px-6 pt-0 pb-0 mr-2"
            style={{ scrollbarGutter: "stable" }}
            onWheel={handlePreviewWheel}
            ref={previewScrollRef}
          >
            {selectedDocument === "resume" ? (
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
                      {(() => {
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
                              <h3 className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
                                Experience
                              </h3>
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

                            {content.education && (
                              <div className="mt-8">
                                <h3 className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
                                  Education & Certifications
                                </h3>
                                {content.education.map((edu, index) => (
                                  <div key={index} className="mt-3">
                                    <div className="flex items-baseline justify-between">
                                      <div className="font-semibold text-gray-900">{edu.degree}</div>
                                      <div className="text-xs text-gray-500">{edu.period}</div>
                                    </div>
                                    <div className="text-sm text-gray-600">{edu.school}</div>
                                  </div>
                                ))}
                              </div>
                            )}

                            {content.projects && (
                              <div className="mt-8">
                                <h3 className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
                                  Projects & Contributions
                                </h3>
                                {content.projects.map((project, index) => (
                                  <div key={index} className="mt-3">
                                    <div className="flex items-baseline justify-between">
                                      <div className="font-semibold text-gray-900">{project.title}</div>
                                      <div className="text-xs text-gray-500">{project.period}</div>
                                    </div>
                                    <div className="text-sm text-gray-700 mt-1">{project.description}</div>
                                  </div>
                                ))}
                              </div>
                            )}

                            <div className="mt-8">
                              <h3 className="text-xs font-semibold tracking-wider text-gray-500 uppercase">Skills</h3>
                              <div
                                className={`mt-2 text-sm text-gray-700 ${content.formatting === "enhanced" ? "grid grid-cols-2 gap-2" : ""}`}
                              >
                                {content.formatting === "enhanced" ? (
                                  <>
                                    <div>
                                      <strong>Frontend:</strong> React, JavaScript, TypeScript
                                    </div>
                                    <div>
                                      <strong>Styling:</strong> HTML/CSS, Sass, Tailwind
                                    </div>
                                    <div>
                                      <strong>Tools:</strong> Node.js, Git, Webpack
                                    </div>
                                    <div>
                                      <strong>Testing:</strong> Jest, Cypress, Testing Library
                                    </div>
                                  </>
                                ) : (
                                  content.skills
                                )}
                              </div>
                            </div>
                          </>
                        )
                      })()}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
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
                      <div className="text-sm text-gray-600">October 20, 2025</div>
                      <div className="mt-2 text-sm text-gray-600">
                        Hiring Manager
                        <br />
                        TechCorp Inc.
                        <br />
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
                  </div>
                </div>
              </div>
            )}
          </div>

          {isEnlarged && (
            <div
              className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/40 backdrop-blur-sm"
              onClick={() => setIsEnlarged(false)}
              role="dialog"
              aria-modal="true"
            >
              <div className="w-[min(900px,92vw)] max-h-[92vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
                {selectedDocument === "resume" ? (
                  <div className="mx-auto w-[816px] h-[1056px] bg-white border border-gray-200 rounded-lg shadow-2xl">
                    <div className="px-10 py-10">
                      {(() => {
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
                              <h3 className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
                                Experience
                              </h3>
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
                            {content.education && (
                              <div className="mt-8">
                                <h3 className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
                                  Education & Certifications
                                </h3>
                                {content.education.map((edu, index) => (
                                  <div key={index} className="mt-3">
                                    <div className="flex items-baseline justify-between">
                                      <div className="font-semibold text-gray-900">{edu.degree}</div>
                                      <div className="text-xs text-gray-500">{edu.period}</div>
                                    </div>
                                    <div className="text-sm text-gray-600">{edu.school}</div>
                                  </div>
                                ))}
                              </div>
                            )}

                            {content.projects && (
                              <div className="mt-8">
                                <h3 className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
                                  Projects & Contributions
                                </h3>
                                {content.projects.map((project, index) => (
                                  <div key={index} className="mt-3">
                                    <div className="flex items-baseline justify-between">
                                      <div className="font-semibold text-gray-900">{project.title}</div>
                                      <div className="text-xs text-gray-500">{project.period}</div>
                                    </div>
                                    <div className="text-sm text-gray-700 mt-1">{project.description}</div>
                                  </div>
                                ))}
                              </div>
                            )}

                            <div className="mt-8">
                              <h3 className="text-xs font-semibold tracking-wider text-gray-500 uppercase">Skills</h3>
                              <div
                                className={`mt-2 text-sm text-gray-700 ${content.formatting === "enhanced" ? "grid grid-cols-2 gap-2" : ""}`}
                              >
                                {content.formatting === "enhanced" ? (
                                  <>
                                    <div>
                                      <strong>Frontend:</strong> React, JavaScript, TypeScript
                                    </div>
                                    <div>
                                      <strong>Styling:</strong> HTML/CSS, Sass, Tailwind
                                    </div>
                                    <div>
                                      <strong>Tools:</strong> Node.js, Git, Webpack
                                    </div>
                                    <div>
                                      <strong>Testing:</strong> Jest, Cypress, Testing Library
                                    </div>
                                  </>
                                ) : (
                                  content.skills
                                )}
                              </div>
                            </div>
                          </>
                        )
                      })()}
                    </div>
                  </div>
                ) : (
                  <div className="mx-auto w-[816px] h-[1056px] bg-white border border-gray-200 rounded-lg shadow-2xl">
                    <div className="px-10 py-10">
                      <div className="text-sm text-gray-600">October 20, 2025</div>
                      <div className="mt-2 text-sm text-gray-600">
                        Hiring Manager
                        <br />
                        TechCorp Inc.
                        <br />
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
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
