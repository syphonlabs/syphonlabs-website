import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Syphon Labs | Contact" },
  description: "Contact Syphon Labs for questions, partnerships, press, and support.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Syphon Labs | Contact",
    description: "Contact Syphon Labs for questions, partnerships, press, and support.",
    url: "/contact",
    siteName: "Syphon Labs",
    images: [{ url: "/Syphon Labs Logo 2.png", width: 512, height: 512, alt: "Syphon Labs" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syphon Labs | Contact",
    description: "Contact Syphon Labs for questions, partnerships, press, and support.",
    images: ["/Syphon Labs Logo 2.png"],
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}


