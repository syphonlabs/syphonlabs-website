"use client"

import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import MobileMenu from "@/components/mobile-menu"
import Footer from "@/components/footer"
import { ArrowLeft, Calendar, Clock, User, Tag, ChevronLeft, Share2, Bookmark } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Brain, Code, TrendingUp, Lightbulb, Globe, Award, Zap, Target, Users } from "lucide-react"

export default function AIWorkplaceProductivityPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur-sm">
        <div className="container grid grid-cols-3 items-center h-16">
          <div className="flex items-center gap-4 justify-self-start">
            <Link href="/blog">
              <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-violet-500 to-indigo-600 text-white font-semibold shadow-lg hover:from-violet-600 hover:to-indigo-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-400">
                <ChevronLeft className="h-5 w-5" />
                Back to Blog
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
                <span className="px-3 py-1 bg-violet-100 text-violet-700 text-sm rounded-full">AI</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full">Productivity</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Workplace</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                How AI is Transforming Workplace Productivity
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Explore the latest AI technologies that are reshaping how teams collaborate and manage their digital workflows. From intelligent automation to predictive insights, AI is revolutionizing the modern workplace.
              </p>
              
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>March 12, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>4 min read</span>
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Productivity Revolution</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The workplace is undergoing a fundamental transformation. Artificial intelligence is no longer just a buzzword—it's becoming an integral part of how we work, collaborate, and achieve our goals.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  From automating repetitive tasks to providing intelligent insights, AI is enabling teams to focus on what truly matters: creativity, innovation, and strategic thinking.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Areas of AI Impact</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Intelligent Automation</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                AI is automating routine tasks that previously consumed hours of manual work. From data entry and report generation to email categorization and meeting scheduling, intelligent automation is freeing up valuable time for more strategic activities. Teams can now focus on high-value work while AI handles the repetitive tasks in the background.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Smart Collaboration</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Modern AI tools are enhancing team collaboration by providing intelligent suggestions, automating file organization, and facilitating seamless communication. Whether it's suggesting the right people to include in a project or automatically organizing shared documents, AI is making teamwork more efficient and effective.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Predictive Insights</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                AI-powered analytics are providing teams with unprecedented insights into their workflows and productivity patterns. By analyzing data from various sources, AI can identify bottlenecks, suggest optimizations, and predict potential issues before they arise. This proactive approach is transforming how teams plan and execute their work.
              </p>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 mb-8 border border-indigo-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-World Applications</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  At Syphon Labs, we've seen firsthand how AI-powered tools can transform workplace productivity. Our intelligent file management system, for example, has helped teams reduce the time spent searching for documents by up to 70%.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By automatically organizing files based on content and usage patterns, teams can focus on their core work rather than getting bogged down in administrative tasks.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">The Future of Work</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                As AI technology continues to evolve, we can expect even more sophisticated productivity tools. The future workplace will be characterized by seamless human-AI collaboration, where AI handles routine tasks while humans focus on creativity, strategy, and innovation.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The key to success in this new era will be embracing AI as a collaborative partner rather than a replacement. Teams that learn to work effectively with AI tools will have a significant competitive advantage in the marketplace.
              </p>

              <div className="bg-gradient-to-br from-violet-500 to-indigo-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-4">Ready to Transform Your Workflow?</h3>
                <p className="text-violet-100 leading-relaxed mb-6">
                  Experience the power of AI-driven productivity tools. Try our intelligent software solutions and see how they can transform your team's efficiency and collaboration.
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
                    title: "Smart File Organization: Beyond Traditional Folders",
                    excerpt: "Learn how intelligent file systems are moving beyond simple folder structures to create adaptive workspaces.",
                    date: "March 10, 2024",
                    readTime: "6 min read",
                    tags: ["File Management", "Organization", "AI"],
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