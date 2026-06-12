"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Magnetic } from "./ui"
import { SOCIALS } from "./data"

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false })

const ROLES = ["Full-Stack Developer", "AI / ML Engineer", "Hackathon Champion", "Systems Builder"]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.21, 0.65, 0.25, 1] as const } },
}

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 2600)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="hero" id="top">
      <div className="hero-scene" aria-hidden>
        <Scene3D />
      </div>
      <div className="hero-vignette" aria-hidden />

      <motion.div className="hero-content" variants={container} initial="hidden" animate="show">
        <motion.div variants={item} className="badge">
          <span className="badge-dot" /> Available for opportunities
        </motion.div>

        <motion.h1 variants={item} className="hero-title">
          Priyank
          <br />
          <span className="text-aurora">Tyagi</span>
        </motion.h1>

        <motion.div variants={item} className="hero-role" aria-live="polite">
          <span className="hero-role-prefix">{"//"} </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIdx}
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -18, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="hero-role-word"
            >
              {ROLES[roleIdx]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.p variants={item} className="hero-desc">
          I build scalable, AI-integrated platforms — from FPGA-accelerated blockchains to
          production RAG systems. IIT InnoWave Winner · Google Gemini Ambassador (top 0.003%).
        </motion.p>

        <motion.div variants={item} className="hero-ctas">
          <Magnetic>
            <a href="#work" className="btn btn-primary">
              Explore Work <span aria-hidden>→</span>
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#contact" className="btn btn-ghost">
              Let&apos;s Talk
            </a>
          </Magnetic>
        </motion.div>

        <motion.div variants={item} className="hero-socials">
          {SOCIALS.map((s) => (
            <Magnetic key={s.label} strength={0.5}>
              <a href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="social-pill" aria-label={s.label}>
                {s.short}
              </a>
            </Magnetic>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#stats"
        className="hero-scroll"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <span className="hero-scroll-track">
          <motion.span
            className="hero-scroll-thumb"
            animate={{ y: [0, 14, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          />
        </span>
        scroll
      </motion.a>
    </section>
  )
}
