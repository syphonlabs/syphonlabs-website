"use client"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Find answers to common questions about our platform.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
