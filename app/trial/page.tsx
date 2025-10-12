import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Syphon Labs | Trial" },
  description: "Start a 14‑day free trial. No credit card required.",
  alternates: { canonical: "/trial" },
}

import TrialPageClient from "@/components/trial-page-client"

export default function TrialPage() {
  return <TrialPageClient />
}