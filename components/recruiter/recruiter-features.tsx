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
    title: "Smart Candidate Filtering",
    description:
      "Filter candidates with precision using AI-powered criteria matching, skill assessment, and experience validation with customizable filters.",
    color: "bg-indigo-100",
  },
  {
    icon: <Calendar className="h-6 w-6 text-blue-600" />,
    title: "Automated Interview Scheduling",
    description:
      "Streamline interview scheduling with automatic calendar integration, timezone detection, and personalized invitation emails.",
    color: "bg-blue-100",
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
    title: "Candidate Pipeline Management",
    description:
      "Track candidates through every stage of your hiring process with customizable pipelines and automated status updates.",
    color: "bg-amber-100",
  },
  {
    icon: <Shield className="h-6 w-6 text-emerald-600" />,
    title: "Bias-Free Evaluation",
    description:
      "Reduce unconscious bias in hiring with AI-powered blind resume screening and objective candidate scoring algorithms.",
    color: "bg-emerald-100",
  },
  {
    icon: <Search className="h-6 w-6 text-pink-600" />,
    title: "Intelligent Candidate Search",
    description:
      "Find the perfect candidates using natural language search, semantic matching, and AI-powered talent discovery.",
    color: "bg-pink-100",
  },
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
  {
    icon: <Target className="h-6 w-6 text-rose-600" />,
    title: "Job Matching Algorithm",
    description:
      "Advanced matching algorithm that scores candidates based on job requirements, cultural fit, and career trajectory predictions.",
    color: "bg-rose-100",
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-lime-600" />,
    title: "Automated Communication",
    description:
      "Send personalized emails, interview invitations, and follow-ups automatically with customizable templates and scheduling.",
    color: "bg-lime-100",
  },
  {
    icon: <Zap className="h-6 w-6 text-orange-600" />,
    title: "Integration Hub",
    description:
      "Seamlessly integrate with popular ATS systems, job boards, and HR tools to centralize your recruitment workflow.",
    color: "bg-orange-100",
  },
]

export default function RecruiterFeatures() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">AI-Powered Recruitment Platform</h2>
          <p className="text-xl text-gray-600">
            Syphon Recruiter transforms your hiring process with intelligent automation, bias-free evaluation, and
            data-driven insights.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="h-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md flex flex-col">
                <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg ${feature.color}`}>
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-600 flex-grow">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
