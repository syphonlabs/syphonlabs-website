"use client"

import { motion } from "framer-motion"
import {
  Columns,
  BrainCircuit,
  Bot,
  Zap,
  Download,
  FileText,
  Search,
  Clock,
  BarChart3,
  Users,
  MicroscopeIcon as MagnifyingGlass,
} from "lucide-react"

const features = [
  {
    icon: <BrainCircuit className="h-6 w-6 text-violet-600" />,
    title: "GPT-Powered File Analysis",
    description:
      "Advanced GPT model analyzes your files, extracting key information and providing insights to help you work more efficiently.",
    color: "bg-violet-100",
  },
  {
    icon: <Download className="h-6 w-6 text-indigo-600" />,
    title: "Automatic Downloads Organization",
    description:
      "AI automatically suggests the perfect folder for your downloaded files and moves them with a single click, keeping everything organized.",
    color: "bg-indigo-100",
  },
  {
    icon: <Search className="h-6 w-6 text-blue-600" />,
    title: "Intelligent File Explorer",
    description:
      "Transform your local file system with AI-powered organization, search, and insights directly integrated with your existing files - no cloud storage required.",
    color: "bg-blue-100",
  },
  {
    icon: <Bot className="h-6 w-6 text-teal-600" />,
    title: "AI Task Overlay",
    description:
      "See task information, deadlines, and AI insights directly on your files and folders, keeping your work context-aware.",
    color: "bg-teal-100",
  },
  {
    icon: <Clock className="h-6 w-6 text-amber-600" />,
    title: "Smart Deadline Management",
    description:
      "AI analyzes your files and automatically suggests deadlines based on content, helping you prioritize your work.",
    color: "bg-amber-100",
  },
  {
    icon: <FileText className="h-6 w-6 text-emerald-600" />,
    title: "Content-Aware Organization",
    description:
      "Files are automatically categorized based on their content, making it easy to find what you need when you need it.",
    color: "bg-emerald-100",
  },
  {
    icon: <Columns className="h-6 w-6 text-pink-600" />,
    title: "Paper Trail View",
    description:
      "Organize your workspace with our intuitive Paper Trail View interface. Customize layouts and view multiple sections simultaneously.",
    color: "bg-pink-100",
  },
  {
    icon: <Zap className="h-6 w-6 text-purple-600" />,
    title: "AI-Powered Recommendations",
    description:
      "Get intelligent suggestions for related files, next actions, and productivity improvements based on your work patterns.",
    color: "bg-purple-100",
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-cyan-600" />,
    title: "Analytics Dashboard",
    description:
      "Gain insights into your file usage patterns, storage analytics, and AI-powered productivity metrics to optimize your workflow.",
    color: "bg-cyan-100",
  },
  {
    icon: <MagnifyingGlass className="h-6 w-6 text-rose-600" />,
    title: "Smart File Search & Discovery",
    description:
      "Find files using natural language queries and content-aware search that looks inside documents, images, and PDFs with AI-powered recommendations.",
    color: "bg-rose-100",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">AI-Powered File Explorer for Modern Work</h2>
          <p className="text-xl text-gray-600">
            Syphon Explorer transforms your file system with intelligent organization, task management, and AI insights.
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
