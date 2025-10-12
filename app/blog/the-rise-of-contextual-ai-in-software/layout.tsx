import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Rise of Contextual AI in Software | Syphon Labs",
  description:
    "How contextual AI makes software more intuitive by understanding intent and adapting interfaces.",
  openGraph: {
    title: "The Rise of Contextual AI in Software | Syphon Labs",
    description:
      "How contextual AI makes software more intuitive by understanding intent and adapting interfaces.",
    url: "/blog/the-rise-of-contextual-ai-in-software",
    siteName: "Syphon Labs",
    images: [{ url: "/Syphon Labs Logo 2.png", width: 512, height: 512, alt: "Syphon Labs" }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Rise of Contextual AI in Software | Syphon Labs",
    description:
      "How contextual AI makes software more intuitive by understanding intent and adapting interfaces.",
    images: ["/Syphon Labs Logo 2.png"],
  },
  alternates: { canonical: "/blog/the-rise-of-contextual-ai-in-software" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}



