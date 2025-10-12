"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Navigation from "@/components/navigation"
import MobileMenu from "@/components/mobile-menu"
import Footer from "@/components/footer"
import Testimonials from "@/components/testimonials"
import DraftPricing from "@/components/draft-pricing"
import FAQ from "@/components/faq"
import Newsletter from "@/components/newsletter"
import DraftDemoEmbed from "@/components/draft-demo-embed"
import MobileDisclaimer from "@/components/mobile-disclaimer"
import { ArrowLeft, Upload, FileText, Download, Clock, Zap, Target, CheckCircle, Star, Shield, MessageCircle, Play, Github } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useAnalytics } from "@/hooks/use-analytics"
import { useScrollTracking } from "@/hooks/use-scroll-tracking"
import { useTimeTracking } from "@/hooks/use-time-tracking"

// Color utility to match recruiter feature icon styling
type ColorKey = "violet" | "blue" | "purple" | "indigo" | "pink" | "gray"
const getColorClasses = (color: ColorKey): string => {
  const colorMap: Record<ColorKey, string> = {
    violet: "bg-violet-100 text-violet-600 border-violet-200",
    blue: "bg-blue-100 text-blue-600 border-blue-200",
    purple: "bg-purple-100 text-purple-600 border-purple-200",
    indigo: "bg-indigo-100 text-indigo-600 border-indigo-200",
    pink: "bg-pink-100 text-pink-600 border-pink-200",
    gray: "bg-gray-100 text-gray-600 border-gray-200",
  }
  return colorMap[color]
}

export default function DraftPageClient() {
  const { trackEvent } = useAnalytics()
  useScrollTracking('draft-demo-section', [25, 50, 75, 100])
  useTimeTracking('Draft Demo', [30, 60, 120, 300])
  
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
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-white to-violet-50">
          <div className="container relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                    Ace Your Applications with{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Draft</span>{" "}
                    <span className="text-black">by</span>{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Syphon Labs</span>
                  </h1>
                </div>
                <p className="text-xl text-gray-600 max-w-lg">
                  Stop copy-pasting your resume into ChatGPT and hoping for the best. Draft uses proprietary context engineering to deliver results that are ATS-friendly, highly effective, and tailored for real job success.
                </p>

                <div className="grid grid-cols-2 gap-3 mt-2 mb-4">
                  <div className="flex items-start gap-2">
                    <Zap className="h-5 w-5 text-violet-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">AI Resume Analysis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-violet-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">ATS‑Optimized Formatting</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <FileText className="h-5 w-5 text-violet-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Tailored Cover Letters</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MessageCircle className="h-5 w-5 text-violet-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Real‑Time Edits Chat</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Target className="h-5 w-5 text-violet-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Keyword Match Optimization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Github className="h-5 w-5 text-violet-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">100% Open Source</span>
                  </div>
                </div>

                <div className="flex flex-row gap-4">
                  <Button
                    onClick={() => trackEvent('click', 'Draft CTA', 'Try Draft for Free', 1)}
                    size="lg"
                    className="relative overflow-hidden rounded-full bg-gradient-to-r from-violet-700 via-blue-700 to-indigo-800 text-white px-8 py-4 text-lg shadow-lg ring-1 ring-indigo-500/40 transition-all duration-200 hover:from-violet-800 hover:via-blue-800 hover:to-indigo-900 hover:shadow-2xl hover:scale-[1.02] active:scale-95"
                  >
                    Try Draft for Free
                  </Button>
                  <Link href="https://github.com/" target="_blank">
                    <Button
                      onClick={() => trackEvent('click', 'Draft CTA', 'GitHub Repository', 1)}
                      size="lg"
                      className="relative overflow-hidden rounded-full bg-gray-50 text-gray-800 w-12 h-12 p-0 sm:w-auto sm:h-auto sm:p-4 shadow-lg ring-1 ring-gray-200 transition-all duration-200 hover:bg-gray-100 hover:shadow-xl hover:scale-[1.02] active:scale-95 flex items-center justify-center"
                    >
                      <Github className="h-6 w-6" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative mt-6 sm:mt-8 lg:mt-0 flex items-center justify-center"
              >
                <div className="relative rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
                  <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center px-4 rounded-t-lg">
                    <div className="flex space-x-2">
                      <div className="h-3 w-3 rounded-full bg-red-400"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                      <div className="h-3 w-3 rounded-full bg-green-400"></div>
                    </div>
                                      <div className="flex-1 flex justify-center">
                    <div className="text-sm font-medium text-gray-500">Draft Demo</div>
                  </div>
                </div>
                <div className="relative">
                  <video
                    src="/draft land video.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    poster="/placeholder.jpg"
                    className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover"
                  />
                </div>
                </div>

                <div className="absolute -top-6 -right-6 h-24 w-24 rounded-lg bg-violet-100 blur-2xl opacity-80"></div>
                <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-lg bg-indigo-100 blur-2xl opacity-80"></div>
              </motion.div>
            </div>
          </div>


        </section>

        {/* Comparison Callout Section removed as requested */}

        {/* Demo Section */}
        <section id="demo" className="py-20 bg-gradient-to-b from-white to-violet-50">
          <div id="draft-demo-section">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">See Draft in Action</h2>
            </div>

            {/* How Draft Works Instructions */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50 rounded-2xl border border-violet-200 p-8 shadow-lg">

                
                {/* Steps Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  {/* Step 1 */}
                  <div className="group bg-white rounded-xl p-3 md:p-4 border border-indigo-100 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105">
                    <div className="text-center">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3 shadow-md">
                        <span className="text-white font-bold text-xs md:text-sm">1</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1 md:mb-2 text-xs md:text-sm">Upload & Paste</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">Upload your resume and paste the job description</p>
                    </div>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="group bg-white rounded-xl p-3 md:p-4 border border-violet-100 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105">
                    <div className="text-center">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3 shadow-md">
                        <span className="text-white font-bold text-xs md:text-sm">2</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1 md:mb-2 text-xs md:text-sm">Real-time AI Edits</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">Watch AI analyze and optimize your resume instantly</p>
                    </div>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="group bg-white rounded-xl p-3 md:p-4 border border-purple-100 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105">
                    <div className="text-center">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3 shadow-md">
                        <span className="text-white font-bold text-xs md:text-sm">3</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1 md:mb-2 text-xs md:text-sm">Chat & Refine</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">Chat with AI to refine and improve content</p>
                    </div>
                  </div>
                  
                  {/* Step 4 */}
                  <div className="group bg-white rounded-xl p-3 md:p-4 border border-blue-100 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105">
                    <div className="text-center">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3 shadow-md">
                        <span className="text-white font-bold text-xs md:text-sm">4</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1 md:mb-2 text-xs md:text-sm">Dashboard & Extension</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">Access saved jobs through browser extension</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="md:hidden relative">
                <video
                  id="video-draft"
                  src="/draft demo video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="none"
                  poster="/placeholder.jpg"
                  className="w-full rounded-xl shadow aspect-video max-h-[60vh] object-cover"
                />
                <MobileDisclaimer targetVideoId="video-draft" />
              </div>
              <div className="hidden md:block" onMouseEnter={() => trackEvent('engagement', 'Draft Demo', 'Demo Section Viewed', 1)}>
                <DraftDemoEmbed />
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-violet-50 to-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              {/* Pill removed as requested */}
              <h2 className="text-3xl font-bold mb-4">Everything You Need for Modern Applications</h2>
              <p className="text-xl text-gray-600">Draft combines AI-powered optimization with intuitive controls to transform your application process from start to finish.</p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4 md:gap-8 md:grid-cols-3"
            >
                {[
                	{ icon: <Clock className="h-6 w-6" />, title: "Lightning Fast", description: "Get optimized results in under 60 seconds", color: "violet" as ColorKey },
                	{ icon: <Upload className="h-6 w-6" />, title: "Personalized", description: "Tailored output based on your role and job description", color: "indigo" as ColorKey },
                	{ icon: <Target className="h-6 w-6" />, title: "AI-Powered", description: "Optimizes resume and cover letter with advanced AI", color: "purple" as ColorKey },
                	{ icon: <Zap className="h-6 w-6" />, title: "Proprietary Prompts", description: "Battle-tested prompt engineering for superior results", color: "pink" as ColorKey },
                	{ icon: <CheckCircle className="h-6 w-6" />, title: "ATS-Friendly", description: "Formatted to pass Applicant Tracking Systems", color: "blue" as ColorKey },
                	{ icon: <Star className="h-6 w-6" />, title: "Professional Quality", description: "Polished, industry-standard language and structure", color: "gray" as ColorKey },
                ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 hover:shadow-lg transition-all duration-300 hover:border-violet-200"
                >
                  <div className={`inline-flex p-2 md:p-3 rounded-lg border mb-3 md:mb-4 ${getColorClasses(feature.color)}`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        

        <Testimonials />
        <DraftPricing />
        <FAQ />
        <Newsletter />
      </main>

      <Footer />
    </div>
  )
}
