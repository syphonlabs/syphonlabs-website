"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  FileText,
  Upload,
  BrainCircuit,
  Star,
  CheckCircle,
  X,
  Eye,
  Download,
  Filter,
  Search,
  Clock,
  Award,
  Briefcase,
  GraduationCap,
} from "lucide-react"
import MobileDisclaimer from "@/components/mobile-disclaimer"
import { useAnalytics } from "@/hooks/use-analytics"

export default function ResumeAnalysisShowcase() {
  const { trackEvent } = useAnalytics()
  const [step, setStep] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [selectedResume, setSelectedResume] = useState<Resume | null>(null)
  const [showAnalysis, setShowAnalysis] = useState<boolean>(false)
  const [selectedResumes, setSelectedResumes] = useState<number[]>([])
  const [filterValue, setFilterValue] = useState('all')
  
  const resumes = [
    {
      id: 1,
      name: "Sarah_Johnson_Resume.pdf",
      candidate: "Sarah Johnson",
      role: "Senior Frontend Developer",
      score: 0,
      status: "pending",
      skills: [],
      experience: "",
      education: "",
      highlights: [],
      match: 0,
      aiAnalysis: "Strong candidate with excellent technical skills and leadership experience. Demonstrates consistent career growth and relevant project experience. Recommended for technical interview round.",
    },
    {
      id: 2,
      name: "Michael_Chen_Resume.pdf",
      candidate: "Michael Chen",
      role: "Product Manager",
      score: 0,
      status: "pending",
      skills: [],
      experience: "",
      education: "",
      highlights: [],
      match: 0,
      aiAnalysis: "Experienced product manager with a proven track record in launching successful products and managing large budgets. Strong leadership and cross-functional collaboration skills. Recommended for product strategy interview.",
    },
    {
      id: 3,
      name: "Emily_Rodriguez_Resume.pdf",
      candidate: "Emily Rodriguez",
      role: "UX Designer",
      score: 0,
      status: "pending",
      skills: [],
      experience: "",
      education: "",
      highlights: [],
      match: 0,
      aiAnalysis: "Creative UX designer with a focus on user research and design systems. Demonstrates strong impact on user satisfaction and product usability. Recommended for design portfolio review.",
    },
    {
      id: 4,
      name: "David_Kim_Resume.pdf",
      candidate: "David Kim",
      role: "Data Scientist",
      score: 0,
      status: "pending",
      skills: [],
      experience: "",
      highlights: [],
      match: 0,
      aiAnalysis: "Data scientist with expertise in machine learning and model development. Shows strong research background and practical implementation skills. Recommended for technical data science interview.",
    },
    {
      id: 5,
      name: "Alex_Turner_Resume.pdf",
      candidate: "Alex Turner",
      role: "Backend Developer",
      score: 0,
      status: "pending",
      skills: ["Python", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
      experience: "4 years",
      education: "MS Computer Science",
      highlights: ["Built microservices architecture", "Improved API response time by 60%", "Led database optimization project"],
      match: 0,
      aiAnalysis: "Backend developer with strong database design and API development skills. Shows expertise in scalable architecture and performance optimization. Recommended for technical backend interview.",
    },
    {
      id: 6,
      name: "Lisa_Wang_Resume.pdf",
      candidate: "Lisa Wang",
      role: "Marketing Manager",
      score: 0,
      status: "pending",
      skills: ["Digital Marketing", "Google Analytics", "Facebook Ads", "Content Strategy", "SEO", "CRM"],
      experience: "6 years",
      education: "MBA Marketing",
      highlights: ["Increased conversion rate by 45%", "Managed $500K ad budget", "Launched successful brand campaign"],
      match: 0,
      aiAnalysis: "Marketing professional with proven track record in digital campaigns and brand growth. Demonstrates strong analytical skills and creative strategy. Recommended for marketing strategy interview.",
    },
    {
      id: 7,
      name: "James_Miller_Resume.pdf",
      candidate: "James Miller",
      role: "Senior Frontend Developer",
      score: 0,
      status: "pending",
      skills: ["React", "Vue.js", "TypeScript", "CSS3", "Web Accessibility", "Performance"],
      experience: "6 years",
      education: "BS Software Engineering",
      highlights: ["Improved page load speed by 50%", "Implemented accessibility standards", "Mentored 3 junior developers"],
      match: 0,
      aiAnalysis: "Experienced frontend developer with expertise in modern frameworks and accessibility. Shows strong leadership in technical decisions and team mentoring. Recommended for senior technical interview.",
    },
    {
      id: 8,
      name: "Rachel_Green_Resume.pdf",
      candidate: "Rachel Green",
      role: "UX Designer",
      score: 0,
      status: "pending",
      skills: ["Figma", "Sketch", "User Research", "Prototyping", "Mobile Design", "Design Systems"],
      experience: "3 years",
      education: "BFA Graphic Design",
      highlights: ["Reduced user errors by 30%", "Created mobile-first design system", "Conducted 50+ user interviews"],
      match: 0,
      aiAnalysis: "UX designer with focus on mobile-first design and user research. Demonstrates strong empathy for users and data-driven design decisions. Recommended for design portfolio review.",
    }
  ]

  type Resume = typeof resumes[number];
  const [resumeList, setResumeList] = useState<Resume[]>(resumes)

  // Filter resumes based on selection
  const filteredResumes: Resume[] = (() => {
    switch (filterValue) {
      case 'frontend':
        return resumeList.filter(r => r.role.includes('Frontend'));
      case 'product':
        return resumeList.filter(r => r.role.includes('Product'));
      case 'design':
        return resumeList.filter(r => r.role.includes('Design'));
      case 'data':
        return resumeList.filter(r => r.role.includes('Data'));
      case 'pending':
        return resumeList.filter(r => r.status === 'pending');
      case 'analyzed':
        return resumeList.filter(r => r.status === 'analyzed');
      default:
        return resumeList;
    }
  })()


  const handleSelectResume = (id: number) => {
    setSelectedResumes(selectedResumes.includes(id)
      ? selectedResumes.filter(rid => rid !== id)
      : [...selectedResumes, id])
  }

  // Remove the autoplay useEffect and step logic. Instead, animate analysis on click:
  const [analyzingId, setAnalyzingId] = useState<number | null>(null)
  const [analysisProgress, setAnalysisProgress] = useState(0)

  const handleResumeClick = (resume: Resume) => {
    trackEvent('click', 'Recruiter Demo', `Resume Analysis - ${resume.candidate}`, 1)
    
    if (resume.status === "analyzed" || analyzingId !== null) {
      setSelectedResume(resume)
      setShowAnalysis(true)
      // Auto-check the checkbox when displaying resume
      if (!selectedResumes.includes(resume.id)) {
        setSelectedResumes([...selectedResumes, resume.id])
      }
      return
    }
    setAnalyzingId(resume.id)
    setResumeList((prev) => prev.map((r) => r.id === resume.id ? { ...r, status: "uploading" } : r))
    setAnalysisProgress(0)
    // Simulate upload
    setTimeout(() => {
      setResumeList((prev) => prev.map((r) => r.id === resume.id ? { ...r, status: "analyzing" } : r))
      // Simulate analysis
      let progress = 0
      const interval = setInterval(() => {
        progress += 20
        setAnalysisProgress(progress)
        if (progress >= 100) {
          clearInterval(interval)
          // Set unique analysis results
          let analyzedData = {}
          if (resume.id === 1) {
            analyzedData = {
              score: 95,
              skills: ["React", "TypeScript", "Node.js", "AWS"],
              experience: "5 years",
              education: "BS Computer Science",
              highlights: ["Led team of 5 developers", "Increased performance by 40%", "Built scalable architecture"],
              match: 95,
              aiAnalysis: "Strong candidate with excellent technical skills and leadership experience. Demonstrates consistent career growth and relevant project experience. Recommended for technical interview round.",
            }
          } else if (resume.id === 2) {
            analyzedData = {
              score: 88,
              skills: ["Product Strategy", "Agile", "Analytics", "Leadership"],
              experience: "7 years",
              education: "MBA, BS Engineering",
              highlights: ["Launched 3 successful products", "Managed $2M budget", "Cross-functional leadership"],
              match: 88,
              aiAnalysis: "Experienced product manager with a proven track record in launching successful products and managing large budgets. Strong leadership and cross-functional collaboration skills. Recommended for product strategy interview.",
            }
          } else if (resume.id === 3) {
            analyzedData = {
              score: 92,
              skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
              experience: "4 years",
              education: "BFA Design",
              highlights: ["Improved user satisfaction by 35%", "Created design system", "Led user research"],
              match: 92,
              aiAnalysis: "Creative UX designer with a focus on user research and design systems. Demonstrates strong impact on user satisfaction and product usability. Recommended for design portfolio review.",
            }
          } else if (resume.id === 4) {
            analyzedData = {
              score: 87,
              skills: ["Python", "Machine Learning", "SQL", "TensorFlow"],
              experience: "3 years",
              education: "MS Data Science",
              highlights: ["Built ML models", "Improved accuracy by 25%", "Published research"],
              match: 87,
              aiAnalysis: "Data scientist with expertise in machine learning and model development. Shows strong research background and practical implementation skills. Recommended for technical data science interview.",
            }
          } else if (resume.id === 5) {
            analyzedData = {
              score: 89,
              skills: ["Python", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
              experience: "4 years",
              education: "MS Computer Science",
              highlights: ["Built microservices architecture", "Improved API response time by 60%", "Led database optimization project"],
              match: 89,
              aiAnalysis: "Backend developer with strong database design and API development skills. Shows expertise in scalable architecture and performance optimization. Recommended for technical backend interview.",
            }
          } else if (resume.id === 6) {
            analyzedData = {
              score: 91,
              skills: ["Digital Marketing", "Google Analytics", "Facebook Ads", "Content Strategy", "SEO", "CRM"],
              experience: "6 years",
              education: "MBA Marketing",
              highlights: ["Increased conversion rate by 45%", "Managed $500K ad budget", "Launched successful brand campaign"],
              match: 91,
              aiAnalysis: "Marketing professional with proven track record in digital campaigns and brand growth. Demonstrates strong analytical skills and creative strategy. Recommended for marketing strategy interview.",
            }
          } else if (resume.id === 7) {
            analyzedData = {
              score: 93,
              skills: ["React", "Vue.js", "TypeScript", "CSS3", "Web Accessibility", "Performance"],
              experience: "6 years",
              education: "BS Software Engineering",
              highlights: ["Improved page load speed by 50%", "Implemented accessibility standards", "Mentored 3 junior developers"],
              match: 93,
              aiAnalysis: "Experienced frontend developer with expertise in modern frameworks and accessibility. Shows strong leadership in technical decisions and team mentoring. Recommended for senior technical interview.",
            }
          } else if (resume.id === 8) {
            analyzedData = {
              score: 90,
              skills: ["Figma", "Sketch", "User Research", "Prototyping", "Mobile Design", "Design Systems"],
              experience: "3 years",
              education: "BFA Graphic Design",
              highlights: ["Reduced user errors by 30%", "Created mobile-first design system", "Conducted 50+ user interviews"],
              match: 90,
              aiAnalysis: "UX designer with focus on mobile-first design and user research. Demonstrates strong empathy for users and data-driven design decisions. Recommended for design portfolio review.",
            }
          }
          setResumeList((prev) => {
            const updated = prev.map((r) => r.id === resume.id ? { ...r, status: "analyzed", ...analyzedData } : r)
            // Set selectedResume to the updated resume from the new list
            const updatedResume = updated.find((r) => r.id === resume.id) || null
            setSelectedResume(updatedResume)
            return updated
          })
          setAnalyzingId(null)
          setShowAnalysis(true)
          // Auto-check the checkbox when analysis completes and resume is displayed
          if (!selectedResumes.includes(resume.id)) {
            setSelectedResumes([...selectedResumes, resume.id])
          }
        }
      }, 400)
    }, 800)
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden relative">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200 p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-400"></div>
          </div>
                          <span className="text-sm font-medium text-gray-500">Syphon Recruiter - Resume Analysis</span>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => {
              setPlaying(!playing)
              trackEvent('click', 'Recruiter Demo', playing ? 'Pause Demo' : 'Play Demo', 1)
            }} 
            className="text-sm bg-violet-100 text-violet-700 px-2 py-1 rounded"
          >
            {playing ? "Pause Demo" : "Play Demo"}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex h-[600px]">
        {/* Left Panel - Resume List */}
        <div className="w-1/2 border-r border-gray-200 flex flex-col">
          {/* Upload Area */}
          <div className="p-4 border-b border-gray-200 bg-violet-50">
            <div className="border-2 border-dashed border-violet-300 rounded-lg p-6 text-center">
              <Upload className="h-8 w-8 text-violet-600 mx-auto mb-2" />
              <div className="text-sm font-medium text-violet-700 mb-1">Upload Resumes</div>
              <div className="text-xs text-gray-600">Drag & drop or click to upload PDF, DOC files</div>

              {step === 1 && (
                <div className="mt-3">
                  <div className="text-xs text-violet-700 mb-1">Uploading David_Kim_Resume.pdf...</div>
                  <div className="w-full bg-violet-200 rounded-full h-2">
                    <div
                      className="bg-violet-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Controls */}
          <div className="p-3 border-b border-gray-200 flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search resumes..."
                className="w-full pl-8 pr-2 py-1 text-sm border border-gray-200 rounded"
                defaultValue="Search"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 font-medium">Filter:</span>
              <select 
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
                className="text-sm border border-gray-200 rounded px-2 py-1"
              >
                <option value="all">All Resumes</option>
                <option value="frontend">Frontend Developers</option>
                <option value="product">Product Managers</option>
                <option value="design">UX Designers</option>
                <option value="data">Data Scientists</option>
                <option value="pending">Pending Analysis</option>
                <option value="analyzed">Analyzed</option>
              </select>
            </div>
          </div>

          {/* Resume List */}
          <div className="flex-1 overflow-y-auto p-3">
            <div className="space-y-3">
              {filteredResumes.map((resume: Resume) => (
                <motion.div
                  key={resume.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`border rounded-lg p-3 cursor-pointer transition-all ${
                    selectedResume?.id === resume.id
                      ? "border-violet-300 bg-violet-50"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                  onClick={() => handleResumeClick(resume)}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={selectedResumes.includes(resume.id)}
                      onChange={e => { e.stopPropagation(); handleSelectResume(resume.id) }}
                      className="mt-1 mr-2"
                      aria-label={`Select resume for ${resume.candidate}`}
                      onClick={e => e.stopPropagation()}
                    />
                    <div className="mt-1">
                      <FileText className="h-5 w-5 text-violet-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <div className="font-medium text-sm truncate">{resume.candidate}</div>
                        {resume.status === "analyzed" && (
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-500" />
                            <span className="text-sm font-bold text-violet-600">{resume.score}</span>
                          </div>
                        )}
                      </div>
                      <div className="text-xs text-gray-600 mb-2">{resume.role}</div>

                      {resume.status === "uploading" && (
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Clock className="h-3 w-3" />
                          <span>Uploading...</span>
                        </div>
                      )}

                      {resume.status === "analyzing" && (
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-xs text-violet-700">
                            <BrainCircuit className="h-3 w-3 animate-pulse" />
                            <span>AI Analysis in progress...</span>
                          </div>
                          {step === 2 && (
                            <div className="w-full bg-violet-200 rounded-full h-1">
                              <div
                                className="bg-violet-600 h-1 rounded-full transition-all duration-300"
                                style={{ width: `${analysisProgress}%` }}
                              ></div>
                            </div>
                          )}
                        </div>
                      )}

                      {resume.status === "analyzed" && (
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span className="text-xs text-green-700">Analysis Complete</span>
                          <span className="text-xs text-gray-500">• {resume.match}% match</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel - Analysis Details */}
        <div className="w-1/2 flex flex-col">
          {showAnalysis && selectedResume ? (
            <div className="flex-1 overflow-y-auto">
              {/* Header */}
              <div className="p-4 border-b border-gray-200 bg-violet-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{selectedResume.candidate}</h3>
                    <p className="text-sm text-gray-600">{selectedResume.role}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-violet-600">{selectedResume.score}</div>
                      <div className="text-xs text-gray-500">AI Score</div>
                    </div>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <X className="h-4 w-4" onClick={() => setShowAnalysis(false)} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Analysis Content */}
              <div className="p-4 space-y-4">
                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <Briefcase className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                    <div className="text-sm font-medium">{selectedResume.experience}</div>
                    <div className="text-xs text-gray-500">Experience</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <GraduationCap className="h-5 w-5 text-green-600 mx-auto mb-1" />
                    <div className="text-sm font-medium">{selectedResume.education}</div>
                    <div className="text-xs text-gray-500">Education</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3 text-center">
                    <Award className="h-5 w-5 text-purple-600 mx-auto mb-1" />
                    <div className="text-sm font-medium">{selectedResume.match}%</div>
                    <div className="text-xs text-gray-500">Job Match</div>
                  </div>
                </div>

                {/* Skills Analysis */}
                <div>
                  <h4 className="font-medium mb-2">Key Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedResume.skills.map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-violet-100 text-violet-700 text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="font-medium mb-2">Key Highlights</h4>
                  <div className="space-y-2">
                    {selectedResume.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Analysis */}
                <div className="bg-violet-50 border border-violet-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <BrainCircuit className="h-4 w-4 text-violet-600" />
                    <span className="font-medium text-violet-700">AI Analysis</span>
                  </div>
                  <p className="text-sm text-gray-700">{selectedResume.aiAnalysis}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <button className="flex-1 bg-violet-600 text-white py-2 px-3 rounded text-sm hover:bg-violet-700">
                    Schedule Interview
                  </button>
                  <button className="flex items-center gap-1 px-3 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50">
                    <Eye className="h-3 w-3" />
                    View Resume
                  </button>
                  <button className="flex items-center gap-1 px-3 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50">
                    <Download className="h-3 w-3" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500">
              <div className="text-center">
                <FileText className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                <div className="text-sm">Select a resume to view AI analysis</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-gray-50 border-t border-gray-200 p-3">
        <div className="text-center text-sm text-gray-600">
          {step === 0 && "Ready to analyze resumes..."}
          {step === 1 && "Uploading new resume..."}
          {step === 2 && "AI analyzing resume content and skills..."}
          {step === 3 && "Analysis complete! Resume scored and categorized."}
          {step === 4 && "Viewing detailed AI analysis and recommendations."}
        </div>
      </div>
      <MobileDisclaimer />
    </div>
  )
}
