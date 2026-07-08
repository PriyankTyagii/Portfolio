"use client"

import { Reveal } from "./ui"
import { WINS, CERTIFICATIONS, LINKEDIN_CERTS_URL } from "./data"

export default function Achievements() {
  return (
    <>
      <section className="section" id="wins">
        <Reveal y={18}>
          <h2 className="sec-title">Wins &amp; Recognition</h2>
        </Reveal>
        <div className="wins-list">
          {WINS.map((w, i) => (
            <Reveal key={w.title} y={14} delay={0.03 * i}>
              <div className="win-row">
                <span className="win-icon" aria-hidden>{w.icon}</span>
                <span className="win-title">{w.title}</span>
                <span className="win-desc">{w.desc}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section" id="certs">
        <Reveal y={18}>
          <h2 className="sec-title">Certifications</h2>
        </Reveal>
        <Reveal y={14} delay={0.05}>
          <div className="certs-grid">
            {CERTIFICATIONS.map((c) => (
              <div key={c.name} className="cert-row">
                <span className="cert-check" aria-hidden>✓</span>
                <span className="cert-name">{c.name}</span>
                <span className="cert-meta">{c.issuer} · {c.year}</span>
              </div>
            ))}
          </div>
          <a href={LINKEDIN_CERTS_URL} target="_blank" rel="noreferrer" className="certs-link">
            verify all on linkedin ↗
          </a>
        </Reveal>
      </section>
    </>
  )
}
