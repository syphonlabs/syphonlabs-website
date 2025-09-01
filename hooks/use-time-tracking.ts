'use client'

import { useEffect, useRef } from 'react'
import { useAnalytics } from './use-analytics'

export const useTimeTracking = (sectionName: string, timeThresholds: number[] = [30, 60, 120, 300]) => {
  const { trackEvent } = useAnalytics()
  const startTime = useRef<number>(Date.now())
  const trackedThresholds = useRef<Set<number>>(new Set())
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const checkTimeSpent = () => {
      const timeSpent = Math.floor((Date.now() - startTime.current) / 1000) // seconds
      
      timeThresholds.forEach(threshold => {
        if (timeSpent >= threshold && !trackedThresholds.current.has(threshold)) {
          trackedThresholds.current.add(threshold)
          trackEvent('engagement', 'Time Spent', `${sectionName} - ${threshold}s`, threshold)
        }
      })
    }

    // Check every 10 seconds
    intervalRef.current = setInterval(checkTimeSpent, 10000)
    
    // Initial check
    checkTimeSpent()

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [sectionName, timeThresholds, trackEvent])

  return {
    timeSpent: Math.floor((Date.now() - startTime.current) / 1000),
    trackedThresholds: trackedThresholds.current
  }
}
