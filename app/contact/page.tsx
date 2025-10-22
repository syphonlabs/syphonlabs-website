"use client"

import Navigation from "@/components/navigation"
import MobileMenu from "@/components/mobile-menu"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Phone, Linkedin, Github, Instagram } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const form = e.currentTarget
      const formData = new FormData(form)
      const res = await fetch("https://formspree.io/f/mgvzdprk", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      })
      if (res.ok) {
        setSubmitted(true)
        form.reset()
      }
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-violet-50">
        <div className="container relative grid grid-cols-3 items-center h-16">
          <Link href="/" className="flex items-center gap-2 justify-self-start">
            <img src="/Syphon Labs Logo 2.png" alt="Syphon Labs logo" className="h-8 w-8 rounded-full" />
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
        {/* Hero */}
        <section className="relative overflow-hidden py-8 md:py-12 bg-gradient-to-br from-white via-violet-50/30 to-indigo-50/30">
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-3 bg-gradient-to-r from-indigo-700 to-blue-700 bg-clip-text text-transparent">
                Get in Touch
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
                Questions, partnerships, or press? We’d love to hear from you.
              </p>
              <div className="mx-auto mb-6 h-1.5 w-16 rounded-full bg-gradient-to-r from-indigo-600 to-blue-700" />
              {/* Social pills */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a href="mailto:admin@syphonlabs.com" aria-label="Email Syphon Labs" className="inline-flex items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 p-3 text-indigo-700 shadow-sm hover:bg-indigo-100 ring-1 ring-indigo-100">
                  <Mail className="h-4 w-4" />
                </a>
                <a href="https://x.com/SyphonLabs" target="_blank" rel="noopener noreferrer" aria-label="Syphon Labs on X" className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-sky-50 p-3 text-sky-700 shadow-sm hover:bg-sky-100 ring-1 ring-sky-100">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/syphon-labs/" target="_blank" rel="noopener noreferrer" aria-label="Syphon Labs on LinkedIn" className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-blue-50 p-3 text-blue-700 shadow-sm hover:bg-blue-100 ring-1 ring-blue-100">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="Syphon Labs on GitHub" className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-gray-50 p-3 text-gray-800 shadow-sm hover:bg-gray-100 ring-1 ring-gray-100">
                  <Github className="h-4 w-4" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Syphon Labs on Instagram" className="inline-flex items-center justify-center rounded-full border border-pink-200 bg-pink-50 p-3 text-pink-700 shadow-sm hover:bg-pink-100 ring-1 ring-pink-100">
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>
          {/* BG orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 right-1/4 h-72 w-72 rounded-full bg-violet-200 mix-blend-multiply blur-3xl opacity-20"></div>
            <div className="absolute bottom-1/4 left-1/4 h-72 w-72 rounded-full bg-indigo-200 mix-blend-multiply blur-3xl opacity-20"></div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="container">
            {/* Form */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto"
              >
                <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                  {submitted && (
                    <div className="mb-4 rounded-lg border border-green-200 bg-green-50 p-4 text-green-700">
                      <div className="font-semibold">Thanks!</div>
                      <div>We received your message and will get back to you shortly.</div>
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <Input name="name" placeholder="Your name" required className="bg-white" />
                    </div>
                    <div className="sm:col-span-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <Input type="email" name="email" placeholder="you@example.com" required className="bg-white" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <Input name="subject" placeholder="How can we help?" className="bg-white" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <Textarea name="message" placeholder="Share a few details..." rows={6} required className="bg-white" />
                    </div>
                    <div className="sm:col-span-2">
                      <Button type="submit" disabled={submitting} className="rounded-full bg-gradient-to-r from-indigo-600 to-blue-700 hover:from-indigo-700 hover:to-blue-800 text-white px-6">
                        {submitting ? "Sending..." : "Send Message"}
                      </Button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}


