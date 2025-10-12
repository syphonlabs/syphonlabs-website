"use client"

import { motion } from "framer-motion"
import { FolderKanban, Plus, File, Settings, Folders } from "lucide-react"

export default function ColumnViewShowcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-violet-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm text-violet-700 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-violet-500 mr-2"></span>
            Featured Functionality
          </div>
          <h2 className="text-3xl font-bold mb-4">Powerful Column View & Folder Organization</h2>
          <p className="text-xl text-gray-600">
            Organize your workspace exactly how you want with our flexible column view system and multiple folder
            organization. Drag, resize, and customize your perfect workflow.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="rounded-xl border border-gray-200 bg-white p-2 shadow-xl overflow-hidden">
            <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center px-4 rounded-t-lg">
              <div className="flex space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="text-sm font-medium text-gray-500">Focus Frame Workspace</div>
              </div>
            </div>

            <div className="flex h-[500px] overflow-hidden">
              {/* Sidebar */}
              <div className="w-48 border-r border-gray-200 p-3 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-medium">Workspaces</span>
                  <button className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center">
                    <Plus className="h-3 w-3" />
                  </button>
                </div>
                <div className="space-y-1">
                  {["Personal", "Work", "Projects", "Research"].map((item, i) => (
                    <div
                      key={i}
                      className={`px-2 py-1 rounded text-sm ${i === 0 ? "bg-violet-100 text-violet-700" : "text-gray-700 hover:bg-gray-100"}`}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm text-gray-500">FOLDER STRUCTURE</span>
                  </div>
                  <div className="pl-2 border-l border-gray-200">
                    <div className="flex items-center gap-1 text-sm mb-1 text-violet-700">
                      <Folders className="h-3 w-3" />
                      <span>Projects</span>
                    </div>
                    <div className="pl-3 border-l border-gray-200">
                      <div className="flex items-center gap-1 text-sm mb-1 text-gray-700">
                        <FolderKanban className="h-3 w-3" />
                        <span>Client A</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm mb-1 text-gray-700">
                        <FolderKanban className="h-3 w-3" />
                        <span>Client B</span>
                      </div>
                      <div className="pl-3 border-l border-gray-200">
                        <div className="flex items-center gap-1 text-sm mb-1 text-gray-700">
                          <FolderKanban className="h-3 w-3" />
                          <span>Phase 1</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm mb-1 text-gray-700">
                          <FolderKanban className="h-3 w-3" />
                          <span>Phase 2</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column View */}
              <div className="flex-1 flex">
                {/* Column 1 */}
                <div className="w-1/3 border-r border-gray-200 flex flex-col">
                  <div className="p-3 border-b border-gray-200 flex items-center justify-between">
                    <span className="font-medium">Folders</span>
                    <button className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center">
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                  <div className="flex-1 overflow-y-auto p-2">
                    {["Documents", "Images", "Projects", "Archive"].map((folder, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-2 px-3 py-2 rounded text-sm ${i === 2 ? "bg-violet-100 text-violet-700" : "text-gray-700 hover:bg-gray-100"}`}
                      >
                        <FolderKanban className="h-4 w-4" />
                        <span>{folder}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 2 */}
                <div className="w-1/3 border-r border-gray-200 flex flex-col">
                  <div className="p-3 border-b border-gray-200 flex items-center justify-between">
                    <span className="font-medium">Files</span>
                    <button className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center">
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                  <div className="flex-1 overflow-y-auto p-2">
                    {[
                      { name: "Project Plan", date: "Today" },
                      { name: "Meeting Notes", date: "Yesterday" },
                      { name: "Research Data", date: "3 days ago" },
                      { name: "Presentation", date: "1 week ago" },
                    ].map((file, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-2 px-3 py-2 rounded text-sm ${i === 0 ? "bg-violet-100 text-violet-700" : "text-gray-700 hover:bg-gray-100"}`}
                      >
                        <File className="h-4 w-4" />
                        <div className="flex-1">
                          <div>{file.name}</div>
                          <div className="text-xs text-gray-500">{file.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 3 */}
                <div className="w-1/3 flex flex-col">
                  <div className="p-3 border-b border-gray-200 flex items-center justify-between">
                    <span className="font-medium">Content</span>
                    <button className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center">
                      <Settings className="h-3 w-3" />
                    </button>
                  </div>
                  <div className="flex-1 overflow-y-auto p-4">
                    <div className="mb-4">
                      <h3 className="text-lg font-bold">Project Plan</h3>
                      <div className="text-sm text-gray-500">Last edited: Today at 2:30 PM</div>
                    </div>
                    <div className="space-y-3 text-sm text-gray-700">
                      <p>
                        This document outlines our project plan for Q3. The AI assistant has suggested the following
                        timeline based on our team's capacity:
                      </p>
                      <div className="bg-violet-50 border border-violet-100 rounded-lg p-3 text-violet-700">
                        <div className="flex items-center gap-2 mb-2">
                          <BrainCircuit className="h-4 w-4" />
                          <span className="font-medium">AI Suggestion</span>
                        </div>
                        Based on your team's velocity, I recommend splitting this project into 3 sprints of 2 weeks
                        each. This will allow for adequate testing and feedback cycles.
                      </div>
                      <p>
                        We should focus on the core features first, then move to the secondary features in the second
                        sprint.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 h-24 w-24 rounded-lg bg-violet-100 blur-2xl opacity-80 -z-10"></div>
          <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-lg bg-indigo-100 blur-2xl opacity-80 -z-10"></div>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-violet-100 mb-4">
              <FolderKanban className="h-6 w-6 text-violet-600" />
            </div>
            <h3 className="text-lg font-medium mb-2">Flexible Columns</h3>
            <p className="text-gray-600">Resize, reorder, and customize your columns for the perfect workflow.</p>
          </div>
          <div className="text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-violet-100 mb-4">
              <Folders className="h-6 w-6 text-violet-600" />
            </div>
            <h3 className="text-lg font-medium mb-2">Multiple Folders</h3>
            <p className="text-gray-600">
              Create nested folder structures with unlimited depth for perfect organization.
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-violet-100 mb-4">
              <BrainCircuit className="h-6 w-6 text-violet-600" />
            </div>
            <h3 className="text-lg font-medium mb-2">AI Suggestions</h3>
            <p className="text-gray-600">Get intelligent suggestions for organizing your workspace efficiently.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

import { BrainCircuit } from "lucide-react"
