"use client"

import { useEffect, useRef, useState } from "react"

export function MouseGlow() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    let hasMoved = false

    const moveCursor = (e: MouseEvent) => {
      if (!hasMoved) {
        hasMoved = true
        cursor.style.opacity = "1"
      }
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return
      const isInteractive = !!target.closest(
        "a, button, [role='button'], input[type='submit'], input[type='button'], .cursor-pointer"
      )
      setExpanded(isInteractive)
    }

    const handleMouseEnter = () => {
      if (hasMoved) {
        cursor.style.opacity = "1"
      }
    }

    const handleMouseLeave = () => {
      cursor.style.opacity = "0"
    }

    window.addEventListener("mousemove", moveCursor, { passive: true })
    window.addEventListener("mouseover", handleMouseOver, { passive: true })
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${expanded ? "expand" : ""}`}
      style={{ opacity: 0 }}
      aria-hidden="true"
    />
  )
}
