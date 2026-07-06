"use client"

import { Reveal } from "./ui"
import { SKILLS } from "./data"

export default function Skills() {
  return (
    <div className="section-alt">
      <section className="section" id="skills">
        <div className="sec-head">
          <Reveal>
            <h2 className="sec-title">Technical Arsenal</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="sec-intro">Tools and technologies I use to build scalable systems.</p>
          </Reveal>
        </div>

        <div className="skills-grid">
          {SKILLS.map((g, i) => (
            <Reveal key={g.group} delay={(i % 3) * 0.1}>
              <div className="skill-card">
                <h3 className="skill-group-title">{g.group}</h3>
                <div className="skill-tags">
                  {g.items.map((s) => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
