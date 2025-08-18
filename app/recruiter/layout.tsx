import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Syphon Labs | Recruiter" },
  description:
    "Syphon Recruiter — AI-powered hiring with resume analysis, intelligent matching, automated scheduling, and analytics. Private by design.",
  openGraph: {
    title: "Syphon Labs | Recruiter",
    description:
      "Hire smarter with Syphon Recruiter. Intelligent matching, bias-free screening, and automated communication, all in one streamlined platform",
    url: "/recruiter",
    siteName: "Syphon Labs",
    images: [{ url: "/Syphon Labs Logo 2.png", width: 512, height: 512, alt: "Syphon Labs" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syphon Labs | Recruiter",
    description:
      "Hire smarter with Syphon Recruiter. Intelligent matching, bias-free screening, and automated communication, all in one streamlined platform",
    images: ["/Syphon Labs Logo 2.png"],
  },
  alternates: { canonical: "/recruiter" },
}

export default function RecruiterLayout({ children }: { children: React.ReactNode }) {
  return children
}


