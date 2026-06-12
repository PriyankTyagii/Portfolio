"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Reveal, Counter, TiltCard, Magnetic } from "./ui"
import { STATS, PROJECTS, EXPERIENCE, SKILLS, MARQUEE, ACHIEVEMENTS } from "./data"

/* ---------------- Section heading ---------------- */
function Heading({ kicker, title, accent, intro }: { kicker: string; title: string; accent: string; intro?: string }) {
  return (
    <div className="sec-head">
      <Reveal>
        <div className="kicker">
          <span className="kicker-line" /> {kicker}
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="sec-title">
          {title} <span className="text-aurora">{accent}</span>
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.16}>
          <p className="sec-intro">{intro}</p>
        </Reveal>
      )}
    </div>
  )
}

/* ---------------- Stats ---------------- */
export function Stats() {
  return (
    <section className="stats" id="stats">
      <div className="stats-grid">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1}>
            <div className="stat" data-cursor="hover">
              <span className="stat-num">
                <Counter value={s.value} suffix={s.suffix} />
              </span>
              <span className="stat-label">{s.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ---------------- Tech marquee ---------------- */
export function Marquee() {
  const row = [...MARQUEE, ...MARQUEE]
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        {row.map((t, i) => (
          <span key={i} className="marquee-item">
            {t} <span className="marquee-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

/* ---------------- Projects ---------------- */
export function Projects() {
  return (
    <section className="section" id="work">
      <Heading
        kicker="Featured Work"
        title="Projects that"
        accent="ship & scale"
        intro="Production-grade systems with real users and measured outcomes — not demos."
      />
      <div className="proj-grid">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 0.12}>
            <TiltCard className="proj-card" glareColor={`${p.accent}26`}>
              <div className="proj-card-inner">
                <div className="proj-top">
                  <span className="proj-index" style={{ color: p.accent }}>
                    {p.index}
                  </span>
                  <span className="proj-status">
                    <span className="badge-dot" style={{ background: p.accent, boxShadow: `0 0 8px ${p.accent}` }} />
                    {p.status}
                  </span>
                </div>
                <h3 className="proj-name">{p.name}</h3>
                <p className="proj-tagline" style={{ color: p.accent }}>
                  {p.tagline}
                </p>
                <p className="proj-desc">{p.desc}</p>
                <div className="proj-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
                <a href={p.link} target="_blank" rel="noreferrer" className="proj-link" aria-label={`Open ${p.name}`}>
                  View project <span aria-hidden>↗</span>
                </a>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ---------------- Experience (scroll-linked timeline) ---------------- */
export function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section className="section" id="experience">
      <Heading
        kicker="Career"
        title="Where I've"
        accent="built things"
        intro="From AI research at IIT Roorkee to production SaaS platforms."
      />
      <div className="timeline" ref={ref}>
        <div className="timeline-rail" aria-hidden>
          <motion.div className="timeline-rail-fill" style={{ scaleY: lineScale }} />
        </div>
        {EXPERIENCE.map((e, i) => (
          <Reveal key={e.company} delay={0.05}>
            <div className="tl-item" data-cursor="hover">
              <div className="tl-node" aria-hidden>
                <span />
              </div>
              <div className="tl-card">
                <div className="tl-head">
                  <div>
                    <h3 className="tl-role">{e.role}</h3>
                    <div className="tl-co">{e.company}</div>
                  </div>
                  <span className="tl-date">{e.period}</span>
                </div>
                <ul className="tl-points">
                  {e.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ---------------- Skills ---------------- */
export function Skills() {
  return (
    <section className="section" id="skills">
      <Heading
        kicker="Expertise"
        title="Tools I"
        accent="work with"
        intro="Full-stack, AI/ML, and cloud — end to end."
      />
      <div className="skills-grid">
        {SKILLS.map((g, i) => (
          <Reveal key={g.group} delay={(i % 3) * 0.1}>
            <div className="skill-card" data-cursor="hover">
              <div className="skill-group">{g.group}</div>
              <div className="skill-chips">
                {g.items.map((s) => (
                  <span key={s} className="chip chip-glow">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ---------------- Achievements ---------------- */
export function Achievements() {
  return (
    <section className="section" id="wins">
      <Heading
        kicker="Recognition"
        title="Wins &"
        accent="recognition"
        intro="Validated by competitions, research, and the community."
      />
      <div className="ach-grid">
        {ACHIEVEMENTS.map((a, i) => (
          <Reveal key={a.title} delay={(i % 3) * 0.1}>
            <TiltCard className="ach-card" maxTilt={6} glareColor="rgba(34,211,238,0.12)">
              <div className="ach-card-inner">
                <motion.span className="ach-icon" whileHover={{ scale: 1.25, rotate: 8 }} transition={{ type: "spring", stiffness: 300 }}>
                  {a.icon}
                </motion.span>
                <h3 className="ach-title">{a.title}</h3>
                <p className="ach-desc">{a.desc}</p>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
