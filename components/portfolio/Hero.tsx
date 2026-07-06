"use client"

import { Reveal } from "./ui"
import { SOCIALS } from "./data"

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <Reveal>
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Available for new opportunities
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="hero-title">
            Building software that{" "}
            <span className="hero-title-muted">scales&nbsp;&amp;&nbsp;performs.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="hero-desc">
            I&apos;m <strong>Priyank Tyagi</strong>, a Full-Stack &amp; AI Engineer.
            I specialize in building production-ready web applications, integrating
            LLMs, and architecting scalable backend systems.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">View My Work</a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-secondary">
              Resume
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="hero-socials">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
