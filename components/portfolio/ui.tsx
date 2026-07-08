"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useMotionValue, useScroll, useSpring, useTransform, animate } from "framer-motion"

/* ---------- Scroll-linked parallax wrapper ---------- */
export function Parallax({
  children,
  speed = 60,
  className,
}: {
  children?: React.ReactNode
  speed?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed])
  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  )
}

/* ---------- Mouse-follow glow (sets --mx/--my CSS vars) ---------- */
export function GlowCard({
  children,
  className,
  style,
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <div
      ref={ref}
      className={className}
      style={style}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect()
        ref.current!.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`)
        ref.current!.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`)
      }}
    >
      {children}
    </div>
  )
}

/* ---------- Highlight numbers / metrics inside a sentence ---------- */
export function Metrics({ text }: { text: string }) {
  const parts = text.split(/([+−-]?\d[\d.,]*\s?(?:%|×|x\b|K\+|K\b)?\+?)/g)
  return (
    <>
      {parts.map((p, i) =>
        /\d/.test(p) ? (
          <span key={i} className="metric">{p}</span>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  )
}

/* ---------- Scroll reveal with stagger ---------- */
export function Reveal({
  children,
  delay = 0,
  y = 36,
  className,
}: {
  children: React.ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.65, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* ---------- Magnetic hover (buttons / links) ---------- */
export function Magnetic({ children, strength = 0.35 }: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 16 })
  const sy = useSpring(y, { stiffness: 200, damping: 16 })

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy, display: "inline-block" }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect()
        x.set((e.clientX - r.left - r.width / 2) * strength)
        y.set((e.clientY - r.top - r.height / 2) * strength)
      }}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      {children}
    </motion.div>
  )
}

/* ---------- Animated counter ---------- */
export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

/* ---------- 3D tilt card with glare ---------- */
export function TiltCard({
  children,
  className,
  glareColor = "rgba(167,139,250,0.18)",
  maxTilt = 9,
}: {
  children: React.ReactNode
  className?: string
  glareColor?: string
  maxTilt?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const srx = useSpring(rx, { stiffness: 160, damping: 18 })
  const sry = useSpring(ry, { stiffness: 160, damping: 18 })
  const glareX = useMotionValue(50)
  const glareY = useMotionValue(50)
  const glare = useTransform(
    [glareX, glareY],
    ([gx, gy]) => `radial-gradient(420px circle at ${gx}% ${gy}%, ${glareColor}, transparent 65%)`
  )

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX: srx, rotateY: sry, transformStyle: "preserve-3d", transformPerspective: 900 }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect()
        const px = (e.clientX - r.left) / r.width
        const py = (e.clientY - r.top) / r.height
        ry.set((px - 0.5) * maxTilt * 2)
        rx.set(-(py - 0.5) * maxTilt * 2)
        glareX.set(px * 100)
        glareY.set(py * 100)
      }}
      onMouseLeave={() => {
        rx.set(0)
        ry.set(0)
      }}
    >
      <motion.div
        aria-hidden
        style={{ background: glare, position: "absolute", inset: 0, borderRadius: "inherit", pointerEvents: "none", zIndex: 1 }}
      />
      {children}
    </motion.div>
  )
}
