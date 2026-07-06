"use client"

import { Reveal } from "./ui"
import { ACHIEVEMENTS } from "./data"

export default function Achievements() {
  return (
    <section className="section" id="wins">
      <div className="sec-head">
        <Reveal>
          <h2 className="sec-title">Wins &amp; Recognition</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="sec-intro">Validated by competitions, research, and the community.</p>
        </Reveal>
      </div>

      <div className="achievements-grid">
        {ACHIEVEMENTS.map((a, i) => (
          <Reveal key={a.title} delay={(i % 3) * 0.1}>
            <div className="achievement-card">
              <span className="achievement-icon">{a.icon}</span>
              <h3 className="achievement-title">{a.title}</h3>
              <p className="achievement-desc">{a.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
