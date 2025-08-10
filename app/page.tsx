"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
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
} from "lucide-react"
import Navigation from "@/components/navigation"
import MobileMenu from "@/components/mobile-menu"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
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
        <section className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex items-center py-16 md:py-24 bg-gradient-to-br from-violet-50 via-white to-indigo-50">
          {/* Animated background elements */}
          <div className="absolute inset-0">
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
                className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 mb-8"
              >
                <div className="flex-1 text-center lg:text-left">
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
                     <img 
                      src="/Syphon Labs Logo 2.png" 
                      alt="Syphon Labs" 
                      className="relative h-28 w-28 md:h-36 md:w-36 lg:h-48 lg:w-48 rounded-full shadow-2xl border-4 border-white/30 backdrop-blur-sm hover:scale-110 transition-all duration-300 hover:shadow-3xl" 
                    />
                    {/* Removed decorative star */}
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
              >
                We make AI that works for people. Tools that understand you, and make your best self impossible to miss.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              >
                <Button
                  size="lg"
                  className="bg-blue-950 hover:bg-blue-900 text-white text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
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
          <div className="absolute top-0 left-0 w-full h-full">
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
                We create solutions that think. Step one: revolutionizing applications and recruitment.
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
                        Syphon Recruiter
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
                        <span className="font-medium">Automated interview scheduling</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm group-hover:translate-x-2 transition-transform duration-300 delay-150">
                        <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle className="h-3 w-3 text-blue-600" />
                        </div>
                        <span className="font-medium">Candidate comparison tools</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm group-hover:translate-x-2 transition-transform duration-300 delay-200">
                        <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle className="h-3 w-3 text-blue-600" />
                        </div>
                        <span className="font-medium">Applicant portal & tracking</span>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <Link href="/recruiter">
                        <Button className="w-full bg-gradient-to-r from-indigo-600 to-blue-700 hover:from-indigo-700 hover:to-blue-800 text-base py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
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
                        Syphon Draft
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
                        <Button className="w-full bg-gradient-to-r from-indigo-600 to-violet-700 hover:from-indigo-700 hover:to-violet-800 text-base py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
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
          <div className="absolute inset-0">
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
                  question: "How does Syphon Explorer handle my data privacy?",
                  answer: "Syphon Explorer processes all your files locally on your device. No data is sent to our servers, ensuring complete privacy and security for your sensitive information.",
                },
                {
                  question: "Can I integrate Syphon Recruiter with my existing ATS?",
                  answer: "Yes, Syphon Recruiter integrates with popular ATS systems including Workday, BambooHR, Greenhouse, and Lever. We also provide API access for custom integrations.",
                },
                {
                  question: "What file formats does Syphon Explorer support?",
                  answer: "Syphon Explorer supports all common file formats including documents, spreadsheets, presentations, images, and PDFs. Our AI can analyze and organize any file type.",
                },
                {
                  question: "Is there a free trial available?",
                  answer: "Yes, we offer a 14-day free trial for all our products. No credit card required to get started and explore our features.",
                },
                {
                  question: "Do you offer enterprise support?",
                  answer: "Yes, our Enterprise plan includes dedicated support, custom integrations, advanced security features, and SLA guarantees for large organizations.",
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
                      <h3 className="text-lg font-semibold mb-3 text-gray-900 group-hover:scale-105 transition-transform duration-300">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">{faq.answer}</p>
            </div>

                    {/* Hover indicator */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-950 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
          </div>
          <div className="container relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Ready to Transform Your Workflow?
              </h2>
              <div className="mb-8">
                <Link href="#products">
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
                  >
                    Try Our Products
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
              {/* CTA temporarily hidden */}
              {false && (
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/trial">
                    <Button 
                      size="lg" 
                      className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
                    >
                      <Rocket className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                      Start Free Trial
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <img src="/Syphon Labs Logo.png" alt="Syphon Labs" className="h-10 w-10 rounded-full" />
                <span className="text-2xl font-bold">Syphon Labs</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Building the future of AI-powered productivity tools for modern teams.
              </p>
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <Phone className="h-5 w-5" />
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-6 text-lg">Products</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="/explorer" className="hover:text-white transition-colors">
                    Syphon Explorer
                  </Link>
                </li>
                <li>
                  <Link href="/recruiter" className="hover:text-white transition-colors">
                    Syphon Recruiter
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-6 text-lg">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="/company" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#careers" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-6 text-lg">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Syphon Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
