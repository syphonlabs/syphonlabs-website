"use client"

import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import MobileMenu from "@/components/mobile-menu"
import Footer from "@/components/footer"
import { ArrowLeft, Calendar, Clock, User, Tag, ChevronLeft, Share2, Bookmark } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Brain, Code, TrendingUp, Lightbulb, Globe, Award, Zap, Target, FolderOpen } from "lucide-react"

export default function SmartFileOrganizationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/blog">
              <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-violet-500 to-indigo-600 text-white font-semibold shadow-lg hover:from-violet-600 hover:to-indigo-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-400">
                <ChevronLeft className="h-5 w-5" />
                Back to Blog
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
        {/* Article Header */}
        <section className="py-16 bg-gradient-to-br from-white via-violet-50/30 to-indigo-50/30">
          <div className="container max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 bg-violet-100 text-violet-700 text-sm rounded-full">File Management</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full">Organization</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">AI</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Smart File Organization: Beyond Traditional Folders
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Learn how intelligent file systems are moving beyond simple folder structures to create adaptive workspaces that understand your workflow and organize content intelligently.
              </p>
              
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>March 10, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>6 min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>By Syphon Labs Team</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Button variant="ghost" size="sm">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <div className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-2xl p-8 mb-8 border border-violet-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Limitations of Traditional Folders</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For decades, we've relied on hierarchical folder structures to organize our digital files. While this approach has served us well, it has significant limitations in today's complex digital environment.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Traditional folders force us to make binary decisions about where files belong, often leading to confusion, duplicate files, and lost documents. As our digital lives become more complex, we need a more intelligent approach to file organization.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">The Rise of Intelligent Organization</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Context-Aware Categorization</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Modern AI systems can understand the context and content of files, automatically categorizing them based on multiple factors rather than requiring manual folder placement. A single document might be tagged as "Work", "Finance", "Q4", and "Reports" simultaneously, making it discoverable through multiple logical paths.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Dynamic Workspaces</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Instead of static folders, AI-powered systems create dynamic workspaces that adapt to your current project or task. Files are automatically grouped based on your current context, making it easier to focus on what's relevant right now while maintaining access to everything else.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Relationship Mapping</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Intelligent file systems can identify relationships between files that might not be obvious in a traditional folder structure. For example, a presentation, its source data, and related emails might be automatically linked, even if they're stored in different locations.
              </p>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 mb-8 border border-indigo-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">The Syphon Labs Approach</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  At Syphon Labs, we've developed an intelligent file organization system that goes beyond traditional folders. Our AI analyzes file content, usage patterns, and user behavior to create a personalized organization system that adapts to each user's unique workflow.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By combining machine learning with intuitive user interfaces, we're creating file management tools that feel natural and intelligent, rather than rigid and mechanical.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Smart Organization</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Increased Productivity</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Users spend significantly less time searching for files and more time on productive work. AI-powered organization reduces the cognitive load of file management, allowing users to focus on their core tasks.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Better Collaboration</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Smart organization systems can adapt to team workflows, making it easier for multiple people to find and work with shared files. The system learns from team usage patterns to optimize organization for collaborative work.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Scalability</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                As your digital content grows, traditional folder structures become unwieldy. AI-powered organization scales automatically, maintaining efficiency regardless of the number of files or complexity of your digital environment.
              </p>

              <div className="bg-gradient-to-br from-violet-500 to-indigo-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-4">Experience the Future of File Organization</h3>
                <p className="text-violet-100 leading-relaxed mb-6">
                  Try our intelligent file management system and see how it can transform your digital workflow. Experience organization that adapts to you, not the other way around.
                </p>
                <Link href="/trial">
                  <Button className="bg-white text-violet-600 hover:bg-gray-100">
                    Get Started For Free
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: "The Future of AI-Powered File Management",
                    excerpt: "Discover how artificial intelligence is revolutionizing the way we organize and interact with our digital files.",
                    date: "March 15, 2024",
                    readTime: "5 min read",
                    tags: ["AI", "File Management", "Product"],
                    color: "from-violet-500 to-violet-600"
                  },
                  {
                    title: "How AI is Transforming Workplace Productivity",
                    excerpt: "Explore the latest AI technologies that are reshaping how teams collaborate and manage their digital workflows.",
                    date: "March 12, 2024",
                    readTime: "4 min read",
                    tags: ["AI", "Productivity", "Workplace"],
                    color: "from-indigo-500 to-indigo-600"
                  }
                ].map((article, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-violet-200 transition-all duration-300 hover:shadow-lg">
                      <div className={`h-12 w-12 bg-gradient-to-br ${article.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                        <Brain className="h-6 w-6 text-white" />
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-violet-600 transition-colors">
                        {article.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
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
                        <Link href={`/blog/${article.title.toLowerCase().replace(/\s+/g, '-')}`}>
                          <Button variant="ghost" size="sm" className="text-violet-600 hover:text-violet-700">
                            Read
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 