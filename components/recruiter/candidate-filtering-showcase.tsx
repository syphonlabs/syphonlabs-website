"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Filter,
  Search,
  Users,
  Star,
  MapPin,
  Briefcase,
  GraduationCap,
  Calendar,
  X,
  Plus,
  Sliders,
  BrainCircuit,
} from "lucide-react"
import MobileDisclaimer from "@/components/mobile-disclaimer"

export default function CandidateFilteringShowcase() {
  const [activeFilters, setActiveFilters] = useState({})
  const [filteredCandidates, setFilteredCandidates] = useState([])
  const [step, setStep] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  const allCandidates = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior Frontend Developer",
      experience: 5,
      location: "San Francisco, CA",
      education: "BS Computer Science",
      skills: ["React", "TypeScript", "Node.js", "AWS", "GraphQL"],
      score: 95,
      salary: 120000,
      remote: true,
      availability: "2 weeks",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      experience: 7,
      location: "New York, NY",
      education: "MBA, BS Engineering",
      skills: ["Product Strategy", "Agile", "Analytics", "Leadership", "SQL"],
      score: 88,
      salary: 140000,
      remote: false,
      availability: "1 month",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "UX Designer",
      experience: 4,
      location: "Austin, TX",
      education: "BFA Design",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems", "HTML/CSS"],
      score: 92,
      salary: 95000,
      remote: true,
      availability: "Immediate",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Data Scientist",
      experience: 3,
      location: "Seattle, WA",
      education: "MS Data Science",
      skills: ["Python", "Machine Learning", "SQL", "TensorFlow", "Statistics"],
      score: 87,
      salary: 110000,
      remote: true,
      availability: "3 weeks",
    },
    {
      id: 5,
      name: "Alex Turner",
      role: "Backend Developer",
      experience: 4,
      location: "Boston, MA",
      education: "MS Computer Science",
      skills: ["Python", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
      score: 89,
      salary: 115000,
      remote: true,
      availability: "1 month",
    },
    {
      id: 6,
      name: "Lisa Wang",
      role: "Marketing Manager",
      experience: 6,
      location: "Los Angeles, CA",
      education: "MBA Marketing",
      skills: ["Digital Marketing", "Google Analytics", "Facebook Ads", "Content Strategy", "SEO", "CRM"],
      score: 91,
      salary: 135000,
      remote: false,
      availability: "2 weeks",
    },
    {
      id: 7,
      name: "James Miller",
      role: "Senior Frontend Developer",
      experience: 6,
      location: "Denver, CO",
      education: "BS Software Engineering",
      skills: ["React", "Vue.js", "TypeScript", "CSS3", "Web Accessibility", "Performance"],
      score: 93,
      salary: 125000,
      remote: true,
      availability: "3 weeks",
    },
    {
      id: 8,
      name: "Rachel Green",
      role: "UX Designer",
      experience: 3,
      location: "Portland, OR",
      education: "BFA Graphic Design",
      skills: ["Figma", "Sketch", "User Research", "Prototyping", "Mobile Design", "Design Systems"],
      score: 90,
      salary: 90000,
      remote: true,
      availability: "Immediate",
    },
  ]

  const filterOptions = {
    experience: [
      { label: "0-2 years", value: [0, 2] },
      { label: "3-5 years", value: [3, 5] },
      { label: "6+ years", value: [6, 20] },
    ],
    location: [
      { label: "San Francisco, CA", value: "San Francisco, CA" },
      { label: "New York, NY", value: "New York, NY" },
      { label: "Austin, TX", value: "Austin, TX" },
      { label: "Remote", value: "remote" },
    ],
    skills: [
      // Frontend Skills
      { label: "React", value: "React", group: "Frontend" },
      { label: "TypeScript", value: "TypeScript", group: "Frontend" },
      { label: "Vue.js", value: "Vue.js", group: "Frontend" },
      { label: "CSS3", value: "CSS3", group: "Frontend" },
      { label: "HTML/CSS", value: "HTML/CSS", group: "Frontend" },
      // Backend Skills
      { label: "Python", value: "Python", group: "Backend" },
      { label: "Node.js", value: "Node.js", group: "Backend" },
      { label: "PostgreSQL", value: "PostgreSQL", group: "Backend" },
      { label: "SQL", value: "SQL", group: "Backend" },
      // Cloud & DevOps
      { label: "AWS", value: "AWS", group: "Cloud" },
      { label: "Docker", value: "Docker", group: "Cloud" },
      { label: "Redis", value: "Redis", group: "Cloud" },
      // Design Skills
      { label: "Figma", value: "Figma", group: "Design" },
      { label: "Sketch", value: "Sketch", group: "Design" },
      { label: "User Research", value: "User Research", group: "Design" },
      { label: "Prototyping", value: "Prototyping", group: "Design" },
      { label: "Design Systems", value: "Design Systems", group: "Design" },
      // Data & AI
      { label: "Machine Learning", value: "Machine Learning", group: "Data" },
      { label: "TensorFlow", value: "TensorFlow", group: "Data" },
      { label: "Statistics", value: "Statistics", group: "Data" },
      // Business Skills
      { label: "Leadership", value: "Leadership", group: "Business" },
      { label: "Product Strategy", value: "Product Strategy", group: "Business" },
      { label: "Agile", value: "Agile", group: "Business" },
      { label: "Analytics", value: "Analytics", group: "Business" },
      // Marketing Skills
      { label: "Digital Marketing", value: "Digital Marketing", group: "Marketing" },
      { label: "Google Analytics", value: "Google Analytics", group: "Marketing" },
      { label: "SEO", value: "SEO", group: "Marketing" },
      { label: "CRM", value: "CRM", group: "Marketing" },
    ],
    salary: [
      { label: "$80k - $100k", value: [80000, 100000] },
      { label: "$100k - $120k", value: [100000, 120000] },
      { label: "$120k+", value: [120000, 200000] },
    ],
  }

  // Initialize with all candidates
  useEffect(() => {
    setFilteredCandidates(allCandidates)
  }, [])

  // Auto-play demonstration
  useEffect(() => {
    if (!playing) return

    const timer = setTimeout(() => {
      if (step === 0) {
        // Apply experience filter
        setActiveFilters({ experience: [3, 5] })
        setStep(1)
      } else if (step === 1) {
        // Add skills filter
        setActiveFilters((prev) => ({ ...prev, skills: ["React"] }))
        setStep(2)
      } else if (step === 2) {
        // Add location filter
        setActiveFilters((prev) => ({ ...prev, location: "remote" }))
        setStep(3)
      } else if (step === 3) {
        // Search for specific term
        setSearchQuery("frontend")
        setStep(4)
      } else if (step === 4) {
        // Reset all filters
        setActiveFilters({})
        setSearchQuery("")
        setStep(0)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [step, playing])

  // Apply filters
  useEffect(() => {
    let filtered = allCandidates

    // Apply experience filter
    if (activeFilters.experience) {
      const [min, max] = activeFilters.experience
      filtered = filtered.filter((candidate) => candidate.experience >= min && candidate.experience <= max)
    }

    // Apply location filter
    if (activeFilters.location) {
      if (activeFilters.location === "remote") {
        filtered = filtered.filter((candidate) => candidate.remote)
      } else {
        filtered = filtered.filter((candidate) => candidate.location === activeFilters.location)
      }
    }

    // Apply skills filter
    if (activeFilters.skills) {
      filtered = filtered.filter((candidate) =>
        candidate.skills.some((skill) => skill.toLowerCase().includes(String(activeFilters.skills).toLowerCase())),
      )
    }

    // Apply salary filter
    if (activeFilters.salary) {
      const [min, max] = activeFilters.salary
      filtered = filtered.filter((candidate) => candidate.salary >= min && candidate.salary <= max)
    }

    // Apply search query
    if (searchQuery) {
      filtered = filtered.filter(
        (candidate) =>
          candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          candidate.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
          candidate.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

    setFilteredCandidates(filtered)
  }, [activeFilters, searchQuery])

  const handlePlayPause = () => {
    setPlaying(!playing)
  }

  const toggleFilter = (category, value) => {
    setActiveFilters((prev) => ({
      ...prev,
      [category]: prev[category] === value ? undefined : value,
    }))
  }

  const clearAllFilters = () => {
    setActiveFilters({})
    setSearchQuery("")
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
                          <span className="text-sm font-medium text-gray-500">Syphon Recruiter - Candidate Filtering</span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={handlePlayPause} className="text-sm bg-violet-100 text-violet-700 px-2 py-1 rounded">
            {playing ? "Pause Demo" : "Play Demo"}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex h-[600px]">
        {/* Left Panel - Filters */}
        <div className="w-1/3 border-r border-gray-200 flex flex-col">
          {/* Search */}
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search candidates..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Filter Controls */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </h3>
              <button onClick={clearAllFilters} className="text-xs text-gray-500 hover:text-gray-700">
                Clear All
              </button>
            </div>

            {/* Active Filters */}
            {Object.keys(activeFilters).length > 0 && (
              <div className="mb-3">
                <div className="text-xs text-gray-500 mb-2">Active Filters:</div>
                <div className="flex flex-wrap gap-1">
                  {Object.entries(activeFilters).map(([key, value]) => (
                    <span
                      key={key}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-violet-100 text-violet-700 text-xs rounded-full"
                    >
                      {key}: {Array.isArray(value) ? `${value[0]}-${value[1]}` : value}
                      <X className="h-3 w-3 cursor-pointer" onClick={() => toggleFilter(key, value)} />
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Filter Options */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Experience Filter */}
            <div>
              <h4 className="font-medium mb-2 flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                Experience
              </h4>
              <div className="space-y-2">
                {filterOptions.experience.map((option, index) => (
                  <label key={index} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="experience"
                      checked={JSON.stringify(activeFilters.experience) === JSON.stringify(option.value)}
                      onChange={() => toggleFilter("experience", option.value)}
                      className="text-violet-600"
                    />
                    <span className="text-sm">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Location Filter */}
            <div>
              <h4 className="font-medium mb-2 flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Location
              </h4>
              <div className="space-y-2">
                {filterOptions.location.map((option, index) => (
                  <label key={index} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="location"
                      checked={activeFilters.location === option.value}
                      onChange={() => toggleFilter("location", option.value)}
                      className="text-violet-600"
                    />
                    <span className="text-sm">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Skills Filter */}
            <div>
              <h4 className="font-medium mb-2 flex items-center gap-2">
                <Star className="h-4 w-4" />
                Skills
              </h4>
              <div className="space-y-3">
                {/* Frontend Skills */}
                <div>
                  <div className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Frontend</div>
                  <div className="space-y-2 ml-2">
                    {filterOptions.skills.filter(skill => skill.group === "Frontend").map((option, index) => (
                      <label key={index} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="skills"
                          checked={activeFilters.skills === option.value}
                          onChange={() => toggleFilter("skills", option.value)}
                          className="text-violet-600"
                        />
                        <span className="text-sm">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Backend Skills */}
                <div>
                  <div className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Backend</div>
                  <div className="space-y-2 ml-2">
                    {filterOptions.skills.filter(skill => skill.group === "Backend").map((option, index) => (
                      <label key={index} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="skills"
                          checked={activeFilters.skills === option.value}
                          onChange={() => toggleFilter("skills", option.value)}
                          className="text-violet-600"
                        />
                        <span className="text-sm">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Cloud & DevOps Skills */}
                <div>
                  <div className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Cloud & DevOps</div>
                  <div className="space-y-2 ml-2">
                    {filterOptions.skills.filter(skill => skill.group === "Cloud").map((option, index) => (
                      <label key={index} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="skills"
                          checked={activeFilters.skills === option.value}
                          onChange={() => toggleFilter("skills", option.value)}
                          className="text-violet-600"
                        />
                        <span className="text-sm">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Design Skills */}
                <div>
                  <div className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Design</div>
                  <div className="space-y-2 ml-2">
                    {filterOptions.skills.filter(skill => skill.group === "Design").map((option, index) => (
                      <label key={index} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="skills"
                          checked={activeFilters.skills === option.value}
                          onChange={() => toggleFilter("skills", option.value)}
                          className="text-violet-600"
                        />
                        <span className="text-sm">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Data & AI Skills */}
                <div>
                  <div className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Data & AI</div>
                  <div className="space-y-2 ml-2">
                    {filterOptions.skills.filter(skill => skill.group === "Data").map((option, index) => (
                      <label key={index} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="skills"
                          checked={activeFilters.skills === option.value}
                          onChange={() => toggleFilter("skills", option.value)}
                          className="text-violet-600"
                        />
                        <span className="text-sm">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Business Skills */}
                <div>
                  <div className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Business</div>
                  <div className="space-y-2 ml-2">
                    {filterOptions.skills.filter(skill => skill.group === "Business").map((option, index) => (
                      <label key={index} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="skills"
                          checked={activeFilters.skills === option.value}
                          onChange={() => toggleFilter("skills", option.value)}
                          className="text-violet-600"
                        />
                        <span className="text-sm">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Marketing Skills */}
                <div>
                  <div className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Marketing</div>
                  <div className="space-y-2 ml-2">
                    {filterOptions.skills.filter(skill => skill.group === "Marketing").map((option, index) => (
                      <label key={index} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="skills"
                          checked={activeFilters.skills === option.value}
                          onChange={() => toggleFilter("skills", option.value)}
                          className="text-violet-600"
                        />
                        <span className="text-sm">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Salary Filter */}
            <div>
              <h4 className="font-medium mb-2 flex items-center gap-2">
                <Sliders className="h-4 w-4" />
                Salary Range
              </h4>
              <div className="space-y-2">
                {filterOptions.salary.map((option, index) => (
                  <label key={index} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="salary"
                      checked={JSON.stringify(activeFilters.salary) === JSON.stringify(option.value)}
                      onChange={() => toggleFilter("salary", option.value)}
                      className="text-violet-600"
                    />
                    <span className="text-sm">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Candidate Results */}
        <div className="w-2/3 flex flex-col">
          {/* Results Header */}
          <div className="p-4 border-b border-gray-200 bg-violet-50">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Candidate Results</h3>
                <p className="text-sm text-gray-600">
                  {filteredCandidates.length} of {allCandidates.length} candidates match your criteria
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1 text-sm bg-white border border-gray-300 px-3 py-1 rounded">
                  <Users className="h-3 w-3" />
                  Bulk Actions
                </button>
                <button className="flex items-center gap-1 text-sm bg-violet-600 text-white px-3 py-1 rounded">
                  <Plus className="h-3 w-3" />
                  Save Search
                </button>
              </div>
            </div>
          </div>

          {/* Candidate List */}
          <div className="flex-1 overflow-y-auto p-4">
            <AnimatePresence>
              {filteredCandidates.length > 0 ? (
                <div className="space-y-3">
                  {filteredCandidates.map((candidate) => (
                    <motion.div
                      key={candidate.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="border border-gray-200 rounded-lg p-4 hover:border-violet-300 hover:bg-violet-50 transition-all cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-lg">{candidate.name}</h4>
                          <p className="text-gray-600">{candidate.role}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 mb-1">
                            <Star className="h-4 w-4 text-yellow-500" />
                            <span className="font-bold text-violet-600">{candidate.score}</span>
                          </div>
                          <div className="text-xs text-gray-500">AI Score</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-3">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Briefcase className="h-4 w-4" />
                          <span>{candidate.experience} years experience</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="h-4 w-4" />
                          <span>{candidate.location}</span>
                          {candidate.remote && (
                            <span className="px-1 py-0.5 bg-green-100 text-green-700 text-xs rounded">Remote</span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <GraduationCap className="h-4 w-4" />
                          <span>{candidate.education}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="h-4 w-4" />
                          <span>Available in {candidate.availability}</span>
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="text-sm text-gray-500 mb-1">Key Skills:</div>
                        <div className="flex flex-wrap gap-1">
                          {candidate.skills.slice(0, 4).map((skill, index) => (
                            <span
                              key={index}
                              className={`px-2 py-1 text-xs rounded-full ${
                                activeFilters.skills &&
                                skill.toLowerCase().includes(String(activeFilters.skills).toLowerCase())
                                  ? "bg-violet-100 text-violet-700 font-medium"
                                  : "bg-gray-100 text-gray-700"
                              }`}
                            >
                              {skill}
                            </span>
                          ))}
                          {candidate.skills.length > 4 && (
                            <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-500">
                              +{candidate.skills.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <span className="text-gray-500">Expected Salary: </span>
                          <span className="font-medium">${candidate.salary.toLocaleString()}</span>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-3 py-1 text-xs border border-gray-300 rounded hover:bg-gray-50">
                            View Profile
                          </button>
                          <button className="px-3 py-1 text-xs bg-violet-600 text-white rounded hover:bg-violet-700">
                            Contact
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                  <Users className="h-12 w-12 text-gray-300 mb-3" />
                  <div className="text-lg font-medium mb-2">No candidates found</div>
                  <div className="text-sm text-center">
                    Try adjusting your filters or search criteria to find more candidates.
                  </div>
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* AI Suggestions */}
          {filteredCandidates.length > 0 && (
            <div className="p-4 border-t border-gray-200 bg-violet-50">
              <div className="flex items-start gap-3">
                <BrainCircuit className="h-5 w-5 text-violet-600 mt-0.5" />
                <div>
                  <div className="font-medium text-violet-700 mb-1">AI Recommendation</div>
                  <p className="text-sm text-gray-700">
                    Based on your current filters, consider expanding the experience range to 2-6 years to include{" "}
                    {allCandidates.length - filteredCandidates.length} additional qualified candidates.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-gray-50 border-t border-gray-200 p-3">
        <div className="text-center text-sm text-gray-600">
          {step === 0 && "Apply filters to narrow down candidates..."}
          {step === 1 && "Filtering by experience: 3-5 years"}
          {step === 2 && "Adding skill filter: React developers"}
          {step === 3 && "Filtering for remote candidates"}
          {step === 4 && "Searching for 'frontend' in candidate profiles"}
        </div>
      </div>
      <MobileDisclaimer />
    </div>
  )
}
