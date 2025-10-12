"use client"

import { useState, useMemo } from "react"
import {
  Users,
  User,
  MessageSquare,
  Star,
  CheckCircle,
  ThumbsUp,
  ThumbsDown,
  Send,
  Calendar,
  Clock,
  FileText,
  Edit,
  Trash,
  Plus,
  Filter,
  Search,
  ChevronDown,
  ChevronUp,
  BrainCircuit,
} from "lucide-react"
import MobileDisclaimer from "@/components/mobile-disclaimer"

export default function TeamCollaborationTool() {
  const [activeTab, setActiveTab] = useState("candidates")
  const [selectedCandidate, setSelectedCandidate] = useState(null)
  const [expandedSection, setExpandedSection] = useState("feedback")
  const [newComment, setNewComment] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [positionFilter, setPositionFilter] = useState("All Positions")
  const [stageFilter, setStageFilter] = useState("All Stages")
  

  // Mock data
  const team = [
    { id: 1, name: "John Smith", role: "Hiring Manager", avatar: "/placeholder.svg?height=32&width=32" },
    { id: 2, name: "Lisa Wang", role: "Technical Interviewer", avatar: "/placeholder.svg?height=32&width=32" },
    { id: 3, name: "Mark Davis", role: "HR Recruiter", avatar: "/placeholder.svg?height=32&width=32" },
    { id: 4, name: "Sarah Johnson", role: "Department Head", avatar: "/placeholder.svg?height=32&width=32" },
  ]

  const candidates = [
    {
      id: 1,
      name: "Michael Chen",
      role: "Senior Frontend Developer",
      status: "Interview",
      score: 88,
      stage: "Technical Interview",
      lastActivity: "2 days ago",
      votes: { up: 2, down: 1 },
      feedback: [
        {
          id: 101,
          user: "John Smith",
          role: "Hiring Manager",
          type: "Technical Interview",
          rating: 4,
          comment:
            "Strong technical skills, especially in system design. Good understanding of React performance optimization.",
          date: "May 18, 2023",
          avatar: "/placeholder.svg?height=32&width=32",
        },
        {
          id: 102,
          user: "Lisa Wang",
          role: "Technical Interviewer",
          type: "Coding Challenge",
          rating: 5,
          comment:
            "Excellent problem-solving skills. Code was clean, well-structured, and included comprehensive tests.",
          date: "May 15, 2023",
          avatar: "/placeholder.svg?height=32&width=32",
        },
        {
          id: 103,
          user: "Mark Davis",
          role: "HR Recruiter",
          type: "Initial Screening",
          rating: 3,
          comment:
            "Good communication skills but seemed hesitant about relocation. Salary expectations are within our range.",
          date: "May 10, 2023",
          avatar: "/placeholder.svg?height=32&width=32",
        },
      ],
      schedule: [
        {
          id: 201,
          type: "Final Interview",
          with: "Sarah Johnson",
          date: "May 25, 2023",
          time: "10:00 AM - 11:00 AM",
          status: "scheduled",
        },
      ],
      notes: [
        {
          id: 301,
          user: "Mark Davis",
          content: "Candidate is also interviewing with two other companies. We should expedite our process.",
          date: "May 19, 2023",
          avatar: "/placeholder.svg?height=32&width=32",
        },
      ],
    },
    {
      id: 2,
      name: "Emily Rodriguez",
      role: "UX Designer",
      status: "Assessment",
      score: 92,
      stage: "Design Challenge",
      lastActivity: "1 day ago",
      votes: { up: 3, down: 0 },
      feedback: [
        {
          id: 104,
          user: "Sarah Johnson",
          role: "Department Head",
          type: "Portfolio Review",
          rating: 5,
          comment:
            "Exceptional portfolio with strong UX case studies. Demonstrates clear thinking and user-centered approach.",
          date: "May 17, 2023",
          avatar: "/placeholder.svg?height=32&width=32",
        },
        {
          id: 105,
          user: "Mark Davis",
          role: "HR Recruiter",
          type: "Initial Screening",
          rating: 4,
          comment:
            "Great communication skills and enthusiasm for the role. Previous experience aligns well with our needs.",
          date: "May 12, 2023",
          avatar: "/placeholder.svg?height=32&width=32",
        },
      ],
      schedule: [
        {
          id: 202,
          type: "Design Challenge Review",
          with: "Sarah Johnson",
          date: "May 24, 2023",
          time: "2:00 PM - 3:00 PM",
          status: "scheduled",
        },
      ],
      notes: [
        {
          id: 302,
          user: "Sarah Johnson",
          content: "Candidate has excellent experience with design systems. Would be a great fit for our team.",
          date: "May 18, 2023",
          avatar: "/placeholder.svg?height=32&width=32",
        },
      ],
    },
    {
      id: 3,
      name: "David Kim",
      role: "Data Scientist",
      status: "Offer",
      score: 87,
      stage: "Offer Preparation",
      lastActivity: "3 days ago",
      votes: { up: 4, down: 0 },
      feedback: [
        {
          id: 106,
          user: "John Smith",
          role: "Hiring Manager",
          type: "Technical Interview",
          rating: 4,
          comment:
            "Strong technical skills in machine learning and data analysis. Good understanding of our business domain.",
          date: "May 15, 2023",
          avatar: "/placeholder.svg?height=32&width=32",
        },
        {
          id: 107,
          user: "Lisa Wang",
          role: "Technical Interviewer",
          type: "Technical Assessment",
          rating: 4,
          comment: "Solid performance on the technical assessment. Good approach to problem-solving.",
          date: "May 12, 2023",
          avatar: "/placeholder.svg?height=32&width=32",
        },
        {
          id: 108,
          user: "Mark Davis",
          role: "HR Recruiter",
          type: "Initial Screening",
          rating: 5,
          comment: "Excellent communication skills and cultural fit. Enthusiastic about joining our team.",
          date: "May 8, 2023",
          avatar: "/placeholder.svg?height=32&width=32",
        },
      ],
      schedule: [],
      notes: [
        {
          id: 303,
          user: "John Smith",
          content: "Approved for senior level position. Prepare offer with standard equity package.",
          date: "May 20, 2023",
          avatar: "/placeholder.svg?height=32&width=32",
        },
        {
          id: 304,
          user: "Mark Davis",
          content: "Candidate has another offer. We should finalize our decision by end of week.",
          date: "May 19, 2023",
          avatar: "/placeholder.svg?height=32&width=32",
        },
      ],
    },
    {
      id: 4,
      name: "Sarah Johnson",
      role: "Senior Frontend Developer",
      status: "Interview",
      score: 95,
      stage: "Onsite Interview",
      lastActivity: "Today",
      votes: { up: 4, down: 0 },
      feedback: [
        {
          id: 109,
          user: "John Smith",
          role: "Hiring Manager",
          type: "Technical Interview",
          rating: 5,
          comment: "Excellent technical leader with strong React/TS depth.",
          date: "May 21, 2023",
          avatar: "/placeholder.svg?height=32&width=32",
        },
      ],
      schedule: [
        {
          id: 205,
          type: "Onsite Loop",
          with: "Panel",
          date: "May 26, 2023",
          time: "9:00 AM - 12:00 PM",
          status: "scheduled",
        },
      ],
      notes: [
        {
          id: 305,
          user: "Mark Davis",
          content: "Top pick for the team. Strong leadership potential.",
          date: "May 21, 2023",
          avatar: "/placeholder.svg?height=32&width=32",
        },
      ],
    },
    {
      id: 5,
      name: "Alex Turner",
      role: "Backend Developer",
      status: "Interview",
      score: 89,
      stage: "System Design",
      lastActivity: "Today",
      votes: { up: 3, down: 0 },
      feedback: [],
      schedule: [],
      notes: [],
    },
    {
      id: 6,
      name: "Lisa Wang",
      role: "Marketing Manager",
      status: "Screening",
      score: 91,
      stage: "Recruiter Screen",
      lastActivity: "Yesterday",
      votes: { up: 2, down: 0 },
      feedback: [],
      schedule: [],
      notes: [],
    },
    {
      id: 7,
      name: "James Miller",
      role: "Senior Frontend Developer",
      status: "Assessment",
      score: 93,
      stage: "Coding Exercise",
      lastActivity: "2 days ago",
      votes: { up: 4, down: 0 },
      feedback: [],
      schedule: [],
      notes: [],
    },
    {
      id: 8,
      name: "Rachel Green",
      role: "UX Designer",
      status: "Interview",
      score: 90,
      stage: "Portfolio Review",
      lastActivity: "Today",
      votes: { up: 3, down: 0 },
      feedback: [],
      schedule: [],
      notes: [],
    },
  ]

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const handleCandidateSelect = (candidate) => {
    setSelectedCandidate(candidate)
  }

  const handleAddComment = () => {
    if (newComment.trim() && selectedCandidate) {
      // In a real app, this would be an API call
      console.log("Adding comment:", newComment)
      setNewComment("")
    }
  }

  // Derived filtered list
  const filteredCandidates = useMemo(() => {
    return candidates.filter((candidate) => {
      const matchesSearch = searchQuery
        ? `${candidate.name} ${candidate.role}`.toLowerCase().includes(searchQuery.toLowerCase())
        : true

      const matchesPosition =
        positionFilter === "All Positions" || candidate.role.toLowerCase().includes(positionFilter.toLowerCase())

      const matchesStage =
        stageFilter === "All Stages" || candidate.status.toLowerCase() === stageFilter.toLowerCase()

      return matchesSearch && matchesPosition && matchesStage
    })
  }, [candidates, searchQuery, positionFilter, stageFilter])

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
                          <span className="text-sm font-medium text-gray-500">Syphon Recruiter - Team Collaboration</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {team.map((member) => (
              <div
                key={member.id}
                className="h-8 w-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-medium"
                title={`${member.name} (${member.role})`}
              >
                {member.name.charAt(0)}
              </div>
            ))}
          </div>
          <button className="flex items-center justify-center h-8 w-8 rounded-full border-2 border-white bg-violet-100 text-violet-700">
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex h-[600px]">
        {/* Left Panel - Candidates List */}
        <div className="w-1/3 border-r border-gray-200 flex flex-col">
          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <button
              className={`flex-1 px-4 py-3 text-sm font-medium ${
                activeTab === "candidates"
                  ? "text-violet-700 border-b-2 border-violet-700"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("candidates")}
            >
              <div className="flex items-center justify-center gap-1">
                <Users className="h-4 w-4" />
                <span>Candidates</span>
              </div>
            </button>
            <button
              className={`flex-1 px-4 py-3 text-sm font-medium ${
                activeTab === "schedule"
                  ? "text-violet-700 border-b-2 border-violet-700"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("schedule")}
            >
              <div className="flex items-center justify-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Schedule</span>
              </div>
            </button>
            <button
              className={`flex-1 px-4 py-3 text-sm font-medium ${
                activeTab === "tasks"
                  ? "text-violet-700 border-b-2 border-violet-700"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("tasks")}
            >
              <div className="flex items-center justify-center gap-1">
                <CheckCircle className="h-4 w-4" />
                <span>Tasks</span>
              </div>
            </button>
          </div>

          {/* Search and Filters */}
          <div className="p-3 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search candidates..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 mt-2">
              <select
                className="text-xs border border-gray-300 rounded px-2 py-1 flex-1"
                value={positionFilter}
                onChange={(e) => setPositionFilter(e.target.value)}
              >
                <option>All Positions</option>
                <option>Frontend Developer</option>
                <option>Senior Frontend Developer</option>
                <option>Backend Developer</option>
                <option>UX Designer</option>
                <option>Data Scientist</option>
                <option>Marketing Manager</option>
              </select>
              <select
                className="text-xs border border-gray-300 rounded px-2 py-1 flex-1"
                value={stageFilter}
                onChange={(e) => setStageFilter(e.target.value)}
              >
                <option>All Stages</option>
                <option>Screening</option>
                <option>Assessment</option>
                <option>Interview</option>
                <option>Offer</option>
              </select>
              
            </div>
            
          </div>

          {/* Candidates List */}
          <div className="flex-1 overflow-y-auto">
            {activeTab === "candidates" && (
              <div className="p-3 space-y-3">
                {filteredCandidates.map((candidate) => (
                  <div
                    key={candidate.id}
                    onClick={() => handleCandidateSelect(candidate)}
                    className={`border rounded-lg p-3 cursor-pointer transition-all ${
                      selectedCandidate?.id === candidate.id
                        ? "border-violet-300 bg-violet-50"
                        : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="font-medium">{candidate.name}</div>
                        <div className="text-sm text-gray-600">{candidate.role}</div>
                      </div>
                      <div
                        className={`text-xs px-2 py-0.5 rounded ${
                          candidate.status === "Interview"
                            ? "bg-blue-100 text-blue-700"
                            : candidate.status === "Assessment"
                              ? "bg-yellow-100 text-yellow-700"
                              : candidate.status === "Offer"
                                ? "bg-green-100 text-green-700"
                                : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {candidate.status}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                      <div>Stage: {candidate.stage}</div>
                      <div>Last activity: {candidate.lastActivity}</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-500" />
                        <span className="text-sm font-bold text-violet-600">{candidate.score}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="h-3 w-3 text-green-500" />
                          <span className="text-xs">{candidate.votes.up}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ThumbsDown className="h-3 w-3 text-red-500" />
                          <span className="text-xs">{candidate.votes.down}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "schedule" && (
              <div className="p-3">
                <div className="text-center text-sm text-gray-500 py-4">
                  Schedule view will display team interview calendar and availability
                </div>
              </div>
            )}

            {activeTab === "tasks" && (
              <div className="p-3">
                <div className="text-center text-sm text-gray-500 py-4">
                  Tasks view will display recruitment tasks and assignments
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Panel - Candidate Details */}
        <div className="w-2/3 flex flex-col">
          {selectedCandidate ? (
            <>
              {/* Candidate Header */}
              <div className="p-4 border-b border-gray-200 bg-violet-50">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <User className="h-5 w-5 text-gray-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{selectedCandidate.name}</h3>
                      <div className="text-sm text-gray-600">{selectedCandidate.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className={`text-xs px-2 py-1 rounded ${
                        selectedCandidate.status === "Interview"
                          ? "bg-blue-100 text-blue-700"
                          : selectedCandidate.status === "Assessment"
                            ? "bg-yellow-100 text-yellow-700"
                            : selectedCandidate.status === "Offer"
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {selectedCandidate.status}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="font-bold text-violet-600">{selectedCandidate.score}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button className="text-sm bg-violet-600 text-white px-3 py-1 rounded">Schedule Interview</button>
                  <button className="text-sm border border-gray-300 bg-white px-3 py-1 rounded">View Resume</button>
                  <button className="text-sm border border-gray-300 bg-white px-3 py-1 rounded">Send Email</button>
                  <div className="flex-1"></div>
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1 text-sm text-green-600">
                      <ThumbsUp className="h-4 w-4" />
                      <span>Recommend</span>
                    </button>
                    <button className="flex items-center gap-1 text-sm text-red-600">
                      <ThumbsDown className="h-4 w-4" />
                      <span>Reject</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Candidate Content */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {/* Team Feedback */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div
                    className="flex items-center justify-between p-3 bg-gray-50 cursor-pointer"
                    onClick={() => toggleSection("feedback")}
                  >
                    <h3 className="font-medium flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Team Feedback
                    </h3>
                    {expandedSection === "feedback" ? (
                      <ChevronUp className="h-4 w-4 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-gray-500" />
                    )}
                  </div>
                  {expandedSection === "feedback" && (
                    <div className="p-3 space-y-3">
                      {selectedCandidate.feedback.map((feedback) => (
                        <div key={feedback.id} className="border border-gray-200 rounded-lg p-3">
                          <div className="flex items-start gap-3">
                            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-xs">
                              {feedback.user.charAt(0)}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <div>
                                  <span className="font-medium">{feedback.user}</span>
                                  <span className="text-xs text-gray-500 ml-2">({feedback.role})</span>
                                </div>
                                <div className="flex items-center">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-3 w-3 ${
                                        i < feedback.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                              <div className="text-xs text-violet-600 mb-1">{feedback.type}</div>
                              <p className="text-sm text-gray-700">{feedback.comment}</p>
                              <div className="flex items-center justify-between mt-2">
                                <div className="text-xs text-gray-500">{feedback.date}</div>
                                <div className="flex items-center gap-2">
                                  <button className="text-xs text-gray-500 hover:text-gray-700">
                                    <Edit className="h-3 w-3" />
                                  </button>
                                  <button className="text-xs text-gray-500 hover:text-red-500">
                                    <Trash className="h-3 w-3" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* Add Feedback */}
                      <div className="border border-gray-200 rounded-lg p-3">
                        <div className="flex items-start gap-3">
                          <div className="h-8 w-8 rounded-full bg-violet-100 flex items-center justify-center text-xs text-violet-700">
                            JS
                          </div>
                          <div className="flex-1">
                            <div className="mb-2">
                              <select className="w-full text-sm border border-gray-300 rounded p-2 mb-2">
                                <option>Select feedback type...</option>
                                <option>Technical Interview</option>
                                <option>Cultural Fit</option>
                                <option>Portfolio Review</option>
                                <option>General Feedback</option>
                              </select>
                              <textarea
                                placeholder="Add your feedback..."
                                className="w-full text-sm border border-gray-300 rounded p-2 h-20"
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                              ></textarea>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="h-4 w-4 text-gray-300 cursor-pointer hover:text-yellow-500"
                                  />
                                ))}
                                <span className="text-xs text-gray-500 ml-2">Rate candidate</span>
                              </div>
                              <button
                                onClick={handleAddComment}
                                disabled={!newComment.trim()}
                                className="flex items-center gap-1 text-sm bg-violet-600 text-white px-3 py-1 rounded disabled:opacity-50"
                              >
                                <Send className="h-3 w-3" />
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Interview Schedule */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div
                    className="flex items-center justify-between p-3 bg-gray-50 cursor-pointer"
                    onClick={() => toggleSection("schedule")}
                  >
                    <h3 className="font-medium flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Interview Schedule
                    </h3>
                    {expandedSection === "schedule" ? (
                      <ChevronUp className="h-4 w-4 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-gray-500" />
                    )}
                  </div>
                  {expandedSection === "schedule" && (
                    <div className="p-3">
                      {selectedCandidate.schedule.length > 0 ? (
                        <div className="space-y-3">
                          {selectedCandidate.schedule.map((event) => (
                            <div key={event.id} className="border border-gray-200 rounded-lg p-3">
                              <div className="flex items-center justify-between mb-2">
                                <div className="font-medium">{event.type}</div>
                                <div
                                  className={`text-xs px-2 py-0.5 rounded ${
                                    event.status === "scheduled"
                                      ? "bg-green-100 text-green-700"
                                      : "bg-gray-100 text-gray-700"
                                  }`}
                                >
                                  {event.status === "scheduled" ? "Scheduled" : "Pending"}
                                </div>
                              </div>
                              <div className="flex items-center gap-4 text-sm">
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-4 w-4 text-gray-500" />
                                  <span>{event.date}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="h-4 w-4 text-gray-500" />
                                  <span>{event.time}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <User className="h-4 w-4 text-gray-500" />
                                  <span>with {event.with}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center text-sm text-gray-500 py-4">
                          No interviews scheduled yet.
                          <div className="mt-2">
                            <button className="text-sm bg-violet-600 text-white px-3 py-1 rounded">
                              Schedule Interview
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Team Notes */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div
                    className="flex items-center justify-between p-3 bg-gray-50 cursor-pointer"
                    onClick={() => toggleSection("notes")}
                  >
                    <h3 className="font-medium flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Team Notes
                    </h3>
                    {expandedSection === "notes" ? (
                      <ChevronUp className="h-4 w-4 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-gray-500" />
                    )}
                  </div>
                  {expandedSection === "notes" && (
                    <div className="p-3 space-y-3">
                      {selectedCandidate.notes.map((note) => (
                        <div key={note.id} className="border border-gray-200 rounded-lg p-3">
                          <div className="flex items-start gap-3">
                            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-xs">
                              {note.user.charAt(0)}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <div>
                                  <span className="font-medium">{note.user}</span>
                                </div>
                                <div className="text-xs text-gray-500">{note.date}</div>
                              </div>
                              <p className="text-sm text-gray-700">{note.content}</p>
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* Add Note */}
                      <div className="border border-gray-200 rounded-lg p-3">
                        <div className="flex items-start gap-3">
                          <div className="h-8 w-8 rounded-full bg-violet-100 flex items-center justify-center text-xs text-violet-700">
                            JS
                          </div>
                          <div className="flex-1">
                            <textarea
                              placeholder="Add a note about this candidate..."
                              className="w-full text-sm border border-gray-300 rounded p-2 h-20 mb-2"
                            ></textarea>
                            <div className="flex justify-end">
                              <button className="text-sm bg-violet-600 text-white px-3 py-1 rounded">Add Note</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* AI Insights */}
                <div className="bg-violet-50 border border-violet-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <BrainCircuit className="h-5 w-5 text-violet-600 mt-0.5" />
                    <div>
                      <div className="font-medium text-violet-700 mb-1">AI Insights</div>
                      <p className="text-sm text-gray-700 mb-3">
                        Based on team feedback and candidate performance, here are some insights:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>
                            {selectedCandidate.name} shows strong technical skills that align well with the role
                            requirements.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>
                            Team feedback is generally positive with an average rating of{" "}
                            {(
                              selectedCandidate.feedback.reduce((sum, item) => sum + item.rating, 0) /
                              selectedCandidate.feedback.length
                            ).toFixed(1)}{" "}
                            out of 5.
                          </span>
                        </li>
                        {selectedCandidate.status === "Offer" && (
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>
                              Recommend expediting the offer process as the candidate has competing opportunities.
                            </span>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500">
              <div className="text-center">
                <Users className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                <div className="text-lg font-medium mb-2">No candidate selected</div>
                <div className="text-sm">Select a candidate from the list to view details</div>
              </div>
            </div>
          )}
        </div>
      </div>
      <MobileDisclaimer />
    </div>
  )
}
