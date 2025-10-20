"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Navigation from "@/components/navigation"
import MobileMenu from "@/components/mobile-menu"
import { ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function TrialPageClient() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    teamSize: "",
    product: "explorer"
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Trial signup:", formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-violet-50">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur-sm">
        <div className="container relative grid grid-cols-3 items-center h-16">
          <Link href="/" className="flex items-center gap-2 justify-self-start">
            <img src="/Syphon Labs Logo 2.png" alt="Syphon Labs logo" className="h-8 w-8 rounded-full" />
            <span className="text-xl font-bold">Syphon Labs</span>
          </Link>
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

      <main className="container py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Start Your Free Trial</h1>
            <p className="text-xl text-gray-600">
              Experience the power of AI-driven productivity. No credit card required.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Form */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Get Started</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <Input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Team Size</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                    value={formData.teamSize}
                    onChange={(e) => setFormData({...formData, teamSize: e.target.value})}
                  >
                    <option value="">Select team size</option>
                    <option value="1-5">1-5 people</option>
                    <option value="6-25">6-25 people</option>
                    <option value="26-100">26-100 people</option>
                    <option value="100+">100+ people</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Product Interest</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="product"
                        value="explorer"
                        checked={formData.product === "explorer"}
                        onChange={(e) => setFormData({...formData, product: e.target.value})}
                        className="text-violet-600"
                      />
                      <span>Syphon Explorer</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="product"
                        value="recruiter"
                        checked={formData.product === "recruiter"}
                        onChange={(e) => setFormData({...formData, product: e.target.value})}
                        className="text-violet-600"
                      />
                      <span>Syphon Recruiter</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="product"
                        value="both"
                        checked={formData.product === "both"}
                        onChange={(e) => setFormData({...formData, product: e.target.value})}
                        className="text-violet-600"
                      />
                      <span>Both Products</span>
                    </label>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700">
                  Start Free Trial
                </Button>
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center">
                By starting your trial, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">What's Included</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">14-day free trial</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Full access to all features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">No credit card required</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Cancel anytime</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Email support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-violet-500 to-indigo-600 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">Why Choose Syphon Labs?</h3>
                <ul className="space-y-2 text-sm">
                  <li>• AI-powered productivity tools</li>
                  <li>• Privacy-first approach</li>
                  <li>• Local file processing</li>
                  <li>• Enterprise-grade security</li>
                  <li>• 99.9% uptime guarantee</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Our team is here to help you get started and answer any questions.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Email:</span>
                    <span>support@syphonlabs.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Phone:</span>
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
