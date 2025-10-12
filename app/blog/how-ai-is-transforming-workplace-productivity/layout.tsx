import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How AI is Transforming Workplace Productivity | Syphon Labs",
  description:
    "How AI reshapes collaboration and workflows with intelligent automation and predictive insights.",
  openGraph: {
    title: "How AI is Transforming Workplace Productivity | Syphon Labs",
    description:
      "AI is reshaping collaboration and workflows with intelligent automation and predictive insights.",
    url: "/blog/how-ai-is-transforming-workplace-productivity",
    siteName: "Syphon Labs",
    images: [{ url: "/Syphon Labs Logo 2.png", width: 512, height: 512, alt: "Syphon Labs" }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How AI is Transforming Workplace Productivity | Syphon Labs",
    description:
      "AI is reshaping collaboration and workflows with intelligent automation and predictive insights.",
    images: ["/Syphon Labs Logo 2.png"],
  },
  alternates: { canonical: "/blog/how-ai-is-transforming-workplace-productivity" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}



