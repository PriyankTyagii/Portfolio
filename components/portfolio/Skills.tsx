"use client"

import { Reveal } from "./ui"
import { TECH_STACK } from "./data"

export default function Skills() {
  return (
    <section className="section" id="stack">
      <Reveal y={18}>
        <h2 className="sec-title">Tech Stack</h2>
      </Reveal>
      <Reveal y={18} delay={0.08}>
        <div className="chips">
          {TECH_STACK.map((t) => (
            <span
              key={t.name}
              className="chip"
              style={{ "--chip": t.color } as React.CSSProperties}
            >
              {t.name}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
