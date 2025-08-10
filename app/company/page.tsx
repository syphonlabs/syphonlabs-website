"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Navigation from "@/components/navigation"
import MobileMenu from "@/components/mobile-menu"
import { motion } from "framer-motion"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  BrainCircuit,
  Users,
  Search,
  Zap,
  Shield,
  Globe,
  TrendingUp,
  CheckCircle,
  Star,
  Building,
  Target,
  Lightbulb,
} from "lucide-react"
import { useState } from "react"

export default function CompanyPage() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setEmail("")
  }

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
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-white to-violet-50">
          <div className="container relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
                  Transforming Work with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                    Intelligent AI
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-4">
                  Syphon Labs creates cutting-edge artificial intelligence solutions that revolutionize how teams work,
                  collaborate, and achieve their goals.
                </p>
                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
                  From job hunting to recruitment & management to operations, we're building the future of productivity at every level of the corporate ladder.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Button
                    size="lg"
                    className="bg-blue-950 hover:bg-blue-900 text-white"
                    onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Explore Our Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Link href="#products">
                    <Button
                      size="lg"
                      className="group relative inline-flex items-center gap-2 rounded-full bg-white text-violet-700 px-8 py-6 text-lg font-semibold shadow-xl ring-1 ring-white/40 hover:bg-violet-50 hover:scale-105 hover:shadow-2xl transition-all duration-300"
                    >
                      Try Our Products
                      <ArrowRight className="ml-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Trusted by 10,000+ teams</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>4.9/5 customer rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-blue-500" />
                    <span>Enterprise-grade security</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Background elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-full max-h-6xl">
            <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-violet-200 mix-blend-multiply blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-indigo-200 mix-blend-multiply blur-3xl opacity-30"></div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
              <p className="text-xl text-gray-600">
                We create solutions that think. Step one: revolutionizing applications and recruitment.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Syphon Explorer (temporarily hidden) */}
              {false && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="h-full rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-200 hover:shadow-lg">
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-violet-100">
                      <Search className="h-8 w-8 text-violet-600" />
                    </div>
                    <h3 className="mb-4 text-2xl font-bold">Syphon Explorer</h3>
                    <p className="text-gray-600 mb-6">
                      AI-powered file system that transforms your local files with intelligent organization, task
                      management, and smart insights. Your files stay on your device while being reimagined with AI.
                    </p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Automatic file organization</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>AI-powered content analysis</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Smart task management overlay</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Paper Trail View organization</span>
                      </div>
                    </div>
                    <Link href="/">
                      <Button className="w-full bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              )}

              {/* Syphon Recruiter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="h-full rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-200 hover:shadow-lg flex flex-col">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">Syphon Recruiter</h3>
                  <p className="text-gray-600 mb-6">
                    Revolutionary AI-powered recruitment platform that streamlines hiring with intelligent candidate
                    matching, automated screening, and comprehensive analytics for both recruiters and applicants.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>AI resume analysis & matching</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Automated interview scheduling</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Candidate comparison tools</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Applicant portal & tracking</span>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <Link href="/recruiter">
                      <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Use Cases by Role (moved under Products) */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Use Cases by Role</h2>
              <p className="text-xl text-gray-600">See how Syphon Labs adapts to your team.</p>
            </div>
            <Tabs defaultValue="recruiters" className="max-w-6xl mx-auto">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent p-0 mb-6">
                <TabsTrigger value="recruiters" className="rounded-full border px-4 py-2 data-[state=active]:bg-violet-600 data-[state=active]:text-white">Recruiters</TabsTrigger>
                <TabsTrigger value="hiring" className="rounded-full border px-4 py-2 data-[state=active]:bg-violet-600 data-[state=active]:text-white">Hiring Managers</TabsTrigger>
                <TabsTrigger value="it" className="rounded-full border px-4 py-2 data-[state=active]:bg-violet-600 data-[state=active]:text-white">IT</TabsTrigger>
                <TabsTrigger value="ops" className="rounded-full border px-4 py-2 data-[state=active]:bg-violet-600 data-[state=active]:text-white">Operations</TabsTrigger>
              </TabsList>

              <TabsContent value="recruiters">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl border p-6 shadow-sm bg-white">
                    <h3 className="font-semibold text-lg mb-2">Automate screening</h3>
                    <p className="text-gray-600">AI triage surfaces top candidates with instant resume insights and skills matching.</p>
                  </div>
                  <div className="rounded-2xl border p-6 shadow-sm bg-white">
                    <h3 className="font-semibold text-lg mb-2">Faster scheduling</h3>
                    <p className="text-gray-600">One‑click calendar coordination and candidate self‑serve rescheduling.</p>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <Link href="/recruiter">
                    <button className="inline-flex items-center gap-2 rounded-full bg-violet-600 text-white px-6 py-3 font-medium hover:bg-violet-700 transition">See how it works for Recruiters</button>
                  </Link>
                </div>
              </TabsContent>

              <TabsContent value="hiring">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl border p-6 shadow-sm bg-white">
                    <h3 className="font-semibold text-lg mb-2">Structured evaluations</h3>
                    <p className="text-gray-600">Role‑specific scorecards and bias‑reducing rubrics built‑in.</p>
                  </div>
                  <div className="rounded-2xl border p-6 shadow-sm bg-white">
                    <h3 className="font-semibold text-lg mb-2">Shortlist clarity</h3>
                    <p className="text-gray-600">Side‑by‑side candidate comparisons with rationale and risks.</p>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <Link href="/recruiter">
                    <button className="inline-flex items-center gap-2 rounded-full bg-violet-600 text-white px-6 py-3 font-medium hover:bg-violet-700 transition">See how it works for Hiring Managers</button>
                  </Link>
                </div>
              </TabsContent>

              <TabsContent value="it">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl border p-6 shadow-sm bg-white">
                    <h3 className="font-semibold text-lg mb-2">Privacy‑first architecture</h3>
                    <p className="text-gray-600">Local processing options, granular permissions, and audit trails.</p>
                  </div>
                  <div className="rounded-2xl border p-6 shadow-sm bg-white">
                    <h3 className="font-semibold text-lg mb-2">Seamless integrations</h3>
                    <p className="text-gray-600">Connect ATS, SSO, and data lakes with robust APIs and webhooks.</p>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <Link href="#products">
                    <button className="inline-flex items-center gap-2 rounded-full bg-violet-600 text-white px-6 py-3 font-medium hover:bg-violet-700 transition">See how it works for IT</button>
                  </Link>
                </div>
              </TabsContent>

              <TabsContent value="ops">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl border p-6 shadow-sm bg-white">
                    <h3 className="font-semibold text-lg mb-2">Operational visibility</h3>
                    <p className="text-gray-600">Dashboards across hiring pipelines, SLAs, and interview load.</p>
                  </div>
                  <div className="rounded-2xl border p-6 shadow-sm bg-white">
                    <h3 className="font-semibold text-lg mb-2">Process automation</h3>
                    <p className="text-gray-600">Automate repetitive steps: reminders, feedback nudges, summaries.</p>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <Link href="#products">
                    <button className="inline-flex items-center gap-2 rounded-full bg-violet-600 text-white px-6 py-3 font-medium hover:bg-violet-700 transition">See how it works for Operations</button>
                  </Link>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gradient-to-b from-white to-violet-50">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Building the Future of{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                    AI-Powered Work
                  </span>
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  At Syphon Labs, we believe artificial intelligence should enhance human potential, not replace it. Our
                  mission is to create intelligent solutions that make work more productive, collaborative, and
                  meaningful.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-violet-100 flex items-center justify-center mt-1">
                      <Target className="h-3 w-3 text-violet-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Our Mission</h3>
                      <p className="text-gray-600">
                        To democratize AI and make intelligent automation accessible to every team and organization.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                      <Lightbulb className="h-3 w-3 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Our Vision</h3>
                      <p className="text-gray-600">
                        A world where AI seamlessly integrates into daily workflows, amplifying human creativity and
                        productivity.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <Building className="h-3 w-3 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Our Values</h3>
                      <p className="text-gray-600">
                        Innovation, transparency, user-centricity, and responsible AI development guide everything we
                        do.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6"
              >
                <div className="text-center p-6 rounded-xl bg-white border border-gray-200 shadow-sm">
                  <div className="text-3xl font-bold text-violet-600 mb-2">10K+</div>
                  <div className="text-gray-600">Active Users</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-white border border-gray-200 shadow-sm">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">500+</div>
                  <div className="text-gray-600">Companies</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-white border border-gray-200 shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                  <div className="text-gray-600">Uptime</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-white border border-gray-200 shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">4.9/5</div>
                  <div className="text-gray-600">Rating</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-violet-600 to-indigo-600">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Workflow?</h2>
              <div className="mb-8">
                <Link href="#products">
                  <Button
                    className="group relative inline-flex items-center gap-2 rounded-full bg-white text-violet-700 px-8 py-6 text-lg font-semibold shadow-xl ring-1 ring-white/40 hover:bg-violet-50 hover:scale-105 hover:shadow-2xl transition-all duration-300"
                  >
                    Try Our Products
                    <ArrowRight className="ml-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white"
                  required
                />
                <Button type="submit" className="bg-white text-violet-600 hover:bg-gray-100">
                  Get Started
                </Button>
              </form>
              <p className="text-sm text-violet-200">Start your free trial today. No credit card required.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/Syphon Labs Logo.png" alt="Syphon Labs" className="h-8 w-8 rounded-full" />
                <span className="text-xl font-bold">Syphon Labs</span>
              </div>
              <p className="text-gray-400 mb-4">
                Building the future of AI-powered productivity tools for modern teams.
              </p>
              <div className="flex gap-4">{/* Social media icons would go here */}</div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white">
                    Syphon Explorer
                  </Link>
                </li>
                <li>
                  <Link href="/recruiter" className="hover:text-white">
                    Syphon Recruiter
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#careers" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
                {/* Blog link temporarily removed until blog is ready */}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Syphon Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
