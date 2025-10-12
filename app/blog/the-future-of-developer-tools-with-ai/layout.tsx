import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Future of Developer Tools with AI | Syphon Labs",
  description:
    "How AI is revolutionizing developer tools: intelligent completion, automated review, and smart refactoring.",
  openGraph: {
    title: "The Future of Developer Tools with AI | Syphon Labs",
    description:
      "How AI is revolutionizing developer tools: intelligent completion, automated review, and smart refactoring.",
    url: "/blog/the-future-of-developer-tools-with-ai",
    siteName: "Syphon Labs",
    images: [{ url: "/Syphon Labs Logo 2.png", width: 512, height: 512, alt: "Syphon Labs" }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Future of Developer Tools with AI | Syphon Labs",
    description:
      "How AI is revolutionizing developer tools: intelligent completion, automated review, and smart refactoring.",
    images: ["/Syphon Labs Logo 2.png"],
  },
  alternates: { canonical: "/blog/the-future-of-developer-tools-with-ai" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}



