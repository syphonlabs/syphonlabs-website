import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Syphon Labs | Recruiter" },
  description:
    "AI‑powered hiring: resume analysis, candidate filtering, interview scheduling, scorecards, and recruitment analytics.",
  alternates: { canonical: "/recruiter" },
  openGraph: {
    title: "Syphon Labs | Recruiter",
    description:
      "Streamline hiring with intelligent resume scanning, bias‑aware scorecards, automated scheduling, and analytics.",
    url: "/recruiter",
    siteName: "Syphon Labs",
    images: [{ url: "/Syphon Labs Logo 2.png", width: 512, height: 512, alt: "Syphon Labs" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syphon Labs | Recruiter",
    description:
      "Streamline hiring with intelligent resume scanning, bias‑aware scorecards, automated scheduling, and analytics.",
    images: ["/Syphon Labs Logo 2.png"],
  },
}

import RecruiterPageClient from "@/components/recruiter-page-client"

export default function RecruiterPage() {
  return <RecruiterPageClient />
}