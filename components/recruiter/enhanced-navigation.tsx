"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, BarChart3, GitCompare, MessageSquare, Calendar, FileText, Search, User } from "lucide-react"

export default function EnhancedNavigation() {
  const [isOpen, setIsOpen] = useState(false)

  const features = [
    {
      name: "Resume Analysis",
      href: "#resume-analysis",
      description: "AI-powered resume scanning and scoring",
      icon: <FileText className="h-4 w-4" />,
    },
    {
      name: "Candidate Filtering",
      href: "#candidate-filtering",
      description: "Advanced filtering with AI matching",
      icon: <Search className="h-4 w-4" />,
    },
    {
      name: "Interview Scheduling",
      href: "#interview-scheduling",
      description: "Automated scheduling and management",
      icon: <Calendar className="h-4 w-4" />,
    },
    {
      name: "Analytics Dashboard",
      href: "#analytics-dashboard",
      description: "Comprehensive recruitment metrics",
      icon: <BarChart3 className="h-4 w-4" />,
    },
    {
      name: "Candidate Comparison",
      href: "#candidate-comparison",
      description: "Side-by-side candidate evaluation",
      icon: <GitCompare className="h-4 w-4" />,
    },
    {
      name: "Team Collaboration",
      href: "#team-collaboration",
      description: "Shared feedback and voting",
      icon: <MessageSquare className="h-4 w-4" />,
    },
    {
      name: "Applicant Portal",
      href: "#applicant-portal",
      description: "Enhanced candidate experience",
      icon: <User className="h-4 w-4" />,
    },
  ]

  return (
    <nav className="hidden md:flex items-center space-x-4">
      <Link href="#pricing">
        <button className="px-5 py-2 rounded-full bg-gradient-to-r from-violet-500 to-indigo-600 text-white font-semibold shadow hover:from-violet-600 hover:to-indigo-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-400">
          Pricing
        </button>
      </Link>
      {/* Contact button removed as requested */}
    </nav>
  )
}
