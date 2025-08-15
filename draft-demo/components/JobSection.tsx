import type { SavedJob, JobApplication } from "@/types/resume"

interface JobSectionProps {
  title: string
  jobs: (SavedJob | JobApplication)[]
  type: "saved" | "applied"
  emptyMessage: string
}

const JobSection = ({ title, jobs, type, emptyMessage }: JobSectionProps) => {
  if (jobs.length === 0) {
    return (
      <div className="h-full flex flex-col">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">{title}</h2>
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-500 text-center max-w-sm">{emptyMessage}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">{title}</h2>
      <div className="flex-1 overflow-y-auto space-y-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-lg p-4 border border-gray-200 hover:border-indigo-300 transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-gray-900">{job.jobTitle}</h3>
              {type === "applied" && "status" in job && (
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    job.status === "applied" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {job.status === "applied" ? "Applied" : "Generated"}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600 mb-2">{job.company}</p>
            <p className="text-sm text-gray-500">{job.location}</p>
            <div className="mt-3 flex justify-between items-center text-xs text-gray-400">
              <span>
                {type === "saved" && "dateAdded" in job
                  ? `Saved ${job.dateAdded.toLocaleDateString()}`
                  : `Applied ${("date" in job ? job.date : new Date()).toLocaleDateString()}`}
              </span>
              {type === "applied" && "resumeVersion" in job && <span>v{job.resumeVersion}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default JobSection
