"use client"

import { Reveal } from "./ui"
import { EXPERIENCE } from "./data"

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="sec-head">
        <Reveal>
          <h2 className="sec-title">Career Experience</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="sec-intro">Where I&apos;ve built systems and created impact.</p>
        </Reveal>
      </div>

      <div className="experience-list">
        {EXPERIENCE.map((e) => (
          <Reveal key={e.company} delay={0.1}>
            <div className="experience-item">
              <div className="exp-meta">
                <span className="exp-period">{e.period}</span>
                <h3 className="exp-role">{e.role}</h3>
                <div className="exp-company">{e.company}</div>
              </div>

              <ul className="exp-points">
                {e.points.map((pt, j) => (
                  <li key={j}>{pt}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
