"use client"

import dynamic from "next/dynamic"

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.div })),
  { ssr: false }
)

const MotionSection = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.section })),
  { ssr: false }
)

const MotionH1 = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.h1 })),
  { ssr: false }
)

const MotionP = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.p })),
  { ssr: false }
)

const MotionButton = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.button })),
  { ssr: false }
)

export { MotionDiv as motion, MotionSection, MotionH1, MotionP, MotionButton }
