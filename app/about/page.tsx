"use client"

import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import MobileMenu from "@/components/mobile-menu"
import Footer from "@/components/footer"
import { ArrowLeft, MapPin, Calendar, Users, Zap, Target, Heart, Shield, Star } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { GraduationCap, Brain, Lightbulb, Globe, Award, Code, Rocket, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-violet-500 to-indigo-600 text-white font-semibold shadow-lg hover:from-violet-600 hover:to-indigo-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-400">
                <ArrowLeft className="h-5 w-5" />
                Back to Home
              </button>
            </Link>
            <img src="/Syphon Labs Logo.png" alt="Syphon Labs" className="h-8 w-8 rounded-full ml-4" />
            <span className="text-xl font-bold">Syphon Labs</span>
          </div>
          <Navigation />
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">
              Log in
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700"
            >
              Get Started
            </Button>
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
                <div className="inline-flex items-center rounded-full border border-violet-200 bg-white/80 backdrop-blur-sm px-3 py-1 text-sm text-violet-700 shadow-sm">
                  <span className="flex h-2 w-2 rounded-full bg-violet-500 mr-2 animate-pulse"></span>
                  Founded by NYU Graduates
                </div>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6"
              >
                Pioneering the Future of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600">
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

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap justify-center gap-4 text-sm text-gray-500"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-violet-500" />
                  <span>New York City</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-violet-500" />
                  <span>Est. 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-violet-500" />
                  <span>Growing Team</span>
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

        {/* Stats Section */}
        <section className="py-12 bg-white border-b">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "100%", label: "AI-Powered", icon: <Brain className="h-5 w-5" /> },
                { number: "24/7", label: "Always Learning", icon: <Zap className="h-5 w-5" /> },
                { number: "10K+", label: "Files Organized", icon: <Target className="h-5 w-5" /> },
                { number: "∞", label: "Possibilities", icon: <Rocket className="h-5 w-5" /> }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="h-10 w-10 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-lg group-hover:shadow-xl transition-shadow">
                    <div className="text-white">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="space-y-3">
                  <div className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm text-violet-700 font-medium">
                    <GraduationCap className="h-4 w-4 mr-2" />
                    Our Story
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                    From NYU to{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                      AI Innovation
                    </span>
                  </h2>
                </div>
                
                <div className="space-y-4 text-base text-gray-600 leading-relaxed">
                  <p>
                    Founded by a team of NYU graduates who shared a common vision: to harness the power of artificial intelligence to solve real-world problems in file management and digital organization.
                  </p>
                  <p>
                    Our journey began in the vibrant tech ecosystem of New York City, where we witnessed firsthand the challenges that professionals face in managing their digital lives. We saw an opportunity to create something revolutionary - a file explorer that thinks like you do.
                  </p>
                  <p>
                    Today, Syphon Labs continues to push the boundaries of what's possible with AI, creating tools that don't just organize files, but understand them.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="h-2 w-2 bg-violet-500 rounded-full"></div>
                    <span>Computer Science Graduates</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="h-2 w-2 bg-indigo-500 rounded-full"></div>
                    <span>AI & Machine Learning Experts</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                    <span>Product Design Specialists</span>
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
                      icon: <GraduationCap className="h-6 w-6" />,
                      title: "NYU Alumni",
                      description: "Computer Science & AI graduates with top-tier education in cutting-edge technology and artificial intelligence.",
                      color: "from-violet-500 to-violet-600",
                      delay: 0
                    },
                    {
                      icon: <Brain className="h-6 w-6" />,
                      title: "AI Experts",
                      description: "Machine Learning specialists with deep expertise in artificial intelligence and neural network technologies.",
                      color: "from-indigo-500 to-indigo-600",
                      delay: 0.1
                    },
                    {
                      icon: <Code className="h-6 w-6" />,
                      title: "Tech Innovators",
                      description: "Software Engineers building scalable, intelligent solutions that push the boundaries of what's possible.",
                      color: "from-purple-500 to-purple-600",
                      delay: 0.2
                    },
                    {
                      icon: <TrendingUp className="h-6 w-6" />,
                      title: "Growth Minded",
                      description: "Continuous learners always evolving and improving, committed to staying ahead of technological advances.",
                      color: "from-rose-500 to-rose-600",
                      delay: 0.3
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: item.delay }}
                      className="group hover:scale-105 transition-transform duration-300"
                    >
                      <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:border-violet-200 transition-all duration-300 hover:shadow-lg">
                        <div className={`h-12 w-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow`}>
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
                Revolutionizing{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                  Software Solutions
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that AI should work for you, not against you. Our mission is to create intelligent software solutions that understand your workflow and adapt to your needs across multiple domains.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: <Brain className="h-6 w-6" />,
                  title: "AI-First Approach",
                  description: "We leverage cutting-edge AI to understand your files and organize them intelligently, making your digital life more productive.",
                  color: "from-violet-500 to-violet-600",
                  delay: 0
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  title: "User-Centric Design",
                  description: "Every feature is designed with real users in mind. We listen, iterate, and create solutions that actually solve problems.",
                  color: "from-indigo-500 to-indigo-600",
                  delay: 0.1
                },
                {
                  icon: <Award className="h-6 w-6" />,
                  title: "Excellence in Innovation",
                  description: "We're committed to pushing the boundaries of what's possible, creating tools that set new standards in file management.",
                  color: "from-purple-500 to-purple-600",
                  delay: 0.2
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: item.delay }}
                  className="group hover:scale-105 transition-transform duration-300"
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100 hover:border-violet-200 transition-all duration-300 hover:shadow-lg">
                    <div className={`h-12 w-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow`}>
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
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                The principles that guide everything we do at Syphon Labs
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Innovation",
                  description: "Constantly pushing the boundaries of what's possible with AI and technology",
                  icon: <Lightbulb className="h-5 w-5" />,
                  color: "from-violet-500 to-violet-600",
                  bgColor: "from-violet-50 to-violet-100"
                },
                {
                  title: "Excellence",
                  description: "Delivering the highest quality products and experiences to our users",
                  icon: <Award className="h-5 w-5" />,
                  color: "from-indigo-500 to-indigo-600",
                  bgColor: "from-indigo-50 to-indigo-100"
                },
                {
                  title: "Collaboration",
                  description: "Working together as a team to achieve greater results than any individual",
                  icon: <Users className="h-5 w-5" />,
                  color: "from-purple-500 to-purple-600",
                  bgColor: "from-purple-50 to-purple-100"
                },
                {
                  title: "Impact",
                  description: "Creating tools that make a real difference in people's daily lives",
                  icon: <Globe className="h-5 w-5" />,
                  color: "from-rose-500 to-rose-600",
                  bgColor: "from-rose-50 to-rose-100"
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group hover:scale-105 transition-transform duration-300"
                >
                  <div className={`bg-gradient-to-br ${value.bgColor} rounded-xl p-4 border border-transparent hover:border-gray-200 transition-all duration-300 hover:shadow-lg`}>
                    <div className={`h-10 w-10 bg-gradient-to-br ${value.color} rounded-lg flex items-center justify-center mb-3 shadow-md group-hover:shadow-lg transition-shadow`}>
                      <div className="text-white">
                        {value.icon}
                      </div>
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-violet-500 via-indigo-500 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Join Us in Shaping the Future</h2>
              <p className="text-lg text-violet-100 mb-6 leading-relaxed">
                Experience the power of AI-driven software solutions. Try our products today and see how they transform your workflow.
              </p>
              <div className="flex justify-center">
                <Link href="/trial">
                  <Button
                    size="lg"
                    className="bg-white text-violet-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Started For Free
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-1/4 right-1/4 h-32 w-32 rounded-full bg-white/10 blur-2xl"></div>
          <div className="absolute bottom-1/4 left-1/4 h-32 w-32 rounded-full bg-white/10 blur-2xl"></div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 