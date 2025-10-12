import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Smart File Organization: Beyond Traditional Folders | Syphon Labs",
  description:
    "Intelligent systems beyond folders: context-aware categorization, dynamic workspaces, and relationship mapping.",
  openGraph: {
    title: "Smart File Organization: Beyond Traditional Folders | Syphon Labs",
    description:
      "Intelligent systems beyond folders: context-aware categorization, dynamic workspaces, and relationship mapping.",
    url: "/blog/smart-file-organization-beyond-traditional-folders",
    siteName: "Syphon Labs",
    images: [{ url: "/Syphon Labs Logo 2.png", width: 512, height: 512, alt: "Syphon Labs" }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart File Organization: Beyond Traditional Folders | Syphon Labs",
    description:
      "Intelligent systems beyond folders: context-aware categorization, dynamic workspaces, and relationship mapping.",
    images: ["/Syphon Labs Logo 2.png"],
  },
  alternates: { canonical: "/blog/smart-file-organization-beyond-traditional-folders" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}



