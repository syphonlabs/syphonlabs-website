"use client"

import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import MobileMenu from "@/components/mobile-menu"
import Footer from "@/components/footer"
import { ArrowLeft, Calendar, Clock, User, Tag, ExternalLink, ChevronRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Brain, Code, TrendingUp, Lightbulb, Globe, Award, Zap, Target } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed top-0 left-0 right-0 z-40 border-b bg-white/80 backdrop-blur-sm">
        <div className="container relative grid grid-cols-3 items-center h-16">
          <div className="flex items-center gap-4 justify-self-start">
            <Link href="/">
              <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-violet-500 to-indigo-600 text-white font-semibold shadow-lg hover:from-violet-600 hover:to-indigo-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-400">
                <ArrowLeft className="h-5 w-5" />
                Back to Home
              </button>
            </Link>
            <img src="/Syphon Labs Logo.png" alt="Syphon Labs" className="h-8 w-8 rounded-full ml-4" />
            <span className="text-xl font-bold">Syphon Labs</span>
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
              Get Started
            </Button>
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
                <img src="/Syphon Labs Logo.png" alt="Syphon Labs" className="h-16 w-16 rounded-full shadow-lg" />
                <div className="inline-flex items-center rounded-full border border-violet-200 bg-white/80 backdrop-blur-sm px-3 py-1 text-sm text-violet-700 shadow-sm">
                  <span className="flex h-2 w-2 rounded-full bg-violet-500 mr-2 animate-pulse"></span>
                  Latest Insights
                </div>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6"
              >
                Syphon Labs{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600">
                  Blog
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed"
              >
                Exploring the latest advances in AI, sharing product insights, and uncovering how intelligent software is transforming the way we work.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap justify-center gap-6 text-sm text-gray-500"
              >
                <div className="flex items-center gap-2">
                  <Brain className="h-4 w-4 text-violet-500" />
                  <span>AI Insights</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code className="h-4 w-4 text-violet-500" />
                  <span>Product Updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-violet-500" />
                  <span>Industry Trends</span>
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

        {/* Featured Article */}
        <section className="py-16 bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm text-violet-700 font-medium mb-6">
                <Lightbulb className="h-4 w-4 mr-2" />
                Featured Article
              </div>
              
              <div className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-2xl p-8 border border-violet-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-xl flex items-center justify-center">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">The Future of AI-Powered File Management</h2>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>March 15, 2024</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>5 min read</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>By Syphon Labs Team</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Discover how artificial intelligence is revolutionizing the way we organize and interact with our digital files. From intelligent categorization to predictive file management, AI is transforming the traditional file explorer into a smart, adaptive workspace that understands your workflow.
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-violet-100 text-violet-700 text-xs rounded-full">AI</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">File Management</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Product</span>
                  </div>
                  <Link href="/blog/ai-powered-file-management">
                    <Button className="bg-violet-600 hover:bg-violet-700 text-white">
                      Read More
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Recent Articles */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Articles</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Stay updated with the latest insights, product updates, and industry trends
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Zap className="h-6 w-6" />,
                  title: "How AI is Transforming Workplace Productivity",
                  excerpt: "Explore the latest AI technologies that are reshaping how teams collaborate and manage their digital workflows.",
                  date: "March 12, 2024",
                  readTime: "4 min read",
                  tags: ["AI", "Productivity", "Workplace"],
                  color: "from-violet-500 to-violet-600"
                },
                {
                  icon: <Target className="h-6 w-6" />,
                  title: "Smart File Organization: Beyond Traditional Folders",
                  excerpt: "Learn how intelligent file systems are moving beyond simple folder structures to create adaptive workspaces.",
                  date: "March 10, 2024",
                  readTime: "6 min read",
                  tags: ["File Management", "Organization", "AI"],
                  color: "from-indigo-500 to-indigo-600"
                },
                {
                  icon: <Globe className="h-6 w-6" />,
                  title: "The Rise of Contextual AI in Software",
                  excerpt: "Discover how contextual AI is making software more intuitive and responsive to user needs.",
                  date: "March 8, 2024",
                  readTime: "7 min read",
                  tags: ["AI", "Software", "Innovation"],
                  color: "from-purple-500 to-purple-600"
                },
                {
                  icon: <Award className="h-6 w-6" />,
                  title: "Building Scalable AI Solutions: Lessons Learned",
                  excerpt: "Insights from developing AI-powered tools that scale from individual users to enterprise teams.",
                  date: "March 5, 2024",
                  readTime: "8 min read",
                  tags: ["Development", "AI", "Scalability"],
                  color: "from-rose-500 to-rose-600"
                },
                {
                  icon: <Code className="h-6 w-6" />,
                  title: "The Future of Developer Tools with AI",
                  excerpt: "How artificial intelligence is revolutionizing the tools developers use to build better software.",
                  date: "March 3, 2024",
                  readTime: "5 min read",
                  tags: ["Development", "AI", "Tools"],
                  color: "from-emerald-500 to-emerald-600"
                },
                {
                  icon: <TrendingUp className="h-6 w-6" />,
                  title: "AI Trends to Watch in 2025",
                  excerpt: "The most promising AI technologies and trends that will shape the software industry this year.",
                  date: "March 1, 2024",
                  readTime: "6 min read",
                  tags: ["AI", "Trends", "2025"],
                  color: "from-orange-500 to-orange-600"
                }
              ].map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group hover:scale-105 transition-transform duration-300"
                >
                  <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-violet-200 transition-all duration-300 hover:shadow-lg">
                    <div className={`h-12 w-12 bg-gradient-to-br ${article.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow`}>
                      <div className="text-white">
                        {article.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-violet-600 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        {article.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link href={`/blog/${article.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        <Button variant="ghost" size="sm" className="text-violet-600 hover:text-violet-700">
                          Read
                          <ChevronRight className="h-3 w-3 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-to-br from-violet-500 via-indigo-500 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-xl text-violet-100 mb-8 leading-relaxed">
                Get the latest insights on AI, product updates, and industry trends delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-violet-600"
                />
                <Button
                  size="lg"
                  className="bg-white text-violet-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Subscribe
                </Button>
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