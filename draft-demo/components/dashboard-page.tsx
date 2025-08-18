"use client"

import { motion } from "framer-motion"
import DraftAppHeader from "@/components/DraftAppHeader"
import JobSection from "@/components/JobSection"
import type { SavedJob, JobApplication } from "@/types/resume"

interface DashboardPageProps {
  onNavigateHome?: () => void
}

const DashboardPage = ({ onNavigateHome }: DashboardPageProps) => {
  const mockSavedJobs: SavedJob[] = [
    {
      id: "1",
      company: "Stripe",
      jobTitle: "Senior Frontend Engineer",
      dateAdded: new Date("2024-01-20"),
      jobDescription:
        "Join our payments platform team to build the future of online commerce. We're looking for an experienced frontend engineer to work on our dashboard and developer tools.",
      location: "San Francisco, CA",
    },
    {
      id: "2",
      company: "Airbnb",
      jobTitle: "Full Stack Developer",
      dateAdded: new Date("2024-01-18"),
      jobDescription:
        "Help us create magical travel experiences by building scalable web applications. Work with React, Node.js, and our design system.",
      location: "Remote",
    },
    {
      id: "3",
      company: "Shopify",
      jobTitle: "React Developer",
      dateAdded: new Date("2024-01-16"),
      jobDescription:
        "Build merchant-facing tools and customer experiences that power millions of businesses worldwide. Strong React and TypeScript skills required.",
      location: "Toronto, ON",
    },
    {
      id: "4",
      company: "Figma",
      jobTitle: "Frontend Engineer",
      dateAdded: new Date("2024-01-14"),
      jobDescription:
        "Work on the collaborative design platform used by millions of designers and developers. Help us push the boundaries of web technology.",
      location: "San Francisco, CA",
    },
    {
      id: "5",
      company: "Discord",
      jobTitle: "Senior Software Engineer",
      dateAdded: new Date("2024-01-12"),
      jobDescription:
        "Build features that connect millions of users in gaming communities. Work with modern web technologies and real-time systems.",
      location: "Remote",
    },
    {
      id: "6",
      company: "Notion",
      jobTitle: "Frontend Developer",
      dateAdded: new Date("2024-01-10"),
      jobDescription:
        "Help us build the all-in-one workspace that's changing how teams collaborate. Work on complex editor interfaces and real-time collaboration.",
      location: "San Francisco, CA",
    },
    {
      id: "7",
      company: "Linear",
      jobTitle: "Full Stack Engineer",
      dateAdded: new Date("2024-01-08"),
      jobDescription:
        "Join our small team building the project management tool that engineering teams love. Work across the entire stack with modern technologies.",
      location: "Remote",
    },
    {
      id: "8",
      company: "Vercel",
      jobTitle: "Developer Experience Engineer",
      dateAdded: new Date("2024-01-06"),
      jobDescription:
        "Help developers build faster with our frontend cloud platform. Work on developer tools, documentation, and community engagement.",
      location: "Remote",
    },
  ]

  const mockApplicationHistory: JobApplication[] = [
    {
      id: "9",
      company: "Google",
      jobTitle: "Software Engineer",
      date: new Date("2024-01-22"),
      status: "applied",
      location: "Mountain View, CA",
      resumeVersion: "2.1",
      coverLetterGenerated: true,
    },
    {
      id: "10",
      company: "Meta",
      jobTitle: "React Developer",
      date: new Date("2024-01-20"),
      status: "generated",
      location: "Menlo Park, CA",
      resumeVersion: "2.0",
      coverLetterGenerated: true,
    },
    {
      id: "11",
      company: "Netflix",
      jobTitle: "Senior Frontend Engineer",
      date: new Date("2024-01-18"),
      status: "applied",
      location: "Los Gatos, CA",
      resumeVersion: "1.9",
      coverLetterGenerated: false,
    },
    {
      id: "12",
      company: "Uber",
      jobTitle: "Full Stack Developer",
      date: new Date("2024-01-16"),
      status: "generated",
      location: "San Francisco, CA",
      resumeVersion: "1.8",
      coverLetterGenerated: true,
    },
    {
      id: "13",
      company: "Spotify",
      jobTitle: "Frontend Engineer",
      date: new Date("2024-01-14"),
      status: "applied",
      location: "New York, NY",
      resumeVersion: "1.7",
      coverLetterGenerated: true,
    },
    {
      id: "14",
      company: "Slack",
      jobTitle: "Senior React Developer",
      date: new Date("2024-01-12"),
      status: "generated",
      location: "Remote",
      resumeVersion: "1.6",
      coverLetterGenerated: false,
    },
    {
      id: "15",
      company: "Dropbox",
      jobTitle: "Web Developer",
      date: new Date("2024-01-10"),
      status: "applied",
      location: "San Francisco, CA",
      resumeVersion: "1.5",
      coverLetterGenerated: true,
    },
    {
      id: "16",
      company: "GitHub",
      jobTitle: "Frontend Engineer",
      date: new Date("2024-01-08"),
      status: "generated",
      location: "Remote",
      resumeVersion: "1.4",
      coverLetterGenerated: true,
    },
    {
      id: "17",
      company: "Twitch",
      jobTitle: "Software Engineer",
      date: new Date("2024-01-06"),
      status: "applied",
      location: "San Francisco, CA",
      resumeVersion: "1.3",
      coverLetterGenerated: false,
    },
    {
      id: "18",
      company: "Reddit",
      jobTitle: "Full Stack Engineer",
      date: new Date("2024-01-04"),
      status: "generated",
      location: "Remote",
      resumeVersion: "1.2",
      coverLetterGenerated: true,
    },
    {
      id: "19",
      company: "Pinterest",
      jobTitle: "React Developer",
      date: new Date("2024-01-02"),
      status: "applied",
      location: "San Francisco, CA",
      resumeVersion: "1.1",
      coverLetterGenerated: true,
    },
    {
      id: "20",
      company: "Square",
      jobTitle: "Frontend Developer",
      date: new Date("2023-12-30"),
      status: "generated",
      location: "San Francisco, CA",
      resumeVersion: "1.0",
      coverLetterGenerated: false,
    },
  ]

  return (
    <div className="min-h-screen w-full bg-stone-50/80 relative overflow-hidden">
      {/* Header */}
      <DraftAppHeader onLogoClick={onNavigateHome} />

      {/* Main Content */}
      <main className="px-6 py-8" role="main">
        <div className="max-w-7xl mx-auto">
          {/* Two-column layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[calc(100vh-250px)]"
          >
            {/* Your Saved Jobs */}
            <div className="glass rounded-2xl p-6 overflow-y-auto">
              <JobSection
                title="Your Saved Jobs"
                jobs={mockSavedJobs}
                type="saved"
                emptyMessage="Start by saving jobs you're interested in applying to. You can save jobs from job boards and we'll help you create tailored resumes."
              />
            </div>

            {/* Application History */}
            <div className="glass rounded-2xl p-6 overflow-y-auto">
              <JobSection
                title="Application History"
                jobs={mockApplicationHistory}
                type="applied"
                emptyMessage="Once you generate resumes and cover letters for jobs, they'll appear here. Keep track of all your applications in one place."
              />
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

export default DashboardPage
