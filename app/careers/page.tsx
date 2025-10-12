import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Syphon Labs | Careers" },
  description: "Join Syphon Labs to build human‑centered AI that transforms work.",
  alternates: { canonical: "/careers" },
}

import CareersPageClient from "@/components/careers-page-client"

export default function CareersPage() {
  return <CareersPageClient />
}