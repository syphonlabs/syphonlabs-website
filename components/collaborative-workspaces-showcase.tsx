"use client"

import { useState, useEffect } from "react"
import {
  FolderPlus,
  Share2,
  History,
  MessageSquare,
  Check,
  Clock,
  FileText,
  FileImage,
  FileSpreadsheet,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function CollaborativeWorkspacesShowcase() {
  const [activeTab, setActiveTab] = useState("workspace")
  const [typingUser, setTypingUser] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)
  const [showSuggestion, setShowSuggestion] = useState(false)
  const [showVersions, setShowVersions] = useState(false)

  useEffect(() => {
    // Simulate typing indicator
    const typingInterval = setInterval(() => {
      setTypingUser((prev) => {
        if (prev === null) return "emma"
        if (prev === "emma") return "alex"
        return null
      })
    }, 3000)

    // Simulate progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => setShowSuggestion(true), 1000)
          return 100
        }
        return prev + 20
      })
    }, 1000)

    return () => {
      clearInterval(typingInterval)
      clearInterval(progressInterval)
    }
  }, [])

  const users = [
    { id: "you", name: "You", avatar: "/placeholder.svg?height=40&width=40", color: "bg-violet-500" },
    { id: "emma", name: "Emma", avatar: "/placeholder.svg?height=40&width=40", color: "bg-violet-400" },
    { id: "alex", name: "Alex", avatar: "/placeholder.svg?height=40&width=40", color: "bg-violet-300" },
    { id: "taylor", name: "Taylor", avatar: "/placeholder.svg?height=40&width=40", color: "bg-violet-600" },
  ]

  const files = [
    {
      id: 1,
      name: "Project_Proposal.docx",
      icon: <FileText className="h-5 w-5 text-violet-500" />,
      lastEdited: "You, 5 mins ago",
    },
    {
      id: 2,
      name: "Budget_Q2.xlsx",
      icon: <FileSpreadsheet className="h-5 w-5 text-violet-500" />,
      lastEdited: "Emma, 20 mins ago",
    },
    {
      id: 3,
      name: "Mockup_v2.png",
      icon: <FileImage className="h-5 w-5 text-violet-500" />,
      lastEdited: "Alex, 1 hour ago",
    },
  ]

  const versions = [
    { id: 1, name: "v3 - Current", user: "You", time: "5 mins ago", changes: "Updated executive summary" },
    { id: 2, name: "v2", user: "Emma", time: "Yesterday, 4:30 PM", changes: "Added budget section" },
    { id: 3, name: "v1", user: "Alex", time: "Yesterday, 10:15 AM", changes: "Initial draft" },
  ]

  const messages = [
    { id: 1, user: "alex", text: "I've added the initial mockups to the project folder", time: "10:15 AM" },
    { id: 2, user: "emma", text: "Great! I'll work on the budget spreadsheet today", time: "10:30 AM" },
    { id: 3, user: "you", text: "I'll draft the project proposal by EOD", time: "11:45 AM" },
  ]

  return (
    <Card className="overflow-hidden border-2 shadow-lg">
      <CardContent className="p-0">
        <div className="bg-gradient-to-r from-violet-50 to-violet-100 p-6">
          <Tabs defaultValue="workspace" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 bg-violet-200">
              <TabsTrigger value="workspace">Workspace</TabsTrigger>
              <TabsTrigger value="files">Files</TabsTrigger>
              <TabsTrigger value="chat">Chat</TabsTrigger>
            </TabsList>

            <TabsContent value="workspace" className="mt-4">
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FolderPlus className="h-5 w-5 text-violet-600" />
                    <h3 className="font-semibold text-lg">Q2 Marketing Campaign</h3>
                    <Badge variant="outline" className="ml-2 bg-violet-100">
                      AI-Generated
                    </Badge>
                  </div>
                  <div className="flex -space-x-2">
                    {users.map((user) => (
                      <Avatar key={user.id} className="border-2 border-white h-8 w-8">
                        <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                        <AvatarFallback className={user.color}>{user.name[0]}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">Project Files</h4>
                      <Button variant="ghost" size="sm" className="text-xs">
                        <FolderPlus className="h-4 w-4 mr-1" /> Add Files
                      </Button>
                    </div>
                    <div className="mt-3 space-y-3">
                      {files.map((file) => (
                        <div
                          key={file.id}
                          className="flex items-center justify-between rounded-md border p-2 hover:bg-gray-50"
                        >
                          <div className="flex items-center gap-2">
                            {file.icon}
                            <span>{file.name}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-xs text-gray-500">{file.lastEdited}</span>
                            <Button variant="ghost" size="icon" className="h-7 w-7 ml-1">
                              <History className="h-4 w-4" onClick={() => setShowVersions(true)} />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {showVersions && (
                      <div className="mt-4 rounded-lg border bg-gray-50 p-3">
                        <div className="flex items-center justify-between">
                          <h5 className="text-sm font-medium">Version History - Project_Proposal.docx</h5>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 w-6 p-0"
                            onClick={() => setShowVersions(false)}
                          >
                            ×
                          </Button>
                        </div>
                        <div className="mt-2 space-y-2">
                          {versions.map((version) => (
                            <div key={version.id} className="rounded border bg-white p-2 text-sm">
                              <div className="flex items-center justify-between">
                                <span className="font-medium">{version.name}</span>
                                <span className="text-xs text-gray-500">{version.time}</span>
                              </div>
                              <div className="mt-1 flex items-center justify-between text-xs">
                                <span>By: {version.user}</span>
                                <span className="text-gray-600">{version.changes}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="rounded-lg border p-4">
                    <h4 className="font-medium">AI Workspace Assistant</h4>

                    {progress < 100 ? (
                      <div className="mt-3">
                        <div className="flex items-center justify-between text-sm">
                          <span>Analyzing project context...</span>
                          <span>{progress}%</span>
                        </div>
                        <Progress value={progress} className="mt-2" />
                      </div>
                    ) : (
                      <div className="mt-3 space-y-3">
                        {showSuggestion && (
                          <div className="rounded-lg bg-violet-50 p-3 border border-violet-200">
                            <div className="flex items-start gap-2">
                              <div className="mt-1 h-6 w-6 rounded-full bg-violet-100 flex items-center justify-center">
                                <Share2 className="h-3 w-3 text-violet-700" />
                              </div>
                              <div>
                                <h5 className="font-medium text-sm">Suggested Action</h5>
                                <p className="mt-1 text-xs text-gray-600">
                                  Based on the project timeline, you should share the proposal with Taylor for review.
                                </p>
                                <div className="mt-2 flex gap-2">
                                  <Button size="sm" className="h-7 text-xs bg-violet-600 hover:bg-violet-700">
                                    Share Now
                                  </Button>
                                  <Button variant="outline" size="sm" className="h-7 text-xs">
                                    Dismiss
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="rounded-lg border p-3">
                          <h5 className="text-sm font-medium">Automated Tasks</h5>
                          <div className="mt-2 space-y-2">
                            <div className="flex items-center gap-2 text-xs">
                              <Check className="h-4 w-4 text-violet-500" />
                              <span>Version control enabled for all documents</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs">
                              <Check className="h-4 w-4 text-violet-500" />
                              <span>Conflict resolution protocol active</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs">
                              <Clock className="h-4 w-4 text-violet-500" />
                              <span>Scheduled backup every 30 minutes</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="files" className="mt-4">
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Shared Files</h3>
                  <Button size="sm" className="bg-violet-600 hover:bg-violet-700">
                    <FolderPlus className="h-4 w-4 mr-2" /> New Folder
                  </Button>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3">
                  {files.map((file) => (
                    <div
                      key={file.id}
                      className="flex items-center justify-between rounded-lg border p-3 hover:bg-gray-50"
                    >
                      <div className="flex items-center gap-3">
                        {file.icon}
                        <div>
                          <p className="font-medium">{file.name}</p>
                          <p className="text-xs text-gray-500">Last edited: {file.lastEdited}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="h-8">
                          <History className="h-4 w-4 mr-1" /> History
                        </Button>
                        <Button variant="outline" size="sm" className="h-8">
                          <Share2 className="h-4 w-4 mr-1" /> Share
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="chat" className="mt-4">
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-violet-600" />
                    <h3 className="font-semibold">Team Chat</h3>
                  </div>
                  <div className="flex -space-x-2">
                    {users.map((user) => (
                      <Avatar key={user.id} className="border-2 border-white h-6 w-6">
                        <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                        <AvatarFallback className={user.color}>{user.name[0]}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                </div>

                <div className="mt-4 space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className="flex items-start gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={users.find((u) => u.id === message.user)?.avatar || "/placeholder.svg"}
                          alt={message.user}
                        />
                        <AvatarFallback className={users.find((u) => u.id === message.user)?.color}>
                          {users.find((u) => u.id === message.user)?.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{users.find((u) => u.id === message.user)?.name}</span>
                          <span className="text-xs text-gray-500">{message.time}</span>
                        </div>
                        <p className="mt-1 text-sm">{message.text}</p>
                      </div>
                    </div>
                  ))}

                  {typingUser && (
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Avatar className="h-6 w-6">
                        <AvatarImage
                          src={users.find((u) => u.id === typingUser)?.avatar || "/placeholder.svg"}
                          alt={typingUser}
                        />
                        <AvatarFallback className={users.find((u) => u.id === typingUser)?.color}>
                          {users.find((u) => u.id === typingUser)?.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      <span>{users.find((u) => u.id === typingUser)?.name} is typing...</span>
                    </div>
                  )}
                </div>

                <div className="mt-4 flex gap-2">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                  />
                  <Button className="bg-violet-600 hover:bg-violet-700">Send</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
    </Card>
  )
}
