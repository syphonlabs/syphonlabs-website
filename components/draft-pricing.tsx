"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Open Source",
    price: "$0",
    description: "Use core tools freely",
    features: [
      "Core optimization engine",
      "Local/private usage",
      "Community support",
    ],
    cta: "Use Open Source",
    popular: false,
  },
  {
    name: "Free Account",
    price: "$0",
    description: "Try Draft with a free account",
    features: [
      "1 resume optimization",
      "Basic AI analysis",
      "Standard formatting",
      "PDF download",
      "24-hour access",
    ],
    cta: "Try Free",
    popular: true,
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "For active job seekers",
    features: [
      "Unlimited optimizations",
      "Premium AI analysis",
      "Custom formatting options",
      "Multiple cover letter styles",
      "All format downloads",
      "Instant processing",
      "30-day access",
      "Priority support",
      "Resume templates",
      "Interview preparation tips",
    ],
    cta: "Upgrade to Pro",
    popular: false,
  },
]

export default function DraftPricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-violet-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Simple, Pay-Per-Use Pricing</h2>
          <p className="text-xl text-gray-600">
            No subscriptions, no hidden fees. Pay only for what you use.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className={`h-full rounded-xl border ${plan.popular ? "border-violet-200 bg-violet-50" : "border-gray-200 bg-white"} p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-gray-500 ml-2">{plan.period}</span>}
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-violet-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={
                    plan.popular
                      ? "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white"
                      : "bg-white text-violet-700 border border-violet-300 hover:bg-violet-50"
                  }
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Removed "All Syphon Draft Plans Include" block as requested */}
      </div>
    </section>
  )
} 