"use client"

import { motion } from "framer-motion"
import { Check, BrainCircuit, Columns, Calendar } from "lucide-react"
import ColumnViewAnimation from "./column-view-animation"
import AIAssistantsAnimation from "./ai-assistants-animation"
import TeamCollaborationAnimation from "./team-collaboration-animation"

const steps = [
  {
    number: "01",
    title: "Create your workspace",
    description: "Set up your personalized workspace with custom folders, views, and templates.",
    features: ["Flexible column view layout", "Multiple nested folders", "Customizable templates"],
    icon: <Columns className="h-10 w-10 text-violet-600" />,
    hasAnimation: true,
    animationType: "column-view",
  },
  {
    number: "02",
    title: "Activate AI assistants",
    description: "Enable AI features to help with writing, organization, task management, and project timelines.",
    features: ["GPT-powered writing assistant", "AI task management", "Smart completion timelines"],
    icon: <BrainCircuit className="h-10 w-10 text-violet-600" />,
    hasAnimation: true,
    animationType: "ai-assistants",
  },
  {
    number: "03",
    title: "Collaborate with your team",
    description: "Invite team members and collaborate in real-time with intelligent Kanban boards and scheduling.",
    features: ["AI-powered team Kanban", "Integrated call scheduler", "Real-time collaboration"],
    icon: <Calendar className="h-10 w-10 text-violet-600" />,
    hasAnimation: true,
    animationType: "team-collaboration",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">
            Getting started with Syphon Explorer is simple. Follow these steps to transform your productivity.
          </p>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className={`grid gap-12 items-center ${
                index % 2 === 0 ? "lg:grid-cols-[1fr,2.5fr]" : "lg:grid-cols-[2.5fr,1fr] lg:flex-row-reverse"
              }`}
            >
              <div className={`flex flex-col gap-6 ${index % 2 !== 0 && "lg:order-2"}`}>
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-violet-100">
                  {step.icon}
                </div>
                <h3 className="text-3xl font-bold">{step.title}</h3>
                <p className="text-xl text-gray-600">{step.description}</p>
                <ul className="space-y-2">
                  {step.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`relative ${index % 2 !== 0 && "lg:order-1"}`}>
                {step.hasAnimation ? (
                  step.animationType === "column-view" ? (
                    <ColumnViewAnimation />
                  ) : step.animationType === "ai-assistants" ? (
                    <AIAssistantsAnimation />
                  ) : step.animationType === "team-collaboration" ? (
                    <TeamCollaborationAnimation />
                  ) : null
                ) : (
                  <div className="rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
                    <img src={step.image || "/placeholder.svg"} alt={`${step.title} illustration`} className="w-full h-auto rounded-lg" />
                  </div>
                )}

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 h-24 w-24 rounded-lg bg-violet-100 blur-xl opacity-50 -z-10"></div>
                <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-lg bg-indigo-100 blur-xl opacity-50 -z-10"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
