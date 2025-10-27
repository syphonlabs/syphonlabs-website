"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Navigation from "@/components/navigation"
import MobileMenu from "@/components/mobile-menu"
import Footer from "@/components/footer"
import { ArrowLeft, Calendar, Clock, User, Tag, ExternalLink, ChevronRight, ChevronDown, Filter } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Brain, Code, TrendingUp, Lightbulb, Globe, Award, Zap, Target } from "lucide-react"
import { useState, useMemo } from "react"

export default function BlogIndexClient() {
  // State for filter categories
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  // Available categories
  const categories = [
    "AI & Machine Learning",
    "Product Updates", 
    "Industry Trends",
    "Development",
    "Productivity",
    "File Management",
    "Case Studies",
    "Community"
  ]

  // Article data with categories
  const articles = [
    {
      id: 1,
      title: "The Future of AI-Powered File Management",
      excerpt: "Discover how artificial intelligence is revolutionizing the way we organize and interact with our digital files.",
      author: "Syphon Labs Team",
      date: "March 15, 2025",
      tags: ["AI", "File Management"],
      avatar: "/Syphon Labs Logo 2.png",
      categories: ["AI & Machine Learning", "File Management"],
      slug: "ai-powered-file-management"
    },
    {
      id: 2,
      title: "How AI is Transforming Workplace Productivity",
      excerpt: "Explore the latest AI technologies that are reshaping how teams collaborate and manage their digital workflows.",
      author: "Syphon Labs Team",
      date: "March 12, 2025",
      tags: ["AI", "Productivity"],
      avatar: "/Syphon Labs Logo 2.png",
      categories: ["AI & Machine Learning", "Productivity"],
      slug: "how-ai-is-transforming-workplace-productivity"
    },
    {
      id: 3,
      title: "Smart File Organization: Beyond Traditional Folders",
      excerpt: "Learn how intelligent file systems are moving beyond simple folder structures to create adaptive workspaces.",
      author: "Syphon Labs Team",
      date: "March 10, 2025",
      tags: ["File Management", "Organization"],
      avatar: "/Syphon Labs Logo 2.png",
      categories: ["File Management", "Productivity"],
      slug: "smart-file-organization-beyond-traditional-folders"
    },
    {
      id: 4,
      title: "The Rise of Contextual AI in Software",
      excerpt: "Discover how contextual AI is making software more intuitive and responsive to user needs.",
      author: "Syphon Labs Team",
      date: "March 8, 2025",
      tags: ["AI", "Software"],
      avatar: "/Syphon Labs Logo 2.png",
      categories: ["AI & Machine Learning", "Development"],
      slug: "the-rise-of-contextual-ai-in-software"
    },
    {
      id: 5,
      title: "Building Scalable AI Solutions: Lessons Learned",
      excerpt: "Insights from developing AI-powered tools that scale from individual users to enterprise teams.",
      author: "Syphon Labs Team",
      date: "March 5, 2025",
      tags: ["Development", "AI"],
      avatar: "/Syphon Labs Logo 2.png",
      categories: ["Development", "AI & Machine Learning"],
      slug: "building-scalable-ai-solutions-lessons-learned"
    },
    {
      id: 6,
      title: "The Future of Developer Tools with AI",
      excerpt: "How artificial intelligence is revolutionizing the tools developers use to build better software.",
      author: "Syphon Labs Team",
      date: "March 3, 2025",
      tags: ["Development", "AI"],
      avatar: "/Syphon Labs Logo 2.png",
      categories: ["Development", "AI & Machine Learning"],
      slug: "the-future-of-developer-tools-with-ai"
    },
    {
      id: 7,
      title: "AI Trends to Watch in 2025",
      excerpt: "The most promising AI technologies and trends that will shape the software industry this year.",
      author: "Syphon Labs Team",
      date: "March 1, 2025",
      tags: ["AI", "Trends"],
      avatar: "/Syphon Labs Logo 2.png",
      categories: ["AI & Machine Learning", "Industry Trends"],
      slug: "ai-trends-to-watch-in-2025"
    }
  ]

  // Filter articles based on selected categories
  const filteredArticles = useMemo(() => {
    if (selectedCategories.length === 0) {
      return articles
    }
    return articles.filter(article => 
      article.categories.some(category => selectedCategories.includes(category))
    )
  }, [selectedCategories])

  // Handle category selection
  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed top-0 left-0 right-0 z-40 border-b bg-white/80 backdrop-blur-sm">
        <div className="container relative grid grid-cols-3 items-center h-16">
          <Link href="/" className="flex items-center gap-2 justify-self-start">
            <Image src="/Syphon Labs Logo 2.png" alt="Syphon Labs" width={32} height={32} priority className="h-8 w-8 rounded-full" />
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
        <section className="relative overflow-hidden py-8 md:py-12 bg-gradient-to-br from-white via-violet-50/30 to-indigo-50/30">
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight mb-3"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600">
                  Blog
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-base md:text-lg text-gray-600 mb-4 leading-relaxed"
              >
                Exploring the latest advances in AI, sharing product insights, and uncovering how intelligent software is transforming the way we work.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap gap-4 text-sm text-gray-500"
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

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Sidebar - Filters */}
              <div className="hidden lg:block w-64 flex-shrink-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <label key={index} className="flex items-center gap-3 cursor-pointer hover:text-violet-600 transition-colors">
                      <input 
                        type="checkbox" 
                        className="rounded border-gray-300 text-violet-600 focus:ring-violet-500" 
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                      />
                      <span className="text-sm text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
                {selectedCategories.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <button 
                      onClick={() => setSelectedCategories([])}
                      className="text-sm text-violet-600 hover:text-violet-700 font-medium"
                    >
                      Clear all filters
                    </button>
                  </div>
                )}
              </div>

              {/* Right Content - Articles */}
              <div className="flex-1 max-w-4xl mx-auto lg:mx-0">
                {/* Mobile Filter trigger will sit to the right of the title below */}
                {showMobileFilters && (
                  <div className="lg:hidden mb-6 bg-gray-50 rounded-xl p-4 border border-violet-100">
                    <div className="space-y-3">
                      {categories.map((category, index) => (
                        <label key={index} className="flex items-center gap-3 cursor-pointer hover:text-violet-600 transition-colors">
                          <input 
                            type="checkbox" 
                            className="rounded border-gray-300 text-violet-600 focus:ring-violet-500" 
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCategoryChange(category)}
                          />
                          <span className="text-sm text-gray-700">{category}</span>
                        </label>
                      ))}
                      {selectedCategories.length > 0 && (
                        <div className="pt-3 border-t border-gray-200 flex justify-end">
                          <button 
                            onClick={() => setSelectedCategories([])}
                            className="text-sm text-violet-600 hover:text-violet-700 font-medium"
                          >
                            Clear all
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedCategories.length > 0 ? `Filtered articles (${filteredArticles.length})` : "All articles"}
                  </h2>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setShowMobileFilters(!showMobileFilters)}
                      className="lg:hidden inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-2 text-sm font-medium text-violet-700 shadow-sm active:scale-95"
                      aria-expanded={showMobileFilters}
                    >
                      <Filter className="h-4 w-4" />
                      Filter
                      <ChevronDown className={`h-4 w-4 transition-transform ${showMobileFilters ? "rotate-180" : "rotate-0"}`} />
                    </button>
                    {selectedCategories.length > 0 && (
                      <div className="hidden lg:flex items-center gap-2">
                        <span className="text-sm text-gray-500">Filtered by:</span>
                        <div className="flex gap-2">
                          {selectedCategories.map((category, index) => (
                            <span key={index} className="px-2 py-1 bg-violet-100 text-violet-700 text-xs rounded-full">
                              {category}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                  {filteredArticles.map((article, index) => (
                    <Link key={index} href={`/blog/${article.slug}`} className="block h-full">
                      <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-violet-200 hover:scale-[1.02] cursor-pointer h-full flex flex-col">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex gap-2">
                            {article.tags.map((tag, tagIndex) => (
                              <span key={tagIndex} className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 hover:text-violet-600 transition-colors">{article.title}</h3>
                        
                        <div className="flex items-center gap-3 mb-4">
                          <Image src={article.avatar} alt={article.author} width={40} height={40} className="w-10 h-10 rounded-full" />
                          <div>
                            <div className="font-medium text-gray-900">{article.author}</div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-3 flex-1">{article.excerpt}</p>
                        
                        <div className="flex items-center justify-between mt-auto">
                          <div className="text-xs text-gray-500">{article.date}</div>
                          <div className="flex items-center gap-1 text-xs text-violet-600 font-medium">
                            Read more
                            <ChevronRight className="h-3 w-3" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist Section */}
        <section className="py-8 bg-blue-950 relative overflow-hidden">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Join the Syphon Labs Waitlist</h2>
              <p className="text-lg md:text-xl text-blue-100 mb-8">
                Be the first to hear about new releases, product updates, and invites across Syphon Labs.
              </p>

              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full bg-white text-center border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                  required
                />
                <Button
                  size="lg"
                  className="rounded-full bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Join Our Waitlist
                </Button>
              </form>

              <div className="mt-8 text-sm text-blue-200">
                We respect your privacy. No spam, just updates on our product and AI insights.
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
