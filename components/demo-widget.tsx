"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Upload, FileText, Zap, Download, Loader2, Link as LinkIcon, FileCheck2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  "upload",
  "paste",
  "generating-resume",
  "generating-cover",
  "result"
]

const mockResume = `
John Doe
john.doe@email.com | (555) 123-4567

Summary
Software Engineer with 5+ years of experience building scalable web applications. Passionate about AI and automation.

Skills
- JavaScript, TypeScript, React, Node.js
- Python, SQL, REST APIs
- Cloud: AWS, Azure

Experience
Tech Solutions Inc. | Software Engineer | 2020–2024
- Led development of AI-powered file management tool
- Improved system performance by 30%

Education
B.S. in Computer Science, NYU
`

const mockCover = `
Dear Hiring Manager,

I am excited to apply for the Software Engineer position at TechCorp. My experience in building AI-driven applications and my passion for innovative solutions make me a strong fit for your team.

I look forward to contributing to TechCorp's mission and would love to discuss how my skills can help drive your projects forward.

Sincerely,
John Doe
`

export default function DemoWidget() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (step < steps.length - 1) {
      const timeouts = [1200, 1200, 1400, 1400]
      const t = setTimeout(() => setStep(s => s + 1), timeouts[step])
      return () => clearTimeout(t)
    }
  }, [step])

  return (
    <div className="max-w-[80rem] mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 p-12 min-h-[500px] flex flex-row gap-12 items-start justify-between overflow-x-auto">
      {/* Left: Two square card boxes stacked vertically */}
      <div className="w-[32rem] flex flex-col gap-8 items-center justify-center flex-shrink-0">
        {/* Upload Resume + Resume Preview as a window */}
        <div className="w-[32rem] h-[28rem] bg-gradient-to-br from-violet-50 to-indigo-50 rounded-lg border border-violet-200 p-6 shadow flex flex-col">
          {/* Window header */}
          <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-t-lg border-b border-gray-200">
            <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />
            <span className="ml-3 text-xs text-gray-500 font-mono">resume.pdf</span>
          </div>
          <div className="flex flex-row flex-1 mt-2">
            {/* Left: Upload Action */}
            <div className="flex-1 flex flex-col items-center justify-center pr-3 border-r border-gray-100">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center mb-2 shadow">
                <Upload className="h-6 w-6 text-white" />
              </div>
              <div className="font-semibold text-sm mb-1">Upload Resume</div>
              <div className="text-sm text-gray-400">PDF, DOC, DOCX</div>
            </div>
            {/* Right: Resume Preview */}
            <div className="flex-1 flex flex-col items-center justify-center pl-3">
              <div className="font-semibold text-sm text-gray-700 mb-1">Resume Preview</div>
              <pre className="w-[24rem] h-72 bg-white rounded border border-dashed border-violet-200 text-xs text-gray-700 flex items-start justify-start px-6 py-3 whitespace-pre-line text-left overflow-auto font-mono shadow-inner">
{mockResume}
              </pre>
            </div>
          </div>
        </div>
        {/* Paste Job Link + Job Description Preview as a window */}
        <div className="w-[32rem] h-[28rem] bg-gradient-to-br from-violet-50 to-indigo-50 rounded-lg border border-violet-200 p-6 shadow flex flex-col">
          {/* Window header */}
          <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-t-lg border-b border-gray-200">
            <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />
            <span className="ml-3 text-xs text-gray-500 font-mono">job-description.txt</span>
          </div>
          <div className="flex flex-row flex-1 mt-2">
            {/* Left: Paste Job Link Action */}
            <div className="flex-1 flex flex-col items-center justify-center pr-3 border-r border-gray-100">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center mb-2 shadow">
                <LinkIcon className="h-6 w-6 text-white" />
              </div>
              <div className="font-semibold text-sm mb-1">Paste Job Link</div>
              <div className="text-sm text-gray-400">e.g. TechCorp</div>
            </div>
            {/* Right: Job Description Preview */}
            <div className="flex-1 flex flex-col items-center justify-center pl-3">
              <div className="font-semibold text-sm text-gray-700 mb-1">Job Description</div>
              <pre className="w-[24rem] h-72 bg-white rounded border border-dashed border-indigo-200 text-xs text-gray-700 flex items-start justify-start px-6 py-3 whitespace-pre-line text-left overflow-auto font-mono shadow-inner">
Software Engineer at TechCorp
Build scalable web apps
AI, React, Node.js
NYC, Full-time
              </pre>
            </div>
          </div>
        </div>
      </div>
      {/* Right: Resume & Cover Letter Generation Animation */}
      <div className="w-[32rem] flex flex-col items-center justify-center flex-shrink-0">
        <AnimatePresence mode="wait">
          {/* Resume Generation */}
          {step < 2 && (
            <motion.div
              key="resume-placeholder"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xs bg-gray-50 rounded-lg border border-gray-200 p-4 shadow mb-4"
            >
              <div className="font-bold text-gray-700 mb-2 flex items-center gap-2">
                <FileText className="h-4 w-4 text-violet-400" /> Resume Preview
              </div>
              <div className="text-xs text-gray-400 italic">Waiting for upload...</div>
            </motion.div>
          )}
          {step === 2 && (
            <motion.div
              key="resume-gen"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xs bg-gray-50 rounded-lg border border-gray-200 p-4 shadow mb-4"
            >
              <div className="font-bold text-gray-700 mb-2 flex items-center gap-2">
                <FileCheck2 className="h-4 w-4 text-violet-500" /> Optimized Resume
              </div>
              <motion.pre
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.1 }}
                className="text-xs text-gray-700 whitespace-pre-line"
              >
                {mockResume}
              </motion.pre>
            </motion.div>
          )}
          {/* Cover Letter Generation */}
          {step < 3 && (
            <motion.div
              key="cover-placeholder"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xs bg-gradient-to-br from-violet-50 to-indigo-50 rounded-lg border border-violet-200 p-4 shadow"
            >
              <div className="font-bold text-violet-700 mb-2 flex items-center gap-2">
                <FileText className="h-4 w-4 text-indigo-400" /> Cover Letter Preview
              </div>
              <div className="text-xs text-gray-400 italic">Waiting for resume...</div>
            </motion.div>
          )}
          {step === 3 && (
            <motion.div
              key="cover-gen"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xs bg-gradient-to-br from-violet-50 to-indigo-50 rounded-lg border border-violet-200 p-4 shadow"
            >
              <div className="font-bold text-violet-700 mb-2 flex items-center gap-2">
                <FileCheck2 className="h-4 w-4 text-indigo-500" /> Cover Letter
              </div>
              <motion.pre
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.1 }}
                className="text-xs text-violet-700 whitespace-pre-line"
              >
                {mockCover}
              </motion.pre>
            </motion.div>
          )}
          {/* Both Results */}
          {step === 4 && (
            <motion.div
              key="result-right"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-4 items-center"
            >
              <div className="w-[32rem] h-[28rem] bg-gray-50 rounded-lg border border-gray-200 p-6 shadow flex flex-col justify-between">
                <div className="font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <FileCheck2 className="h-4 w-4 text-violet-500" /> Optimized Resume
                </div>
                <pre className="w-full h-40 bg-white rounded border border-dashed border-violet-200 text-xs text-gray-700 flex items-start justify-start px-3 py-2 whitespace-pre-line text-left overflow-auto font-mono shadow-inner">{mockResume}</pre>
                <Button size="sm" className="mt-2 bg-gradient-to-r from-violet-500 to-indigo-600 text-white w-full">
                  <Download className="h-4 w-4 mr-1" /> Download Resume
                </Button>
              </div>
              <div className="w-[32rem] h-[28rem] bg-gradient-to-br from-violet-50 to-indigo-50 rounded-lg border border-violet-200 p-6 shadow flex flex-col">
                <div className="font-bold text-violet-700 mb-2 flex items-center gap-2">
                  <FileCheck2 className="h-4 w-4 text-indigo-500" /> Cover Letter
                </div>
                <pre className="text-xs text-violet-700 whitespace-pre-line">{mockCover}</pre>
                <Button size="sm" className="mt-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white w-full">
                  <Download className="h-4 w-4 mr-1" /> Download Cover Letter
                </Button>
              </div>
              <Button
                variant="outline"
                className="text-violet-700 border-violet-200 hover:bg-violet-50 mt-2"
                onClick={() => setStep(0)}
              >
                Replay Demo
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
} 