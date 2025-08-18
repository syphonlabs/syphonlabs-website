"use client"

import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import MobileMenu from "@/components/mobile-menu"
import Footer from "@/components/footer"
import Newsletter from "@/components/newsletter"
import { ArrowLeft, Mail, Users, Brain, TrendingUp, Code, Lightbulb, Globe, Zap, Target, CheckCircle, Star, Building, Award, Rocket, ExternalLink } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function CareersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed top-0 left-0 right-0 z-40 bg-violet-50">
        <div className="container relative grid grid-cols-3 items-center h-16">
          <div className="flex items-center gap-2 justify-self-start">
            <Link href="/" className="inline-flex" aria-label="Go to home">
              <img src="/Syphon Labs Logo 2.png" alt="Syphon Labs" className="h-8 w-8 rounded-full" />
            </Link>
            <span className="text-xl font-bold">Syphon Labs</span>
          </div>
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
                <div className="inline-flex items-center rounded-full border border-violet-200 bg-white/80 backdrop-blur-sm px-3 py-1 text-sm text-violet-700 shadow-sm">
                  <span className="flex h-2 w-2 rounded-full bg-violet-500 mr-2 animate-pulse"></span>
                  Join Our Team
                </div>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6"
              >
                Build the Future of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600">
                  Human‑Centered AI
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed"
              >
                Join us in creating AI tools that understand intent and amplify human productivity. Help us transform how people work, from idea to impact.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap justify-center gap-6 text-sm text-gray-500"
              >
                <div className="flex items-center gap-2">
                  <Brain className="h-4 w-4 text-violet-500" />
                  <span>AI Innovation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-violet-500" />
                  <span>Remote-First</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-violet-500" />
                  <span>Growth Opportunities</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Enhanced Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-violet-200 mix-blend-multiply blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/4 h-96 w-96 rounded-full bg-indigo-200 mix-blend-multiply blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-purple-200 mix-blend-multiply blur-3xl opacity-10"></div>
          </div>
        </section>



        {/* Join Our Team Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Join Our Talent Network
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're looking for passionate individuals who want to build the future of AI-powered productivity tools.
              </p>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                <div className="space-y-6">
                  {/* Skills We're Looking For */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Skills We're Looking For</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-3">
                        <h4 className="font-medium text-gray-900">AI Engineer</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-violet-600" />
                            <span>Python, TensorFlow/PyTorch</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-violet-600" />
                            <span>NLP and machine learning</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-violet-600" />
                            <span>Large language models</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-violet-600" />
                            <span>Problem-solving skills</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-medium text-gray-900">Marketing Intern</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-indigo-600" />
                            <span>Writing & communication</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-indigo-600" />
                            <span>Social media experience</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-indigo-600" />
                            <span>Creative mindset</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-indigo-600" />
                            <span>Interest in AI/tech</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* How to Apply */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">How to Apply</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                          1
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Prepare your resume highlighting relevant experience</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                          2
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Email your resume and cover letter to <a href="mailto:admin@syphonlabs.com" className="text-indigo-600 hover:text-indigo-700 font-medium">admin@syphonlabs.com</a></p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                          3
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">We'll review and reach out if there's a good fit</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <a href="mailto:admin@syphonlabs.com?subject=Job Application" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-800 to-purple-900 hover:from-violet-900 hover:to-purple-950 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105">
                    <Mail className="h-4 w-4" />
                    Send Application
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <p className="text-xs text-gray-500 mt-3">We respect your privacy and will only send relevant opportunities.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Newsletter />
      <Footer />
    </div>
  )
}
