"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How accurate is the AI resume analysis?",
    answer:
      "Our AI achieves 94% accuracy in resume analysis by using advanced natural language processing and machine learning models trained on millions of resumes. The system continuously learns and improves from recruiter feedback to maintain high accuracy rates.",
  },
  {
    question: "Can I integrate Syphon Recruiter with my existing ATS?",
    answer:
              "Yes, Syphon Recruiter integrates with popular ATS systems including Workday, BambooHR, Greenhouse, and Lever. We also provide API access for custom integrations with your existing HR tech stack.",
  },
  {
    question: "How does the bias-free evaluation work?",
    answer:
      "Our AI removes identifying information like names, photos, and demographic indicators during initial screening. It focuses purely on skills, experience, and qualifications relevant to the job requirements, helping reduce unconscious bias in the hiring process.",
  },
  {
    question: "What file formats are supported for resume uploads?",
    answer:
      "Syphon Recruiter supports PDF, DOC, DOCX, TXT, and RTF formats. Our AI can extract information from various resume layouts and formats, including creative designs and non-standard structures.",
  },
  {
    question: "How secure is candidate data?",
    answer:
      "We take data security seriously with enterprise-grade encryption, SOC 2 compliance, and GDPR compliance. All candidate data is encrypted both in transit and at rest, with strict access controls and regular security audits.",
  },
  {
    question: "Can I customize the AI scoring criteria?",
    answer:
      "Yes, you can customize scoring weights for different criteria such as experience, education, skills, and cultural fit. The AI learns from your hiring decisions to improve future recommendations and scoring accuracy.",
  },
  {
    question: "Is there a limit on the number of job postings?",
    answer:
      "The Starter plan includes up to 5 active job postings, Professional includes 25, and Enterprise has unlimited postings. You can upgrade your plan at any time to accommodate more positions.",
  },
]

export default function RecruiterFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Find answers to common questions about Syphon Recruiter.</p>
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
