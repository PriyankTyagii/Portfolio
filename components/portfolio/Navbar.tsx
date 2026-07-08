"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const LINKS = [
  { id: "stack", label: "stack" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact" },
]

export default function Navbar() {
  const [active, setActive] = useState("")
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: "-40% 0px -55% 0px" }
    )
    LINKS.forEach((l) => {
      const el = document.getElementById(l.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <motion.nav
        className="navbar"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.21, 0.65, 0.25, 1] }}
      >
        <div className="navbar-inner">
          <a href="#top" className="navbar-logo">
            <span className="tilde">~/</span>priyank
          </a>

          <ul className="nav-links">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={`nav-link ${active === l.id ? "nav-link-active" : ""}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="nav-resume">
              resume <span aria-hidden>↗</span>
            </a>
            <button className="mobile-toggle" aria-label="Menu" onClick={() => setOpen(!open)}>
              <span style={open ? { transform: "translateY(6.5px) rotate(45deg)" } : {}} />
              <span style={open ? { transform: "translateY(-6.5px) rotate(-45deg)" } : {}} />
            </button>
          </div>
        </div>
      </motion.nav>

      {open && (
        <motion.div
          className="mobile-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
          {LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </>
  )
}
