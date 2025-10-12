"use client"

import { motion } from "framer-motion"
import {
  BrainCircuit,
  Filter,
  Calendar,
  BarChart3,
  Users,
  FileText,
  Search,
  Clock,
  Shield,
  Zap,
  Target,
  MessageSquare,
} from "lucide-react"

const features = [
  {
    icon: <BrainCircuit className="h-6 w-6 text-violet-600" />,
    title: "AI Resume Analysis",
    description:
      "Advanced AI automatically scans, analyzes, and scores resumes based on job requirements, extracting key skills, experience, and qualifications.",
    color: "bg-violet-100",
  },
  {
    icon: <Filter className="h-6 w-6 text-indigo-600" />,
    title: "Smart Filtering & Automated Scheduling",
    description:
      "Precisely filter candidates with AI-driven skill and experience validation, then streamline interviews through automatic calendar syncing and personalized invites.",
    color: "bg-indigo-100",
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-teal-600" />,
    title: "Recruitment Analytics",
    description:
      "Gain insights into your hiring process with detailed analytics on candidate sources, conversion rates, and time-to-hire metrics.",
    color: "bg-teal-100",
  },
  {
    icon: <Users className="h-6 w-6 text-amber-600" />,
    title: "Smart Candidate Pipeline & Search",
    description:
      "Track candidates through customizable pipelines with automated updates, while AI-driven natural language search and semantic matching help you find the perfect fit faster.",
    color: "bg-amber-100",
  },
  {
    icon: <Shield className="h-6 w-6 text-emerald-600" />,
    title: "Bias-Free Evaluation & Job Matching",
    description:
      "Eliminate unconscious bias with AI-driven blind resume screening and objective scoring, while advanced algorithms rank candidates by job fit, culture, and career potential.",
    color: "bg-emerald-100",
  },
  // Removed standalone Intelligent Candidate Search (merged into Smart Candidate Pipeline & Search)
  {
    icon: <Clock className="h-6 w-6 text-purple-600" />,
    title: "Time-to-Hire Optimization",
    description:
      "Reduce hiring time by up to 70% with automated workflows, smart prioritization, and predictive hiring insights.",
    color: "bg-purple-100",
  },
  {
    icon: <FileText className="h-6 w-6 text-cyan-600" />,
    title: "Document Management",
    description:
      "Centralized storage for resumes, cover letters, and interview notes with AI-powered content extraction and organization.",
    color: "bg-cyan-100",
  },
  // Merged Job Matching into Bias-Free Evaluation & Job Matching
  {
    icon: <MessageSquare className="h-6 w-6 text-lime-600" />,
    title: "Automated Communication & Integration",
    description:
      "Automatically send personalized emails and interview invites with customizable templates, while seamlessly connecting to ATS, job boards, and HR tools to streamline your recruitment.",
    color: "bg-lime-100",
  },
]

export default function RecruiterFeatures() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Everything You Need for Modern Recruitment</h2>
          <p className="text-xl text-gray-600">
            Syphon Recruiter combines AI-powered automation with human insight to transform your hiring process from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="h-full rounded-xl border border-gray-200 bg-white p-4 sm:p-6 shadow-sm transition-all duration-200 hover:shadow-md flex flex-col">
                <div className={`mb-3 sm:mb-5 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg ${feature.color}`}>
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-lg sm:text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-600 flex-grow text-sm sm:text-base">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
