import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Building Scalable AI Solutions: Lessons Learned | Syphon Labs",
  description:
    "Insights from developing AI-powered tools that scale from individual users to enterprise teams.",
  openGraph: {
    title: "Building Scalable AI Solutions: Lessons Learned | Syphon Labs",
    description:
      "Insights from developing AI-powered tools that scale from individuals to enterprise.",
    url: "/blog/building-scalable-ai-solutions-lessons-learned",
    siteName: "Syphon Labs",
    images: [{ url: "/Syphon Labs Logo 2.png", width: 512, height: 512, alt: "Syphon Labs" }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Building Scalable AI Solutions: Lessons Learned | Syphon Labs",
    description:
      "Insights from developing AI-powered tools that scale from individuals to enterprise.",
    images: ["/Syphon Labs Logo 2.png"],
  },
  alternates: { canonical: "/blog/building-scalable-ai-solutions-lessons-learned" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}



