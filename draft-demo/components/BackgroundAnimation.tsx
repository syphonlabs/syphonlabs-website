"use client"

import { memo, useMemo } from "react"
import { motion } from "framer-motion"

// Custom hook for stable positioning using Box-Muller transform
const useStablePositions = (count: number, seed: string) => {
  return useMemo(() => {
    const positions = []
    for (let i = 0; i < count; i++) {
      // Box-Muller transform for normal distribution
      const u1 = Math.random()
      const u2 = Math.random()
      const z0 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2)
      const z1 = Math.sqrt(-2 * Math.log(u1)) * Math.sin(2 * Math.PI * u2)

      // Convert to percentage with uniform distribution
      const left = Math.max(0, Math.min(100, (z0 + 2) * 25))
      const top = Math.max(0, Math.min(100, (z1 + 2) * 25))

      positions.push({ left, top })
    }
    return positions
  }, [count, seed])
}

const BackgroundAnimation = memo(() => {
  const primaryPositions = useStablePositions(40, "primary")
  const secondaryPositions = useStablePositions(20, "secondary")

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 40 }, (_, i) => (
        <motion.div
          key={`primary-${i}`}
          className="absolute w-2 h-2 rounded-full opacity-20"
          style={{
            background: "linear-gradient(135deg, hsl(226 71% 40%), hsl(217 91% 60%))",
            left: `${primaryPositions[i]?.left || 0}%`,
            top: `${primaryPositions[i]?.top || 0}%`,
          }}
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -100, 100, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.8,
            ease: "easeInOut",
          }}
        />
      ))}

      {Array.from({ length: 20 }, (_, i) => (
        <motion.div
          key={`secondary-${i}`}
          className="absolute w-1 h-1 rounded-full bg-indigo-400/30"
          style={{
            left: `${secondaryPositions[i]?.left || 0}%`,
            top: `${secondaryPositions[i]?.top || 0}%`,
          }}
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -50, 50, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 1.2,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        className="absolute w-32 h-32 rounded-full blur-3xl top-20 left-10 bg-gradient-to-r from-violet-500/10 to-indigo-500/10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-40 h-40 rounded-full blur-3xl bottom-20 right-10 bg-gradient-to-r from-emerald-500/10 to-teal-500/10"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
})

BackgroundAnimation.displayName = "BackgroundAnimation"

export default BackgroundAnimation
