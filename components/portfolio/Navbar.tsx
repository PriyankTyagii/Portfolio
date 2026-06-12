"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { Magnetic } from "./ui"
import { EMAIL } from "./data"

const LINKS = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "wins", label: "Wins" },
  { id: "contact", label: "Contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("")
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener("scroll", onScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    )
    LINKS.forEach((l) => {
      const el = document.getElementById(l.id)
      if (el) observer.observe(el)
    })
    return () => {
      window.removeEventListener("scroll", onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <motion.nav
        className={`nav ${scrolled ? "nav-scrolled" : ""}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.21, 0.65, 0.25, 1] }}
      >
        <a href="#top" className="nav-logo" aria-label="Back to top">
          <span className="nav-logo-mark">PT</span>
          <span className="nav-logo-cursor">_</span>
        </a>

        <ul className="nav-links">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className={active === l.id ? "active" : ""}>
                {l.label}
                {active === l.id && <motion.span layoutId="nav-pill" className="nav-pill" />}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <Magnetic strength={0.25}>
            <a href={`mailto:${EMAIL}`} className="btn btn-sm">
              Hire Me <span aria-hidden>↗</span>
            </a>
          </Magnetic>
          <button className="nav-burger" aria-label="Menu" onClick={() => setOpen(!open)}>
            <span className={open ? "x1" : ""} />
            <span className={open ? "x2" : ""} />
          </button>
        </div>
      </motion.nav>

      <motion.div
        className="nav-mobile"
        initial={false}
        animate={open ? { opacity: 1, pointerEvents: "auto" } : { opacity: 0, pointerEvents: "none" }}
        transition={{ duration: 0.25 }}
      >
        {LINKS.map((l, i) => (
          <motion.a
            key={l.id}
            href={`#${l.id}`}
            onClick={() => setOpen(false)}
            initial={false}
            animate={open ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: open ? 0.05 * i : 0 }}
          >
            {l.label}
          </motion.a>
        ))}
      </motion.div>
    </>
  )
}
