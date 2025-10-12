'use client'

import { useEffect, useRef } from 'react'
import { useAnalytics } from './use-analytics'

export const useScrollTracking = (elementId: string, thresholds: number[] = [25, 50, 75, 100]) => {
  const { trackEvent } = useAnalytics()
  const trackedThresholds = useRef<Set<number>>(new Set())

  useEffect(() => {
    const element = document.getElementById(elementId)
    if (!element) return

    const handleScroll = () => {
      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementTop = rect.top
      const elementHeight = rect.height
      
      // Calculate how much of the element is visible
      const visibleHeight = Math.min(windowHeight, elementTop + elementHeight) - Math.max(0, elementTop)
      const scrollPercentage = Math.round((visibleHeight / elementHeight) * 100)

      // Track when user reaches each threshold
      thresholds.forEach(threshold => {
        if (scrollPercentage >= threshold && !trackedThresholds.current.has(threshold)) {
          trackedThresholds.current.add(threshold)
          trackEvent('engagement', 'Scroll Depth', `${elementId} - ${threshold}%`, threshold)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial state

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [elementId, thresholds, trackEvent])

  return trackedThresholds.current
}
