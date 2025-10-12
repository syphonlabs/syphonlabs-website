"use client"

import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import MobileMenu from "@/components/mobile-menu"
import Footer from "@/components/footer"
import Newsletter from "@/components/newsletter"
import { ArrowLeft, Mail, Users, Brain, TrendingUp, Code, Lightbulb, Globe, Zap, Target, CheckCircle, Star, Building, Award, Rocket, ExternalLink, Clock } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function CareersPageClient() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed top-0 left-0 right-0 z-40 bg-violet-50">
        <div className="container relative grid grid-cols-3 items-center h-16">
          <div className="flex items-center gap-2 justify-self-start">
            <Link href="/" className="inline-flex" aria-label="Go to home">
              <img src="/Syphon Labs Logo 2.png" alt="Syphon Labs logo" className="h-8 w-8 rounded-full" />
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
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8"
              >
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Join the Future of{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600">
                    Human-Centered AI
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                  Build AI tools that understand people, not just data. Help us create technology that amplifies human potential and makes work more meaningful.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-600 to-indigo-700 hover:from-violet-700 hover:to-indigo-800 text-white text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  View Open Positions
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-violet-200 text-violet-700 hover:bg-violet-50 text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Learn About Our Culture
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission: AI That Works for People
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're not building AI to replace humans—we're building AI to amplify human potential. Every tool we create is designed with the belief that technology should understand and enhance human capabilities, not complicate them.
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              {[
                {
                  icon: Brain,
                  title: "Human-Centered Design",
                  description: "We prioritize user experience and human needs in every decision, ensuring our AI tools feel natural and intuitive.",
                  color: "from-violet-500 to-purple-600"
                },
                {
                  icon: Target,
                  title: "Purpose-Driven Innovation",
                  description: "Every feature we build serves a real human need, solving actual problems that people face in their daily work.",
                  color: "from-indigo-500 to-blue-600"
                },
                {
                  icon: Zap,
                  title: "Ethical AI Development",
                  description: "We're committed to building AI that's fair, transparent, and respects user privacy while delivering powerful results.",
                  color: "from-purple-500 to-pink-600"
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${value.color} shadow-lg mb-6`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-16 bg-gradient-to-br from-violet-50 via-white to-indigo-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join our team and help shape the future of human-centered AI. We're looking for passionate individuals who share our vision of technology that amplifies human potential.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  title: "Senior AI Engineer",
                  department: "Engineering",
                  location: "Remote / San Francisco",
                  type: "Full-time",
                  description: "Lead the development of our core AI systems, working on everything from natural language processing to computer vision.",
                  requirements: ["5+ years AI/ML experience", "Strong Python/TypeScript skills", "Experience with modern AI frameworks"]
                },
                {
                  title: "Product Designer",
                  department: "Design",
                  location: "Remote / New York",
                  type: "Full-time",
                  description: "Design intuitive user experiences for AI-powered tools, ensuring our technology feels natural and accessible to all users.",
                  requirements: ["3+ years product design experience", "Portfolio demonstrating AI/ML product work", "Strong user research skills"]
                },
                {
                  title: "Full-Stack Developer",
                  department: "Engineering",
                  location: "Remote",
                  type: "Full-time",
                  description: "Build the web applications that bring our AI tools to life, working across the entire stack from frontend to backend.",
                  requirements: ["3+ years full-stack development", "Experience with React/Next.js", "Strong problem-solving skills"]
                }
              ].map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Building className="h-4 w-4" />
                          {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <Globe className="h-4 w-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <Button className="mt-4 md:mt-0 bg-gradient-to-r from-violet-600 to-indigo-700 hover:from-violet-700 hover:to-indigo-800">
                      Apply Now
                    </Button>
                  </div>
                  <p className="text-gray-600 mb-4">{position.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-violet-600" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Culture
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We believe that great products come from great teams. Our culture is built on collaboration, continuous learning, and a shared commitment to making technology that truly serves people.
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
              {[
                {
                  title: "Remote-First",
                  description: "Work from anywhere in the world. We believe in flexibility and trust our team to deliver exceptional results regardless of location.",
                  icon: Globe
                },
                {
                  title: "Continuous Learning",
                  description: "We invest in our team's growth with learning budgets, conference attendance, and time for personal projects.",
                  icon: Lightbulb
                },
                {
                  title: "Collaborative Environment",
                  description: "Cross-functional teams work together to solve complex problems, sharing knowledge and supporting each other's success.",
                  icon: Users
                },
                {
                  title: "Impact-Driven",
                  description: "Every project we work on has the potential to improve how people work and live. We measure success by user impact, not just metrics.",
                  icon: Target
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-violet-50 to-indigo-50 border border-violet-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-xl flex items-center justify-center">
                        <value.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Build the Future?
              </h2>
              <p className="text-xl text-violet-100 leading-relaxed mb-8">
                Join us in creating AI tools that truly understand and amplify human potential. Let's build technology that works for people, not the other way around.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-violet-700 hover:bg-gray-100 text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  View All Positions
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-violet-700 text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Learn More About Us
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <Newsletter />
      </main>

      <Footer />
    </div>
  )
}
