"use client"

import { Reveal } from "./ui"
import { PROJECTS } from "./data"

export default function Projects() {
  return (
    <section className="section" id="projects">
      <Reveal y={18}>
        <h2 className="sec-title">Featured Projects</h2>
      </Reveal>

      <div className="projects-list">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.name} y={20} delay={0.04 * (i % 3)}>
            <div
              className="project-card"
              style={{ "--project-accent": p.accent } as React.CSSProperties}
            >
              <div className="project-head">
                <span className="project-name">{p.name}</span>
                <span className="project-status">
                  <span className="project-status-dot" />
                  {p.status}
                </span>
              </div>

              <p className="project-desc">{p.desc}</p>

              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={p.link} target="_blank" rel="noreferrer" className="project-link">
                  view ↗
                </a>
                {"github" in p && p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className="project-link">
                    github ↗
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
