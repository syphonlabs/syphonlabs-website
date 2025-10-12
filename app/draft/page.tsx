import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Syphon Labs | Draft" },
  description:
    "Draft analyzes your resume and a job description to generate ATS‑friendly improvements and tailored cover letters, with real‑time edits.",
  alternates: { canonical: "/draft" },
  openGraph: {
    title: "Syphon Labs | Draft",
    description:
      "ATS‑friendly resume optimization, keyword alignment, job‑match insights, and tailored cover letters with interactive AI edits.",
    url: "/draft",
    siteName: "Syphon Labs",
    images: [{ url: "/Syphon Labs Logo 2.png", width: 512, height: 512, alt: "Syphon Labs" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syphon Labs | Draft",
    description:
      "ATS‑friendly resume optimization, keyword alignment, job‑match insights, and tailored cover letters with interactive AI edits.",
    images: ["/Syphon Labs Logo 2.png"],
  },
}

import DraftPageClient from "@/components/draft-page-client"

export default function DraftPage() {
  return <DraftPageClient />
}