"use client"

import RecruiterAnalyticsDashboard from "@/components/recruiter/recruiter-analytics-dashboard"
import CandidateComparisonTool from "@/components/recruiter/candidate-comparison-tool"
import ApplicantPortal from "@/components/recruiter/applicant-portal"
import TeamCollaborationTool from "@/components/recruiter/team-collaboration-tool"
import Navigation from "@/components/navigation"
import RecruiterHero from "@/components/recruiter/recruiter-hero"
import RecruiterFeatures from "@/components/recruiter/recruiter-features"
import ResumeAnalysisShowcase from "@/components/recruiter/resume-analysis-showcase"
import CandidateFilteringShowcase from "@/components/recruiter/candidate-filtering-showcase"
import InterviewSchedulingShowcase from "@/components/recruiter/interview-scheduling-showcase"
import RecruiterPricing from "@/components/recruiter/recruiter-pricing"
import RecruiterFAQ from "@/components/recruiter/recruiter-faq"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import MobileMenu from "@/components/mobile-menu"
import MobileDisclaimer from "@/components/mobile-disclaimer"
import { useAnalytics } from "@/hooks/use-analytics"

export default function RecruiterPageClient() {
  const { trackEvent } = useAnalytics()
  
  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed top-0 left-0 right-0 z-40 bg-violet-50">
        <div className="container relative grid grid-cols-3 items-center h-16">
          <Link href="/" className="flex items-center gap-2 justify-self-start">
            <Image src="/Syphon Labs Logo 2.png" alt="Syphon Labs" width={32} height={32} className="h-8 w-8 rounded-full" />
            <span className="text-xl font-bold whitespace-nowrap">Syphon Labs</span>
          </Link>
          <div className="hidden md:block justify-self-center">
            <Navigation />
          </div>
          <div className="flex items-center gap-4 justify-self-end">
            {/* Mobile menu is now absolutely positioned */}
          </div>
          <MobileMenu />
        </div>
      </header>

      <main className="flex-1 pt-16">
        <RecruiterHero />

        <section id="resume-analysis" className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Intelligent Resume Scanning</h2>
              <p className="text-xl text-gray-600">
                Our AI automatically scans, analyzes, and scores resumes based on job requirements, saving you hours of
                manual review.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="md:hidden relative">
                <video
                  id="video-resume"
                  src="/recruiter demo videos/intelligen resume scanning.mp4"
                  controls
                  playsInline
                  autoPlay
                  muted
                  loop
                  preload="none"
                  poster="/placeholder.jpg"
                  className="w-full rounded-xl shadow aspect-video"
                />
                <MobileDisclaimer targetVideoId="video-resume" />
              </div>
              <div className="hidden md:block">
                <ResumeAnalysisShowcase />
              </div>
            </div>
          </div>
        </section>

        <section id="candidate-filtering" className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Advanced Candidate Filtering</h2>
              <p className="text-xl text-gray-600">
                Filter candidates with precision using AI-powered criteria matching, skill assessment, and experience
                validation.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="md:hidden relative">
                <video
                  id="video-filtering"
                  src="/recruiter demo videos/advanced candidte filetring.mp4"
                  controls
                  playsInline
                  autoPlay
                  muted
                  loop
                  preload="none"
                  poster="/placeholder.jpg"
                  className="w-full rounded-xl shadow aspect-video"
                />
                <MobileDisclaimer targetVideoId="video-filtering" />
              </div>
              <div className="hidden md:block">
                <CandidateFilteringShowcase />
              </div>
            </div>
          </div>
        </section>

        <section id="interview-scheduling" className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Seamless Interview Management</h2>
              <p className="text-xl text-gray-600">
                Automate interview scheduling, send personalized invitations, and manage the entire interview process
                with AI assistance.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="md:hidden relative">
                <video
                  id="video-interview"
                  src="/recruiter demo videos/seamless interview management.mp4"
                  controls
                  playsInline
                  autoPlay
                  muted
                  loop
                  preload="none"
                  poster="/placeholder.jpg"
                  className="w-full rounded-xl shadow aspect-video"
                />
                <MobileDisclaimer targetVideoId="video-interview" />
              </div>
              <div className="hidden md:block">
                <InterviewSchedulingShowcase />
              </div>
            </div>
          </div>
        </section>

        {/* Feature overview section removed as requested */}

        <section id="analytics-dashboard" className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Comprehensive Recruitment Analytics</h2>
              <p className="text-xl text-gray-600">
                Get deep insights into your recruitment process with AI-powered analytics, team performance metrics, and
                diversity tracking.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="md:hidden relative">
                <video
                  id="video-analytics"
                  src="/recruiter demo videos/compregensice recruitement analytics.mp4"
                  controls
                  playsInline
                  autoPlay
                  muted
                  loop
                  preload="none"
                  poster="/placeholder.jpg"
                  className="w-full rounded-xl shadow aspect-video"
                />
                <MobileDisclaimer targetVideoId="video-analytics" />
              </div>
              <div className="hidden md:block">
                <RecruiterAnalyticsDashboard />
              </div>
            </div>
          </div>
        </section>

        <section id="candidate-comparison" className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Advanced Candidate Comparison</h2>
              <p className="text-xl text-gray-600">
                Compare candidates side-by-side with detailed skill assessments, interview feedback, and AI-powered
                recommendations.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="md:hidden relative">
                <video
                  id="video-comparison"
                  src="/recruiter demo videos/advanced candidate comparison.mp4"
                  controls
                  playsInline
                  autoPlay
                  muted
                  loop
                  preload="none"
                  poster="/placeholder.jpg"
                  className="w-full rounded-xl shadow aspect-video"
                />
                <MobileDisclaimer targetVideoId="video-comparison" />
              </div>
              <div className="hidden md:block">
                <CandidateComparisonTool />
              </div>
            </div>
          </div>
        </section>

        <section id="team-collaboration" className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Seamless Team Collaboration</h2>
              <p className="text-xl text-gray-600">
                Enable your hiring team to collaborate effectively with shared feedback, voting systems, and real-time
                communication.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="md:hidden relative">
                <video
                  id="video-collaboration"
                  src="/recruiter demo videos/team collaboration.mp4"
                  controls
                  playsInline
                  autoPlay
                  muted
                  loop
                  preload="none"
                  poster="/placeholder.jpg"
                  className="w-full rounded-xl shadow aspect-video"
                />
                <MobileDisclaimer targetVideoId="video-collaboration" />
              </div>
              <div className="hidden md:block">
                <TeamCollaborationTool />
              </div>
            </div>
          </div>
        </section>

        {false && (
          <section id="applicant-portal" className="py-20 bg-gradient-to-b from-white to-blue-50">
            <div className="container">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold mb-4">Enhanced Applicant Portal</h2>
                <p className="text-xl text-gray-600">
                  Provide candidates with a modern, intuitive portal to track applications, prepare for interviews, and
                  manage their job search.
                </p>
              </div>

              <div className="max-w-6xl mx-auto">
                <ApplicantPortal />
              </div>
            </div>
          </section>
        )}

        <RecruiterFeatures />
        <RecruiterPricing />
        <RecruiterFAQ />
        <Newsletter />
      </main>

      {/* Contact section removed as requested */}

      <Footer />
    </div>
  )
}
