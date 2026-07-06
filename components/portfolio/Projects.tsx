"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Reveal } from "./ui"
import { PROJECTS } from "./data"

export default function Projects() {
  const [filter, setFilter] = useState("All")
  const [showAll, setShowAll] = useState(false)

  const categories = ["All", "AI", "Full Stack", "Hardware"]

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "All") return true
    if (filter === "AI" && (p.tags.includes("Agentic AI") || p.tags.includes("TensorFlow") || p.tags.includes("Llama 3.3") || p.tags.includes("HuggingFace"))) return true
    if (filter === "Full Stack" && (p.status.includes("Full Stack") || p.tags.includes("Next.js"))) return true
    if (filter === "Hardware" && p.status.includes("Hardware")) return true
    return false
  })

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4)

  return (
    <div className="section-alt">
      <section className="section" id="work">
        <div className="sec-head">
          <Reveal>
            <h2 className="sec-title">Featured Work</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="sec-intro">Production-grade systems with real users and measured outcomes.</p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="filter-bar">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`filter-btn ${filter === c ? "filter-btn-active" : ""}`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="projects-grid">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((p) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                key={p.name}
              >
                <div className="project-card">
                  <div className="project-header">
                    <span className="project-status">
                      <span className="project-status-dot" style={{ backgroundColor: p.accent }} />
                      {p.status}
                    </span>
                    <span className="project-index">{p.index}</span>
                  </div>

                  <h3 className="project-name">{p.name}</h3>
                  <p className="project-tagline">{p.tagline}</p>
                  <p className="project-desc">{p.desc}</p>

                  <div className="project-tags">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>

                  <div className="project-footer" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <a href={p.link} target="_blank" rel="noreferrer" className="project-link">
                      View project
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"/>
                      </svg>
                    </a>
                    {"github" in p && p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" className="project-link">
                        GitHub
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length > 4 && (
          <Reveal delay={0.3}>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
              <button className="btn btn-secondary" onClick={() => setShowAll(!showAll)}>
                {showAll ? "Show Less" : "See All Projects"}
              </button>
            </div>
          </Reveal>
        )}
      </section>
    </div>
  )
}
