"use client"

import { Reveal, Counter } from "./ui"

const STATS = [
  { value: 10, suffix: "+", label: "Hackathon Wins" },
  { value: 2, suffix: "", label: "Patents Filed" },
  { value: 5, suffix: "+", label: "Production Apps" },
  { value: 17, suffix: "K+", label: "Items Indexed (AI)" },
]

export default function About() {
  return (
    <section className="section" id="about">
      <div className="sec-head">
        <Reveal>
          <h2 className="sec-title">About Me</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="sec-intro">
            From hardware FPGAs to full-stack AI — I build things that work.
          </p>
        </Reveal>
      </div>

      <div className="about-grid">
        <Reveal delay={0.15}>
          <div className="about-text">
            <p>
              I started my engineering journey deep in hardware — designing blockchain
              accelerators on Xilinx ZedBoard FPGAs and writing Verilog for
              SHA-256/AES engines. That low-level foundation taught me how to think in
              systems, optimize for performance, and build things that are robust by
              default.
            </p>
            <p>
              Today, I apply that same rigour to full-stack development. I build
              production-ready web applications with Next.js, FastAPI, and cloud-native
              stacks, and integrate AI capabilities — from fine-tuning models and
              building RAG pipelines to deploying real-time LLM features. I focus on
              shipping software that is measurably fast, reliable, and impactful.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="about-stats">
            {STATS.map((s) => (
              <div key={s.label} className="stat-card">
                <div className="stat-number">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
