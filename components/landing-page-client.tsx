"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useAnalytics } from "@/hooks/use-analytics"
import {
  ArrowRight,
  BrainCircuit,
  Users,
  Search,
  Shield,
  Globe,
  TrendingUp,
  CheckCircle,
  Star,
  Building,
  Target,
  Lightbulb,
  Zap,
  FileText,
  FolderKanban,
  BarChart3,
  Clock,
  Award,
  Play,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Rocket,
  Eye,
  Code,
  Cpu,
  ChevronDown,
} from "lucide-react"
import Navigation from "@/components/navigation"
import MobileMenu from "@/components/mobile-menu"
import Footer from "@/components/footer"
import Newsletter from "@/components/newsletter"

export default function LandingPageClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const { trackEvent } = useAnalytics()
  
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
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
        <section className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex items-center py-16 md:py-24 bg-gradient-to-br from-violet-50 via-white to-indigo-50">
          {/* Animated background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            
            {/* Floating particles */}
            <div className="absolute top-1/5 left-1/5 w-4 h-4 bg-violet-400 rounded-full animate-pulse opacity-60"></div>
            <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-indigo-400 rounded-full animate-pulse opacity-60 animation-delay-1000"></div>
            <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60 animation-delay-2000"></div>
            <div className="absolute top-2/3 right-1/5 w-3 h-3 bg-violet-400 rounded-full animate-pulse opacity-60 animation-delay-3000"></div>
            <div className="absolute bottom-1/5 right-1/3 w-4 h-4 bg-indigo-400 rounded-full animate-pulse opacity-60 animation-delay-4000"></div>
            
            {/* Additional floating elements (repositioned) */}
            <div className="absolute top-8 right-8 w-6 h-6 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full animate-bounce opacity-40"></div>
            <div className="absolute bottom-10 left-1/3 w-5 h-5 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full animate-bounce opacity-40 animation-delay-1000"></div>
            <div className="absolute top-1/2 left-2/3 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce opacity-40 animation-delay-2000"></div>
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23e5e7eb%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
            </div>

          <div className="container relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-8"
              >
                <div className="flex-1 text-center">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
                    Transform Work with{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 relative">
                      Syphon AI
                      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-indigo-600/20 blur-xl"></div>
                    </span>
                  </h1>
                </div>
                <div className="flex-shrink-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-400/20 to-indigo-400/20 rounded-full blur-xl animate-pulse"></div>
                    <Image
                      src="/Syphon Labs Logo 2.png"
                      alt="Syphon Labs"
                      width={192}
                      height={192}
                      priority
                      sizes="(min-width: 1024px) 12rem, (min-width: 768px) 9rem, 7rem"
                      className="relative h-30 w-30 md:h-38 md:w-38 lg:h-52 lg:w-52 rounded-full shadow-2xl border-4 border-white/30 backdrop-blur-sm hover:scale-110 transition-all duration-300 hover:shadow-3xl"
                    />
                    {/* Removed decorative star */}
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-4"
              >
                At Syphon Labs , we make AI that works for people. Tools that understand you, and make your best self impossible to miss.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed mb-8"
              >
                Powered By Syphon AI, our proprietary context engine that connects the dots others miss.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              >
                <Button
                  size="lg"
                  className="relative overflow-hidden rounded-full bg-gradient-to-r from-violet-700 via-blue-700 to-indigo-800 text-white text-lg px-8 py-4 shadow-lg ring-1 ring-indigo-500/40 transition-all duration-200 hover:from-violet-800 hover:via-blue-800 hover:to-indigo-900 hover:shadow-2xl hover:scale-[1.02] active:scale-95"
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Rocket className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Explore Our Products
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>
              
              {/* Removed badges: Trusted by 10,000+ teams, 4.9/5 rating, Enterprise-grade security */}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-violet-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full blur-3xl opacity-20"></div>
          </div>
          
          <div className="container relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Our Revolutionary Products
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We create solutions that think. Step one: revolutionizing job applications and recruitment.
              </p>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-2 max-w-7xl mx-auto [--order:1]">
              {/* Syphon Explorer (temporarily hidden) */}
              {false && (
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="group relative lg:col-start-1"
                >
                  <div className="h-full rounded-3xl border border-gray-200 bg-white p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 relative overflow-hidden">
                    {/* Animated background elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-60 group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full translate-y-12 -translate-x-12 opacity-40 group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full opacity-30 group-hover:scale-110 transition-transform duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="mb-4"><span className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700">Coming Soon</span></div>
                      <div className="mb-6 flex items-center gap-4">
                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <Search className="h-8 w-8 text-white group-hover:animate-pulse" />
                        </div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                          Syphon Explorer
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-6 text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        AI-powered file system that transforms your local files with intelligent organization, task
                        management, and smart insights. Your files stay on your device while being reimagined with AI.
                      </p>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-sm group-hover:translate-x-2 transition-transform duration-300">
                          <div className="h-5 w-5 rounded-full bg-violet-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <CheckCircle className="h-3 w-3 text-violet-600" />
                          </div>
                          <span className="font-medium">Automatic file organization</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm group-hover:translate-x-2 transition-transform duration-300 delay-75">
                          <div className="h-5 w-5 rounded-full bg-violet-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <CheckCircle className="h-3 w-3 text-violet-600" />
                          </div>
                          <span className="font-medium">AI-powered content analysis</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm group-hover:translate-x-2 transition-transform duration-300 delay-150">
                          <div className="h-5 w-5 rounded-full bg-violet-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <CheckCircle className="h-3 w-3 text-violet-600" />
                          </div>
                          <span className="font-medium">Smart task management overlay</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm group-hover:translate-x-2 transition-transform duration-300 delay-200">
                          <div className="h-5 w-5 rounded-full bg-violet-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <CheckCircle className="h-3 w-3 text-violet-600" />
                          </div>
                          <span className="font-medium">Paper Trail View organization</span>
                        </div>
                      </div>
                      <Button disabled className="w-full bg-gray-200 text-gray-500 cursor-not-allowed text-base py-4 shadow-none">
                        Coming Soon
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Syphon Recruiter */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="group relative order-2"
              >
                <div className="h-full rounded-3xl border border-gray-200 bg-white p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 relative overflow-hidden">
                  {/* Animated background elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full -translate-y-16 translate-x-16 opacity-60 group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-full translate-y-12 -translate-x-12 opacity-40 group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-30 group-hover:scale-110 transition-transform duration-500"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-4"><span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">Coming Soon</span></div>
                    <div className="mb-6 flex items-center gap-4">
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <Users className="h-8 w-8 text-white group-hover:animate-pulse" />
                      </div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                        Recruiter
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6 text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      Revolutionary AI-powered recruitment platform that streamlines hiring with intelligent candidate
                      matching, automated screening, and comprehensive analytics for both recruiters and applicants.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-sm group-hover:translate-x-2 transition-transform duration-300">
                        <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle className="h-3 w-3 text-blue-600" />
                        </div>
                        <span className="font-medium">AI resume analysis & matching</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm group-hover:translate-x-2 transition-transform duration-300 delay-75">
                        <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle className="h-3 w-3 text-blue-600" />
                        </div>
                        <span className="font-medium">Smart filtering & automated scheduling</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm group-hover:translate-x-2 transition-transform duration-300 delay-200">
                        <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle className="h-3 w-3 text-blue-600" />
                        </div>
                        <span className="font-medium">Bias‑free evaluation & objective scorecards</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm group-hover:translate-x-2 transition-transform duration-300 delay-[275ms]">
                        <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle className="h-3 w-3 text-blue-600" />
                        </div>
                        <span className="font-medium">Automated communication & ATS/HRIS integrations</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm group-hover:translate-x-2 transition-transform duration-300 delay-[350ms]">
                        <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle className="h-3 w-3 text-blue-600" />
                        </div>
                        <span className="font-medium">Recruitment analytics & time‑to‑hire insights</span>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <Link href="/recruiter">
                        <Button className="w-full rounded-full bg-gradient-to-r from-indigo-600 to-blue-700 hover:from-indigo-700 hover:to-blue-800 text-white text-base py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
                          <span className="group-hover:translate-x-1 transition-transform duration-300">Learn More</span>
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Syphon Draft */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="group relative order-1"
              >
                <div className="h-full rounded-3xl border border-gray-200 bg-white p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 relative overflow-hidden">
                  {/* Animated background elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-full -translate-y-16 translate-x-16 opacity-60 group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-violet-100 to-indigo-100 rounded-full translate-y-12 -translate-x-12 opacity-40 group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full opacity-30 group-hover:scale-110 transition-transform duration-500"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-4"><span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">Flagship</span></div>
                    <div className="mb-6 flex items-center gap-4">
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <FileText className="h-8 w-8 text-white group-hover:animate-pulse" />
                      </div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                        Draft
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6 text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      AI-powered resume and cover letter optimization for every job application. Upload your resume, paste a job description, and get tailored results that match your profile to the job.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-sm group-hover:translate-x-2 transition-transform duration-300">
                        <div className="h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle className="h-3 w-3 text-indigo-600" />
                        </div>
                        <span className="font-medium">ATS-friendly formatting</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm group-hover:translate-x-2 transition-transform duration-300 delay-75">
                        <div className="h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle className="h-3 w-3 text-indigo-600" />
                        </div>
                        <span className="font-medium">Naturally incorporate keywords in your resume</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm group-hover:translate-x-2 transition-transform duration-300 delay-150">
                        <div className="h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle className="h-3 w-3 text-indigo-600" />
                        </div>
                        <span className="font-medium">Job Qualification Matching</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm group-hover:translate-x-2 transition-transform duration-300 delay-200">
                        <div className="h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle className="h-3 w-3 text-indigo-600" />
                        </div>
                        <span className="font-medium">Professionally tailoredcover letters</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm group-hover:translate-x-2 transition-transform duration-300 delay-[275ms]">
                        <div className="h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle className="h-3 w-3 text-indigo-600" />
                        </div>
                        <span className="font-medium">Make real time edits with Interactive AI chat</span>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <Link href="/draft">
                        <Button 
                          onClick={() => trackEvent('click', 'CTA', 'Try Syphon Draft', 1)}
                          className="w-full rounded-full bg-gradient-to-r from-indigo-600 to-violet-700 hover:from-indigo-700 hover:to-violet-800 text-white text-base py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
                        >
                          <span className="group-hover:translate-x-1 transition-transform duration-300">Try Syphon Draft</span>
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        

        

        {/* Stats Section removed as requested */}

        {/* Testimonials Section removed as requested */}

        {/* FAQ Section */}
        <section id="faq" className="py-16 bg-gradient-to-br from-violet-50 via-white to-indigo-50 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-violet-100 to-purple-100 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full blur-3xl opacity-15"></div>
          </div>
          
          <div className="container relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Get answers to common questions about our products and services.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-4">
              {[
                {
                  question: "Can I integrate Syphon Recruiter with my existing ATS?",
                  answer: "Yes, Syphon Recruiter integrates with popular ATS systems including Workday, BambooHR, Greenhouse, and Lever. We also provide API access for custom integrations.",
                },
                {
                  question: "What is Syphon Draft and how does it help?",
                  answer: "Syphon Draft optimizes resumes and cover letters for specific roles using ATS‑friendly formatting, keyword alignment, and role‑specific tailoring.",
                },
                {
                  question: "Does Syphon Draft store my resume or job descriptions?",
                  answer: "No. Draft processes content securely and only saves results to your account if you choose to. The Open Source option runs locally with your own API key.",
                },
                {
                  question: "Do I need my own API key to use Open Source?",
                  answer: "Yes. The Open Source option is BYO key — use your own API key to run the core optimization engine locally.",
                },
                {
                  question: "Is there a Pro plan?",
                  answer: "Pro is coming soon with Unlimited Documents, All format downloads, Job Application History, and Document Version History.",
                },
                {
                  question: "How does Syphon Recruiter help reduce bias?",
                  answer: "Recruiter encourages structured, rubric‑based evaluations and consistent scorecards. It assists with fairness, while final decisions remain human‑led.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-indigo-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <h3 className="text-lg font-semibold mb-3 text-gray-900 group-hover:scale-105 transition-transform duration-300" style={{ transformOrigin: 'left center' }}>{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">{faq.answer}</p>
                    </div>


                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Newsletter />
      </main>

      <Footer />
    </div>
  )
}
