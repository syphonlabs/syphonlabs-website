import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Test Page",
  description: "Test page to debug client components",
}

import TestClient from "@/components/test-client"

export default function TestPage() {
  return (
    <div>
      <h1>Test Page</h1>
      <TestClient />
    </div>
  )
}
