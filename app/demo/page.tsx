import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Syphon Labs | Demo" },
  description: "Watch demos of Syphon Explorer and Recruiter and see key features in action.",
  alternates: { canonical: "/demo" },
}

import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import MobileMenu from "@/components/mobile-menu"
import { ArrowLeft, Play, Users, Search } from "lucide-react"
import Link from "next/link"

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-violet-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b bg-white/80 backdrop-blur-sm">
        <div className="container relative grid grid-cols-3 items-center h-16">
          <Link href="/" className="flex items-center gap-2 justify-self-start">
            <img src="/Syphon Labs Logo 2.png" alt="Syphon Labs logo" className="h-8 w-8 rounded-full" />
            <span className="text-xl font-bold">Syphon Labs</span>
          </Link>
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

      <main className="container py-20 pt-36">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Product Demos</h1>
          <p className="text-xl text-gray-600">
            See how Syphon Labs products transform your workflow with intelligent AI solutions.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Syphon Explorer Demo */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-xl bg-violet-100 flex items-center justify-center">
                <Search className="h-6 w-6 text-violet-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Syphon Explorer</h2>
                <p className="text-gray-600">AI-powered file system</p>
              </div>
            </div>
            
            <div className="aspect-video bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
              <div className="text-center">
                <Play className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Demo video coming soon</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <h3 className="font-semibold">Key Features:</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Automatic file organization</li>
                <li>• AI-powered content analysis</li>
                <li>• Smart task management</li>
                <li>• Paper Trail View system</li>
              </ul>
            </div>

            <Link href="/explorer">
              <Button className="w-full bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700">
                Try Syphon Explorer
              </Button>
            </Link>
          </div>

          {/* Syphon Recruiter Demo */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Syphon Recruiter</h2>
                <p className="text-gray-600">AI recruitment platform</p>
              </div>
            </div>
            
            <div className="aspect-video bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
              <div className="text-center">
                <Play className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Demo video coming soon</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <h3 className="font-semibold">Key Features:</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• AI resume analysis</li>
                <li>• Automated scheduling</li>
                <li>• Candidate comparison</li>
                <li>• Applicant portal</li>
              </ul>
            </div>

            <Link href="/recruiter">
              <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700">
                Try Syphon Recruiter
              </Button>
            </Link>
          </div>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
          <p className="text-gray-600 mb-6">Start your free trial today and experience the power of AI-driven productivity.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/trial">
              <Button size="lg" className="bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/company">
              <Button size="lg" variant="outline">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
} 