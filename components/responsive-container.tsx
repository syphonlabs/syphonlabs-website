"use client"

import type { ReactNode } from "react"
import { useMobile } from "@/hooks/use-mobile"

interface ResponsiveContainerProps {
  children: ReactNode
  mobileHeight?: string
  desktopHeight?: string
  className?: string
}

export default function ResponsiveContainer({
  children,
  mobileHeight = "300px",
  desktopHeight = "500px",
  className = "",
}: ResponsiveContainerProps) {
  const isMobile = useMobile()

  return (
    <div className={`w-full overflow-hidden ${className}`} style={{ height: isMobile ? mobileHeight : desktopHeight }}>
      {children}
    </div>
  )
}
