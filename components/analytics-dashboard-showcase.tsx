"use client"

import { useState } from "react"
import {
  BarChart3,
  PieChart,
  LineChart,
  ArrowUpRight,
  Filter,
  Download,
  Calendar,
  ChevronDown,
  RefreshCw,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  LineChart as RechartsLineChart,
  Line,
  Legend,
} from "recharts"

// Mock data for charts
const fileUsageData = [
  { name: "Documents", count: 145, color: "#8b5cf6" },
  { name: "Images", count: 87, color: "#3b82f6" },
  { name: "Videos", count: 32, color: "#ec4899" },
  { name: "Spreadsheets", count: 56, color: "#10b981" },
  { name: "PDFs", count: 78, color: "#f59e0b" },
  { name: "Others", count: 23, color: "#6b7280" },
]

const storageData = [
  { name: "Documents", value: 2.4, color: "#8b5cf6" },
  { name: "Images", value: 5.7, color: "#3b82f6" },
  { name: "Videos", value: 8.3, color: "#ec4899" },
  { name: "Spreadsheets", value: 1.2, color: "#10b981" },
  { name: "PDFs", value: 3.5, color: "#f59e0b" },
  { name: "Others", value: 0.9, color: "#6b7280" },
]

const activityData = [
  { day: "Mon", files: 24, ai: 12 },
  { day: "Tue", files: 18, ai: 8 },
  { day: "Wed", files: 32, ai: 15 },
  { day: "Thu", files: 26, ai: 18 },
  { day: "Fri", files: 42, ai: 28 },
  { day: "Sat", files: 12, ai: 5 },
  { day: "Sun", files: 8, ai: 3 },
]

const aiInsightsData = [
  { category: "Redundant Files", count: 37, action: "Clean up" },
  { category: "Outdated Documents", count: 24, action: "Review" },
  { category: "Untagged Files", count: 156, action: "Organize" },
  { category: "Large Files", count: 18, action: "Optimize" },
]

export default function AnalyticsDashboardShowcase() {
  const [activeTab, setActiveTab] = useState("usage")

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
      {/* Header with controls */}
      <div className="bg-gray-50 border-b border-gray-200 p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-400"></div>
          </div>
          <span className="text-sm font-medium text-gray-500">Syphon Explorer Analytics</span>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="text-xs flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            Last 30 Days
            <ChevronDown className="h-3 w-3 ml-1" />
          </Button>
          <Button variant="outline" size="sm" className="text-xs">
            <RefreshCw className="h-3 w-3" />
          </Button>
        </div>
      </div>

      {/* Dashboard content */}
      <div className="p-6 bg-white">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold">Analytics Dashboard</h3>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="text-xs flex items-center gap-1">
              <Filter className="h-3 w-3" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="text-xs flex items-center gap-1">
              <Download className="h-3 w-3" />
              Export
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="usage" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              File Usage
            </TabsTrigger>
            <TabsTrigger value="storage" className="flex items-center gap-2">
              <PieChart className="h-4 w-4" />
              Storage Analytics
            </TabsTrigger>
            <TabsTrigger value="insights" className="flex items-center gap-2">
              <LineChart className="h-4 w-4" />
              AI Insights
            </TabsTrigger>
          </TabsList>

          <TabsContent value="usage" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="col-span-2">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium text-sm">File Type Distribution</h4>
                    <span className="text-xs text-gray-500">Total: 421 files</span>
                  </div>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={fileUsageData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip
                          contentStyle={{ borderRadius: "8px", border: "1px solid #e2e8f0" }}
                          formatter={(value) => [`${value} files`, "Count"]}
                        />
                        <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                          {fileUsageData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium text-sm">Weekly Activity</h4>
                    <span className="text-xs text-gray-500">Files & AI interactions</span>
                  </div>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsLineChart data={activityData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid #e2e8f0" }} />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="files"
                          stroke="#8b5cf6"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          name="File Access"
                        />
                        <Line
                          type="monotone"
                          dataKey="ai"
                          stroke="#10b981"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          name="AI Interactions"
                        />
                      </RechartsLineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="storage" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {/* Increased pie chart size to 3/5 of the grid */}
              <Card className="md:col-span-3">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium text-sm">Storage Distribution</h4>
                    <span className="text-xs text-gray-500">Total: 22 GB</span>
                  </div>
                  <div className="h-[380px] flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <Pie
                          data={storageData}
                          cx="50%"
                          cy="50%"
                          innerRadius={70}
                          outerRadius={120}
                          paddingAngle={2}
                          dataKey="value"
                        >
                          {storageData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          formatter={(value) => [`${value} GB`, "Storage"]}
                          contentStyle={{ borderRadius: "8px", border: "1px solid #e2e8f0" }}
                        />
                        <Legend
                          layout="vertical"
                          verticalAlign="middle"
                          align="right"
                          formatter={(value, entry, index) => (
                            <span className="text-sm">
                              {value} ({storageData[index].value} GB)
                            </span>
                          )}
                        />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Decreased line graph size to 2/5 of the grid */}
              <Card className="md:col-span-2">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium text-sm">Storage Trends</h4>
                    <span className="text-xs text-gray-500">Last 6 months</span>
                  </div>
                  <div className="h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsLineChart
                        data={[
                          { month: "Jan", storage: 14.2 },
                          { month: "Feb", storage: 15.8 },
                          { month: "Mar", storage: 17.3 },
                          { month: "Apr", storage: 18.9 },
                          { month: "May", storage: 20.5 },
                          { month: "Jun", storage: 22.0 },
                        ]}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip
                          formatter={(value) => [`${value} GB`, "Storage Used"]}
                          contentStyle={{ borderRadius: "8px", border: "1px solid #e2e8f0" }}
                        />
                        <Line type="monotone" dataKey="storage" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
                      </RechartsLineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="insights" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="col-span-2">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium text-sm">AI-Generated Insights</h4>
                    <span className="text-xs text-gray-500">Based on file analysis</span>
                  </div>
                  <div className="space-y-4">
                    {aiInsightsData.map((insight, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium">{insight.category}</div>
                          <div className="text-sm text-gray-500">{insight.count} files detected</div>
                        </div>
                        <Button size="sm" variant="outline" className="text-xs flex items-center gap-1">
                          {insight.action}
                          <ArrowUpRight className="h-3 w-3 ml-1" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium text-sm">Productivity Score</h4>
                    <span className="text-xs text-gray-500">Based on AI analysis</span>
                  </div>
                  <div className="flex flex-col items-center justify-center h-[300px]">
                    <div className="relative h-48 w-48">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-4xl font-bold text-violet-600">87</div>
                      </div>
                      <svg className="h-full w-full" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#e2e8f0" strokeWidth="10" />
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="#8b5cf6"
                          strokeWidth="10"
                          strokeDasharray="283"
                          strokeDashoffset="37"
                          transform="rotate(-90 50 50)"
                        />
                      </svg>
                    </div>
                    <div className="mt-4 text-center">
                      <div className="font-medium">Excellent</div>
                      <div className="text-sm text-gray-500">Top 15% of users</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
