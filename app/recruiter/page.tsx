import RecruiterAnalyticsDashboard from "@/components/recruiter/recruiter-analytics-dashboard"
import CandidateComparisonTool from "@/components/recruiter/candidate-comparison-tool"
import ApplicantPortal from "@/components/recruiter/applicant-portal"
import TeamCollaborationTool from "@/components/recruiter/team-collaboration-tool"
import FeatureOverview from "@/components/recruiter/feature-overview"
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
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function RecruiterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur-sm">
        <div className="container grid grid-cols-3 items-center h-16">
          <Link href="/" className="flex items-center gap-2 justify-self-start">
            <img src="/Syphon Labs Logo 2.png" alt="Syphon Labs" className="h-8 w-8 rounded-full" />
            <span className="text-xl font-bold">Syphon Labs</span>
          </Link>
          <div className="hidden md:block justify-self-center">
            <Navigation />
          </div>
          <div />
        </div>
      </header>

      <main className="flex-1">
        <RecruiterHero />

        <section id="resume-analysis" className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm text-violet-700 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-violet-500 mr-2"></span>
                AI-Powered Analysis
              </div>
              <h2 className="text-3xl font-bold mb-4">Intelligent Resume Scanning</h2>
              <p className="text-xl text-gray-600">
                Our AI automatically scans, analyzes, and scores resumes based on job requirements, saving you hours of
                manual review.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <ResumeAnalysisShowcase />
            </div>
          </div>
        </section>

        <section id="candidate-filtering" className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-700 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                Smart Filtering
              </div>
              <h2 className="text-3xl font-bold mb-4">Advanced Candidate Filtering</h2>
              <p className="text-xl text-gray-600">
                Filter candidates with precision using AI-powered criteria matching, skill assessment, and experience
                validation.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <CandidateFilteringShowcase />
            </div>
          </div>
        </section>

        <section id="interview-scheduling" className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-3 py-1 text-sm text-green-700 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                Automated Scheduling
              </div>
              <h2 className="text-3xl font-bold mb-4">Seamless Interview Management</h2>
              <p className="text-xl text-gray-600">
                Automate interview scheduling, send personalized invitations, and manage the entire interview process
                with AI assistance.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <InterviewSchedulingShowcase />
            </div>
          </div>
        </section>

        <FeatureOverview />

        <section id="analytics-dashboard" className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-sm text-purple-700 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
                Advanced Analytics
              </div>
              <h2 className="text-3xl font-bold mb-4">Comprehensive Recruitment Analytics</h2>
              <p className="text-xl text-gray-600">
                Get deep insights into your recruitment process with AI-powered analytics, team performance metrics, and
                diversity tracking.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <RecruiterAnalyticsDashboard />
            </div>
          </div>
        </section>

        <section id="candidate-comparison" className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm text-indigo-700 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2"></span>
                Smart Comparison
              </div>
              <h2 className="text-3xl font-bold mb-4">Advanced Candidate Comparison</h2>
              <p className="text-xl text-gray-600">
                Compare candidates side-by-side with detailed skill assessments, interview feedback, and AI-powered
                recommendations.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <CandidateComparisonTool />
            </div>
          </div>
        </section>

        <section id="team-collaboration" className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-sm text-teal-700 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-teal-500 mr-2"></span>
                Team Collaboration
              </div>
              <h2 className="text-3xl font-bold mb-4">Seamless Team Collaboration</h2>
              <p className="text-xl text-gray-600">
                Enable your hiring team to collaborate effectively with shared feedback, voting systems, and real-time
                communication.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <TeamCollaborationTool />
            </div>
          </div>
        </section>

        <section id="applicant-portal" className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-700 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                Candidate Experience
              </div>
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
