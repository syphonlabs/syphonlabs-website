import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Syphon Labs | Careers",
  description: "Join our team and help build the future of AI-powered productivity tools. We're looking for passionate AI Engineers and Marketing Interns.",
  openGraph: {
    title: "Syphon Labs | Careers",
    description: "Join our team and help build the future of AI-powered productivity tools. We're looking for passionate AI Engineers and Marketing Interns.",
    url: "/careers",
    siteName: "Syphon Labs",
    images: [{ url: "/Syphon Labs Logo 2.png", width: 512, height: 512, alt: "Syphon Labs" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syphon Labs | Careers",
    description: "Join our team and help build the future of AI-powered productivity tools. We're looking for passionate AI Engineers and Marketing Interns.",
    images: ["/Syphon Labs Logo 2.png"],
  },
  alternates: { canonical: "/careers" },
}

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children
}

