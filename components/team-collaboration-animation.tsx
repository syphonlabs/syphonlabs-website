"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  MessageSquare,
  Calendar,
  Video,
  FolderKanban,
  CheckCircle2,
  X,
  Plus,
  BrainCircuit,
  ArrowRight,
} from "lucide-react"

export default function TeamCollaborationAnimation() {
  const [step, setStep] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [activeTab, setActiveTab] = useState("kanban")
  const [showNotification, setShowNotification] = useState(false)
  const [showCallModal, setShowCallModal] = useState(false)
  const [showComments, setShowComments] = useState(false)
  const [comments, setComments] = useState([
    {
      user: "Sarah",
      avatar: "/placeholder.svg?height=30&width=30",
      text: "I've started on the wireframes",
      time: "2m ago",
    },
  ])
  const [newComment, setNewComment] = useState("")
  const [activeUsers, setActiveUsers] = useState([
    { name: "You", avatar: "/placeholder.svg?height=30&width=30", status: "online", typing: false },
    { name: "Sarah", avatar: "/placeholder.svg?height=30&width=30", status: "online", typing: false },
    { name: "Mike", avatar: "/placeholder.svg?height=30&width=30", status: "away", typing: false },
  ])
  const [tasks, setTasks] = useState([
    { id: 1, title: "Research competitors", status: "todo", assignee: "Mike", priority: "medium" },
    { id: 2, title: "Create wireframes", status: "in-progress", assignee: "Sarah", priority: "high" },
    { id: 3, title: "Draft content", status: "todo", assignee: "You", priority: "medium" },
    { id: 4, title: "Initial project setup", status: "done", assignee: "You", priority: "high" },
  ])
  const [draggedTask, setDraggedTask] = useState(null)
  const [meetings, setMeetings] = useState([
    { title: "Team Standup", time: "Today, 10:00 AM", participants: ["You", "Sarah", "Mike"] },
    { title: "Design Review", time: "Tomorrow, 2:00 PM", participants: ["You", "Sarah"] },
  ])

  // Auto-play the animation steps
  useEffect(() => {
    if (!playing) return

    const timer = setTimeout(
      () => {
        if (step === 0) {
          setActiveTab("kanban")
          setStep(1)
        } else if (step === 1) {
          // Show user typing
          setActiveUsers((prev) => prev.map((user) => (user.name === "Sarah" ? { ...user, typing: true } : user)))
          setStep(2)
        } else if (step === 2) {
          // Show notification
          setShowNotification(true)
          setStep(3)
        } else if (step === 3) {
          // Update task status
          setTasks((prev) => prev.map((task) => (task.id === 3 ? { ...task, status: "in-progress" } : task)))
          setShowNotification(false)
          setActiveUsers((prev) => prev.map((user) => (user.name === "Sarah" ? { ...user, typing: false } : user)))
          setStep(4)
        } else if (step === 4) {
          // Switch to call scheduler
          setActiveTab("calls")
          setStep(5)
        } else if (step === 5) {
          // Show call modal
          setShowCallModal(true)
          setStep(6)
        } else if (step === 6) {
          // Hide call modal and switch to comments
          setShowCallModal(false)
          setActiveTab("comments")
          setShowComments(true)
          setStep(7)
        } else if (step === 7) {
          // Add new comment
          setNewComment("Let's discuss this in our meeting tomorrow.")
          setStep(8)
        } else if (step === 8) {
          // Submit comment
          if (newComment) {
            setComments([
              ...comments,
              {
                user: "You",
                avatar: "/placeholder.svg?height=30&width=30",
                text: newComment,
                time: "Just now",
              },
            ])
            setNewComment("")
          }
          setStep(9)
        } else if (step === 9) {
          // Reset animation
          setActiveTab("kanban")
          setShowNotification(false)
          setShowCallModal(false)
          setShowComments(false)
          setComments([
            {
              user: "Sarah",
              avatar: "/placeholder.svg?height=30&width=30",
              text: "I've started on the wireframes",
              time: "2m ago",
            },
          ])
          setActiveUsers([
            { name: "You", avatar: "/placeholder.svg?height=30&width=30", status: "online", typing: false },
            { name: "Sarah", avatar: "/placeholder.svg?height=30&width=30", status: "online", typing: false },
            { name: "Mike", avatar: "/placeholder.svg?height=30&width=30", status: "away", typing: false },
          ])
          setTasks([
            { id: 1, title: "Research competitors", status: "todo", assignee: "Mike", priority: "medium" },
            { id: 2, title: "Create wireframes", status: "in-progress", assignee: "Sarah", priority: "high" },
            { id: 3, title: "Draft content", status: "todo", assignee: "You", priority: "medium" },
            { id: 4, title: "Initial project setup", status: "done", assignee: "You", priority: "high" },
          ])
          setStep(0)
        }
      },
      step === 7 || step === 8 ? 1500 : 2500,
    )

    return () => clearTimeout(timer)
  }, [step, playing, newComment, comments])

  const handlePlayPause = () => {
    setPlaying(!playing)
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  const handleDragStart = (taskId) => {
    setDraggedTask(taskId)
  }

  const handleDragOver = (e, status) => {
    e.preventDefault()
  }

  const handleDrop = (e, status) => {
    e.preventDefault()
    if (draggedTask) {
      setTasks((prev) => prev.map((task) => (task.id === draggedTask ? { ...task, status } : task)))
      setDraggedTask(null)
    }
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
          <span className="text-base font-medium text-gray-500">Pheobe Explorer Team Collaboration</span>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button onClick={handlePlayPause} className="text-sm bg-violet-100 text-violet-700 px-2 py-1 rounded">
            {playing ? "Pause Demo" : "Play Demo"}
          </button>
        </div>
      </div>

      {/* Active users bar */}
      <div className="bg-gray-50 border-b border-gray-200 p-3 flex items-center justify-between overflow-x-auto">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-500">Active now:</span>
          <div className="flex -space-x-2">
            {activeUsers.map((user, index) => (
              <div key={index} className="relative">
                <div
                  className={`h-6 w-6 rounded-full border-2 border-white ${user.status === "away" ? "opacity-60" : ""}`}
                  style={{ backgroundImage: `url(${user.avatar})`, backgroundSize: "cover" }}
                  title={user.name}
                ></div>
                <div
                  className={`absolute bottom-0 right-0 h-2 w-2 rounded-full border border-white ${user.status === "online" ? "bg-green-500" : "bg-yellow-500"}`}
                ></div>
                {user.typing && (
                  <div className="absolute -top-1 -right-1 bg-violet-100 text-violet-700 text-sm px-1 rounded-full">
                    typing...
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          {showNotification && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-white text-sm flex items-center justify-center"
            >
              1
            </motion.div>
          )}
          <button className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded flex items-center gap-1">
            <Bell className="h-3 w-3" />
            <span>Notifications</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto border-b border-gray-200">
        <button
          className={`px-4 py-2 text-base font-medium ${
            activeTab === "kanban"
              ? "text-violet-700 border-b-2 border-violet-700"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => handleTabChange("kanban")}
        >
          <div className="flex items-center gap-1">
            <FolderKanban className="h-4 w-4" />
            <span>Team Kanban</span>
          </div>
        </button>
        <button
          className={`px-4 py-2 text-base font-medium ${
            activeTab === "calls" ? "text-violet-700 border-b-2 border-violet-700" : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => handleTabChange("calls")}
        >
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>Call Scheduler</span>
          </div>
        </button>
        <button
          className={`px-4 py-2 text-base font-medium ${
            activeTab === "comments"
              ? "text-violet-700 border-b-2 border-violet-700"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => handleTabChange("comments")}
        >
          <div className="flex items-center gap-1">
            <MessageSquare className="h-4 w-4" />
            <span>Comments</span>
          </div>
        </button>
      </div>

      {/* Content area */}
      <div className="h-[300px] sm:h-[350px] md:h-[450px] max-w-6xl mx-auto overflow-hidden relative">
        <AnimatePresence mode="wait">
          {/* Team Kanban */}
          {activeTab === "kanban" && (
            <motion.div
              key="kanban"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full p-4"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">Team Kanban Board</h3>
                <div className="flex items-center gap-1 text-sm bg-violet-100 text-violet-700 px-2 py-1 rounded">
                  <BrainCircuit className="h-3 w-3" />
                  <span>AI Task Distribution</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 h-[250px]">
                {/* To Do Column */}
                <div
                  className="border border-gray-200 rounded-md bg-gray-50 flex flex-col"
                  onDragOver={(e) => handleDragOver(e, "todo")}
                  onDrop={(e) => handleDrop(e, "todo")}
                >
                  <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="font-medium text-base">To Do</span>
                      <span className="text-sm text-gray-500 bg-gray-200 rounded-full px-1.5">
                        {tasks.filter((t) => t.status === "todo").length}
                      </span>
                    </div>
                    <button className="h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center">
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                  <div className="flex-1 overflow-y-auto p-3 space-y-2">
                    {tasks
                      .filter((task) => task.status === "todo")
                      .map((task) => (
                        <div
                          key={task.id}
                          className="p-3 bg-white rounded border border-gray-200 text-base cursor-move"
                          draggable
                          onDragStart={() => handleDragStart(task.id)}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium">{task.title}</span>
                            <span
                              className={`text-sm px-1.5 py-0.5 rounded ${
                                task.priority === "high" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"
                              }`}
                            >
                              {task.priority}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">Assigned to: {task.assignee}</span>
                            {task.assignee === "You" && <div className="h-4 w-4 rounded-full bg-gray-200"></div>}
                            {task.assignee === "Sarah" && <div className="h-4 w-4 rounded-full bg-pink-200"></div>}
                            {task.assignee === "Mike" && <div className="h-4 w-4 rounded-full bg-blue-200"></div>}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* In Progress Column */}
                <div
                  className="border border-gray-200 rounded-md bg-gray-50 flex flex-col"
                  onDragOver={(e) => handleDragOver(e, "in-progress")}
                  onDrop={(e) => handleDrop(e, "in-progress")}
                >
                  <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="font-medium text-base">In Progress</span>
                      <span className="text-sm text-gray-500 bg-gray-200 rounded-full px-1.5">
                        {tasks.filter((t) => t.status === "in-progress").length}
                      </span>
                    </div>
                    <button className="h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center">
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                  <div className="flex-1 overflow-y-auto p-3 space-y-2">
                    {tasks
                      .filter((task) => task.status === "in-progress")
                      .map((task) => (
                        <div
                          key={task.id}
                          className="p-3 bg-white rounded border border-violet-200 text-base cursor-move"
                          draggable
                          onDragStart={() => handleDragStart(task.id)}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium">{task.title}</span>
                            <span
                              className={`text-sm px-1.5 py-0.5 rounded ${
                                task.priority === "high" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"
                              }`}
                            >
                              {task.priority}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">Assigned to: {task.assignee}</span>
                            {task.assignee === "You" && <div className="h-4 w-4 rounded-full bg-gray-200"></div>}
                            {task.assignee === "Sarah" && <div className="h-4 w-4 rounded-full bg-pink-200"></div>}
                            {task.assignee === "Mike" && <div className="h-4 w-4 rounded-full bg-blue-200"></div>}
                          </div>
                          {task.id === 2 && (
                            <div className="mt-2 text-sm bg-violet-50 p-1 rounded flex items-center gap-1 text-violet-700">
                              <BrainCircuit className="h-3 w-3" />
                              <span>AI suggests adding another designer</span>
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                </div>

                {/* Done Column */}
                <div
                  className="border border-gray-200 rounded-md bg-gray-50 flex flex-col"
                  onDragOver={(e) => handleDragOver(e, "done")}
                  onDrop={(e) => handleDrop(e, "done")}
                >
                  <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="font-medium text-base">Done</span>
                      <span className="text-sm text-gray-500 bg-gray-200 rounded-full px-1.5">
                        {tasks.filter((t) => t.status === "done").length}
                      </span>
                    </div>
                    <button className="h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center">
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                  <div className="flex-1 overflow-y-auto p-3 space-y-2">
                    {tasks
                      .filter((task) => task.status === "done")
                      .map((task) => (
                        <div
                          key={task.id}
                          className="p-3 bg-white rounded border border-gray-200 text-base cursor-move opacity-75"
                          draggable
                          onDragStart={() => handleDragStart(task.id)}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium line-through">{task.title}</span>
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">Completed by: {task.assignee}</span>
                            {task.assignee === "You" && <div className="h-4 w-4 rounded-full bg-gray-200"></div>}
                            {task.assignee === "Sarah" && <div className="h-4 w-4 rounded-full bg-pink-200"></div>}
                            {task.assignee === "Mike" && <div className="h-4 w-4 rounded-full bg-blue-200"></div>}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Call Scheduler */}
          {activeTab === "calls" && (
            <motion.div
              key="calls"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full p-4"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">Call Scheduler</h3>
                <button className="flex items-center gap-1 text-sm bg-violet-600 text-white px-2 py-1 rounded">
                  <Plus className="h-3 w-3" />
                  <span>New Meeting</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-base font-medium mb-3">Upcoming Meetings</h4>
                  <div className="space-y-3">
                    {meetings.map((meeting, index) => (
                      <div key={index} className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-medium">{meeting.title}</h5>
                          <span className="text-sm bg-violet-100 text-violet-700 px-2 py-0.5 rounded">
                            {meeting.time}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex -space-x-2">
                            {meeting.participants.map((participant, i) => (
                              <div
                                key={i}
                                className="h-6 w-6 rounded-full border-2 border-white bg-gray-200"
                                title={participant}
                              ></div>
                            ))}
                          </div>
                          <button className="text-sm flex items-center gap-1 text-violet-600">
                            <Video className="h-3 w-3" />
                            <span>Join</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-base font-medium mb-3">AI Scheduling Assistant</h4>
                  <div className="p-4 bg-violet-50 rounded-lg border border-violet-200">
                    <div className="flex items-center gap-2 mb-3">
                      <BrainCircuit className="h-4 w-4 text-violet-600" />
                      <h5 className="font-medium text-violet-700">Suggested Meeting Times</h5>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                      Based on your team's availability and previous meeting patterns, here are the best times to
                      schedule your next design review:
                    </p>
                    <div className="space-y-2 mb-3">
                      <div className="flex items-center justify-between text-sm">
                        <span>Thursday, 10:00 AM</span>
                        <span className="text-sm bg-green-100 text-green-700 px-2 py-0.5 rounded">All available</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Friday, 2:00 PM</span>
                        <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">
                          Mike unavailable
                        </span>
                      </div>
                    </div>
                    <button
                      className="w-full text-sm bg-violet-600 text-white py-1.5 rounded"
                      onClick={() => setShowCallModal(true)}
                    >
                      Schedule Meeting
                    </button>
                  </div>
                </div>
              </div>

              {/* Call scheduling modal */}
              {showCallModal && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-white rounded-lg p-4 w-full max-w-md"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">Schedule New Meeting</h3>
                      <button onClick={() => setShowCallModal(false)}>
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="space-y-3 mb-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Meeting Title</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                          placeholder="Design Review"
                          defaultValue="Design Review"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Date & Time</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded text-sm">
                          <option>Thursday, 10:00 AM (Recommended)</option>
                          <option>Friday, 2:00 PM</option>
                          <option>Custom time...</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Participants</label>
                        <div className="flex flex-wrap gap-2">
                          <div className="bg-violet-100 text-violet-700 text-sm px-2 py-1 rounded flex items-center gap-1">
                            <span>You</span>
                            <X className="h-3 w-3" />
                          </div>
                          <div className="bg-violet-100 text-violet-700 text-sm px-2 py-1 rounded flex items-center gap-1">
                            <span>Sarah</span>
                            <X className="h-3 w-3" />
                          </div>
                          <div className="bg-violet-100 text-violet-700 text-sm px-2 py-1 rounded flex items-center gap-1">
                            <span>Mike</span>
                            <X className="h-3 w-3" />
                          </div>
                          <button className="bg-gray-100 text-gray-700 text-sm px-2 py-1 rounded flex items-center gap-1">
                            <Plus className="h-3 w-3" />
                            <span>Add</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end gap-2">
                      <button
                        className="px-3 py-1.5 border border-gray-300 rounded text-sm"
                        onClick={() => setShowCallModal(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className="px-3 py-1.5 bg-violet-600 text-white rounded text-sm"
                        onClick={() => setShowCallModal(false)}
                      >
                        Schedule
                      </button>
                    </div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          )}

          {/* Comments */}
          {activeTab === "comments" && (
            <motion.div
              key="comments"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full flex flex-col"
            >
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold">Project Discussion</h3>
                  <span className="text-sm bg-gray-100 text-gray-700 px-2 py-0.5 rounded">Website Redesign</span>
                </div>
                <p className="text-sm text-gray-600">Collaborate with your team on the website redesign project</p>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {comments.map((comment, index) => (
                  <div key={index} className="flex gap-3">
                    <div
                      className="h-8 w-8 rounded-full flex-shrink-0"
                      style={{ backgroundImage: `url(${comment.avatar})`, backgroundSize: "cover" }}
                    ></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-sm">{comment.user}</span>
                        <span className="text-sm text-gray-500">{comment.time}</span>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg text-base">{comment.text}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-gray-200">
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-gray-200 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="relative">
                      <input
                        type="text"
                        className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg text-sm"
                        placeholder="Add a comment..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                      />
                      <button
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-violet-600"
                        disabled={!newComment}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Instructions */}
      <div className="bg-gray-50 border-t border-gray-200 p-4">
        <div className="text-center text-sm text-gray-600">
          {activeTab === "kanban" &&
            step <= 4 &&
            (step === 0
              ? "Starting team collaboration demo..."
              : step === 1
                ? "Team member is updating task status..."
                : step === 2 || step === 3
                  ? "You received a notification about task updates"
                  : "Task has been moved to In Progress")}
          {activeTab === "calls" &&
            step >= 5 &&
            step <= 6 &&
            (step === 5 ? "Viewing the call scheduler..." : "Scheduling a team meeting...")}
          {activeTab === "comments" &&
            step >= 7 &&
            (step === 7
              ? "Viewing team discussion thread..."
              : step === 8
                ? "Adding your comment to the discussion..."
                : "Comment added successfully")}
        </div>
      </div>
    </div>
  )
}

function Bell(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}
