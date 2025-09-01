"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useAnalytics } from "@/hooks/use-analytics"

const plans = [
  {
    name: "Starter — Automate the Busywork",
    price: "To Be Announced Soon",
    period: undefined,
    description: "For small teams who want to hire faster without drowning in admin.",
    features: [
      "Up to 50 candidate profiles",
      "Basic AI resume analysis & fit scoring",
      "Standard candidate filtering options",
      "Interview scheduling with calendar integration & timezone detection",
      "Basic analytics dashboard (time-to-hire, source tracking)",
      "Candidate portal with application tracking",
      "Document management for resumes & interview notes",
      "AI recommendations for filter adjustments (e.g., expand experience range)",
    ],
    cta: "Contact Sales",
    popular: false,
  },
  {
    name: "Professional — Hire Smarter, Not Just Faster",
    price: "To Be Announced Soon",
    period: undefined,
    description: "For growing teams that want predictive insights and higher-quality hires.",
    features: [
      "Everything in Starter, plus:",
      "Up to 500 candidate profiles",
      "Advanced AI analysis & scoring that learns from your hiring patterns",
      "Smart candidate filtering with skill validation and experience verification",
      "AI-generated shortlist recommendations ranked by hire-likelihood and experience",
      "Talent rediscovery from past applicants",
      "Automated interview scheduling with custom duration per role",
      "Advanced analytics & reporting (pipeline health, skill gap analysis, conversion rates)",
      "Integration with ATS systems & HR tools",
    ],
    cta: "Contact Sales",
    popular: true,
  },
  {
    name: "Enterprise — Build a World-Class Talent Machine",
    price: "To Be Announced Soon",
    description: "For large organizations with advanced hiring needs, compliance requirements, and a global footprint.",
    features: [
      "Everything in Professional, plus:",
      "Unlimited candidate profiles",
      "Custom AI model training for department-specific scoring",
      "Advanced bias detection with visual heatmaps",
      "Passive candidate sourcing from public professional databases (e.g., GitHub, Dribbble, LinkedIn)",
      "Diversity pool expansion suggestions",
      "Market intelligence: competitor hiring trends, salary benchmarks, talent migration patterns",
      "Regulatory compliance guardrails (GDPR, EEOC, region-specific anonymization)",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export default function RecruiterPricing() {
  const { trackEvent } = useAnalytics()
  const colorSets = [
    {
      from: "from-violet-500",
      to: "to-indigo-600",
      icon: "text-violet-600",
      button: "from-violet-600 to-indigo-700",
    },
    {
      from: "from-blue-500",
      to: "to-cyan-600",
      icon: "text-blue-600",
      button: "from-blue-600 to-cyan-700",
    },
    {
      from: "from-purple-500",
      to: "to-rose-600",
      icon: "text-purple-600",
      button: "from-purple-600 to-rose-700",
    },
  ]

  return (
    <section id="pricing" className="relative overflow-hidden py-20 bg-gradient-to-b from-white via-violet-50 to-indigo-50">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 -left-10 h-64 w-64 rounded-full bg-violet-200 mix-blend-multiply blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-200 mix-blend-multiply blur-3xl opacity-30" />
      </div>

      <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Choose Your Recruitment Plan
            </h2>
          </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => {
            const c = colorSets[index % colorSets.length]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Gradient border */}
                <div className={`h-full rounded-2xl p-[2px] bg-gradient-to-br ${c.from} ${c.to} shadow-lg transition-transform duration-300 group-hover:scale-[1.02]`}>
                  <div className="h-full rounded-2xl bg-white p-8 shadow-sm flex flex-col">
                    {/* Removed "Most Popular" pill as requested */}

                    <div className="mb-6">
                      <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                      <p className="text-gray-600">{plan.description}</p>
                    </div>

                    <ul className="space-y-3 mb-8 flex-grow">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className={`h-5 w-5 ${c.icon} mt-0.5 flex-shrink-0`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      onClick={() => trackEvent('click', 'Recruiter CTA', `${plan.name} - ${plan.cta}`, 1)}
                      className={
                        plan.popular
                          ? `rounded-full bg-gradient-to-r ${c.button} text-white`
                          : "rounded-full bg-white text-gray-900 border border-gray-300 hover:bg-gray-50"
                      }
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* All Plans Include section removed as requested */}
      </div>
    </section>
  )
}
