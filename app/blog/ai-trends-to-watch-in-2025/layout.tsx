import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Trends to Watch in 2025 | Syphon Labs",
  description:
    "The most promising AI technologies and trends shaping the software industry in 2025.",
  openGraph: {
    title: "AI Trends to Watch in 2025 | Syphon Labs",
    description:
      "The most promising AI technologies and trends shaping the software industry in 2025.",
    url: "/blog/ai-trends-to-watch-in-2025",
    siteName: "Syphon Labs",
    images: [{ url: "/Syphon Labs Logo 2.png", width: 512, height: 512, alt: "Syphon Labs" }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Trends to Watch in 2025 | Syphon Labs",
    description:
      "The most promising AI technologies and trends shaping the software industry in 2025.",
    images: ["/Syphon Labs Logo 2.png"],
  },
  alternates: { canonical: "/blog/ai-trends-to-watch-in-2025" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}



