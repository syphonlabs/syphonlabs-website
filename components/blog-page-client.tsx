"use client"

import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import MobileMenu from "@/components/mobile-menu"
import Footer from "@/components/footer"
import { Calendar, Clock, User, ChevronLeft, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import SocialSharing from "@/components/social-sharing"
import { useState, useEffect } from "react"

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
  const [currentUrl, setCurrentUrl] = useState('')
  
  useEffect(() => {
    setCurrentUrl(window.location.href)
  }, [])
  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed top-0 left-0 right-0 z-40 bg-violet-50">
        <div className="container relative grid grid-cols-3 items-center h-16">
          <div className="flex items-center gap-4 justify-self-start">
            <Link href="/blog">
              <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium shadow-sm hover:bg-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 md:px-4 md:bg-gradient-to-r md:from-violet-500 md:to-indigo-600 md:text-white md:rounded-full md:shadow-lg md:hover:from-violet-600 md:hover:to-indigo-700">
                <ChevronLeft className="h-4 w-4" />
                <span>Back</span>
              </button>
            </Link>
          </div>
          <div className="flex items-center justify-center md:hidden">
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

      <main className="flex-1 pt-16">
        {/* Article Header */}
        <section className="py-8 md:py-16 bg-gradient-to-br from-white via-violet-50/30 to-indigo-50/30">
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
              
              {/* Desktop Layout */}
              <div className="hidden md:flex items-center justify-between mb-8">
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
                
                <SocialSharing 
                  title={title}
                  url=""
                  description={description}
                />
              </div>

              {/* Mobile Layout - Table View */}
              <div className="md:hidden mb-8">
                <div className="grid grid-cols-2 gap-4">
                  {/* Left Column - Metadata */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4 flex-shrink-0" />
                      <span className="text-xs">{date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4 flex-shrink-0" />
                      <span className="text-xs">{readTime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <User className="h-4 w-4 flex-shrink-0" />
                      <span className="text-xs">By Syphon Labs Team</span>
                    </div>
                  </div>
                  
                  {/* Right Column - Social Sharing */}
                  <div className="flex flex-col justify-center ml-28">
                    <div className="space-y-2">
                      {/* Generic share button */}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={async () => {
                          if (navigator.share) {
                            try {
                              await navigator.share({
                                title: title,
                                text: description,
                                url: currentUrl
                              });
                            } catch (err) {
                              console.log('Share was canceled or failed');
                            }
                          } else {
                            try {
                              await navigator.clipboard.writeText(currentUrl);
                              console.log('URL copied to clipboard');
                            } catch (err) {
                              console.log('Error copying to clipboard:', err);
                            }
                          }
                        }}
                        className="flex items-center justify-center h-8 w-8 p-0 hover:bg-gray-100"
                      >
                        <Share2 className="h-4 w-4 text-black" />
                      </Button>
                      
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className="h-7 w-7 p-0 hover:bg-gray-100"
                        >
                          <a
                            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${currentUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Share on X (Twitter)"
                            className="flex items-center justify-center"
                          >
                            <svg className="h-4 w-4 text-black" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                          </a>
                        </Button>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className="h-7 w-7 p-0 hover:bg-gray-100"
                        >
                          <a
                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Share on LinkedIn"
                            className="flex items-center justify-center"
                          >
                            <svg className="h-4 w-4 text-[#0077B5]" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </a>
                        </Button>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className="h-7 w-7 p-0 hover:bg-gray-100"
                        >
                          <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Share on Facebook"
                            className="flex items-center justify-center"
                          >
                            <svg className="h-4 w-4 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-8 md:py-16 bg-white">
          <div className="container max-w-4xl mx-auto">
            <div
              className="prose prose-lg max-w-none"
            >
              {content}
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-8 md:py-16 bg-gradient-to-br from-gray-50 to-white">
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
                    >
                      <div className="group hover:scale-105 transition-transform duration-300 bg-white rounded-xl p-6 border border-gray-100 hover:border-violet-200 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
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
