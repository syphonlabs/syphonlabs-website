"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Free Account",
    price: "$0",
    description: "Try Draft with a free account",
    features: [
      "10 sets of Documents per month",
      "Real Time edits",
      "Choice of ATS approved Templates",
      "PDF Downloads",
    ],
    cta: "Try a Free Account",
    popular: true,
  },
  {
    name: "Pro",
    price: "Coming Soon",
    description: "",
    features: [
      "Unlimited Documents",
      "Real Time edits",
      "Choice of ATS approved Templates",
      "All document format downloads",
      "Job Application History",
      "Document Version History",
    ],
    cta: "Coming Soon",
    popular: false,
  },
]

export default function DraftPricing() {
  const colorSets = [
    { from: "from-indigo-500", to: "to-violet-600", icon: "text-indigo-600", button: "from-indigo-600 to-violet-700" },
    { from: "from-blue-500", to: "to-cyan-600", icon: "text-blue-600", button: "from-blue-600 to-cyan-700" },
    { from: "from-purple-500", to: "to-rose-600", icon: "text-purple-600", button: "from-purple-600 to-rose-700" },
  ]

  return (
    <section id="pricing" className="relative overflow-hidden py-20 bg-gradient-to-b from-white via-violet-50 to-indigo-50">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 -left-10 h-64 w-64 rounded-full bg-violet-200 mix-blend-multiply blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-200 mix-blend-multiply blur-3xl opacity-30" />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Choose How You Draft</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 justify-items-center w-fit mx-auto">
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
                <div className={`h-full rounded-2xl p-[2px] bg-gradient-to-br ${c.from} ${c.to} shadow-lg transition-transform duration-300 group-hover:scale-[1.02]`}>
                  <div className="h-full rounded-2xl bg-white p-8 shadow-sm flex flex-col">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                      <div className="flex items-baseline mb-2">
                        <span className="text-3xl font-bold">{plan.price}</span>
                      </div>
                      {plan.description && <p className="text-gray-600">{plan.description}</p>}
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
                      className={
                        plan.popular
                          ? `rounded-full bg-gradient-to-r ${c.button} text-white`
                          : "rounded-full bg-white text-violet-700 border border-violet-300 hover:bg-violet-50"
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
      </div>
    </section>
  )
}