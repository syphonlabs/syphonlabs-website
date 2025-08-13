import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Syphon Labs | Draft" },
  description:
    "Syphon Draft — AI resume and cover letter optimization. ATS-friendly formatting, keyword alignment, tailored letters, and real-time edits.",
  openGraph: {
    title: "Syphon Labs | Draft",
    description:
      "AI resume and cover letter optimization with ATS-friendly formatting and tailored outputs.",
    url: "/draft",
    siteName: "Syphon Labs",
    images: [{ url: "/Syphon Labs Logo 2.png", width: 512, height: 512, alt: "Syphon Labs" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syphon Labs | Draft",
    description:
      "AI resume and cover letter optimization with ATS-friendly formatting and tailored outputs.",
    images: ["/Syphon Labs Logo 2.png"],
  },
  alternates: { canonical: "/draft" },
}

export default function DraftLayout({ children }: { children: React.ReactNode }) {
  return children
}


