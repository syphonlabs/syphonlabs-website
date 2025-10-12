"use client"

import { useState } from "react"
import {
  User,
  FileText,
  Clock,
  CheckCircle,
  Calendar,
  MessageSquare,
  ChevronRight,
  Mail,
  Phone,
  Upload,
  Edit,
  Briefcase,
  Award,
  Star,
  BrainCircuit,
  ArrowRight,
  Search,
  Filter,
  Bell,
  Settings,
  LogOut,
  MapPin,
} from "lucide-react"

export default function ApplicantPortal() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [selectedApplication, setSelectedApplication] = useState(null)

  // Mock data
  const user = {
    name: "Alex Morgan",
    email: "alex.morgan@example.com",
    phone: "+1 (555) 987-6543",
    location: "Seattle, WA",
    title: "Senior Software Engineer",
    avatar: "/placeholder.svg?height=40&width=40",
  }

  const applications = [
    {
      id: 1,
      company: "TechCorp Inc.",
      position: "Senior Frontend Developer",
      location: "Remote",
      salary: "$120,000 - $150,000",
      status: "Interview",
      progress: 60,
      applied: "2 weeks ago",
      upcoming: {
        type: "Technical Interview",
        date: "Tomorrow, 2:00 PM",
      },
      stages: [
        { name: "Application", status: "completed", date: "May 5, 2023" },
        { name: "Screening", status: "completed", date: "May 12, 2023" },
        { name: "Technical Test", status: "completed", date: "May 18, 2023" },
        { name: "Technical Interview", status: "upcoming", date: "May 24, 2023" },
        { name: "Final Interview", status: "pending", date: null },
        { name: "Offer", status: "pending", date: null },
      ],
      feedback: [
        {
          stage: "Screening",
          rating: 4,
          comment: "Strong communication skills and relevant experience. Moving forward to technical assessment.",
        },
        {
          stage: "Technical Test",
          rating: 5,
          comment:
            "Excellent performance on the coding challenge. Demonstrated strong problem-solving skills and clean code.",
        },
      ],
      notes: "Prepare for system design questions and review React performance optimization techniques.",
    },
    {
      id: 2,
      company: "InnovateSoft",
      position: "Full Stack Developer",
      location: "San Francisco, CA (Hybrid)",
      salary: "$130,000 - $160,000",
      status: "Assessment",
      progress: 40,
      applied: "1 week ago",
      upcoming: {
        type: "Coding Challenge",
        date: "Due in 3 days",
      },
      stages: [
        { name: "Application", status: "completed", date: "May 12, 2023" },
        { name: "Screening", status: "completed", date: "May 18, 2023" },
        { name: "Technical Assessment", status: "upcoming", date: "Due May 25, 2023" },
        { name: "Technical Interview", status: "pending", date: null },
        { name: "Final Interview", status: "pending", date: null },
        { name: "Offer", status: "pending", date: null },
      ],
      feedback: [
        {
          stage: "Screening",
          rating: 4,
          comment: "Good cultural fit and technical background. Moving to the technical assessment stage.",
        },
      ],
      notes: "Focus on full-stack architecture and database design for the assessment.",
    },
    {
      id: 3,
      company: "DataViz Solutions",
      position: "Frontend Engineer",
      location: "New York, NY",
      salary: "$110,000 - $135,000",
      status: "Applied",
      progress: 20,
      applied: "3 days ago",
      upcoming: {
        type: "Screening Call",
        date: "Pending",
      },
      stages: [
        { name: "Application", status: "completed", date: "May 20, 2023" },
        { name: "Screening", status: "pending", date: null },
        { name: "Technical Assessment", status: "pending", date: null },
        { name: "Technical Interview", status: "pending", date: null },
        { name: "Final Interview", status: "pending", date: null },
        { name: "Offer", status: "pending", date: null },
      ],
      feedback: [],
      notes: "Research company's visualization products and prepare portfolio examples.",
    },
  ]

  const recommendedJobs = [
    {
      id: 101,
      company: "CloudTech Solutions",
      position: "Senior React Developer",
      location: "Remote",
      salary: "$125,000 - $155,000",
      match: 95,
      posted: "2 days ago",
      description:
        "Looking for an experienced React developer to join our cloud infrastructure team. Work on cutting-edge projects with modern technologies.",
    },
    {
      id: 102,
      company: "FinTech Innovations",
      position: "Frontend Architect",
      location: "Boston, MA (Remote)",
      salary: "$140,000 - $170,000",
      match: 92,
      posted: "1 week ago",
      description:
        "Join our team to architect and build next-generation financial applications with React, TypeScript, and GraphQL.",
    },
    {
      id: 103,
      company: "HealthTech Connect",
      position: "UI/UX Developer",
      location: "Remote",
      salary: "$115,000 - $140,000",
      match: 88,
      posted: "3 days ago",
      description:
        "Create intuitive and accessible user interfaces for healthcare applications. Strong focus on user experience and performance.",
    },
  ]

  const skills = [
    { name: "React", level: "Expert", endorsements: 12 },
    { name: "TypeScript", level: "Advanced", endorsements: 9 },
    { name: "Node.js", level: "Intermediate", endorsements: 7 },
    { name: "GraphQL", level: "Advanced", endorsements: 8 },
    { name: "AWS", level: "Intermediate", endorsements: 5 },
  ]

  const handleApplicationClick = (application) => {
    setSelectedApplication(application)
    setActiveTab("application")
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200 p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-400"></div>
          </div>
                          <span className="text-sm font-medium text-gray-500">Syphon Recruiter - Applicant Portal</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
            <Bell className="h-5 w-5" />
          </button>
          <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
            <Settings className="h-5 w-5" />
          </button>
          <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex h-[600px]">
        {/* Sidebar */}
        <div className="w-64 border-r border-gray-200 flex flex-col">
          {/* User Profile */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-full bg-violet-100 flex items-center justify-center">
                <User className="h-5 w-5 text-violet-600" />
              </div>
              <div>
                <div className="font-medium">{user.name}</div>
                <div className="text-xs text-gray-500">{user.title}</div>
              </div>
            </div>
            <div className="text-xs text-gray-500 space-y-1">
              <div className="flex items-center gap-1">
                <Mail className="h-3 w-3" />
                <span>{user.email}</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="h-3 w-3" />
                <span>{user.phone}</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-2">
              <button
                onClick={() => setActiveTab("dashboard")}
                className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                  activeTab === "dashboard"
                    ? "bg-violet-100 text-violet-700 font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Briefcase className="h-4 w-4" />
                <span>Dashboard</span>
              </button>
              <button
                onClick={() => setActiveTab("applications")}
                className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                  activeTab === "applications" || activeTab === "application"
                    ? "bg-violet-100 text-violet-700 font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <FileText className="h-4 w-4" />
                <span>My Applications</span>
              </button>
              <button
                onClick={() => setActiveTab("jobs")}
                className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                  activeTab === "jobs" ? "bg-violet-100 text-violet-700 font-medium" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Search className="h-4 w-4" />
                <span>Find Jobs</span>
              </button>
              <button
                onClick={() => setActiveTab("profile")}
                className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                  activeTab === "profile"
                    ? "bg-violet-100 text-violet-700 font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <User className="h-4 w-4" />
                <span>My Profile</span>
              </button>
              <button
                onClick={() => setActiveTab("interviews")}
                className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                  activeTab === "interviews"
                    ? "bg-violet-100 text-violet-700 font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Calendar className="h-4 w-4" />
                <span>Interviews</span>
              </button>
              <button
                onClick={() => setActiveTab("messages")}
                className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                  activeTab === "messages"
                    ? "bg-violet-100 text-violet-700 font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <MessageSquare className="h-4 w-4" />
                <span>Messages</span>
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="p-4 border-t border-gray-200">
            <button className="w-full bg-violet-600 text-white rounded-lg py-2 text-sm font-medium">
              Upload Resume
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === "dashboard" && (
            <div className="p-6">
              <h2 className="text-xl font-bold mb-6">Dashboard</h2>

              {/* Application Summary */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-violet-50 border border-violet-100 rounded-lg p-4">
                  <div className="text-sm text-violet-600 mb-1">Active Applications</div>
                  <div className="text-2xl font-bold">{applications.length}</div>
                </div>
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                  <div className="text-sm text-blue-600 mb-1">Upcoming Interviews</div>
                  <div className="text-2xl font-bold">2</div>
                </div>
                <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                  <div className="text-sm text-green-600 mb-1">Job Match Score</div>
                  <div className="text-2xl font-bold">92%</div>
                </div>
              </div>

              {/* Upcoming Activities */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">Upcoming Activities</h3>
                <div className="space-y-3">
                  <div className="border border-gray-200 rounded-lg p-3 bg-white">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium">Technical Interview</div>
                      <div className="text-sm text-violet-600">Tomorrow, 2:00 PM</div>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">TechCorp Inc. - Senior Frontend Developer</div>
                    <div className="flex items-center gap-2">
                      <button className="text-xs bg-violet-100 text-violet-700 px-2 py-1 rounded">
                        Prepare for Interview
                      </button>
                      <button className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Reschedule</button>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-3 bg-white">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium">Coding Challenge Due</div>
                      <div className="text-sm text-amber-600">3 days left</div>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">InnovateSoft - Full Stack Developer</div>
                    <div className="flex items-center gap-2">
                      <button className="text-xs bg-violet-100 text-violet-700 px-2 py-1 rounded">
                        Start Challenge
                      </button>
                      <button className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">View Details</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Applications */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-medium">Recent Applications</h3>
                  <button
                    onClick={() => setActiveTab("applications")}
                    className="text-sm text-violet-600 flex items-center"
                  >
                    View All
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
                <div className="space-y-3">
                  {applications.slice(0, 2).map((application) => (
                    <div
                      key={application.id}
                      className="border border-gray-200 rounded-lg p-3 bg-white hover:border-violet-200 hover:bg-violet-50 cursor-pointer transition-all"
                      onClick={() => handleApplicationClick(application)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium">{application.position}</div>
                        <div
                          className={`text-xs px-2 py-1 rounded ${
                            application.status === "Interview"
                              ? "bg-green-100 text-green-700"
                              : application.status === "Assessment"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {application.status}
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 mb-2">{application.company}</div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                        <div
                          className="bg-violet-600 h-1.5 rounded-full"
                          style={{ width: `${application.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div>Applied {application.applied}</div>
                        <div>
                          {application.upcoming.type}: {application.upcoming.date}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Jobs */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-medium">Recommended for You</h3>
                  <button onClick={() => setActiveTab("jobs")} className="text-sm text-violet-600 flex items-center">
                    View All
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
                <div className="space-y-3">
                  {recommendedJobs.slice(0, 2).map((job) => (
                    <div
                      key={job.id}
                      className="border border-gray-200 rounded-lg p-3 bg-white hover:border-violet-200 hover:bg-violet-50 cursor-pointer transition-all"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium">{job.position}</div>
                        <div className="flex items-center gap-1 text-xs bg-violet-100 text-violet-700 px-2 py-1 rounded">
                          <Star className="h-3 w-3" />
                          <span>{job.match}% Match</span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 mb-2">{job.company}</div>
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="h-3 w-3" />
                          <span>{job.salary}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>Posted {job.posted}</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 mb-2 line-clamp-2">{job.description}</p>
                      <button className="text-xs bg-violet-600 text-white px-3 py-1.5 rounded">Apply Now</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "applications" && (
            <div className="p-6">
              <h2 className="text-xl font-bold mb-6">My Applications</h2>

              {/* Filters */}
              <div className="flex items-center gap-3 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search applications..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
                <button className="flex items-center gap-1 text-sm border border-gray-300 px-3 py-2 rounded-lg">
                  <Filter className="h-4 w-4" />
                  Filter
                </button>
                <select className="text-sm border border-gray-300 px-3 py-2 rounded-lg">
                  <option>All Statuses</option>
                  <option>Applied</option>
                  <option>Assessment</option>
                  <option>Interview</option>
                  <option>Offer</option>
                  <option>Rejected</option>
                </select>
              </div>

              {/* Applications List */}
              <div className="space-y-4">
                {applications.map((application) => (
                  <div
                    key={application.id}
                    className="border border-gray-200 rounded-lg p-4 bg-white hover:border-violet-200 hover:bg-violet-50 cursor-pointer transition-all"
                    onClick={() => handleApplicationClick(application)}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="font-medium text-lg">{application.position}</div>
                        <div className="text-gray-600">{application.company}</div>
                      </div>
                      <div
                        className={`text-sm px-2 py-1 rounded ${
                          application.status === "Interview"
                            ? "bg-green-100 text-green-700"
                            : application.status === "Assessment"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {application.status}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{application.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        <span>{application.salary}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>Applied {application.applied}</span>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span>Application Progress</span>
                        <span>{application.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-violet-600 h-2 rounded-full"
                          style={{ width: `${application.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="font-medium">Next Step: </span>
                        <span>{application.upcoming.type}</span>
                        {application.upcoming.date !== "Pending" && (
                          <span className="text-violet-600"> ({application.upcoming.date})</span>
                        )}
                      </div>
                      <button className="text-sm text-violet-600 flex items-center">
                        View Details
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "application" && selectedApplication && (
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <button onClick={() => setActiveTab("applications")}>Applications</button>
                <ChevronRight className="h-4 w-4" />
                <span className="text-gray-900">{selectedApplication.company}</span>
              </div>

              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold">{selectedApplication.position}</h2>
                  <div className="text-lg text-gray-600">{selectedApplication.company}</div>
                </div>
                <div
                  className={`text-sm px-3 py-1.5 rounded-full ${
                    selectedApplication.status === "Interview"
                      ? "bg-green-100 text-green-700"
                      : selectedApplication.status === "Assessment"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {selectedApplication.status}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="border border-gray-200 rounded-lg p-3">
                  <div className="text-sm text-gray-500 mb-1">Location</div>
                  <div className="font-medium">{selectedApplication.location}</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-3">
                  <div className="text-sm text-gray-500 mb-1">Salary Range</div>
                  <div className="font-medium">{selectedApplication.salary}</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-3">
                  <div className="text-sm text-gray-500 mb-1">Applied On</div>
                  <div className="font-medium">{selectedApplication.applied}</div>
                </div>
              </div>

              {/* Application Timeline */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-4">Application Timeline</h3>
                <div className="relative">
                  <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                  <div className="space-y-6">
                    {selectedApplication.stages.map((stage, index) => (
                      <div key={index} className="relative pl-10">
                        <div
                          className={`absolute left-0 w-6 h-6 rounded-full flex items-center justify-center ${
                            stage.status === "completed"
                              ? "bg-green-500 text-white"
                              : stage.status === "upcoming"
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200"
                          }`}
                        >
                          {stage.status === "completed" ? (
                            <CheckCircle className="h-4 w-4" />
                          ) : stage.status === "upcoming" ? (
                            <Clock className="h-4 w-4" />
                          ) : (
                            <div className="h-2 w-2 rounded-full bg-gray-400"></div>
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <div className="font-medium">{stage.name}</div>
                            {stage.status === "completed" && (
                              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">Completed</span>
                            )}
                            {stage.status === "upcoming" && (
                              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Upcoming</span>
                            )}
                          </div>
                          {stage.date && <div className="text-sm text-gray-500">{stage.date}</div>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Feedback */}
              {selectedApplication.feedback.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-4">Feedback</h3>
                  <div className="space-y-3">
                    {selectedApplication.feedback.map((feedback, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-medium">{feedback.stage}</div>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < feedback.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">{feedback.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Notes & Preparation */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-4">Notes & Preparation</h3>
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <BrainCircuit className="h-5 w-5 text-violet-600 mt-0.5" />
                    <div>
                      <div className="font-medium text-violet-700 mb-1">AI Preparation Tips</div>
                      <p className="text-sm text-gray-700 mb-3">{selectedApplication.notes}</p>
                      <div className="flex items-center gap-2">
                        <button className="text-xs bg-violet-100 text-violet-700 px-2 py-1 rounded">
                          Practice Interview Questions
                        </button>
                        <button className="text-xs bg-violet-100 text-violet-700 px-2 py-1 rounded">
                          Company Research
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 bg-violet-600 text-white py-2 rounded-lg text-sm font-medium">
                  Prepare for Next Step
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm">Contact Recruiter</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm">Withdraw Application</button>
              </div>
            </div>
          )}

          {activeTab === "profile" && (
            <div className="p-6">
              <h2 className="text-xl font-bold mb-6">My Profile</h2>

              {/* Profile Summary */}
              <div className="border border-gray-200 rounded-lg p-4 mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="h-16 w-16 rounded-full bg-violet-100 flex items-center justify-center">
                      <User className="h-8 w-8 text-violet-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">{user.name}</h3>
                      <div className="text-gray-600">{user.title}</div>
                      <div className="text-sm text-gray-500 mt-1">{user.location}</div>
                    </div>
                  </div>
                  <button className="flex items-center gap-1 text-sm bg-violet-100 text-violet-700 px-3 py-1 rounded">
                    <Edit className="h-4 w-4" />
                    Edit Profile
                  </button>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <button className="flex items-center gap-1 text-sm bg-violet-100 text-violet-700 px-3 py-1 rounded">
                    <FileText className="h-4 w-4" />
                    View Resume
                  </button>
                  <button className="flex items-center gap-1 text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded">
                    <Upload className="h-4 w-4" />
                    Update Resume
                  </button>
                </div>

                <div className="text-sm text-gray-600">
                  <p>
                    Experienced software engineer with 5+ years of expertise in frontend development. Passionate about
                    creating intuitive user interfaces and optimizing application performance.
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Skills</h3>
                  <button className="text-sm text-violet-600">Edit Skills</button>
                </div>
                <div className="space-y-3">
                  {skills.map((skill, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium">{skill.name}</div>
                        <div className="text-sm text-gray-500">{skill.level}</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Award className="h-3 w-3" />
                          <span>{skill.endorsements} endorsements</span>
                        </div>
                        <div className="flex">
                          {[...Array(3)].map((_, i) => (
                            <div
                              key={i}
                              className="h-6 w-6 rounded-full bg-gray-200 -ml-2 first:ml-0 flex items-center justify-center text-xs"
                            >
                              {String.fromCharCode(65 + i)}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Job Preferences */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Job Preferences</h3>
                  <button className="text-sm text-violet-600">Edit Preferences</button>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Job Titles</div>
                      <div className="font-medium">Frontend Developer, UI Engineer, React Developer</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Job Types</div>
                      <div className="font-medium">Full-time, Contract</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Locations</div>
                      <div className="font-medium">Remote, Seattle, San Francisco</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Salary Expectation</div>
                      <div className="font-medium">$120,000 - $150,000</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Career Insights */}
              <div className="bg-violet-50 border border-violet-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <BrainCircuit className="h-5 w-5 text-violet-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-violet-700 mb-1">AI Career Insights</div>
                    <p className="text-sm text-gray-700 mb-3">
                      Based on your profile and current market trends, here are some insights to enhance your job
                      search:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-violet-600 mt-0.5 flex-shrink-0" />
                        <span>
                          Adding TypeScript and GraphQL to your profile has increased your match rate by 35% for senior
                          roles.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-violet-600 mt-0.5 flex-shrink-0" />
                        <span>
                          Consider highlighting your experience with performance optimization to stand out from other
                          candidates.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-violet-600 mt-0.5 flex-shrink-0" />
                        <span>
                          Remote frontend roles have seen a 15% increase in salary ranges in the past 3 months.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "jobs" && (
            <div className="p-6">
              <h2 className="text-xl font-bold mb-6">Find Jobs</h2>

              {/* Search and Filters */}
              <div className="flex items-center gap-3 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Job title, keywords, or company"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
                <div className="relative w-48">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
                <button className="bg-violet-600 text-white px-4 py-2 rounded-lg text-sm">Search</button>
              </div>

              {/* AI Job Matches */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <BrainCircuit className="h-5 w-5 text-violet-600" />
                  <h3 className="text-lg font-medium">AI-Matched Jobs for You</h3>
                </div>
                <div className="space-y-4">
                  {recommendedJobs.map((job) => (
                    <div key={job.id} className="border border-gray-200 rounded-lg p-4 bg-white">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="font-medium text-lg">{job.position}</div>
                          <div className="text-gray-600">{job.company}</div>
                        </div>
                        <div className="flex items-center gap-1 text-sm bg-violet-100 text-violet-700 px-2 py-1 rounded">
                          <Star className="h-4 w-4" />
                          <span>{job.match}% Match</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          <span>{job.salary}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>Posted {job.posted}</span>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 mb-4">{job.description}</p>

                      <div className="flex items-center gap-3">
                        <button className="bg-violet-600 text-white px-4 py-2 rounded text-sm">Apply Now</button>
                        <button className="border border-gray-300 px-4 py-2 rounded text-sm">Save Job</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
