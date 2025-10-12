"use client"

import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import MobileMenu from "@/components/mobile-menu"
import Footer from "@/components/footer"
import { Calendar, Clock, User, ChevronLeft, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

interface BlogPageClientProps {
  title: string
  description: string
  date: string
  readTime: string
  tags: string[]
  content: React.ReactNode
  relatedArticles?: Array<{
    title: string
    excerpt: string
    date: string
    readTime: string
    tags: string[]
    color: string
    href: string
  }>
}

export default function BlogPageClient({ 
  title, 
  description, 
  date, 
  readTime, 
  tags, 
  content, 
  relatedArticles = [] 
}: BlogPageClientProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 bg-violet-50">
        <div className="container relative grid grid-cols-3 items-center h-16">
          <div className="flex items-center gap-4 justify-self-start">
            <Link href="/blog">
              <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium shadow-sm hover:bg-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 md:px-4 md:bg-gradient-to-r md:from-violet-500 md:to-indigo-600 md:text-white md:rounded-full md:shadow-lg md:hover:from-violet-600 md:hover:to-indigo-700">
                <ChevronLeft className="h-4 w-4" />
                <span>Back</span>
              </button>
            </Link>
            <Link href="/" className="flex items-center gap-2">
              <Image src="/Syphon Labs Logo 2.png" alt="Syphon Labs" width={32} height={32} priority className="h-8 w-8 rounded-full" />
              <span className="text-xl font-bold whitespace-nowrap">Syphon Labs</span>
            </Link>
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
                {tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-violet-100 text-violet-700 text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {description}
              </p>
              
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>By Syphon Labs Team</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={async () => {
                      try {
                        if (navigator.share) {
                          await navigator.share({
                            title: title,
                            text: description,
                            url: window.location.href
                          });
                        } else {
                          await navigator.clipboard.writeText(window.location.href);
                          // URL copied to clipboard
                        }
                      } catch (error) {
                        // User canceled share or other error - this is normal behavior
                        console.log('Share was canceled or failed');
                      }
                    }}
                  >
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
              {content}
            </motion.div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
            <div className="container max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
                <div className="grid gap-6 md:grid-cols-2 items-stretch">
                  {relatedArticles.map((article, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      className="group hover:scale-105 transition-transform duration-300"
                    >
                      <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-violet-200 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                        <div className={`h-12 w-12 bg-gradient-to-br ${article.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                          <Calendar className="h-6 w-6 text-white" />
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-violet-600 transition-colors">
                          {article.title}
                        </h3>
                        
                        <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                          {article.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between mt-auto">
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
                          <Link href={article.href}>
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
        )}
      </main>

      <Footer />
    </div>
  )
}
