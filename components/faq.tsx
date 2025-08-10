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
    question: "How secure is my data?",
    answer:
      "We take security very seriously. All your data is encrypted both in transit and at rest. We use industry-standard security practices and regular audits to ensure your information remains private and secure. We never use your content to train our AI models without explicit permission.",
  },
  {
    question: "Can I use the platform offline?",
    answer:
      "Yes, our platform has offline capabilities. You can continue working on your documents even without an internet connection, and they will automatically sync once you're back online. Some AI features may be limited in offline mode.",
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Our Pro plan is priced per user per month. You only pay for active users, and you can add or remove team members at any time. For larger teams, we offer volume discounts. Contact our sales team for custom enterprise pricing.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes, we offer a 14-day free trial on all our plans. No credit card is required to start your trial. You'll get full access to all features during the trial period so you can properly evaluate if our platform meets your needs.",
  },
  {
    question: "Does Syphon Labs store my files in the cloud?",
    answer:
      "No, Syphon Explorer works entirely with your local file system. All your files remain stored on your device, and the AI processing happens locally. There are no storage requirements or cloud dependencies - Syphon Explorer simply enhances your existing file system with AI capabilities.",
  },
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
