"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Users,
  Clock,
  Calendar,
  Filter,
  Download,
  PieChart,
  LineChart,
  ArrowUpRight,
  ArrowDownRight,
  Briefcase,
} from "lucide-react"
import MobileDisclaimer from "@/components/mobile-disclaimer"

export default function RecruiterAnalyticsDashboard() {
  const [timeRange, setTimeRange] = useState("30d")
  const [department, setDepartment] = useState("All")

  // Base metrics (will be derived)
  const baseMetrics = [
    {
      name: "Total Applications",
      value: 1247,
      change: 12.5,
      trend: "up",
      icon: <Users className="h-5 w-5 text-blue-500" />,
    },
    {
      name: "Time to Hire",
      value: "18 days",
      change: -15.3,
      trend: "down",
      icon: <Clock className="h-5 w-5 text-green-500" />,
    },
    {
      name: "Active Positions",
      value: 24,
      change: 8.2,
      trend: "up",
      icon: <Briefcase className="h-5 w-5 text-violet-500" />,
    },
    {
      name: "Interviews Scheduled",
      value: 89,
      change: 22.7,
      trend: "up",
      icon: <Calendar className="h-5 w-5 text-amber-500" />,
    },
  ]

  const baseDepartments = [
    { name: "Engineering", openings: 12, applicants: 487, interviews: 42, hires: 8 },
    { name: "Product", openings: 5, applicants: 215, interviews: 18, hires: 3 },
    { name: "Design", openings: 3, applicants: 178, interviews: 15, hires: 2 },
    { name: "Marketing", openings: 4, applicants: 203, interviews: 14, hires: 4 },
  ]

  const baseSource = [
    { name: "LinkedIn", value: 35 },
    { name: "Indeed", value: 25 },
    { name: "Referrals", value: 20 },
    { name: "Company Website", value: 15 },
    { name: "Other", value: 5 },
  ]

  const diversityData = {
    gender: { male: 52, female: 45, nonBinary: 3 },
    ethnicity: { white: 48, asian: 22, hispanic: 15, black: 10, other: 5 },
    education: { bachelors: 55, masters: 30, phd: 10, other: 5 },
  }

  function deriveAnalytics({ timeRange, department, baseMetrics, baseDepartments, baseSource, baseStage }) {
    // Scale factor by time range (simple demo multipliers)
    const rangeScale = {
      "7d": 0.35,
      "30d": 1,
      "90d": 2.2,
      "1y": 8.5,
    }[timeRange] || 1

    // Filter department rows
    const departments =
      department === "All" ? baseDepartments : baseDepartments.filter((d) => d.name === department)

    // Aggregate department totals for selected scope
    const totals = departments.reduce(
      (acc, d) => {
        acc.openings += d.openings
        acc.applicants += d.applicants
        acc.interviews += d.interviews
        acc.hires += d.hires
        return acc
      },
      { openings: 0, applicants: 0, interviews: 0, hires: 0 },
    )

    // Stage distribution proportional to applicants
    const appliedBase = baseStage[0].value
    const proportions = baseStage.map((s) => s.value / appliedBase)
    const scaledApplied = Math.max(1, Math.round(totals.applicants * rangeScale))
    const stageData = baseStage.map((s, i) => ({ name: s.name, value: Math.max(1, Math.round(scaledApplied * proportions[i])) }))

    // Scale source distribution (keep normalized to 100)
    const departmentSourceWeights = {
      Engineering: [30, 20, 25, 20, 5],
      Product: [40, 20, 20, 15, 5],
      Design: [25, 30, 15, 25, 5],
      Marketing: [20, 35, 15, 20, 10],
      All: baseSource.map((s) => s.value),
    } as Record<string, number[]>
    const weights = department === "All" ? departmentSourceWeights.All : departmentSourceWeights[department] || departmentSourceWeights.All
    const weightTotal = weights.reduce((a, b) => a + b, 0)
    const sourceData = baseSource.map((s, idx) => ({ name: s.name, value: Math.round((weights[idx] / weightTotal) * 100) }))

    // Time to hire by department (days)
    const tthMap = { Engineering: 22, Product: 28, Design: 25, Marketing: 30 } as Record<string, number>
    const timeToHireDays =
      department === "All"
        ? Math.round(
            baseDepartments.reduce((sum, d) => sum + (tthMap[d.name] || 25) * d.hires, 0) /
              Math.max(1, baseDepartments.reduce((sum, d) => sum + d.hires, 0)) || 24,
          )
        : tthMap[department] || 24

    // Build top cards from totals
    const metrics = [
      {
        name: "Total Applications",
        value: Math.max(1, Math.round(totals.applicants * rangeScale)),
        change: 12.5,
        trend: "up",
        icon: <Users className="h-5 w-5 text-blue-500" />,
      },
      {
        name: "Time to Hire",
        value: `${timeToHireDays} days`,
        change: -15.3,
        trend: "down",
        icon: <Clock className="h-5 w-5 text-green-500" />,
      },
      {
        name: "Active Positions",
        value: Math.max(1, totals.openings),
        change: 8.2,
        trend: "up",
        icon: <Briefcase className="h-5 w-5 text-violet-500" />,
      },
      {
        name: "Interviews Scheduled",
        value: Math.max(1, Math.round(totals.interviews * rangeScale)),
        change: 22.7,
        trend: "up",
        icon: <Calendar className="h-5 w-5 text-amber-500" />,
      },
    ]

    return { metrics, departments, sourceData, stageData }
  }

  const baseStage = [
    { name: "Applied", value: 1247 },
    { name: "Screened", value: 523 },
    { name: "Interview", value: 215 },
    { name: "Assessment", value: 128 },
    { name: "Final Round", value: 64 },
    { name: "Offer", value: 32 },
    { name: "Hired", value: 17 },
  ]

  // Derive data based on filters
  const { metrics, departments, sourceData, stageData } = deriveAnalytics({
    timeRange,
    department,
    baseMetrics,
    baseDepartments,
    baseSource,
    baseStage,
  })

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
                          <span className="text-sm font-medium text-gray-500">Syphon Recruiter - Analytics Dashboard</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="text-sm border border-gray-300 rounded px-2 py-1"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">Last year</option>
            </select>
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="text-sm border border-gray-300 rounded px-2 py-1"
            >
              <option value="All">All Departments</option>
              <option value="Engineering">Engineering</option>
              <option value="Product">Product</option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
            </select>
            <button className="flex items-center gap-1 text-sm bg-white border border-gray-300 px-2 py-1 rounded">
              <Download className="h-3 w-3" />
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="p-6 h-[600px] overflow-y-auto">
        {/* Key Metrics */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div className="p-2 rounded-lg bg-gray-50">{metric.icon}</div>
                <div
                  className={`flex items-center text-sm ${
                    metric.trend === "up"
                      ? "text-green-600"
                      : metric.trend === "down" && metric.name === "Time to Hire"
                        ? "text-green-600"
                        : "text-red-600"
                  }`}
                >
                  {metric.trend === "up" ? (
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3 mr-1" />
                  )}
                  {Math.abs(metric.change)}%
                </div>
              </div>
              <div className="mt-3">
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="text-sm text-gray-500">{metric.name}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Hiring Funnel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Hiring Funnel</h3>
              <button className="text-sm text-gray-500 flex items-center">
                <Filter className="h-3 w-3 mr-1" />
                Filter
              </button>
            </div>
            <div className="space-y-3">
              {stageData.map((stage, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span>{stage.name}</span>
                    <span className="font-medium">{stage.value}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-violet-600 h-2 rounded-full"
                      style={{ width: `${(stage.value / stageData[0].value) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Candidate Sources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Candidate Sources</h3>
              <div className="flex items-center text-sm text-gray-500">
                <PieChart className="h-4 w-4 mr-1" />
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-1/2">
                <div className="relative h-40 w-40 mx-auto">
                  <div className="absolute inset-0 rounded-full border-8 border-violet-500 border-r-indigo-500 border-b-blue-500 border-l-teal-500"></div>
                  <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold">{sourceData[0].value}%</div>
                      <div className="text-xs text-gray-500">LinkedIn</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2">
                <div className="space-y-3">
                  {sourceData.map((source, index) => (
                    <div key={index} className="flex items-center">
                      <div
                        className={`h-3 w-3 rounded-full mr-2 ${
                          index === 0
                            ? "bg-violet-500"
                            : index === 1
                              ? "bg-indigo-500"
                              : index === 2
                                ? "bg-blue-500"
                                : index === 3
                                  ? "bg-teal-500"
                                  : "bg-gray-500"
                        }`}
                      ></div>
                      <div className="flex-1 text-sm">{source.name}</div>
                      <div className="font-medium text-sm">{source.value}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Department Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Department Performance</h3>
            <button className="text-sm text-gray-500 flex items-center">
              <LineChart className="h-3 w-3 mr-1" />
              View Trends
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Open Positions
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Applicants
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Interviews
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Hires
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Conversion
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {departments.map((dept, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="font-medium">{dept.name}</div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">{dept.openings}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{dept.applicants}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{dept.interviews}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{dept.hires}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div
                        className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                          (dept.hires / dept.applicants) * 100 > 2
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {((dept.hires / dept.applicants) * 100).toFixed(1)}%
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Diversity Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Diversity & Inclusion Metrics</h3>
            <div className="flex gap-2">
              <button className="px-2 py-1 text-xs bg-violet-100 text-violet-700 rounded">Gender</button>
              <button className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">Ethnicity</button>
              <button className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">Education</button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <div className="h-3 w-3 bg-blue-500 rounded-full mr-2"></div>
                  <span>Male</span>
                </div>
                <span className="font-medium">{diversityData.gender.male}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${diversityData.gender.male}%` }}></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <div className="h-3 w-3 bg-pink-500 rounded-full mr-2"></div>
                  <span>Female</span>
                </div>
                <span className="font-medium">{diversityData.gender.female}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-pink-500 h-2 rounded-full"
                  style={{ width: `${diversityData.gender.female}%` }}
                ></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <div className="h-3 w-3 bg-purple-500 rounded-full mr-2"></div>
                  <span>Non-Binary</span>
                </div>
                <span className="font-medium">{diversityData.gender.nonBinary}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-purple-500 h-2 rounded-full"
                  style={{ width: `${diversityData.gender.nonBinary}%` }}
                ></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <MobileDisclaimer />
    </div>
  )
}
