"use client"

import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import MobileMenu from "@/components/mobile-menu"
import Footer from "@/components/footer"
import Testimonials from "@/components/testimonials"
import DraftPricing from "@/components/draft-pricing"
import FAQ from "@/components/faq"
import Newsletter from "@/components/newsletter"
import { ArrowLeft, Upload, FileText, Download, Clock, Zap, Target, CheckCircle, Star, Shield, MessageCircle, Play } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

// Color utility to match recruiter feature icon styling
const getColorClasses = (color) => {
  const colorMap = {
    violet: "bg-violet-100 text-violet-600 border-violet-200",
    blue: "bg-blue-100 text-blue-600 border-blue-200",
    purple: "bg-purple-100 text-purple-600 border-purple-200",
    indigo: "bg-indigo-100 text-indigo-600 border-indigo-200",
    pink: "bg-pink-100 text-pink-600 border-pink-200",
    gray: "bg-gray-100 text-gray-600 border-gray-200",
  }
  return colorMap[color] || colorMap.violet
}

export default function DraftPage() {
  const slides = [
    { src: "/draft page 1.jpg", caption: "1. Upload your resume and paste the job description" },
    { src: "/draft page 2.jpg", caption: "2. Review AI‑tailored resume & cover letter, refine, then download" },
  ]
  const [demoIndex, setDemoIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setDemoIndex((prev) => (prev + 1) % slides.length)
    }, 3500)
    return () => clearInterval(id)
  }, [paused, slides.length])

  const goPrev = () => setDemoIndex((prev) => (prev - 1 + slides.length) % slides.length)
  const goNext = () => setDemoIndex((prev) => (prev + 1) % slides.length)
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
          <div className="flex items-center gap-4 justify-self-end">
            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-white to-violet-50">
          <div className="absolute inset-0 pointer-events-none z-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.25, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="absolute top-1/4 left-1/3 h-[32rem] w-[32rem] rounded-full bg-violet-300 blur-3xl animate-pulse"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.2, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="absolute bottom-1/4 right-1/4 h-[28rem] w-[28rem] rounded-full bg-indigo-200 blur-3xl animate-pulse"
            />
          </div>
          <div className="container relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto lg:mx-0 text-center lg:text-left"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-center justify-center lg:justify-start gap-4 mb-6"
                >
                  <motion.img
                    src="/Syphon Labs Logo 2.png"
                    alt="Syphon Labs"
                    className="h-16 w-16 rounded-full shadow-lg border-4 border-violet-200 animate-pulse"
                    initial={{ rotate: -10 }}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                  />
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm text-violet-700 shadow-md"
                  >
                    <span className="flex h-2 w-2 rounded-full bg-violet-500 mr-2 animate-pulse"></span>
                    AI-Powered Resume Optimization
                  </motion.div>
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6 drop-shadow-lg"
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 animate-gradient-x">Draft</span>
                  <span className="block">By <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 animate-gradient-x">Syphon Labs</span></span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto lg:mx-0 leading-relaxed"
                >
                  <span className="block mt-4 text-lg font-semibold text-violet-700">Stop copy-pasting your resume into ChatGPT and hoping for the best.</span>
                  <span className="block mt-1 text-base text-gray-700">Syphon Draft uses proprietary prompt engineering to deliver results that are <span className='font-bold text-indigo-700'>ATS-friendly</span>, highly effective, and tailored for real job success.</span>
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 mb-6 justify-items-center lg:justify-items-start text-left max-w-3xl mx-auto lg:mx-0">
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <Zap className="h-5 w-5 text-violet-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">AI Resume Analysis</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <CheckCircle className="h-5 w-5 text-violet-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">ATS‑Optimized Formatting</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <FileText className="h-5 w-5 text-violet-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Tailored Cover Letters</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <MessageCircle className="h-5 w-5 text-violet-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Real‑Time Edits Chat</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <Target className="h-5 w-5 text-violet-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Keyword Match Optimization</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <Star className="h-5 w-5 text-violet-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Professional Quality</span>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
                >
                  <Link href="/trial">
                    <Button
                      size="lg"
                      className="relative overflow-hidden rounded-full bg-gradient-to-r from-violet-700 via-blue-700 to-indigo-800 text-white px-8 py-4 text-lg shadow-lg ring-1 ring-indigo-500/40 transition-all duration-200 hover:from-violet-800 hover:via-blue-800 hover:to-indigo-900 hover:shadow-2xl hover:scale-[1.02] active:scale-95"
                    >
                      Try Draft for Free
                    </Button>
                  </Link>
                </motion.div>

                {/* Speed badges removed as requested */}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative mt-8 lg:mt-0"
              >
                <div className="relative rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
                  <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center px-4 rounded-t-lg">
                    <div className="flex space-x-2">
                      <div className="h-3 w-3 rounded-full bg-red-400"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                      <div className="h-3 w-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="text-sm font-medium text-gray-500">Syphon Draft Demo</div>
                    </div>
                  </div>
                  <div className="relative">
                    <video
                      src="/draft land video.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 h-24 w-24 rounded-lg bg-violet-100 blur-2xl opacity-80"></div>
                <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-lg bg-indigo-100 blur-2xl opacity-80"></div>
              </motion.div>
            </div>
          </div>

          {/* Background elements - match landing hero spheres */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
        </section>

        {/* Comparison Callout Section removed as requested */}

        {/* Demo Section */}
        {/* Interactive Demo with working flow */}
        <section id="demo" className="py-20 bg-gradient-to-b from-white to-violet-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">See Syphon Draft in Action</h2>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="grid gap-10 lg:grid-cols-2 items-center">
                {/* Explainer (centered and redesigned) */}
                <div className="lg:col-span-2 px-2">
                  <div className="rounded-2xl border border-violet-200 bg-white/70 backdrop-blur p-8 shadow-sm max-w-3xl mx-auto text-center space-y-6">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Upload your resume, paste a job description, and Draft generates ATS‑friendly documents tailored to the role. Use AI to refine tone and content instantly, then download.
                    </p>
                    <div className="grid gap-6 sm:grid-cols-3">
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-10 w-10 rounded-lg bg-violet-100 text-violet-700 flex items-center justify-center">
                          <Upload className="h-4 w-4" />
                        </div>
                        <div className="font-medium">Upload & Paste</div>
                        <div className="text-gray-600 text-sm">Add your existing resume and the target job description.</div>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-10 w-10 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center">
                          <Zap className="h-4 w-4" />
                        </div>
                        <div className="font-medium">AI Analysis</div>
                        <div className="text-gray-600 text-sm">We align keywords, quantify impact, and optimize structure.</div>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-10 w-10 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center">
                          <Download className="h-4 w-4" />
                        </div>
                        <div className="font-medium">Refine & Download</div>
                        <div className="text-gray-600 text-sm">Make quick edits with AI, then export as a polished PDF.</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Viewer */}
                <div className="rounded-2xl border border-violet-200 bg-white/80 backdrop-blur p-4 md:p-6 shadow-sm lg:col-span-2">
                  <div
                    className="relative w-full border border-gray-200 bg-white shadow-lg overflow-hidden"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                  >
                    {/* Header */}
                    <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center px-4">
                      <div className="flex space-x-2">
                        <div className="h-3 w-3 rounded-full bg-red-400"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                        <div className="h-3 w-3 rounded-full bg-green-400"></div>
                      </div>
                      <div className="flex-1 flex justify-center">
                        <div className="text-sm font-medium text-gray-500">Syphon Draft Demo</div>
                      </div>
                    </div>

                    {/* Content fits image size (no overlay text on image) */}
                    <div className="bg-white">
                      <img
                        src={slides[demoIndex].src}
                        alt={slides[demoIndex].caption}
                        className="block w-full h-auto"
                        draggable={false}
                      />
                    </div>
                  </div>
                  {/* Controls outside the image/frame content */}
                  <div className="flex items-center justify-between gap-3 mt-3">
                    <div className="flex gap-2">
                      {slides.map((_, idx) => (
                        <button
                          key={idx}
                          aria-label={`Go to slide ${idx + 1}`}
                          onClick={() => setDemoIndex(idx)}
                          className={`h-2.5 w-2.5 rounded-full ${demoIndex === idx ? "bg-violet-600" : "bg-gray-300"}`}
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline" className="text-xs" onClick={goPrev}>Prev</Button>
                      <Button size="sm" className="text-xs bg-violet-600 hover:bg-violet-700" onClick={goNext}>Next</Button>
                    </div>
                  </div>
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
              <p className="text-xl text-gray-600">Syphon Draft combines AI-powered optimization with intuitive controls to transform your application process from start to finish.</p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid gap-8 md:grid-cols-3"
            >
              {[
                { icon: <Clock className="h-6 w-6" />, title: "Lightning Fast", description: "Get optimized results in under 60 seconds", color: "violet" },
                { icon: <Upload className="h-6 w-6" />, title: "Personalized", description: "Tailored output based on your role and job description", color: "indigo" },
                { icon: <Target className="h-6 w-6" />, title: "AI-Powered", description: "Optimizes resume and cover letter with advanced AI", color: "purple" },
                { icon: <Zap className="h-6 w-6" />, title: "Proprietary Prompts", description: "Battle-tested prompt engineering for superior results", color: "pink" },
                { icon: <CheckCircle className="h-6 w-6" />, title: "ATS-Friendly", description: "Formatted to pass Applicant Tracking Systems", color: "blue" },
                { icon: <Star className="h-6 w-6" />, title: "Professional Quality", description: "Polished, industry-standard language and structure", color: "gray" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-violet-200"
                >
                  <div className={`inline-flex p-3 rounded-lg border mb-4 ${getColorClasses(feature.color)}`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
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