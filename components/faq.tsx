"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How does the AI writing assistant work?",
    answer:
      "Our AI writing assistant uses advanced language models to help you write better content. It can suggest improvements to your grammar, style, and clarity, as well as generate content based on your prompts. The more you use it, the better it gets at understanding your writing style.",
  },
  {
    question: "Can I import my existing documents?",
    answer:
      "Yes, you can import documents from various formats including Word, Google Docs, Notion, and Markdown. Our platform will preserve the formatting and structure of your documents while making them available for AI enhancement.",
  },
  {
    question: "Can I edit results in real time?",
    answer:
      "Yes. Draft includes a real‑time AI chat to refine bullet points, tweak tone, and make quick changes before you download.",
  },
  // Removed offline and team pricing FAQs as requested
  {
    question: "Do you offer a free trial?",
    answer:
      "No trial needed — we offer a Free Account and an Open Source option. The Pro plan is coming soon.",
  },
  // Removed cloud storage FAQ specific to Explorer
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Find answers to common questions about our platform.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full pr-12 pl-6 py-4 text-left font-medium relative flex items-center bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="block text-left w-full">{faq.question}</span>
                    <ChevronDown 
                      className={`h-4 w-4 absolute right-6 top-1/2 -translate-y-1/2 transition-transform duration-200 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 py-4 text-gray-600 bg-gray-50"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
