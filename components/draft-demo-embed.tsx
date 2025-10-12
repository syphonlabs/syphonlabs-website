"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Play, Pause, RotateCcw, ExternalLink } from "lucide-react"
import MobileDisclaimer from "@/components/mobile-disclaimer"
import { useAnalytics } from "@/hooks/use-analytics"

export default function DraftDemoEmbed() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { trackEvent } = useAnalytics()

  useEffect(() => {
    // Simulate loading the demo
    const timer = setTimeout(() => {
      setIsLoading(false)
      trackEvent('engagement', 'Draft Demo', 'Demo Loaded', 1)
    }, 2000)

    return () => clearTimeout(timer)
  }, [trackEvent])

  if (isLoading) {
    return (
      <div className="w-full max-w-6xl mx-auto">
        <div className="relative rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
          <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center px-4">
            <div className="flex space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="text-sm font-medium text-gray-500">Draft Demo</div>
            </div>
          </div>
          <div className="h-[600px] bg-stone-50/80 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading Draft Demo...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="w-full max-w-6xl mx-auto">
        <div className="relative rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
          <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center px-4">
            <div className="flex space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="text-sm font-medium text-gray-500">Draft Demo</div>
            </div>
          </div>
          <div className="h-[600px] bg-stone-50/80 flex items-center justify-center">
            <div className="text-center">
              <p className="text-red-600 mb-4">{error}</p>
              <button 
                onClick={() => {
                  trackEvent('click', 'Draft Demo', 'Open Demo in New Tab', 1)
                  window.open('/draft-demo', '_blank')
                }}
                className="flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors mx-auto"
              >
                <ExternalLink className="w-4 h-4" />
                Open Demo in New Tab
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="relative rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
        <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center px-4">
          <div className="flex space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-400"></div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="text-sm font-medium text-gray-500">Draft Demo</div>
          </div>
        </div>
        
        {/* Embed the actual draft-demo app */}
        <div className="h-[700px] bg-stone-50/80 relative">
          <iframe
            src="/draft-demo"
            className="w-full h-full border-0"
            title="Draft Demo"
            onLoad={() => setIsLoading(false)}
            onError={() => setError("Failed to load demo")}
          />
          <MobileDisclaimer />
        </div>
      </div>
    </div>
  )
}
