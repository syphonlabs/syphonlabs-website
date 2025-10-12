import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Syphon Labs | About" },
  description:
    "Meet Syphon Labs, an AI company building human‑centered AI for context‑aware automation. Private by design, practical in use, and focused on measurable outcomes.",
  openGraph: {
    title: "Syphon Labs | About",
    description:
      "Meet Syphon Labs, an AI company building human‑centered AI for context‑aware automation. Private by design, practical in use, and focused on measurable outcomes.",
    url: "/about",
    siteName: "Syphon Labs",
    images: [
      { url: "/Syphon Labs Logo 2.png", width: 512, height: 512, alt: "Syphon Labs" },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syphon Labs | About",
    description:
      "Meet Syphon Labs, an AI company building human‑centered AI for context‑aware automation. Private by design, practical in use, and focused on measurable outcomes.",
    images: ["/Syphon Labs Logo 2.png"],
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}


