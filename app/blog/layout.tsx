import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Syphon Labs | Blog" },
  description: "Latest insights on AI, product updates, and industry trends from Syphon Labs.",
  openGraph: {
    title: "Syphon Labs | Blog",
    description: "Insights on AI, product updates, and industry trends.",
    url: "/blog",
    siteName: "Syphon Labs",
    images: [{ url: "/Syphon Labs Logo 2.png", width: 512, height: 512, alt: "Syphon Labs" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syphon Labs | Blog",
    description: "Insights on AI, product updates, and industry trends.",
    images: ["/Syphon Labs Logo 2.png"],
  },
  alternates: { canonical: "/blog" },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}



