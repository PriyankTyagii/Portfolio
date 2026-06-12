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
    <section className="section contact" id="contact">
      <div className="contact-grid">
        <div>
          <Reveal>
            <div className="kicker">
              <span className="kicker-line" /> Get in Touch
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="contact-title">
              Let&apos;s build
              <br />
              something
              <br />
              <span className="text-aurora">great.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="sec-intro" style={{ margin: "0 0 2rem" }}>
              Open to full-time roles, internships, freelance projects, and research collabs.
              Usually respond the same day.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <Magnetic>
              <a href={`mailto:${EMAIL}`} className="btn btn-primary">
                {EMAIL}
              </a>
            </Magnetic>
            <div className="contact-socials">
              {SOCIALS.filter((s) => !s.href.startsWith("mailto")).map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="contact-soc-link">
                  <span aria-hidden>↗</span> {s.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} y={48}>
          <div className="contact-card">
            <div className="kicker" style={{ marginBottom: "1.5rem" }}>
              <span className="kicker-line" /> Send a Message
            </div>
            {status === "success" ? (
              <motion.div className="form-success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <span aria-hidden>✓</span> Message sent! I&apos;ll get back to you soon.
              </motion.div>
            ) : (
              <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="c-name">Name</label>
                  <input
                    id="c-name"
                    type="text"
                    placeholder="Your name"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  />
                </div>
                <div className="field">
                  <label htmlFor="c-email">Email</label>
                  <input
                    id="c-email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  />
                </div>
                <div className="field">
                  <label htmlFor="c-msg">Message</label>
                  <textarea
                    id="c-msg"
                    rows={5}
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
                  {status === "sending" ? "Sending…" : "Send Message →"}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
