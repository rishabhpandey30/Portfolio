"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    // Animate counter from 0 → 100 over ~2.2 s with easing
    let start: number | null = null
    const duration = 2200

    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const elapsed = timestamp - start
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * 100))

      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        setCount(100)
        // Short pause at 100, then slide away
        setTimeout(() => {
          setDone(true)
          setTimeout(onComplete, 900)   // let exit animation finish
        }, 350)
      }
    }

    const raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#080808]"
        >
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase text-center select-none"
            style={{ letterSpacing: "-0.02em" }}
          >
            Rishabh Pandey
          </motion.h1>

          {/* Progress row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8 flex items-center gap-5 w-64 sm:w-80"
          >
            {/* Left line */}
            <div className="flex-1 h-px bg-white/20 relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-white/70"
                style={{ width: `${count}%` }}
              />
            </div>

            {/* Counter */}
            <span
              className="text-[11px] font-mono tabular-nums text-white/50 w-8 text-center"
            >
              {String(count).padStart(3, "0")}
            </span>

            {/* Right line */}
            <div className="flex-1 h-px bg-white/20 relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 right-0 bg-white/70"
                style={{ width: `${100 - count}%` }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
