import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Syphon Labs | Explorer" },
  description:
    "AI‑powered file explorer with automatic downloads organization, smart search, analytics, and collaborative workspaces.",
  alternates: { canonical: "/explorer" },
  openGraph: {
    title: "Syphon Explorer — AI File System",
    description:
      "Transform file management with intelligent organization, natural‑language search, analytics, and more.",
    url: "/explorer",
    siteName: "Syphon Labs",
    images: [{ url: "/Syphon Labs Logo 2.png", width: 512, height: 512, alt: "Syphon Labs" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syphon Explorer — AI File System",
    description:
      "Transform file management with intelligent organization, natural‑language search, analytics, and more.",
    images: ["/Syphon Labs Logo 2.png"],
  },
}

import { Button } from "@/components/ui/button"
import Hero from "@/components/hero"
import Pricing from "@/components/pricing"
import FAQ from "@/components/faq"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"
import Testimonials from "@/components/testimonials"
import PaperTrailViewShowcase from "@/components/paper-trail-view-showcase"
import AutoDownloadsShowcase from "@/components/auto-downloads-showcase"
import FileExplorerPresentation from "@/components/file-explorer-presentation"
import MobileMenu from "@/components/mobile-menu"
import AnalyticsDashboardShowcase from "@/components/analytics-dashboard-showcase"
import SmartSearchShowcase from "@/components/smart-search-showcase"
import CollaborativeWorkspacesShowcase from "@/components/collaborative-workspaces-showcase"
import Navigation from "@/components/navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ExplorerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed top-0 left-0 right-0 z-40 border-b bg-white/80 backdrop-blur-sm">
        <div className="container relative grid grid-cols-3 items-center h-16">
          <div className="flex items-center gap-4 justify-self-start">
            <Link href="/">
              <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-violet-500 to-indigo-600 text-white font-semibold shadow-lg hover:from-violet-600 hover:to-indigo-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-400">
                <ArrowLeft className="h-5 w-5" />
                Back to Home
              </button>
            </Link>
            <img src="/Syphon Labs Logo 2.png" alt="Syphon Labs logo" className="h-8 w-8 rounded-full ml-4" />
            <span className="text-xl font-bold">Syphon Labs</span>
          </div>
          <div className="hidden md:block justify-self-center">
            <Navigation />
          </div>
          <div className="flex items-center gap-4 justify-self-end">
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">
              Log in
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700"
            >
              Get Started
            </Button>
            {/* Mobile menu is now absolutely positioned */}
          </div>
          <MobileMenu />
        </div>
      </header>

      <main className="flex-1 pt-16">
        <Hero />
        <section id="presentation" className="py-20 bg-gradient-to-b from-white to-violet-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm text-violet-700 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-violet-500 mr-2"></span>
                Interactive Demo
              </div>
              <h2 className="text-3xl font-bold mb-4">See Syphon Explorer in Action</h2>
              <p className="text-xl text-gray-600">
                Watch how our AI-powered file explorer transforms your workflow with intelligent organization and
                insights.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <FileExplorerPresentation />
            </div>
          </div>
        </section>
        <section id="auto-downloads" className="py-20 bg-gradient-to-b from-white to-violet-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm text-violet-700 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-violet-500 mr-2"></span>
                Featured Functionality
              </div>
              <h2 className="text-3xl font-bold mb-4">Automatic Downloads Organization</h2>
              <p className="text-xl text-gray-600">
                Never worry about messy downloads again. Syphon Explorer's AI automatically suggests the perfect folder
                for each file and moves it with a single click.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <AutoDownloadsShowcase />
            </div>
          </div>
        </section>
        <section id="smart-search" className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-sm text-rose-700 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-rose-500 mr-2"></span>
                Powerful Search
              </div>
              <h2 className="text-3xl font-bold mb-4">Smart File Search & Discovery</h2>
              <p className="text-xl text-gray-600">
                Find exactly what you need with natural language queries and content-aware search that looks inside your
                documents, images, and PDFs.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <SmartSearchShowcase />
            </div>
          </div>
        </section>
        <PaperTrailViewShowcase />
        <section id="analytics-dashboard" className="py-20 bg-gradient-to-b from-white to-violet-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm text-violet-700 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-violet-500 mr-2"></span>
                Advanced Analytics
              </div>
              <h2 className="text-3xl font-bold mb-4">Data-Driven File Management</h2>
              <p className="text-xl text-gray-600">
                Gain valuable insights into your file usage patterns, storage analytics, and AI-powered productivity
                metrics to optimize your workflow.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <AnalyticsDashboardShowcase />
            </div>
          </div>
        </section>
        <Testimonials />
        <Pricing />
        <FAQ />
        <Newsletter />
      </main>

      <Footer />
    </div>
  )
} 