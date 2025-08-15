"use client"

import { useEffect, useState } from "react"
import { useMobile } from "@/hooks/use-mobile"

export default function MobileDisclaimer() {
  const isMobile = useMobile()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isMobile) return
    try {
      const seen = sessionStorage.getItem("mobile_disclaimer_seen")
      if (!seen) {
        setIsVisible(true)
      }
    } catch (_) {
      // ignore storage errors
      setIsVisible(true)
    }
  }, [isMobile])

  const handleDismiss = () => {
    setIsVisible(false)
    try {
      sessionStorage.setItem("mobile_disclaimer_seen", "1")
    } catch (_) {
      // ignore
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed top-0 inset-x-0 z-50 px-3 pt-3 sm:px-4">
      <div className="mx-auto max-w-3xl rounded-2xl border border-violet-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-xl">
        <div className="flex items-start gap-3 p-4">
          <div className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600" />
          <div className="flex-1 text-sm text-gray-700 leading-relaxed">
            For the best experience, view Syphon Labs on a wider screen. Our interactive demos are optimized for desktops and tablets.
          </div>
          <button
            onClick={handleDismiss}
            className="shrink-0 inline-flex items-center rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow hover:from-violet-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-violet-400"
            aria-label="Dismiss mobile disclaimer"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  )
}



