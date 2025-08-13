import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Syphon Labs" },
}

export default function CompanyLayout({ children }: { children: React.ReactNode }) {
  return children
}


