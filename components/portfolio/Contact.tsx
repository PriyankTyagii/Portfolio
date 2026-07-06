"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Reveal, Magnetic } from "./ui"
import { SOCIALS, EMAIL, FORMSPREE } from "./data"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus("success")
        setForm({ name: "", email: "", message: "" })
      } else setStatus("error")
    } catch {
      setStatus("error")
    }
  }

  return (
    <section className="section" id="contact">
      <div className="contact-grid">
        <div>
          <Reveal>
            <h2 className="contact-title">
              Let&apos;s build <br />
              something <br />
              <span className="contact-title-muted">great.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="sec-intro" style={{ maxWidth: 400, marginBottom: "2rem" }}>
              Open to full-time roles, internships, freelance projects, and research
              collabs. I usually respond within the same day.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Magnetic>
              <a href={`mailto:${EMAIL}`} className="contact-email">
                {EMAIL}
              </a>
            </Magnetic>
            <div className="contact-social-links">
              {SOCIALS.filter((s) => !s.href.startsWith("mailto")).map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="contact-social-link">
                  <span aria-hidden>↗</span> {s.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="contact-form-card">
            <h3>Send a Message</h3>

            {status === "success" ? (
              // @ts-expect-error React 19 types clash with framer-motion
              <motion.div className="form-success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <span aria-hidden>✓</span> Message sent! I&apos;ll get back to you soon.
              </motion.div>
            ) : (
              <form className="form-stack" onSubmit={handleSubmit}>
                <div className="field-group">
                  <label htmlFor="c-name" className="field-label">Name</label>
                  <input
                    id="c-name"
                    type="text"
                    className="field-input"
                    placeholder="Your name"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  />
                </div>
                <div className="field-group">
                  <label htmlFor="c-email" className="field-label">Email</label>
                  <input
                    id="c-email"
                    type="email"
                    className="field-input"
                    placeholder="you@example.com"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  />
                </div>
                <div className="field-group">
                  <label htmlFor="c-msg" className="field-label">Message</label>
                  <textarea
                    id="c-msg"
                    rows={4}
                    className="field-input"
                    placeholder="What would you like to discuss?"
                    required
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  />
                </div>
                {status === "error" && (
                  <div className="form-error">
                    <span aria-hidden>✕</span> Something went wrong — try emailing me directly.
                  </div>
                )}
                <button type="submit" className="btn btn-primary btn-block" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
