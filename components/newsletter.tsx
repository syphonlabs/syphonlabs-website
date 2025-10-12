"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Email submitted:", email)
    setSubmitted(true)
    setEmail("")
  }

  return (
    <section className="py-20 bg-blue-950 relative overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Join the Syphon Labs Waitlist</h2>
          <p className="text-xl text-blue-100 mb-8">
            Be the first to hear about new releases, product updates, and invites across Syphon Labs.
          </p>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-green-700">
              <h3 className="font-bold text-lg mb-2">Thank you for joining our waitlist!</h3>
              <p>
                We'll keep you updated on our latest developments and let you know when you can access the platform.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-full bg-white text-left"
                required
              />
              <Button type="submit" className="rounded-full bg-white text-blue-600 hover:bg-gray-100">
                Join Our Waitlist
              </Button>
            </form>
          )}

          <div className="mt-8 text-sm text-blue-200">
            We respect your privacy. No spam, just updates on our product and AI insights.
          </div>
        </motion.div>
      </div>
    </section>
  )
}
