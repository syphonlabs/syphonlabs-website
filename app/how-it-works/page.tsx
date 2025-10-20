import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Syphon Labs | How It Works" },
  description:
    "Understand how Syphon Explorer uses AI for organization, smart search, and context‑aware automation.",
  alternates: { canonical: "/how-it-works" },
}
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import MobileMenu from "@/components/mobile-menu"
import HowItWorks from "@/components/how-it-works"
import Footer from "@/components/footer"

export default function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed top-0 left-0 right-0 z-40 border-b bg-white/80 backdrop-blur-sm">
        <div className="container relative grid grid-cols-3 items-center h-16">
          <div className="flex items-center gap-2 justify-self-start">
            <Link href="/" className="flex items-center gap-2">
              <img src="/Syphon Labs Logo 2.png" alt="Syphon Labs logo" className="h-8 w-8 rounded-full" />
              <span className="text-xl font-bold">Syphon Labs</span>
            </Link>
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
              Sign up
            </Button>
            {/* Mobile menu is now absolutely positioned */}
          </div>
          <MobileMenu />
        </div>
      </header>

      <main className="flex-1 pt-16">
        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-violet-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm text-violet-700 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-violet-500 mr-2"></span>
                How It Works
              </div>
              <h1 className="text-4xl font-bold mb-4">Understanding Pheobe Explorer</h1>
              <p className="text-xl text-gray-600">
                Discover how our intelligent file explorer transforms your workflow with AI-powered organization and
                insights.
              </p>
            </div>
          </div>
        </section>

        <HowItWorks />

        <section className="py-12 bg-white">
          <div className="container text-center">
            <h2 className="text-2xl font-bold mb-6">Ready to transform your file management?</h2>
            <Button className="bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700">
              Get Started Today
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
