"use client"

import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import MobileMenu from "@/components/mobile-menu"
import Footer from "@/components/footer"
import { Users } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { GraduationCap, Brain, Lightbulb, Globe, Code, TrendingUp, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="inline-flex" aria-label="Go to home">
              <img src="/Syphon Labs Logo.png" alt="Syphon Labs" className="h-8 w-8 rounded-full" />
            </Link>
            <span className="text-xl font-bold">Syphon Labs</span>
          </div>
          <Navigation />
          <div className="flex items-center gap-4">
            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-white via-violet-50/30 to-indigo-50/30">
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-5xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center justify-center gap-4 mb-6"
              >
                <img src="/Syphon Labs Logo.png" alt="Syphon Labs" className="h-16 w-16 rounded-full shadow-lg" />
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6"
              >
                Pioneering the Future of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-700 to-blue-700">
                  AI-Powered File Management
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed"
              >
                Syphon Labs was created by NYU graduates passionate about AI and its potential to transform how we interact with our digital world. We're building the future of intelligent software solutions across multiple domains.
              </motion.p>

              
            </motion.div>
          </div>

          {/* Enhanced Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-violet-200 mix-blend-multiply blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/4 h-96 w-96 rounded-full bg-indigo-200 mix-blend-multiply blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-blue-200 mix-blend-multiply blur-3xl opacity-10"></div>
          </div>
        </section>

        

        {/* Our Story Section */}
        <section className="relative overflow-hidden py-16 bg-gradient-to-br from-gray-50 to-white">
          {/* subtle grid overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23e5e7eb%22%20fill-opacity%3D%220.25%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30 pointer-events-none"></div>
          <div className="container relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative space-y-6 pl-4"
              >
                <div className="absolute -left-1 top-0 bottom-0 w-1.5 rounded-full bg-gradient-to-b from-violet-500 to-indigo-600 hidden lg:block"></div>
                <div className="space-y-3">
                  <div className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm text-violet-700 font-medium">
                    <GraduationCap className="h-4 w-4 mr-2" />
                    Our Story
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                    Turning information into{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-blue-700">
                      momentum
                    </span>
                  </h2>
                </div>

                <div className="space-y-4 text-base text-gray-600 leading-relaxed">
                  <p>
                    We founded Syphon Labs to transform scattered files and workflows into a living knowledge layer, organized automatically and surfaced the moment you need it.
                  </p>
                  <p>
                    We build practical AI that teams can trust: fast, explainable, and private by design. You keep ownership; we provide leverage.
                  </p>
                  <p>
                    Today, products like Syphon Draft and Recruiter bring context‑aware automation to writing and hiring so people move faster with clarity and confidence.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="h-2 w-2 bg-violet-500 rounded-full"></div>
                    <span>Engineering‑led</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="h-2 w-2 bg-indigo-500 rounded-full"></div>
                    <span>Private by default</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                    <span>Design that ships</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    {
                      icon: <Code className="h-6 w-6" />,
                      title: "Production‑grade engineering",
                      description: "Reliable systems, clean APIs, and performance at scale.",
                      color: "from-indigo-600 to-blue-700",
                      delay: 0
                    },
                    {
                      icon: <Brain className="h-6 w-6" />,
                      title: "Practical AI",
                      description: "Context models that understand content and intent—no black boxes.",
                      color: "from-indigo-600 to-blue-700",
                      delay: 0.1
                    },
                    {
                      icon: <Shield className="h-6 w-6" />,
                      title: "Privacy‑first",
                      description: "Local‑first options and transparent data handling; your data stays yours.",
                      color: "from-blue-600 to-blue-700",
                      delay: 0.2
                    },
                    {
                      icon: <TrendingUp className="h-6 w-6" />,
                      title: "Measurable outcomes",
                      description: "Ship faster, decide with clarity, and automate the boring stuff.",
                      color: "from-blue-700 to-blue-800",
                      delay: 0.3
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: item.delay }}
                      className="group hover:scale-[1.03] transition-transform duration-300"
                    >
                      <div className="rounded-2xl p-6 border border-white/60 bg-white/70 backdrop-blur-md shadow-sm hover:shadow-xl transition-all duration-300 ring-1 ring-transparent hover:ring-violet-200">
                        <div className={`h-12 w-12 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mb-4 shadow-lg ring-4 ring-white/40`}>
                          <div className="text-white">
                            {item.icon}
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="container">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </div>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              <div className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm text-violet-700 font-medium mb-4">
                <Globe className="h-4 w-4 mr-2" />
                Our Mission
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Make work effortless with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-blue-700">
                  trusted, human‑centered AI
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is to transform how people work by creating AI that understands goals, anticipates needs, and eliminates busywork. Every tool we make removes friction, connects the dots, and leaves you more time for the work that matters.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: <Brain className="h-6 w-6" />,
                  title: "Context‑Aware Automation",
                  description: "AI that understands your files, goals, and workflow to organize, suggest, and accelerate the right next step.",
                  color: "from-violet-500 to-violet-600",
                  delay: 0
                },
                {
                  icon: <Shield className="h-6 w-6" />,
                  title: "Private by Design",
                  description: "Local-first options and transparent data practices. Your content stays yours—always.",
                  color: "from-indigo-500 to-indigo-600",
                  delay: 0.1
                },
                {
                  icon: <Lightbulb className="h-6 w-6" />,
                  title: "Delightful by Default",
                  description: "Thoughtful UX and speed so teams adopt tools they love, not tolerate.",
                  color: "from-purple-500 to-purple-600",
                  delay: 0.2
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: item.delay }}
                  className="group transition-transform duration-300"
                >
                  <div className={`group/card relative rounded-2xl p-[1px] bg-gradient-to-br from-violet-200/60 via-indigo-200/50 to-purple-200/40 hover:from-violet-300/80 hover:via-indigo-300/70 hover:to-purple-300/60 transition-all duration-300`}
                  >
                    <div className="relative rounded-2xl bg-white/90 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-[0.35deg]">
                      <div className={`pointer-events-none absolute -top-8 -right-8 h-20 w-20 rounded-full bg-gradient-to-br ${item.color} opacity-25 blur-2xl`} />
                      <div className="p-6">
                        <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg ring-4 ring-white/70`}>
                          {item.icon}
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
                        <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              <div className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm text-indigo-700 font-medium mb-4">
                <Lightbulb className="h-4 w-4 mr-2" />
                Our Vision
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Software that understands intent and amplifies human work
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our vision is to create intelligent systems that connect tools, anticipate needs, and transform scattered information and processes into proactive, privacy‑respecting assistance so that  teams move from idea to impact with clarity and confidence across writing, hiring, and beyond.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: <Globe className="h-6 w-6" />,
                  title: "Self‑Organizing Knowledge",
                  description: "Information that classifies itself and surfaces when you need it—without folders or friction.",
                  color: "from-indigo-600 to-blue-700",
                  delay: 0
                },
                {
                  icon: <Code className="h-6 w-6" />,
                  title: "Local‑First, Interoperable",
                  description: "Tools that run close to your data and work across systems with open, developer‑friendly interfaces.",
                  color: "from-indigo-700 to-blue-700",
                  delay: 0.1
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  title: "Fair, Efficient Workflows",
                  description: "Writing and hiring experiences that are fast, equitable, and anchored in clear, structured signals.",
                  color: "from-blue-600 to-blue-700",
                  delay: 0.2
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: item.delay }}
                  className="group transition-transform duration-300"
                >
                  <div className={`group/card relative rounded-2xl p-[1px] bg-gradient-to-br from-violet-200/60 via-indigo-200/50 to-purple-200/40 hover:from-violet-300/80 hover:via-indigo-300/70 hover:to-purple-300/60 transition-all duration-300`}>
                    <div className="relative rounded-2xl bg-white/90 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-[0.35deg]">
                      <div className={`pointer-events-none absolute -top-8 -right-8 h-20 w-20 rounded-full bg-gradient-to-br ${item.color} opacity-25 blur-2xl`} />
                      <div className="p-6">
                        <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg ring-4 ring-white/70`}>
                          {item.icon}
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
                        <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Join Us in Shaping the Future</h2>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                Experience the power of AI-driven software solutions. Try our products today and see how they transform your workflow.
              </p>
              <div className="flex justify-center">
                <Link href="/trial">
                  <Button
                    size="lg"
                    className="rounded-full bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
                  >
                    Get Started For Free
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
          
        </section>
      </main>

      <Footer />
    </div>
  )
} 