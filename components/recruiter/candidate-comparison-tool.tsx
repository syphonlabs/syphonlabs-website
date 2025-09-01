"use client"

import { useState } from "react"
import {
  Users,
  User,
  Star,
  Check,
  Briefcase,
  GraduationCap,
  MapPin,
  Clock,
  BrainCircuit,
  BarChart3,
  ChevronDown,
  ChevronUp,
  FileText,
  Mail,
  Phone,
} from "lucide-react"
import MobileDisclaimer from "@/components/mobile-disclaimer"

export default function CandidateComparisonTool() {
  const [selectedCandidates, setSelectedCandidates] = useState([0, 1])
  const [expandedSection, setExpandedSection] = useState("skills")

  const candidates = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior Frontend Developer",
      email: "sarah.johnson@email.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA (Remote)",
      experience: "5 years",
      education: "BS Computer Science, Stanford University",
      availability: "2 weeks",
      salary: "$120,000",
      score: 95,
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "GraphQL", level: 80 },
        { name: "AWS", level: 75 },
      ],
      strengths: ["Technical expertise", "Team leadership", "Problem-solving", "Communication"],
      weaknesses: ["Limited enterprise experience"],
      interviews: [
        { type: "Technical", score: 92, feedback: "Excellent problem-solving skills and technical knowledge" },
        { type: "Cultural", score: 88, feedback: "Good cultural fit, aligned with company values" },
      ],
      projects: [
        "Led development of e-commerce platform with 2M+ users",
        "Reduced page load time by 40% through optimization",
        "Built scalable architecture for high-traffic applications",
      ],
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Senior Frontend Developer",
      email: "michael.chen@email.com",
      phone: "+1 (555) 234-5678",
      location: "New York, NY",
      experience: "7 years",
      education: "MS Computer Science, Columbia University",
      availability: "1 month",
      salary: "$135,000",
      score: 88,
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "GraphQL", level: 90 },
        { name: "AWS", level: 85 },
      ],
      strengths: ["System architecture", "Mentorship", "Code quality", "Documentation"],
      weaknesses: ["Remote work experience limited"],
      interviews: [
        { type: "Technical", score: 90, feedback: "Strong technical skills, especially in system design" },
        { type: "Cultural", score: 85, feedback: "Good team player, some concerns about remote work" },
      ],
      projects: [
        "Architected microservices platform for financial services",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Created design system used across multiple products",
      ],
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Senior Frontend Developer",
      email: "emily.rodriguez@email.com",
      phone: "+1 (555) 345-6789",
      location: "Austin, TX (Remote)",
      experience: "4 years",
      education: "BS Computer Engineering, UT Austin",
      availability: "Immediate",
      salary: "$110,000",
      score: 92,
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Node.js", level: 75 },
        { name: "GraphQL", level: 85 },
        { name: "AWS", level: 70 },
      ],
      strengths: ["UI/UX expertise", "Performance optimization", "Accessibility", "Fast learner"],
      weaknesses: ["Less backend experience"],
      interviews: [
        { type: "Technical", score: 94, feedback: "Exceptional frontend skills, particularly in React" },
        { type: "Cultural", score: 90, feedback: "Enthusiastic and collaborative, great communication" },
      ],
      projects: [
        "Redesigned SaaS platform increasing user engagement by 35%",
        "Built accessible components library compliant with WCAG 2.1",
        "Optimized React rendering reducing memory usage by 30%",
      ],
    },
    {
      id: 4,
      name: "David Kim",
      role: "Data Scientist",
      email: "david.kim@email.com",
      phone: "+1 (555) 456-7890",
      location: "Seattle, WA (Remote)",
      experience: "3 years",
      education: "MS Data Science, University of Washington",
      availability: "3 weeks",
      salary: "$115,000",
      score: 87,
      skills: [
        { name: "React", level: 20 },
        { name: "TypeScript", level: 15 },
        { name: "Node.js", level: 35 },
        { name: "GraphQL", level: 10 },
        { name: "AWS", level: 70 },
      ],
      strengths: ["Machine learning", "Model deployment", "Data analysis", "Research"],
      weaknesses: ["Frontend expertise"],
      interviews: [
        { type: "Technical", score: 88, feedback: "Solid ML foundations and practical implementation skills" },
        { type: "Cultural", score: 84, feedback: "Collaborative and detail-oriented" },
      ],
      projects: [
        "Built churn prediction model improving retention by 7%",
        "Deployed scalable feature store on AWS",
        "Published research on sequence models",
      ],
    },
    {
      id: 5,
      name: "Alex Turner",
      role: "Backend Developer",
      email: "alex.turner@email.com",
      phone: "+1 (555) 567-8901",
      location: "Boston, MA (Remote)",
      experience: "4 years",
      education: "MS Computer Science, Northeastern University",
      availability: "1 month",
      salary: "$118,000",
      score: 89,
      skills: [
        { name: "React", level: 30 },
        { name: "TypeScript", level: 40 },
        { name: "Node.js", level: 85 },
        { name: "GraphQL", level: 65 },
        { name: "AWS", level: 70 },
      ],
      strengths: ["API design", "Database optimization", "Performance"],
      weaknesses: ["Design systems"],
      interviews: [
        { type: "Technical", score: 90, feedback: "Excellent backend design and problem solving" },
        { type: "Cultural", score: 86, feedback: "Clear communicator and calm under pressure" },
      ],
      projects: [
        "Built microservices platform handling 50M req/day",
        "Improved API latency by 60%",
        "Led database migration to PostgreSQL",
      ],
    },
    {
      id: 6,
      name: "Lisa Wang",
      role: "Marketing Manager",
      email: "lisa.wang@email.com",
      phone: "+1 (555) 678-9012",
      location: "Los Angeles, CA",
      experience: "6 years",
      education: "MBA Marketing, UCLA",
      availability: "2 weeks",
      salary: "$130,000",
      score: 91,
      skills: [
        { name: "React", level: 0 },
        { name: "TypeScript", level: 0 },
        { name: "Node.js", level: 0 },
        { name: "GraphQL", level: 0 },
        { name: "AWS", level: 30 },
      ],
      strengths: ["Growth strategy", "Analytics", "Campaign execution"],
      weaknesses: ["Deep technical topics"],
      interviews: [
        { type: "Technical", score: 80, feedback: "Great analytical rigor and tooling familiarity" },
        { type: "Cultural", score: 92, feedback: "Strong collaborator and leader" },
      ],
      projects: [
        "Scaled paid acquisition with 45% conversion uplift",
        "Launched brand campaign across 6 channels",
        "Set up marketing analytics stack",
      ],
    },
    {
      id: 7,
      name: "James Miller",
      role: "Senior Frontend Developer",
      email: "james.miller@email.com",
      phone: "+1 (555) 789-0123",
      location: "Denver, CO (Remote)",
      experience: "6 years",
      education: "BS Software Engineering, CU Boulder",
      availability: "3 weeks",
      salary: "$125,000",
      score: 93,
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 92 },
        { name: "Node.js", level: 80 },
        { name: "GraphQL", level: 75 },
        { name: "AWS", level: 65 },
      ],
      strengths: ["Accessibility", "Performance", "Mentorship"],
      weaknesses: ["Backend depth"],
      interviews: [
        { type: "Technical", score: 95, feedback: "Outstanding frontend depth and breadth" },
        { type: "Cultural", score: 90, feedback: "Thoughtful and collaborative leader" },
      ],
      projects: [
        "Implemented design system across 4 products",
        "Improved Core Web Vitals to green across the board",
        "Mentored team of 3 junior engineers",
      ],
    },
    {
      id: 8,
      name: "Rachel Green",
      role: "UX Designer",
      email: "rachel.green@email.com",
      phone: "+1 (555) 890-1234",
      location: "Portland, OR (Remote)",
      experience: "3 years",
      education: "BFA Graphic Design, RISD",
      availability: "Immediate",
      salary: "$100,000",
      score: 90,
      skills: [
        { name: "React", level: 20 },
        { name: "TypeScript", level: 10 },
        { name: "Node.js", level: 10 },
        { name: "GraphQL", level: 0 },
        { name: "AWS", level: 0 },
      ],
      strengths: ["User research", "Mobile-first design", "Prototyping"],
      weaknesses: ["Backend topics"],
      interviews: [
        { type: "Technical", score: 88, feedback: "Strong portfolio and research rigor" },
        { type: "Cultural", score: 91, feedback: "Highly empathetic and user-focused" },
      ],
      projects: [
        "Created mobile design system",
        "Ran 50+ usability sessions",
        "Reduced user errors by 30% via redesign",
      ],
    },
  ]

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const handleCandidateSelect = (index) => {
    if (selectedCandidates.includes(index)) {
      setSelectedCandidates(selectedCandidates.filter((i) => i !== index))
    } else {
      if (selectedCandidates.length < 3) {
        setSelectedCandidates([...selectedCandidates, index])
      }
    }
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden relative">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200 p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-400"></div>
          </div>
                          <span className="text-sm font-medium text-gray-500">Syphon Recruiter - Candidate Comparison</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-sm bg-violet-100 text-violet-700 px-2 py-1 rounded">
            Position: Senior Frontend Developer
          </button>
        </div>
      </div>

      {/* Candidate Selection */}
      <div className="p-4 border-b border-gray-200 bg-violet-50">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-medium">Select Candidates to Compare (max 3)</h3>
          <div className="text-sm text-gray-600">{selectedCandidates.length} of 3 selected</div>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {candidates.map((candidate, index) => (
            <div
              key={index}
              onClick={() => handleCandidateSelect(index)}
              className={`flex-shrink-0 border rounded-lg p-3 cursor-pointer transition-all ${
                selectedCandidates.includes(index)
                  ? "border-violet-300 bg-violet-100"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
              style={{ width: "200px" }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <User className="h-4 w-4 text-gray-500" />
                </div>
                <div
                  className={`h-5 w-5 rounded-full flex items-center justify-center ${
                    selectedCandidates.includes(index) ? "bg-violet-500 text-white" : "bg-gray-200"
                  }`}
                >
                  {selectedCandidates.includes(index) && <Check className="h-3 w-3" />}
                </div>
              </div>
              <div className="font-medium text-sm">{candidate.name}</div>
              <div className="text-xs text-gray-500 mb-2">{candidate.role}</div>
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 text-yellow-500" />
                <span className="text-sm font-bold text-violet-600">{candidate.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      <div className="p-4 h-[500px] overflow-y-auto">
        {selectedCandidates.length > 0 ? (
          <div className="space-y-4">
            {/* Basic Info */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div
                className="flex items-center justify-between p-3 bg-gray-50 cursor-pointer"
                onClick={() => toggleSection("basic")}
              >
                <h3 className="font-medium flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Basic Information
                </h3>
                {expandedSection === "basic" ? (
                  <ChevronUp className="h-4 w-4 text-gray-500" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                )}
              </div>
              {expandedSection === "basic" && (
                <div className="p-3">
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 text-sm text-gray-500 w-1/4">Name</td>
                        {selectedCandidates.map((candidateIndex) => (
                          <td key={candidateIndex} className="py-2 text-sm font-medium">
                            {candidates[candidateIndex].name}
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 text-sm text-gray-500">Contact</td>
                        {selectedCandidates.map((candidateIndex) => (
                          <td key={candidateIndex} className="py-2 text-sm">
                            <div className="flex items-center gap-1 mb-1">
                              <Mail className="h-3 w-3 text-gray-400" />
                              <span>{candidates[candidateIndex].email}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Phone className="h-3 w-3 text-gray-400" />
                              <span>{candidates[candidateIndex].phone}</span>
                            </div>
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 text-sm text-gray-500">Location</td>
                        {selectedCandidates.map((candidateIndex) => (
                          <td key={candidateIndex} className="py-2 text-sm">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3 text-gray-400" />
                              <span>{candidates[candidateIndex].location}</span>
                            </div>
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 text-sm text-gray-500">Experience</td>
                        {selectedCandidates.map((candidateIndex) => (
                          <td key={candidateIndex} className="py-2 text-sm">
                            <div className="flex items-center gap-1">
                              <Briefcase className="h-3 w-3 text-gray-400" />
                              <span>{candidates[candidateIndex].experience}</span>
                            </div>
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 text-sm text-gray-500">Education</td>
                        {selectedCandidates.map((candidateIndex) => (
                          <td key={candidateIndex} className="py-2 text-sm">
                            <div className="flex items-center gap-1">
                              <GraduationCap className="h-3 w-3 text-gray-400" />
                              <span>{candidates[candidateIndex].education}</span>
                            </div>
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 text-sm text-gray-500">Availability</td>
                        {selectedCandidates.map((candidateIndex) => (
                          <td key={candidateIndex} className="py-2 text-sm">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3 text-gray-400" />
                              <span>{candidates[candidateIndex].availability}</span>
                            </div>
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="py-2 text-sm text-gray-500">Salary Expectation</td>
                        {selectedCandidates.map((candidateIndex) => (
                          <td key={candidateIndex} className="py-2 text-sm font-medium">
                            {candidates[candidateIndex].salary}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Skills */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div
                className="flex items-center justify-between p-3 bg-gray-50 cursor-pointer"
                onClick={() => toggleSection("skills")}
              >
                <h3 className="font-medium flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  Skills Assessment
                </h3>
                {expandedSection === "skills" ? (
                  <ChevronUp className="h-4 w-4 text-gray-500" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                )}
              </div>
              {expandedSection === "skills" && (
                <div className="p-3">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-2 text-left text-sm font-medium text-gray-500">Skill</th>
                        {selectedCandidates.map((candidateIndex) => (
                          <th key={candidateIndex} className="py-2 text-left text-sm font-medium text-gray-500">
                            {candidates[candidateIndex].name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {["React", "TypeScript", "Node.js", "GraphQL", "AWS"].map((skill, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="py-2 text-sm">{skill}</td>
                          {selectedCandidates.map((candidateIndex) => {
                            const candidateSkill = candidates[candidateIndex].skills.find((s) => s.name === skill)
                            const level = candidateSkill ? candidateSkill.level : 0
                            return (
                              <td key={candidateIndex} className="py-2">
                                <div className="flex items-center gap-2">
                                  <div className="w-full bg-gray-200 rounded-full h-2 flex-1">
                                    <div
                                      className={`h-2 rounded-full ${
                                        level >= 90
                                          ? "bg-green-500"
                                          : level >= 80
                                            ? "bg-blue-500"
                                            : level >= 70
                                              ? "bg-yellow-500"
                                              : "bg-orange-500"
                                      }`}
                                      style={{ width: `${level}%` }}
                                    ></div>
                                  </div>
                                  <span className="text-xs font-medium w-8">{level}%</span>
                                </div>
                              </td>
                            )
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Strengths & Weaknesses */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div
                className="flex items-center justify-between p-3 bg-gray-50 cursor-pointer"
                onClick={() => toggleSection("strengths")}
              >
                <h3 className="font-medium flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  Strengths & Weaknesses
                </h3>
                {expandedSection === "strengths" ? (
                  <ChevronUp className="h-4 w-4 text-gray-500" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                )}
              </div>
              {expandedSection === "strengths" && (
                <div className="p-3">
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 text-sm text-gray-500 w-1/4">Strengths</td>
                        {selectedCandidates.map((candidateIndex) => (
                          <td key={candidateIndex} className="py-2">
                            <ul className="list-disc pl-5 text-sm space-y-1">
                              {candidates[candidateIndex].strengths.map((strength, i) => (
                                <li key={i}>{strength}</li>
                              ))}
                            </ul>
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="py-2 text-sm text-gray-500">Areas for Improvement</td>
                        {selectedCandidates.map((candidateIndex) => (
                          <td key={candidateIndex} className="py-2">
                            <ul className="list-disc pl-5 text-sm space-y-1">
                              {candidates[candidateIndex].weaknesses.map((weakness, i) => (
                                <li key={i}>{weakness}</li>
                              ))}
                            </ul>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Interview Feedback */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div
                className="flex items-center justify-between p-3 bg-gray-50 cursor-pointer"
                onClick={() => toggleSection("interviews")}
              >
                <h3 className="font-medium flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Interview Feedback
                </h3>
                {expandedSection === "interviews" ? (
                  <ChevronUp className="h-4 w-4 text-gray-500" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                )}
              </div>
              {expandedSection === "interviews" && (
                <div className="p-3">
                  <table className="w-full">
                    <tbody>
                      {["Technical", "Cultural"].map((interviewType, index) => (
                        <tr key={index} className={index === 0 ? "border-b border-gray-100" : ""}>
                          <td className="py-2 text-sm text-gray-500 w-1/4">{interviewType} Interview</td>
                          {selectedCandidates.map((candidateIndex) => {
                            const interview = candidates[candidateIndex].interviews.find(
                              (i) => i.type === interviewType,
                            )
                            return (
                              <td key={candidateIndex} className="py-2">
                                <div className="mb-1">
                                  <span className="text-sm font-medium">Score: </span>
                                  <span
                                    className={`text-sm ${
                                      interview.score >= 90
                                        ? "text-green-600"
                                        : interview.score >= 80
                                          ? "text-blue-600"
                                          : "text-yellow-600"
                                    }`}
                                  >
                                    {interview.score}/100
                                  </span>
                                </div>
                                <p className="text-sm text-gray-600">{interview.feedback}</p>
                              </td>
                            )
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Projects & Achievements */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div
                className="flex items-center justify-between p-3 bg-gray-50 cursor-pointer"
                onClick={() => toggleSection("projects")}
              >
                <h3 className="font-medium flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  Projects & Achievements
                </h3>
                {expandedSection === "projects" ? (
                  <ChevronUp className="h-4 w-4 text-gray-500" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                )}
              </div>
              {expandedSection === "projects" && (
                <div className="p-3">
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <td className="py-2 text-sm text-gray-500 w-1/4">Key Projects</td>
                        {selectedCandidates.map((candidateIndex) => (
                          <td key={candidateIndex} className="py-2">
                            <ul className="list-disc pl-5 text-sm space-y-1">
                              {candidates[candidateIndex].projects.map((project, i) => (
                                <li key={i}>{project}</li>
                              ))}
                            </ul>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* AI Recommendation */}
            <div className="bg-violet-50 border border-violet-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <BrainCircuit className="h-5 w-5 text-violet-600 mt-0.5" />
                <div>
                  <div className="font-medium text-violet-700 mb-1">AI Recommendation</div>
                  <p className="text-sm text-gray-700 mb-3">
                    Based on comprehensive analysis of skills, experience, and interview performance, here's our AI
                    recommendation:
                  </p>
                  <div className="space-y-2">
                    {selectedCandidates.includes(0) && (
                      <div className="flex items-center gap-2 bg-white p-2 rounded border border-violet-100">
                        <div className="h-8 w-8 rounded-full bg-violet-100 flex items-center justify-center">
                          <span className="text-sm font-bold text-violet-700">1</span>
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{candidates[0].name}</div>
                          <div className="text-xs text-gray-500">
                            Top candidate with excellent technical skills and leadership experience
                          </div>
                        </div>
                        <div className="text-lg font-bold text-violet-600">{candidates[0].score}</div>
                      </div>
                    )}
                    {selectedCandidates.includes(2) && (
                      <div className="flex items-center gap-2 bg-white p-2 rounded border border-violet-100">
                        <div className="h-8 w-8 rounded-full bg-violet-100 flex items-center justify-center">
                          <span className="text-sm font-bold text-violet-700">2</span>
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{candidates[2].name}</div>
                          <div className="text-xs text-gray-500">
                            Strong frontend skills with excellent UI/UX expertise
                          </div>
                        </div>
                        <div className="text-lg font-bold text-violet-600">{candidates[2].score}</div>
                      </div>
                    )}
                    {selectedCandidates.includes(1) && (
                      <div className="flex items-center gap-2 bg-white p-2 rounded border border-violet-100">
                        <div className="h-8 w-8 rounded-full bg-violet-100 flex items-center justify-center">
                          <span className="text-sm font-bold text-violet-700">3</span>
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{candidates[1].name}</div>
                          <div className="text-xs text-gray-500">
                            Solid system architecture skills but less remote experience
                          </div>
                        </div>
                        <div className="text-lg font-bold text-violet-600">{candidates[1].score}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 justify-end">
              <button className="px-4 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50">
                Export Comparison
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50">
                Share with Team
              </button>
              <button className="px-4 py-2 bg-violet-600 text-white rounded text-sm hover:bg-violet-700">
                Schedule Final Interviews
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <Users className="h-12 w-12 text-gray-300 mb-3" />
            <div className="text-lg font-medium mb-2">No candidates selected</div>
            <div className="text-sm text-center">Select candidates above to compare their profiles</div>
          </div>
        )}
      </div>
      <MobileDisclaimer />
    </div>
  )
}
