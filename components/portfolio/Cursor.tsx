"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

/* Custom cursor: a tight dot + a lagging aura ring. Desktop pointer devices only. */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 250, damping: 24 })
  const ringY = useSpring(y, { stiffness: 250, damping: 24 })

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches
    if (!fine) return
    setEnabled(true)
    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const t = e.target as HTMLElement
      setHovering(!!t.closest("a, button, [data-cursor='hover']"))
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [x, y])

  if (!enabled) return null
  return (
    <>
      <motion.div className="cursor-dot" style={{ x, y }} />
      <motion.div
        className="cursor-ring"
        style={{ x: ringX, y: ringY }}
        animate={{ scale: hovering ? 2.2 : 1, opacity: hovering ? 0.9 : 0.5 }}
        transition={{ duration: 0.2 }}
      />
    </>
  )
}
