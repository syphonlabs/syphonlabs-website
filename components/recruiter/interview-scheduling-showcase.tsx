"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Calendar,
  Clock,
  Video,
  Mail,
  Phone,
  User,
  MapPin,
  CheckCircle,
  X,
  BrainCircuit,
  Send,
  Users,
  Settings,
} from "lucide-react"

export default function InterviewSchedulingShowcase() {
  const [step, setStep] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [selectedCandidate, setSelectedCandidate] = useState(null)
  const [showScheduler, setShowScheduler] = useState(false)
  const [selectedSlot, setSelectedSlot] = useState(null)
  const [scheduledInterviews, setScheduledInterviews] = useState([])

  const candidates = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior Frontend Developer",
      email: "sarah.johnson@email.com",
      phone: "+1 (555) 123-4567",
      timezone: "PST",
      score: 95,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      email: "michael.chen@email.com",
      phone: "+1 (555) 234-5678",
      timezone: "EST",
      score: 88,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "UX Designer",
      email: "emily.rodriguez@email.com",
      phone: "+1 (555) 345-6789",
      timezone: "CST",
      score: 92,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const timeSlots = [
    { id: 1, date: "2024-01-15", time: "10:00 AM", available: true },
    { id: 2, date: "2024-01-15", time: "2:00 PM", available: true },
    { id: 3, date: "2024-01-15", time: "4:00 PM", available: false },
    { id: 4, date: "2024-01-16", time: "9:00 AM", available: true },
    { id: 5, date: "2024-01-16", time: "11:00 AM", available: true },
    { id: 6, date: "2024-01-16", time: "3:00 PM", available: true },
  ]

  const interviewers = [
    { id: 1, name: "John Smith", role: "Engineering Manager", avatar: "/placeholder.svg?height=32&width=32" },
    { id: 2, name: "Lisa Wang", role: "Senior Developer", avatar: "/placeholder.svg?height=32&width=32" },
    { id: 3, name: "Mark Davis", role: "Product Lead", avatar: "/placeholder.svg?height=32&width=32" },
  ]

  // Auto-play demonstration
  useEffect(() => {
    if (!playing) return

    const timer = setTimeout(() => {
      if (step === 0) {
        // Select candidate
        setSelectedCandidate(candidates[0])
        setStep(1)
      } else if (step === 1) {
        // Show scheduler
        setShowScheduler(true)
        setStep(2)
      } else if (step === 2) {
        // Select time slot
        setSelectedSlot(timeSlots[1])
        setStep(3)
      } else if (step === 3) {
        // Schedule interview
        const newInterview = {
          id: Date.now(),
          candidate: selectedCandidate,
          slot: selectedSlot,
          interviewer: interviewers[0],
          type: "video",
          status: "scheduled",
        }
        setScheduledInterviews([newInterview])
        setShowScheduler(false)
        setStep(4)
      } else if (step === 4) {
        // Reset
        setSelectedCandidate(null)
        setShowScheduler(false)
        setSelectedSlot(null)
        setScheduledInterviews([])
        setStep(0)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [step, playing])

  const handlePlayPause = () => {
    setPlaying(!playing)
  }

  const handleScheduleInterview = (candidate) => {
    setSelectedCandidate(candidate)
    setShowScheduler(true)
  }

  const handleSlotSelect = (slot) => {
    if (slot.available) {
      setSelectedSlot(slot)
    }
  }

  const handleConfirmSchedule = () => {
    if (selectedCandidate && selectedSlot) {
      const newInterview = {
        id: Date.now(),
        candidate: selectedCandidate,
        slot: selectedSlot,
        interviewer: interviewers[0],
        type: "video",
        status: "scheduled",
      }
      setScheduledInterviews([...scheduledInterviews, newInterview])
      setShowScheduler(false)
      setSelectedCandidate(null)
      setSelectedSlot(null)
    }
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
                          <span className="text-sm font-medium text-gray-500">Syphon Recruiter - Interview Scheduling</span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={handlePlayPause} className="text-sm bg-violet-100 text-violet-700 px-2 py-1 rounded">
            {playing ? "Pause Demo" : "Play Demo"}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex h-[600px]">
        {/* Left Panel - Candidates */}
        <div className="w-1/3 border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-semibold flex items-center gap-2">
              <Users className="h-5 w-5" />
              Shortlisted Candidates
            </h3>
            <p className="text-sm text-gray-600">Ready for interview scheduling</p>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-3">
              {candidates.map((candidate) => (
                <motion.div
                  key={candidate.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`border rounded-lg p-3 cursor-pointer transition-all ${
                    selectedCandidate?.id === candidate.id
                      ? "border-violet-300 bg-violet-50"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedCandidate(candidate)}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <User className="h-5 w-5 text-gray-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium">{candidate.name}</h4>
                        <div className="flex items-center gap-1">
                          <span className="text-sm font-bold text-violet-600">{candidate.score}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{candidate.role}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Mail className="h-3 w-3" />
                          <span>{candidate.email}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <Clock className="h-3 w-3" />
                        <span>Timezone: {candidate.timezone}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleScheduleInterview(candidate)
                      }}
                      className="flex-1 bg-violet-600 text-white py-1.5 px-3 rounded text-sm hover:bg-violet-700"
                    >
                      Schedule Interview
                    </button>
                    <button className="px-3 py-1.5 border border-gray-300 rounded text-sm hover:bg-gray-50">
                      <Mail className="h-3 w-3" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Panel - Scheduler or Calendar */}
        <div className="w-1/3 border-r border-gray-200 flex flex-col">
          {showScheduler ? (
            <>
              <div className="p-4 border-b border-gray-200 bg-violet-50">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Schedule Interview</h3>
                  <button onClick={() => setShowScheduler(false)}>
                    <X className="h-4 w-4" />
                  </button>
                </div>
                {selectedCandidate && <p className="text-sm text-gray-600">with {selectedCandidate.name}</p>}
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Available Time Slots</h4>
                  <div className="space-y-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.id}
                        onClick={() => handleSlotSelect(slot)}
                        disabled={!slot.available}
                        className={`w-full p-3 rounded-lg border text-left transition-all ${
                          selectedSlot?.id === slot.id
                            ? "border-violet-300 bg-violet-50"
                            : slot.available
                              ? "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                              : "border-gray-200 bg-gray-100 opacity-50 cursor-not-allowed"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-sm">{slot.date}</div>
                            <div className="text-sm text-gray-600">{slot.time}</div>
                          </div>
                          {slot.available ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          ) : (
                            <X className="h-4 w-4 text-red-500" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium mb-2">Interview Type</h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="type" defaultChecked className="text-violet-600" />
                      <Video className="h-4 w-4" />
                      <span className="text-sm">Video Call</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="type" className="text-violet-600" />
                      <Phone className="h-4 w-4" />
                      <span className="text-sm">Phone Call</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="type" className="text-violet-600" />
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">In-Person</span>
                    </label>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium mb-2">Interviewer</h4>
                  <select className="w-full p-2 border border-gray-300 rounded text-sm">
                    {interviewers.map((interviewer) => (
                      <option key={interviewer.id} value={interviewer.id}>
                        {interviewer.name} - {interviewer.role}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={handleConfirmSchedule}
                  disabled={!selectedSlot}
                  className="w-full bg-violet-600 text-white py-2 px-4 rounded hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Confirm Schedule
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Interview Calendar
                </h3>
                <p className="text-sm text-gray-600">Upcoming interviews</p>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                {scheduledInterviews.length > 0 ? (
                  <div className="space-y-3">
                    {scheduledInterviews.map((interview) => (
                      <div key={interview.id} className="border border-green-200 bg-green-50 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{interview.candidate.name}</h4>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                            {interview.status}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-3 w-3" />
                            <span>
                              {interview.slot.date} at {interview.slot.time}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Video className="h-3 w-3" />
                            <span>Video Interview</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <User className="h-3 w-3" />
                            <span>with {interview.interviewer.name}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                    <Calendar className="h-12 w-12 text-gray-300 mb-3" />
                    <div className="text-sm text-center">
                      No interviews scheduled yet.
                      <br />
                      Select a candidate to schedule an interview.
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Right Panel - AI Assistant & Automation */}
        <div className="w-1/3 flex flex-col">
          <div className="p-4 border-b border-gray-200 bg-violet-50">
            <h3 className="font-semibold flex items-center gap-2">
              <BrainCircuit className="h-5 w-5 text-violet-600" />
              AI Scheduling Assistant
            </h3>
            <p className="text-sm text-gray-600">Automated interview management</p>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* AI Suggestions */}
            <div className="bg-violet-50 border border-violet-200 rounded-lg p-3">
              <h4 className="font-medium text-violet-700 mb-2">Smart Suggestions</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Optimal time slots identified based on candidate timezone</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Interview duration set to 45 minutes for technical roles</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Automatic calendar invites will be sent to all participants</span>
                </div>
              </div>
            </div>

            {/* Automation Settings */}
            <div className="border border-gray-200 rounded-lg p-3">
              <h4 className="font-medium mb-3 flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Automation Settings
              </h4>
              <div className="space-y-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="text-violet-600" />
                  <span className="text-sm">Send automatic confirmation emails</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="text-violet-600" />
                  <span className="text-sm">Create calendar events automatically</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="text-violet-600" />
                  <span className="text-sm">Send reminder notifications</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="text-violet-600" />
                  <span className="text-sm">Generate interview questions</span>
                </label>
              </div>
            </div>

            {/* Email Templates */}
            <div className="border border-gray-200 rounded-lg p-3">
              <h4 className="font-medium mb-3">Email Templates</h4>
              <div className="space-y-2">
                <button className="w-full text-left p-2 border border-gray-200 rounded text-sm hover:bg-gray-50">
                  <div className="font-medium">Interview Invitation</div>
                  <div className="text-xs text-gray-500">Personalized invitation with details</div>
                </button>
                <button className="w-full text-left p-2 border border-gray-200 rounded text-sm hover:bg-gray-50">
                  <div className="font-medium">Interview Reminder</div>
                  <div className="text-xs text-gray-500">24-hour reminder notification</div>
                </button>
                <button className="w-full text-left p-2 border border-gray-200 rounded text-sm hover:bg-gray-50">
                  <div className="font-medium">Follow-up Email</div>
                  <div className="text-xs text-gray-500">Post-interview thank you</div>
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="border border-gray-200 rounded-lg p-3">
              <h4 className="font-medium mb-3">Recent Activity</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Send className="h-3 w-3 text-blue-500" />
                  <span>Invitation sent to Sarah Johnson</span>
                  <span className="text-xs text-gray-500">2 min ago</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-3 w-3 text-green-500" />
                  <span>Calendar event created</span>
                  <span className="text-xs text-gray-500">5 min ago</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span>Interview confirmed by candidate</span>
                  <span className="text-xs text-gray-500">1 hour ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-gray-50 border-t border-gray-200 p-3">
        <div className="text-center text-sm text-gray-600">
          {step === 0 && "Select a candidate to schedule an interview..."}
          {step === 1 && "Opening interview scheduler for selected candidate..."}
          {step === 2 && "Choose an available time slot for the interview..."}
          {step === 3 && "Confirming interview schedule and sending invitations..."}
          {step === 4 && "Interview successfully scheduled! Automatic notifications sent."}
        </div>
      </div>
    </div>
  )
}
