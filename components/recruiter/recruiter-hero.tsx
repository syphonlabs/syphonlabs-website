"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Users, BrainCircuit, Calendar, Filter, Star, CheckCircle, Search, BarChart3 } from "lucide-react"

export default function RecruiterHero() {
  const [email, setEmail] = useState("")
  const [activeTab, setActiveTab] = useState("dashboard")
  const [candidateCount, setCandidateCount] = useState(0)
  const [processedCount, setProcessedCount] = useState(0)

  // Animate counters
  useEffect(() => {
    const candidateTimer = setInterval(() => {
      setCandidateCount((prev) => (prev < 247 ? prev + 3 : 247))
    }, 50)

    const processedTimer = setInterval(() => {
      setProcessedCount((prev) => (prev < 89 ? prev + 1 : 89))
    }, 80)

    return () => {
      clearInterval(candidateTimer)
      clearInterval(processedTimer)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setEmail("")
  }

  const candidates = [
    { name: "Sarah Johnson", role: "Senior Developer", score: 95, status: "Shortlisted" },
    { name: "Michael Chen", role: "Product Manager", score: 88, status: "Interview Scheduled" },
    { name: "Emily Rodriguez", role: "UX Designer", score: 92, status: "Under Review" },
    { name: "David Kim", role: "Data Scientist", score: 87, status: "Shortlisted" },
  ]

  return (
  <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                Revolutionize Your Hiring with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Recruiter</span>{" "}
                <span className="text-black">by</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Syphon Labs</span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-lg">
              Automate resume scanning, candidate filtering, and interview scheduling with AI. Find the perfect
              candidates 10x faster while reducing bias and improving hiring quality.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-2 mb-4">
              <div className="flex items-start gap-2">
                <BrainCircuit className="h-5 w-5 text-violet-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">AI Resume Analysis</span>
              </div>
              <div className="flex items-start gap-2">
                <Filter className="h-5 w-5 text-violet-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Smart Candidate Filtering</span>
              </div>
              <div className="flex items-start gap-2">
                <Calendar className="h-5 w-5 text-violet-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Automated Interview Scheduling</span>
              </div>
              <div className="flex items-start gap-2">
                <BarChart3 className="h-5 w-5 text-violet-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Recruitment Analytics</span>
              </div>
              <div className="flex items-start gap-2">
                <Users className="h-5 w-5 text-violet-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Smart Candidate Pipeline & Search</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-violet-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Bias-Free Evaluation</span>
              </div>
            </div>

            {/* Placeholder CTA removed for now */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
              {/* Header */}
              <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center px-4 rounded-t-lg">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="text-sm font-medium text-gray-500">Syphon Recruiter Dashboard</div>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-gray-200">
                <button
                  className={`px-4 py-2 text-sm font-medium ${
                    activeTab === "dashboard"
                      ? "text-violet-700 border-b-2 border-violet-700"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab("dashboard")}
                >
                  <div className="flex items-center gap-1">
                    <BarChart3 className="h-4 w-4" />
                    <span>Dashboard</span>
                  </div>
                </button>
                <button
                  className={`px-4 py-2 text-sm font-medium ${
                    activeTab === "candidates"
                      ? "text-violet-700 border-b-2 border-violet-700"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab("candidates")}
                >
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>Candidates</span>
                  </div>
                </button>
                <button
                  className={`px-4 py-2 text-sm font-medium ${
                    activeTab === "analytics"
                      ? "text-violet-700 border-b-2 border-violet-700"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab("analytics")}
                >
                  <div className="flex items-center gap-1">
                    <BrainCircuit className="h-4 w-4" />
                    <span>AI Insights</span>
                  </div>
                </button>
              </div>

              {/* Content */}
              <div className="h-[400px] overflow-hidden">
                {activeTab === "dashboard" && (
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-violet-50 rounded-lg p-3">
                        <div className="text-2xl font-bold text-violet-700">{candidateCount}</div>
                        <div className="text-sm text-gray-600">Total Applications</div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-3">
                        <div className="text-2xl font-bold text-green-700">{processedCount}</div>
                        <div className="text-sm text-gray-600">AI Processed</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Recent Activity</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>15 new resumes analyzed</span>
                          <span className="text-gray-500">2 min ago</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4 text-blue-500" />
                          <span>Interview scheduled with Sarah J.</span>
                          <span className="text-gray-500">5 min ago</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>3 candidates shortlisted</span>
                          <span className="text-gray-500">10 min ago</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-violet-50 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <BrainCircuit className="h-4 w-4 text-violet-600" />
                        <span className="font-medium text-violet-700">AI Recommendation</span>
                      </div>
                      <p className="text-sm text-gray-700">
                        Based on your hiring patterns, consider scheduling interviews for the top 5 candidates by
                        Friday.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "candidates" && (
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <Search className="h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search candidates..."
                        className="flex-1 text-sm border-none outline-none"
                        readOnly
                      />
                      <Button size="sm" variant="outline" className="text-xs">
                        <Filter className="h-3 w-3 mr-1" />
                        Filter
                      </Button>
                    </div>

                    <div className="space-y-3">
                      {candidates.map((candidate, index) => (
                        <div key={index} className="border rounded-lg p-3 hover:bg-gray-50">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <div className="font-medium">{candidate.name}</div>
                              <div className="text-sm text-gray-500">{candidate.role}</div>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-violet-600">{candidate.score}</div>
                              <div className="text-xs text-gray-500">AI Score</div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span
                              className={`text-xs px-2 py-1 rounded ${
                                candidate.status === "Shortlisted"
                                  ? "bg-green-100 text-green-700"
                                  : candidate.status === "Interview Scheduled"
                                    ? "bg-blue-100 text-blue-700"
                                    : "bg-yellow-100 text-yellow-700"
                              }`}
                            >
                              {candidate.status}
                            </span>
                            <div className="flex gap-1">
                              <Button size="sm" variant="outline" className="text-xs">
                                View
                              </Button>
                              <Button size="sm" className="text-xs bg-violet-600 hover:bg-violet-700">
                                Contact
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "analytics" && (
                  <div className="p-4">
                    <div className="mb-4">
                      <h3 className="font-medium mb-2">AI Performance Metrics</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-blue-50 rounded-lg p-3">
                          <div className="text-lg font-bold text-blue-700">94%</div>
                          <div className="text-xs text-gray-600">Accuracy Rate</div>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3">
                          <div className="text-lg font-bold text-green-700">8.5x</div>
                          <div className="text-xs text-gray-600">Faster Screening</div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Hiring Pipeline</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Applications</span>
                          <span>247</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-violet-600 h-2 rounded-full" style={{ width: "100%" }}></div>
                        </div>

                        <div className="flex justify-between text-sm">
                          <span>Screened</span>
                          <span>89</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-violet-600 h-2 rounded-full" style={{ width: "36%" }}></div>
                        </div>

                        <div className="flex justify-between text-sm">
                          <span>Interviews</span>
                          <span>23</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-violet-600 h-2 rounded-full" style={{ width: "9%" }}></div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-violet-50 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <BrainCircuit className="h-4 w-4 text-violet-600" />
                        <span className="font-medium text-violet-700">AI Insights</span>
                      </div>
                      <p className="text-sm text-gray-700">
                        Your top candidates have 3+ years experience in React and strong problem-solving skills.
                      </p>
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
