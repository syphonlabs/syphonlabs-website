"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "per month",
    description: "Perfect for small teams and startups",
    features: [
      "Up to 50 candidate profiles",
      "Basic AI resume analysis",
      "Standard filtering options",
      "Email support",
      "Basic analytics dashboard",
      "Interview scheduling",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "$149",
    period: "per month",
    description: "Ideal for growing companies",
    features: [
      "Up to 500 candidate profiles",
      "Advanced AI analysis & scoring",
      "Smart candidate filtering",
      "Automated interview scheduling",
      "Advanced analytics & reporting",
      "Custom email templates",
      "Integration with ATS systems",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with advanced needs",
    features: [
      "Unlimited candidate profiles",
      "Custom AI model training",
      "Advanced bias detection",
      "Custom integrations",
      "Dedicated account manager",
      "Custom reporting & analytics",
      "SSO & advanced security",
      "24/7 phone support",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export default function RecruiterPricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Choose Your Recruitment Plan</h2>
          <p className="text-xl text-gray-600">
            Scale your hiring process with plans designed for teams of all sizes. All plans include a 14-day free trial.
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
                className={`h-full rounded-xl border ${plan.popular ? "border-violet-200 bg-violet-50" : "border-gray-200 bg-white"} p-8 shadow-sm flex flex-col`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-gradient-to-r from-violet-500 to-indigo-600 text-white text-sm font-medium px-3 py-1 rounded-full">
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
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={
                    plan.popular
                      ? "bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700"
                      : "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50"
                  }
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* All Plans Include section removed as requested */}
      </div>
    </section>
  )
}
