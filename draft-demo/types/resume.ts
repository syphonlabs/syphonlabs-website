export interface SavedJob {
  id: string
  company: string
  jobTitle: string
  dateAdded: Date
  jobDescription: string
  location: string
}

export interface JobApplication {
  id: string
  company: string
  jobTitle: string
  date: Date
  status: "generated" | "applied"
  location: string
  resumeVersion: string
  coverLetterGenerated: boolean
}
