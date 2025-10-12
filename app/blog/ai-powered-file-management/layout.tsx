import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Future of AI-Powered File Management | Syphon Labs",
  description:
    "How AI transforms file organization with intelligent categorization, predictive management, and natural language search.",
  openGraph: {
    title: "The Future of AI-Powered File Management | Syphon Labs",
    description:
      "AI is transforming file management with intelligent categorization, predictive organization, and natural language search.",
    url: "/blog/ai-powered-file-management",
    siteName: "Syphon Labs",
    images: [{ url: "/Syphon Labs Logo 2.png", width: 512, height: 512, alt: "Syphon Labs" }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Future of AI-Powered File Management | Syphon Labs",
    description:
      "AI is transforming file management with intelligent categorization, predictive organization, and natural language search.",
    images: ["/Syphon Labs Logo 2.png"],
  },
  alternates: { canonical: "/blog/ai-powered-file-management" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}



