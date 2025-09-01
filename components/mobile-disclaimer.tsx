"use client"

import { Monitor, Smartphone, X } from "lucide-react"
import { useState } from "react"

type MobileDisclaimerProps = {
  targetVideoId?: string
}

export default function MobileDisclaimer({ targetVideoId }: MobileDisclaimerProps) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="md:hidden absolute inset-0 z-50 bg-white/95 backdrop-blur-sm rounded-lg border-2 border-amber-200">
      <div className="flex flex-col items-center justify-center h-full p-6 text-center">
        <div className="max-w-sm">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Smartphone className="h-6 w-6 text-amber-600" />
            <h3 className="font-bold text-lg text-amber-800">Mobile Demo Notice</h3>
          </div>
          <p className="text-sm text-amber-700 leading-relaxed mb-4">
            Our demos are designed for desktop first, so on mobile we showcase curated video walk-throughs that capture the full experience.
          </p>
          <div className="flex items-center justify-center gap-2 mb-4 text-xs text-amber-600">
            <Monitor className="h-4 w-4" />
            <span>Best experience on desktop or tablet</span>
          </div>
          <button
            onClick={() => {
              setIsVisible(false)
              if (targetVideoId) {
                const el = document.getElementById(targetVideoId) as HTMLVideoElement | null
                if (el) {
                  try {
                    el.currentTime = 0
                    el.muted = false
                    void el.play()
                  } catch (_) {}
                }
              }
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors text-sm font-medium"
          >
            <X className="h-4 w-4" />
            Dismiss
          </button>
        </div>
      </div>
    </div>
  )
}



