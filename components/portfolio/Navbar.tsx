"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { EMAIL } from "./data"

const LINKS = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
]

export default function Navbar() {
  const [active, setActive] = useState("")
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px" }
    )
    LINKS.forEach((l) => {
      const el = document.getElementById(l.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: progress }}
        aria-hidden
      />

      <div className="navbar-wrapper">
        <motion.nav
          className="navbar"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.21, 0.65, 0.25, 1] }}
        >
          <a href="#top" className="navbar-logo" aria-label="Home">
            <span className="navbar-logo-dot" />
          </a>

          <ul className="nav-links">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={`nav-link ${active === l.id ? "nav-link-active" : ""}`}
                >
                  {l.label}
                  {active === l.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="nav-pill"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="nav-cta nav-cta-desktop">
            Hire Me
          </a>

          <button
            className="mobile-toggle"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            <span style={open ? { transform: "translateY(6.5px) rotate(45deg)" } : {}} />
            <span style={open ? { transform: "translateY(-6.5px) rotate(-45deg)" } : {}} />
          </button>
        </motion.nav>
      </div>

      {open && (
        <motion.div
          className="mobile-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="nav-cta"
            onClick={() => setOpen(false)}
            style={{ marginTop: "1rem" }}
          >
            Hire Me
          </a>
        </motion.div>
      )}
    </>
  )
}
