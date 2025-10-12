import type { Metadata } from "next"
import BlogIndexClient from "@/components/blog-index-client"

export const metadata: Metadata = {
  title: { absolute: "Syphon Labs | Blog" },
  description: "Exploring the latest advances in AI, sharing product insights, and uncovering how intelligent software is transforming the way we work.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Syphon Labs | Blog",
    description: "Exploring the latest advances in AI, sharing product insights, and uncovering how intelligent software is transforming the way we work.",
    url: "/blog",
    siteName: "Syphon Labs",
    images: [{ url: "/Syphon Labs Logo 2.png", width: 512, height: 512, alt: "Syphon Labs" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syphon Labs | Blog",
    description: "Exploring the latest advances in AI, sharing product insights, and uncovering how intelligent software is transforming the way we work.",
    images: ["/Syphon Labs Logo 2.png"],
  },
}

export default function BlogPage() {
  return <BlogIndexClient />
} 