"use client"

import { motion } from "framer-motion"
import {
  BrainCircuit,
  Users,
  BarChart3,
  GitCompare,
  MessageSquare,
  Calendar,
  FileText,
  Search,
  Shield,
  Zap,
  Globe,
  Award,
} from "lucide-react"

export default function FeatureOverview() {
  const features = [
    {
      icon: <BrainCircuit className="h-6 w-6" />,
      title: "AI-Powered Screening",
      description: "Automatically screen and score resumes using advanced AI algorithms",
      color: "violet",
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Smart Candidate Matching",
      description: "Find the perfect candidates with intelligent filtering and matching",
      color: "blue",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Automated Scheduling",
      description: "Streamline interview scheduling with AI-powered coordination",
      color: "green",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Advanced Analytics",
      description: "Get deep insights into your recruitment process and team performance",
      color: "purple",
    },
    {
      icon: <GitCompare className="h-6 w-6" />,
      title: "Candidate Comparison",
      description: "Compare candidates side-by-side with detailed assessments",
      color: "indigo",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Team Collaboration",
      description: "Enable seamless collaboration with shared feedback and voting",
      color: "teal",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Applicant Portal",
      description: "Provide candidates with a modern, intuitive application experience",
      color: "emerald",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Bias Reduction",
      description: "Promote fair hiring with AI-powered bias detection and mitigation",
      color: "amber",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Workflow Automation",
      description: "Automate repetitive tasks and focus on strategic decisions",
      color: "orange",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Talent Pool",
      description: "Access candidates from around the world with location-based filtering",
      color: "cyan",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Skills Assessment",
      description: "Evaluate candidates with comprehensive skill testing and validation",
      color: "pink",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Document Management",
      description: "Organize and manage all recruitment documents in one place",
      color: "gray",
    },
  ]

  const getColorClasses = (color) => {
    const colorMap = {
      violet: "bg-violet-100 text-violet-600 border-violet-200",
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      green: "bg-green-100 text-green-600 border-green-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      indigo: "bg-indigo-100 text-indigo-600 border-indigo-200",
      teal: "bg-teal-100 text-teal-600 border-teal-200",
      emerald: "bg-emerald-100 text-emerald-600 border-emerald-200",
      amber: "bg-amber-100 text-amber-600 border-amber-200",
      orange: "bg-orange-100 text-orange-600 border-orange-200",
      cyan: "bg-cyan-100 text-cyan-600 border-cyan-200",
      pink: "bg-pink-100 text-pink-600 border-pink-200",
      gray: "bg-gray-100 text-gray-600 border-gray-200",
    }
    return colorMap[color] || colorMap.violet
  }

  return (
    <section className="py-20 bg-gradient-to-b from-violet-50 to-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Everything You Need for Modern Recruitment</h2>
          <p className="text-xl text-gray-600">
                            Syphon Recruiter combines AI-powered automation with human insight to transform your hiring process from
            start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-violet-200"
            >
              <div className={`inline-flex p-3 rounded-lg border mb-4 ${getColorClasses(feature.color)}`}>
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Removed "AI-First Approach" metrics section as requested */}
      </div>
    </section>
  )
}
