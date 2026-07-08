"use client"

import { Reveal, Metrics } from "./ui"
import { EXPERIENCE } from "./data"

export default function Experience() {
  return (
    <section className="section" id="experience">
      <Reveal y={18}>
        <h2 className="sec-title">Experience</h2>
      </Reveal>

      <div className="exp-list">
        {EXPERIENCE.map((e, i) => (
          <Reveal key={e.company} y={20} delay={0.05 * (i % 2)}>
            <div className="exp-item">
              <div className="exp-head">
                <span className="exp-role">{e.role}</span>
                <span className="exp-period">{e.period}</span>
              </div>
              <div className="exp-company">
                {e.company}
                <span className="dot">•</span>
                {e.location}
              </div>
              <ul className="exp-points">
                {e.points.map((pt, j) => (
                  <li key={j}>
                    <span><Metrics text={pt} /></span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
